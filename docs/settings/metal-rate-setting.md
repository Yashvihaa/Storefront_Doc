---
sidebar_position: 1
id: metal-rate-setting
title: Metal Rate Settings
sidebar_label: Metal Rate Settings
---

# Metal Rate Settings

## Overview

**Metal Rate Settings** sets the base rate of Gold, Silver and Platinum and the margin added on top of it. The final rates are shown per karat (Gold) or per weight range (Silver and Platinum) at the bottom of the page.

These rates are what configurator prices start from for the metal part of a product. The rate can be typed in, or fetched from a rate provider and kept up to date automatically.

:::note[Who can use it]
Your role needs access to the page. **Save** and **Fetch** need **Edit** permission. Each client has its own rates and margins. When you have not set a rate for a metal, TCC Tech's rate is used for your prices.
:::

:::note[Pricing lock]
While [Price Display](./price-display.md) is set to *TCCTECH price + Margins*, a notice at the top says *Pricing is locked while you use TCC TECH Pricing + Margin. To add or change prices, switch to Own Pricing + Margin first.* with a **Go to Price Display** button. **Auto Update**, **Select Provider**, **Fetch** and the metal rate field are then read-only. Margins stay editable. TCC Tech's own super admin is never locked.
:::

---

## Data Displayed

### Metal Rate Settings Screen

