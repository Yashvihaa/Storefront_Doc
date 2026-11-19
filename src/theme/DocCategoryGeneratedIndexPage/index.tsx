import React from 'react';
import DocCategoryGeneratedIndexPage from '@theme-original/DocCategoryGeneratedIndexPage';
import type DocCategoryGeneratedIndexPageType from '@theme/DocCategoryGeneratedIndexPage';
import type {WrapperProps} from '@docusaurus/types';
import AudienceNotice from '@site/src/components/AudienceNotice';
import {isSuperAdminPath} from '@site/src/audience';

type Props = WrapperProps<typeof DocCategoryGeneratedIndexPageType>;

// A super-admin category page (for example Masters) shows the notice instead of its cards when a tenant opens it.
export default function DocCategoryGeneratedIndexPageWrapper(props: Props): React.JSX.Element {
  if (!isSuperAdminPath(props.categoryGeneratedIndex.permalink)) return <DocCategoryGeneratedIndexPage {...props} />;

  return (
    <div className="sf-super-admin-page">
      <AudienceNotice />
      <DocCategoryGeneratedIndexPage {...props} />
    </div>
  );
}
