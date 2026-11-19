---
sidebar_position: 2
id: diamond-margin
title: Diamond Margin
sidebar_label: Diamond Margin
---

# Diamond Margin

## Overview

**Diamond Margin Management** sets the margin added to the price of diamonds and other stones in configurator products. A rule can cover every stone of an origin (lab grown, natural or both), or only stones that match a shape, color, clarity, cut or carat range.

The diamond margin is added to each stone's rate from the [Diamond Group Master](../../product-management/diamond-group-master.md), before the product margin is added to the whole product.

:::note[Who can use it]
Your role needs access to the page. **Add Product Margin** needs **Add** permission, the **Edit** icon and the status switch need **Edit** permission, and the **Delete** icon needs **Delete** permission. Each client has its own rules. You see and change only your own.
:::

---

## Data Displayed

### Diamond Margin Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Type part of a rule name or description. The list refreshes about one second after you stop typing and goes back to page 1. Clear the box to show all rules again. |
| **Filter** | Shows or hides a filter box under each column heading, to narrow the rows on the current page. |
| **Add Product Margin** | Opens the form for a new diamond margin rule. The button keeps this label on this page. |
| **Edit** | Click the **Edit** icon in the **Action** column to change a rule. |
| **Delete** | Click the **Delete** icon. Click **YES** in the **Are you Sure?** popup to delete the rule, or **NO** to keep it. The message *Record deleted successfully* appears. |
| Status switch | The switch after the icons in the **Action** column turns the rule on or off. The message *Record updated successfully* appears. |
| **View Documentation** | Opens this page. |

