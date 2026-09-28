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

The **Order History** page shows one card per order. Each card shows:

- The **order number** and a **status** badge
- The **order date**, the **number of items** and the **manufacturer** the order was placed with
- The **order amount**

| Action | Description |
| ------ | ----------- |
| **Expand / Collapse** | Click an order card to expand it and see the manufacturing comparison, the ordered items and the order total. Click it again to collapse it. Only one order is expanded at a time. |
| **Select Manufacturer** | In the comparison table, click a manufacturer's column header to highlight that manufacturer. |
| **Order Now** | Opens the checkout and payment page for the order with the chosen manufacturer. |
| **Share** | Opens the Product Details Worksheet **without prices**, ready to share with a manufacturer. |
| **Download PDW** | Opens the Product Details Worksheet **with the price breakdown**. |
| **Share PDW** | Opens the Product Details Worksheet **without prices**. |

---

### Order Statuses

| Status | Meaning |
| ------ | ------- |
| **Pending** | The order has been placed and is waiting to be confirmed. |
| **Confirmed** | The order has been confirmed. |
| **Processing** | The order is being manufactured or prepared. |
| **Shipped** | The order is out for delivery. |
| **Delivered** | The order has reached the customer. |
| **Returned** | The order was returned. |
| **Failed** | The order could not be completed. |
| **Cancelled** | The order was cancelled. |

---

### Manufacturing Option Comparison

When you expand an order, the **Manufacturing Option Comparison** table compares **TCC Tech** with your local manufacturers, line by line.

| Column | Description |
| ------ | ----------- |
| **CAD** | The **CAD Design** fee for the order, with an **Order Now** button that orders from TCC Tech. |
| **Cost Component** | The cost line being compared (see below). |
| **WT** | The weight for metal and diamond lines (for example grams or carats). |
| **Manufacturer columns** | One column per manufacturer with its amount for each cost line. **TCC Tech** is always the first column and carries the **Benchmark** badge. |

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
The manufacturer the order was placed with is highlighted in amber when you open the order. Click another manufacturer's header to highlight that column instead. The table scrolls sideways while the **CAD** and **Cost Component** columns stay in place.
:::

Below the table, each **ordered item** is listed with its image, name, quantity and price, followed by the **Total** for the order.

---

### Product Details Worksheet (PDW)

**Download PDW**, **Share PDW** and the **Share** buttons open the Product Details Worksheet in a new browser tab, and the print dialog opens automatically. Use it to print the worksheet or save it as a PDF. You can also click **Print Worksheet / Save PDF** at the top of the worksheet.

The worksheet lists each item with its image, quantity, **Diamond Details**, **Metal Details** and **Product Specifications**. When opened with **Download PDW**, it also shows the item prices and a breakdown of **Diamond Price**, **Metal Price**, **Labour Price**, **Other Prices** and **Total Price**.

:::note
The worksheet opens in a new tab. If nothing opens, allow pop-ups for the admin panel in your browser.
:::

---

## Order Details

The **Order Details** page shows the complete record of a single order. Open it by clicking the **eye** icon next to an order in **Recent Orders** on the Dashboard.

| Action | Description |
| ------ | ----------- |
| **Download Excel** | Downloads the order's product and diamond data as an Excel file. Shown only when the order contains catalogue products. |
| **Print Invoice** | Opens the invoice and the print dialog. Available only for paid orders. |
| **View Invoice** | Opens the invoice on screen. Available only for paid orders. |
| **Certificate View** | Opens the diamond's certificate in a new tab. Shown only for diamonds that have a certificate. |
| **Product SKU** | Click the SKU of a catalogue product to see its price details in a popup. |
| **Order Status** | Change the order's status from the dropdown. |

The page header shows the order number, its status and the order date. The rest of the page is divided into the following sections.

| Section | Description |
| ------- | ----------- |
| **Items** | Each product in the order with its image, name, short description and price. |
| **Order Summary** | **Sub Total (items added)**, **Shipping**, **Discount**, each applicable tax with its rate, and the order **Total**. |
| **Product Details** | Expandable panels for each item, such as **Diamond Details**, **Metal Details**, **Stone Details**, **Design Specifications** and **Engraving Details**, depending on the product type. |
| **Remark/Note** | The note the customer added at checkout. Shown only if the customer left a note. |
| **Customer Info** | The customer's name, email and phone number. |
| **Shipping info** | **Payment Status**, **Shipping Method** (**Pick up at showroom** or **Ship to my address**), the current delivery status and the **Order Status** dropdown. |
| **Shipping Address** / **Showroom Address** | The delivery address. For showroom pickup, the showroom address and **Branch Name** are shown with a **View in map** link. |
| **Billing Address** | The customer's billing name, phone and address. |

### Updating the Order Status

1. In the **Shipping info** section, open the **Order Status** dropdown.
2. Select the new status: **Pending**, **Confirmed**, **Processing**, **Out For Delivery**, **Delivered**, **Returned**, **Failed** or **Cancelled**.
3. The status is saved as soon as you select it and a confirmation message appears.

:::note
The **Order Status** dropdown is available only for **paid** orders, or for orders placed without online payment.
:::

---

## Invoice

Click **View Invoice** on the Order Details page to see the order's invoice.

| Action | Description |
| ------ | ----------- |
| **Back** | Returns to the previous page. |
| **Print** | Opens the browser's print dialog to print the invoice or save it as a PDF. |

**Print Invoice** opens the same invoice and starts the print dialog automatically.

The invoice includes:

- Your company details, with phone number and GSTIN number
- **Order Number**, **Invoice Number**, **Order Date**, **Created** date, **Payment Method** and **Transaction ID**
- The **Billing Address**
- An item table with **Sr No**, **Product Name**, **Qty**, **Purity**, **Metal wt.**, **Rate**, **Amount**, **Dia Amount**, **Making Charges**, **Other Charges** and **Total Amount**
- **Sub Total**, **Shipping**, **Discount**, taxes and **Grand Total**
- A declaration note
