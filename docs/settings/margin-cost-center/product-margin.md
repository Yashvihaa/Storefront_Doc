---
sidebar_position: 1
id: product-margin
title: Product Margin
sidebar_label: Product Margin
---

# Product Margin

## Overview

**Product Margin Management** sets the margin added on top of the cost of a configurator product. Each rule covers every product of one configurator type, for example every ring built in the Ring Configurator.

The product margin is added after the metal, labour and diamond costs (with their own margins and tariff) are added together, and before the price is rounded.

:::note[Who can use it]
Your role needs access to the page. **Add Product Margin** needs **Add** permission, the **Edit** icon and the status switch need **Edit** permission, and the **Delete** icon needs **Delete** permission. Each client has its own rules. You see and change only your own.
:::

---

## Data Displayed

### Product Margin Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Type part of a rule title or description. The list refreshes about one second after you stop typing and goes back to page 1. Clear the box to show all rules again. |
| **Filter** | Shows or hides a filter box under each column heading, to narrow the rows on the current page. |
| **Add Product Margin** | Opens the form for a new rule. |
| **Edit** | Click the **Edit** icon in the **Action** column to change a rule. |
| **Delete** | Click the **Delete** icon. Click **YES** in the **Are you Sure?** popup to delete the rule, or **NO** to keep it. The message *Product Margin deleted successfully* appears. |
| Status switch | The switch after the icons in the **Action** column turns the rule on or off. The message *Record updated successfully* appears. |
| **View Documentation** | Opens this page. |

### List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Action** | - | **Edit** and **Delete** icons, then the status switch. | - |
| **Product Margin Title** | Text | The rule title. | *Ring retail margin* |
| **Product Type** | Text | The configurator type, shown as its system key. | *RING_CONFIGURATOR* |
| **Margin Apply** | Text | How the rule applies. Rules made on this page always show *All*. | *All* |
| **Margin Type** | Text | *Percentage* or *Flat*. | *Percentage* |
| **Margin Value** | Number | The value of the rule. | *25* |
| **Status** | Badge | **Active** (green) or **Inactive** (red). | **Active** |

The list is sorted with the newest rule first, 50 rules per page by default. Click a column heading to sort by it (except **Action** and **Status**). Use the paging controls at the bottom to move between pages or to show 25, 50, 75 or 100 rules per page.

### Product Margin Form Fields

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Rule Title** | ✅ | The name shown in the list. Shows *Rule Title is required* when empty. |
| **Select Product Type** | ✅ | **Ring Configurator**, **Three stone configurator**, **Eternity band configurator**, **Bracelet configurator**, **Birthstone configurator**, **Stud configurator** or **Pendant configurator**. **Ring Configurator** is selected by default. |
| **Description** | ✅ | A short description of the rule. Shows *Description is required* when empty. |
| **Select Pricing Type** | ✅ | **Margin**, **Markup** or **Multiplier**. **Markup** is selected by default. |
| **Select Margin Type** / **Select Markup Type** | ✅ | Shown for **Margin** and **Markup** only. **Margin** offers **Percentage (%)**. **Markup** offers **Flat Amount** and **Percentage (%)**. **Flat Amount** is selected by default for a new rule. Shows *Margin Type is required* when empty. Changing the pricing type clears a type that is no longer allowed. |
| **Margin Value** | ✅ | The value. Shows *Margin Value is required* when empty. With **Margin**, the value must be less than 100 (*Margin value must be less than 100*). |

### Pricing Types

| Pricing Type | Margin / Markup Type | How the price is worked out | Example on a cost of 1,000 with value 20 |
| ------------ | -------------------- | --------------------------- | ---------------------------------------- |
| **Markup** | **Percentage (%)** | Cost plus the percentage of the cost. | 1,200 |
| **Markup** | **Flat Amount** | Cost plus the amount. | 1,020 |
| **Margin** | **Percentage (%)** | The price is set so the margin is that percentage of the selling price: cost ÷ (1 − value ÷ 100). | 1,250 |
| **Multiplier** | None | Cost times the value. | 20,000 (a value of 2 gives 2,000) |

---

## How It Works

### Steps to Add a New Product Margin

1. Click **Add Product Margin**.
2. Enter the **Rule Title** and **Description**.
3. Choose the **Select Product Type**.
4. Choose the **Select Pricing Type**, then the **Select Margin Type** or **Select Markup Type** (not needed for **Multiplier**).
5. Enter the **Margin Value**.
6. Click **Save**. The message *Product margin added successfully.* appears and you return to the list.

