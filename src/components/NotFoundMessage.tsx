import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';

type QuickLink = {to: string; title: string; description: string; icon: ReactNode};

const iconProps = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

// Pages every reader can open (tenant pages only), so the links never lead to another 404.
const QUICK_LINKS: QuickLink[] = [
  {
    to: '/dashboard',
    title: 'Dashboard',
    description: 'Orders, revenue and store health at a glance.',
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="7" height="9" rx="1.5" />
        <rect x="14" y="3" width="7" height="5" rx="1.5" />
        <rect x="14" y="12" width="7" height="9" rx="1.5" />
        <rect x="3" y="16" width="7" height="5" rx="1.5" />
      </svg>
    ),
  },
  {
    to: '/order-management/orders',
    title: 'Orders',
    description: 'Track orders and compare manufacturing costs.',
    icon: (
      <svg {...iconProps}>
        <path d="M6 2h12l2 4v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z" />
        <path d="M4 6h16" />
        <path d="M9 11h6M9 15h4" />
      </svg>
    ),
  },
  {
    to: '/product-management/all-products',
    title: 'All Products',
    description: 'Add, edit and price your product catalog.',
    icon: (
      <svg {...iconProps}>
        <path d="M6 3h12l3 6-9 12L3 9z" />
        <path d="M3 9h18M9 3l3 18M15 3l-3 18" />
      </svg>
    ),
  },
  {
    to: '/settings',
    title: 'Settings',
    description: 'Margins, metal rates, tax and currency.',
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
      </svg>
    ),
  },
];

/** The 404 message: used by the Page Not Found page and by super-admin pages opened by a tenant. */
export default function NotFoundMessage(): React.JSX.Element {
  return (
    <section className="sf-not-found" aria-labelledby="sf-not-found-title">
      <div className="sf-not-found__hero">
        <span className="sf-not-found__badge">Error 404</span>
        <p className="sf-not-found__code" aria-hidden="true">
          404
        </p>
        <h1 id="sf-not-found-title" className="sf-not-found__title">
          This page could not be found
        </h1>
        <p className="sf-not-found__text">
          The page you are looking for does not exist, or it may have been moved. Check the address, or pick up from
          one of the pages below.
        </p>
        <div className="sf-not-found__actions">
          <Link className="sf-not-found__button sf-not-found__button--primary" to="/">
            Back to Introduction
          </Link>
          <Link className="sf-not-found__button" to="/dashboard">
            Open Dashboard
          </Link>
        </div>
        <p className="sf-not-found__hint">
          Or press <kbd>Ctrl</kbd> <kbd>K</kbd> to search the docs.
        </p>
      </div>

      <div className="sf-not-found__links">
        <p className="sf-not-found__label">Popular pages</p>
        <div className="sf-not-found__grid">
          {QUICK_LINKS.map(link => (
            <Link key={link.to} to={link.to} className="sf-not-found__card">
              <span className="sf-not-found__icon">{link.icon}</span>
              <span className="sf-not-found__card-title">{link.title}</span>
              <span className="sf-not-found__card-text">{link.description}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
