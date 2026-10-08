---
sidebar_position: 5
id: offers-discounts
title: Offers & Discounts
sidebar_label: Offers & Discounts
---

# Offers & Discounts

**Offers & Discounts** lets you create promotions that customers redeem with a discount code or that apply automatically. An offer can target configurator products in a price range, the order total, a buy-x-get-y deal or a free gift, and can be limited by usage and schedule.

---

## Discount List Screen

| Action | Description |
| ------ | ----------- |
| **+ Add Discount** | Opens the **Add Discount** page to create a new offer. |
| **View** | Click the **View** icon to open the offer in read-only mode. |
| **Edit** | Click the **Edit** icon to open the offer on the **Edit Discount** page. |
| **Delete** | Click the **Delete** icon and confirm with **YES** to remove the offer. Click **NO** to cancel. |
| **Pagination** | Change the page or the number of rows per page at the bottom of the table. |

### Discount List Columns

| Column | Description |
| ------ | ----------- |
| **Offer Name** | Name of the offer. |
| **Discount** | Discount value. Percentage discounts show a **%** sign. |
| **Type** | Discount type of the offer, for example a fixed amount or a percentage. |
| **Code** | Discount code customers enter at checkout, if the offer uses one. |
| **Max Discount Amount** | Upper limit on the discount for percentage offers. |
| **Min Order Amount** | Minimum order value needed for the offer. |
| **Amount** | Discount amount configured for the offer. |
| **Start Date & Time** | When the offer becomes active, shown in your local time. |
| **End Date & Time** | When the offer expires, if an end is set. A dash (-) is shown when there is none. |
| **Offer Type** | What the offer applies to: product type, order type, buy x get y, or order with a free gift product. |

---

## Steps to Add a New Discount

Click **+ Add Discount**, complete the cards below from top to bottom, then click **Save** at the bottom of the page. Click **Back** at the top to leave without saving.

After a successful save you are taken back to the Discount List. If a required field is missing or invalid, the page scrolls to the first field with an error.

### Offer Information

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Active** | - | Switch at the top of the card. On by default. Turn it off to save the offer without activating it. |
| **Offer Name** | ✅ | Name of the offer. |
| **Offer Description** | - | Optional description of the offer. |

### Amount of products

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Method** | ✅ | **Discount code** (default): customers must enter a code at checkout. **Automatic discount**: applied automatically when the conditions are met. |
| **Do you want to combine offer with automatic offer ?** | ✅ (Discount code) | **Yes** or **No**. Shown only for the **Discount code** method. |
| **Discount code** | ✅ (Discount code) | Type a code, or click **Generate random code** to fill in a code created by the system. Shown only for the **Discount code** method. |

### Discount on

Choose what the offer applies to. The fields below the options change with your choice.

| Option | Description |
| ------ | ----------- |
| **Product type** | Discount on configurator products whose price falls in a range. This is the default. |
| **Order type** | Discount when the order reaches a total amount or a total quantity. |
| **Buy x get y** | The customer buys a quantity of some products and gets a quantity of other products at a discount or free. |
| **Buy and get gift** | The customer receives a free gift product when the order reaches a total amount or quantity. Available only with the **Discount code** method. |

#### Product Type

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Select product type** | ✅ | **Ring Configurator** (default), **Three stone configurator**, **Eternity band configurator**, **Bracelet configurator**, **Birthstone configurator**, **Stud configurator** or **Pendant configurator**. |
| **Select based on** | ✅ | Only **Price Range** is available, because configurator products are priced dynamically. |
| **Min. range amount** / **Max. range amount** | - | The price band (in $) a configured product must fall in to get the discount. Both start at 0. |

#### Order Type

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Total amount** / **Total quantity** | ✅ | Choose one condition. **Total amount** is selected by default. |
| **Enter Order amount** | ✅ (Total amount) | Minimum order value in $. Must be greater than 0, with at most 6 digits. |
| **Total quantity** | ✅ (Total quantity) | Minimum number of items. Use **–** and **+** or type a number. Minimum 1. |

