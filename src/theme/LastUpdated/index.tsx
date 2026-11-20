import React from 'react';
import {ThemeClassNames} from '@docusaurus/theme-common';

type Props = {lastUpdatedAt?: number | null; lastUpdatedBy?: string | null};

const DATE_FORMAT = new Intl.DateTimeFormat('en-US', {day: 'numeric', month: 'short', year: 'numeric'});

/**
 * "Last updated on <date>" at the foot of each page.
 * The built site shows the date of the page's last git commit. While running `npm start`,
 * Docusaurus skips git and passes a fixed 2018 date, so today's date is shown instead, without
 * the "(Simulated during dev for better perf)" note.
 */
export default function LastUpdated({lastUpdatedAt, lastUpdatedBy}: Props): React.JSX.Element {
  const timestamp = process.env.NODE_ENV === 'development' ? Date.now() : lastUpdatedAt;
  const date = timestamp ? new Date(timestamp) : null;

  return (
    <span className={ThemeClassNames.common.lastUpdated}>
      Last updated
      {date && (
        <>
          {' on '}
          <b>
            <time dateTime={date.toISOString()} itemProp="dateModified">
              {DATE_FORMAT.format(date)}
            </time>
          </b>
        </>
      )}
      {lastUpdatedBy && (
        <>
          {' by '}
          <b>{lastUpdatedBy}</b>
        </>
      )}
    </span>
  );
}
