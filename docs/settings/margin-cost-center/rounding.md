---
sidebar_position: 5
id: rounding
title: Rounding
sidebar_label: Rounding
---

# Rounding

## Overview

**Product Rounding Management** sets how the final price of each configurator type is rounded, so prices end in a consistent value, for example always ending in 9 or in .99.

Each configurator type can have one rounding rule. The rule is applied last, after every cost, tariff and margin has been added, and it is applied to the price in the currency the shopper is viewing.

:::note[Who can use it]
Your role needs access to the page. The **Edit** icon and the status switch need **Edit** permission, and the **Delete** icon needs **Delete** permission. The **Add Product Rounding** button is not tied to **Add** permission. It is disabled only when every product type already has a rule.
:::

---

## Data Displayed

### Product Rounding Screen List

| Action | Description |
| ------ | ----------- |
| **Add Product Rounding** | Opens the form for a new rule. Disabled once every product type already has a rule. |
| **Filter** | Shows or hides a filter box under each column heading, to narrow the rows in the list. |
| **Edit** | Click the **Edit** icon in the **Action** column to change a rule. |
| **Delete** | Click the **Delete** icon. Click **YES** in the **Are you Sure?** popup to delete the rule, or **NO** to keep it. The message *Product Rounding deleted successfully* appears. |
| Status switch | The switch after the icons in the **Action** column turns the rule on or off. The message *Product Rounding updated successfully* appears. |
| **View Documentation** | Opens this page. |

### List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Action** | - | **Edit** and **Delete** icons, then the status switch. | - |
| **Product Type** | Text | The configurator type, shown as its system key. | *RING_CONFIGURATOR* |
| **Round Off Value** | Number | The ending the rounded price gets. | *9* |
| **Rounding Type** | Text | The rounding direction, shown as its system value: *Up* (**Nearest Up**), *Down* (**Nearest Down**) or *Standard* (**Automatic (Standard Rounding)**). | *Up* |
| **Status** | Badge | **Active** (green) or **Inactive** (red). | **Active** |

The list shows every rule on one page. It has no search box and no paging, and clicking a column heading does not reorder it.

### Rounding Form Fields

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Rounding Type** | ✅ | **Nearest Up**, **Nearest Down** or **Automatic (Standard Rounding)**. **Nearest Up** is selected by default. Hover over (or tap) the info icon beside an option to see an example. |
| **Allow Decimals** | - | Turn on to round to a decimal ending, such as .99, instead of a whole-number ending. Off by default. |
| **Rounding Value** | ✅ | The ending the price gets. The label shows the allowed range: **Rounding Value (0-99)** with **Allow Decimals** off, **Rounding Value (0.1 - 0.9)** for 1 decimal place and **Rounding Value (0.01 - 0.99)** for 2 decimal places. |
| **Number of Decimal Places (max 2)** | ✅ | Shown only when **Allow Decimals** is on. Enter 1 or 2. The default is 1. |
| **Select Rounding category** | ✅ | The configurator type: **Ring Configurator**, **Three Stone Configurator**, **Eternity Band Configurator**, **Bracelet Configurator**, **Stud Configurator** or **Pendant Configurator**. Empty until you choose one. |

### Validation Messages

The messages appear under the field while you type. When you click **Save**, the first message is also shown as a pop-up, in case the field is out of view.

| Message | When it appears |
| ------- | --------------- |
| Rounding Type is required | No rounding type is chosen. |
| Rounding Value is required / Rounding Value must be a number | The value is empty or is not a number. |
| Rounding Value must be between 0 and 99 | **Allow Decimals** is off and the value is outside 0 to 99. |
| Rounding Value must be an integer | **Allow Decimals** is off and the value has decimals. |
| Rounding Value must be between 0.1 and 0.9 | 1 decimal place and the value is outside that range. |
| Rounding Value must have exactly 1 digit after the decimal point | 1 decimal place and the value has a different number of decimals. |
| Rounding Value must be between 0.01 and 0.99 | 2 decimal places and the value is outside that range. |
| Rounding Value must have exactly 2 digits after the decimal point | 2 decimal places and the value has a different number of decimals. |
| Decimal Places is required / Number of Decimal Places must be 1 or 2 | The number of decimal places is empty, or not 1 or 2. |
| Number of Decimal Places must be 2 for Rounding Value 0.99 | The decimal places do not match the decimals typed in **Rounding Value**. |
| Product Type is required | No rounding category is chosen. |
| Rounding method already applied for this product type | You are adding a rule for a type that already has one. |

### Rounding Preview

Click **Preview** to check a rule before saving. The button becomes available once the rounding type, value and category are filled in. The **Rounding Preview** card applies your settings to a sample price of $123.456 and shows **Original Price**, **Rounding Type**, **Rounding Value**, **Decimal Places** and the resulting **Rounded Price**. In the preview, **Automatic (Standard Rounding)** is shown as **Automatic**. When you open an existing rule, the preview is shown straight away. Turning **Allow Decimals** on or off hides it until you click **Preview** again.

---

## How It Works

### Steps to Add a New Rounding Rule

