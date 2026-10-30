---
sidebar_position: 1
id: ring-configurator
title: Ring Configurator
sidebar_label: Ring Configurator
---

# Ring Configurator

The **Ring Configurator Product** screen lists every ring combination (head, shank and band) available in the ring configurator on the storefront. You add and update combinations in bulk from an Excel file, and you can open each combination to see its full price breakdown, preview it in 3D and download a PDF.

Combinations cannot be created or deleted one by one on this screen. Everything is added or changed through Excel files. The price breakdown on the detail page is for checking only; it does not change the product.

---

## Ring Configurator Screen List

| Action | Description |
| ------ | ----------- |
| **Export Excel** | Sends a request to export all ring configurator products. A success message appears when the request is accepted, and a thin progress line fills along the bottom of the button. |
| **Upload Excel** | Select an Excel file (.xlsx or .xls) to add new combinations. The upload starts as soon as you pick the file, and the progress line under the button shows its status. |
| **View Documentation** | Opens this page of the user guide in a new tab. |
| **Search** | Type in the search box to filter the list. The list refreshes about a second after you stop typing; clear the box to show all products again. |
| **Download** (icon next to the search box) | Downloads a sample Excel file (`Sample_ring_configurator_file.xlsx`). It contains only the column headings needed for upload, with no sample rows. |
| **Bulk Edit** | Click **Bulk Edit** and select an Excel file (.xlsx or .xls) to update existing combinations. The update starts as soon as you pick the file, and its status is shown on the **Upload Excel** progress line. |
| **Filter** | Shows or hides a row of filter boxes under the column headings. Typing in a box narrows the rows currently shown on the page. |
| **View Details** | Click the **View Details** icon to open the [detail page](#ring-configurator-details) of the combination. |

### List Columns

| Column | Description |
| ------ | ----------- |
| **Action** | **View Details** icon. |
| **Product Name** | Name of the ring combination. |
| **Head Name** | Head style used. Hover over the name to see the head number. |
| **Shank Name** | Shank style used. Hover over the name to see the shank number. |
| **Side Setting Name** | Side setting used on the ring. |
| **Diamond Shape** | Shape of the center diamond. |
| **Diamond Carat** | Carat weight of the center diamond, for example **1 ct**. |

The newest combination is listed first. The list shows 50 rows per page by default. You can change this to 25, 50, 75 or 100 rows, move between pages, and click a column header to sort. The page number and rows per page stay in the address, so reopening the list after viewing a combination returns you to the same page. While the list loads, placeholder rows are shown; when there are no products, the table shows **No records to display**.

:::note
**Export Excel**, **Upload Excel** and the **Download** icon are disabled for users without the **Add** permission. **Bulk Edit** needs the **Edit** permission. The **View Details** icon needs the **View** permission. **Export Excel** and **Upload Excel** are also disabled while an upload or bulk edit is running. There is no delete option for ring configurator combinations.
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

## Ring Configurator Details

The detail page shows the pricing of one ring combination. A loading indicator appears until the first price is calculated. Use the options at the top of the page to price the ring with different stones, qualities and metal tones. The prices on the page are recalculated automatically a moment after you change an option. Click **Back** to return to the list.

The detail page has no save button and no permission checks of its own; nothing you select here is stored.

### Configuration Options

When the page opens, every option is filled with the first available value, except the metal tones, which start empty.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Diamond type** | ✅ | Type of the center stone. Pre-selected with the first option. The option names change depending on whether the selected **Stone** is a diamond or a gemstone. |
| **Side Diamond type** | ✅ | Type of the side diamonds. Pre-selected with the first option. |
| **Stone** | ✅ | Center stone. Pre-selected with the diamond stone. |
| **Color & Clarity** | ✅ | Shown only when the **Stone** is a diamond and the **Diamond type** is not "no diamond". Options are filtered by the selected **Diamond type** (natural, lab grown, or both) and the first option is pre-selected. |
| **Cut** | - | Cut of the center stone. Shown once a stone is selected. Options depend on the selected **Diamond type** and **Stone**; the first option is pre-selected. |
| **Side Cut** | - | Cut of the side diamonds. Options depend on the selected **Side Diamond type**; the first option is pre-selected. |
| **Side Diamond Color & Clarity** | ✅ | Color and clarity of the side diamonds. Options are filtered by the selected **Side Diamond type** and the first option is pre-selected. |
| **Head Metal Tone** | ✅ | Metal tone of the head. Empty by default. |
| **Shank Metal Tone** | ✅ | Metal tone of the shank. Empty by default. |
| **Band type** | ✅ | **No Matching Band** or **Matching Band**. Defaults to **No Matching Band**. |
| **Band Metal Tone** | ✅ | Shown only when **Matching Band** is selected. Empty by default. |

:::note
The price is requested as soon as the page opens and again after every change, even before a metal tone is chosen. Pick the head, shank and band tones you want to price. The list of stones, diamond types, cuts, colors and clarities comes from what is enabled for the ring configurator in the configurator settings. If no stone or diamond type is enabled there, the page shows the message **No stone or diamond type is enabled for the Ring Configurator. Enable them in Configurators > Ring Configurator.**
:::

### Detail Sections

The pricing card has the title **Ring Configurator Product** and the **Download PDF** and **Show GLB** buttons, followed by these sections:

| Section | Description |
| ------- | ----------- |
| **Product Summary** | Product name, SKU, **Without Band Price** and **With Band Price** (final retail prices in the store currency). |
| **Metal Lock Price** | One card per metal with its current rate, for example **Gold Price**. When the head, shank and band all use the same metal (gold, platinum or silver), only that metal is shown. |
| **Metal Jewelry Component Details** | Three cards: **Head Details** (Head No), **Shank Details** (Shank No) and **Band Details** (Band No). Each card also shows **Style**, **Metal**, **Weight** (in gm), **Price Per Gram** and **Metal price**. **Metal price** is the metal cost before margin, and **Price Per Gram** is that cost divided by the weight. |
| **Diamond Specification Sheet** | **Detailed Breakdown** table with the center stone first, followed by every side stone. See [Detailed Breakdown](#detailed-breakdown). |
| **Cost Calculation Comparison** | Two pricing cards side by side: **Product Pricing Breakdown** (ring without band) and **Product Pricing Breakdown (With bands)**. See [Pricing Cards](#pricing-cards). |

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

### Pricing Cards

Each pricing card is divided into:

| Part | Lines |
| ---- | ----- |
| **Cost Calculation** | **Total Diamond Cost**, **Total Setting Cost**, **Labour** and **Other Charges** (all before duty and margin), **Duty** (the duty percentage applied to those four amounts, with the percentage shown) and **= Landed Cost**. |
| **Margin Cost** | **+ Diamond Margin**, **+ Metal Margin** and **+ Product Margin**, each with its amount and, where applicable, its percentage. Hover over the info icon next to the product margin to see that the product margin is added on top of the total after the metal and diamond margins. |
| **Retail Calculation** | **Subtotal (Landed Cost + Margin)** and the **Final Retail Price**. |

The first card prices the ring without a band. The second card adds the band metal and band stones and uses the product margin set for rings with a band.

:::note
When markup pricing is used instead of margin, the margin labels and columns read **Markup** instead of **Margin**.
:::

### Show GLB

Click **Show GLB** to open a 3D preview of the ring in a popup. The preview has a **Band** switch (off by default) to show or hide the matching band. When the ring metal is not platinum or silver, a **Metal Tone** selector lets you change the preview color; it starts on the yellow gold tone. Click the close icon in the top-right corner to exit the preview. If the viewer cannot load, the popup shows **Couldn't load the 3D viewer. Check your connection and reload.**

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
| **Cost & Retail Breakdown** | **Product Pricing Breakdown** and **Product Pricing Breakdown (With Bands)**, with cost, margin and **Final Retail Price**. This section moves to a second page when it does not fit on the first. |

:::tip
Set the configuration options before downloading. The PDF reflects the stones and metal tones currently selected on the detail page.
:::
