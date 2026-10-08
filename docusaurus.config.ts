import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Storefront Docs',
  tagline: 'Guides for the Storefront admin panel',
  favicon: 'img/logo.png',

  future: {
    v4: true,
  },

  // Change to the real docs domain before deploying.
  url: 'https://storefront-docs.example.com',
  baseUrl: '/',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {tagName: 'link', attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'}},
    {tagName: 'link', attributes: {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous'}},
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  ],

  presets: [
    [
      'classic',
      {
        // Docs-only site: the docs are the homepage.
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // Offline search: the index is built from the docs at build time, no external service.
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchResultLimits: 8,
        searchBarShortcutHint: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    metadata: [
      {name: 'keywords', content: 'storefront, admin panel, jewelry configurator, documentation'},
      {name: 'theme-color', content: '#0f1115'},
    ],
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
    navbar: {
      title: 'Storefront Docs',
      logo: {
        alt: 'TCC Store logo',
        src: 'img/logo.png',
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'dropdown',
          label: 'Modules',
          position: 'left',
          items: [
            {label: 'Dashboard', to: '/dashboard'},
            {label: 'Analytics', to: '/analytics'},
            {label: 'Subscription & Billing', to: '/subscription'},
            {label: 'Order Management', to: '/order-management'},
            {label: 'Customer Management', to: '/customer-management'},
            {label: 'Product Management', to: '/product-management'},
            {label: 'Sales Funnel', to: '/sales-funnel'},
            {label: 'Settings', to: '/settings'},
            {label: 'Configurators', to: '/configurators'},
            {label: 'Roles & Permission', to: '/roles-permission'},
            {label: 'Location Master', to: '/location-master'},
          ],
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          to: '/#getting-started',
          label: 'Get Started',
          position: 'right',
          className: 'navbar-cta',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'TCC Store logo',
        src: 'img/logo.png',
        href: '/',
        width: 56,
        height: 56,
      },
      links: [
        {
          title: 'Getting Started',
          items: [
            {label: 'Introduction', to: '/'},
            {label: 'Dashboard', to: '/dashboard'},
            {label: 'Analytics', to: '/analytics'},
            {label: 'Subscription & Billing', to: '/subscription'},
          ],
        },
        {
          title: 'Store Operations',
          items: [
            {label: 'Orders', to: '/order-management/orders'},
            {label: 'Customers', to: '/customer-management/customers'},
            {label: 'Cart Products', to: '/sales-funnel/cart-products'},
            {label: 'Customer Reports', to: '/customer-management/customer-reports'},
          ],
        },
        {
          title: 'Catalog & Pricing',
          items: [
            {label: 'All Products', to: '/product-management/all-products'},
            {label: 'Masters', to: '/product-management/masters'},
            {label: 'Configurator Products', to: '/configurator-products'},
            {label: 'Diamond Group Master', to: '/product-management/diamond-group-master'},
            {label: 'Metal Rate Settings', to: '/settings/metal-rate-setting'},
          ],
        },
        {
          title: 'Administration',
          items: [
            {label: 'Roles', to: '/roles-permission/roles'},
            {label: 'User Management', to: '/roles-permission/user-management'},
            {label: 'Stores', to: '/roles-permission/stores'},
            {label: 'Location Master', to: '/location-master'},
            {label: 'Audit Log', to: '/settings/audit-log'},
          ],
        },
      ],
      copyright: `<div class="footer__brand">Storefront Docs</div>
        <div class="footer__tagline">Guides for the TCC Storefront admin panel</div>
        <div>© ${new Date().getFullYear()} TechCore Creations. All rights reserved.</div>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
