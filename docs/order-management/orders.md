---
sidebar_position: 1
id: orders
title: Orders
sidebar_label: Orders
---

# Orders

The **Orders** module lets you review every order, compare its manufacturing cost across manufacturers, and open the full order details and invoice.

---

## Order History Screen List

The **Order History** page (*Track and review all order status details*) shows one card per order. Each card shows:

- The **order number** and a **status** badge
- The **order date**, the **number of items** and the **manufacturer** the order was placed with
- The **order amount**

| Action | Description |
| ------ | ----------- |
| **Expand / Collapse** | Click an order card to expand it and see the manufacturing comparison, the ordered items and the order total. Click it again to collapse it. Only one order is expanded at a time. |
| **Select Manufacturer** | In the comparison table, click a manufacturer's column header to highlight that manufacturer. |
| **Order Now** | Opens the checkout and payment page for the order with the chosen manufacturer. |
| **Share** | Click the **Share** icon next to **Order Now** to open the Product Details Worksheet **without prices**, ready to share with a manufacturer. |
| **DOWNLOAD PDW** | Opens the Product Details Worksheet **with the price breakdown**. |
| **SHARE PDW** | Opens the Product Details Worksheet **without prices**. |

---

### Order Statuses

The status badge on each card has its own color and icon. The statuses are **Pending**, **Confirmed**, **Processing**, **Shipped** (out for delivery), **Delivered**, **Returned**, **Failed** and **Cancelled**.

---

### Manufacturing Option Comparison

When you expand an order, the **Manufacturing Option Comparison** table compares **TCC Tech** with your local manufacturers, line by line.

| Column | Description |
| ------ | ----------- |
| **CAD** | The **CAD DESIGN** fee for the order. The **Order Now** button at the bottom of this column orders from TCC Tech. |
| **COST COMPONENT** | The cost line being compared (see below). |
| **WT** | The weight for metal and diamond lines (for example grams or carats). |
| **Manufacturer columns** | One column per manufacturer with its amount for each cost line. **TCC Tech** is always the first column and carries the **BENCHMARK** badge. Each column ends with an **Order Now** button and a **Share** icon. |

The cost lines are:

| Cost Component | Description |
| -------------- | ----------- |
| **Metal** and **Diamond** lines | The material cost for each metal and diamond in the design. |
| **Labour**, **Setting Charges**, **Other Charges** | Manufacturing charges. |
| **Subtotal** | Total of the lines above. |
| **Duty**, **Tariff**, **Tax** | Applicable duties and taxes. The rate is shown in green above the amount. |
| **Shipping** | Shipping cost. |
| **Landed Cost** | Total cost including duties, taxes and shipping. |
| **Margin** | Your margin on the landed cost, with its percentage. |
| **Retail Price** | The final selling price. |

:::tip
The manufacturer the order was placed with is highlighted in amber when you open the order. Click another manufacturer's header to highlight that column instead. The table scrolls sideways while the **CAD** and **COST COMPONENT** columns stay in place.
:::

Below the table, each **ordered item** is listed with its image, name, quantity and price, followed by the **TOTAL** for the order.

---

### Product Details Worksheet (PDW)

**DOWNLOAD PDW**, **SHARE PDW** and the **Share** icons open the **Product Details Worksheet (PDW)** in a new browser tab, and the print dialog opens automatically. Use it to print the worksheet or save it as a PDF. You can also click **Print Worksheet / Save PDF** at the top of the worksheet.

The worksheet header shows the order number and date. Each item is listed with its image, quantity, **Diamond Details**, **Metal Details** and **Product Specifications**. When opened with **DOWNLOAD PDW**, it also shows the item prices and a breakdown of **Diamond Price**, **Metal Price**, **Labour Price**, **Other Prices** and **Total Price**.

:::note
The worksheet opens in a new tab. If your browser blocks it, the message *Please allow popups to open the PDW.* appears. Allow pop-ups for the admin panel and try again.
:::

---

### Checkout and Payment

Click **Order Now** under a manufacturer's column to open the checkout page for that order and manufacturer. The page opens without the admin menu. Click the close (X) icon at the top right to return to **Order History**.

| Section | Description |
| ------- | ----------- |
| **Order Details** | **ORDER ID**, **MANUFACTURER** (with the **BENCHMARK** badge for TCC Tech) and the **ITEMS** with their quantity. Click the **Edit** icon to go back to **Order History** and choose a different order or manufacturer. |
| **Price Details** | **Manufacturing Subtotal**, then **Duty**, **Tariff**, **Tax** and **Shipping** where they apply to the chosen manufacturer, and the **TOTAL** (landed cost). |
| **Select Payment Method** | Choose **CARD**, **UPI** or **NET BANKING**. **CARD** asks for **CARDHOLDER NAME**, **CARD NUMBER**, **EXPIRY DATE** and **CVV**; **UPI** asks for the **UPI ID**; **NET BANKING** asks you to **SELECT YOUR BANK**. |

Click **Proceed to Payment** to continue, or **Back** to return to **Order History**. If the order cannot be found, the page shows *Order not found.*

---

## Order Details

