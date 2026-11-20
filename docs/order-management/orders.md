---
sidebar_position: 1
id: orders
title: Orders
sidebar_label: Orders
---

# Orders

## Overview

The **Orders** module lets you review every order, change its status and payment status, compare its manufacturing cost across manufacturers, send a product to a manufacturer or to CAD design, ask TCC Tech for missing prices, and open the order's invoice and Product Details Worksheet.

It has two screens:

| Screen | What it is for |
| ------ | -------------- |
| **ORDER HISTORY** | The list of orders. Expand an order to see its products, the **Manufacturing Option Comparison** and the order total. |
| **ORDER DETAILS** (*Products, pricing, manufacturing and delivery for this order*) | One order in full: each product's specifications and price breakdown, the order summary, the customer and the delivery. Opened with the eye icon on an order. |

:::note[Who sees which orders]
Users with access to the Orders menu see orders by store:

- The main user of the main store sees every order of the company.
- Any other user sees only the orders of their own store that are assigned to them.
- A user with no store, or whose store is inactive, sees no orders.

The same rule decides which orders a user can open, update and count on the [Dashboard](../dashboard.md) and [Analytics](../analytics.md).
:::

---

## Data Displayed

### Order History Screen List

| Action | Description |
| ------ | ----------- |
| **Search orders** | Type part of an order number, customer name, store name, delivery method, order amount or a stone name used in the order. See [Search and Paging](#search-and-paging). |
| **Expand / Collapse** | Click an order card (or press **Enter** or **Space** on it) to open its products and comparison. Click it again to close it. Only one order is open at a time. |
| **Status badge** | Click the status badge to change the order's status. See [Updating the Order Status](#updating-the-order-status). |
| **View order details** (eye icon) | Opens the **ORDER DETAILS** page for the order. |
| **Manufacturer column header** | In the comparison table, highlights that manufacturer's column. |
| **Order Now** | Sends the product to that manufacturer, or to CAD design, after you confirm in a popup. |
| **Price Request** | Replaces **Order Now** when the column is missing a diamond price. Asks TCC Tech for the missing prices. |
| **Save** | Appears in a manufacturer's column once you type a price. Saves the metal and diamond prices you typed. |
| **VIEW INVOICE** | Opens the order's invoice in a preview. |
| **DOWNLOAD PDW** | Opens the Product Details Worksheet **with prices**. |
| **SHARE PDW** | Opens the Product Details Worksheet **without prices**, ready to give to a manufacturer. |
| **View Documentation** | Opens this page in a new browser tab. |

### Order Card

Each collapsed card shows:

| Part | Description | Example |
| ---- | ----------- | ------- |
| Title | The customer name and the order number. Only the order number when there is no customer name. | **Priya Shah \| ORD-10245** |
| Status badge | The order's status, with its own color and icon. | **PROCESSING** |
| Details line | The order date, the number of items, **Manufacturer** (**Not assigned** when none is linked), and the **Store** and delivery method when known. | *Nov 18, 2026 · 2 items · Manufacturer: Not assigned · Store: Downtown · Home Delivery* |
| Amount | The order total in the order's own currency, with an arrow that flips when the card is open. | **$4,250.00** |

The number of items is the number of products in the order, not the total quantity.

### Order Statuses

| Status | Badge | Meaning |
| ------ | ----- | ------- |
| **Pending** | Grey | Order received, not yet confirmed |
| **Confirmed** | Green | Order confirmed |
| **Processing** | Amber | Order is being prepared |
| **Out for Delivery** | Blue | Order is on its way to the customer |
| **Delivered** | Green | Order delivered |
| **Returned** | Amber | Order returned by the customer |
| **Failed** | Red | Order or its payment failed |
| **Canceled** | Red | Order cancelled |
| **Archived** | Grey | Order archived |

The status menu offers **Pending**, **Confirmed**, **Processing**, **Out For Delivery**, **Delivered**, **Returned** and **Cancelled**. **Failed** and **Archived** are shown on orders but cannot be chosen from the menu.

### Manufacturing Option Comparison

When you expand an order, each product is listed (image, name, **Qty** and price) with a **Manufacturing Option Comparison** table below it: *TCC Tech vs your local manufacturing options — compared line by line.* The table is shown only when the product has a cost breakdown. Otherwise only the product line appears.

| Column | Description |
| ------ | ----------- |
| **CAD** | The **CAD DESIGN** price for the product, set by TCC Tech. **Order Now** at the bottom sends the product for CAD design. |
| **COST COMPONENT** | The cost line being compared. |
| **WT** | The weight for metal and diamond lines (for example *4.2 g* or *0.5 ct*), or a dash. |
| **BENCHMARK** columns | TCC Tech's own manufacturers, always first, each under its own name with a **BENCHMARK** badge. Their metal and diamond prices are TCC Tech's prices. When TCC Tech has no manufacturer set up, one column named **TCC Tech** is shown instead. |
| Manufacturer columns | One column for each of your active manufacturer templates in [Manufacturer Charges](./manufacturer-charges.md). Their metal and diamond prices are your own current rates. |

Cost lines, in order:

| Line | How it is worked out |
| ---- | -------------------- |
| **Metal** (with the metal name, for example *Metal (Gold)*) | The metal rate for the karat, times the metal weight. Editable. |
| Each diamond or stone | The price of that stone (center and side stones each on their own line). Editable. |
| **Labour**, **Setting Charges**, **Other Charges** | The manufacturer's charges, each charge type on its own line below the group. The rate is shown in green above the amount, for example *20.0%* or *$20/g*. |
| **Subtotal** | Metal, diamonds, labour, setting and other charges. The CAD price is not included. |
| **Tariff**, **Tax**, **Shipping** | The manufacturer's own tariff, tax and shipping, worked out on the subtotal. A benchmark with no shipping charge uses TCC Tech's shipping slab. |
| **Landed Cost** | Subtotal plus tariff, tax and shipping. |
| **Margin** | Retail price minus landed cost, with its percentage of the landed cost. |
| **Retail Price** | The price the product was sold at, per unit. |

Subtotal and total rows are shaded and bold. All amounts are per unit of the product and in the order's own currency. A line a manufacturer has no amount for shows **0.00**.

### Order Footer

Below the products, the footer has **VIEW INVOICE**, **DOWNLOAD PDW** and **SHARE PDW** on the left and the order **TOTAL** on the right.

### Order Details Page

Click the eye icon on an order card to open **ORDER DETAILS**.

| Action | Description |
| ------ | ----------- |
| **Back** | Returns to the previous page. |
| **View Invoice** | Opens the invoice preview. See [Invoice](#invoice). |
| **Download PDW** / **Share PDW** | Open the Product Details Worksheet with or without prices. |
| **View Documentation** | Opens this page. |
| Status badge | Changes the order status, as on the list. |
| Payment badge | Shows **PAID** (green) or **UNPAID** (amber). Click it to switch to the other one. See [Updating the Payment Status](#updating-the-payment-status). |

The page is made up of these cards:

| Card | What it shows |
| ---- | ------------- |
| Header | The order number, status badge, payment badge, a **CANCELLED** tag when the order is cancelled, the date, number of items, store and delivery method, and the **TOTAL**. |
| Product cards (one per product) | Image, **Item 1 of 2** (when there are several), name, **SKU**, the configurator tag (for example *Ring Configurator*), **Qty**, **Unit price** and **Final price**. Click the card to open **Specifications**, **Metal Details**, **Diamond Details** and the **Price Breakdown**. |
| **Order Summary** | **Sub Total**, **Gift Charge**, **Discount**, **Tax**, **Shipping**, **Total**, then **Sales Person** and **Sales Email** (the user who created the order). |
| **Customer** | **Name**, **Phone** and **Email**. |
| **Delivery** | **Method**, **Date**, **Time Slot**, **Gift Package**, **Pickup Store**, **Store** and **Manufacturer**. |
| **Shipping Address** | Shown when the order has one. |
| **Order Note** | The customer's note, when there is one. |

A line with no value is left out of its card.

The **Price Breakdown** of a product lists **Metal Value**, **Labour Charge**, **Other Charge**, **Center Diamond**, **Side Diamond**, **Margin** (with the percentage when the margin is a percentage), **Discount**, **Tax**, **Price Correction** (when the price was corrected, shown as *before → after*) and the **Final Price**.

---

## How It Works

### Search and Paging

- The list shows 10 orders per page, newest order date first. Page numbers appear at the bottom right when there is more than one page.
- Search looks for your text, ignoring case, in the order number, customer name, store name, delivery method (*Home Delivery* or *Store Pickup*), order amount (for example *1709*, *1,709.36* or *$1709.3*) and the names of stones used in the order.
- The list refreshes once you pause typing and goes back to page 1. Clearing the box applies at once.
- Searching or changing page closes any open order.

### Updating the Order Status

1. Click the status badge next to the order number, on the list or on the details page. A menu lists the statuses, with the current one highlighted.
2. Select the new status. Choosing the current status does nothing.
3. The status is saved at once, with the message **Order status updated successfully**. There is no confirmation popup. The badge is disabled for a moment while it saves.

When the status changes:

- The customer is emailed the new status, using the order status email from [Email Template](../settings/email-template.md). If no template is set up, no email is sent, but the status still changes.
- The change (old status and new status) is recorded in the [Audit Log](../settings/audit-log.md).

:::note
Clicking the status badge does not open or close the order card.
:::

### Updating the Payment Status

1. Open the order with the eye icon.
2. Click the **PAID** or **UNPAID** badge. The menu offers the other status.
3. Select it. The message **Payment status updated successfully** appears.

Only the payment status changes. No payment, refund, invoice or email is created. The change is recorded in the [Audit Log](../settings/audit-log.md).

### Steps to Compare and Order from a Manufacturer

1. Click an order card to expand it.
2. Read the **Manufacturing Option Comparison** for each product. Compare the **Landed Cost** of each column with the **BENCHMARK**.
3. Click a manufacturer's header to highlight its column (this is only a highlight and does not change the order).
4. If you have a quote from a manufacturer, type its metal and diamond prices in that column and click **Save**. See [Editing Metal and Diamond Prices](#editing-metal-and-diamond-prices).
5. If the column shows **Price Request**, send it and wait for TCC Tech to add the prices. See [Price Request](#price-request).
6. Click **Order Now** at the bottom of the column, add a note if needed and click **Place order**.

### Editing Metal and Diamond Prices

Metal and diamond lines show `$` boxes in every manufacturer column. In a **BENCHMARK** column, a box appears only on a metal or diamond line that TCC Tech has no price for.

1. Type the price in the box (digits and one decimal point, up to two decimals).
2. A **Save** button appears at the bottom of that column. Click it.
3. The message **Manufacturing prices saved successfully** appears and the table refreshes with your saved prices.

| Situation | What happens |
| --------- | ------------ |
| A box is changed and then set back to its old value | **Save** disappears. Nothing has changed. |
| A metal or diamond box in the column is empty | The box shows **Required** and the message **Enter a price above 0 for the metal and every diamond** appears. Nothing is saved. |
| A box is 0 | The box shows **Must be above 0**. Nothing is saved. |
| The product was already ordered from that manufacturer | The boxes are read-only and **Save** is disabled. |
| The **TCC Tech** column shown when TCC Tech has no manufacturer | Prices can be typed but are not saved. |

Saved prices belong to this order product and this manufacturer only. They do not change your metal rates or diamond prices.

### Order Now

1. Click **Order Now** at the bottom of a manufacturer's column (or of the **CAD** column).
2. The popup opens with the title **Order from** and the manufacturer's name, or **Order CAD design**, and the order number. For CAD design it explains: *This sends the product for CAD design. You can follow its progress on this order.*
3. Optionally type a note (**Note for the manufacturer** or **Note for the CAD designer**, up to 500 characters; the counter shows **0/500**).
4. Click **Place order** (it shows **Placing order…** while sending), or **Cancel**.
5. On success the message **Order placed successfully** appears and the popup closes.

What is sent:

| Order | Who receives the email | What the email holds |
| ----- | ---------------------- | -------------------- |
| A manufacturer column | The email addresses of that manufacturer, from its template in [Manufacturer Charges](./manufacturer-charges.md) | The order number and date, your company, the product (name, SKU, quantity, options, metal and diamond details), your note and the manufacturer's cost per unit up to the landed cost |
| A **BENCHMARK** column | The email addresses of that TCC Tech manufacturer | The same as above |
| **CAD** | TCC Tech | The product details, your note and the CAD price |

Your margin, retail price and the end customer's details are never sent. Each address gets its own email. The order counts as sent when at least one address received it.

When **Order Now** is available:

| Situation | Button |
| --------- | ------ |
| Every metal and diamond price is there | **Order Now** |
| A diamond price is missing | **Price Request** instead. See below. |
| Only the metal price is missing | **Order Now**, disabled. Type and save the metal price first. |
| Prices are typed but not saved, or are saving | **Order Now**, disabled until **Save** has run |
| The product was already sent to that manufacturer | **Order Sent**, disabled. The column's prices are locked. |
| The **TCC Tech** column shown when TCC Tech has no manufacturer | **Order Now**, disabled |

| Problem | Message |
| ------- | ------- |
| The manufacturer has no valid email address | *No valid email address is configured for the selected provider.* |
| The same CAD request was sent less than 5 minutes ago | *This order request was already sent to the selected provider in the last 5 minutes.* |
| The email could not be sent | *The order email could not be sent. Please try again.* |
| Placing the order takes too long | *The server took too long to respond. Check this order before trying again; it may already be placed.* Check the order before trying again, to avoid ordering twice. |

Orders sent to a **BENCHMARK** manufacturer and CAD requests are TCC Tech's work. They appear for TCC Tech on its [Enquiry](../enquiry.md) page.

### Price Request

A **Price Request** asks TCC Tech to add benchmark prices that are missing for the product, for example the price of a diamond grade TCC Tech does not price yet.

1. Click **Price Request** at the bottom of the column.
2. The popup opens with the title **Request price from** and the column's name, and the order number.
3. Optionally type a **Note for the manufacturer** (up to 500 characters).
4. Click **Send request** (it shows **Sending request…** while sending), or **Cancel**.
5. On success the message **Price request sent successfully** appears.

The request always goes to TCC Tech, never to one of your own manufacturers. Sent from a **BENCHMARK** column, it goes to that TCC Tech manufacturer. Sent from one of your own columns, it goes to every active TCC Tech manufacturer. It lists the product in full and each missing benchmark price (the metal, the center diamond and each side diamond). It is not an order: nothing is recorded as sent, and the button stays **Price Request** until the prices are there. You can send it again.

| Problem | Message |
| ------- | ------- |
| TCC Tech already has every benchmark price for the product | *TCC Tech has every benchmark price of this product: there is nothing to request.* |
| TCC Tech's manufacturer has no email address | *No valid email address is configured for the selected provider.* |
| The email could not be sent | *The price request email could not be sent. Please try again.* |

Price requests appear for TCC Tech on its [Enquiry](../enquiry.md) page under **Pricing Request**.

:::tip
If you already have your own price for the missing diamond, type it in the column and click **Save** instead. Once every metal and diamond price is saved, **Order Now** becomes available.
:::

### Product Details Worksheet (PDW)

**DOWNLOAD PDW** and **SHARE PDW** open the **Product Details Worksheet** in a preview window on the same page (the subtitle shows the order number and **With prices** or **Without prices**). Click **Save PDF** to download it as a PDF named `PDW_` followed by the order number, or the close (X) icon to close it. If the PDF cannot be created, the message **Could not create the PDF. Please try again.** appears.

The worksheet uses your company logo, colors and fonts.

| Part | Download (with prices) | Share (without prices) |
| ---- | ---------------------- | ---------------------- |
| Header facts: **Order No.**, **Order Date**, **Status**, **Items**, **Store**, **Delivery**, **Delivery Date**, **Time Slot**, **Gift Package** | ✅ | ✅ |
| **Payment** status | ✅ | - |
| **Customer**, **Shipping Address** or **Pickup Store**, **Order Note** (when available) | ✅ | ✅ |
| Each item: image, **Item N**, name, **SKU**, **Qty**, **Diamond Details**, **Metal Details**, **Product Specifications** | ✅ | ✅ |
| Item **Price**, price summary (**Sub Total**, **Discount**, **Tax**, **Shipping**) and **Order Total** | ✅ | - |
| Page 2 **Manufacturing Comparison**: every cost line for every manufacturer, for each item | ✅ | - |
| Footer note | **With prices** and the date generated | **For manufacturing reference · No prices** |

:::tip
Use **SHARE PDW** when sending the specification to a manufacturer, so your prices and margins stay private. Use **DOWNLOAD PDW** for your own records.
:::

### Invoice

#### Invoice Preview

Click **VIEW INVOICE** on an open order (or **View Invoice** on the details page) to preview its invoice. The preview is titled **Invoice** with the order number beneath it. Click **Save PDF** to download it as a PDF named `Invoice_` followed by the order number, or the close (X) icon to close it.

The invoice is branded with your company logo (or company name), colors and fonts, and includes:

- Your company name and address at the top, and your email, website and phone at the bottom when they are filled in your [Company Info](../settings/company-info.md)
- The heading **INVOICE** with **Order No.**, **Order Date** and **Status** (marked **(Cancelled)** when the order is cancelled)
- A box with **Payment**, **Store**, **Delivery**, **Delivery Date** and **Time Slot**
- **Bill To** (customer name, phone and email), and **Ship To** with the shipping address or **Pickup Store**
- An item table with **#**, **Product / Description** (with the **SKU** and specifications), **Qty**, **Rate** and **Amount**
- **Subtotal**, **Discount**, **Shipping Charges**, **Tax** and the **Total**
- A **Summary** (**Gross Amount**, the same charges and **Total Amount**) and a **Notes** box, which shows the customer's order note and the line *We appreciate your business. This is a computer generated invoice and does not require a signature.*

#### Standalone Invoice Page

The older invoice page (opened for a single order) is also available. It is titled **Order Confirmation**.

| Action | Description |
| ------ | ----------- |
| **Back** | Returns to the previous page. |
| **Print** | Opens the printable invoice in a new tab. The browser's print dialog opens automatically after a moment, so you can print the invoice or save it as a PDF. |
| **View Documentation** | Opens this help section. |

It includes:

- Your company logo, address, mobile number (**MOB**) and **GSTIN NO**
- **Order Number**, **Invoice Number**, **Order Date**, **Created** date, **Payment Method** (for example **CashOnDelivery**, **Paypal**, **Affirm**, **YOCO**, **Card** or **Razorpay**), **Transaction ID** and **HSN Code**
- The **Shipping Address**, or the store address and branch name for showroom pickup
- The **Billing Address**
- An item table with **Sr No**, **Product Name**, **Qty**, **Purity**, **Metal wt.**, **Rate**, **Amount**, **Dia Amount**, **Making Charges**, **Other Charges** and **Total Amount**
- **Sub Total**, **Shipping**, **Discount**, each tax with its rate, and **Grand Total**
- A **Note** with a declaration and your company email for queries

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the list | Six grey placeholder cards. |
| No orders | **No orders found** |
| No orders match the search | **No orders match your search** |
| Opening an order | Grey placeholder rows inside the card while its details load. Details load the first time you open the order. |
| An order cannot be opened | **Could not load this order's details.** (on the card or on the details page) |
| Loading the details page | Grey placeholder blocks in the shape of the cards. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Orders uses it |
| ------ | ------------------ |
| Storefront checkout | Orders are created when customers (or store users) place them on the storefront. |
| [Manufacturer Charges](./manufacturer-charges.md) | Your active templates are the manufacturer columns. Their labour, setting, other, tariff, tax and shipping charges fill those columns, and their email addresses receive **Order Now**. |
| [Metal Rate Setting](../settings/metal-rate-setting.md) and [Metal Karat](../product-management/masters/metal-master/metal-karat.md) | Your current metal rates price the metal line in your manufacturer columns. |
| Your diamond prices | Price the diamond lines in your manufacturer columns. A diamond you have no price for shows as missing. |
| [Product Margin](../settings/margin-cost-center/product-margin.md) | The margin saved with each order item is shown in its **Price Breakdown**. |
| [Stores](../roles-permission/stores.md) and [User Management](../roles-permission/user-management.md) | Decide which orders each user sees, and supply the store name and **Sales Person**. |
| [Email Template](../settings/email-template.md) | The order status email sent to the customer when you change the status. |
| [Multi Currency](../settings/multi-currency.md) | Each order is shown in the currency it was placed in. |
| [Company Info](../settings/company-info.md) | Logo, address and contact details on the invoice and worksheet. |
| TCC Tech (platform) | Supplies the benchmark prices, its own manufacturers, the CAD price and the shipping slab used by a benchmark. |

### Modules That Depend On It

| Module | How it uses Orders |
| ------ | ------------------ |
| [Dashboard](../dashboard.md) | Order counts by status, gross sales and recent orders. |
| [Analytics](../analytics.md) | Orders, revenue, selling price, margin, sales team and purchase figures. |
| [Enquiry](../enquiry.md) | Every CAD request, **BENCHMARK** manufacturer order and **Price Request** sent from an order appears there for TCC Tech, with the order number, date, store and status. |
| [Customers](../customer-management/customers.md) | A customer's orders and order count. |
| [Audit Log](../settings/audit-log.md) | Records each status and payment status change. |

### What Changes If…

| Change | Effect |
| ------ | ------ |
| You change an order's status | The customer is emailed (when a template exists), the Dashboard and Analytics move the order to its new status, and the change is logged. If it becomes **Returned**, **Failed** or **Cancelled**, it leaves revenue on the Dashboard and Analytics, and its CAD or manufacturer request is no longer counted as revenue on Enquiry. |
| A manufacturer template is added, deactivated or edited in Manufacturer Charges | Comparison columns change for products that have not been ordered yet. |
| Metal rates, diamond prices, margins or TCC Tech's prices change | Comparisons change for products that have not been ordered yet. |
| A product is sent with **Order Now** (to a manufacturer or for CAD) | Its comparison is frozen from then on. Later changes to rates, charges, margins, manufacturers or the CAD price no longer change it. Prices you saved in the ordered column are frozen too. Other columns still use the prices saved in them now. |
| TCC Tech adds the prices you asked for | The **BENCHMARK** column shows them and **Order Now** becomes available. |
| An order is reassigned to another user or store | It moves to that user's list, Dashboard and Analytics. |

---

## Edge Cases / Notes

- **Manufacturer shows Not assigned.** Orders are not linked to a manufacturer, so the card's **Manufacturer** reads **Not assigned** and no comparison column is highlighted when you open an order. Click a header to highlight one.
- **One order to each manufacturer.** A product can be sent to the same manufacturer only once. You can still send it to another manufacturer, or send another product of the same order.
- **CAD can be sent again**, but not within 5 minutes of the last CAD request for the same product. Its button never changes to **Order Sent**.
- **Price Request goes to TCC Tech.** Even when clicked in one of your own manufacturer columns, it asks TCC Tech for the missing benchmark prices. If TCC Tech already has them all, the request is refused, so type and save your own diamond price in that column instead.
- **Missing diamond prices in your own columns** mean your own pricing has no price for that stone. Type and save the price in the column to order anyway.
- **Status spelling.** The badge shows **Canceled** and **Out for Delivery**. The menu shows **Cancelled** and **Out For Delivery**. They are the same statuses.
- **Older orders.** An order placed before the price breakdown was stored may show no comparison table, or lines with no amount.
- **Amounts are per unit.** Comparison amounts are for one piece. The product's quantity is shown beside its name.
- **Unsaved prices are lost** when you close the order, change page or search.

:::tip
Use **SHARE PDW** when you send a product's specification to a manufacturer by hand. Use **Order Now** when you want the request recorded and the column locked.
:::
