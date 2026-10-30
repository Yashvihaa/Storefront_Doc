---
sidebar_position: 3
id: eternity-band-configurator
title: Eternity Band Configurator
sidebar_label: Eternity Band Configurator
---

# Eternity Band Configurator

The **Eternity Band Configurator Product** screen lists every eternity band available in the eternity band configurator. Products are added and updated in bulk from an Excel file, and each product can be opened to check its full price breakdown, preview it in 3D and download a PDF.

Products cannot be created or deleted one by one on this screen. Everything is added or changed through Excel files. The price breakdown on the detail page is for checking only; it does not change the product.

---

## Eternity Band Configurator Screen List

| Action | Description |
| ------ | ----------- |
| **Export Excel** | Requests an export of all eternity band configurator products. A confirmation message is shown once the request is accepted, and a thin progress line fills along the bottom of the button. |
| **Upload Excel** | Select an Excel file (.xlsx or .xls) to add new products. The upload starts as soon as you select the file, and the progress line under the button shows the upload status. |
| **View Documentation** | Opens this page of the user guide in a new tab. |
| **Search** | Type in the search box to filter the list. The list refreshes about a second after you stop typing; clear the box to show all products again. |
| **Download** (icon next to the search box) | Downloads a sample Excel file (`sample_eternity_band_configurator.xlsx`). It contains only the column headings needed for bulk upload, with no sample rows. |
| **Bulk Edit** | Click **Bulk Edit** and select an Excel file (.xlsx or .xls) to update existing products. The update starts as soon as you select the file, and the progress is shown on the **Upload Excel** line. |
| **Filter** | Shows or hides a row of filter boxes under the column headings. Typing in a box narrows the rows currently shown on the page. |
| **View Details** | Click the **View Details** icon to open the detail page for the product. |

### Eternity Band Configurator List Columns

| Column | Description |
| ------ | ----------- |
| **Action** | **View Details** icon. |
| **Product Name** | Name of the eternity band. |
| **Product SKU** | SKU of the eternity band. |
| **Diamond Shape** | Shape of the diamonds used in the band. |
| **Diamond Carat** | Carat weight of the diamonds, for example 0.10 Ct. |

The newest product is listed first. The list shows 50 rows per page by default (25, 50, 75 or 100 can be selected). Use the pagination controls at the bottom to change the page, and click a column header to sort. While the list loads, placeholder rows are shown; when there are no products, the list shows **No records to display**.

:::note
**Export Excel** and **Upload Excel** are disabled for users without the **Add** permission, and while an upload or bulk edit is in progress. The **View Details** icon requires the **View** permission. On this screen the **Download** icon and **Bulk Edit** are not switched off by permissions, so they look available to every user; the server still decides whether the action is allowed. There is no delete option for eternity band products.
:::

---

## Bulk Upload and Bulk Edit

1. Click the **Download** icon to get the sample file.
2. Fill in the products in the file, one per row, under the headings in the sample.
3. To add new products, click **Upload Excel** and select the file. To update existing products, click **Bulk Edit** and select the file.

The file is processed right away. When it succeeds, a success message is shown and the list is refreshed.

If any rows fail, an error message appears and an error table is shown above the list:

| Column | Description |
| ------ | ----------- |
| **Row Id / Product Style No.** | The record that failed, shown as **Row Id**, **Head No**, **Shank No** or **Band No**, depending on what the server returns. |
| **Error Message** | The reason the record could not be saved. |

Correct the listed rows in the file and upload it again. The error table is cleared after the next successful upload or bulk edit.

---

## Eternity Band Configurator Details

The detail page shows the pricing of a single eternity band. Use the options at the top of the page to price the band with different stones and qualities. The prices are recalculated automatically each time an option is changed. Click **Back** to return to the list.

A loading indicator is shown until the first price is calculated. The detail page has no save button and no permission checks of its own; nothing you select here is stored.