To change a rule, click its **Edit** icon, change the fields and click **Edit**. The message *Product margin updated successfully.* appears. Click **Back** to leave without saving.

### Where the Margin Is Applied

For a configurator product, the price is built in this order:

1. **Metal**: the metal rate with the [Duty and Tariff](./duty-and-tariff.md) percentage and the metal margin from [Metal Rate Settings](../metal-rate-setting.md), times the karat purity and the metal weight, plus labour from [Labour Management](./labour-management.md).
2. **Diamonds**: each diamond's rate from the [Diamond Group Master](../../product-management/diamond-group-master.md), with the tariff percentage and the [Diamond Margin](./diamond-margin.md), times its weight and count.
3. **Product margin**: the active product margin of the configurator type is applied to metal plus diamonds.
4. **Rounding**: the [Rounding](./rounding.md) rule is applied to the result, in the shopper's currency.

For **Birthstone configurator**, the stored price of the chosen metal option is used as the cost, then the product margin is added. Birthstone prices are not rounded.

### Which Rule Is Used

Only your own active rules are used. When you have no active rule for a configurator type, no product margin is added to that type. When more than one active rule could apply, the one giving the highest price is used.

### Search, Sorting and Paging

- The search covers every rule, not just the current page, and matches the title or description.
- Sorting and paging are done across all rules.
- The **Filter** boxes only narrow the rules already on the current page.

### Loading and Empty States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No rules match | **No records to display** |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Product Margin uses it |
| ------ | -------------------------- |
| [Metal Rate Settings](../metal-rate-setting.md), [Labour Management](./labour-management.md), [Diamond Margin](./diamond-margin.md), [Diamond Group Master](../../product-management/diamond-group-master.md), [Duty and Tariff](./duty-and-tariff.md) | They produce the cost the product margin is applied to. |
| [Price Display](../price-display.md) | Decides whose base rates the cost starts from. See [What Changes If…](#what-changes-if). |

### Modules That Depend On It

| Module | How it uses Product Margin |
| ------ | -------------------------- |
| Configurator storefront prices | Every configurator price includes the product margin of its type. |
| [Rounding](./rounding.md) | Rounds the price after the product margin is added. |
| Admin configurator product pages (for example [Ring Configurator](../../product-management/configurator-products/ring-configurator.md) and [Birthstone Products](../../product-management/configurator-products/birthstone-products.md)) | Show prices with the margin included. |
| [Cart Products](../../sales-funnel/cart-products.md), [Wishlist Products](../../sales-funnel/wishlist-products.md) | Prices are worked out again with the current margin each time. |
| [Orders](../../order-management/orders.md) | An order stores the price, including the margin applied, at the time it was placed. The **Margin** line of the **Manufacturing Option Comparison** is the order's retail price minus the landed cost. |

### What Changes If…

| Change | Effect |
| ------ | ------ |
| A rule is added, edited or switched on | Prices of that configurator type change on the storefront, in carts and in wishlists straight away. Orders already placed keep their prices. |
| A rule is switched off or deleted | That configurator type is priced without a product margin. Prices drop to cost plus metal and diamond margins, then rounding. |
| The pricing type changes, for example from **Markup** 20% to **Margin** 20% | Prices change even though the value stays the same (1,200 becomes 1,250 on a cost of 1,000). |
| Price Display is set to *TCCTECH price + Margins* | Your cost starts from TCC Tech's rates, which already include TCC Tech's own metal, diamond and product margins. Your own product margin is added on top. |

---

## Edge Cases / Notes

- **One rule per type.** A second rule for the same configurator type is refused with *Product Margin already exists!*.
- **Flat amounts are added once.** A **Flat Amount** markup is added to the whole product price, not per gram or per stone.
- **Multiplier values.** A **Multiplier** of 1 adds nothing. A value such as 20 multiplies the cost twenty times, so check the value before saving.
- **TCC Tech's rules never apply to your prices directly.** If you have no rule of your own, your prices have no product margin, even if TCC Tech has one.
- **Earrings.** The **Stud configurator** rule covers earring (stud) configurator prices.
- **The list does not show the pricing type.** **Margin Type** shows *Percentage* or *Flat* only, and a **Multiplier** rule shows *Percentage*. Open the rule to see whether it is a margin, markup or multiplier.