The **Order details** page shows the complete record of a single order. Open it by clicking the **View** (eye) icon next to an order in **Recent Orders** on the [Dashboard](../dashboard.md). The **View** icon is shown only if your role has the **View** permission for orders.

The page header shows the order number, its status badge and the order date. The buttons on the right of the header are described below.

| Action | Description |
| ------ | ----------- |
| **Download Excel** | Click the Excel icon to download `order_details.xlsx`. It has two sheets: **Order Details** (the catalogue product data) and **Diamond Group Master** (the diamond rates). Shown only when the order contains catalogue products. |
| **Sync Product** | Opens the **Sync Product Configuration** dialog (see below). Shown only for the CADCO company. |
| **print Invoice** | Opens the printable invoice and starts the print dialog. Enabled only when the order's payment status is **Paid**. |
| **View Invoice** | Opens the [Invoice](#invoice) page. Enabled only when the order's payment status is **Paid**. |
| **Certificate View** | Opens the diamond's certificate in a new tab. Shown only for diamonds that have a certificate. |
| **Product SKU** | Click the SKU chip of a catalogue product in **Product Details** to open the **Product Price Details** popup. |
| **Order Status** | Change the order's status from the dropdown in **Shipping info**. |

The rest of the page is divided into the following sections.

| Section | Description |
| ------- | ----------- |
| **Items** | Each product in the order with its image, name, short description, **SKU** and price. |
| **Order Summary** | **Sub Total (items added)**, **Shipping**, **Discount**, each applicable tax with its rate, and the order **Total**. |
| **Product Details** | For each item: its name, and expandable panels such as **Diamond Details**, **Metal Details**, **Stone Details**, **Design Specifications** and **Engraving Details**, depending on the product type. Diamond and setting products also show the **Setting Price** and **Diamond Price**. |
| **Remark/Note** | The note the customer added at checkout. Shown only if the customer left a note. |
| **Customer Info** | The customer's name, email and phone number. |
| **Shipping info** | **Payment Status** (**Pending**, **Paid** or **Failed**), **Shipping Method** (**Pick up at showroom** or **Ship to my address**), **Delevery Status** (the current order status) and the **Order Status** dropdown. |
| **Shipping Address** / **Showroom Address** | For delivery orders: **Name**, **Phone**, **Address**, **Area Name**, **City**, **State**, **Zip Code** and **Country**. For showroom pickup: the showroom **Address** and **Branch Name**, with a **View in map** link that opens the address in Google Maps. |
| **Billing Address** | **Name**, **Phone**, **Address**, **Area Name**, **City**, **State**, **Zip Code** and **Country**. |

---

### Updating the Order Status

1. In the **Shipping info** section, open the **Order Status** dropdown.
2. Select the new status: **Pending**, **Confirmed**, **Processing**, **Out For Delivery**, **Delivered**, **Returned**, **Failed** or **Cancelled**.
3. The status is saved as soon as you select it and a confirmation message appears.

:::note
The **Order Status** dropdown is available only for **paid** orders, or for orders placed without online payment.
:::

---

### Product Price Details

Click the SKU chip of a catalogue product to open the **Product Price Details** popup. It has two tabs:

- **Price Breakdown**: the **Cost Calculation** (ending in the landed cost), the **Margin Cost** and the **Retail Calculation** with the **Final Retail Price**.
- **Specifications**: the product's specifications.

Click **Download pdf** to save the details as a PDF, or the close icon to close the popup.

---

### Sync Product

This option is shown only for the CADCO company. Click **Sync Product**, fill in the fields below and click **Sync Products** to sync all products in the order. Click **Cancel** to close without syncing.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Company Key** | ✅ | The company key to sync the products to. |
| **Diamond Color** | ✅ | Diamond color used for the sync. |
| **Diamond Clarity** | ✅ | Diamond clarity used for the sync. |

**Sync Products** stays disabled until all three fields are filled. When the sync finishes, the message *Product sync completed successfully!* appears.

---

## Invoice

Click **View Invoice** on the Order details page to see the order's invoice.

| Action | Description |
| ------ | ----------- |
| **Back** | Returns to the previous page. |
| **Print** | Opens the printable invoice in a new tab. |

The invoice is titled **Order Confirmation** and includes:

- Your company logo, address, mobile number (**MOB**) and **GSTIN NO**
- **Order Number**, **Invoice Number**, **Order Date**, **Created** date, **Payment Method** (for example **CashOnDelivery**, **Paypal**, **Affirm**, **YOCO**, **Card** or **Razorpay**), **Transaction ID** and **HSN Code**
- The **Shipping Address**, or the **Store Address** for showroom pickup
- The **Billing Address**
- An item table with **Sr No**, **Product Name**, **Qty**, **Purity**, **Metal wt.**, **Rate**, **Amount**, **Dia Amount**, **Making Charges**, **Other Charges** and **Total Amount** (amount columns show the order's currency symbol)
- **Sub Total**, **Shipping**, **Discount**, each tax with its rate, and **Grand Total**
- A **Note** with a declaration and your company email for queries

---

### Printing the Invoice

**print Invoice** on the Order details page opens the same invoice on a plain page without the admin menu. The browser's print dialog opens automatically after a moment, so you can print the invoice or save it as a PDF.
