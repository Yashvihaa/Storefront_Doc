---
sidebar_position: 5
id: rounding
title: Rounding
sidebar_label: Rounding
---

# Rounding

The **Product Rounding Management** module lets you set how calculated prices are rounded for each product type, so prices shown on the website end in a consistent value (for example, always ending in 9).

---

## Product Rounding Screen List

| Action | Description |
| ------ | ----------- |
| **Add Product Rounding** | Click the **Add Product Rounding** button above the list to create a rounding rule. The button is disabled once every product type already has a rule. |
| **Filter** | Shows or hides a filter box under each column heading, to narrow the rows in the list. |
| **Edit** | Click the **Edit** icon to change an existing rule. |
| **Delete** | Click the **Delete** icon to remove a rule. Click **YES** in the **Are you Sure?** popup to delete it, or **NO** to cancel. The message "Product Rounding deleted successfully" appears. |
| **Status** | Shows whether the rule is **Active** or **Inactive**. Use the toggle switch to activate or deactivate the rule. The message "Product Rounding updated successfully" appears. |

The list shows the following columns:

| Column | Description |
| ------ | ----------- |
| **Product Type** | Product type the rule applies to. |
| **Round Off Value** | Value the rounded price ends with. |
| **Rounding Type** | Rounding direction used by the rule. |
| **Status** | **Active** or **Inactive**, followed by the status toggle. |

The list has no search box or paging.

:::note Permissions
The **Edit** icon and the status toggle need **Edit** permission, and the **Delete** icon needs **Delete** permission. The **Add Product Rounding** button is not tied to **Add** permission; it is disabled only when every product type already has a rule.
:::

---

### Steps to Add a New Rounding Rule

Click **Add Product Rounding**, fill in the fields below, and click **Save** (or **Edit** when changing an existing rule). Use the **Back** button to return to the list without saving. When the save succeeds, the message "Product Rounding added successfully." or "Product Rounding updated successfully." appears and you return to the list.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| Rounding Type | ✅ | Choose **Nearest Up**, **Nearest Down** or **Automatic (Standard Rounding)**. **Nearest Up** is selected by default. Hover over the info icon next to each option to see an example. |
| Allow Decimals | - | Turn on to round to a decimal ending instead of a whole-number ending. Off by default. |
| Rounding Value | ✅ | The value the rounded price ends with. The field label shows the allowed range. With **Allow Decimals** off, enter a whole number from 0 to 9. With **Allow Decimals** on, enter 0.1–0.9 for 1 decimal place or 0.01–0.99 for 2 decimal places. |
| Number of Decimal Places (max 2) | ✅ | Shown only when **Allow Decimals** is on. Enter 1 or 2; the default is 1. |
| Select Rounding category | ✅ | Choose the product type: Ring Configurator, Three Stone Configurator, Eternity Band Configurator, Bracelet Configurator, Stud Configurator or Pendant Configurator. Nothing is selected until you choose one. |

If a field is not valid, a message tells you what to fix:

| Message | When it appears |
| ------- | --------------- |
| Rounding Type is required | No rounding type is chosen. |
| Rounding Value is required / Rounding Value must be a number | The value is empty or is not a number. |
| Rounding Value must be between 0 and 9 | **Allow Decimals** is off and the value is outside 0 to 9. |
| Rounding Value must be an integer | **Allow Decimals** is off and the value has decimals. |
| Rounding Value must be between 0.1 and 0.9 | 1 decimal place and the value is outside that range. |
| Rounding Value must have exactly 1 digit after the decimal point | 1 decimal place and the value has a different number of decimals. |
| Rounding Value must be between 0.01 and 0.99 | 2 decimal places and the value is outside that range. |
| Rounding Value must have exactly 2 digits after the decimal point | 2 decimal places and the value has a different number of decimals. |
| Decimal Places is required / Number of Decimal Places must be 1 or 2 | The number of decimal places is empty or not 1 or 2. |
| Product Type is required | No rounding category is chosen. |

The first of these messages is also shown as a pop-up when you click **Save**, in case the field is out of view.

:::note
Each product type can have only one rounding rule. When you add a rule and a rule already exists for the selected type, the message "Rounding method already applied for this product type" is shown. Edit the existing rule instead.
:::

---

## Rounding Types

The examples below use a rounding value of **9** with **Allow Decimals** off.

| Rounding Type | Behavior | Example |
| ------------- | -------- | ------- |
| **Nearest Up** | Rounds up to the next price ending with the rounding value. | 51, 53 and 56 → 59 |
| **Nearest Down** | Rounds down to the previous price ending with the rounding value. | 51, 53 and 56 → 49 |
| **Automatic (Standard Rounding)** | Rounds to whichever price ending with the rounding value is closest. | 122 → 119, 126 → 129 |

A price that already ends with the rounding value stays unchanged for **Nearest Up**.

### Worked examples with decimals

The **Preview** uses a sample price of $ 123.456. These are the results you get:

| Allow Decimals | Rounding Value | Nearest Up | Nearest Down | Automatic (Standard Rounding) |
| -------------- | -------------- | ---------- | ------------ | ----------------------------- |
| Off | 9 | 129 | 119 | 119 |
| On, 1 decimal place | 0.9 | 123.9 | 122.9 | 123.9 |
| On, 2 decimal places | 0.99 | 123.99 | 122.99 | 122.99 |

With **Allow Decimals** off, prices step in tens (for a rounding value of 9: …19, 29, 39…). With **Allow Decimals** on, prices step in whole units (for a rounding value of 0.9: …122.9, 123.9, 124.9…).

---

## Rounding Preview

Click **Preview** to check a rule before saving it. The button becomes available once the rounding type, rounding value and rounding category are filled in. A **Rounding Preview** card applies your settings to a sample price of $ 123.456 and shows the **Original Price**, **Rounding Type**, **Rounding Value**, **Decimal Places** and the resulting **Rounded Price**. In the preview, **Automatic (Standard Rounding)** is shown as **Automatic**. When you open an existing rule, the preview is shown automatically.
