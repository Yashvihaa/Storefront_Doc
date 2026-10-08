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
| **Add Product Rounding** | Click the **Add Product Rounding** button to create a rounding rule. The button is disabled once every product type already has a rule. |
| **Edit** | Click the **Edit** icon to change an existing rule. |
| **Delete** | Click the **Delete** icon to remove a rule. Click **YES** in the confirmation popup to delete it, or **NO** to cancel. |
| **Status** | Shows whether the rule is **Active** or **Inactive**. Use the toggle switch to activate or deactivate the rule. |

The list shows the following columns:

| Column | Description |
| ------ | ----------- |
| **Product Type** | Product type the rule applies to. |
| **Round Off Value** | Value the rounded price ends with. |
| **Rounding Type** | Rounding direction used by the rule. |

The list has no search box or paging.

:::note Permissions
The **Edit** icon and the status toggle need **Edit** permission, and the **Delete** icon needs **Delete** permission.
:::

---

### Steps to Add a New Rounding Rule

Click **Add Product Rounding**, fill in the fields below, and click **Save** (or **Edit** when changing an existing rule). Use the **Back** button to return to the list without saving.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| Rounding Type | ✅ | Choose **Nearest Up**, **Nearest Down** or **Automatic (Standard Rounding)**. **Nearest Up** is selected by default. Hover over the info icon next to each option to see an example. |
| Allow Decimals | - | Turn on to round to a decimal ending instead of a whole-number ending. |
| Rounding Value | ✅ | The value the rounded price ends with. The field label shows the allowed range. With **Allow Decimals** off, enter a whole number from 0 to 9. With **Allow Decimals** on, enter 0.1–0.9 for 1 decimal place or 0.01–0.99 for 2 decimal places. |
| Number of Decimal Places (max 2) | ✅ | Shown only when **Allow Decimals** is on. Enter 1 or 2; the default is 1. |
| Select Rounding category | ✅ | Choose the product type: Dynamic Product, Setting Product, Ring Configurator, Three Stone Configurator, Eternity Band Configurator, Bracelet Configurator, Stud Configurator, Pendant Configurator or Cart Order Product. |

:::note
Each product type can have only one rounding rule. If a rule already exists for the selected type, the message "Rounding method already applied for this product type" is shown. Edit the existing rule instead.
:::

---

## Rounding Types

The examples below use a rounding value of **9** with **Allow Decimals** off.

| Rounding Type | Behavior | Example |
| ------------- | -------- | ------- |
| **Nearest Up** | Rounds up to the next price ending with the rounding value. | 51, 53 and 56 → 59 |
| **Nearest Down** | Rounds down to the previous price ending with the rounding value. | 51, 53 and 56 → 49 |
| **Automatic (Standard Rounding)** | Rounds to whichever price ending with the rounding value is closest. | 122 → 119, 126 → 129 |

---

## Rounding Preview

Click **Preview** to check a rule before saving it. The button becomes available once the rounding type, rounding value and rounding category are filled in. A **Rounding Preview** card applies your settings to a sample price of $ 123.456 and shows the **Original Price**, **Rounding Type**, **Rounding Value**, **Decimal Places** and the resulting **Rounded Price**.
