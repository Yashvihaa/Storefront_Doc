/**
 * Who is reading the docs: a client's admin ("tenant") or a TCC Tech super admin.
 *
 * The admin panel's View Documentation button adds the token as the link's bare
 * query (`/dashboard?<token>`): `{ audience }` encrypted (AES-CBC) with the admin's
 * NEXT_PUBLIC_ENCRYPT_DECRYPT_KEY / _IV. A script in the page head (see
 * src/plugins/audience.ts) decrypts it with the same key and IV, read from this
 * repo's env file, and sets `<html data-audience="…">`. A missing or wrong token means tenant.
 */

export type Audience = 'tenant' | 'super-admin';

/**
 * Where the encrypted token is kept (localStorage), so the view holds across pages and in new tabs
 * (for example Ctrl+click on a sidebar link). It is decrypted again on every page load, so editing it
 * cannot unlock anything. Each View Documentation click replaces it; it has no expiry.
 */
export const ACCESS_STORAGE_KEY = 'sf-docs-access';
/** Class that hides an element unless the reader is a super admin. */
export const SUPER_ADMIN_CLASS = 'sf-super-admin';

/** Class that hides an element from super admins, for a tenant page with its own super-admin version. */
export const TENANT_ONLY_CLASS = 'sf-tenant-only';

/**
 * Pages that appear only in the super admin portal's menu
 * (`is_for_super_admin = 1` in the admin menu sheet). A path also covers every
 * page below it, so the Masters entry covers all master pages.
 * Keep this in step with the `superAdmin(...)` items in sidebars.ts.
 */
export const SUPER_ADMIN_PATHS = [
  '/super-admin-dashboard',
  '/enquiry',
  '/error-logs',
  '/product-management/masters',
  '/settings/margin-cost-center/labour-management',
  '/settings/sku-builder',
  '/settings/email-template',
  '/settings/invoice-template',
  '/settings/audit-log',
];

/** Whether a page URL (with or without a hash or query) is a super-admin page. */
export const isSuperAdminPath = (url: string | undefined | null): boolean => {
  if (!url) return false;
  const path = url.split(/[?#]/)[0].replace(/\/+$/, '') || '/';

  return SUPER_ADMIN_PATHS.some(prefix => path === prefix || path.startsWith(`${prefix}/`));
};

/** The current reader, read from `<html data-audience>` (tenant until set). */
export const currentAudience = (): Audience =>
  typeof document !== 'undefined' && document.documentElement.getAttribute('data-audience') === 'super-admin'
    ? 'super-admin'
    : 'tenant';
