---
sidebar_position: 2
id: dashboard
title: Dashboard
sidebar_label: Dashboard
---

# Dashboard

## Overview

The **Dashboard** is the first page you see after signing in. Under the heading **DASHBOARD OVERVIEW** it gives a one-screen summary of order flow, revenue, store health and your latest orders for the period you choose.

Below the heading you see a welcome line such as *Welcome back, Your Company Admin. Here's how your store is doing this month.* It shows your company name as set in [Company Info](./settings/company-info.md). If no name is set, it shows only **Admin**. The end of the sentence changes with the period you pick (*today*, *this week*, *this month* or *this year*). Under it, the line *All displayed prices are in USD* reminds you how amounts are shown.

The Dashboard is read-only. It shows figures from your orders but does not change anything.

:::note[Who can use it]
Every admin user sees the Dashboard. Some parts depend on the user's role:

| Area | Requirement | Without it |
| ---- | ----------- | ---------- |
| Order figures, chart and **Recent Orders** | Only orders the user can see in [Orders](./order-management/orders.md) are counted. The main user of the main store sees every order. Other users see only the orders of their store that are assigned to them. A user with no store sees none. | Cards show **0** and the table is empty |
| **View all orders** | **View** permission for Orders | The link is hidden |
| **Top Selling Products** row click | **View** permission for All Products | Rows are not clickable |
| **Add New Product** shortcut | Access to the All Products menu | The shortcut is hidden |
| **Create Discount** shortcut | Access to the discount list menu | The shortcut is hidden |

To change what a user can access, update their role under [Roles](./roles-permission/roles.md).
:::

<SuperAdminOnly>

:::info[Super admin dashboard]
A **Super Admin** of the TCC Tech company, signed in through the super admin portal, sees a different page here: the **SUPER ADMIN DASHBOARD**, with platform figures such as clients, subscriptions and payments. See [Super Admin Dashboard](./super-admin-dashboard.md). This page describes the store Dashboard that every client admin sees.
:::

</SuperAdminOnly>

---

## Data Displayed

### Dashboard Screen List

