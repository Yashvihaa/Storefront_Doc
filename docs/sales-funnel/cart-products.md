---
sidebar_position: 1
id: cart-products
title: Cart Products
sidebar_label: Cart Products
---

# Cart Products

## Overview

The **Cart Products** page lists the products customers have put in their storefront carts and not yet ordered. Use it to follow up on abandoned carts and see which products and prices customers are interested in.

The page is view-only. Cart items cannot be edited or removed from the admin panel.

:::note[Who sees which carts]
Access to the page is controlled by the user's role under [Roles](../roles-permission/roles.md). Carts are not linked to a store, so every user who can open the page sees every cart of the company, whatever their store.
:::

---

## Data Displayed

### Cart Products Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Type part of a customer's name, email or phone number. The list updates about a second after you stop typing and goes back to page 1. Clear the box to show all carts again. |
| **Filter** | Shows or hides a filter box under each column heading, so you can narrow the rows on the current page by typing in a column. |
| **Sort** | Click the **Added On** heading to sort by date. The other columns cannot be sorted. |
| **Page size** | Use the rows-per-page menu at the bottom of the table to show 25, 50, 75 or 100 rows (50 by default), and the page arrows to move between pages. |
| **View Details** | Click the eye icon in the **Action** column to open the cart in the **View Cart Data** panel. |
| **View Documentation** | Opens this page in a new browser tab. |

### List Columns

Each row is one product a customer added to their cart.

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Action** | - | The **View Details** (eye) icon. | - |
| **User Name** | Text | The customer who owns the cart. A dash (**-**) is shown for guest shoppers. | *Priya Shah* |
| **Product Name** | Text | The product in the cart. | *Oval Solitaire Ring* |
| **SKU** | Text | The product's SKU. | *RG-OV-1001* |
| **Items** | Number | The number of cart rows, always **1**. The quantity is shown in the panel. | 1 |
| **Cart Total** | Amount | The total for this cart item at today's prices, after any discount and with tax. | *$2,415.00* |
| **Added On** | Date | The date the product was added to the cart. | - |

### View Cart Data

Click the eye icon to open the **View Cart Data** panel on the right of the screen. Close it with the close button in its header.

The product is shown in these cards. A line is shown only when it has a value.

| Card | Details shown |
| ---- | ------------- |
| **Product Details** | The product image (an animated placeholder when there is none), the name, **SKU**, the configurator tag (for example *Ring Configurator*), **Qty** and **Price**. |
| **Configuration** | **Metal**, **Karat**, **Size**, **Head Tone**, **Shank Tone**, **Band Tone** and **Engraving**. |
| **Diamond Details** | **Stone**, **Diamond Type**, **Shape**, **Carat**, **Color**, **Clarity**, **Cut**, **Side Diamond Type**, **Side Color**, **Side Clarity** and **Side Cut**. |
| **Offer Applied** | Shown when an offer discounts the product: **Offer**, **Coupon**, **Discount** and **Price After Discount**. |
| **Price Breakdown** | How the price is built up: **Metal Value**, **Labour Charge**, **Other Charge**, **Center Diamond**, **Side Diamond**, **Margin** (amount and rate), **Price Correction** (before → after, when a correction applies) and **Final Price**. |
| **Cart Summary** | **Sub Total**, **Discount**, **Sub Total After Discount**, **Tax** and **Cart Total**. |

The panel does not show a customer section. Use the **User Name** column to see who owns a cart.

---

## How It Works

### Where Carts Come From

A row is added each time a customer adds a product to their cart on the storefront. It leaves this list when the customer orders the product. Guest shoppers who are not signed in can have carts too. They show no user name.

### How Prices Are Shown

Prices are worked out again each time the list or panel loads, at your current metal rates, diamond prices, margins, labour and price corrections. The coupon stored with the cart item is checked again, and your taxes are applied on the total after discount. So the **Cart Total** shows what the customer would pay today, not the price when they added the product.

### Steps to Follow Up on an Abandoned Cart

1. Open **Cart Products**.
2. Search for the customer's name, email or phone number, or sort by **Added On** to find older carts.
3. Click the eye icon to see the product, its options and the price.
4. Contact the customer. Their email and phone number are in the **Customers Cart** download on [Customer Reports](../customer-management/customer-reports.md).

### Search, Filters and Paging

- The search covers every cart of the company, not just the current page. It matches the customer's name, email or phone number, not the product.
- The **Filter** boxes under the column headings only narrow the rows already on the current page.
- The list opens with the most recently added items first.

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No carts match | **No records to display** |
| The list cannot be loaded | An error message appears briefly at the top of the screen. |
| Loading a cart | Grey placeholder lines in the panel. |
| A cart cannot be loaded | **Could not load the cart details**, the reason (or *No details were returned for this cart.*) and a **Try again** button. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Cart Products uses it |
| ------ | ------------------------- |
| Storefront cart | Customers add the products shown here. |
| [All Products](../product-management/all-products.md) and the configurator products | Supply the product name, SKU, image and options. |
| [Metal Rate Setting](../settings/metal-rate-setting.md), [Product Margin](../settings/margin-cost-center/product-margin.md), [Diamond Margin](../settings/margin-cost-center/diamond-margin.md), [Labour Management](../settings/margin-cost-center/labour-management.md) | Used to work out the current price of each cart item. |
| [Offers & Discounts](../product-management/offers-discounts.md) | The coupon stored with a cart item is checked again and shown under **Offer Applied**. |
| [Tax Master](../settings/tax-master.md) | Your taxes are applied to the **Cart Total**. |
| [Multi Currency](../settings/multi-currency.md) | Amounts are shown in your default currency. |

### Modules That Depend On It

| Module | How it uses carts |
| ------ | ----------------- |
| [Analytics](../analytics.md) | Cart items count as customer selections for shapes, settings, metals and stones. |
| [Customer Reports](../customer-management/customer-reports.md) | The **Customers Cart** download lists cart items with customer contact details. |

### What Changes If…

| Change | Effect on Cart Products |
| ------ | ----------------------- |
| Metal rates, diamond prices, margins or labour change | Cart prices change the next time the list or panel loads. |
| An offer ends or its coupon stops being valid | The discount no longer applies, and the **Cart Total** goes up. |
| A customer orders the product | The row leaves this list. |
| A tax rate changes | The **Tax** and **Cart Total** change. |

---

## Edge Cases / Notes

- **Prices are live.** The price shown can differ from what the customer saw when they added the product.
- **One product per row.** A customer with three products in their cart has three rows.
- **No store filter.** Carts are not linked to a store, so store rules do not limit this list.
- **Guest carts** show **-** under **User Name** and cannot be found by searching for a name.

:::tip
A product that is saved but not in a cart appears under [Wishlist Products](./wishlist-products.md).
:::
