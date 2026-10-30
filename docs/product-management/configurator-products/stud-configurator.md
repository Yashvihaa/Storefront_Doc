---
sidebar_position: 5
id: stud-configurator
title: Stud Configurator
sidebar_label: Stud Configurator
---

# Stud Configurator

The **Stud Configurator Product** screen lists every stud earring available in the stud configurator. You add and update products in bulk from Excel files, and you can open each product to see its full price breakdown with different stones, push and back types and metal tones, preview it in 3D and download it as a PDF.

---

## Stud Configurator Screen List

| Action | Description |
| ------ | ----------- |
| **Export Excel** | Requests an export of all stud products. A message confirms the request and a thin progress line fills along the bottom of the button. |
| **Upload Excel** | Select an Excel file (.xlsx or .xls) to add new stud products in bulk. The upload starts as soon as you pick the file, and the progress line under the button shows its status. See [Bulk Upload and Bulk Edit](#bulk-upload-and-bulk-edit). |
| **View Documentation** | Opens this page of the user guide in a new tab. |
| **Search** | Type in the search box to filter the list. The list refreshes about a second after you stop typing; clear the box to show all products again. |
| **Push & Back Stud Export** | Requests an export of the stud products with their push and back pricing. A message confirms the request. |
| **Download** (icon) | Downloads a sample Excel file (**Sample_studConfigProduct**, saved as an .xlsx file) with only the column headings needed for upload and no sample rows. |
| **Bulk Edit** | Select an Excel file (.xlsx or .xls) to update existing products. The update starts as soon as you pick the file, and its status is shown on the **Upload Excel** progress line. |
| **Filter** | Shows or hides a row of filter boxes under the column headings. Typing in a box narrows the rows currently shown on the page. |
| **View Details** | Click the **View Details** icon to open the detail page of the product. |

### Stud Configurator List Columns

| Column | Description |
| ------ | ----------- |
| **Action** | **View Details** icon. |
| **Product Name** | Name of the stud. |
| **Product SKU** | SKU of the stud. |
| **Setting Type** | Setting type of the stud. |
| **MM Size** | Size of the center stone in millimetres. |
| **Metal Weight** | Metal weight of the stud, in gm (three decimals). |
| **Side Diamonds** | Number of side diamonds. |
| **Side Diamond Wt** | Total weight of the side diamonds, in ct (two decimals). |
| **Total Diamonds** | Total number of diamonds in the stud. |
| **Total Diamond Wt** | Total weight of all diamonds, in ct (two decimals). |

The newest product is listed first. You can sort any column except **Action** by clicking its heading. The list shows 50 rows per page by default; choose 25, 50, 75 or 100 rows per page. While the list loads, placeholder rows are shown; when there are no products, the table shows **No records to display**.

Products cannot be created or deleted one by one on this screen. Everything is added or changed through Excel files.

:::note
- **Export Excel**, **Upload Excel**, **Push & Back Stud Export** and the **Download** icon require the **Add** permission. **Export Excel** and **Upload Excel** are also disabled while an upload or bulk edit is in progress.
- **Bulk Edit** requires the **Edit** permission.
- The **View Details** icon requires the **View** permission.
- There is no delete option for stud products.
:::

---

## Bulk Upload and Bulk Edit

1. Click the **Download** icon to get the sample file.
2. Fill in the products in the file.
3. To add new products, click **Upload Excel** and select the file. To update existing products, click **Bulk Edit** and select the file.

There is no separate apply step: the file is processed as soon as you select it. The progress line under **Upload Excel** fills while the file is processed, for both uploads and bulk edits. When the file is processed, a success message is shown and the list reloads.

If any rows fail, an error table appears above the list. For a bulk edit, the errors can also be shown as pop-up messages.

The error table has two columns:

| Column | Description |
| ------ | ----------- |
| **Column Name / Style No** | The column or style number of the record that failed. |
| **Error Message** | The reason the record could not be saved. |

Correct the listed rows in the file and upload it again. The error table is cleared after the next successful upload.

---

## Stud Configurator Details

The detail page shows the pricing of a single stud. A loading indicator appears until the product has loaded. Use the options at the top of the page to price the stud with different stones, qualities, push and back types and metal tones. The price is recalculated automatically shortly after you change an option. Click **Back** to return to the list.

The detail page has no save button and no permission checks of its own; nothing you select here is stored.

### Configuration Options

When the page opens, each option is filled with the first available value: the first diamond stone, the first diamond types, color and clarity, cuts, the first stud push and the first back that matches it. **Metal Tone** starts empty.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Diamond type** | ✅ | Type of the center stone. The option names change depending on whether the selected stone is a diamond or a gemstone. |
| **Side Diamond type** | - | Type of the side diamonds. |
| **Stone** | ✅ | Center stone of the stud. |
| **Color & Clarity** | ✅ | Shown only when the stone is a diamond and the **Diamond type** is not "no diamond". Options are filtered by the selected **Diamond type** (natural or lab grown). |
| **Cut** | ✅ | Shown once a stone is selected. Options are filtered by the selected **Diamond type** and **Stone**. If no cuts match, the field stays empty and the price still updates. |
| **Side Cut** | - | Cut of the side diamonds. Options are filtered by the selected **Side Diamond type**. |
| **Stud Push** | - | Push type of the stud. |
| **Stud Back** | - | Back type of the stud. Only backs that match the selected **Stud Push** are listed, and the first matching back is selected each time you change the push. |
| **Side Diamond Color & Clarity** | - | Color and clarity of the side diamonds. Options are filtered by the selected **Side Diamond type**. |
| **Metal Tone** | - | Metal tone of the stud. Empty by default. The chosen tone is included in the price calculation. |

:::note
The price is recalculated only when the fields marked ✅ have a value (**Color & Clarity** only counts while it is shown, and **Cut** only counts when cuts are available for the chosen stone). The other fields are sent with the price request when they are set. If a change does not update the price, check that these fields still have a value.
:::

### Detail Sections

The page heading **Stud Configurator Product** has the **Download PDF** and **Show GLB** buttons on the right. The sections below it are:

| Section | Description |
| ------- | ----------- |
| **Product Summary** | Product name, SKU and **PRODUCT PRICE** (final retail price in the store currency). |
| **Metal Lock Price** | A card with the current rate (**&lt;Metal&gt; Price**) for each metal. If the product is gold, platinum or silver, only that metal's card is shown. |
| **Metal Jewelry Component Details** | Three cards. **Metal Details**: **Style No**, **Karat** (for example 14 K), **Metal**, **Metal weight** (in gm, three decimals) and **Metal price** (the metal cost before margin). **Setting Details**: **Product Style**, **Setting Type**, **Push Style No**, **Back Style No** and **Huggies Setting**. **Diamond Summary**: **Center Shape**, **Center Carat**, **Center MM Size**, **Center Diamonds**, **Side Diamonds** (count and weight) and **Total Diamonds** (count and weight). Values that do not apply show a dash. |
| **Diamond Specification Sheet** | **Detailed Breakdown** table with one row for the center stones and one row for each side diamond. See below. |
| **Cost Calculation Comparison** | **Product Pricing Breakdown** card with the full cost and retail calculation. See below. |

The **Detailed Breakdown** table has these columns:

| Column | Description |
| ------ | ----------- |
| **Type** | Stone name, followed by **(Center)** or **(Side)**. |
| **Shape** | Shape of the stone. |
| **Color** / **Clarity** / **Cut** | Selected quality of the stone. |
| **Count** | Number of stones. The center row shows the center diamond count of the stud, which is 2 (one for each earring) when none is set. |
| **Weight (ct)** | Total weight of the stones in the row (count times the weight of one stone), to four decimals. |
| **Weight/Stone** | Weight of one stone, to four decimals. |
| **Price/Ct.** | Price per carat before margin. |
| **Price/Ct (with margin)** | Price per carat after margin. |
| **Stone Price (without margin)** | Stone price before margin. |
| **Stone Price (with Margin)** | Stone price after margin. |
| **margin (%)** | Margin applied to the stone, shown as a percentage (for example **% 10**) or as a fixed amount with the currency symbol. |

The **Product Pricing Breakdown** card is divided into:

| Part | Lines |
| ---- | ----- |
| **Cost Calculation** | **Total Diamond Cost**, **Total Setting Cost**, **Labour** and **Other Charge** (all before duty and margin), **Duty** (the duty percentage applied to those four amounts, with the percentage shown) and **= Landed Cost**. |
| **Margin Cost** | **+ Diamond Margin**, **+ Metal Margin** and **+ Product Margin**, each with its amount and percentage. Hover over the info icon next to **+ Product Margin** to see that the product margin is added on top after the metal and diamond margins. |
| **Retail Calculation** | **Subtotal (Landed Cost + Margin)**, followed by the **Final Retail Price**. |

:::note
Depending on the pricing setup, the margin labels read **Markup** instead of **Margin**.
:::

### Show GLB

Click **Show GLB** to open a 3D preview of the stud in a popup. A loading spinner is shown until the model is ready. For gold products, a **Metal Tone** selector at the bottom of the preview changes the preview color; it starts on yellow gold. Platinum and silver products have no tone selector. Click the close icon at the top right, or click outside the popup, to close it. If the viewer cannot load, the popup shows **Couldn't load the 3D viewer. Check your connection and reload.**

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
| **Cost & Retail Breakdown** | **Product Pricing Breakdown** with the cost calculation (the PDF labels the other charges line **Other Charges**), margin cost, **Subtotal (Landed Cost + Margin)** and **Final Retail Price**. |

:::tip
Set the configuration options before you download. The PDF reflects the stone, color, clarity, cut, push and back currently selected on the detail page.
:::
