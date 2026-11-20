---
sidebar_position: 5
id: stud-configurator
title: Stud Configurator
sidebar_label: Stud Configurator
---

# Stud Configurator

## Overview

**Stud Configurator Product** lists every stud earring that customers can build in the stud configurator on your website. Open a stud to check its full price breakdown with different stones, qualities, push and back types and metal tones, preview it in 3D and download a PDF.

The studs come from a catalog that TCC Tech shares with every store. You cannot add or delete studs on this page. You can export the list and use **Bulk Edit** to set your own labour and other charges.

The price breakdown on the detail page is for checking only. Nothing you pick there is saved.

:::note[Who can use it]
The list loads only when your store's subscription includes the Stud Configurator module. The buttons follow your role's permissions for this page:

- **Export Excel**, **Push & Back Stud Export** and the **Download** (sample file) icon need **Add** permission.
- **Bulk Edit** needs **Edit** permission.
- The **View Details** icon needs **View** permission.

The detail page has no permission checks of its own.
:::

:::info[Pricing locked]
When your store uses **TCC_TECH Pricing + Margin** on the [Price Display](../../settings/price-display.md) page, a notice above the list reads *Pricing is locked while you use TCC TECH Pricing + Margin. To add or change prices, switch to Own Pricing + Margin first.* with a **Go to Price Display** button. While it shows, the page is view-only whatever your role allows: **Export Excel**, **Push & Back Stud Export**, **Download** and **Bulk Edit** are disabled, and only **View Details** works. TCC Tech's own Super Admin is never locked.
:::

---

## Data Displayed

### Stud Configurator Screen List