### Configuration Options

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Diamond type** | ✅ | Type of the main stones. The first option is selected by default. |
| **Stone** | ✅ | Main stone used in the band. The first diamond stone is selected by default. |
| **Color & Clarity** | ✅ | Shown only when the stone is a diamond and the **Diamond type** is not "no diamond". Options are filtered by the selected **Diamond type**, and the first option is selected by default. |
| **Alternate Stone** (switch) | - | Shown only when the stone is a diamond. Turn on to price the band with alternating stones. It turns off automatically if you change the stone to a gemstone. |
| **Alternate Stone** | ✅ | Shown when the **Alternate Stone** switch is on. Select the gemstone used between the diamonds. The first gemstone is selected by default. |
| **Cut** | - | Cut of the gemstone (the main stone, or the alternate stone when the switch is on). Shown when the stone is not a diamond, or when the **Alternate Stone** switch is on. |
| **Diamond Cut** | - | Cut of the diamonds. Shown only when the stone is a diamond. |
| **Side Cut** | - | Cut of the side diamonds. Shown only for bands that have side diamonds. |
| **Side Diamond Color & Clarity** | ✅ | Color and clarity of the side diamonds. Shown only for bands that have side diamonds. Options are filtered by the selected **Diamond type**. |
| **Metal Tone** | - | Metal tone of the band. Empty by default. It is not used in the price calculation on this page. |

Cut options are filtered by the selected **Diamond type** and stone, and the first available cut is selected automatically.

### Detail Sections

The section below the options is titled **Eternity Band Configurator Product** and has the **Download PDF** and **Show GLB** buttons.

| Section | Description |
| ------- | ----------- |
| **Product Summary** | Product name, **SKU** and **PRODUCT PRICE** (final retail price in the store currency). |
| **Metal Lock Price** | Current rate for each metal. When the band is made of gold, platinum or silver, only that metal is shown. |
| **Metal Jewelry Component Details** | **Style No**, **Style**, **Karat**, **Metal**, **Metal weight** (in gm), **Metal price per gm** and **Metal price**. |
| **Diamond Specification Sheet** | **Detailed Breakdown** table with one row for each stone: the main stones (**Center**), the alternate stone (**Alternate**, when used) and the side stones (**Side**, when present). |
| **Cost Calculation Comparison** | **Product Pricing Breakdown** card with the full cost and retail calculation. |

The **Detailed Breakdown** table has these columns: **Type**, **Shape**, **Color**, **Clarity**, **Cut**, **Count**, **Weight (ct)**, **Weight/Stone**, **Price/Ct.**, **Price/Ct (with margin)**, **Stone Price (without margin)**, **Stone Price (with margin)** and **margin (%)**. The margin column shows a percentage (for example **% 10**) or a flat amount with the currency symbol. When there are no stones, the table shows **No diamond breakdown data**.

The **Product Pricing Breakdown** card is divided into:

| Part | Lines |
| ---- | ----- |
| **Cost Calculation** | **Total Diamond Cost**, **Total Setting Cost**, **Labour** and **Other Charges** (all before duty and margin), **Duty** (the duty percentage applied to those four amounts, with the percentage shown) and **= Landed Cost**. |
| **Margin Cost** | **+ Diamond Margin**, **+ Metal Margin** and **+ Product Margin**, each with its amount and percentage. Hover over the info icon next to the product margin to see how it is applied. |
| **Retail Calculation** | **Subtotal (Landed Cost + Margin)** and the **Final Retail Price**. |

:::note
Depending on the pricing setup, the margin columns and lines may read **markup** / **Markup** instead of **margin** / **Margin**.
:::

### Show GLB

Click **Show GLB** to open a 3D preview of the band in a popup. A loading indicator is shown while the model loads. A **Metal Tone** selector at the bottom of the preview changes the preview color and starts on the yellow gold tone; it is not shown for platinum or silver bands. Click the close icon, or click outside the popup, to exit the preview. If the viewer cannot load, the popup shows **Couldn't load the 3D viewer. Check your connection and reload.**

---

## Download PDF

Click **Download PDF** on the detail page to download an A4 PDF of the current configuration. The button shows **Generating PDF...** while the file is being prepared, and is disabled until the price data has loaded. The file is named after the product SKU (or the product name when there is no SKU). If the PDF cannot be created, the message **Failed to download PDF** appears.

The PDF contains:

| Section | Description |
| ------- | ----------- |
| **Header** | Product name, SKU, company logo and company name. |
| **Metal Price Reference** | Metal rates used for pricing. |
| **Metal Component Details** | **Style No**, **Style**, **Karat**, **Metal**, **Metal weight**, **Metal price per gm** and **Metal price**. |
| **Diamond / Stone Specification** | **Type**, **Shape**, **Count**, **Weight (ct)**, **Price** and margin for the main and alternate stones. Shows **No stones configured** when there are none. |
| **Cost & Retail Breakdown** | **Product Pricing Breakdown** with the cost calculation, margin cost, retail calculation and **Final Retail Price**. |

:::tip
Change the configuration options before downloading. The PDF reflects the stones currently selected on the detail page.
:::
