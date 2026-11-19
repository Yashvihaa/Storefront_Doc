import React from 'react';
import Link from '@docusaurus/Link';
import Admonition from '@theme/Admonition';

/** Shown in place of a super-admin page when a tenant opens it (styles in custom.css). */
export default function AudienceNotice(): React.JSX.Element {
  return (
    <div className="sf-audience-notice">
      <Admonition type="info" title="For TCC Tech super admins">
        <p>
          This page covers a screen that is only in the TCC Tech super admin portal, so it is not part of your admin
          panel.
        </p>
        <p>
          Go back to the <Link to="/">Introduction</Link> to find the pages for your admin panel.
        </p>
      </Admonition>
    </div>
  );
}
