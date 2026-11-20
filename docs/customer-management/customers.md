---
sidebar_position: 1
id: customers
title: Customers
sidebar_label: Customers
---

# Customers

## Overview

The **Customers List** shows the people who have bought from you, saved items to a wishlist or registered on your storefront, with their contact details, store, number of orders, total spend and when they were last active.

There is no separate customer record to create. The list is built from your orders, wishlists and storefront customer accounts each time it loads. It is for review only: customers cannot be added, edited, activated, deactivated or deleted from this page.

:::note[Who sees which customers]
Access to the **Customers** menu is controlled by the user's role under [Roles](../roles-permission/roles.md). The customers shown follow the same store rule as [Orders](../order-management/orders.md):

- The main user of the main store sees every customer of the company, including customers who only have wishlist items.
- Any other user sees only customers who have orders from their store assigned to them, and only those orders are counted.
- A user with no store sees none.
:::

---

## Data Displayed

### Customers List Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Type part of a customer's name, email or phone number. The list updates about a second after you stop typing and goes back to page 1. Clear the box to show all customers again. |
| **Filter** | Shows or hides a filter box under each column heading, so you can narrow the rows on the current page by typing in a column. |
| **Sort** | Click a column heading to switch the list between most recent and oldest **Last Activity** first. See [Sorting](#sorting). |
| **Page size** | Use the rows-per-page menu at the bottom of the table to show 25, 50, 75 or 100 rows (50 by default), and the page arrows to move between pages. |
| **View Documentation** | Opens this page in a new browser tab. |

### Customers List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Name** | Text | The customer's name from their latest order, else their latest wishlist item, else their storefront account. | *Priya Shah* |
| **Email** | Text | The customer's email address. | *priya@example.com* |
| **Phone No.** | Text | The customer's phone number. | *9876543210* |
| **Country** | Text | The country on the customer's latest order address. Usually empty, because orders do not collect a country today. | - |
| **Store** | Text | The store of the customer's latest order you can see. Empty for customers with only wishlist items or a storefront account. | *Downtown Store* |
| **Orders** | Number | The number of orders the customer has placed, leaving out **Returned**, **Failed** and **Cancelled** orders. | 3 |
| **Lifetime Spend** | Amount | The total of those orders, in your default currency. | *$12,480.00* |
| **Last Activity** | Date | The date of the customer's latest order or wishlist item, whichever is later. For a customer with only a storefront account, the last time they were seen. | - |

A dash (**-**) is shown in any cell with no value. Hover over a cell to see its full text.

### Customer Details

The **Customer Details** page shows one customer's profile. It has a **Back** button that returns to the previous page and a **View Documentation** link to this section.

| Section | Description |
| ------- | ----------- |
| **Profile** | The customer's image and full name. |
| **Details** | **Username** (the customer's full name), **Email**, **Status** (**Active** in green or **Inactive** in red) and **Contact** (the mobile number, shown with a **+91** prefix). |
| **Recent Search Data** | The customer's recent searches on the storefront, numbered in a single **Search Value** column. Hidden when there are none. |

:::note
The Customers List has no **View Details** icon, so this page opens only from a direct link to a customer.
:::

---

## How It Works

### Who Counts as a Customer

A customer is one email and phone number pair. The email is matched ignoring case and spaces. A person who uses the same email with two different phone numbers appears twice.

The list combines:

| Source | What it adds |
| ------ | ------------ |
| Orders | Everyone who placed an order, with their order count, spend and store. |
| Wishlists | Everyone who saved an item to a wishlist, even without an order. Seen only by the main user of the main store. |
| Storefront accounts | Storefront customers with no order or wishlist item yet, shown with their name and email only. |

Orders or wishlist items with neither an email nor a phone number are left out.

### Sorting

The list opens with the most recent **Last Activity** first. Clicking any column heading switches between newest and oldest **Last Activity** first. The other columns cannot be sorted on their own.

### Search, Filters and Paging

- The search covers every customer you can see, not just the current page. It matches the name, email or phone number, ignoring case.
- The **Filter** boxes under the column headings only narrow the rows already on the current page.
- Changing the page or the page size loads that page again.

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading | The table shows a loading indicator. |
| No customers match | **No records to display** |
| The list cannot be loaded | An error message appears briefly at the top of the screen. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Customers uses it |
| ------ | --------------------- |
| [Orders](../order-management/orders.md) | Supplies most customers, with their name, contact details, store, order count, lifetime spend and last activity. Order status decides which orders count. |
| [Wishlist Products](../sales-funnel/wishlist-products.md) | Customers who saved items are listed, and their latest wishlist date can be their **Last Activity**. |
| [Stores](../roles-permission/stores.md) and [User Management](../roles-permission/user-management.md) | Decide which customers and orders each user sees, and supply the store name. |
| [Multi Currency](../settings/multi-currency.md) | **Lifetime Spend** is shown in your default currency. |

### Modules That Depend On It

None. No other page reads this list. [Customer Reports](./customer-reports.md) and [Analytics](../analytics.md) build their own customer figures from the same orders and wishlists.

### What Changes If…

| Change | Effect on Customers |
| ------ | ------------------- |
| A new customer places an order | They appear in the list, with their order counted. |
| An order is marked **Returned**, **Failed** or **Cancelled** | It is no longer counted in **Orders** or **Lifetime Spend**. The customer stays in the list. |
| A customer adds an item to their wishlist | They appear (for the main user) even without an order, and their **Last Activity** may change. |
| A customer places a new order with a different name | The list shows the name from their latest order. |
| An order is reassigned to another user or store | The customer and that order move to the lists of the users who now see it. |

---

## Edge Cases / Notes

- **Same person, two rows.** A customer is matched by email and phone together, so a different phone number (or a missing one) on another order creates a second row.
- **Store shows only the latest store.** A customer who ordered from several stores shows the store of their latest order.
- **Spend is not converted.** **Lifetime Spend** adds up the order totals as stored, in your default currency.
- **Country is usually empty.** Orders do not collect a country today.
- **Sorting only uses Last Activity.** Clicking **Name** or **Orders** does not sort by that column.