#### Buy X Get Y

| Section | Field | Required | Remarks |
| ------- | ----- | -------- | ------- |
| **Customer buys** | **Total quantity** | ✅ | Quantity the customer must buy. Use **–** and **+** or type a number. Minimum 1. |
| **Customer buys** | **Select Products** | - | Type in **Search products...** to search by SKU, or click **Browse Products** to see the full list. Click a product to add it. |
| **Customer gets** | **Total quantity** | ✅ | Quantity the customer receives. Minimum 1. |
| **Customer gets** | **Select Products** | - | Search by SKU or click **Browse Products**, then click a product to add it. |

Selected products are listed by SKU under the search box. Click the **Delete** icon next to a product to remove it.

#### Buy and Get Gift

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Total amount** / **Total quantity** | ✅ | Choose one condition. **Total amount** is selected by default. |
| **Enter Order amount** | ✅ (Total amount) | Minimum order value in $. Must be greater than 0, with at most 6 digits. |
| **Total quantity** | ✅ (Total quantity) | Minimum number of items. Minimum 1. |
| **Select Gift Products** | - | Search by SKU or click **Browse Products**, then click the gift product. Only one gift product can be set; picking another replaces it. |

### Discount Type

The card title and options depend on the **Discount on** selection.

| Discount on | Card title | Available options |
| ----------- | ---------- | ----------------- |
| **Product type**, **Order type** | **Discount type** | **Flat** (default), **Percentage (%)** |
| **Buy x get y** | **At a discounted value** | **Amount of each** (default), **Percentage (%)**, **Free** |
| **Buy and get gift** | **At a discounted value** | **Free** only (selected automatically) |

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Enter discount amount** | ✅ | Not shown for **Free**. Must be greater than 0, with at most 6 digits and 2 decimal places. For **Percentage (%)**, enter 1 to 99. For **Flat** or **Amount of each**, enter the amount in dollars. |
| **Max discount amount** | - | Shown only for **Percentage (%)**. Caps the discount (in $) the customer can receive. |

:::note
When you add a new offer and change the **Discount on** option, the discount type resets to **Flat** / **Amount of each**.
:::

### Usage limit

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Per User Limit** | ✅ | Maximum times one customer can use the offer. Must be a positive number. |
| **Overall Usage Limit** | ✅ | Maximum times the offer can be used across all customers. Must be a positive number. |

### User Selection

| Option | Description |
| ------ | ----------- |
| **All users** | The offer is available to all customers. This is currently the only option. |

### Duration Scheduler

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Starting date** | ✅ | Defaults to today. Cannot be in the past for a new offer. |
| **Starting time** | ✅ | Defaults to 12:00 PM. Pick a time in 15-minute steps. If the start date is today, the time must be later than now. |
| **+ Add end date & time** | - | Adds **End date** and **End time** fields. Click **- Remove end date** to remove them. |
| **Limit availability to particular weeks/days** | - | Adds a recurring schedule (see below). Click **Hide recurring schedule** to remove it. |

The end date and the recurring schedule cannot be added at the same time; each button is disabled while the other is in use.

:::note
The "not in the past" checks on the start date and time apply only when adding an offer, so you can still edit and save an offer that has already started.
:::

#### Recurring Schedule

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Available every ... Weeks, on** | - | Number of weeks (minimum 1, use **–** and **+**) and the days of the week. Click a day (**Monday** to **Sunday**) to select or deselect it. |
| **Between** / **To** | - | Time window during which the offer applies on the selected days. Defaults to 12:00 to 23:59. |
| **End date** / **End time** | - | When the recurring offer stops. |

:::tip Example
Available every **1** week on **Monday**, **Tuesday** and **Wednesday**, between **12:00 PM** and **4:00 PM**. The discount applies only during those hours on those days.
:::

---

## View and Edit a Discount

- **View** opens the offer on the **View Discount** page. The fields are disabled and there is no **Save** button, so nothing can be changed from this page.
- **Edit** opens the offer on the **Edit Discount** page with its saved values. Make your changes and click **Save**.
