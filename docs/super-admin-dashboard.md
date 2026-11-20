---
id: super-admin-dashboard
title: Super Admin Dashboard
sidebar_label: Dashboard
---

# Super Admin Dashboard

## Overview

The **Super Admin Dashboard** is the first page a TCC Tech super admin sees after signing in to the super admin portal. It shows the whole Storefront platform on one screen: how many clients there are, their subscriptions and payments, the revenue they bring in, the configurators and licences they have bought, and what needs attention.

The figures cover **every client together**. TCC Tech's own company is never counted. The page is read-only: you choose a period and read the figures, and a few rows link through to Client Management.

:::note[Who can use it]
Only a **Super Admin** of the TCC Tech company, signed in through the super admin portal, sees this dashboard. Everyone else who opens the dashboard, including a client's own administrators, sees the store [Dashboard](./dashboard.md) instead.
:::

---

## Data Displayed

### Dashboard Screen List

| Action | Description |
| ------ | ----------- |
| **Today / Week / Month / Year** | Chooses the period for the figures that depend on dates. The choice is shown in the line under the title, for example *Platform overview · Month*. |
| **View Documentation** | Opens this page. |
| **View clients** (arrow) | On a **Needs action** row, opens Client Management with that row's filter already chosen. |

### Summary Cards

Six cards run across the top:

| Card | Value | Line below | Example |
| ---- | ----- | ---------- | ------- |
| **Total clients** | Every client company | A green **active** tag and a grey **inactive** tag | **128** / *112 active* *16 inactive* |
| **Active subscriptions** | Clients with a running subscription | An **expired** tag, red when any have expired | **104** / *6 expired* |
| **Today's revenue**, **This week's revenue**, **This month's revenue** or **This year's revenue** | Money collected in the selected period | How many payments made it up | **$4,820.00** / *12 payments* |
| **Monthly revenue** | Money collected in the last 30 days | All-time revenue | **$18,450.00** / *All-time $212,900.00* |
| **Pending payments** | Money still waiting to be paid | How many invoices are waiting | **$1,250.00** / *3 invoices awaiting payment* |
| **New clients** | Client companies created in the period | How many were onboarded in the period, and in total | **9** / *5 onboarded · 118 total onboarded* |

### Cards Below