| Action | Description |
| ------ | ----------- |
| **Today / Week / Month / Year** | Choose the period the figures cover. The selected period is highlighted. The Dashboard opens on **Today**. See [Periods](#periods). |
| **View Documentation** | Opens this page in a new browser tab. On a phone, only its icon is shown. |
| **Recent Orders tabs** | Filter the recent orders by status: **All**, **Pending**, **Processing**, **Shipped** or **Delivered**. |
| **View all orders** | Opens the full [Orders](./order-management/orders.md) list. On a phone it reads **View all**. |
| **Top Selling Products row** | Opens that product in view mode. |
| **Quick Actions** | Shortcuts to common tasks, each opened in a new browser tab. |

### Order Status Summary Cards

Eight cards show the number of orders in each status for the selected period. Each card also has a badge with the change from the previous period of the same length (for example **+12.5%**) and a note beside it, for example *than yesterday*.

| Card | Counts | Example |
| ---- | ------ | ------- |
| **Total Orders** | Every order placed in the period, whatever its status | 48 |
| **Confirmed** | Orders with status **Confirmed** | 6 |
| **In Progress** | Orders with status **Processing** | 9 |
| **Out for Delivery** | Orders with status **Out for Delivery** (shown as **Shipped** in Recent Orders) | 4 |
| **Delivered** | Orders with status **Delivered** | 21 |
| **Cancelled** | Orders with status **Cancelled** | 3 |
| **Returned** | Orders with status **Returned** | 2 |
| **Failed** | Orders with status **Failed** | 3 |

How to read the badge:

| Badge | Meaning |
| ----- | ------- |
| Green, for example **+12.5%** | More orders than the previous period |
| Red, for example **-40%** | Fewer orders than the previous period |
| Grey, **+0%** | No change |

The comparison note depends on the period:

| Period | Note |
| ------ | ---- |
| **Today** | *than yesterday* |
| **Week** | *than previous 7 days* |
| **Month** | *than previous 30 days* |
| **Year** | *than previous 365 days* |

### Web Analytics

A bar chart of website visitors titled **Web analytics**, with the line *Total number of website visitors is …*. Visitor figures are not shown here yet, so this card shows a total of **0** and an empty chart. Use [Analytics](./analytics.md) for traffic and behaviour insights.

### Store Health

Shows whether your store is up and running.

| Check | Healthy when the status reads |
| ----- | ----------------------------- |
| **Liveness** | **Up** |
| **Health** | **Up** |
| **Readiness** | **Ready** |
| **Deep Health** | **Up** |

| Status color | Meaning | Example |
| ------------ | ------- | ------- |
| Grey dash | The check is still running | **—** |
| Green | Working normally | **Up**, **Ready** |
| Orange | There is a problem | **Degraded**, **Down**, **Not Ready** |
| Orange | The check could not be completed | **Unreachable** |

A **View Store Health** link sits under the checks. It does not open another page.

### Quick Actions

Shown under the heading **Frequently used**.

| Shortcut | Description | Opens |
| -------- | ----------- | ----- |
| **Add New Product** | *Create a new jewellery product* | The [All Products](./product-management/all-products.md) list |
| **Create Discount** | *Set an offer or coupon* | The discount configuration page in [Offers & Discounts](./product-management/offers-discounts.md) |

### Revenue Analytics

An area chart of **Gross sales** for the selected period. The date range of the chart is shown under the title, for example *Gross sales · 21 Oct – 19 Nov*, and the total gross sales for the period is shown at the top right, for example **$9,020.50**.

| Period | One point per | Point label example |
| ------ | ------------- | ------------------- |
| **Today** | Hour | *9AM* |
| **Week** | Day | *Mon* |
| **Month** | Day | *19 Nov* |
| **Year** | Month | *Nov 2026* |

Amounts on the vertical axis are shortened (for example **$800**, **$45K**, **$1.2M**). Hover over the chart to see the exact value for a point.

### Top Selling Products

| Column | Description |
| ------ | ----------- |
| **Product** | Product thumbnail and name |
| **SKU** | Product SKU code |
| **Orders** | Number of orders that included the product |

Top-selling figures are not shown here yet, so the card shows **Data Not Available**.

### Recent Orders

Shows up to the 10 most recent orders placed in the selected period, newest first.

| Tab | Shows |
| --- | ----- |
| **All** | Every recent order |
| **Pending** | **Pending** orders |
| **Processing** | **Confirmed** and **Processing** orders |
| **Shipped** | **Shipped** (out for delivery) orders |
| **Delivered** | **Delivered** orders |

Each tab shows how many of the recent orders it contains, including **0**.

| Column | Description | Example |
| ------ | ----------- | ------- |
| **Order** | Order number | **ORD-10245** |
| **Customer** | The name on the order, or the full name on the shipping address. If neither is set, the store name. | *Priya Shah* |
| **Date** | Order date | *Jun 20, 2026* |
| **Status** | Color-coded tag: **Pending**, **Confirmed**, **Processing**, **Shipped**, **Delivered**, **Returned**, **Failed** or **Cancelled** | **DELIVERED** |
| **Amount** | Order total | **$1,250.00** |

---

## How It Works

### Periods

Every period is a rolling range that ends today. It is not a calendar week, month or year.

| Option | Covers | Compared with |
| ------ | ------ | ------------- |
| **Today** | Today, from midnight | Yesterday |
| **Week** | Today and the 6 days before (7 days) | The 7 days before that |
| **Month** | Today and the 29 days before (30 days) | The 30 days before that |
| **Year** | Today and the 364 days before (365 days) | The 365 days before that |

An order belongs to a period by its order date. The summary cards, the revenue chart and Recent Orders all use the same range.

**Store Health** and **Quick Actions** do not change with the period.

### Steps to Check How Your Store Is Doing

1. Open **Dashboard** from the menu.
2. Pick **Today**, **Week**, **Month** or **Year**.
3. Read the summary cards. The badge on each card shows whether that status went up or down since the previous period.
4. Check **Revenue Analytics** for gross sales over the period. Hover over a point for its exact amount.
5. Use the **Recent Orders** tabs to look at new (**Pending**) or in-progress (**Processing**) orders.
6. Click **View all orders** to open, search or update any order in [Orders](./order-management/orders.md).

### How the Figures Are Worked Out

| Figure | How it is calculated |
| ------ | -------------------- |
| Card counts | The number of orders placed in the period with that status now. An order counts under its current status, not the status it had during the period. |
| Change badge | The change from the previous period's count, as a percentage, rounded to one decimal place. A rise from zero orders shows **+100%**. No orders in either period shows **+0%**. |
| Gross sales | The total of the order totals placed in the period, leaving out **Returned**, **Failed** and **Cancelled** orders. |
| Chart points | The same gross sales, split by hour, day or month. A point with no orders shows **0**. |

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| First load | Each summary card shows a small placeholder instead of a number. Until the figures load, **Revenue Analytics** shows **$0.00** and **Recent Orders** shows **Data Not Available**. |
| Changing the period | The figures are reloaded. The previous figures stay on screen until the new ones load, instead of going blank. |
| A health check is running | A grey dash beside the check. |
| No orders in the selected tab | **Data Not Available** |
| No top-selling data | **Data Not Available** |

The health checks run once when you open the Dashboard. Refresh the page to run them again.

---

## Dependencies and Impact

### Modules It Depends On

| Module | How the Dashboard uses it |
| ------ | ------------------------- |
| [Orders](./order-management/orders.md) | Every order card, the revenue chart and Recent Orders are worked out from your orders, their status, date and total. |
| [Stores](./roles-permission/stores.md) | Decides which orders a user can see. The store name is shown in **Customer** when an order has no customer name. |
| [User Management](./roles-permission/user-management.md) | A user's store and the orders assigned to them decide which orders they see. |
| [Roles](./roles-permission/roles.md) | Controls **View all orders**, the product row click and the quick action shortcuts. |
| [Company Info](./settings/company-info.md) | The company name set there is shown in the welcome line. |
| [All Products](./product-management/all-products.md) | Opened by **Add New Product** and by a top-selling product row. |
| [Offers & Discounts](./product-management/offers-discounts.md) | Opened by **Create Discount**. |

### Modules That Depend On It

None. The Dashboard only shows figures. No other page uses them.

### What Changes If…

| Change | Effect on the Dashboard |
| ------ | ----------------------- |
| A new order is placed | It is added to **Total Orders** and its status card, to gross sales and to Recent Orders the next time the Dashboard loads. |
| An order's status changes in Orders | It moves to the card for its new status. If it becomes **Returned**, **Failed** or **Cancelled**, its total is taken out of gross sales. |
| An order is reassigned or a user's store changes | The orders that user sees on the Dashboard change to match what they see in Orders. |
| The company name changes in Company Info | The welcome line shows the new name. |
| A role loses access to Orders or All Products | **View all orders**, the product row click or the matching quick action is hidden. |

---

## Edge Cases / Notes

- **Figures do not refresh on their own.** Pick a period again or reload the page to see new orders.
- **Only 10 recent orders.** The tabs filter those 10 orders. A tab can show **0** even when older orders of that status exist in the period. Use **View all orders** to see every order.
- **Out for Delivery and Shipped are the same status.** The summary card says **Out for Delivery**. Recent Orders shows it as **Shipped**.
- **Confirmed has no tab of its own.** Confirmed orders appear under **Processing** in Recent Orders.
- **Pending has no card of its own.** Pending orders are counted only in **Total Orders**.
- **Amounts always show a $ sign.** Gross sales and order amounts are shown with **$**, as the header line *All displayed prices are in USD* says.
- **Today may not start at your midnight.** The periods follow the platform's time zone, which may differ from your own.
- **Web analytics and Top Selling Products are empty.** These cards do not show figures yet.

:::tip
The Dashboard lists only the latest 10 orders. Click **View all orders** to search, filter and open any order. See [Orders](./order-management/orders.md).
:::