### List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Action** | - | **Edit** and **Delete** icons, then the status switch. | - |
| **Rule Name** | Text | The margin name. | *Round lab grown 1-2 ct* |
| **Diamond Range** | Text | How the rule is matched: *All* (every stone), *Attribute* (selected attributes) or *Range* (carat range only). See [How Rules Are Saved](#how-rules-are-saved). | *Range* |
| **Stone Type** | Text | The stone origin: *Natural*, *Lab_grown* or *Both*. | *Lab_grown* |
| **Margin** | Number | The value of the rule. | *15* |
| **Status** | Badge | **Active** (green) or **Inactive** (red). | **Active** |

The list is sorted with the newest rule first, 50 rules per page by default. Click **Rule Name**, **Diamond Range**, **Stone Type** or **Margin** to sort. Use the paging controls at the bottom to move between pages or to show 25, 50, 75 or 100 rules per page.

### Diamond Margin Form Fields

#### Margin Information

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Margin Name** | ✅ | The name shown in the list. Shows *Margin name is required* when empty. |
| **Margin Description** | - | An optional description. The list search also looks here. |

#### Margin Configuration

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Item Type** | ✅ | New rules are always **Diamond Group Master**. **Loose Diamond** appears only when you open an older rule saved as a loose diamond rule. It cannot be changed when editing. |

#### Diamond Margin Management

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Select Stone Type** | ✅ | The stone, from your stone master, for example *Diamond*. The first stone is selected for a new rule. Shows *Stone type is required* when empty. |
| **Select Stone origin** | - | **labgrown**, **natural** or **both**. **labgrown** is selected by default. |
| **Apply To** | ✅ | **All Items** applies the rule to every stone of the origin. **Attribute** limits it to the attributes you tick. **Attribute** is selected by default. |
| **Apply Margin On** | - | Shown for **Attribute**. Tick **Shape**, **Color**, **Clarity**, **Cut** and/or **Carat Range**, or **All** to tick all five. **All** is ticked automatically when you tick the five one by one. |
| **Select Shape** | ✅ | Shown when **Shape** is ticked. The first shape is preselected. Shows *Shape is required* when empty. |
| **Select Color** | ✅ | Shown when **Color** is ticked. The first color is preselected. Shows *Color is required* when empty. |
| **Select Clarity** | ✅ | Shown when **Clarity** is ticked. The first clarity is preselected. Shows *Clarity is required* when empty. |
| **Select Cut** | ✅ | Shown when **Cut** is ticked. The first cut is preselected. Shows *Cut is required* when empty. |
| **Min Carat Range** | ✅ | Shown when **Carat Range** is ticked. Shows *Min Carat is required* when empty, or *Min Carat must be a number*. |
| **Max Carat Range** | ✅ | Shown when **Carat Range** is ticked. Must be greater than the minimum (*Max Carat must be greater than Min Carat*). Shows *Max Carat is required* when empty. |
| **Select Pricing Type** | ✅ | **Margin**, **Markup** or **Multiplier**. **Markup** is selected by default. |
| **Select Margin Type** / **Select Markup Type** | ✅ | Shown for **Margin** and **Markup** only. **Margin** offers **Percentage (%)**. **Markup** offers **Flat Amount** and **Percentage (%)**. **Percentage (%)** is selected by default. Changing the pricing type clears a type that is no longer allowed. |
| **Value** | ✅ | Shows *Value is required* when empty and *Value must be a number* when it is not a number. Negative values are refused (*Value cannot be negative*) and the minus key is blocked. With **Margin**, the value must be less than 100 (*Margin value must be less than 100*). A **%** sign is shown for percentages and a **₹** sign otherwise. |

The pricing types work the same way as in [Product Margin](./product-margin.md#pricing-types): a 20% markup adds 20% of the stone's rate, a 20% margin divides the rate by 0.8, a flat amount is added to the rate, and a multiplier multiplies it.

---

## How It Works

### Steps to Add a New Diamond Margin

1. Click **Add Product Margin**.
2. Enter the **Margin Name** and, optionally, the **Margin Description**.
3. Choose the **Select Stone Type** and **Select Stone origin**.
4. Choose **Apply To**. For **Attribute**, tick the attributes under **Apply Margin On** and choose their values.
5. Choose the **Select Pricing Type**, then the **Select Margin Type** or **Select Markup Type** (not needed for **Multiplier**).
6. Enter the **Value**.
7. Click **Save Rule**. A confirmation message appears and you return to the list.

Click **Cancel** or **Back** to leave without saving. To change a rule, click its **Edit** icon, change the fields and click **Save Rule**.

:::note Example
**Apply To:** Attribute, **Apply Margin On:** Carat Range, **Min Carat Range:** 1, **Max Carat Range:** 2. The rule applies to every stone of the chosen type and origin weighing from 1 to 2 carats.
:::

### How Rules Are Saved

What you tick decides how the rule is matched. The **Diamond Range** column shows the result.

| What you choose | Saved as | Which stones it matches |
| --------------- | -------- | ----------------------- |
| **All Items** | *All* | Every stone of the chosen origin. |
| **Attribute** with only **Carat Range** ticked | *Range* | Stones of the chosen stone type whose carat weight is within the range. |
| **Attribute** with **Shape**, **Color**, **Clarity** or **Cut** ticked (with or without **Carat Range**) | *Attribute* | Stones of the chosen stone type that match every ticked attribute. |
| **Attribute** with nothing ticked | *Attribute* | Every stone of the chosen stone type. The list shows it as *All*. |

When you choose **All Items**, any attributes you had ticked are not saved.

### Which Rule Is Used

Each stone in a configurator product (the center stone and every side stone) gets one diamond margin:

1. Only your own active rules with a matching origin are considered. A rule with origin **both** matches natural and lab grown stones.
2. A *Range* rule wins over an *Attribute* rule, which wins over an *All* rule.
3. When several rules of the same kind match, the one giving the highest price is used.
4. When no rule matches, the stone is priced at its rate with no diamond margin.

### Where the Margin Is Applied

1. The stone's rate is taken from the [Diamond Group Master](../../product-management/diamond-group-master.md) (the natural or lab grown rate, depending on the stone).
2. The [Duty and Tariff](./duty-and-tariff.md) percentage for the configurator type is added to the rate.
3. The diamond margin is applied to that rate.
4. The result is multiplied by the stone's carat weight and count. A stone that is not a diamond is priced per piece.
5. The product total then gets the [Product Margin](./product-margin.md) and [Rounding](./rounding.md).

### Search, Sorting and Paging

- The search covers every rule, not just the current page, and matches the name or description.
- Sorting and paging are done across all rules.
- The **Filter** boxes only narrow the rules already on the current page.

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No rules match | **No records to display** |
| A rule cannot be opened | *Failed to load margin details.* |
| A rule overlaps an existing one | *This carat range overlaps with an existing range.* |
| The same rule already exists | *Diamond Margin already exists!* |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Diamond Margin uses it |
| ------ | -------------------------- |
| [Stone Master](../../product-management/masters/stone-master.md) | Supplies the **Select Stone Type** list. |
| [Diamond Shape](../../product-management/masters/diamond-shape.md), [Color](../../product-management/masters/color.md), [Clarity](../../product-management/masters/clarity.md), [Cut](../../product-management/masters/cut.md) | Supply the attribute lists. |
| [Diamond Group Master](../../product-management/diamond-group-master.md) | Supplies the stone rates the margin is applied to. |
| [Duty and Tariff](./duty-and-tariff.md) | The tariff percentage is added to the rate before the margin. |
| [Price Display](../price-display.md) | Decides whose diamond rates are used: yours, or TCC Tech's. |

### Modules That Depend On It

| Module | How it uses Diamond Margin |
| ------ | -------------------------- |
| Configurator storefront prices (ring, three stone, eternity band, bracelet, stud and pendant) | Every stone in the product is priced with its diamond margin. |
| [Product Margin](./product-margin.md) and [Rounding](./rounding.md) | Applied to a total that includes the diamond margin. |
| [Cart Products](../../sales-funnel/cart-products.md), [Wishlist Products](../../sales-funnel/wishlist-products.md) | Prices are worked out again with the current rules each time. |
| [Orders](../../order-management/orders.md) | An order stores the price, including the diamond margins applied, at the time it was placed. |

### What Changes If…

| Change | Effect |
| ------ | ------ |
| A rule is added, edited or switched on | Prices of configurator products with matching stones change straight away. Orders already placed keep their prices. |
| A rule is switched off or deleted | Matching stones fall back to the next rule that matches (an *Attribute* or *All* rule), or to no margin. |
| A stone's rate changes in the Diamond Group Master | The margin is applied to the new rate, so the price changes by more than the rate change for percentage margins. |
| Price Display is set to *TCCTECH price + Margins* | Stones start from TCC Tech's rates, which already include TCC Tech's own diamond margin. Your diamond margin is added on top. |

---

## Edge Cases / Notes

- **Carat range with other attributes.** A rule that ticks **Carat Range** together with **Shape**, **Color**, **Clarity** or **Cut** is saved as an *Attribute* rule. Configurator prices then match it on the ticked attributes only, so it applies to matching stones of any carat weight. To limit a margin by carat weight, make a rule with only **Carat Range** ticked.
- ***All* rules cover every stone.** An **All Items** rule is matched on origin only. It applies to every stone of that origin, not only to the stone chosen in **Select Stone Type**.
- **The list can show *All* for an *Attribute* rule.** A rule saved with **Attribute** but no shape, color, clarity or cut is shown as *All* in **Diamond Range**, and opens with **All Items** selected. It still applies only to the chosen stone type.
- **Overlapping carat ranges.** Two rules of the same kind, stone, origin and attributes cannot have overlapping carat ranges.
- **Carat limits.** Carat values must be between 0 and 100.
- **TCC Tech's rules never apply to your prices directly.** If none of your rules match a stone, it has no diamond margin, even if TCC Tech has a matching rule.
- **Carat ranges.** The separate Diamond Range page has been removed. Carat ranges are set on the rule itself. See [Diamond Range](./diamond-range.md).
