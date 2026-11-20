import React, {useEffect} from 'react';
import NotFoundMessage from './NotFoundMessage';
import {currentAudience} from '../audience';

const NOT_FOUND_TITLE = 'Page Not Found | Storefront Docs';

/**
 * Shown in place of a super-admin page when a tenant opens it: the same 404 as an unknown
 * address, so the page does not reveal that it exists (styles in custom.css). The tab title
 * follows the reader too, and goes back to the page's own title once a super admin is confirmed.
 */
export default function AudienceNotice(): React.JSX.Element {
  useEffect(() => {
    const html = document.documentElement;
    let pageTitle = document.title;
    const apply = () => {
      if (currentAudience() === 'super-admin') {
        if (document.title === NOT_FOUND_TITLE) document.title = pageTitle;
      } else if (document.title !== NOT_FOUND_TITLE) {
        pageTitle = document.title;
        document.title = NOT_FOUND_TITLE;
      }
    };
    apply();
    const observer = new MutationObserver(apply);
    observer.observe(html, {attributes: true, attributeFilter: ['data-audience']});

    return () => {
      observer.disconnect();
      if (document.title === NOT_FOUND_TITLE) document.title = pageTitle;
    };
  }, []);

  return (
    <div className="sf-audience-notice">
      <NotFoundMessage />
    </div>
  );
}
