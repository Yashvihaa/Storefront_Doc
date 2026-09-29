---
sidebar_position: 5
id: offers-discounts
title: Offers & Discounts
sidebar_label: Offers & Discounts
---

# Offers & Discounts

**Offers & Discounts** lets you create promotions that customers redeem with a discount code or that apply automatically. Offers can target order totals, buy-x-get-y deals or free gifts, and can be limited by usage and schedule.

---

## Discount List Screen

| Action | Description |
| ------ | ----------- |
| **+ Add Discount** | Opens the form to create a new offer. |
| **View** | Click the **View** icon to open the offer in read-only mode. |
| **Edit** | Click the **Edit** icon to modify the offer. |
| **Delete** | Click the **Delete** icon and confirm to remove the offer. |
| **Pagination** | Change the page or the number of rows per page at the bottom of the table. |

### Discount List Columns

| Column | Description |
| ------ | ----------- |
| **Offer Name** | Name of the offer. |
| **Discount** | Discount value. Percentage discounts show a **%** sign. |
| **Type** | Discount type, e.g. flat amount or percentage. |
| **Code** | Discount code customers enter at checkout, if the offer uses one. |
| **Max Discount Amount** | Upper limit on the discount for percentage offers. |
| **Min Order Amount** | Minimum order value needed for the offer. |
| **Amount** | Discount amount configured for the offer. |
| **Start Date & Time** | When the offer becomes active. |
| **End Date & Time** | When the offer expires, if an end is set. |
| **Offer Type** | What the discount applies to: Product type, Order type, Buy x get y or Buy and get gift. |

---

## Coupon Code Display

The **Coupon Code Display** card at the top of the Discount List controls where customers see the coupon code field in the cart. Both options are on by default, and a change is saved as soon as you click the switch.

| Option | Description |
| ------ | ----------- |
| **Show coupon code on config purchase** | Customers can apply a coupon in the cart for designs built in a configurator. |
| **Show coupon code on item purchase** | Customers can apply a coupon in the cart for ready catalog items. |

---

## Steps to Add a New Discount

Click **+ Add Discount**, complete the cards below, then click **Save**. Click **Back** to leave without saving.

### Offer Information

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Active** | - | Switch at the top of the card. On by default. Turn off to save the offer without activating it. |
| **Offer Name** | ✅ | Name of the offer. |
| **Offer Description** | - | Optional description of the offer. |

### Amount of Products

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Method** | ✅ | **Discount code**: customers must enter a code at checkout. **Automatic discount**: applied automatically when the conditions are met. |
| **Do you want to combine offer with automatic offer ?** | ✅ (Discount code) | **Yes** or **No**. Shown only for the Discount code method. |
| **Discount code** | ✅ (Discount code) | Enter a code, or click **Generate random code** to create one. |

### Discount On

Choose what the offer applies to. **Buy and get gift** is available only with the **Discount code** method.

| Option | Description |
| ------ | ----------- |
| **Product type** | Discount on selected products, categories, collections, styles or a price range. |
| **Order type** | Discount when the order reaches a total amount or total quantity. |
| **Buy x get y** | Customer buys a quantity of some products and gets a quantity of other products at a discount or free. |
| **Buy and get gift** | Customer receives free gift products when the order reaches a total amount or quantity. |

#### Product Type

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Select product type** | ✅ | **Dynamic single product**, **Variant single product**, or any configurator enabled for your store (Ring, Three stone, Eternity band, Bracelet, Birthstone, Stud, Pendant). |
| **Select based on** | ✅ | For single products: **Product**, **Product category**, **Collection**, **Style** or **Price Range**. For configurator products, only **Price Range** is available. |
| **Select Products** / **Select category** / **Select collection** / **Select Style** | ✅ | Shown for the chosen basis. Search in the box or click **Browse Products** (or **Browse Categories**, **Browse Collections**, **Browse Styles**). Select at least one. |
| **Min. range amount** / **Max. range amount** | - | Shown for **Price Range**. Must be 0 or more. |

#### Order Type

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Total amount** / **Total quantity** | ✅ | Choose one condition. |
| **Enter Order amount** | ✅ (Total amount) | Minimum order value. Must be greater than 0, up to 6 digits. |
| **Total quantity** | ✅ (Total quantity) | Minimum number of items. Use **-** and **+** to adjust. Minimum 1. |

#### Buy X Get Y

| Section | Field | Required | Remarks |
| ------- | ----- | -------- | ------- |
| **Customer buys** | **Total quantity** | ✅ | Quantity the customer must buy. |
| **Customer buys** | **Select Products** | ✅ | Search or click **Browse Products**. Select at least one. |
| **Customer gets** | **Total quantity** | ✅ | Quantity the customer receives. |
| **Customer gets** | **Select Products** | ✅ | Search or click **Browse Products**. Select at least one. |

#### Buy and Get Gift

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Total amount** / **Total quantity** | ✅ | Choose one condition. |
| **Enter Order amount** | ✅ (Total amount) | Minimum order value. Must be greater than 0, up to 6 digits. |
| **Total quantity** | ✅ (Total quantity) | Minimum number of items. Minimum 1. |
| **Select Gift Products** | ✅ | Search or click **Browse Products**. Select at least one. |

### Discount Type

The options depend on the **Discount On** selection.

| Discount On | Available Options |
| ----------- | ----------------- |
| **Product type**, **Order type** | **Flat**, **Percentage (%)** |
| **Buy x get y** | **Amount of each**, **Percentage (%)**, **Free** |
| **Buy and get gift** | **Free** only |

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Enter discount amount** | ✅ | Not shown for **Free**. Must be greater than 0, up to 6 digits and 2 decimal places. For percentage, enter 1 to 99. For flat amounts, enter the amount in dollars. |
| **Max discount amount** | - | Shown for **Percentage (%)**. Caps the discount the customer can receive. |

### Usage Limit

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Per User Limit** | ✅ | Maximum times one customer can use the offer. Must be a positive number. |
| **Overall Usage Limit** | ✅ | Maximum times the offer can be used across all customers. Must be a positive number. |

### User Selection

| Option | Description |
| ------ | ----------- |
| **All users** | The offer is available to all customers. |

### Duration Scheduler

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Starting date** | ✅ | Cannot be in the past for a new offer. |
| **Starting time** | ✅ | If the start date is today, the time must be later than now. |
| **+ Add end date & time** | - | Adds **End date** and **End time**. The end must be after the start. Click **- Remove end date** to remove them. |
| **Limit availability to particular weeks/days** | - | Adds a recurring schedule (see below). Click **Hide recurring schedule** to remove it. |

End date and the recurring schedule cannot be added at the same time; each option is disabled while the other is in use.

#### Recurring Schedule

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Available every ... Weeks, on** | ✅ | Number of weeks (minimum 1) and the days of the week. Click a day to select or deselect it. Select at least one day. |
| **Between** / **To** | ✅ | Time window during which the offer applies on the selected days. |
| **End date** / **End time** | ✅ (End time) | When the recurring offer stops. |

:::tip Example
Available every **1** week on **Monday**, **Tuesday** and **Wednesday**, between **12:00 PM** and **4:00 PM**. The discount applies only during those hours on those days.
:::