| Action | Description |
| ------ | ----------- |
| **Export Excel** | Asks for an Excel file of all stud configurator products. The file is sent to your registered email address. A thin progress line fills along the bottom of the button. |
| **View Documentation** | Opens this page in a new tab. |
| **Search** | Type part of a product name, SKU or style number. The list refreshes once you pause typing and goes back to page 1. Clear the box to show all products again. |
| **Push & Back Stud Export** | Asks for an Excel file of the studs with their push and back pricing. The file is sent to your registered email address. |
| **Download** (icon) | Downloads a sample Excel file (`Sample_studConfigProduct.xlsx`). It holds only the column headings, with no rows. |
| **Bulk Edit** | Select an Excel file (.xlsx or .xls) to update existing studs. The file is sent as soon as you pick it. See [Steps to Bulk Edit](#steps-to-bulk-edit). |
| **Filter** | Shows or hides a filter box under each column heading, so you can narrow the rows on the current page by typing in a column. |
| **View Details** | Click the eye icon in the **Action** column to open the [detail page](#stud-configurator-details). |

### List Columns

| Column | Description | Example |
| ------ | ----------- | ------- |
| **Action** | The **View Details** (eye) icon. | - |
| **Product Name** | Name of the stud. | *Four Prong Martini Stud Round* |
| **Product SKU** | SKU of the stud. | - |
| **Setting** | Setting style of the stud. | *Four Prong* |
| **Diamond Shape** | Shape of the center diamond. | *Round* |
| **Diamond Weight** | Carat weight of the center diamond. | *0.50 ct* |

### Bulk Upload Errors

When some rows in a **Bulk Edit** file are rejected, a table appears above the list:

| Column | Description |
| ------ | ----------- |
| **Column Name / Style No** | The column or style number of the failed record. |
| **Error Message** | Why the record could not be saved. |

### Configuration Options

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Diamond type** | ✅ | Type of the center stone. The option names change depending on whether the selected stone is a diamond or a gemstone. |
| **Side Diamond type** | - | Type of the side diamonds. |
| **Stone** | ✅ | The center stone. |
| **Color & Clarity** | ✅ | Shown only when the stone is a diamond and the **Diamond type** is not "no diamond". The options are filtered by the **Diamond type**. |
| **Cut** | ✅ | Shown once a stone is selected. The options depend on the **Diamond type** and **Stone**. If no cuts match, the field stays empty and the price still updates. |
| **Side Cut** | - | Cut of the side diamonds. The options depend on the **Side Diamond type**. |
| **Stud Push** | - | Push type of the stud. |
| **Stud Back** | - | Back type of the stud. Only backs that go with the selected **Stud Push** are listed, and the first one is selected each time you change the push. |
| **Side Diamond Color & Clarity** | - | Color and clarity of the side diamonds, filtered by the **Side Diamond type**. |
| **Metal Tone** | - | Metal tone of the stud. Empty by default. The chosen tone is included in the price. |

The stones, diamond types, cuts, colors and clarities offered are the ones enabled in [Earring Configurator settings](../../config-setting/earring-configurator.md).

### Detail Sections

The page heading **Stud Configurator Product** has the **Download PDF** and **Show GLB** buttons.

| Section | Description |
| ------- | ----------- |
| **Product Summary** | Product name, **SKU** and **PRODUCT PRICE** in the store currency. |
| **Metal Lock Price** | One card with the current rate (**&lt;Metal&gt; Price**) for each metal. When the stud is gold, platinum or silver, only that metal is shown. |
| **Metal Jewelry Component Details** | Three cards. **Metal Details**: **Style No**, **Karat** (for example *14 K*), **Metal**, **Metal weight** (in gm, three decimals) and **Metal price** (the metal cost before margin). **Setting Details**: **Product Style**, **Setting Type**, **Push Style No**, **Back Style No** and **Huggies Setting**. **Diamond Summary**: **Center Shape**, **Center Carat**, **Center MM Size**, **Center Diamonds**, **Side Diamonds** (count and weight) and **Total Diamonds** (count and weight). A value that does not apply shows **-**. |
| **Diamond Specification Sheet** | The **Detailed Breakdown** table, with one row for the center stones and one for each side diamond. |
| **Cost Calculation Comparison** | One **Product Pricing Breakdown** card. |

### Detailed Breakdown

| Column | Description | Example |
| ------ | ----------- | ------- |
| **Type** | Stone name, marked **(Center)** or **(Side)**. | *Diamond (Center)* |
| **Shape**, **Color**, **Clarity**, **Cut** | Stone details. | *Round*, *F*, *VS1*, *Excellent* |
| **Count** | Number of stones. The center row shows the stud's center diamond count, or 2 (one for each earring) when none is set. | *2* |
| **Weight (ct)** | Total weight of the row (count times the weight of one stone), to four decimals. | *1.0000 ct* |
| **Weight/Stone** | Weight of one stone, to four decimals. | *0.5000 ct* |
| **Price/Ct.** | Price per carat before margin. | *$2,400.00* |
| **Price/Ct (with margin)** | Price per carat after margin. | *$2,640.00* |
| **Stone Price (without margin)** | Stone price before margin. | *$2,400.00* |
| **Stone Price (with Margin)** | Stone price after margin. | *$2,640.00* |
| **margin (%)** | Margin on the stone, as a percentage (for example **% 10**) or a fixed amount with the currency symbol. | **% 10** |

When there are no stones, the table shows **No diamond breakdown data**.

### Pricing Card

The **Product Pricing Breakdown** card has these parts:

| Part | Lines |
| ---- | ----- |
| **Cost Calculation** | **Total Diamond Cost**, **Total Setting Cost**, **Labour** and **Other Charge** (all before duty and margin), **Duty** (the duty percentage applied to those four amounts, with the percentage shown) and **= Landed Cost**. |
| **Margin Cost** | **+ Diamond Margin**, **+ Metal Margin** and **+ Product Margin**, each with its amount and percentage. Hover over the info icon next to **+ Product Margin** to read how it is applied. |
| **Retail Calculation** | **Subtotal (Landed Cost + Margin)** and **Rounding Adjustment** (what rounding added or took off, for example *+$0.45*). |
| **Final Retail Price** | The subtotal after rounding. |

Depending on the pricing setup, the margin labels read **Markup** instead of **Margin**.

### PDF Contents

| Section | Description |
| ------- | ----------- |
| **Header** | Product name, SKU, company logo and company name. |
| **Metal Price Reference** | The metal rates used for pricing. |
| **Metal Component Details** | **Style No**, **Karat**, **Metal**, **Metal weight** and **Metal price**. |
| **Diamond / Stone Specification** | **Type**, **Shape**, **Count**, **Weight (ct)**, **Price** and margin for each stone. Shows **No stones configured** when there are none. |
| **Cost & Retail Breakdown** | **Product Pricing Breakdown** with the cost calculation (the PDF labels the other charges line **Other Charges**), margin cost, **Subtotal (Landed Cost + Margin)** and **Final Retail Price**. |

---

## How It Works

### Where the Studs Come From

TCC Tech owns the stud catalog and adds new studs to it. Every store sees the same studs, priced with its own settings. This page has no **Upload Excel** button and no delete option.

**Bulk Edit** works differently depending on who uploads the file:

| Who uploads | What the file changes |
| ----------- | --------------------- |
| **TCC Tech** | The shared catalog itself: style, huggies and drop numbers, other charge, metal weight, labour charge and the side diamonds. |
| **Any other store** | Nothing in the catalog. Only your own labour and other charge for each stud. Other stores are not affected. |

### Steps to Bulk Edit

1. Click **Export Excel** to get the current products by email, or click the **Download** icon to get an empty sample file.
2. Fill in or change the rows, keeping the headings from the sample.
3. Click **Bulk Edit** and select the file.
4. When the file is accepted, a success message appears and the list reloads.

If the file is rejected, an error message appears. When particular rows failed, the [Bulk Upload Errors](#bulk-upload-errors) table appears above the list. Correct those rows and upload the file again. The table is cleared after the next successful bulk edit.

Bulk Edit is refused unless your store uses **Own Pricing + Margin** on [Price Display](../../settings/price-display.md).

### Search, Filters and Paging

- **Search** looks across all products, not just the current page. It matches the product name, SKU or style number, including the SKU as the [SKU Builder](../../settings/sku-builder.md) builds it.
- The **Filter** boxes under the column headings only narrow the rows already on the current page.
- Click **Product SKU** to sort by SKU. Clicking the other headings does not change the order.
- The newest stud is listed first. The list is paged, 50 rows per page by default. Use the paging controls to move between pages or to show 25, 50, 75 or 100 rows. The page and rows per page are kept in the page address.

### Stud Configurator Details

Click the eye icon on a row to open the detail page for that stud. **Back** returns to the list, and **View Documentation** opens this section.

1. When the page opens, each option is filled with the first available value: the first diamond stone, the first diamond types, color and clarity, cuts, the first stud push and the first back that goes with it. **Metal Tone** starts empty.
2. The price is calculated as soon as the options are filled.
3. Each time you change an option, the price is calculated again shortly after.
4. The price is recalculated only while **Diamond type**, **Stone**, **Cut** (when cuts are available for the stone) and **Color & Clarity** (when it is shown) all have a value. If a change does not update the price, check those fields.

Nothing on the page is saved. Leaving the page discards your choices.

### How the Price Is Calculated

The price is calculated for your store each time an option changes:

1. **Total Diamond Cost**: each stone is priced per carat from the matching [Diamond Group Master](../diamond-group-master.md) record.
2. **Total Setting Cost**: the metal weight multiplied by the metal rate for its metal and karat. The chosen push and back are priced with the stud.
3. **Labour** and **Other Charge**: your own charges from **Bulk Edit**, if you set them. Otherwise the stud's charges, with [Labour Management](../../settings/margin-cost-center/labour-management.md) deciding whether labour is charged per gram or as a fixed amount.
4. **Duty**: the [Duty and Tariff](../../settings/margin-cost-center/duty-and-tariff.md) percentage for stud products.
5. **Margin Cost**: the [Diamond Margin](../../settings/margin-cost-center/diamond-margin.md), the metal margin from [Metal Rate Settings](../../settings/metal-rate-setting.md), then the [Product Margin](../../settings/margin-cost-center/product-margin.md) for stud products on top.
6. **Rounding Adjustment**: the [Rounding](../../settings/margin-cost-center/rounding.md) rule for stud products.

Which base rates are used depends on your [Price Display](../../settings/price-display.md) setting:

| Price Display | Base rates |
| ------------- | ---------- |
| **TCC_TECH Pricing + Margin** | TCC Tech's metal rates, diamond prices and labour charges, with TCC Tech's product margin already built in. Your own margins, duty and rounding are added on top. Your own labour charges from **Bulk Edit** are not used. |
| **Own Pricing + Margin** | Your own metal rates and diamond prices (never TCC Tech's, even when you have none). |
| **No Pricing Display** | Every price on the page shows 0. |

### Show GLB

Click **Show GLB** to open a 3D preview of the stud in a popup. A spinner shows while the viewer loads.

- For gold studs, a **Metal Tone** selector changes the preview color. It starts on yellow gold. Platinum and silver studs have no tone selector.
- Click the close icon, or click outside the popup, to close it.

If the viewer cannot load, the popup shows **Couldn't load the 3D viewer. Check your connection and reload.**

### Download PDF

Click **Download PDF** to download an A4 PDF of the current configuration. The button reads **Generating PDF...** while the file is prepared and is disabled until the stud has loaded. The file is named after the SKU, or the product name when there is no SKU. A longer PDF continues on a second page.

:::tip
Set the options before downloading. The PDF shows the stone, color, clarity, cut, push and back currently selected.
:::

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the list | Grey placeholder rows. |
| No products match | **No records to display** |
| The list cannot be loaded, for example the module is not in your subscription | An error message. |
| Export accepted | *Please wait, your export file is being prepared. It will be sent to your registered email shortly.* |
| Export refused on **TCC_TECH Pricing + Margin** | *Currently your pricing is set by Tcc tech with Tcc tech price , so you cannot download this data.* |
| Sample file cannot be downloaded | An error message, for example **Failed to fetch the file**. |
| Opening a detail page | A spinner fills the page until the stud has loaded. |
| The stud cannot be loaded | An error message, and the spinner stays. |
| The price cannot be calculated | An error message. The previous price stays on screen. |
| The PDF cannot be created | **Failed to download PDF** |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How the Stud Configurator uses it |
| ------ | --------------------------------- |
| [Head](../masters/head.md) | Supplies the **Setting** shown in the list and the **Setting Type** on the detail page. |
| [Push and Back](../masters/push-and-back.md) | Supplies the **Stud Push** and **Stud Back** options, and which backs go with each push. |
| [Diamond Shape](../masters/diamond-shape.md), [Carat Size](../masters/carat-size.md), [MM Size](../masters/mm-size.md) | Supply the center diamond shape, carat and size. |
| [Metals](../masters/metal-master/metals.md), [Metal Karat](../masters/metal-master/metal-karat.md), [Metal Tone](../masters/metal-master/metal-tone.md) | Supply the metal, karat and the tones offered in **Metal Tone**. |
| [Stone Master](../masters/stone-master.md), [Stone Type](../masters/stone-type.md), [Color](../masters/color.md), [Clarity](../masters/clarity.md), [Cut](../masters/cut.md) | Supply the stones, diamond types, colors, clarities and cuts on the detail page. |
| [Earring Configurator settings](../../config-setting/earring-configurator.md) | Decide which options are offered on the detail page, and hold the 3D files used by **Show GLB**. |
| [Diamond Group Master](../diamond-group-master.md) | Supplies the price per carat of every stone. |
| [Metal Rate Settings](../../settings/metal-rate-setting.md) | Supplies the metal rates in **Metal Lock Price** and the metal margin. |
| [Labour Management](../../settings/margin-cost-center/labour-management.md) | Decides whether labour is charged per gram or as a fixed amount. |
| [Duty and Tariff](../../settings/margin-cost-center/duty-and-tariff.md), [Diamond Margin](../../settings/margin-cost-center/diamond-margin.md), [Product Margin](../../settings/margin-cost-center/product-margin.md), [Rounding](../../settings/margin-cost-center/rounding.md) | Supply the duty, margins and rounding in the pricing card. |
| [Price Display](../../settings/price-display.md) | Decides whose base rates are used, and locks the page on **TCC_TECH Pricing + Margin**. |
| [SKU Builder](../../settings/sku-builder.md) | Search also finds studs by the SKU it builds. |
| [Email Template](../../settings/email-template.md) | Both exports send the file with the **ExportProduct** email. |
| Subscription | The list loads only when your plan includes the Stud Configurator module. |

### Modules That Depend On It

| Module | How it uses the Stud Configurator |
| ------ | --------------------------------- |
| Stud configurator on your website | Customers build these studs. Their prices are calculated the same way as on the detail page. |
| [Orders](../../order-management/orders.md) | Stud items in carts and orders are priced from these studs. |
| [Offers & Discounts](../offers-discounts.md) | A **Product type** offer for **Stud configurator** applies to studs whose price falls in its range. |

### What Changes If…

| Change | Effect |
| ------ | ------ |
| You bulk-edit your labour or other charges | Your stud prices change on the detail page and on your website. Other stores are not affected. |
| TCC Tech bulk-edits the catalog | Style numbers, charges, metal weights or side diamonds change for every store. |
| A push or back is changed in the Push and Back master | The **Stud Push** and **Stud Back** options change. |
| A diamond price changes in the Diamond Group Master | **Total Diamond Cost** and every price that includes it change. |
| A metal rate or metal margin changes | **Metal Lock Price**, **Total Setting Cost** and the final price change. |
| A margin, duty or rounding rule for stud products changes | The matching lines in the pricing card change. |
| You switch Price Display | The base rates change. On **TCC_TECH Pricing + Margin** the page becomes view-only, and on **No Pricing Display** every price shows 0. |

---

## Edge Cases / Notes

- **PRODUCT PRICE is before rounding.** In the **Product Summary**, **PRODUCT PRICE** is the subtotal before rounding. The **Final Retail Price** in the pricing card includes rounding, so the two can differ by the **Rounding Adjustment**.
- **The PDF has no rounding line.** Its **Final Retail Price** is the price before rounding.
- **Changing the push resets the back.** Each time you pick another **Stud Push**, **Stud Back** jumps to the first back that goes with it.
- **Sorting is limited.** Only **Product SKU** sorts the list.
- **Bulk Edit and No Pricing Display.** With **No Pricing Display**, the page is not locked, but **Bulk Edit** is still refused because labour charges come from TCC Tech.
- **Export by email.** Neither export downloads a file in the browser. Check the inbox of the email address you sign in with.
