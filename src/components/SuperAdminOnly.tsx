import React, {type ReactNode} from 'react';
import {SUPER_ADMIN_CLASS} from '../audience';

/**
 * Wraps part of a page that only TCC Tech super admins see; tenants never see it.
 * Available in every page as <SuperAdminOnly>…</SuperAdminOnly> (src/theme/MDXComponents.tsx).
 * Leave a blank line after the opening tag and before the closing tag so Markdown inside still renders.
 */
export default function SuperAdminOnly({children}: {children: ReactNode}): React.JSX.Element {
  return <div className={SUPER_ADMIN_CLASS}>{children}</div>;
}
