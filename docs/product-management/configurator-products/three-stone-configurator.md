---
sidebar_position: 2
id: three-stone-configurator
title: Three Stone Configurator
sidebar_label: Three Stone Configurator
---

# Three Stone Configurator

The **Threestone Configurator Product** screen lists every three stone ring combination available in the three stone configurator on the storefront. You add and update combinations in bulk from an Excel file, and you can open each combination to see its full price breakdown, preview it in 3D and download a PDF.

---

## Three Stone Configurator Screen List

| Action | Description |
| ------ | ----------- |
| **Export Excel** | Sends a request to export all three stone configurator products. A success message appears when the request is accepted, and the progress bar under the button fills. |
| **Info** | Click the info icon next to **Export Excel** to open the **Info** popup. It explains that you can download the sheet, change the pricing and upload it back. Click **Close** to close it. |
| **Upload Excel** | Select an Excel file (.xlsx or .xls) to add new combinations. The upload starts as soon as you pick the file, and the progress bar under the button shows its status. |
| **Search** | Type in the search box to filter the list. Results update as you type; clear the box to show all products again. |
| **Download** | Click the **Download** icon next to the search box to download a sample Excel file (`Sample_threeStoneConfigProduct`) with the columns needed for upload. |
| **Bulk Edit** | Click **Bulk Edit** and select an Excel file (.xlsx or .xls) to update existing combinations. The update starts as soon as you pick the file, and its status is shown on the **Upload Excel** progress bar. |
| **View Details** | Click the **View Details** icon to open the [detail page](#three-stone-configurator-details) of the combination. |
| **Delete** | Click the **Delete** icon. In the **Are you Sure?** popup, click **YES** to remove the combination or **NO** to cancel. |

### List Columns

| Column | Description |
| ------ | ----------- |
| **Action** | **View Details** and **Delete** icons. |
| **Product Name** | Name of the three stone combination. |
| **Head Name** | Head style used. Hover over the name to see the head number. |
| **Shank Name** | Shank style used. Hover over the name to see the shank number. |
| **Side Setting Name** | Side setting used on the ring. |
| **Diamond Shape** | Shape of the center diamond. |
| **Diamond Carat** | Carat weight of the center diamond, for example **1 ct**. |

The list shows 50 rows per page by default. You can change this to 25, 50, 75 or 100 rows, move between pages, and click a column header to sort. When there are no products, the table shows **No records to display**.

:::note
**Export Excel**, **Upload Excel** and the **Download** icon are disabled for users without the **Add** permission. **Bulk Edit** needs the **Edit** permission. The **View Details** and **Delete** icons need the **View** and **Delete** permissions. **Export Excel** and **Upload Excel** are also disabled while an upload or bulk edit is running.
:::

---

## Bulk Upload and Bulk Edit

1. Click the **Download** icon to get the sample file.
2. Fill in the combinations in the file.
3. To add new combinations, click **Upload Excel** and select the file. To update existing combinations, click **Bulk Edit** and select the file.
4. Wait for the progress bar to fill. A success message appears and the list reloads.

If the server rejects rows in the file, an error table appears above the list:

| Column | Description |
| ------ | ----------- |
| **Row Id / Product Style No.** | Identifies the failed record as **Row Id**, **Head No**, **Shank No** or **Band No**. |
| **Error Message** | The reason the record could not be saved. |

Correct the listed rows and upload the file again. The error table is cleared after the next successful upload.

---

## Three Stone Configurator Details

The detail page shows the pricing of one three stone combination. Use the options at the top of the page to price the ring with different stones, qualities and metal tones. The prices on the page are recalculated automatically a moment after you change an option. Click **Back** to return to the list.

### Configuration Options

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Diamond type** | ✅ | Type of the center stone. Pre-selected with the first option. The option names change depending on whether the selected **Stone** is a diamond or a gemstone. |
| **Side Diamond type** | ✅ | Type of the side diamonds on the shank. Pre-selected with the first option. |
| **Head Diamond type** | ✅ | Type of the two side stones set in the head. Pre-selected with the first option. |
| **Stone** | ✅ | Center stone. Pre-selected with the diamond stone. |
| **Head Side Stone** | ✅ | Stone used for the two head side stones. Pre-selected with the diamond stone. |
| **Color & Clarity** | ✅ | Shown when the **Stone** or the **Head Side Stone** is a diamond and a diamond type is selected. Options are filtered by the selected **Diamond type** and the first option is pre-selected. The same color and clarity is used for the head side stones when they are diamonds. |
| **Cut** | - | Cut of the center stone. Options depend on the selected **Diamond type** and **Stone**; the first option is pre-selected. |
| **Head Side Stone Cut** | - | Cut of the head side stones. Options depend on the selected **Head Diamond type** and **Head Side Stone**; the first option is pre-selected. |
| **Side Cut** | - | Cut of the side diamonds. Options depend on the selected **Side Diamond type**; the first option is pre-selected. |
| **Side Diamond Color & Clarity** | ✅ | Color and clarity of the side diamonds. Options are filtered by the selected **Side Diamond type** and the first option is pre-selected. |
| **Head Metal Tone** | ✅ | Metal tone of the head. Empty by default. |
| **Shank Metal Tone** | ✅ | Metal tone of the shank. Empty by default. |

### Detail Sections

The pricing card has the title **Three Stone Configurator Product** and the **Download PDF** and **Show GLB** buttons, followed by these sections:

| Section | Description |
| ------- | ----------- |
| **Product Summary** | Product name, SKU and **PRODUCT PRICE**. |
| **Metal Lock Price** | One card per metal with its current rate, for example **Gold Price**. When a gold, platinum or silver component is found, only that metal is shown. |
| **Metal Jewelry Component Details** | One card for each metal component, showing **Style No**, **Style**, **Metal**, **Weight**, **Price Per Gram** and **Metal price**. |
| **Diamond Specification Sheet** | **Detailed Breakdown** table with the center stone first, followed by every side stone. See [Detailed Breakdown](#detailed-breakdown). |
| **Cost Calculation Comparison** | One **Product Pricing Breakdown** card with the full cost and retail calculation. See [Pricing Card](#pricing-card). |

### Detailed Breakdown

| Column | Description |
| ------ | ----------- |
| **Type** | Stone name, marked **(Center)** or **(Side)**. |
| **Shape**, **Color**, **Clarity**, **Cut** | Stone details. |
| **Count** | Number of stones. |
| **Weight (ct)** | Total carat weight. |
| **Weight/Stone** | Carat weight of one stone. |
| **Price/Ct.** | Price per carat without margin. |
| **Price/Ct (with margin)** | Price per carat with margin. |
| **Stone Price (without margin)** | Stone price before margin. |
| **Stone Price (with margin)** | Stone price after margin. |
| **margin (%)** | Margin applied to the stone, as a percentage or a flat amount. |

If there are no stones, the table shows **No diamond breakdown data**.

### Pricing Card

The **Product Pricing Breakdown** card is divided into:

| Part | Lines |
| ---- | ----- |
| **Cost Calculation** | **Total Diamond Cost**, **Total Setting Cost**, **Labour**, **Other Charges**, **Duty** (with the duty percentage) and **= Landed Cost**. |
| **Margin Cost** | **+ Diamond Margin**, **+ Metal Margin** and **+ Product Margin**, each with its amount and percentage. Hover over the info icon next to the product margin to see how it is applied. |
| **Retail Calculation** | **Subtotal (Landed Cost + Margin)** and the **Final Retail Price**. |

:::note
When markup pricing is used instead of margin, the margin labels and columns read **Markup** instead of **Margin**.
:::

### Show GLB

Click **Show GLB** to open a 3D preview of the ring in a popup. When the ring metal is not platinum or silver, a **Metal Tone** selector lets you change the preview color. There is no band switch for three stone rings. Click the close icon in the top-right corner to exit the preview.

---

## Download PDF (Print View)

Click **Download PDF** on the detail page to download an A4 PDF of the current configuration. The button reads **Generating PDF...** while the file is being prepared. The file is named after the product SKU.

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
