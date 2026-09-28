---
sidebar_position: 4
id: pendant-configurator
title: Pendant Configurator
sidebar_label: Pendant Configurator
---

# Pendant Configurator

The **Pendant Configurator Product** screen lists every pendant available in the pendant configurator. Products are added and updated in bulk from an Excel file, and each product can be opened to review its full price breakdown, with or without a chain.

---

## Pendant Configurator Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Type in the search box to filter the list. Results update automatically as you type; clear the box to show all products again. |
| **Export** | Click **Export** to open the export menu, then choose **Pendant Product Export** or **Chain Type Pendant Product Export**. A confirmation message is shown once the request is accepted. |
| **Download** | Click the **Download** icon to download a sample Excel template containing the columns required for bulk upload. |
| **Upload** | Click the **Upload** icon and select an Excel file (.xlsx or .xls) to add new products. The selected file name is shown next to the button. |
| **Bulk Edit** | Click **Bulk Edit** and select an Excel file to update existing products. The selected file name is shown next to the button. |
| **Apply Changes** | Click **Apply Changes** to process the selected file. If a Bulk Edit file is selected, the existing products are updated; otherwise the uploaded file is imported as new products. |
| **View Details** | Click the **View Details** icon to open the detail page for the product. |
| **Delete** | Click the **Delete** icon, then click **YES** in the confirmation popup to remove the product. Click **NO** to cancel. |

### List Columns

| Column | Description |
| ------ | ----------- |
| **Action** | View Details and Delete icons. |
| **Product Name** | Name of the pendant. |
| **Product SKU** | SKU of the pendant. |
| **Design Type** | Design type of the pendant. |

The list shows 50 rows per page by default. Use the pagination controls at the bottom to change the page or the number of rows per page, and click a column header to sort.

:::note
The upload, download and **Apply Changes** buttons require the **Add** permission, **Bulk Edit** requires the **Edit** permission, and the **View Details** and **Delete** icons require the **View** and **Delete** permissions.
:::

---

## Bulk Upload and Bulk Edit

1. Click the **Download** icon to get the sample template.
2. Fill in the products in the template.
3. To add new products, click the **Upload** icon and select the file. To update existing products, click **Bulk Edit** and select the file.
4. Click **Apply Changes**.

If any rows fail, an error table appears above the list with two columns:

| Column | Description |
| ------ | ----------- |
| **Column Name / Style No** | The column or style number of the record that failed. |
| **Error Message** | The reason the record could not be saved. |

Correct the listed rows in the file and upload it again.

---

## Pendant Configurator Details

The detail page shows the pricing of a single pendant. Use the options at the top of the page to price the pendant with different stones, qualities, chain options and metal tones. The prices on the page are recalculated automatically each time an option is changed. Click **Back** to return to the list.

### Configuration Options

| Field | Required | Remarks |
| ----- | -------- | ------- |
| Diamond type | ✅ | Type of the center stone. Pre-selected with the first available option. |
| Side Diamond type | ✅ | Type of the side diamonds. Pre-selected with the first available option. |
| Stone | ✅ | Center stone of the pendant. |
| Color & Clarity | ✅ | Shown only when the stone is a diamond. Options are filtered by the selected Diamond type. |
| Cut | - | Cut of the center stone. |
| Side Cut | - | Cut of the side diamonds. |
| Side Stone Color & Clarity | ✅ | Color and clarity of the side diamonds. Options are filtered by the selected Side Diamond type. |
| Chain Option | ✅ | **With Chain** or **Without Chain**. Defaults to With Chain. |
| Chain Type | ✅ | Shown only when **With Chain** is selected. Select the chain to add to the pendant. |
| Metal Tone | ✅ | Metal tone of the pendant. |

### Detail Sections

| Section | Description |
| ------- | ----------- |
| **Product Summary** | Product name, SKU and **PRODUCT PRICE**. |
| **Metal Lock Price** | Current rate for each metal used in pricing. |
| **Metal Jewelry Component Details** | Style No, Karat, Metal, Metal weight and Metal price. |
| **Diamond Specification Sheet** | **Detailed Breakdown** table listing each stone with Type, Shape, Color, Clarity, Cut, Count, Weight (ct), Weight/Stone, Price/Ct., price per carat with margin, stone price without and with margin, and the margin percentage. |
| **Cost Calculation Comparison** | **Product Pricing Breakdown** card with the full cost and retail calculation. |

The **Product Pricing Breakdown** card is divided into:

| Part | Lines |
| ---- | ----- |
| **Cost Calculation** | Total Diamond Cost, Total Setting Cost, Labour, Other Charge, Duty (with the duty percentage) and **= Landed Cost**. |
| **Margin Cost** | + Diamond margin, + Metal margin and + Product margin, each with its amount and percentage. Hover over the info icon next to the product margin to see how it is applied. |
| **Retail Calculation** | Subtotal (Landed Cost + Margin) and the **Final Retail Price**. |

:::note
Depending on the pricing setup, margin lines may be labelled **Markup** instead of **Margin**.
:::

### Show GLB

Click **Show GLB** to open a 3D preview of the pendant in a popup. For gold products, a **Metal Tone** selector is available to change the preview color. Click the close icon to exit the preview.

---

## Download PDF (Print View)

Click **Download PDF** on the detail page to download a print-ready A4 PDF of the current configuration. The button shows **Generating PDF...** while the file is being prepared. The file is named after the product SKU.

The PDF contains:

| Section | Description |
| ------- | ----------- |
| **Header** | Product name, SKU, company logo and company name. |
| **Metal Price Reference** | Metal rates used for pricing. |
| **Metal Component Details** | Style No, Karat, Metal, Metal weight and Metal price. |
| **Diamond / Stone Specification** | Type, Shape, Count, Weight (ct), Price and margin for each stone. |
| **Cost & Retail Breakdown** | **Product Pricing Breakdown**, including cost, margin and Final Retail Price. |

:::tip
Change the configuration options before downloading. The PDF reflects the stones, chain and metal tone currently selected on the detail page.
:::
