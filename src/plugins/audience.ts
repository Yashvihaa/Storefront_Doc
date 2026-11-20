import path from 'path';
import type {LoadContext, Plugin} from '@docusaurus/types';
import {ACCESS_STORAGE_KEY, SUPER_ADMIN_PATHS} from '../audience';

/**
 * Shows tenants only the pages in their admin menu (see src/audience.ts).
 *
 * - A script in <head> sets <html data-audience="tenant"> straight away, then
 *   decrypts the link's bare `?<token>` query (or the token kept from an earlier link) and
 *   switches to "super-admin" only when the token decrypts, is unexpired and
 *   says so. The token is removed from the address bar so it is not shared.
 * - A <style> built from SUPER_ADMIN_PATHS hides links to super-admin pages in
 *   the previous / next buttons, on category card pages and in the footer.
 * - Search results for super-admin pages are dropped for tenants, by swapping
 *   the search plugin's worker client for src/search/searchByWorker.js.
 *
 * The key and IV come from ENCRYPT_DECRYPT_KEY / ENCRYPT_DECRYPT_IV (or the
 * NEXT_PUBLIC_ names) in this repo's env file, loaded in docusaurus.config.ts.
 */
const HEX = /^[0-9a-f]+$/i;

const accessScript = (keyHex: string, ivHex: string) => `(function(){
var d=document.documentElement;d.setAttribute('data-audience','tenant');
var K='${ACCESS_STORAGE_KEY}',token=null;
try{
  try{sessionStorage.removeItem(K);localStorage.removeItem('sf-docs-audience');localStorage.removeItem('sf-docs-access-decrypted');}catch(e){}
  var l=window.location,parts=l.search?l.search.slice(1).split('&'):[],rest=[],p=null;
  for(var i=0;i<parts.length;i++){if(!p&&parts[i]&&parts[i].indexOf('=')<0){p=decodeURIComponent(parts[i]);}else if(parts[i]){rest.push(parts[i]);}}
  if(p){localStorage.setItem(K,p);history.replaceState(history.state,'',l.pathname+(rest.length?'?'+rest.join('&'):'')+l.hash);}
  token=localStorage.getItem(K);
}catch(e){}
var keyHex='${keyHex}',ivHex='${ivHex}';
if(!token||!keyHex||!ivHex||!window.crypto||!window.crypto.subtle)return;
d.setAttribute('data-audience-pending','');
function done(){d.removeAttribute('data-audience-pending');}
function bytes(h){var a=new Uint8Array(h.length/2);for(var i=0;i<a.length;i++)a[i]=parseInt(h.substr(i*2,2),16);return a;}
function unbase64(s){var b=atob(s),a=new Uint8Array(b.length);for(var i=0;i<b.length;i++)a[i]=b.charCodeAt(i);return a;}
function forget(){try{localStorage.removeItem(K);}catch(e){}}
crypto.subtle.importKey('raw',bytes(keyHex),{name:'AES-CBC'},false,['decrypt'])
  .then(function(key){return crypto.subtle.decrypt({name:'AES-CBC',iv:bytes(ivHex)},key,unbase64(token));})
  .then(function(plain){
    var data=JSON.parse(new TextDecoder().decode(plain));
    if(data&&typeof data.exp==='number'&&data.exp>Date.now()&&(data.audience==='super-admin'||data.audience==='tenant')){d.setAttribute('data-audience',data.audience);}
    else{forget();}
  })
  .catch(forget)
  .then(done,done);
})();`;

const TENANT = `html:not([data-audience='super-admin'])`;

const linkSelectors = (prefix: string) => [`[href="${prefix}"]`, `[href^="${prefix}#"]`, `[href^="${prefix}/"]`];

const AUDIENCE_STYLE = SUPER_ADMIN_PATHS.flatMap(linkSelectors)
  .flatMap(href => [
    `${TENANT} .pagination-nav__link${href}`,
    `${TENANT} article:has(> a.card${href})`,
    `${TENANT} .footer__item:has(> a${href})`,
  ])
  .join(',\n')
  .concat(' {\n  display: none !important;\n}');

const SEARCH_WORKER_WRAPPER = path.resolve(__dirname, '../search/searchByWorker.js');

export default function audiencePlugin(_context: LoadContext): Plugin {
  const keyHex = (process.env.ENCRYPT_DECRYPT_KEY ?? process.env.NEXT_PUBLIC_ENCRYPT_DECRYPT_KEY ?? '').trim();
  const ivHex = (process.env.ENCRYPT_DECRYPT_IV ?? process.env.NEXT_PUBLIC_ENCRYPT_DECRYPT_IV ?? '').trim();
  const usable = HEX.test(keyHex) && HEX.test(ivHex) && [32, 48, 64].includes(keyHex.length) && ivHex.length === 32;
  if (!usable) {
    console.warn('[storefront-audience] No valid ENCRYPT_DECRYPT_KEY / ENCRYPT_DECRYPT_IV in the env file: every reader gets the tenant view.');
  }

  return {
    name: 'storefront-audience',

    injectHtmlTags() {
      return {
        headTags: [
          {tagName: 'script', innerHTML: accessScript(usable ? keyHex : '', usable ? ivHex : '')},
          {tagName: 'style', attributes: {'data-audience-style': 'true'}, innerHTML: AUDIENCE_STYLE},
        ],
      };
    },

    configureWebpack(_config, _isServer, utils) {
      const {NormalModuleReplacementPlugin} = utils.currentBundler.instance;

      return {
        plugins: [
          // Only the search plugin's own imports are swapped; the wrapper imports the original by its full path.
          new NormalModuleReplacementPlugin(/[\\/]?searchByWorker(\.js)?$/, (resource: {context?: string; request: string}) => {
            if (resource.context && /docusaurus-search-local/.test(resource.context)) {
              resource.request = SEARCH_WORKER_WRAPPER;
            }
          }),
        ],
      };
    },
  };
}