| Action | Description |
| ------ | ----------- |
| Metal buttons | **Gold**, **Silver** and **Platinum** at the top of the card, as identified in [Front-End Setting](./front-end-setting.md#web-settings). A metal that is inactive in your metal master is not shown. Gold is selected when the page opens. Click a metal to load its saved settings. |
| **Auto Update** | Switch on to take the rate from a provider. Switch off to enter it yourself. The info icon beside it explains how Auto Update works. |
| **Unit Selection** | **Per Gram** or **Per Ounce**. See [Metal Rate Fields](#metal-rate-fields). |
| **Slab Rules** | **Range-wise Margin** or **Overall Margin**. |
| **Cancel** | Does nothing. It does not reset the form. |
| **Save** | Saves the rate and margin of the selected metal. |
| Rate cards | The base rate, margin and final rate, below the form. See [Rate Cards](#rate-cards). |
| **View Documentation** | Opens this page. |

### Metal Rate Fields

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Auto Update** | - | Off when the metal has no saved setting. |
| **Unit Selection** | ✅ | Silver and Platinum always use **Per Gram**. Gold offers **Per Gram** and **Per Ounce** when the rate is typed in, and **Per Ounce** only when **Auto Update** is on. |
| **Select Provider** | ✅ (Auto Update on) | Shown only when **Auto Update** is on. **MCX**, **LBMA** or **Kitco**. |
| **Fetch** | ✅ (Auto Update on) | Fetches the provider's current rate into the rate field. Disabled until a provider is chosen. |
| **&lt;Metal&gt; Metal Rate** | ✅ (Auto Update off) | For example **Gold Metal Rate**. The base rate per unit, in your default currency. Read-only when **Auto Update** is on. |

### Pricing Types

Every margin uses one of three pricing types. **Markup** is selected by default.

| Pricing Type | Margin / Markup Type | Value sign | How the rate is worked out (base rate 100, value 20) |
| ------------ | -------------------- | ---------- | ---------------------------------------------------- |
| **Markup** | **Percentage (%)** | **%** | Rate plus 20% of the rate: 120. |
| **Markup** | **Flat Amount** | **$** | Rate plus the amount: 120. |
| **Margin** | **Percentage (%)** | **%** | Rate ÷ (1 − 20 ÷ 100): 125. The value must be less than 100. |
| **Multiplier** | None (the type field is hidden) | **×** | Rate times the value: 2,000 (a value of 2 gives 200). |

The sign beside **Value** stays empty until a type is chosen.

### Range-wise Margin

A different margin for each metal weight range. **Range-wise Margin** is selected for a metal with no margin. Each row has:

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Min Range (gm)** | - | The lower weight of the range. Must be a number (*Min Range must be a number*). |
| **Max Range (gm)** | - | The upper weight. Must be a number and greater than the minimum (*Max Range must be a number*, *Max must be greater than Min*). |
| **Select Pricing Type** | - | **Margin**, **Markup** or **Multiplier**. Each row has its own. |
| **Select Margin Type** / **Select Markup Type** | ✅ | Required once any field in the row is filled (*Margin Type is required*). Hidden for **Multiplier**. |
| **Value** | ✅ | Required once any field in the row is filled (*Value is required*). Must be a number (*Value must be a number*). With **Margin**, it must be less than 100 (*Margin value must be less than 100*). |

- Click **Add** to add a row, and the **delete** icon to remove one.
- Rows left completely empty are ignored.
- Ranges must not overlap or repeat (*Ranges must not overlap or duplicate.*).
- The range labels always say **gm**, whatever the unit.

### Overall Margin

One margin for every weight of the metal.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Select Pricing Type** | - | **Margin**, **Markup** or **Multiplier**. |
| **Select Margin Type** / **Select Markup Type** | ✅ | Shows *Margin Type is required* when empty. Hidden for **Multiplier**. |
| **Value** | ✅ | Shows *Margin Value is required* or *Margin Value must be a number*. With **Margin**, it must be less than 100. |

The **Reset margin value** icon beside the fields clears the pricing type, type and value.

### Rate Cards

The cards use your default currency.

| Metal | What is shown |
| ----- | ------------- |
| **Gold** | One card per karat, for example *18K Gold*, with the unit. Each card shows **Base Rate** (the metal's base rate), the margin (labelled **Fixed**, **Percentage** or **Multiplier**, with its value) and the final rate of that karat per gram. With a range-wise margin, one row of karat cards is shown for each weight range. |
| **Silver / Platinum** | One card per weight range, headed **WEIGHT RANGE (UNITS)**, with the range (or **All Over** for an overall margin), **Base Rate**, the margin and the final rate. Not shown until a margin is saved for the metal. |

The final rate is labelled **Final Rate (with Margin)**, **Final Rate (with Markup)** or **Final Rate (with Multiplier)**. For Gold with no margin saved, it is labelled **Final Rate**.

### Messages

| Message | When it appears |
| ------- | --------------- |
| Manual Metal Rate is required | **Save** with **Auto Update** off and no rate. |
| Provider is required | **Save** with **Auto Update** on and no provider. |
| Please select a provider | **Fetch** without a provider. |
| Metal price fetched successfully | **Fetch** loaded a rate. |
| Unable to fetch metal price | The provider returned no rate. |
| Kitco API credentials are not configured. | The platform has no Kitco key set up. |
| Please fetch metal rate before saving | **Save** with **Auto Update** on before any rate was fetched. |
| Metal Management data submitted! | The settings were saved. |

---

## How It Works

### Steps to Set a Metal Rate Manually

1. Click the metal button.
2. Leave **Auto Update** off and choose the **Unit Selection**.
3. Enter the rate in **&lt;Metal&gt; Metal Rate**.
4. Set the margin under **Slab Rules**.
5. Click **Save**.

### Steps to Fetch a Metal Rate from a Provider

1. Click the metal button and switch **Auto Update** on.
2. Choose a provider in **Select Provider**.
3. Click **Fetch**. The rate field is filled in and the unit is set (always **Per Gram** for Silver and Platinum).
4. Set the margin and click **Save**.

When you switch **Auto Update** on, the rate you had typed is remembered, and the saved provider and rate (if any) are shown. When you switch it off, the rate and unit you had typed are restored. Changing the provider clears the fetched rate, so fetch again.

### Automatic Rate Updates

When **Auto Update** is saved on for a metal, the system refreshes its rate twice a day, at 00:00 and 12:00 UTC. Gold is stored per ounce, and Silver and Platinum per gram. The rate is converted to your default currency.

### How the Metal Rate Is Used in Prices

For each metal part of a configurator product:

1. The [Duty and Tariff](./margin-cost-center/duty-and-tariff.md) percentage of the configurator type is added to the base rate.
2. The metal margin is applied. With a range-wise margin, the range that contains the product's metal weight is used.
3. The rate is converted to the karat: for Gold, the per gram rate times the karat's purity from the [Metal Karat](../product-management/masters/metal-master/metal-karat.md) master. A rate saved per ounce is first converted to per gram.
4. The result is multiplied by the metal weight.
5. Labour from [Labour Management](./margin-cost-center/labour-management.md) (with the tariff) is added.

The total of metal and diamonds then gets the [Product Margin](./margin-cost-center/product-margin.md) and [Rounding](./margin-cost-center/rounding.md).

### Which Rate Is Used

| Situation | Rate used |
| --------- | --------- |
| You saved a rate for the metal | Your rate. |
| You never saved a rate for the metal | TCC Tech's rate. |
| [Price Display](./price-display.md) is *TCCTECH price + Margins* | TCC Tech's rate with TCC Tech's metal margin and product margin built in. Your own metal margin is added on top. |

Only your own active metal margins are used. When you have none, the metal is priced at the base rate with no metal margin.

### Loading and Error States

| State | What you see |
| ----- | ------------ |
| A metal has no rate | **Base Rate** and the final rate show **-**. |
| The settings cannot be loaded or saved | An error message explains why. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Metal Rate Settings uses it |
| ------ | ------------------------------- |
| [Metals](../product-management/masters/metal-master/metals.md) | Supplies the metals. Inactive metals are not shown. |
| [Metal Karat](../product-management/masters/metal-master/metal-karat.md) | Each karat's purity turns the gold rate into the karat rates on the cards. |
| [Front-End Setting](./front-end-setting.md#web-settings) | **Metal Gold Id**, **Metal Silver Id** and **Metal Platinum Id** decide which metals the buttons show. |
| [Multi Currency](./multi-currency.md) | Rates are in your default currency. Fetched rates are converted from US dollars to it. |
| [Price Display](./price-display.md) | Locks the rate fields and decides whose rates price your products. |

### Modules That Depend On It

| Module | How it uses Metal Rate Settings |
| ------ | ------------------------------- |
| Configurator storefront prices (ring, three stone, eternity band, bracelet, stud and pendant) | The metal part of every price starts from these rates and margins. |
| Configurator product pages (for example [Ring Configurator](../product-management/configurator-products/ring-configurator.md)) | Show prices worked out from these rates. |
| [Cart Products](../sales-funnel/cart-products.md), [Wishlist Products](../sales-funnel/wishlist-products.md) | Prices are worked out again with the current rates each time. |
| [Orders](../order-management/orders.md) | A new order stores its price at the time it was placed. In the **Manufacturing Option Comparison**, the manufacturer columns use your current base rate (without your margins), and the **BENCHMARK** columns use TCC Tech's current rates and margins. |
| [Metal Management](./margin-cost-center/metal-management.md) | Edits the same data. |

### What Changes If…

| Change | Effect |
| ------ | ------ |
| The base rate changes (by hand, by **Fetch** or by the automatic update) | Configurator prices in that metal change straight away. Placed orders keep their prices. The **Metal** line of the **Manufacturing Option Comparison** changes for every order. |
| A margin is added or changed | Prices in that metal change straight away. With a range-wise margin, only products whose metal weight falls in that range change. |
| All margins are removed | The metal is priced at the base rate, with no metal margin. |
| A karat's purity changes in the karat master | The final rate of that karat, and prices in that karat, change. |
| Price Display changes to *TCCTECH price + Margins* | Your base rates are no longer used for prices and the rate fields are locked. |

---

## Edge Cases / Notes

- **Save each metal separately.** Click **Save** before switching to another metal, or your changes are lost.
- **Fetch works with Kitco only.** **MCX** and **LBMA** can be chosen, but **Fetch** returns no rate for them (*Unable to fetch metal price*). The twice-daily update always uses Kitco prices, whichever provider is saved.
- **Saving without a margin removes the margins.** If you save with no margin filled in, the metal's saved margins are deleted.
- **The final rate uses the saved settings.** The **Base Rate** on the cards updates as soon as you type or fetch a rate, but the final rate changes only after **Save**.
- **Tariff is not on the cards.** The final rates leave out the tariff, because it depends on the product type.
- **Ranges are in grams.** Weight ranges are matched on the product's metal weight.