1. Click **Add Product Rounding**.
2. Choose the **Rounding Type**.
3. Turn on **Allow Decimals** if the price should end in decimals, and set **Number of Decimal Places (max 2)**.
4. Enter the **Rounding Value**.
5. Choose the **Select Rounding category**.
6. Optionally click **Preview** to check the result.
7. Click **Save**. The message *Product Rounding added successfully.* appears and you return to the list.

To change a rule, click its **Edit** icon, change the fields and click **Edit**. The message *Product Rounding updated successfully.* appears. Click **Back** to leave the form without saving.

When you switch **Allow Decimals**, the **Rounding Value** box is cleared, because the allowed range changes. When editing a rule, switching back to the saved setting restores the saved value.

### How Prices Are Rounded

With **Allow Decimals** off, prices step in tens for an ending of 0 to 9 (for an ending of 9: …119, 129, 139…) and in hundreds for an ending of 10 to 99 (for an ending of 49: …149, 249, 349…). With **Allow Decimals** on, prices step in whole units (for an ending of 0.9: …122.9, 123.9, 124.9…).

| Rounding Type | Behaviour | Example (ending 9) |
| ------------- | --------- | ------------------ |
| **Nearest Up** | Rounds up to the next price with the ending. A price that already has the ending stays as it is. | 51, 53 and 56 → 59 |
| **Nearest Down** | Rounds down to the previous price with the ending. | 51, 53 and 56 → 49 |
| **Automatic (Standard Rounding)** | Rounds to whichever price with the ending is closest. | 122 → 119, 126 → 129 |

Results for the preview's sample price of $123.456:

| Allow Decimals | Rounding Value | Nearest Up | Nearest Down | Automatic (Standard Rounding) |
| -------------- | -------------- | ---------- | ------------ | ----------------------------- |
| Off | 9 | 129 | 119 | 119 |
| Off | 49 | 149 | 49 | 149 |
| On, 1 decimal place | 0.9 | 123.9 | 122.9 | 123.9 |
| On, 2 decimal places | 0.99 | 123.99 | 122.99 | 122.99 |

A price is never rounded down to 0 or below. When rounding down would do that, the next step up is used instead.

### Where Rounding Is Applied

1. The configurator works out the price from metal, diamonds, labour, tariff and margins.
2. The price is converted to the currency the shopper picked.
3. The rounding rule of the configurator type is applied to that converted price, so the price the shopper sees has the configured ending in their currency.
4. Offers and discounts are applied after rounding.

### Which Rule Is Used

Your own active rule for the configurator type is used. When you have no rule for the type, or your rule is **Inactive**, TCC Tech's rule for that type is used instead. When neither exists, the price is shown with two decimals and no rounding.

### Loading and Empty States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No rules | **No records to display** |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Rounding uses it |
| ------ | -------------------- |
| [Product Margin](./product-margin.md), [Diamond Margin](./diamond-margin.md), [Duty and Tariff](./duty-and-tariff.md), [Metal Rate Settings](../metal-rate-setting.md), [Labour Management](./labour-management.md) | Together they produce the price that rounding is applied to. |
| [Multi Currency](../multi-currency.md) | Rounding is applied after the price is converted to the shopper's currency. |

### Modules That Depend On It

| Module | How it uses Rounding |
| ------ | -------------------- |
| Configurator storefront prices (ring, three stone, eternity band, bracelet, stud and pendant) | Every final price shown to shoppers is rounded by the rule of its type. |
| Admin configurator product prices ([Ring Configurator](../../product-management/configurator-products/ring-configurator.md) and the other configurator product pages) | The price details show the price before and after rounding. |
| [Orders](../../order-management/orders.md) | An order stores the rounded price at the time it was placed, together with a record of the rounding applied. |
| [Cart Products](../../sales-funnel/cart-products.md) and [Wishlist Products](../../sales-funnel/wishlist-products.md) | Cart and wishlist prices are worked out again with the current rule each time they are shown. |

### What Changes If…

| Change | Effect |
| ------ | ------ |
| A rule is added, edited or switched on | Prices of that configurator type change on the storefront, in carts and in wishlists straight away. Orders already placed keep their prices. |
| A rule is switched off or deleted | TCC Tech's rule for the type is used instead. If TCC Tech has none, prices are no longer rounded. |
| TCC Tech changes its own rule | Prices change for every client that has no active rule of its own for that type. |
| The rounding value goes from one digit to two (for example 9 to 49) | Prices step in hundreds instead of tens, so they can move by up to 99. |

---

## Edge Cases / Notes

- **One rule per type.** A type can have only one rule. To change it, edit the existing rule.
- **Birthstone products are not rounded.** Birthstone configurator prices are not covered by rounding rules, and the category list does not offer them.
- **Earrings.** The **Stud Configurator** rule applies to earring (stud) configurator prices.
- **Rounding can raise the price.** **Nearest Up** and **Automatic (Standard Rounding)** can add almost a full step (up to 9.99 with a one-digit ending) to the price. Keep this in mind when setting tight margins.
- **The status switch keeps the rest of the rule.** Turning a rule off and on again does not change its value, type or decimals.

:::tip
Use **Preview** with the same settings as an existing rule of another type to compare results before saving.
:::
