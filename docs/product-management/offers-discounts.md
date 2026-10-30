---
sidebar_position: 5
id: offers-discounts
title: Offers & Discounts
sidebar_label: Offers & Discounts
---

# Offers & Discounts

**Offers & Discounts** lets you create promotions that customers redeem with a discount code or that apply automatically. An offer can target configurator products in a price range or the order total (an amount or a number of items), and can be limited by usage and schedule.

---

## Discount List Screen

The page is titled **OFFERS & COUPON CODE**. Offers are listed 50 per page.

| Action | Description |
| ------ | ----------- |
| **Add Discount** | Opens the **Add Discount** page to create a new offer. |
| **Search** | Type in the search box (**Search name, coupon code, discount**) to find offers. The list updates shortly after you stop typing and returns to page 1. |
| **Filter** | Shows or hides a filter row under the column headings. It narrows the offers already loaded on the current page. |
| **View** | Click the **View** icon to open the offer in read-only mode. |
| **Edit** | Click the **Edit** icon to open the offer on the **Edit Discount** page. |
| **Delete** | Click the **Delete** icon. A popup asks **Are you Sure?**; click **YES** to remove the offer or **NO** to cancel. The message **Discount deleted successfully** appears. |
| **Pagination** | Change the page or the number of rows per page (25, 50, 75 or 100) at the bottom of the table. |

When there are no offers, the table shows **No records to display**.

:::note
The **View**, **Edit** and **Delete** icons on this list are not switched off by role permissions.
:::

### Discount List Columns

| Column | Description |
| ------ | ----------- |
| **Action** | **View**, **Edit** and **Delete** icons. |
| **Offer Name** | Name of the offer. |
| **Discount** | Discount value. Percentage discounts show a **%** sign. |
| **Type** | Discount type of the offer, for example a fixed amount or a percentage. |
| **Code** | Discount code customers enter at checkout, if the offer uses one. |
| **Max Discount Amount** | Upper limit on the discount for percentage offers. |
| **Min Order Amount** | Minimum order value needed for the offer. |
| **Amount** | Discount amount configured for the offer. |
| **Start Date & Time** | When the offer becomes active, shown in your local time. |
| **End Date & Time** | When the offer expires, if an end is set. |
| **Offer Type** | What the offer applies to: product type or order type. |

Dates are shown as day/month/year.

---

## Steps to Add a New Discount

Click **Add Discount**, complete the cards below from top to bottom, then click **Save** at the bottom of the page. Click **Back** at the top to leave without saving. The page header reads **DISCOUNT & OFFERS / Add Discount**.

After a successful save the message **Discount created successfully** appears and you are taken back to the Discount List. If a required field is missing or invalid, the page scrolls to the first field with an error.

### Offer Information

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Active** | - | Switch at the top of the card. On by default. Turn it off to save the offer without activating it. |
| **Offer Name** | ✅ | Name of the offer. Error: **Offer name is required**. |
| **Offer Description** | - | Optional description of the offer. |

### Amount of products

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Method** | ✅ | **Discount code** (default): customers must enter a code at checkout. **Automatic discount**: applied automatically when the conditions are met. |
| **Do you want to combine offer with automatic offer ?** | ✅ (Discount code) | **Yes** or **No**. Shown only for the **Discount code** method. Error: **This Field is required**. |
| **Discount code** | ✅ (Discount code) | Type a code, or click **Generate random code** to fill in a code created by the system. Shown only for the **Discount code** method, with the note "User must enter code at time of checkout". Error: **Discount code is required**. |

### Discount on

Choose what the offer applies to. The fields below the options change with your choice.

| Option | Description |
| ------ | ----------- |
| **Product type** | Discount on configurator products whose price falls in a range. This is the default. |
| **Order type** | Discount when the order reaches a total amount or a total quantity. |

