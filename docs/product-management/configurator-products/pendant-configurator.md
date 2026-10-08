---
sidebar_position: 4
id: pendant-configurator
title: Pendant Configurator
sidebar_label: Pendant Configurator
---

# Pendant Configurator

The **Pendant Configurator Product** screen lists every pendant available in the pendant configurator. You add and update products in bulk from Excel files, and you can open each product to see its full price breakdown with different stones, chain options and metal tones, preview it in 3D and download it as a PDF.

---

## Pendant Configurator Screen List

| Action | Description |
| ------ | ----------- |
| **Export Excel** | Requests an export of all pendant products. A message confirms the request and a progress bar shows its status. |
| **Info** (icon next to Export Excel) | Opens the **Info** popup, which explains that you can download the Excel sheet, change the pricing and upload it back. Click **Close** to close it. |
| **Upload Excel** | Select an Excel file (.xlsx or .xls) to add new pendant products in bulk. The upload starts as soon as you pick the file, and a progress bar shows its status. See [Bulk Upload and Bulk Edit](#bulk-upload-and-bulk-edit). |
| **Search** | Type in the search box to filter the list. Results update automatically as you type; clear the box to show all products again. |
| **Chain Type Pendant Export** | Requests an export of the pendant products with their chain type pricing. A message confirms the request. |
| **Download** (icon) | Downloads a sample Excel file (**Sample_pendantConfigProduct**) with the column headers needed for upload. |
| **Bulk Edit** | Select an Excel file to update existing products. The update starts as soon as you pick the file. |
| **View Details** | Click the **View Details** icon to open the detail page of the product. |
| **Delete** | Click the **Delete** icon, then click **YES** in the **Are you Sure?** popup to remove the product. Click **NO** to cancel. |

### Pendant Configurator List Columns

| Column | Description |
| ------ | ----------- |
| **Action** | **View Details** and **Delete** icons. |
| **Product Name** | Name of the pendant. |
| **Product SKU** | SKU of the pendant. |
| **Design Type** | Design type of the pendant. |

You can sort the **Product Name**, **Product SKU** and **Design Type** columns. The list shows 50 rows per page by default; choose 25, 50, 75 or 100 rows per page. The table toolbar also has **Filter**, **Columns** (show/hide), **Density** and **Full screen** options. When there are no products, the table shows **No records to display**.

:::note
- **Export Excel**, **Upload Excel**, **Chain Type Pendant Export** and the **Download** icon require the **Add** permission. **Export Excel** and **Upload Excel** are also disabled while an upload or bulk edit is in progress.
- **Bulk Edit** requires the **Edit** permission.
- The **View Details** icon requires the **View** permission and the **Delete** icon requires the **Delete** permission.
:::

---

## Bulk Upload and Bulk Edit

1. Click the **Download** icon to get the sample file.
2. Fill in the products in the file.
3. To add new products, click **Upload Excel** and select the file. To update existing products, click **Bulk Edit** and select the file.

There is no separate apply step: the file is processed as soon as you select it. The progress bar under **Upload Excel** fills while the file is processed, for both uploads and bulk edits. When the file is processed, a success message is shown and the list reloads.

If any rows fail, an error table appears above the list. For a bulk edit, the errors can also be shown as pop-up messages.

The error table has two columns:

| Column | Description |
| ------ | ----------- |
| **Column Name / Style No** | The column or style number of the record that failed. |
| **Error Message** | The reason the record could not be saved. |

Correct the listed rows in the file and upload it again. The error table is cleared after the next successful upload.

---

## Pendant Configurator Details

The detail page shows the pricing of a single pendant. Use the options at the top of the page to price the pendant with different stones, qualities, chain options and metal tones. The price is recalculated automatically shortly after you change an option. Click **Back** to return to the list.

### Configuration Options

When the page opens, each option is filled with the first available value: the first diamond stone, the first diamond types, color and clarity, cuts and chain type, and **With Chain**. **Metal Tone** starts empty.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Diamond type** | ✅ | Type of the center stone. The option names change depending on whether the selected stone is a diamond or a gemstone. |
| **Side Diamond type** | - | Type of the side diamonds. |
| **Stone** | ✅ | Center stone of the pendant. |
| **Color & Clarity** | ✅ | Shown only when the stone is a diamond and the **Diamond type** is not "no diamond". Options are filtered by the selected **Diamond type** (natural or lab grown). |
| **Cut** | ✅ | Shown once a stone is selected. Options are filtered by the selected **Diamond type** and **Stone**. If no cuts match, the field stays empty and the price still updates. |
| **Side Cut** | - | Cut of the side diamonds. Options are filtered by the selected **Side Diamond type**. |
| **Side Stone Color & Clarity** | - | Color and clarity of the side diamonds. Options are filtered by the selected **Side Diamond type**. |
| **Chain Option** | - | **With Chain** or **Without Chain**. Defaults to **With Chain**. |
| **Chain Type** | - | Shown only when **With Chain** is selected. The chain to price with the pendant. |
| **Metal Tone** | - | Metal tone of the pendant. |

:::note
The price is recalculated only when the fields marked ✅ have a value. The other fields are sent with the price request when they are set.
:::

### Detail Sections

The page heading **Pendant Configurator Product** has the **Download PDF** and **Show GLB** buttons on the right. The sections below it are:

| Section | Description |
| ------- | ----------- |
| **Product Summary** | Product name, SKU and **PRODUCT PRICE**. |
| **Metal Lock Price** | A card with the current rate (**&lt;Metal&gt; Price**) for each metal. If the product is gold, platinum or silver, only that metal's card is shown. |
| **Metal Jewelry Component Details** | **Style No**, **Karat**, **Metal**, **Metal weight** and **Metal price**. |
| **Diamond Specification Sheet** | **Detailed Breakdown** table with one row for the center stone and one row for each side diamond. See below. |
| **Cost Calculation Comparison** | **Product Pricing Breakdown** card with the full cost and retail calculation. See below. |

The **Detailed Breakdown** table has these columns:

| Column | Description |
| ------ | ----------- |
| **Type** | Stone name, followed by **(Center)** or **(Side)**. |
| **Shape** | Shape of the stone. |
| **Color** / **Clarity** / **Cut** | Selected quality of the stone. |
| **Count** | Number of stones. |
| **Weight (ct)** | Total weight of the stones in the row. |
| **Weight/Stone** | Weight of one stone. |
| **Price/Ct.** | Price per carat before margin. |
| **Price/Ct (with margin)** | Price per carat after margin. |
| **Stone Price (without margin)** | Stone price before margin. |
| **Stone Price (with Margin)** | Stone price after margin. |
| **margin (%)** | Margin applied to the stone, as a percentage or a fixed amount. |

The **Product Pricing Breakdown** card is divided into:

| Part | Lines |
| ---- | ----- |
| **Cost Calculation** | **Total Diamond Cost**, **Total Setting Cost**, **Labour**, **Other Charge**, **Duty** (with the duty percentage) and **= Landed Cost**. |
| **Margin Cost** | **+ Diamond Margin**, **+ Metal Margin** and **+ Product Margin**, each with its amount and percentage. Hover over the info icon next to **+ Product Margin** to see that the product margin is added on top after the metal and diamond margins. |
| **Retail Calculation** | **Subtotal (Landed Cost + Margin)**, followed by the **Final Retail Price**. |

:::note
Depending on the pricing setup, the margin labels read **Markup** instead of **Margin**.
:::

### Show GLB

Click **Show GLB** to open a 3D preview of the pendant in a popup. A loading spinner is shown until the model is ready. For gold products, a **Metal Tone** selector at the bottom of the preview changes the preview color; it starts on yellow gold. Platinum and silver products have no tone selector. Click the close icon at the top right, or click outside the popup, to close it.

---

## Download PDF (Print View)

Click **Download PDF** on the detail page to download an A4 PDF of the current configuration. The button reads **Generating PDF...** while the file is prepared and is disabled until the product has loaded. The file is named after the product SKU. If the PDF cannot be created, the message **Failed to download PDF** is shown.

The PDF contains:

| Section | Description |
| ------- | ----------- |
| **Header** | Product name, SKU, company logo and company name. |
| **Metal Price Reference** | Metal rates used for pricing. |
| **Metal Component Details** | **Style No**, **Karat**, **Metal**, **Metal weight** and **Metal price**. |
| **Diamond / Stone Specification** | **Type**, **Shape**, **Count**, **Weight (ct)**, **Price** and margin for each stone. Shows **No stones configured** when there are no stones. |
| **Cost & Retail Breakdown** | **Product Pricing Breakdown** with the cost calculation, margin cost, **Subtotal (Landed Cost + Margin)** and **Final Retail Price**. |

:::tip
Set the configuration options before you download. The PDF reflects the stone, color, clarity, cut and chain currently selected on the detail page.
:::
