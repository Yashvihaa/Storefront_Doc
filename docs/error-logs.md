---
id: error-logs
title: Error Logs
sidebar_label: Error Logs
---

# Error Logs

## Overview

**Error Logs** lists every failed request the Storefront platform has recorded, for every client together. Each log shows the error message, the status code, the client it belongs to, the user who made the request and when it happened. One click opens the full details, including the request that was sent and the response that came back.

The page is read-only. You can search, filter and read logs, but you cannot add, edit, resolve or delete them. Use it to find out why something failed for a client, for example why a product would not save or why an order could not be placed, without asking the client to repeat the steps.

:::note[Who can use it]
Error Logs is a TCC platform page. Only a **Super Admin** of the TCC Tech company, signed in through the super admin portal, can open it. A client's own administrators and users cannot see it, even with a role that allows it. The **View Details** (eye) icon is enabled only when your role has **View** permission for the page.
:::

---

## Data Displayed

### Error Logs Screen List

| Action | Description |
| ------ | ----------- |
| **Search error message** | Type part of an error message. The list refreshes once you pause typing and goes back to page 1. The search is not case-sensitive. |
| **All Tenants** | Shows logs for one client only. The list has a **Search tenant** box at the top. When two clients have the same name, the client ID is added, for example *Acme Jewels (#93)*. If nothing matches, it shows **No tenant found**. Choose **All Tenants** to see every client again. |
| **All status codes** | Shows logs with one status code only. See [Status Codes](#status-codes). |
| **Filter** | Shows or hides a filter box under each column heading, so you can narrow the logs on the current page by typing in a column. |
| **View Details** | Click the eye icon in the **Action** column to open the log. See [Error Log Details](#error-log-details). |
| **View Documentation** | Opens this page. |

### Error Logs List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Log ID** | Number | The log's number. | **#4821** |
| **Error Message** | Text | An alert tile followed by the message on one line. Hover over (or tap) the tile to see the full message. A long message scrolls sideways inside the column. Shows **-** when no message was logged. | *Product not found* |
| **Status Code** | Number or text | A colored badge with the HTTP status code. Amber for 4xx codes, red for 5xx codes and grey for anything else. Shows **-** when there is no code. | **404** |
| **Client** | Client ID | The client (tenant) the request belonged to, shown as a grey tag. Shows **-** when the request had no client. | **Client #93** |
| **Created By** | Name | A round badge with the user's initials, then their name. Shows **-** when no signed-in user made the request. | **RM** *Rahul Mehta* |
| **Created Date** | Date and time | The date, with the time below it in hours, minutes and seconds. | 18 Nov 2026 / 11:35:20 AM |
| **Action** | - | The **View Details** (eye) icon. | - |

The list is sorted with the newest log first. The columns cannot be sorted. The list is paged, 50 logs per page by default. Use the paging controls at the bottom of the list to move between pages or to show 25, 50, 75 or 100 logs per page.

### Status Codes

The **All status codes** filter offers these codes. The detail page shows the same name next to the code, for example **400 · Bad Request**.

| Code | Name | Badge color |
| ---- | ---- | ----------- |
| 400 | Bad Request | Amber |
| 401 | Unauthorized | Amber |
| 403 | Forbidden | Amber |
| 404 | Not Found | Amber |
| 409 | Conflict | Amber |
| 422 | Unprocessable Entity | Amber |
| 429 | Too Many Requests | Amber |
| 500 | Internal Server Error | Red |
| 502 | Bad Gateway | Red |
| 503 | Service Unavailable | Red |

A log can carry a code that is not in this list. It still appears in the list (with no name), but you cannot pick it in the filter.

### Error Log Details

Click the eye icon on a log to open its detail page. The title shows the log number, for example **ERROR LOG #4821**, and the line below it shows when it was logged, for example *Logged 18 Nov 2026 · 11:35:20 AM*.

| Button | Description |
| ------ | ----------- |
| **Copy as JSON** | Copies everything the log holds to your clipboard as formatted JSON. The message **Copied to clipboard** confirms it, or **Could not copy** if your browser blocked it. |
| **View Documentation** | Opens this page. |
| **Back** | Returns to the Error Logs list. |

The page is made up of these cards:

| Card | What it shows |
| ---- | ------------- |
| **Error** | The error message in large text (or *No message was logged*), the status code badge with its name, and the client tag. Below them: **Log ID**, **Status code**, **Error type** (the kind of error, for example *Error* or *SequelizeDatabaseError*) and **Created date**. |
| **Validation errors** | Shown only when the error lists problems with individual fields. One row per problem with **#**, **Message**, **Location** (where the value was sent, for example *body*) and **Value** (the value that was sent, or **-**). The header shows the number of items. |
| **Logged by** | The user's initials, name (or *Unknown user*) and role, then **User ID** and **Client (company ID)**. |
| **Response** | The response the request got, with its status code badge. |
| **Request** | What was sent, under three tabs: **Body** (the data sent), **Query** (the values in the web address) and **Params** (the values in the path). |

The **Response** and **Request** cards show the data as a numbered JSON tree. The first two levels start open and deeper levels start folded. Click the arrow beside a bracket to open or fold it, or use the buttons in the card header:

| Button | Description |
| ------ | ----------- |
| **Expand all** | Opens every level. |
| **Collapse** | Folds everything back to the top level. |
| **Copy** | Copies the JSON of the selected tab. |

A folded object or list shows how many keys or items it holds, for example **3 keys** or **2 items**.

---

## How It Works

### Where Logs Come From

A log is written automatically each time a request to the Storefront API fails. This covers both the admin panel and the storefront website. A request counts as failed when the API answers with anything other than success, or when something goes wrong while handling it. Nobody creates logs by hand.

Each log records:

- the error as it happened, including its message, type and code
- the request: the data sent, the values in the web address and the path values
- the response sent back
- the client and the signed-in user, taken from the user's verified sign-in. A client ID sent in the request itself is never used.
- the date and time

### How Each Column Is Filled

| Column | Where the value comes from |
| ------ | -------------------------- |
| **Error Message** | The error's own message. If it has none, the message in the response. If that is missing too, the error type. |
| **Status Code** | The status of the response. If there is none, the error's code. |
| **Client** | The client of the user who made the request. |
| **Created By** | The user's business name. If none is set, the contact person of the user's company. If that is missing too, the username. |
| **Role** (in **Logged by**) | **admin** for a client's main administrator, otherwise the name of the user's role as set on the [Roles](./roles-permission/roles.md) page. |

The client, user name and role are looked up when you open the page, not stored with the log. If a user or role is renamed later, older logs show the new name.

### Hidden Sensitive Values

Before a log is shown, values in fields whose names suggest secrets are replaced with `******`. This includes fields named like a password, PIN, OTP, token, secret, authorization, API key, card, CVV or CVC. The masking happens on the request, the response and the error details.

### Search, Filters and Paging

- **Search**, **All Tenants** and **All status codes** search across every log, not just the current page. Changing any of them returns you to page 1.
- The status code filter matches one exact code.
- The **Filter** boxes under the column headings only narrow the logs already on the current page.

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No logs match | **No records to display** |
| Loading a log | Grey placeholder blocks in the shape of the cards. |
| A log cannot be loaded | *Could not load this error log* with the reason (or *No details were returned for this log.*) and a **Try again** button. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Error Logs uses it |
| ------ | ---------------------- |
| **Every admin and storefront feature** | Any failed request from any page, configurator or storefront action creates a log. A change that makes a feature fail more often shows up here as more logs. |
| [User Management](./roles-permission/user-management.md) | Supplies the name shown in **Created By** and **Logged by**. |
| [Roles](./roles-permission/roles.md) | Supplies the role shown in **Logged by**. Renaming a role changes it on old logs too. |
| Client companies (super admin client management) | The **All Tenants** list shows every client company by name. When a company has no name, its key is shown instead. |
| Sign-in | The client and user are taken from the signed-in session. Requests without a signed-in user have no client and no **Created By**. |

### Modules That Depend On It

None. No other page reads error logs, and nothing in the admin panel or on the storefront changes based on them.

### What Changes If…

| Change | Effect on Error Logs |
| ------ | -------------------- |
| A user or role is renamed | Older logs show the new name. |
| A user is removed | Older logs keep the **User ID**, but the name may no longer be found and shows as **-** or *Unknown user*. |
| A new client is added | It appears in the **All Tenants** list, even before it has any logs. |
| A client is promoted from staging to production | Its logs are not copied. A promoted client starts with no logs. |

---

## Edge Cases / Notes

- **Logs without a client.** Requests made without a signed-in client user, such as storefront visitors, failed sign-ins and payment webhooks, are logged with no client. They appear under **All Tenants** with **-** in **Client** and **Created By**. You cannot pick them on their own with the tenant filter.
- **Not every failure is logged.** Only requests that reach the part of the API that does the work are logged. A request turned away earlier, for example by a sign-in or permission check or by a check on the values sent, does not create a log.
- **The tenant list shows every client.** The **All Tenants** list includes every client company, not only those that have logged errors. Picking a client with no logs shows **No records to display**.
- **Masking goes by field name.** Any field whose name contains one of the masked words is hidden, even if it is not secret. For example, a field such as `shipping_method` contains "pin", so its value shows as `******`.
- **Copy as JSON copies more than the page shows.** The copied text also holds the API path and method of the request, the error's stack trace (when one was logged) and the signed-in user's access token. Treat it as sensitive and share it only with people who need it.
- **Status codes that are not numbers.** Some errors carry a text code instead of a number. It is shown as it is, with a grey badge.
- **Date range.** The list cannot be filtered by date on this page. Use paging, or narrow the logs with search and the filters.

:::tip
To investigate a client's problem, choose the client in **All Tenants**, search for a word from the error they saw, and open the newest matching log. The **Request** card shows exactly what was sent, and **Validation errors** lists any field that was rejected.
:::
