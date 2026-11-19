import MDXComponents from '@theme-original/MDXComponents';
import SuperAdminOnly from '@site/src/components/SuperAdminOnly';

// Adds <SuperAdminOnly> to every page without an import.
export default {
  ...MDXComponents,
  SuperAdminOnly,
};
