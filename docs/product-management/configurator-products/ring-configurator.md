---
sidebar_position: 1
id: ring-configurator
title: Ring Configurator
sidebar_label: Ring Configurator
---

# Ring Configurator

## Overview

**Ring Configurator Product** lists every ring combination (head, shank and side setting, with a center diamond shape and carat) that customers can build in the ring configurator on your website. Open a combination to check its full price breakdown with different stones, qualities and metal tones, preview it in 3D and download a PDF.

The ring combinations come from a catalog that TCC Tech shares with every store. You cannot add or delete combinations on this page. You can export the list and use **Bulk Edit** to set your own labour and other charges.

The price breakdown on the detail page is for checking only. Nothing you pick there is saved.

:::note[Who can use it]
The buttons follow your role's permissions for this page:

- **Export Excel** and the **Download** (sample file) icon need **Add** permission.
- **Bulk Edit** needs **Edit** permission.
- The **View Details** icon needs **View** permission.

The detail page has no permission checks of its own.
:::

:::info[Pricing locked]
When your store uses **TCC_TECH Pricing + Margin** on the [Price Display](../../settings/price-display.md) page, a notice above the list reads *Pricing is locked while you use TCC TECH Pricing + Margin. To add or change prices, switch to Own Pricing + Margin first.* with a **Go to Price Display** button. While it shows, the page is view-only whatever your role allows: **Export Excel**, **Download** and **Bulk Edit** are disabled, and only **View Details** works. TCC Tech's own Super Admin is never locked.
:::

---

## Data Displayed

### Ring Configurator Screen List

