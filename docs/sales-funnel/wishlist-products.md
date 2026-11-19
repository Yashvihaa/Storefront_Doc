---
sidebar_position: 2
id: wishlist-products
title: Wishlist Products
sidebar_label: Wishlist Products
---

# Wishlist Products

## Overview

The **Wishlist Products** page lists the designs customers have saved on your storefront. Use it to see which products are popular and to follow up with customers on designs they liked.

The page is view-only. Wishlist items cannot be edited or removed from the admin panel.

:::note[Who sees which wishlists]
Access to the page is controlled by the user's role under [Roles](../roles-permission/roles.md). Wishlists are not linked to a store, so every user who can open the page sees every wishlist item of the company, whatever their store.
:::

---

## Data Displayed

### Wishlist Products Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Type part of a customer's name, email or phone number. The list updates about a second after you stop typing and goes back to page 1. Clear the box to show all items again. |
| **Filter** | Shows or hides a filter box under each column heading, so you can narrow the rows on the current page by typing in a column. |
| **Sort** | Click the **Added On** heading to sort by date. The other columns cannot be sorted. |
| **Page size** | Use the rows-per-page menu at the bottom of the table to show 25, 50, 75 or 100 rows (50 by default), and the page arrows to move between pages. |
| **View Details** | Click the eye icon in the **Action** column to open the item in the **View Wishlist Data** panel. |
| **View Documentation** | Opens this page in a new browser tab. |

### List Columns

Each row is one product a customer saved.

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Action** | - | The **View Details** (eye) icon. | - |
| **User Name** | Text | The customer who saved the product. | *Priya Shah* |
| **Product Name** | Text | The saved product. | *Halo Pendant* |
| **SKU** | Text | The product's SKU. | *PD-HL-2040* |
| **Price** | Amount | The price of one unit of the product at today's prices. | *$1,180.00* |
| **Added On** | Date | The date the product was saved. | - |

### View Wishlist Data

Click the eye icon to open the **View Wishlist Data** panel on the right of the screen. Close it with the close button in its header.

The item is shown in these cards. A line is shown only when it has a value.

| Card | Details shown |
| ---- | ------------- |
| **User Details** | The customer's initial, name, email and phone number, then **Items** and **Added On**. A dash (**-**) is shown for details that are not available. |
| **Product Details** | The product image (an animated placeholder when there is none), the name, **SKU**, the configurator tag (for example *Ring Configurator*), **Qty** and **Price**. |
| **Configuration** | **Metal**, **Karat**, **Size**, **Head Tone**, **Shank Tone**, **Band Tone** and **Engraving**. |
| **Diamond Details** | **Stone**, **Diamond Type**, **Shape**, **Carat**, **Color**, **Clarity**, **Cut**, **Side Diamond Type**, **Side Color**, **Side Clarity** and **Side Cut**. |
| **Price Breakdown** | How the price is built up: **Metal Value**, **Labour Charge**, **Other Charge**, **Center Diamond**, **Side Diamond**, **Margin** (amount and rate), **Price Correction** (before → after, when a correction applies) and **Final Price**. |

---

## How It Works

### Where Wishlist Items Come From

A row is added each time a customer saves a product to their wishlist on the storefront. A customer can save the same product only once. When the customer removes it from their wishlist, the row is deleted.

### How Prices Are Shown

Prices are worked out again each time the list or panel loads, at your current metal rates, diamond prices, margins, labour and price corrections. Wishlists have no coupons, offers, tax or totals, so only each product's own price is shown.

### Steps to Follow Up on a Saved Design

1. Open **Wishlist Products**.
2. Search for the customer's name, email or phone number, or sort by **Added On**.
3. Click the eye icon. The **User Details** card shows the customer's email and phone number.
4. Contact the customer about the design.

### Search, Filters and Paging

- The search covers every wishlist item of the company, not just the current page. It matches the customer's name, email or phone number, not the product.
- The **Filter** boxes under the column headings only narrow the rows already on the current page.
- The list opens with the most recently saved items first.

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No items match | **No records to display** |
| The list cannot be loaded | An error message appears briefly at the top of the screen. |
| Loading an item | Grey placeholder lines in the panel. |
| An item cannot be loaded | **Could not load the wishlist details**, the reason (or *No details were returned for this wishlist.*) and a **Try again** button. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Wishlist Products uses it |
| ------ | ----------------------------- |
| Storefront wishlist | Customers save the products shown here. |
| [All Products](../product-management/all-products.md) and the configurator products | Supply the product name, SKU, image and options. |
| [Metal Rate Setting](../settings/metal-rate-setting.md), [Product Margin](../settings/margin-cost-center/product-margin.md), [Diamond Margin](../settings/margin-cost-center/diamond-margin.md), [Labour Management](../settings/margin-cost-center/labour-management.md) | Used to work out the current price of each item. |
| [Multi Currency](../settings/multi-currency.md) | Amounts are shown in your default currency. |

### Modules That Depend On It

| Module | How it uses wishlists |
| ------ | --------------------- |
| [Customers](../customer-management/customers.md) | Customers who saved items are listed even without an order, and their latest wishlist date can be their **Last Activity**. |
| [Analytics](../analytics.md) | Wishlist adds feed **Wishlist Added**, and saved items count as selections for shapes, settings, metals and stones. |
| [Customer Reports](../customer-management/customer-reports.md) | The **Customers Wishlist** download lists saved products with customer details. |

### What Changes If…

| Change | Effect on Wishlist Products |
| ------ | --------------------------- |
| Metal rates, diamond prices, margins or labour change | Prices change the next time the list or panel loads. |
| A customer removes a product from their wishlist | The row is deleted and no longer counts on Customers or Analytics. |
| A customer saves a product | A new row appears, and the customer appears on the Customers list (for the main user). |

---

## Edge Cases / Notes

- **Prices are live.** The price shown can differ from the price when the customer saved the product.
- **No store filter.** Wishlists are not linked to a store, so store rules do not limit this list.
- **Items is per row.** The **Items** figure in **User Details** counts this wishlist row, not the customer's whole wishlist.

:::tip
To download every customer's wishlist as an Excel file, use the **Customers Wishlist** report on the [Customer Reports](../customer-management/customer-reports.md) page.
:::