| Card | What it shows |
| ---- | ------------- |
| **Revenue trend** | A chart of the selected period: columns for the money collected and a line for the number of payments, with the total in the card header (for example *$4,820.00 from 12 payments*). Hover over a point to see both values. |
| **Needs action** | One row per item that needs attention, each with its count. See [Needs Action Items](#needs-action-items). Shows *Nothing needs action* when the list is empty. |
| **Configurators** | One bar per configurator with the number of clients who bought it. The header shows the total purchases and how many clients have at least one, for example *86 purchases · 64 clients*. The top bar is drawn darker. |
| **Licenses** | A ring showing the share of bought user licences that are assigned (for example *72% utilised*), with **Purchased**, **Assigned** and **Unassigned** below it. |
| **Clients by country** | One bar per country with its number of clients, from each client's billing address. Clients with no country show as **Unknown**. The header shows the number of regions. The list scrolls when it is long. |
| **Upcoming renewals** | Subscriptions due to renew in the next 30 days: **Client** (initials, name and client number), **Next billing** (day and time) and **Amount**. The header shows the total, for example *7 in next 30 days*. |
| **Recent payments** | The latest payments collected in the period: **Invoice** (number, with the day and time below), **Client**, **Type** and **Amount**. **Type** is **New** (green), **Update** (blue) or **Renewal** (grey). |
| **Recent orders** | The latest storefront orders placed across all clients in the period: amount and client name, the order number, and on the right the status and when it was placed. Shows *No recent orders* when there are none. |
| **Newly onboarded** | Clients whose first payment came in during the period: initials, name, store web address and the date. Shows *No new clients* when there are none. |
| **Activity** | Recent changes across clients: a client **activated** (green) or **deactivated** (red) by a super admin, and licences added (for example *Acme Jewels added 3 licenses*). Shows *No recent activity* when there is none. |

The **Recent payments**, **Recent orders**, **Newly onboarded**, **Activity** and **Upcoming renewals** lists show up to 5 rows each.

### Needs Action Items

| Item | What it counts | Line below the label |
| ---- | -------------- | -------------------- |
| **Pending Client Onboarding** | Clients who started signing up but have not paid yet | - |
| **Pending Subscription Payments** | Unpaid sign-up orders and plan changes waiting for payment | The amount outstanding |
| **Upcoming Renewals** | Subscriptions renewing in the next 30 days | - |
| **Expired Subscriptions** | Onboarded clients whose subscription is no longer running | - |
| **Inactive Clients** | Client companies that are switched off | - |
| **Unassigned Licenses** | Bought licences not given to any user | How many clients they belong to |
| **Failed Payments** | Clients with a failed card payment or plan change | - |

Each row has a coloured dot and its count. A count of 0 is shown in grey.

---

## How It Works

### Periods

The period buttons choose a rolling range that ends today:

| Period | Covers | Chart points |
| ------ | ------ | ------------ |
| **Today** | Today | One per hour |
| **Week** | The last 7 days | One per day, named by weekday |
| **Month** | The last 30 days | One per day, for example *14 Nov* |
| **Year** | The last 365 days | One per month, for example *Nov 2026* |

Only some figures follow the period:

| Follows the period | Always shows the current state |
| ------------------ | ------------------------------ |
| Period revenue, **Revenue trend**, **New clients**, **Recent payments**, **Recent orders**, **Newly onboarded**, **Activity** | **Total clients**, **Active subscriptions**, **Pending payments**, **Monthly revenue** (always the last 30 days), **Configurators**, **Licenses**, **Clients by country**, **Upcoming renewals**, **Needs action** |

When you switch periods, the old figures stay on screen until the new ones arrive.

### What the Figures Count

| Figure | Rule |
| ------ | ---- |
| Revenue | Only invoices that were actually paid count. Pending, open and failed invoices are never added. |
| Onboarded | A client counts as onboarded once its subscription is past the first payment, or it has a paid invoice or a paid sign-up order. |
| Active subscriptions | Each client is counted once, by its main subscription. Extra store and configurator add-ons are not counted separately. |
| Configurators | What each client has actually bought and has switched on, the same as in Client Management. |
| Licences | Assigned means the licence is given to a user. Unassigned is purchased minus assigned. |
| Money | Shown in the platform's billing currency. |

### Loading and Empty States

| State | What you see |
| ----- | ------------ |
| The page is loading | Grey placeholders in the six summary cards. The cards below appear once the figures arrive. |
| A list has nothing to show | A short grey note, such as *No recent orders*, *No new clients*, *No recent activity* or *Data Not Available*. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How the dashboard uses it |
| ------ | ------------------------- |
| Client Management | Client companies, whether they are active, and their billing country. The **Needs action** arrows open it with a filter chosen. |
| [Subscription & Billing](./subscription.md) | Subscriptions, invoices, payments, plan changes, configurator purchases and user licences behind the revenue, subscription, renewal, configurator and licence figures. |
| [Orders](./order-management/orders.md) | The storefront orders listed in **Recent orders**. |
| Sign-up | A client's first payment marks it as onboarded. Unpaid sign-ups appear under **Pending Client Onboarding**. |

### Modules That Depend On It

None. The dashboard only reads figures; nothing else uses it.

### What Changes If…

| Change | Effect on the dashboard |
| ------ | ----------------------- |
| A client pays an invoice | Revenue, the trend and **Recent payments** go up. A first payment also adds the client to **Newly onboarded**. |
| A super admin activates or deactivates a client | **Total clients** tags and **Inactive Clients** change, and the change appears in **Activity**. |
| A client buys or assigns licences | **Licenses** and **Unassigned Licenses** change, and the purchase appears in **Activity**. |
| A client buys or switches off a configurator | **Configurators** changes. |
| A subscription stops running | It moves from **Active subscriptions** to the **expired** tag and **Expired Subscriptions**. |

---

## Edge Cases / Notes

- **Periods are rolling.** **Week** is the last 7 days and **Month** the last 30 days, not the calendar week or month, even though the card reads *This week's revenue* or *This month's revenue*.
- **Monthly revenue never changes with the period.** It is always the last 30 days.
- **TCC Tech is left out.** The platform's own company is never counted as a client or in revenue.
- **Arrows only where Client Management can filter.** A **Needs action** row shows the arrow only when Client Management has a matching filter.
- **Recent orders show a status code.** The status on the right of **Recent orders** currently shows as a number rather than a name, and the amounts are shown in the billing currency.