| Action | Description |
| ------ | ----------- |
| **Export Excel** | Asks for an Excel file of all ring configurator products. The file is sent to your registered email address. A thin progress line fills along the bottom of the button. |
| **View Documentation** | Opens this page in a new tab. |
| **Search** | Type part of a product name or SKU. The list refreshes once you pause typing and goes back to page 1. Clear the box to show all products again. |
| **Download** (icon) | Downloads a sample Excel file (`Sample_ring_configurator_file.xlsx`). It holds only the column headings, with no rows. |
| **Bulk Edit** | Select an Excel file (.xlsx or .xls) to update existing combinations. The file is sent as soon as you pick it. See [Steps to Bulk Edit](#steps-to-bulk-edit). |
| **Filter** | Shows or hides a filter box under each column heading, so you can narrow the rows on the current page by typing in a column. |
| **View Details** | Click the eye icon in the **Action** column to open the [detail page](#ring-configurator-details). |

### List Columns

| Column | Description | Example |
| ------ | ----------- | ------- |
| **Action** | The **View Details** (eye) icon. | - |
| **Product Name** | Name of the ring combination. | *Classic Solitaire Plain Round 1ct* |
| **Product SKU** | SKU of the combination for its metal and karat, built from your [SKU Builder](../../settings/sku-builder.md) settings. | - |
| **Head Name** | Head style. Hover over the name to see the head number. | *Four Prong* |
| **Shank Name** | Shank style. Hover over the name to see the shank number. | *Plain* |
| **Side Setting Name** | Side setting style. | *Pave* |
| **Diamond Shape** | Shape of the center diamond. | *Round* |
| **Diamond Carat** | Carat weight of the center diamond. | **1 ct** |

A combination made in more than one metal or karat is listed once for each, with its own SKU.

### Bulk Upload Errors

When the server rejects rows in a **Bulk Edit** file, a table appears above the list:

| Column | Description |
| ------ | ----------- |
| **Row Id / Product Style No.** | The failed record, shown as **Row Id**, **Head No**, **Shank No** or **Band No**, depending on what the server returns. |
| **Error Message** | Why the record could not be saved. |

### Configuration Options

The options at the top of the detail page decide which stones, qualities and metal tones the ring is priced with.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Diamond type** | ✅ | Type of the center stone, for example natural or lab grown. The option names change depending on whether the selected **Stone** is a diamond or a gemstone. |
| **Side Diamond type** | ✅ | Type of the side diamonds. |
| **Stone** | ✅ | The center stone. |
| **Color & Clarity** | ✅ | Shown only when the **Stone** is a diamond and the **Diamond type** is not "no diamond". The options are filtered by the **Diamond type** (natural, lab grown or both). |
| **Cut** | - | Cut of the center stone. The options depend on the **Diamond type** and **Stone**. |
| **Side Cut** | - | Cut of the side diamonds. The options depend on the **Side Diamond type**. |
| **Side Diamond Color & Clarity** | ✅ | Color and clarity of the side diamonds, filtered by the **Side Diamond type**. |
| **Head Metal Tone** | ✅ | Metal tone of the head. Empty by default. |
| **Shank Metal Tone** | ✅ | Metal tone of the shank. Empty by default. |
| **Band type** | ✅ | **No Matching Band** (default) or **Matching Band**. |
| **Band Metal Tone** | ✅ | Shown only when **Matching Band** is selected. Empty by default. |

The stones, diamond types, cuts, colors and clarities offered are the ones enabled for the ring in [Ring Configurator settings](../../config-setting/ring-configurator.md).

### Detail Sections

The pricing card is titled **Ring Configurator Product** and has the **Download PDF** and **Show GLB** buttons.

| Section | Description |
| ------- | ----------- |
| **Product Summary** | Product name, **SKU**, **Without Band Price** and **With Band Price** in the store currency. |
| **Metal Lock Price** | One card per metal with its current rate, for example **Gold Price**. When the head, shank and band all use the same metal (gold, platinum or silver), only that metal is shown. |
| **Metal Jewelry Component Details** | **Head Details** (**Head No**), **Shank Details** (**Shank No**) and **Band Details** (**Band No**). Each card also shows **Style**, **Metal**, **Weight** (in gm, two decimals), **Price Per Gram** and **Metal price**. **Metal price** is the metal cost before margin, and **Price Per Gram** is that cost divided by the weight. |
| **Diamond Specification Sheet** | The **Detailed Breakdown** table, with the center stone first and then every side stone. |
| **Cost Calculation Comparison** | Two pricing cards side by side: **Product Pricing Breakdown** (ring without band) and **Product Pricing Breakdown (With bands)**. |

### Detailed Breakdown

| Column | Description | Example |
| ------ | ----------- | ------- |
| **Type** | Stone name, marked **(Center)** or **(Side)**. | *Diamond (Center)* |
| **Shape**, **Color**, **Clarity**, **Cut** | Stone details. | *Round*, *F*, *VS1*, *Excellent* |
| **Count** | Number of stones. | *1* |
| **Weight (ct)** | Total carat weight, to three decimals. | *1.000* |
| **Weight/Stone** | Carat weight of one stone. | *1 ct* |
| **Price/Ct.** | Price per carat before margin. | *$4,200.00* |
| **Price/Ct (with margin)** | Price per carat after margin. | *$4,620.00* |
| **Stone Price (without margin)** | Stone price before margin. | *$4,200.00* |
| **Stone Price (with margin)** | Stone price after margin. | *$4,620.00* |
| **margin (%)** | Margin on the stone, as a percentage (for example **% 10**) or a flat amount with the currency symbol. | **% 10** |

When there are no stones, the table shows **No diamond breakdown data**. A detail that has no value shows **-**.

### Pricing Cards

Each pricing card has these parts:

| Part | Lines |
| ---- | ----- |
| **Cost Calculation** | **Total Diamond Cost**, **Total Setting Cost**, **Labour** and **Other Charges** (all before duty and margin), **Duty** (the duty percentage applied to those four amounts, with the percentage shown) and **= Landed Cost**. |
| **Margin Cost** | **+ Diamond Margin**, **+ Metal Margin** and **+ Product Margin**, each with its amount and percentage. Hover over the info icon next to the product margin to read *Once the metal margin and diamond margin are applied, the product margin is then added on top of the total price*. |
| **Retail Calculation** | **Subtotal (Landed Cost + Margin)** and **Rounding Adjustment** (what rounding added or took off, for example *+$0.45*). |
| **Final Retail Price** | The subtotal after rounding. |

The first card prices the ring without a band. The second adds the band metal and band stones and uses the product margin set for rings with a band.

When a margin uses markup instead of margin pricing, the labels and columns read **Markup** instead of **Margin**.

### PDF Contents

| Section | Description |
| ------- | ----------- |
| **Header** | Product name, SKU, company logo and company name. |
| **Metal Price Reference** | The metal rates used for pricing. |
| **Metal Component Details** | **Head**, **Shank** and **Band** cards (only for the parts the ring has) with **No / Style**, **Metal**, **Weight** and **Metal Price**. |
| **Diamond / Stone Specification** | **Type**, **Shape**, **Count**, **Weight (ct)**, **Price** and margin for each stone. Shows **No stones configured** when there are none. |
| **Cost & Retail Breakdown** | **Product Pricing Breakdown** and **Product Pricing Breakdown (With Bands)**, with cost, margin and **Final Retail Price**. |

---

## How It Works

### Where the Combinations Come From

TCC Tech owns the ring catalog and adds new combinations to it. Every store sees the same combinations, priced with its own settings. This page has no **Upload Excel** button and no delete option.

**Bulk Edit** works differently depending on who uploads the file:

| Who uploads | What the file changes |
| ----------- | --------------------- |
| **TCC Tech** | The shared catalog itself: metal weight, labour and other charge, head, shank and band numbers and the side diamonds. |
| **Any other store** | Nothing in the catalog. Only your own labour and other charges for each product metal row. Other stores are not affected. |

### Steps to Bulk Edit

1. Click **Export Excel** to get the current products by email, or click the **Download** icon to get an empty sample file.
2. Fill in or change the rows, keeping the headings from the sample.
3. Click **Bulk Edit** and select the file.
4. When the file is accepted, the server's success message appears and the list reloads.

If the file is rejected, an error message appears. When the server lists the failed rows, the [Bulk Upload Errors](#bulk-upload-errors) table appears above the list. Correct those rows and upload the file again. The table is cleared after the next successful bulk edit.

Bulk Edit is refused unless your store uses **Own Pricing + Margin** on [Price Display](../../settings/price-display.md). An empty file is refused with *The uploaded file is blank or contains no data rows.*, and a file over the size limit with a *File size must be less than …* message.

### Search, Filters and Paging

- **Search** looks across all products, not just the current page. It matches the product name or SKU, including the SKU as the [SKU Builder](../../settings/sku-builder.md) builds it.
- The **Filter** boxes under the column headings only narrow the rows already on the current page.
- Click **Head Name**, **Shank Name** or **Side Setting Name** to sort by that column. Clicking the other headings does not change the order.
- The newest combination is listed first. The list is paged, 50 rows per page by default. Use the paging controls to move between pages or to show 25, 50, 75 or 100 rows. The page and rows per page are kept in the page address, so **Back** from a detail page returns you to the same page.

### Ring Configurator Details

Click the eye icon on a row to open the detail page for that combination. **Back** returns to the list, and **View Documentation** opens this section.

1. When the page opens, every option is filled with the first available value: the first diamond type and side diamond type, the diamond stone, the first color and clarity, the first cuts and **No Matching Band**. The metal tones start empty.
2. The price is calculated as soon as the page opens, even before a metal tone is chosen.
3. Each time you change an option, the price is calculated again a moment later and the whole page updates.
4. Pick the head, shank and band tones you want to price. Choose **Matching Band** to see the band tone and price the band in the second card.

Nothing on the page is saved. Leaving the page discards your choices.

### How the Price Is Calculated

The price is calculated for your store each time an option changes:

1. **Total Diamond Cost**: each stone is priced per carat from the matching [Diamond Group Master](../diamond-group-master.md) record.
2. **Total Setting Cost**: each part's metal weight multiplied by the metal rate for its metal and karat.
3. **Labour**: your own labour charge from **Bulk Edit**, if you set one. Otherwise, when [Labour Management](../../settings/margin-cost-center/labour-management.md) charges the metal per gram, the per-gram rate multiplied by the metal weight. Otherwise the product's fixed labour charge. **Other Charges** work the same way, without the per-gram option.
4. **Duty**: the [Duty and Tariff](../../settings/margin-cost-center/duty-and-tariff.md) percentage for ring configurator products.
5. **Margin Cost**: the [Diamond Margin](../../settings/margin-cost-center/diamond-margin.md), the metal margin from [Metal Rate Settings](../../settings/metal-rate-setting.md), then the [Product Margin](../../settings/margin-cost-center/product-margin.md) for ring configurator products on top.
6. **Rounding Adjustment**: the [Rounding](../../settings/margin-cost-center/rounding.md) rule for ring configurator products.

Which base rates are used depends on your [Price Display](../../settings/price-display.md) setting:

| Price Display | Base rates |
| ------------- | ---------- |
| **TCC_TECH Pricing + Margin** | TCC Tech's metal rates, diamond prices and labour charges, with TCC Tech's product margin already built in. Your own margins, duty and rounding are added on top. Your own labour charges from **Bulk Edit** are not used. |
| **Own Pricing + Margin** | Your own metal rates and diamond prices (never TCC Tech's, even when you have none). |
| **No Pricing Display** | Every price on the page shows 0. |

### Show GLB

Click **Show GLB** to open a 3D preview of the ring in a popup. A spinner shows while the viewer loads.

- A **Band** switch (off by default) shows or hides the matching band.
- For gold rings, a **Metal Tone** selector changes the preview color. It starts on yellow gold. Platinum and silver rings have no tone selector.
- Click the close icon, or click outside the popup, to close it.

If the viewer cannot load, the popup shows **Couldn't load the 3D viewer. Check your connection and reload.**

### Download PDF

Click **Download PDF** to download an A4 PDF of the current configuration. The button reads **Generating PDF...** while the file is prepared and stays disabled until the price has loaded. The file is named after the SKU, or the product name when there is no SKU. A longer PDF continues on a second page.

:::tip
Set the options before downloading. The PDF shows the stones and metal tones currently selected.
:::

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the list | Grey placeholder rows. |
| No products match | **No records to display** |
| The list cannot be loaded | An error message. |
| Export accepted | *Please wait, your export file is being prepared. It will be sent to your registered email shortly.* |
| Export refused on **TCC_TECH Pricing + Margin** | *Currently your pricing is set by Tcc tech with Tcc tech price , so you cannot download this data.* |
| Sample file cannot be downloaded | An error message, for example **Failed to fetch the file**. |
| Opening a detail page | A spinner fills the page until the first price is calculated. |
| No stone or diamond type is enabled | **No stone or diamond type is enabled for the Ring Configurator. Enable them in Configurators > Ring Configurator.** |
| The price cannot be calculated | An error message. The previous price stays on screen. |
| The PDF cannot be created | **Failed to download PDF** |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How the Ring Configurator uses it |
| ------ | --------------------------------- |
| [Head](../masters/head.md), [Shank](../masters/shank.md), [Side Setting Style](../masters/side-setting.md) | Supply the head, shank and side setting names shown in the list and on the detail page. |
| [Diamond Shape](../masters/diamond-shape.md), [Carat Size](../masters/carat-size.md) | Supply the center diamond shape and carat. |
| [Metals](../masters/metal-master/metals.md), [Metal Karat](../masters/metal-master/metal-karat.md), [Metal Tone](../masters/metal-master/metal-tone.md) | Supply the metals, karats and the tones offered in the metal tone options. |
| [Stone Master](../masters/stone-master.md), [Stone Type](../masters/stone-type.md), [Color](../masters/color.md), [Clarity](../masters/clarity.md), [Cut](../masters/cut.md) | Supply the stones, diamond types, colors, clarities and cuts on the detail page. |
| [Ring Configurator settings](../../config-setting/ring-configurator.md) | Decide which stones, diamond types, cuts, colors and clarities are offered on the detail page, and hold the 3D files used by **Show GLB**. |
| [Diamond Group Master](../diamond-group-master.md) | Supplies the price per carat of every stone. |
| [Metal Rate Settings](../../settings/metal-rate-setting.md) | Supplies the metal rates in **Metal Lock Price** and the metal margin. |
| [Labour Management](../../settings/margin-cost-center/labour-management.md) | Decides whether labour is charged per gram or as a fixed amount. |
| [Duty and Tariff](../../settings/margin-cost-center/duty-and-tariff.md), [Diamond Margin](../../settings/margin-cost-center/diamond-margin.md), [Product Margin](../../settings/margin-cost-center/product-margin.md), [Rounding](../../settings/margin-cost-center/rounding.md) | Supply the duty, margins and rounding in the pricing cards. |
| [Price Display](../../settings/price-display.md) | Decides whose base rates are used, and locks the page on **TCC_TECH Pricing + Margin**. |
| [SKU Builder](../../settings/sku-builder.md) | Builds the SKU shown in the list. |
| [Email Template](../../settings/email-template.md) | **Export Excel** sends the file with the **ExportProduct** email. |

### Modules That Depend On It

| Module | How it uses the Ring Configurator |
| ------ | --------------------------------- |
| Ring configurator on your website | Customers build these combinations. Their prices are calculated the same way as on the detail page. |
| [Orders](../../order-management/orders.md) | Ring configurator items in carts and orders are priced from these combinations. |
| [Offers & Discounts](../offers-discounts.md) | A **Product type** offer for **Ring Configurator** applies to rings whose price falls in its range. |

### What Changes If…

| Change | Effect |
| ------ | ------ |
| You bulk-edit your labour or other charges | Your ring prices change on the detail page and on your website. Other stores are not affected. |
| TCC Tech bulk-edits the catalog | Metal weights, charges, numbers or side diamonds change for every store. |
| A diamond price changes in the Diamond Group Master | **Total Diamond Cost** and every price that includes it change. |
| A metal rate or metal margin changes | **Metal Lock Price**, **Total Setting Cost** and the final prices change. |
| A margin, duty or rounding rule for ring configurator products changes | The matching lines in the pricing cards change. |
| An option is turned off in Ring Configurator settings | It disappears from the detail page options. |
| You switch Price Display | The base rates change. On **TCC_TECH Pricing + Margin** the page becomes view-only, and on **No Pricing Display** every price shows 0. |
| SKU Builder settings change | The SKUs shown in the list change. |

---

## Edge Cases / Notes

- **Without Band Price is before rounding.** In the **Product Summary**, **Without Band Price** is the subtotal before rounding, while **With Band Price** includes rounding. The **Final Retail Price** in each pricing card includes rounding.
- **The PDF has no rounding line.** Its **Final Retail Price** is the price before rounding, so it can differ slightly from the page.
- **Prices before a tone is picked.** The price is calculated even when the metal tones are empty. The ✅ fields are not enforced before pricing.
- **One row per metal and karat.** The same combination appears several times in the list, once for each metal and karat. The detail page lets you price it with any metal tone.
- **Sorting is limited.** Only **Head Name**, **Shank Name** and **Side Setting Name** sort the list.
- **Bulk Edit and No Pricing Display.** With **No Pricing Display**, the page is not locked, but the server still refuses **Bulk Edit** because labour charges come from TCC Tech.
- **Export by email.** **Export Excel** does not download a file in the browser. Check the inbox of the email address you sign in with.
