import React from 'react';
import Layout from '@theme-original/DocItem/Layout';
import type LayoutType from '@theme/DocItem/Layout';
import type {WrapperProps} from '@docusaurus/types';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import AudienceNotice from '@site/src/components/AudienceNotice';
import {isSuperAdminPath} from '@site/src/audience';

type Props = WrapperProps<typeof LayoutType>;

// A super-admin page shows a notice instead of its content when a tenant opens it (styles in custom.css).
export default function LayoutWrapper(props: Props): React.JSX.Element {
  const {metadata} = useDoc();

  if (!isSuperAdminPath(metadata.permalink)) return <Layout {...props} />;

  return (
    <div className="sf-super-admin-page">
      <AudienceNotice />
      <Layout {...props} />
    </div>
  );
}
