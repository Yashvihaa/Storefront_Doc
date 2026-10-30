---
sidebar_position: 2
id: three-stone-configurator
title: Three Stone Configurator
sidebar_label: Three Stone Configurator
---

# Three Stone Configurator

The **Threestone Configurator Product** screen lists every three stone ring combination available in the three stone configurator on the storefront. You add and update combinations in bulk from an Excel file, and you can open each combination to see its full price breakdown, preview it in 3D and download a PDF.

Combinations cannot be created or deleted one by one on this screen. Everything is added or changed through Excel files. The price breakdown on the detail page is for checking only; it does not change the product.

---

## Three Stone Configurator Screen List

| Action | Description |
| ------ | ----------- |
| **Export Excel** | Sends a request to export all three stone configurator products. A success message appears when the request is accepted, and a thin progress line fills along the bottom of the button. |
| **Upload Excel** | Select an Excel file (.xlsx or .xls) to add new combinations. The upload starts as soon as you pick the file, and the progress line under the button shows its status. |
| **View Documentation** | Opens this page of the user guide in a new tab. |
| **Search** | Type in the search box to filter the list. The list refreshes about a second after you stop typing; clear the box to show all products again. |
| **Download** (icon next to the search box) | Downloads a sample Excel file (`Sample_threeStoneConfigProduct.xlsx`). It contains only the column headings needed for upload, with no sample rows. |
| **Bulk Edit** | Click **Bulk Edit** and select an Excel file (.xlsx or .xls) to update existing combinations. The update starts as soon as you pick the file, and its status is shown on the **Upload Excel** progress line. |
| **Filter** | Shows or hides a row of filter boxes under the column headings. Typing in a box narrows the rows currently shown on the page. |
| **View Details** | Click the **View Details** icon to open the [detail page](#three-stone-configurator-details) of the combination. |

### List Columns

| Column | Description |
| ------ | ----------- |
| **Action** | **View Details** icon. |
| **Product Name** | Name of the three stone combination. |
| **Head Name** | Head style used. Hover over the name to see the head number. |
| **Shank Name** | Shank style used. Hover over the name to see the shank number. |
| **Side Setting Name** | Side setting used on the ring. |
| **Diamond Shape** | Shape of the center diamond. |
| **Diamond Carat** | Carat weight of the center diamond, for example **1 ct**. |

The newest combination is listed first. The list shows 50 rows per page by default. You can change this to 25, 50, 75 or 100 rows, move between pages, and click a column header to sort. While the list loads, placeholder rows are shown; when there are no products, the table shows **No records to display**.

:::note
**Export Excel**, **Upload Excel** and the **Download** icon are disabled for users without the **Add** permission. **Bulk Edit** needs the **Edit** permission. The **View Details** icon needs the **View** permission. **Export Excel** and **Upload Excel** are also disabled while an upload or bulk edit is running. There is no delete option for three stone combinations.
:::

---

## Bulk Upload and Bulk Edit

1. Click the **Download** icon to get the sample file.
2. Fill in the combinations in the file, one per row, under the headings in the sample.
3. To add new combinations, click **Upload Excel** and select the file. To update existing combinations, click **Bulk Edit** and select the file.
4. Wait for the progress line to finish. A success message appears and the list reloads.

If the server rejects rows in the file, an error message appears and an error table is shown above the list:

| Column | Description |
| ------ | ----------- |
| **Row Id / Product Style No.** | Identifies the failed record as **Row Id**, **Head No**, **Shank No** or **Band No**, depending on what the server returns. |
| **Error Message** | The reason the record could not be saved. |

Correct the listed rows and upload the file again. The error table is cleared after the next successful upload or bulk edit.

---

## Three Stone Configurator Details

The detail page shows the pricing of one three stone combination. A loading indicator appears until the first price is calculated. Use the options at the top of the page to price the ring with different stones, qualities and metal tones. The prices on the page are recalculated automatically a moment after you change an option. Click **Back** to return to the list.

The detail page has no save button and no permission checks of its own; nothing you select here is stored.

### Configuration Options

When the page opens, every option is filled with the first available value, except the metal tones, which start empty.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Diamond type** | ✅ | Type of the center stone. Pre-selected with the first option. The option names change depending on whether the selected **Stone** is a diamond or a gemstone. |
| **Side Diamond type** | ✅ | Type of the side diamonds on the shank. Pre-selected with the first option. |
| **Head Diamond type** | ✅ | Type of the two side stones set in the head. Pre-selected with the first option. |
| **Stone** | ✅ | Center stone. Pre-selected with the diamond stone. |
| **Head Side Stone** | ✅ | Stone used for the two head side stones. Pre-selected with the diamond stone. |
| **Color & Clarity** | ✅ | Shown when the **Stone** or the **Head Side Stone** is a diamond and the **Diamond type** is not "no diamond". Options are filtered by the selected **Diamond type** and the first option is pre-selected. The same color and clarity is used for the head side stones when they are diamonds. |
| **Cut** | - | Cut of the center stone. Shown once a stone is selected. Options depend on the selected **Diamond type** and **Stone**; the first option is pre-selected. |
| **Head Side Stone Cut** | - | Cut of the head side stones. Shown once a head side stone is selected. Options depend on the selected **Head Diamond type** and **Head Side Stone**; the first option is pre-selected. |
| **Side Cut** | - | Cut of the side diamonds. Options depend on the selected **Side Diamond type**; the first option is pre-selected. |
| **Side Diamond Color & Clarity** | ✅ | Color and clarity of the side diamonds. Options are filtered by the selected **Side Diamond type** and the first option is pre-selected. |
| **Head Metal Tone** | ✅ | Metal tone of the head. Empty by default. |
| **Shank Metal Tone** | ✅ | Metal tone of the shank. Empty by default. |

:::note
The price is requested as soon as the page opens and again after every change, even before a metal tone is chosen. Pick the tones you want to price. The lists of stones, diamond types, cuts, colors and clarities come from what is enabled for the three stone configurator in the configurator settings. If the loading indicator never goes away, check that stones and diamond types are enabled there. If the price request fails, an error message is shown.
:::

### Detail Sections

The pricing card has the title **Three Stone Configurator Product** and the **Download PDF** and **Show GLB** buttons, followed by these sections:

| Section | Description |
| ------- | ----------- |
| **Product Summary** | Product name, SKU and **PRODUCT PRICE** (final retail price in the store currency). |
| **Metal Lock Price** | One card per metal with its current rate, for example **Gold Price**. When a gold, platinum or silver component is found, only that metal is shown. |
| **Metal Jewelry Component Details** | One card for each metal component, showing **Style No**, **Style**, **Metal**, **Weight** (in gm, three decimals), **Price Per Gram** and **Metal price** (the metal cost before margin). |
| **Diamond Specification Sheet** | **Detailed Breakdown** table with the center stone first, followed by every side stone. See [Detailed Breakdown](#detailed-breakdown). |
| **Cost Calculation Comparison** | One **Product Pricing Breakdown** card with the full cost and retail calculation. See [Pricing Card](#pricing-card). |

### Detailed Breakdown

| Column | Description |
| ------ | ----------- |
| **Type** | Stone name, marked **(Center)** or **(Side)**. |
| **Shape**, **Color**, **Clarity**, **Cut** | Stone details. |
| **Count** | Number of stones. |
| **Weight (ct)** | Total carat weight, to three decimals. |
| **Weight/Stone** | Carat weight of one stone. |
| **Price/Ct.** | Price per carat without margin. |
| **Price/Ct (with margin)** | Price per carat with margin. |
| **Stone Price (without margin)** | Stone price before margin. |
| **Stone Price (with margin)** | Stone price after margin. |
| **margin (%)** | Margin applied to the stone, shown as a percentage (for example **% 10**) or as a flat amount with the currency symbol. |

If there are no stones, the table shows **No diamond breakdown data**.

### Pricing Card

The **Product Pricing Breakdown** card is divided into:

| Part | Lines |
| ---- | ----- |
| **Cost Calculation** | **Total Diamond Cost**, **Total Setting Cost**, **Labour** and **Other Charges** (all before duty and margin), **Duty** (the duty percentage applied to those four amounts, with the percentage shown) and **= Landed Cost**. |
| **Margin Cost** | **+ Diamond Margin**, **+ Metal Margin** and **+ Product Margin**, each with its amount and, where applicable, its percentage. Hover over the info icon next to the product margin to see that the product margin is added on top of the total after the metal and diamond margins. |
| **Retail Calculation** | **Subtotal (Landed Cost + Margin)** and the **Final Retail Price**. |

:::note
When markup pricing is used instead of margin, the margin labels and columns read **Markup** instead of **Margin**.
:::

### Show GLB

Click **Show GLB** to open a 3D preview of the ring in a popup. When the ring metal is not platinum or silver, a **Metal Tone** selector lets you change the preview color; it starts on the yellow gold tone. There is no band switch for three stone rings. Click the close icon in the top-right corner to exit the preview. If the viewer cannot load, the popup shows **Couldn't load the 3D viewer. Check your connection and reload.**

---

## Download PDF (Print View)

Click **Download PDF** on the detail page to download an A4 PDF of the current configuration. The button reads **Generating PDF...** while the file is being prepared and stays disabled until the price data has loaded. The file is named after the product SKU (or the product name when there is no SKU). If the PDF cannot be created, the message **Failed to download PDF** appears.

The PDF contains:

| Section | Description |
| ------- | ----------- |
| **Header** | Product name, SKU, company logo and company name. |
| **Metal Price Reference** | Metal rates used for pricing. |
| **Metal Component Details** | **Head Details**, **Shank Details** and **Band Details** cards (only for the components the product has) with **No / Style**, **Metal**, **Weight** and **Metal Price**. |
| **Diamond / Stone Specification** | **Type**, **Shape**, **Count**, **Weight (ct)**, **Price** and margin for each stone. Shows **No stones configured** when there are none. |
| **Cost & Retail Breakdown** | **Product Pricing Breakdown**, with cost, margin and **Final Retail Price**. This section moves to a second page when it does not fit on the first. |

:::tip
Set the configuration options before downloading. The PDF reflects the stones and metal tones currently selected on the detail page.
:::
