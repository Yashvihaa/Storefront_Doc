---
sidebar_position: 2
id: dashboard
title: Dashboard
sidebar_label: Dashboard
---

# Dashboard

The **Dashboard** is the first page you see after signing in. It gives a one-screen summary of order flow, website visitors, revenue, best-selling products, store health and recent orders for the selected period.

---

## Dashboard Screen List

| Action | Description |
| ------ | ----------- |
| **Date Range** | Click the date box (or its calendar icon) at the top right to choose the period the Dashboard reports on. The page updates as soon as you pick an end date. |
| **View Documentation** | Opens the help page for the Dashboard in a new browser tab. |
| **View Details** | Click the **eye** icon in **Top Selling Products** or **Recent Orders** to open the product or order details. |
| **Quick Actions** | One-click shortcuts to common tasks, opened in a new browser tab. |

---

### Date Range

| Setting | Value |
| ------- | ----- |
| Default period | 1st of the current month to today |
| Earliest date | One year before today |
| Latest date | Today |
| Longest period | 365 days |

**Store Health** and **Quick Actions** do not change with the date range. All other sections do, and **Recent Orders** returns to page 1.

---

## Dashboard Sections

### Order Status Summary Cards

Eight cards show the number of orders in each status, with the percentage change compared to last week (for example `+12.50% than last week`).

| Card | Counts |
| ---- | ------ |
| **No. of Orders** | New orders placed |
| **Confirm Orders** | Confirmed orders |
| **In Process** | Orders being prepared |
| **Out of delivery** | Orders out for delivery |
| **Delivered** | Orders delivered to the customer |
| **Cancelled** | Cancelled orders |
| **Return** | Returned orders |
| **Failed** | Failed orders |

---

### Web analytics

A bar chart of website visitors per period, with the line *"Total number of website visitors is …"* showing the total for the selected range. Hover over a bar to see its exact value.

---

### Store Health

Checks whether the services behind your store are working. The checks run once when you open the Dashboard; refresh the page to run them again.

| Check | Status when healthy |
| ----- | ------------------- |
| **Liveness** | Running |
| **Health** | Healthy |
| **Readiness** | Ready |
| **Deep Health** | Healthy |

A green tick means the check passed. An orange warning shows the problem reported (for example **Degraded**) or **Unreachable** if the service could not be reached.

:::note
If a check stays orange after refreshing, contact your technical support team with the check name and message shown.
:::

---

### Quick Actions

| Shortcut | Opens |
| -------- | ----- |
| **Add New Product** | The product list, to create a new jewellery product |
| **Create Discount** | The discount form, to set up an offer or coupon |

A shortcut is shown only if your role has access to that area.

---

### Revenue Report

An area chart of revenue for each period in the selected range. Amounts on the axis are shortened (for example `$45K`, `$1.2M`); hover over the chart to see the value for a period.

---

### Top Selling Products

| Column | Description |
| ------ | ----------- |
| **Image** | Product thumbnail (hover for a larger preview) |
| **Product Name** | Name of the product |
| **SKU** | Product SKU code |
| **Order Count** | Number of orders that included the product |
| **Action** | **View Details** icon to open the product |

This table is not paged.

---

### Abandoned Carts

Customers who added products to their cart but did not check out during the selected period. If there are none, the card shows **Data Not Available**.

| Column | Description |
| ------ | ----------- |
| **CUSTOMER** | Customer name |
| **ITEMS** | Number of items left in the cart |
| **VALUE** | Total cart value, for example `$1250.00` |

---

### Recent Orders

| Column | Description |
| ------ | ----------- |
| **Order Number** | Unique order reference |
| **Date** | Order date |
| **Customer Name** | Name of the customer |
| **Guest Account** | **Yes** if the order was placed without a customer account, otherwise **No** |
| **Email** | Customer email address |
| **Total** | Order amount |
| **Order Status** | Current order status: **Pending**, **Confirmed**, **Processing**, **Out For Delivery**, **Delivered**, **Returned**, **Failed** or **Cancelled** |
| **Payment Status** | **Pending**, **Paid** or **Failed** |
| **Action** | **View Details** icon to open the order details |

The table shows 50 orders per page by default; change it to 25, 50, 75 or 100 from the rows-per-page menu.

---

### Table Tools

**Top Selling Products** and **Recent Orders** share a toolbar with **Filter**, **Columns** (show/hide), **Density** and **Full screen** options. An empty table shows **No records to display**.

---

## Permissions

| Area | Requirement | Without it |
| ---- | ----------- | ---------- |
| **View** in Top Selling Products | Permission to view products | Icon is disabled |
| **View** in Recent Orders | Permission to view orders | Icon is disabled |
| **Add New Product** shortcut | Access to the product list | Shortcut is hidden |
| **Create Discount** shortcut | Access to the discount list | Shortcut is hidden |

To change what a user can access, update their role under **Roles & Permission**.