#### Product Type

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Select product type** | ✅ | **Ring Configurator** (default), **Three stone configurator**, **Eternity band configurator**, **Bracelet configurator**, **Birthstone configurator**, **Stud configurator** or **Pendant configurator**. All seven are always listed, whether or not your store uses them. |
| **Select based on** | ✅ | Only **Price Range** is available, because configurator products are priced dynamically. |
| **Min. range amount** / **Max. range amount** | - | The price band (in $) a configured product must fall in to get the discount. Both start at 0. The form does not check that the maximum is higher than the minimum. |

#### Order Type

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Total amount** / **Total quantity** | ✅ | Choose one condition. **Total amount** is selected by default. |
| **Enter Order amount** | ✅ (Total amount) | Minimum order value in $. Errors: **Order amount is required**, **Order amount must be greater than 0**, **Maximum 6 digits allowed**. |
| **Total quantity** | ✅ (Total quantity) | Minimum number of items. Use **–** and **+** or type a number. Minimum 1, default 1. |

### Discount Type

| Option | Description |
| ------ | ----------- |
| **Flat** | A fixed amount in dollars comes off. This is the default. |
| **Percentage (%)** | A percentage comes off. |

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Enter discount amount** | ✅ | For **Flat**, the hint reads "Enter flat discount amount in dollars". For **Percentage (%)**, it reads "Enter percentage value between 1% and 99%". Errors: **Discount amount is required**, **Discount amount must be greater than 0**, **Maximum 6 digits allowed**, **Maximum 2 decimal places allowed**, **Percentage must be between 1-99%**. |
| **Max discount amount** | - | Shown only for **Percentage (%)**. Caps the discount (in $) the customer can receive. |

:::note
When you add a new offer and change the **Discount on** option, the discount type resets to **Flat**.
:::

### Usage limit

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Per User Limit** | ✅ | Maximum times one customer can use the offer. Errors: **Per user limit is required**, **Per user limit must be a positive number**. |
| **Overall Usage Limit** | ✅ | Maximum times the offer can be used across all customers. Errors: **Overall limit is required**, **Overall limit must be a positive number**. |

### User Selection

| Option | Description |
| ------ | ----------- |
| **All users** | The offer is available to all customers. This is currently the only option. |

### Duration Scheduler

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Starting date** | ✅ | Defaults to today. Cannot be in the past for a new offer. Errors: **Starting date is required**, **Start date must be in the future**. |
| **Starting time** | ✅ | Defaults to 12:00 PM. Pick a time in 15-minute steps. If the start date is today, the time must be later than now, so after midday you must choose a later time or date. Errors: **Starting time is required**, **Start time must be in the future**. |
| **+ Add end date & time** | - | Adds **End date** and **End time** fields, which default to tomorrow at 12:00 PM. Click **- Remove end date** to remove them. The form does not check that the end is after the start. |
| **Limit availability to particular weeks/days** | - | Adds a recurring schedule (see below). Click **Hide recurring schedule** to remove it. |

The end date and the recurring schedule cannot be added at the same time; each button is disabled while the other is in use. Times are entered in your local time.

:::note
The "not in the past" checks on the start date and time apply only when adding an offer, so you can still edit and save an offer that has already started.
:::

#### Recurring Schedule

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Available every ... Weeks, on** | - | Number of weeks (minimum 1, use **–** and **+**) and the days of the week. Click a day (**Monday** to **Sunday**) to select or deselect it. |
| **Between** / **To** | - | Time window during which the offer applies on the selected days. Defaults to 12:00 to 23:59. |
| **End date** / **End time** | - | When the recurring offer stops. |

The form does not check that at least one day is selected.

:::tip Example
Available every **1** week on **Monday**, **Tuesday** and **Wednesday**, between **12:00 PM** and **4:00 PM**. The discount applies only during those hours on those days.
:::

---

## View and Edit a Discount

- **View** opens the offer on the **View Discount** page. The fields are disabled, the **Active** switch is hidden and there is no **Save** button, so nothing can be changed from this page.
- **Edit** opens the offer on the **Edit Discount** page with its saved values. Make your changes and click **Save**. The message **Discount updated successfully** appears and you return to the Discount List.
