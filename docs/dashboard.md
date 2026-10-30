---
sidebar_position: 2
id: dashboard
title: Dashboard
sidebar_label: Dashboard
---

# Dashboard

The **Dashboard** is the first page you see after signing in. Under the heading **DASHBOARD OVERVIEW** it gives a one-screen summary of order flow, revenue, store health and your latest orders for the period you choose.

Below the heading you see a welcome line such as *"Welcome back, Your Company Admin. Here's how your store is doing this month."* The company name comes from your company information; if none is set, only **Admin** is shown. The ending of the sentence changes with the period you pick (today, this week, this month, this year).

---

## Dashboard Screen List

| Action | Description |
| ------ | ----------- |
| **Period selector** | Choose **Today**, **Week**, **Month** or **Year**. The selected period is highlighted. The Dashboard opens on **Today**. |
| **View Documentation** | Opens the help page for the Dashboard in a new browser tab. |
| **Recent Orders tabs** | Filter the recent orders by status: **All**, **Pending**, **Processing**, **Shipped** or **Delivered**. |
| **View all orders** | Opens the full **Orders** list. Shown only if your role can view orders. |
| **Top Selling Products row** | Click a product row to open that product in view mode. Works only if your role can view products. |
| **Quick Actions** | One-click shortcuts to common tasks, opened in a new browser tab. |

---

### Period Selector

| Option | Used for |
| ------ | -------- |
| **Today** | Default when the page opens |
| **Week** | Current week |
| **Month** | Current month |
| **Year** | Current year |

Every click on a period reloads the figures from the server, even for a period you have already viewed. While the new figures load, the previous figures stay on screen instead of going blank. **Store Health** and **Quick Actions** do not change with the period.

---

## Dashboard Sections

### Order Status Summary Cards

Eight cards show the number of orders in each status for the selected period. Each card also has a small badge showing the change compared to the previous period (for example `+12.5%`) with a comparison note beside it (for example `vs last period`, or the wording supplied by the system).

| Card | Counts |
| ---- | ------ |
| **Total Orders** | All orders placed in the period |
| **Confirmed** | Confirmed orders |
| **In Progress** | Orders being prepared |
| **Out for Delivery** | Orders out for delivery |
| **Delivered** | Orders delivered to the customer |
| **Cancelled** | Cancelled orders |
| **Returned** | Returned orders |
| **Failed** | Failed orders |

How to read the badge:

- Green means orders went up, red means they went down and grey means no change.
- A rise from zero orders is shown as `+100%`.
- Numbers are rounded to one decimal place (`+12.5%`, not `+12.50%`).
- While figures are loading, the card shows a small placeholder instead of a number.

---

### Web analytics

A bar chart of website visitors with the line *"Total number of website visitors is …"*. At present the Dashboard does not receive visitor data, so this card shows a total of **0** and an empty chart. Use the **Analytics** page for traffic and behaviour insights.

---

### Store Health

Checks whether the services behind your store are working. The checks run once when you open the Dashboard; refresh the page to run them again.

| Check | Healthy when the status reads |
| ----- | ----------------------------- |
| **Liveness** | Up |
| **Health** | Up |
| **Readiness** | Ready |
| **Deep Health** | Up |

Each row shows the status the service reports, for example **Up** or **Ready**, in green when healthy. While a check is running it shows a grey dash. If the service reports anything else (for example **Degraded**, **Down** or **Not Ready**), the status is shown in orange. If the service cannot be reached, the row shows **Unreachable** in orange.

:::note
If a check stays orange after refreshing, contact your technical support team with the check name and the status shown.
:::

---

### Quick Actions

Shown under the heading **Frequently used**. Clicking a shortcut opens the page in a new browser tab.

| Shortcut | Description | Opens |
| -------- | ----------- | ----- |
| **Add New Product** | Create a new jewellery product | The product list |
| **Create Discount** | Set an offer or coupon | The discount configuration page |

A shortcut is shown only if your role has access to that menu item.

---

### Revenue Analytics

An area chart of **Gross sales** for the selected period, with the date range of the chart shown under the title and the total gross sales shown at the top right (for example `$9,020.50`). Amounts on the vertical axis are shortened (for example `$800`, `$45K`, `$1.2M`); hover over the chart to see the exact value for a point. Amounts are shown in dollars.

---

### Top Selling Products

| Column | Description |
| ------ | ----------- |
| **Product** | Product thumbnail and name |
| **SKU** | Product SKU code |
| **Orders** | Number of orders that included the product |

Clicking a row (the row shows an arrow on the right) opens the product in view mode. The arrow and click are available only if your role can view products. At present the Dashboard does not receive top-selling data, so the card shows **Data Not Available**.

---

### Recent Orders

Shows up to the 10 most recent orders for the selected period. Tabs above the table filter them; each tab shows how many orders it contains (including 0).

| Tab | Shows |
| --- | ----- |
| **All** | Every recent order |
| **Pending** | Pending orders |
| **Processing** | Confirmed and Processing orders |
| **Shipped** | Shipped orders |
| **Delivered** | Delivered orders |

| Column | Description |
| ------ | ----------- |
| **Order** | Order number |
| **Customer** | Customer name (the store name is shown if there is no customer name) |
| **Date** | Order date, for example `Jun 20, 2026` |
| **Status** | Colour-coded tag: **Pending**, **Confirmed**, **Processing**, **Shipped**, **Delivered**, **Returned**, **Failed** or **Cancelled** |
| **Amount** | Order total in dollars, for example `$1,250.00` |

If there are no orders in the selected tab, the table shows **Data Not Available**. The table scrolls sideways when the screen is narrow, and the header row stays in place while you scroll down.

:::tip
The Dashboard lists only the latest 10 orders. Click **View all orders** to search, filter and open any order. See [Orders](./order-management/orders.md).
:::

---

## Permissions

| Area | Requirement | Without it |
| ---- | ----------- | ---------- |
| **Top Selling Products** row click | Permission to view products | Rows are not clickable |
| **View all orders** | Permission to view orders | Link is hidden |
| **Add New Product** shortcut | Access to the product list | Shortcut is hidden |
| **Create Discount** shortcut | Access to the discount list | Shortcut is hidden |

To change what a user can access, update their role under **Roles & Permission**.
