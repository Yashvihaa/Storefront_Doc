---
sidebar_position: 1
id: orders
title: Orders
sidebar_label: Orders
---

# Orders

The **Orders** module (page title **ORDER HISTORY**, *Track and review all order status details*) lets you review every order, change its status, compare its manufacturing cost across manufacturers, send it to a manufacturer or to CAD design, and open the order's invoice and Product Details Worksheet.

---

## Order History Screen List

The page shows one card per order, newest first, 10 orders per page. Page numbers appear at the bottom right when there is more than one page (changing page closes any open order). If there are no orders, the page shows **No orders found**.

Each collapsed card shows:

- A package icon, the **order number** and the **status** badge
- The **order date**, the **number of items**, **Manufacturer** (or **Not assigned** if none was chosen yet), and, when available, the **Store** and the shipping method
- The **order amount** on the right, with an arrow showing whether the card is open

| Action | Description |
| ------ | ----------- |
| **Expand / Collapse** | Click an order card (or press **Enter** or **Space** on it) to expand it. Click it again to collapse it. Only one order is open at a time, and details load when you first open the order. |
| **Status badge** | Click the status badge to change the order's status (see [Updating the Order Status](#updating-the-order-status)). |
| **Select Manufacturer** | In the comparison table, click a manufacturer's column header to highlight that manufacturer. |
| **Order Now** | Sends the product to a manufacturer, or to CAD design, after you confirm in a popup. |
| **Save** | Saves the metal and diamond amounts you edited for one manufacturer. |
| **VIEW INVOICE** | Opens the order's invoice in a preview. |
| **DOWNLOAD PDW** | Opens the Product Details Worksheet **with prices**. |
| **SHARE PDW** | Opens the Product Details Worksheet **without prices**, ready to give to a manufacturer. |
| **View Documentation** | Opens the help page for this screen in a new browser tab. |

If an order cannot be opened, the card shows **Could not load this order's details.**

---

### Order Statuses

The status badge on each card has its own colour and icon, and shows the status name your system reports for the order.

| Status | Meaning |
| ------ | ------- |
| **Pending** | Order received, not yet confirmed |
| **Confirmed** | Order confirmed |
| **Processing** | Order is being prepared |
| **Out For Delivery** | Order is on its way to the customer |
| **Delivered** | Order delivered |
| **Returned** | Order returned by the customer |
| **Failed** | Order failed |
| **Cancelled** | Order cancelled |
| **Archived** | Order archived |

---

### Updating the Order Status

1. Click the status badge next to the order number. A menu lists all the statuses above, with the current one highlighted.
2. Select the new status. Choosing the current status does nothing.
3. The status is saved as soon as you select it, with the message **Order status updated successfully**. There is no confirmation popup, and the badge is disabled for a moment while it saves.

:::note
Clicking the status badge does not open or close the order card.
:::

---

### Manufacturing Option Comparison

When you expand an order, each product in it is listed (image, name, **Qty** and price) with a **Manufacturing Option Comparison** table below it: *TCC Tech vs your local manufacturing options, compared line by line.* The table is shown only when the order has a cost breakdown; otherwise only the product lines appear.

| Column | Description |
| ------ | ----------- |
| **CAD** | The **CAD DESIGN** fee for the product. The **Order Now** button at the bottom of this column sends the product for CAD design. |
| **COST COMPONENT** | The cost line being compared. |
| **WT** | The weight for metal and diamond lines (for example grams or carats), or a dash. |
| **Manufacturer columns** | One column per manufacturer with its amount for each cost line. **TCC Tech** is always the first column and carries the **BENCHMARK** badge. A dash means the manufacturer has no amount for that line. |

The cost lines come from your pricing and manufacturer charge templates. They cover the metal, each diamond, the manufacturing charges, subtotals, duty, tariff, tax, shipping, the landed cost, your margin and the retail price. Where a rate applies, it is shown in green above the amount. Subtotal and total rows are shaded and bold.

