---
sidebar_position: 6
id: bracelet-configurator
title: Bracelet Configurator
sidebar_label: Bracelet Configurator
---

# Bracelet Configurator

The **Bracelet Configurator Product** screen lists every bracelet available in the bracelet configurator. Products are added and updated in bulk from an Excel file, and each product can be opened to check its full price breakdown, preview it in 3D and download a PDF.

---

## Bracelet Configurator Screen List

| Action | Description |
| ------ | ----------- |
| **Export Excel** | Requests an export of all bracelet configurator products. A confirmation message is shown once the request is accepted, and a progress bar shows the export status. |
| **Info** | Click the **info** icon next to **Export Excel** to open the **Info** popup. It explains that you can download the Excel sheet, change the pricing and upload it back. Click **Close** to close it. |
| **Upload Excel** | Select an Excel file (.xlsx or .xls) to add new products. The upload starts as soon as you select the file, and a progress bar shows the upload status. |
| **Search** | Type in the search box to filter the list. Results update as you type; clear the box to show all products again. |
| **Download** | Click the **Download** icon to download a sample Excel template with the columns required for bulk upload. |
| **Bulk Edit** | Click **Bulk Edit** and select an Excel file to update existing products. The update starts as soon as you select the file, and the progress is shown on the **Upload Excel** bar. |
| **View Details** | Click the **View Details** icon to open the detail page for the product. |
| **Delete** | Click the **Delete** icon. In the **Are you Sure?** popup, click **YES** to remove the product or **NO** to cancel. |

### Bracelet Configurator List Columns

| Column | Description |
| ------ | ----------- |
| **Action** | **View Details** and **Delete** icons. |
| **Product Title** | Name of the bracelet. |
| **Bracelet No** | Bracelet number. |
| **Product SKU** | SKU of the bracelet. |
| **Product Style** | Style of the bracelet. |

The list shows 50 rows per page by default (25, 50, 75 or 100 can be selected). Use the pagination controls at the bottom to change the page, and click a column header to sort. When there are no products, the list shows **No records to display**.

:::note
**Export Excel**, **Upload Excel** and the **Download** icon require the **Add** permission, and **Bulk Edit** requires the **Edit** permission. **Export Excel** and **Upload Excel** are also disabled while an upload or bulk edit is in progress. The **View Details** and **Delete** icons require the **View** and **Delete** permissions.
:::

---

## Bulk Upload and Bulk Edit

1. Click the **Download** icon to get the sample template.
2. Fill in the products in the template.
3. To add new products, click **Upload Excel** and select the file. To update existing products, click **Bulk Edit** and select the file.

The file is processed right away. When it succeeds, a success message is shown and the list is refreshed.

If any rows fail, an error table appears above the list:

| Column | Description |
| ------ | ----------- |
| **Row Id** | The row number of the record that failed. |
| **Error Message** | The reason the record could not be saved. |

Correct the listed rows in the file and upload it again. The error table is cleared after the next successful upload.

---

## Bracelet Configurator Details

The detail page shows the pricing of a single bracelet. Use the options at the top of the page to price the bracelet with different stones, qualities and metal tones. The prices are recalculated automatically each time an option is changed. Click **Back** to return to the list.

A loading indicator is shown until the first price is calculated.

### Configuration Options

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Diamond type** | ✅ | Type of the main stones. The first option is selected by default. |
| **Stone** | ✅ | Main stone used in the bracelet. The first diamond stone is selected by default. |
| **Color & Clarity** | ✅ | Shown only when the stone is a diamond. Options are filtered by the selected **Diamond type**, and the first option is selected by default. |
| **Alternate Stone** (switch) | - | Shown only when the stone is a diamond. Turn on to price the bracelet with alternating stones. It turns off automatically if you change the stone to a gemstone. |
| **Alternate Stone** | ✅ | Shown when the **Alternate Stone** switch is on. Select the gemstone used between the diamonds. |
| **Cut** | - | Cut of the gemstone (the main stone, or the alternate stone when the switch is on). Shown when the stone is not a diamond, or when the **Alternate Stone** switch is on. |
| **Diamond Cut** | - | Cut of the diamonds. Shown only when the stone is a diamond. |
| **Metal Tone** | - | Metal tone of the bracelet. Empty by default. |

Cut options are filtered by the selected **Diamond type** and stone, and the first available cut is selected automatically.

### Detail Sections

The section below the options is titled **Bracelet Configurator Product** and has the **Download PDF** and **Show GLB** buttons.

| Section | Description |
| ------- | ----------- |
| **Product Summary** | Product name, **SKU** and **PRODUCT PRICE**. |
| **Metal Lock Price** | Current rate for each metal. When the bracelet is made of gold, platinum or silver, only that metal is shown. |
| **Metal Jewelry Component Details** | **Bracelet no**, **Style no**, **Product style**, **Product length**, **Metal weight type**, **Metal name**, **Metal karat**, **Metal weight** and **Metal Price**. |
| **Diamond Specification Sheet** | **Detailed Breakdown** table with one row for each stone used in the bracelet. |
| **Cost Calculation Comparison** | **Product Pricing Breakdown** card with the full cost and retail calculation. |

The **Detailed Breakdown** table has these columns: **Type**, **Stone Name**, **Shape**, **Color**, **Clarity**, **Cut**, **Count**, **Weight (ct)**, **Weight/Stone**, **Price/Ct.**, **Price/Ct (with margin)**, **Stone Price (without margin)**, **Stone Price (with margin)** and **margin (%)**. When there are no stones, the table shows **No diamond breakdown data**.

The **Product Pricing Breakdown** card is divided into:

| Part | Lines |
| ---- | ----- |
| **Cost Calculation** | **Total Diamond Cost**, **Total Setting Cost**, **Labour**, **Other Charges**, **Duty** (with the duty percentage) and **= Landed Cost**. |
| **Margin Cost** | **+ Diamond Margin**, **+ Metal Margin** and **+ Product Margin**, each with its amount and percentage. Hover over the info icon next to the product margin to see how it is applied. |
| **Retail Calculation** | **Subtotal (Landed Cost + Margin)** and the **Final Retail Price**. |

:::note
Depending on the pricing setup, the margin columns and lines may read **markup** / **Markup** instead of **margin** / **Margin**.
:::

### Show GLB

Click **Show GLB** to open a 3D preview of the bracelet in a popup. A loading indicator is shown while the model loads. A **Metal Tone** selector at the bottom of the preview changes the preview color; it is not shown for platinum or silver bracelets. Click the close icon, or click outside the popup, to exit the preview.

---

## Download PDF

Click **Download PDF** on the detail page to download an A4 PDF of the current configuration. The button shows **Generating PDF...** while the file is being prepared, and is disabled until the price data has loaded. The file is named after the product SKU (or the product name when there is no SKU).

The PDF contains:

| Section | Description |
| ------- | ----------- |
| **Header** | Product name, SKU, company logo and company name. |
| **Metal Price Reference** | Metal rates used for pricing. |
| **Metal Component Details** | **Bracelet no**, **Style no**, **Product style**, **Product length**, **Metal weight type**, **Metal name**, **Metal karat**, **Metal weight** and **Metal Price**. |
| **Diamond / Stone Specification** | **Type**, **Shape**, **Count**, **Weight (ct)**, **Price** and margin for each stone. |
| **Cost & Retail Breakdown** | **Product Pricing Breakdown** with the cost calculation, margin cost, retail calculation and **Final Retail Price**. |

:::tip
Change the configuration options before downloading. The PDF reflects the stones and metal tone currently selected on the detail page.
:::
