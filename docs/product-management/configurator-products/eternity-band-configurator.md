---
sidebar_position: 3
id: eternity-band-configurator
title: Eternity Band Configurator
sidebar_label: Eternity Band Configurator
---

# Eternity Band Configurator

## Overview

**Eternity Band Configurator Product** lists every eternity band that customers can build in the eternity band configurator on your website. Open a band to check its full price breakdown with different stones, an alternate stone and qualities, preview it in 3D and download a PDF.

The bands come from a catalog that TCC Tech shares with every store. You cannot add or delete bands on this page. You can export the list and use **Bulk Edit** to set your own labour and other charges.

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

### Eternity Band Configurator Screen List

| Action | Description |
| ------ | ----------- |
| **Export Excel** | Asks for an Excel file of all eternity band configurator products. The file is sent to your registered email address. A thin progress line fills along the bottom of the button. |
| **View Documentation** | Opens this page in a new tab. |
| **Search** | Type part of a product name, SKU or style number. The list refreshes once you pause typing and goes back to page 1. Clear the box to show all products again. |
| **Download** (icon) | Downloads a sample Excel file (`sample_eternity_band_configurator.xlsx`). It holds only the column headings, with no rows. |
| **Bulk Edit** | Select an Excel file (.xlsx or .xls) to update existing bands. The file is sent as soon as you pick it. See [Steps to Bulk Edit](#steps-to-bulk-edit). |
| **Filter** | Shows or hides a filter box under each column heading, so you can narrow the rows on the current page by typing in a column. |
| **View Details** | Click the eye icon in the **Action** column to open the [detail page](#eternity-band-configurator-details). |

### List Columns

| Column | Description | Example |
| ------ | ----------- | ------- |
| **Action** | The **View Details** (eye) icon. | - |
| **Product Name** | Name of the eternity band. | *Shared Prong Eternity Round* |
| **Product SKU** | SKU of the band. | - |
| **Size** | Ring size of the band. | *6* |
| **Diamond Shape** | Shape of the diamonds in the band. | *Round* |
| **Diamond Carat** | Carat weight of each diamond. | *0.10 Ct* |

### Bulk Upload Errors

When the server rejects rows in a **Bulk Edit** file, a table appears above the list:

| Column | Description |
| ------ | ----------- |
| **Row Id / Product Style No.** | The failed record, shown as **Row Id**, **Head No**, **Shank No** or **Band No**, depending on what the server returns. |
| **Error Message** | Why the record could not be saved. |

### Configuration Options

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Diamond type** | ✅ | Type of the main stones. Also used for the side diamonds. |
| **Stone** | ✅ | The main stone of the band. |
| **Color & Clarity** | ✅ | Shown only when the stone is a diamond and the **Diamond type** is not "no diamond". The options are filtered by the **Diamond type**. |
| **Alternate Stone** (switch) | - | Shown only when the stone is a diamond. Turn it on to price the band with a gemstone between the diamonds. It turns off by itself if you change the stone to a gemstone. |
| **Alternate Stone** | ✅ | Shown when the switch is on. The gemstone set between the diamonds. |
| **Cut** | - | Cut of the gemstone: the main stone, or the alternate stone when the switch is on. Shown when the stone is not a diamond, or when the switch is on. |
| **Diamond Cut** | - | Cut of the diamonds. Shown only when the stone is a diamond. |
| **Side Cut** | - | Cut of the side diamonds. Shown only for bands that have side diamonds. |
| **Side Diamond Color & Clarity** | ✅ | Color and clarity of the side diamonds, filtered by the **Diamond type**. Shown only for bands that have side diamonds. |
| **Metal Tone** | - | Metal tone of the band. Empty by default. It is not used in the price. |

The stones, diamond types, cuts, colors and clarities offered are the ones enabled in [Eternity Configurator settings](../../config-setting/eternity-configurator.md). Cut options are filtered by the **Diamond type** and stone.

### Detail Sections

The pricing card is titled **Eternity Band Configurator Product** and has the **Download PDF** and **Show GLB** buttons.

| Section | Description |
| ------- | ----------- |
| **Product Summary** | Product name, **SKU** and **PRODUCT PRICE** in the store currency. |
| **Metal Lock Price** | One card per metal with its current rate. When the band is gold, platinum or silver, only that metal is shown. |
| **Metal Jewelry Component Details** | **Style No**, **Style**, **Karat**, **Metal**, **Metal weight** (in gm, three decimals), **Metal price per gm** and **Metal price**. |
| **Diamond Specification Sheet** | The **Detailed Breakdown** table, with one row each for the main stones (**Center**), the alternate stone (**Alternate**, when used) and the side stones (**Side**, when the band has them). |
| **Cost Calculation Comparison** | One **Product Pricing Breakdown** card. |

### Detailed Breakdown

| Column | Description | Example |
| ------ | ----------- | ------- |
| **Type** | Stone name, marked **(Center)**, **(Alternate)** or **(Side)**. | *Diamond (Center)* |
| **Shape**, **Color**, **Clarity**, **Cut** | Stone details. | *Round*, *G*, *VS2*, *Excellent* |
| **Count** | Number of stones. | *20* |
| **Weight (ct)** | Total carat weight (count times the weight of one stone), to three decimals. | *2.000 ct* |
| **Weight/Stone** | Carat weight of one stone, to three decimals. | *0.100 ct* |
| **Price/Ct.** | Price per carat before margin. | *$1,200.00* |
| **Price/Ct (with margin)** | Price per carat after margin. | *$1,320.00* |
| **Stone Price (without margin)** | Stone price before margin. | *$2,400.00* |
| **Stone Price (with margin)** | Stone price after margin. | *$2,640.00* |
| **margin (%)** | Margin on the stone, as a percentage (for example **% 10**) or a flat amount with the currency symbol. | **% 10** |

When there are no stones, the table shows **No diamond breakdown data**.

### Pricing Card

The **Product Pricing Breakdown** card has these parts:

| Part | Lines |
| ---- | ----- |
| **Cost Calculation** | **Total Diamond Cost**, **Total Setting Cost**, **Labour** and **Other Charges** (all before duty and margin), **Duty** (the duty percentage applied to those four amounts, with the percentage shown) and **= Landed Cost**. |
| **Margin Cost** | **+ Diamond Margin**, **+ Metal Margin** and **+ Product Margin**, each with its amount and percentage. Hover over the info icon next to the product margin to read how it is applied. |
| **Retail Calculation** | **Subtotal (Landed Cost + Margin)** and **Rounding Adjustment** (what rounding added or took off, for example *+$0.45*). |
| **Final Retail Price** | The subtotal after rounding. |

When a margin uses markup instead of margin pricing, the labels and columns read **Markup** / **markup** instead of **Margin** / **margin**.

### PDF Contents

| Section | Description |
| ------- | ----------- |
| **Header** | Product name, SKU, company logo and company name. |
| **Metal Price Reference** | The metal rates used for pricing. |
| **Metal Component Details** | **Style No**, **Style**, **Karat**, **Metal**, **Metal weight**, **Metal price per gm** and **Metal price**. |
| **Diamond / Stone Specification** | **Type**, **Shape**, **Count**, **Weight (ct)**, **Price** and margin for the main and alternate stones. Shows **No stones configured** when there are none. |
| **Cost & Retail Breakdown** | **Product Pricing Breakdown**, with cost, margin and **Final Retail Price**. |

---

## How It Works

### Where the Bands Come From

TCC Tech owns the eternity band catalog and adds new bands to it. Every store sees the same bands, priced with its own settings. This page has no **Upload Excel** button and no delete option.

**Bulk Edit** works differently depending on who uploads the file:

| Who uploads | What the file changes |
| ----------- | --------------------- |
| **TCC Tech** | The shared catalog itself: metal weight, labour and other charge, style number and the side diamonds. |
| **Any other store** | Nothing in the catalog. Only your own labour and other charge for each band. Other stores are not affected. |

### Steps to Bulk Edit

1. Click **Export Excel** to get the current products by email, or click the **Download** icon to get an empty sample file.
2. Fill in or change the rows, keeping the headings from the sample.
3. Click **Bulk Edit** and select the file.
4. When the file is accepted, the server's success message appears and the list reloads.

If the file is rejected, an error message appears. When the server lists the failed rows, the [Bulk Upload Errors](#bulk-upload-errors) table appears above the list. Correct those rows and upload the file again. The table is cleared after the next successful bulk edit.

Bulk Edit is refused unless your store uses **Own Pricing + Margin** on [Price Display](../../settings/price-display.md).

### Search, Filters and Paging

- **Search** looks across all products, not just the current page. It matches the product name, SKU or style number, including the SKU as the [SKU Builder](../../settings/sku-builder.md) builds it.
- The **Filter** boxes under the column headings only narrow the rows already on the current page.
- Click **Product SKU**, **Size**, **Diamond Shape** or **Diamond Carat** to sort by that column. Clicking **Product Name** does not change the order.
- The newest band is listed first. The list is paged, 50 rows per page by default. Use the paging controls to move between pages or to show 25, 50, 75 or 100 rows. The page and rows per page are kept in the page address.

### Eternity Band Configurator Details

Click the eye icon on a row to open the detail page for that band. **Back** returns to the list, and **View Documentation** opens this section.

1. When the page opens, the first diamond type, the first diamond stone, the first color and clarity, the first gemstone (for the alternate stone) and the first cuts are selected. **Metal Tone** starts empty.
2. The price is calculated as soon as the page opens.
3. Each time you change an option, the price is calculated again a moment later and the whole page updates.
4. Turn on **Alternate Stone** and pick a gemstone to price a band that alternates diamonds and gemstones.

Nothing on the page is saved. Leaving the page discards your choices.

### How the Price Is Calculated

The price is calculated for your store each time an option changes:

1. **Total Diamond Cost**: each stone is priced per carat from the matching [Diamond Group Master](../diamond-group-master.md) record.
2. **Total Setting Cost**: the metal weight multiplied by the metal rate for its metal and karat.
3. **Labour** and **Other Charges**: your own charges from **Bulk Edit**, if you set them. Otherwise the band's charges, with [Labour Management](../../settings/margin-cost-center/labour-management.md) deciding whether labour is charged per gram or as a fixed amount.
4. **Duty**: the [Duty and Tariff](../../settings/margin-cost-center/duty-and-tariff.md) percentage for eternity band products.
5. **Margin Cost**: the [Diamond Margin](../../settings/margin-cost-center/diamond-margin.md), the metal margin from [Metal Rate Settings](../../settings/metal-rate-setting.md), then the [Product Margin](../../settings/margin-cost-center/product-margin.md) for eternity band products on top.
6. **Rounding Adjustment**: the [Rounding](../../settings/margin-cost-center/rounding.md) rule for eternity band products.

Which base rates are used depends on your [Price Display](../../settings/price-display.md) setting:

| Price Display | Base rates |
| ------------- | ---------- |
| **TCC_TECH Pricing + Margin** | TCC Tech's metal rates, diamond prices and labour charges, with TCC Tech's product margin already built in. Your own margins, duty and rounding are added on top. Your own labour charges from **Bulk Edit** are not used. |
| **Own Pricing + Margin** | Your own metal rates and diamond prices (never TCC Tech's, even when you have none). |
| **No Pricing Display** | Every price on the page shows 0. |

### Show GLB

Click **Show GLB** to open a 3D preview of the band in a popup. A spinner shows while the viewer loads.

- For gold bands, a **Metal Tone** selector changes the preview color. It starts on yellow gold. Platinum and silver bands have no tone selector.
- Click the close icon, or click outside the popup, to close it.

If the viewer cannot load, the popup shows **Couldn't load the 3D viewer. Check your connection and reload.**

### Download PDF

Click **Download PDF** to download an A4 PDF of the current configuration. The button reads **Generating PDF...** while the file is prepared and stays disabled until the price has loaded. The file is named after the SKU, or the product name when there is no SKU. A longer PDF continues on a second page.

:::tip
Set the options before downloading. The PDF shows the stones currently selected.
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
| The first price cannot be calculated | An error message, and the spinner stays. Check that stones and diamond types are enabled in [Eternity Configurator settings](../../config-setting/eternity-configurator.md). |
| A later price cannot be calculated | An error message. The previous price stays on screen. |
| The PDF cannot be created | **Failed to download PDF** |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How the Eternity Band Configurator uses it |
| ------ | ------------------------------------------ |
| [Side Setting Style](../masters/side-setting.md) | Supplies the **Style** of each band. |
| [Item Size](../masters/item-size-master.md) | Supplies the **Size** column. |
| [Diamond Shape](../masters/diamond-shape.md), [Carat Size](../masters/carat-size.md) | Supply the diamond shape and carat. |
| [Metals](../masters/metal-master/metals.md), [Metal Karat](../masters/metal-master/metal-karat.md), [Metal Tone](../masters/metal-master/metal-tone.md) | Supply the metal, karat and the tones offered in **Metal Tone**. |
| [Stone Master](../masters/stone-master.md), [Stone Type](../masters/stone-type.md), [Color](../masters/color.md), [Clarity](../masters/clarity.md), [Cut](../masters/cut.md) | Supply the stones, diamond types, colors, clarities and cuts on the detail page. |
| [Eternity Configurator settings](../../config-setting/eternity-configurator.md) | Decide which options are offered on the detail page, and hold the 3D files used by **Show GLB**. |
| [Diamond Group Master](../diamond-group-master.md) | Supplies the price per carat of every stone. |
| [Metal Rate Settings](../../settings/metal-rate-setting.md) | Supplies the metal rates in **Metal Lock Price** and the metal margin. |
| [Labour Management](../../settings/margin-cost-center/labour-management.md) | Decides whether labour is charged per gram or as a fixed amount. |
| [Duty and Tariff](../../settings/margin-cost-center/duty-and-tariff.md), [Diamond Margin](../../settings/margin-cost-center/diamond-margin.md), [Product Margin](../../settings/margin-cost-center/product-margin.md), [Rounding](../../settings/margin-cost-center/rounding.md) | Supply the duty, margins and rounding in the pricing card. |
| [Price Display](../../settings/price-display.md) | Decides whose base rates are used, and locks the page on **TCC_TECH Pricing + Margin**. |
| [SKU Builder](../../settings/sku-builder.md) | Search also finds bands by the SKU it builds. |
| [Email Template](../../settings/email-template.md) | **Export Excel** sends the file with the **ExportProduct** email. |

### Modules That Depend On It

| Module | How it uses the Eternity Band Configurator |
| ------ | ------------------------------------------ |
| Eternity band configurator on your website | Customers build these bands. Their prices are calculated the same way as on the detail page. |
| [Orders](../../order-management/orders.md) | Eternity band items in carts and orders are priced from these bands. |
| [Offers & Discounts](../offers-discounts.md) | A **Product type** offer for **Eternity band configurator** applies to bands whose price falls in its range. |

### What Changes If…

| Change | Effect |
| ------ | ------ |
| You bulk-edit your labour or other charges | Your eternity band prices change on the detail page and on your website. Other stores are not affected. |
| TCC Tech bulk-edits the catalog | Metal weights, charges, style numbers or side diamonds change for every store. |
| A diamond price changes in the Diamond Group Master | **Total Diamond Cost** and every price that includes it change. |
| A metal rate or metal margin changes | **Metal Lock Price**, **Total Setting Cost** and the final price change. |
| A margin, duty or rounding rule for eternity band products changes | The matching lines in the pricing card change. |
| An option is turned off in Eternity Configurator settings | It disappears from the detail page options. |
| You switch Price Display | The base rates change. On **TCC_TECH Pricing + Margin** the page becomes view-only, and on **No Pricing Display** every price shows 0. |

---

## Edge Cases / Notes

- **PRODUCT PRICE is before rounding.** In the **Product Summary**, **PRODUCT PRICE** is the subtotal before rounding. The **Final Retail Price** in the pricing card includes rounding, so the two can differ by the **Rounding Adjustment**.
- **The PDF has no rounding line.** Its **Final Retail Price** is the price before rounding.
- **Metal Tone does not change the price.** It is shown on the detail page but not used in the calculation.
- **Side diamond options depend on the band.** **Side Cut** and **Side Diamond Color & Clarity** appear only when you open a band that has side diamonds from the list.
- **Bulk Edit and No Pricing Display.** With **No Pricing Display**, the page is not locked, but the server still refuses **Bulk Edit** because labour charges come from TCC Tech.
- **Export by email.** **Export Excel** does not download a file in the browser. Check the inbox of the email address you sign in with.
