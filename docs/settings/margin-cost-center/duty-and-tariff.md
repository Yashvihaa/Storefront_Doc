---
sidebar_position: 4
id: duty-and-tariff
title: Duty and Tariff
sidebar_label: Duty and Tariff
---

# Duty and Tariff

## Overview

**Duty & Tariff Management** sets import duties, customs charges and similar tariffs that are added to configurator prices. Each rule has a percentage and applies to one or more configurator types.

The tariff is added to the base rates (metal rate, labour and other charges, and diamond rates) before any margin is applied, so the margins are worked out on the price including the tariff.

:::note[Who can use it]
Your role needs access to the page. **Add Tariff Rule** needs **Add** permission, the **Edit** icon and the status switch need **Edit** permission, and the **Delete** icon needs **Delete** permission. Each client has its own rules. You see and change only your own.
:::

---

## Data Displayed

### Duty & Tariff Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Type part of a rule name. The list refreshes about one second after you stop typing and goes back to page 1. Clear the box to show all rules again. |
| **Filter** | Shows or hides a filter box under each column heading, to narrow the rows on the current page. |
| **Add Tariff Rule** | Opens the **Add Tariff Rule** panel on the right. |
| **Edit** | Click the **Edit** icon in the **Action** column to open the **Edit Tariff Rule** panel. |
| **Delete** | Click the **Delete** icon. Click **YES** in the **Are you Sure?** popup to delete the rule, or **NO** to keep it. The message *Tariff deleted successfully* appears. |
| Status switch | The switch after the icons in the **Action** column turns the rule on or off. The message *Record updated successfully* appears. |
| **View Documentation** | Opens this page. |

### List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Action** | - | **Edit** and **Delete** icons, then the status switch. | - |
| **Rule Name** | Text | The tariff name. | *US import duty* |
| **Type** | Text | The tariff type. | *Percentage (%)* |
| **Value** | Text | The tariff value with a % sign. | *5%* |
| **Product Type** | Text | The configurator types the rule applies to, separated by commas. Long lists wrap. | *Ring Configurator, Pendant Configurator* |

The list has no separate status badge column. A rule is on when its switch is on.

The list is sorted with the newest rule first, 50 rules per page by default. Click a column heading to sort (except **Product Type**). Use the paging controls at the bottom to move between pages or to show 25, 50, 75 or 100 rules per page.

### Tariff Rule Fields

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Tariff Name** | ✅ | The name shown in the list. Must be unique. Shows *Tariff Name is required* when empty. |
| **Select Margin Type** | ✅ | **Percentage (%)** is the only option. Shows *Type is required* when empty. |
| **Value** | ✅ | A number greater than 0, with up to 2 decimal places. |
| **Product Type** | ✅ | One or more of **Ring Configurator**, **Three Stone Configurator**, **Eternity Band Configurator**, **Bracelet Configurator**, **Stud Configurator** and **Pendant Configurator**. A type you have picked is removed from the list. Shows *Product Type is required* when none is picked. |

**Value** messages:

| Message | When it appears |
| ------- | --------------- |
| Value is required | The field is empty. |
| Value must be a number | The entry is not a number. |
| Please enter a value greater than 0 | The value is 0. |
| Only 2 decimal places allowed | The value has more than 2 decimal places, or is negative. |

---

## How It Works

### Steps to Add a New Tariff Rule

1. Click **Add Tariff Rule**.
2. Enter the **Tariff Name**.
3. Choose **Percentage (%)** in **Select Margin Type**.
4. Enter the **Value**.
5. Pick one or more configurator types in **Product Type**.
6. Click **Add Tariff Rule**. The message *Tariff added successfully.* appears, the panel closes and the list reloads.

To change a rule, click its **Edit** icon. The panel opens with the rule's values and its product types already picked. Change the fields and click **Save Tariff Rule**. The message *Tariff updated successfully.* appears. Click **Cancel** to close the panel without saving.

### How the Tariff Is Applied

When a configurator product is priced, all your active tariff rules that include its type are added together. For example, a 5% rule and a 2.5% rule for **Ring Configurator** make a 7.5% tariff on rings.

The tariff percentage is then added to:

| Part of the price | Example with a 7.5% tariff |
| ----------------- | -------------------------- |
| The metal rate, before the metal margin | A rate of 60.00 per gram becomes 64.50. |
| Labour and other charges | A labour charge of 40.00 becomes 43.00. |
| Each diamond or stone rate, before the diamond margin | A rate of 1,000.00 becomes 1,075.00. |

After that, the metal margin, diamond margin, product margin and rounding are applied in the usual order. See [Product Margin](./product-margin.md#where-the-margin-is-applied).

### Search, Sorting and Paging

- The search covers every rule, not just the current page, and matches the rule name.
- Sorting and paging are done across all rules.
- The **Filter** boxes only narrow the rules already on the current page.

### Loading and Empty States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No rules match | **No records to display** |
| The name is already used | *Data already exists* |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Duty and Tariff uses it |
| ------ | --------------------------- |
| [Metal Rate Settings](../metal-rate-setting.md), [Labour Management](./labour-management.md), [Diamond Group Master](../../product-management/diamond-group-master.md) | Supply the rates the tariff is added to. |

### Modules That Depend On It

| Module | How it uses Duty and Tariff |
| ------ | --------------------------- |
| Configurator storefront prices (ring, three stone, eternity band, bracelet, stud and pendant) | Prices include the tariff of their type. |
| [Metal Rate Settings](../metal-rate-setting.md), [Diamond Margin](./diamond-margin.md), [Product Margin](./product-margin.md) | Their margins are worked out on the rates including the tariff, so a percentage margin also grows with the tariff. |
| [Cart Products](../../sales-funnel/cart-products.md), [Wishlist Products](../../sales-funnel/wishlist-products.md) | Prices are worked out again with the current tariff each time. |
| [Orders](../../order-management/orders.md) | An order stores its price, including the tariff, at the time it was placed. The **BENCHMARK** columns of the **Manufacturing Option Comparison** use TCC Tech's prices without your tariff. Manufacturer columns use the manufacturer's own tariff from [Manufacturer Charges](../../order-management/manufacturer-charges.md). |

### What Changes If…

| Change | Effect |
| ------ | ------ |
| A rule is added, edited or switched on | Prices of the chosen configurator types change straight away. Orders already placed keep their prices. |
| A rule is switched off or deleted | Its percentage is no longer added. Other active rules for the same types still apply. |
| A second rule is added for a type that already has one | The two percentages add up. |
| A type is removed from a rule | That type is no longer charged this rule's tariff. |

---

## Edge Cases / Notes

- **Tariffs add up.** There is no limit of one rule per type. Check the list for other active rules covering the same type before adding a new one.
- **Rate cards do not include the tariff.** The final rates on [Metal Rate Settings](../metal-rate-setting.md) leave out the tariff, because it depends on the product type.
- **Birthstone products.** Birthstone is not offered in **Product Type**.
- **Earrings.** **Stud Configurator** covers earring (stud) configurator prices.
- **Only your rules count.** Your prices use only your own tariff rules, also when Price Display is set to *TCCTECH price + Margins*.
- **One rule for several types.** A rule saved for several types is one rule. Switching it off removes the tariff from all of them.
