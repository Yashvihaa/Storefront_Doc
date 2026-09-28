---
sidebar_position: 2
id: three-stone-configurator
title: Three Stone Configurator
sidebar_label: Three Stone Configurator
---

# Three Stone Configurator

The **Threestone Configurator Product** screen lists every three stone ring combination available in the three stone configurator. Combinations are added and updated in bulk from an Excel file, and each combination can be opened to review its full price breakdown.

---

## Three Stone Configurator Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Type in the search box to filter the list. Results update automatically as you type; clear the box to show all products again. |
| **Export Product** | Click **Export Product** to request an export of all three stone configurator products. A confirmation message is shown once the request is accepted. |
| **Download** | Click the **Download** icon to download a sample Excel template containing the columns required for bulk upload. |
| **Upload** | Click the **Upload** icon and select an Excel file (.xlsx or .xls) to add new combinations. The selected file name is shown next to the button. |
| **Bulk Edit** | Click **Bulk Edit** and select an Excel file to update existing combinations. The selected file name is shown next to the button. |
| **Apply Changes** | Click **Apply Changes** to process the selected file. If a Bulk Edit file is selected, the existing products are updated; otherwise the uploaded file is imported as new combinations. |
| **View Details** | Click the **View Details** icon to open the detail page for the combination. |
| **Delete** | Click the **Delete** icon, then click **YES** in the confirmation popup to remove the combination. Click **NO** to cancel. |

### List Columns

| Column | Description |
| ------ | ----------- |
| **Action** | View Details and Delete icons. |
| **Product Name** | Name of the three stone combination. |
| **Head Name** | Head style used. Hover over the name to see the head number. |
| **Shank Name** | Shank style used. Hover over the name to see the shank number. |
| **Side Setting Name** | Side setting used on the ring. |
| **Diamond Shape** | Shape of the center diamond. |
| **Diamond Carat** | Carat weight of the center diamond (for example, 1 ct). |

The list shows 50 rows per page by default. Use the pagination controls at the bottom to change the page or the number of rows per page, and click a column header to sort.

:::note
The upload, download, **Export Product** and **Apply Changes** buttons require the **Add** permission, **Bulk Edit** requires the **Edit** permission, and the **View Details** and **Delete** icons require the **View** and **Delete** permissions.
:::

---

## Bulk Upload and Bulk Edit

1. Click the **Download** icon to get the sample template.
2. Fill in the combinations in the template.
3. To add new combinations, click the **Upload** icon and select the file. To update existing combinations, click **Bulk Edit** and select the file.
4. Click **Apply Changes**.

If any rows fail, an error table appears above the list with two columns:

| Column | Description |
| ------ | ----------- |
| **Row Id / Product Style No.** | The row number, or the head, shank or band number of the record that failed. |
| **Error Message** | The reason the record could not be saved. |

Correct the listed rows in the file and upload it again.

---

## Three Stone Configurator Details

The detail page shows the pricing of a single three stone combination. Use the options at the top of the page to price the ring with different stones, qualities and metal tones. The prices on the page are recalculated automatically each time an option is changed. Click **Back** to return to the list.

### Configuration Options

| Field | Required | Remarks |
| ----- | -------- | ------- |
| Diamond type | ✅ | Type of the center stone. Pre-selected with the first available option. |
| Side Diamond type | ✅ | Type of the side diamonds. Pre-selected with the first available option. |
| Head Diamond type | ✅ | Type of the two side stones set in the head. Pre-selected with the first available option. |
| Stone | ✅ | Center stone. Pre-selected with the diamond stone. |
| Head Side Stone | ✅ | Stone used for the two head side stones. Pre-selected with the diamond stone. |
| Color & Clarity | ✅ | Shown when the Stone or Head Side Stone is a diamond. Options are filtered by the selected Diamond type. |
| Cut | - | Cut of the center stone. |
| Head Side Stone Cut | - | Cut of the head side stones. |
| Side Cut | - | Cut of the side diamonds. |
| Side Diamond Color & Clarity | ✅ | Color and clarity of the side diamonds. Options are filtered by the selected Side Diamond type. |
| Head Metal Tone | ✅ | Metal tone of the head. |
| Shank Metal Tone | ✅ | Metal tone of the shank. |

### Detail Sections

| Section | Description |
| ------- | ----------- |
| **Product Summary** | Product name, SKU and **PRODUCT PRICE**. |
| **Metal Lock Price** | Current rate for each metal used in pricing. |
| **Metal Jewelry Component Details** | One card for each metal component showing Style No, Style, Metal, Weight, Price Per Gram and Metal price. |
| **Diamond Specification Sheet** | **Detailed Breakdown** table listing the center stone and every side stone with Type, Shape, Color, Clarity, Cut, Count, Weight (ct), Weight/Stone, Price/Ct., price per carat with margin, stone price without and with margin, and the margin percentage. |
| **Cost Calculation Comparison** | **Product Pricing Breakdown** card with the full cost and retail calculation. |

The **Product Pricing Breakdown** card is divided into:

| Part | Lines |
| ---- | ----- |
| **Cost Calculation** | Total Diamond Cost, Total Setting Cost, Labour, Other Charges, Duty (with the duty percentage) and **= Landed Cost**. |
| **Margin Cost** | + Diamond margin, + Metal margin and + Product margin, each with its amount and percentage. Hover over the info icon next to the product margin to see how it is applied. |
| **Retail Calculation** | Subtotal (Landed Cost + Margin) and the **Final Retail Price**. |

:::note
Depending on the pricing setup, margin lines may be labelled **Markup** instead of **Margin**.
:::

### Show GLB

Click **Show GLB** to open a 3D preview of the ring in a popup. For gold products, a **Metal Tone** selector is available to change the preview color. Click the close icon to exit the preview.

---

## Download PDF (Print View)

Click **Download PDF** on the detail page to download a print-ready A4 PDF of the current configuration. The button shows **Generating PDF...** while the file is being prepared. The file is named after the product SKU.

The PDF contains:

| Section | Description |
| ------- | ----------- |
| **Header** | Product name, SKU, company logo and company name. |
| **Metal Price Reference** | Metal rates used for pricing. |
| **Metal Component Details** | Head, Shank and Band cards (for the components the product has) with No / Style, Metal, Weight and Metal Price. |
| **Diamond / Stone Specification** | Type, Shape, Count, Weight (ct), Price and margin for each stone. |
| **Cost & Retail Breakdown** | **Product Pricing Breakdown**, including cost, margin and Final Retail Price. |

:::tip
Change the configuration options before downloading. The PDF reflects the stones and metal tones currently selected on the detail page.
:::
