---
sidebar_position: 8
id: labour-management
title: Labour Management
sidebar_label: Labour Management
---

# Labour Management

## Overview

**Labour Management** sets how the labour (making) charge of configurator products is worked out for each metal:

- **Fixed**: each product's own labour charge is used, as set on the product.
- **Per Gram**: a labour rate per gram is multiplied by the product's metal weight. Gold has one rate per karat. Other metals, such as Silver or Platinum, have one rate each.

:::note[Who can use it]
Your role needs access to the page. The page does not check **Add**, **Edit** or **Delete** permission separately. Each client has its own labour rules.
:::

---

## Data Displayed

### Labour Management Screen

The page is a single card, worked through from top to bottom. **Save** sits at the top right of the page.

| Section | Description |
| ------- | ----------- |
| **Select Metal** | One button per active metal in your metal master. The selected metal is black. The page reopens on the metal you used last in the same browser session, otherwise on the first metal. |
| **Karat / Purity** | Shown for Gold only. One button per active karat, for example **14K**. The first karat is selected when the page opens. |
| **Charge Logic for &lt;Metal&gt;** | **Fixed** or **Per Gram** for the selected metal, for example **Charge Logic for Gold**. |
| **Assign Value** | Shown for **Per Gram**. The labour rate per gram, with a **Cancel** button. |
| Rule cards | Shown for **Per Gram**. The saved rate of each karat (Gold) or of the metal. |
| Fixed note | Shown for **Fixed**: *"Labour for GOLD will be extracted from individual Product Details as a fixed calculation."* The text says GOLD for every metal. |
| **Save** | Saves the rate you entered and any change to the charge logic. Enabled only when there is something to save. |

### Assign Value Field

| Field | Required | Remarks |
| ----- | -------- | ------- |
| Labour rate | ✅ | The rate per gram, shown with your default currency symbol. A number greater than 0, with up to 2 decimal places. Shows *Value is required*, *Only numbers allowed* or *Value must be greater than 0*. When the metal (or karat) already has a rate, the box shows it, locked. |

### Rule Cards

| Metal | Cards shown |
| ----- | ----------- |
| **Gold** | One card per karat, titled with the karat and the metal, for example *14K GOLD*. The selected karat has a darker border. |
| Other metals | One card, titled with the metal, for example *PLATINUM*. |

Each card shows the number of rates (**RULE**) and either the rate (for example *$12.50*, with **Per Gram Rate** and **GRAM**) or **NO RULES CONFIGURED**. A card with a rate has two icons:

| Icon | Description |
| ---- | ----------- |
| **Edit** (pencil) | Loads the rate into the box so you can change it. While editing, the metal, karat and charge logic buttons are disabled. |
| **Delete** (bin) | Click it, then **YES** in the **Are you Sure?** popup to remove the rate, or **NO** to keep it. The message *Labour charge deleted successfully* appears. |

---

## How It Works

### Steps to Set a Per Gram Labour Rate

1. Under **Select Metal**, click the metal.
2. For Gold, click the karat under **Karat / Purity**.
3. Under **Charge Logic for &lt;Metal&gt;**, click **Per Gram**.
4. Enter the rate in **Assign Value**.
5. Click **Save**. The message *Labour charge added successfully* appears and the rate shows on the card.

Repeat for each karat of Gold.

### Steps to Change or Remove a Rate

1. Click the **Edit** (pencil) icon on the card. The rate loads into the box.
2. Change the rate and click **Save**. The message *Labour charge updated successfully* appears. **Save** stays disabled until the value differs from the saved one.
3. Click **Cancel** to stop editing without saving.

To remove a rate, click the **Delete** (bin) icon on its card and confirm.

### Switching Between Fixed and Per Gram

1. Select the metal and click **Fixed** or **Per Gram**.
2. Click **Save**.

The change is saved for every rate of that metal (all karats, for Gold). It can be saved only when the metal already has at least one saved rate. For a metal with no rate yet, the choice stays on screen until you add a rate. The rates are kept when you switch to **Fixed**, so switching back to **Per Gram** restores them.

### How Labour Is Worked Out

For each configurator product, the labour charge is chosen in this order:

1. A labour charge set for that product for your company.
2. Otherwise, if the metal uses **Per Gram**: the rate for the metal (and karat, for Gold) times the product's metal weight.
3. Otherwise (**Fixed**): the labour charge entered on the product itself.

The labour charge gets the [Duty and Tariff](./duty-and-tariff.md) percentage and is added to the metal cost. The [Product Margin](./product-margin.md) and [Rounding](./rounding.md) are then applied to the total. The metal margin is not applied to labour.

### Which Rules Are Used

Your own active rates and charge logic are used. For a metal where you have no rate, TCC Tech's rate and charge logic are used. A metal with neither uses **Fixed**.

### Loading and Empty States

| State | What you see |
| ----- | ------------ |
| No rate for the metal or karat | **NO RULES CONFIGURED** on the card. |
| A rate already exists for the metal or karat | *labour charge already exists!* |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Labour Management uses it |
| ------ | ----------------------------- |
| [Metals](../../product-management/masters/metal-master/metals.md) | Supplies the metal buttons. Only active metals are shown. |
| [Metal Karat](../../product-management/masters/metal-master/metal-karat.md) | Supplies the karat buttons for Gold. |
| [Front-End Setting](../front-end-setting.md#web-settings) | **Metal Gold Id** decides which metal is treated as Gold and gets karat rates. **Metal Karat Value** is added after each karat name. |
| [Multi Currency](../multi-currency.md) | The default currency symbol is shown with the rates. |
| [Price Display](../price-display.md) | With *TCCTECH price + Margins*, TCC Tech's labour rates are used instead of yours. |

### Modules That Depend On It

| Module | How it uses Labour Management |
| ------ | ----------------------------- |
| Configurator storefront prices (ring, three stone, eternity band, bracelet, stud and pendant) | The labour part of every price comes from these rules or from the product. |
| Configurator product pages (for example [Ring Configurator](../../product-management/configurator-products/ring-configurator.md)) | With **Fixed**, the labour charge entered on each product is used. |
| [Product Margin](./product-margin.md), [Rounding](./rounding.md) | Applied to a total that includes labour. |
| [Cart Products](../../sales-funnel/cart-products.md), [Wishlist Products](../../sales-funnel/wishlist-products.md), [Orders](../../order-management/orders.md) | Cart and wishlist prices use the current labour. Orders keep the price from the time they were placed. |

### What Changes If…

| Change | Effect |
| ------ | ------ |
| A per gram rate is added or changed | Prices of products in that metal (and karat) change straight away, in proportion to each product's metal weight. |
| A metal is switched from **Per Gram** to **Fixed** | Products in that metal use the labour charge entered on each product instead of the per gram rate. |
| A rate is deleted | For that metal or karat, TCC Tech's rate is used if it has one. |
| Price Display is set to *TCCTECH price + Margins* | Your labour rates are no longer used. TCC Tech's labour, with TCC Tech's product margin built in, is used instead. |

---

## Edge Cases / Notes

- **One rate per metal or karat.** When a rate exists, the box is locked and shows it. Use the edit icon to change it.
- **The charge logic is per metal.** Gold karats cannot mix **Fixed** and **Per Gram**.
- **Remembered in the browser.** The last metal and charge logic you viewed are remembered for the browser session only. The saved charge logic of the metal replaces it once the rules load.
- **Metal margin and labour.** The metal margin from [Metal Rate Settings](../metal-rate-setting.md) is applied to the metal rate only, not to labour.