:::tip
The manufacturer the order was placed with is highlighted in amber when you open the order. Click another manufacturer's header to highlight that column instead (this is only a highlight; it does not change the order). The table scrolls sideways while the **CAD** and **COST COMPONENT** columns stay in place.
:::

#### Editing Metal and Diamond Amounts

In every manufacturer column except the **TCC Tech** benchmark, the metal and diamond amounts are shown as editable `$` boxes. Use this to record the price a manufacturer actually quoted.

1. Type the new amount in the box (digits and one decimal point, up to two decimals).
2. Click **Save** at the bottom of that manufacturer's column.
3. The message **Manufacturing prices saved successfully** appears and the table refreshes with your saved amounts.

| Situation | What happens |
| --------- | ------------ |
| No box was changed | **No changes to save** appears |
| A box is cleared and saved | The amount you saved before for that line is removed |
| The product was already ordered from that manufacturer | The boxes are read-only and **Save** is disabled |
| **TCC Tech** (benchmark) | Amounts are not editable and there is no **Save** button |

#### Order Now

1. Click **Order Now** at the bottom of a manufacturer's column (or of the **CAD** column).
2. The popup opens with the title **Order from** and the manufacturer's name, or **Order CAD design**, and the order number. For CAD design it explains: *This sends the product for CAD design. You can follow its progress on this order.*
3. Optionally type a note (**Note for the manufacturer** or **Note for the CAD designer**, up to 500 characters; the counter shows `0/500`).
4. Click **Place order** (it shows **Placing order…** while sending), or **Cancel**.
5. On success the message **Order placed successfully** appears and the popup closes.

| Situation | What happens |
| --------- | ------------ |
| The product was already sent to that manufacturer | The button reads **Order Sent** and is disabled; its amounts are locked |
| The manufacturer cannot be ordered from (for example the TCC Tech fallback column has no manufacturer record) | **Order Now** is disabled |
| The order fails | An error message such as **The order could not be placed. Please try again.** |
| The server does not answer in time | **The server took too long to respond. Check this order before trying again; it may already be placed.** Check the order before trying again to avoid ordering twice. |

---

### Order Total and Footer

Below the products, the footer has **VIEW INVOICE**, **DOWNLOAD PDW** and **SHARE PDW** on the left and the order **TOTAL** on the right. Amounts are shown in dollars.

---

### Product Details Worksheet (PDW)

**DOWNLOAD PDW** and **SHARE PDW** open the **Product Details Worksheet** in a preview window on the same page (the subtitle shows the order number and **With prices** or **Without prices**). Click **Save PDF** to download it as a PDF named `PDW_` followed by the order number, or the close (X) icon to close it. If the PDF cannot be created, the message **Could not create the PDF. Please try again.** appears.

The worksheet uses your company logo, colours and fonts.

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

---

## Invoice

### Invoice Preview

Click **VIEW INVOICE** on an open order to preview its invoice. The preview is titled **Invoice** with the order number beneath it. Click **Save PDF** to download it as a PDF named `Invoice_` followed by the order number, or the close (X) icon to close it.

The invoice is branded with your company logo (or company name), colours and fonts, and includes:

- Your company name and address at the top, and your email, website and phone at the bottom when they are filled in your company information
- The heading **INVOICE** with **Order No.**, **Order Date** and **Status** (marked **(Cancelled)** when the order is cancelled)
- A box with **Payment**, **Store**, **Delivery**, **Delivery Date** and **Time Slot**
- **Bill To** (customer name, phone and email), and **Ship To** with the shipping address or **Pickup Store**
- An item table with **#**, **Product / Description** (with the **SKU** and specifications), **Qty**, **Rate** and **Amount**
- **Subtotal**, **Discount**, **Shipping Charges**, **Tax** and the **Total**
- A **Summary** (**Gross Amount**, the same charges and **Total Amount**) and a **Notes** box, which shows the customer's order note and the line *We appreciate your business. This is a computer generated invoice and does not require a signature.*

### Standalone Invoice Page

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
