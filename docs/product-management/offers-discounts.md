---
sidebar_position: 5
id: offers-discounts
title: Offers & Discounts
sidebar_label: Offers & Discounts
---

# Offers & Discounts

## Overview

**Offers & Discounts** lets you create promotions that customers redeem with a discount code, or that apply automatically. An offer targets either:

- **configurator products** of one type whose price falls in a range, or
- **the order**, once it reaches a total amount or a number of items.

Each offer has a flat or percentage discount, usage limits and a schedule.

:::note[Who can use it]
Store administrators and users whose role includes **Offers / Coupon code**. Each store sees and manages only its own offers. The **View**, **Edit** and **Delete** icons on this list are not switched off by role permissions.

A **Super Admin** of TCC Tech can also open this page in the super admin portal. Offers made there are used on client subscriptions, and the form shows two extra fields, **Coupon Duration** and **Coupon Cycles**. See [Usage limit](#usage-limit).
:::

---

## Data Displayed

### Discount List Screen

| Action | Description |
| ------ | ----------- |
| **Add Discount** | Opens the **Add Discount** page to create a new offer. |
| **View Documentation** | Opens this page. |
| **Search** | Type in the search box (**Search name, coupon code, discount**) to find offers. |
| **Filter** | Shows or hides a filter row under the column headings. It narrows the offers already loaded on the current page. |
| **View** | Click the **View** icon to open the offer in read-only mode. |
| **Edit** | Click the **Edit** icon to open the offer on the **Edit Discount** page. |
| **Delete** | Click the **Delete** icon. A popup titled **Are you Sure?** asks *Are you Sure You would like to delete ?*. Click **YES** to remove the offer or **NO** to cancel. The message **Discount deleted successfully** appears. |
| **Pagination** | Change the page or the number of rows per page (25, 50, 75 or 100) at the bottom of the table. |

### Discount List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Action** | - | **View**, **Edit** and **Delete** icons. | - |
| **Offer Name** | Text | Name of the offer. | *Diwali Ring Offer* |
| **Discount** | Amount or percent | Discount value. Percentage discounts show a **%** sign; flat discounts show the store currency. | *10 %* or *$50.00* |
| **Type** | Text | Discount type of the offer, a fixed amount or a percentage. | *PercentageDiscount* |
| **Code** | Text | Discount code customers enter at checkout, if the offer uses one. | *RING10* |
| **Max Discount Amount** | Amount | Upper limit on the discount for percentage offers. | *$200.00* |
| **Min Order Amount** | Amount | Minimum order value needed for the offer. | *$500.00* |
| **Amount** | Text | Discount amount configured for the offer. | *50* |
| **Start Date & Time** | Date and time | When the offer becomes active, shown in your local time as day/month/year. | *18/11/2026 12:00 PM* |
| **End Date & Time** | Date and time | When the offer expires. Shows **-** when no end is set. | *25/11/2026 12:00 PM* |
| **Offer Type** | Text | What the offer applies to: product type or order type. | *ProductType* |

### Offer Form Cards

The **Add Discount**, **Edit Discount** and **View Discount** pages share one form, made of these cards from top to bottom:

#### Offer Information

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Active** | - | Switch at the top of the card. On by default. Turn it off to save the offer without activating it. |
| **Offer Name** | ✅ | Name of the offer. Error: **Offer name is required**. |
| **Offer Description** | - | Optional description of the offer. |

#### Amount of products

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Method** | ✅ | **Discount code** (default): customers must enter a code at checkout. **Automatic discount**: applied automatically when the conditions are met. |
| **Do you want to combine offer with automatic offer ?** | ✅ (Discount code) | **Yes** or **No**. Shown only for the **Discount code** method. Error: **This field is required**. |
| **Discount code** | ✅ (Discount code) | Type a code, or click **Generate random code** to fill in a code created by the system. Shown only for the **Discount code** method, with the note *User must enter code at time of checkout*. Use capital letters A to Z and digits only. Error: **Discount code is required**. |

#### Discount on

Choose what the offer applies to. The fields below the options change with your choice.

| Option | Description |
| ------ | ----------- |
| **Product type** | Discount on configurator products whose price falls in a range. This is the default. |
| **Order type** | Discount when the order reaches a total amount or a total quantity. |

**Product type** fields:

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Select product type** | ✅ | **Ring Configurator** (default), **Three stone configurator**, **Eternity band configurator**, **Bracelet configurator**, **Birthstone configurator**, **Stud configurator** or **Pendant configurator**. All seven are always listed, whether or not your store uses them. |
| **Select based on** | ✅ | Only **Price Range** is available, because configurator products are priced dynamically. |
| **Min. range amount** / **Max. range amount** | - | The price band (in $) a configured product must fall in to get the discount. Both start at 0. A value of 0 means no limit on that side. |

**Order type** fields:

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Total amount** / **Total quantity** | ✅ | Choose one condition. **Total amount** is selected by default. |
| **Enter Order amount** | ✅ (Total amount) | Minimum order value in $. Errors: **Order amount is required**, **Order amount must be greater than 0**, **Maximum 6 digits allowed**. |
| **Total quantity** | ✅ (Total quantity) | Minimum number of items. Use **–** and **+** or type a number. Minimum 1, default 1. |

#### Discount type

| Option | Description |
| ------ | ----------- |
| **Flat** | A fixed amount in dollars comes off. This is the default. |
| **Percentage (%)** | A percentage comes off. |

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Enter discount amount** | ✅ | For **Flat**, the hint reads *Enter flat discount amount in dollars*. For **Percentage (%)**, it reads *Enter percentage value between 1% and 99%*. Errors: **Discount amount is required**, **Discount amount must be greater than 0**, **Maximum 6 digits allowed**, **Maximum 2 decimal places allowed**, **Percentage must be between 1-99%**. |
| **Max discount amount** | - | Shown only for **Percentage (%)**. Caps the discount (in $) the customer can receive. |

#### Usage limit

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Per User Limit** | ✅ | Maximum times one customer can use the offer. Errors: **Per user limit is required**, **Per user limit must be a positive number**. |
| **Overall Usage Limit** | ✅ | Maximum times the offer can be used across all customers. Errors: **Overall limit is required**, **Overall limit must be a positive number**. |
| **Coupon Duration** | ✅ (super admin) | Super admin portal only. How long the discount lasts on a subscription: **Once**, **Repeating** or **Forever**. **Once** is selected by default. |
| **Coupon Cycles** | ✅ (Repeating) | Super admin portal only, shown for **Repeating**. Number of billing cycles the discount lasts. Errors: **Coupon cycles is required**, **Coupon cycles must be a whole number**, **Coupon cycles must be at least 1**. |

#### User Selection

| Option | Description |
| ------ | ----------- |
| **All users** | The offer is available to all customers. This is currently the only option. |

#### Duration Scheduler

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Starting date** | ✅ | Defaults to today. Cannot be in the past. Errors: **Starting date is required**, **Start date must be in the future**. |
| **Starting time** | ✅ | Defaults to 12:00 PM. Pick a time in 15-minute steps. If the start date is today, the time must be later than now, so after midday you must choose a later time or date. Errors: **Starting time is required**, **Start time must be in the future**. |
| **+ Add end date & time** | - | Adds **End date** and **End time** fields, which default to tomorrow at 12:00 PM. Click **- Remove end date** to remove them. |
| **Limit availability to particular weeks/days** | - | Adds a recurring schedule (see below). Click **Hide recurring schedule** to remove it. |

The end date and the recurring schedule cannot be added at the same time; each button is disabled while the other is in use. Times are entered in your local time.

**Recurring schedule** fields:

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Available every ... Weeks, on** | - | Number of weeks (minimum 1, use **–** and **+**) and the days of the week. Click a day (**Monday** to **Sunday**) to select or deselect it. |
| **Between** / **To** | - | Time window during which the offer applies on the selected days. Defaults to 12:00 to 23:59. |
| **End date** / **End time** | - | When the recurring offer stops. |

:::tip Example
Available every **1** week on **Monday**, **Tuesday** and **Wednesday**, between **12:00 PM** and **4:00 PM**. The discount applies only during those hours on those days.
:::

---

## How It Works

### Steps to Add a New Discount

1. Click **Add Discount**. The page header reads **DISCOUNT & OFFERS / Add Discount**.
2. Complete the cards from top to bottom: [Offer Information](#offer-information), [Amount of products](#amount-of-products), [Discount on](#discount-on), [Discount type](#discount-type), [Usage limit](#usage-limit), [User Selection](#user-selection) and [Duration Scheduler](#duration-scheduler).
3. Click **Save** at the top right. When you scroll down, **Save** stays pinned at the top of the page.

After a successful save the message **Discount created successfully** appears and you are taken back to the Discount List. If a required field is missing or invalid, the page scrolls to the first field with an error. If the offer cannot be saved, the reason appears and you stay on the page.

There is no **Back** button on the Add and Edit pages. Use your browser's back button to leave without saving.

:::note
When you add a new offer and change the **Discount on** option, the discount type resets to **Flat**.
:::

### View and Edit a Discount

- **View** opens the offer on the **View Discount** page. The fields are disabled and there is no **Save** button. Click **Back** to return.
- **Edit** opens the offer on the **Edit Discount** page with its saved values. Make your changes and click **Save**. The message **Discount updated successfully** appears and you return to the Discount List.

### How an Offer Is Applied

- **Product type** offers are checked whenever a configurator product of the chosen type is priced. The offer applies when the product's price is inside the price range, the offer is within its schedule, the customer is eligible and the usage limits have not been reached.
- **Order type** offers are checked against the cart total amount or the number of items.
- **Percentage** discounts are capped at the **Max discount amount** when one is set.
- **Discount code** offers apply only after the customer enters the code. **Automatic discount** offers apply on their own.
- Offers made in the super admin portal reduce the price of a client's subscription. **Coupon Duration** decides whether the discount applies to the first billing cycle only (**Once**), to a set number of cycles (**Repeating**) or to every cycle (**Forever**).

### Search, Filters and Paging

- **Search** looks across all offers, not just the current page. It matches the offer name, description, discount code, discount value, discount type and start date and time. The list updates about a second after you stop typing and goes back to page 1.
- The **Filter** boxes only narrow the offers already on the current page.
- The list shows 50 offers per page by default.

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No offers match | **No records to display** |
| **Generate random code** fails | **Failed to generate random code**, or another error message. |
| Saving fails | An error message appears and you stay on the form. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Offers & Discounts uses it |
| ------ | ------------------------------ |
| Configurator products ([Ring](./configurator-products/ring-configurator.md), [Three Stone](./configurator-products/three-stone-configurator.md), [Eternity Band](./configurator-products/eternity-band-configurator.md), [Bracelet](./configurator-products/bracelet-configurator.md), [Stud](./configurator-products/stud-configurator.md), [Pendant](./configurator-products/pendant-configurator.md), [Birthstone](./configurator-products/birthstone-products.md)) | A product type offer is matched against the price of these products. |
| [Multi Currency](../settings/multi-currency.md) | The list shows flat discounts and amounts in the store's default currency. |

### Modules That Depend On It

| Module | How it uses offers |
| ------ | ------------------ |
| Configurator price on the storefront | The price of each configurator product includes any product type offer that applies to it. |
| [Cart Products](../sales-funnel/cart-products.md) | Discount codes are stored on cart items, and order type offers are checked against the cart. |
| [Orders](../order-management/orders.md) | When an order is placed, the codes on the cart are checked again with the same rules. A product offer discounts its items and an order offer is applied once to the order. |
| [Subscription](../subscription.md) | Offers from the super admin portal reduce client subscription prices for the chosen **Coupon Duration**. |

### What Changes If…

| Change | Effect |
| ------ | ------ |
| An offer is switched off (**Active** off) | It is no longer applied to new prices or carts. |
| An offer is deleted | It is removed from the list and is no longer applied. |
| The price range is changed | Configurator products are matched against the new range the next time they are priced. |
| The usage limit is reached | The offer is no longer applied for that customer (**Per User Limit**) or for anyone (**Overall Usage Limit**). |
| The end date passes, or the time is outside the recurring window | The offer is not applied. |
| A configurator's price changes, for example after a metal rate or margin change | The product may move into or out of an offer's price range. |

---

## Edge Cases / Notes

- **Started offers cannot be saved with their old start.** The form lets you open and save an offer whose start has passed, but saving checks that the start date and time are in the future when you add **and** when you edit. Move the start to a future date and time before saving, or the save is refused with *The start date-time must be in the future.*
- **End after start.** The form does not check that the end is after the start, but the save is refused with *End date-time must be after start date-time.*
- **Unique codes.** A discount code can be used by only one offer in your store. A repeated code is refused with *this coupon code already exist!!*.
- **Code characters.** Codes may contain only capital letters A to Z and digits. Lower-case letters, spaces and symbols are refused.
- **Price range of 0.** Leaving **Min. range amount** and **Max. range amount** at 0 means the offer applies at every price.
- **No check on max versus min.** The form does not check that **Max. range amount** is higher than **Min. range amount**.
- **Recurring schedule days.** The form does not check that at least one day is selected.
- **Sorting.** Clicking a column header does not re-sort the list. Offers always stay in their default order.
- **Product types are not filtered.** All seven configurator types are listed in **Select product type**, even ones your store does not sell.
