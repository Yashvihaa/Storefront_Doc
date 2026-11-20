import React from 'react';
import {HtmlClassNameProvider, PageMetadata} from '@docusaurus/theme-common';
import NotFoundMessage from '@site/src/components/NotFoundMessage';

// Every unknown address: only the header, then the 404 message. The `sf-404-page` class on <html>
// hides the footer (custom.css). This content is used both by the 404 page and by the docs for
// addresses they do not know.
export default function NotFoundContent(): React.JSX.Element {
  return (
    <HtmlClassNameProvider className="sf-404-page">
      <PageMetadata title="Page Not Found" />
      <main className="sf-not-found-page">
        <NotFoundMessage />
      </main>
    </HtmlClassNameProvider>
  );
}
