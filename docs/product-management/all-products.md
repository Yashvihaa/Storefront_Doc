---
sidebar_position: 1
id: all-products
title: All Products
sidebar_label: All Products
---

# All Products

The **Product List** shows every catalog product in the store. From here you can add Normal, Variant and Choose Settings products, export the catalog, change product status and manage the **New Arrival** tag.

---

## Product List Screen

| Action | Description |
| ------ | ----------- |
| **Search** | Type in the search box to filter the list. Clearing the box reloads the full list. |
| **Product** | Opens a menu with **Add Normal Product**, **Add Variant Product** and **Add Choose Settings Product**. |
| **Export** | Opens a menu with **Normal Product Export** and **Variant Product Export**. A confirmation message appears once the export is started. |
| **Add New Arrival** | Opens the **Add New Arrival Tag** popup. See [New Arrival Tag](#new-arrival-tag). |
| **View** | Click the **View** icon to open the product form in read-only mode. |
| **Edit** | Click the **Edit** icon to open the product in the form it was created with (Normal, Variant or Choose Settings). |
| **Delete** | Click the **Delete** icon and confirm to remove the product. |
| **Pagination** | Change the page or the number of rows per page at the bottom of the table. Columns can be sorted. |

### Product List Columns

| Column | Description |
| ------ | ----------- |
| **Image** | Product thumbnail. |
| **Name** | Product name. |
| **Parent SKU** | SKU of the parent product, if the product is grouped under one. |
| **SKU** | Product SKU. |
| **Product Type** | **Normal Product**, **Variant Product** or **Setting Product**. |
| **Category Name** | Category assigned to the product. |
| **Pricing** | Click **View Details** to open the pricing popup. See [Pricing Details](#pricing-details). |
| **Status** | Shows whether the product is **Active** or **Inactive**. |
| **Status (toggle)** | Switch the product on or off without opening it. |
| **Is Trending** | Switch on to mark the product as trending on the storefront. Some stores show this column as **Is Favorite**. |
| **Arrival Status** | Switch on to apply the New Arrival tag to the product. Disabled when no New Arrival tag exists or the tag is turned off. |

---

## Bulk Actions

Select one or more products using the checkboxes. The following buttons appear above the table:

| Action | Description |
| ------ | ----------- |
| **DELETE** | Deletes all selected products after confirmation. |
| **Enable** | Sets all selected products to Active. |
| **Disable** | Sets all selected products to Inactive. |
| **Arrival Enable** | Applies the New Arrival tag to all selected products. |
| **Arrival Disable** | Removes the New Arrival tag from all selected products. |

:::note
**Arrival Enable** and **Arrival Disable** are available only when a New Arrival tag exists and is enabled.
:::

---

## New Arrival Tag

Click **Add New Arrival** to create or update the store's New Arrival tag.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Tag Name** | ✅ | Name shown on tagged products, e.g. "New Arrival". Minimum 2 characters. |
| **Duration (Days)** | ✅ | Whole number from 1 to 365. The tag expires automatically after this many days. |
| **Enable Tag** | - | Turns the tag on or off. Available only after the tag has been created. |

| Action | Description |
| ------ | ----------- |
| **Apply Tag** | Saves the tag. |
| **Delete** | Removes the tag after confirmation. Shown only when a tag already exists. |
| **Cancel** | Closes the popup without saving. |

Once the tag exists, apply it to products with the **Arrival Status** toggle or the **Arrival Enable** / **Arrival Disable** bulk actions.

---

## Pricing Details

Click **View Details** in the **Pricing** column to see how the product price is built.

- A summary shows **Metal**, **Metal Weight**, **Stones** and **Total Wt.**, along with the metal, metal tone and stone options.
- The **Price Breakdown** tab lists diamond cost, setting cost, labour, margins and the **Final Retail Price**.
- The **Specifications** tab lists the product's stone details.
- Click **Download pdf** to save the pricing breakdown as a PDF.

---

## Add Normal Product

Click **Product → Add Normal Product**. The price of a normal product is calculated from the metal weight, metal rate and stones. The form is a single page made up of the sections below. Click **Submit** at the bottom to save, or **Back** to leave without saving.

### Product Basic Information

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Product SKU** | ✅ | Unique SKU for the product. |
| **Select Parent SKU** | - | Groups this product under an existing product. |
| **Product Title** | ✅ | Name of the product. |
| **Product Short Description** | - | Short summary of the product. |
| **Product Long Description** | ✅ | 20 to 2000 characters. |
| **Tags** | ✅ | Select one or more tags. |

### Product Specification

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Gender** | - | Male, Female or Unisex. |
| **Collection Name** | - | Select a collection. |
| **Category** | ✅ | Select a category. Use **+** to add another category row and **-** to remove one. |
| **Sub Category** | - | Options depend on the selected category. |
| **Sub Sub Category** | - | Options depend on the selected sub category. |
| **Single Product** | - | Switch on for a product sold as a single fixed item. Cannot be on together with **3D Product**. |
| **3D Product** | - | Switch on for a product built in 3D. Shows **Setting Diamond Shapes** and **Setting Diamond Sizes**, and enables band options in the metal section. |

### Product SEO

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **SEO Title** | - | Title shown in search results and browser tabs. |
| **SEO Description** | - | Short summary shown in search results. |
| **SEO Keywords** | - | Type keywords and press Enter to add each one. |

### Other Details

Shown after a category is selected.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Quantity Track** | - | Tick to track stock for this product. |
| **Quantity** | - | Available stock. |
| **Setting Type** | - | Shown for categories that use setting styles, and for 3D products. |
| **Select size** / **Select Length** | - | Size for sized categories (e.g. rings), length for measured categories (e.g. chains). |

### Metal Details

Tick one or more metals (e.g. **Gold**, **Silver**, **Platinum**). At least one metal is required. Each ticked metal shows a table:

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Metal Karat** | - | Gold only. One row per karat, read-only. |
| **Metal Tone** | - | Select the tone for the karat. Gold rows without a tone are skipped. |
| **Quantity** | - | Stock for the row. |
| **Metal Weight** | ✅ | Required for every row that is used. |
| **Band Metal Weight** | ✅ (band) | Shown when **3D Product** and **Is Band** are on. |
| **Rate** / **Price** | - | Calculated automatically from the metal rate. Read-only. |
| **Labour Charge** / **Band Labour Charge** | - | Shown only when a fixed labour charge applies to the metal. |

### Diamond Details

Tick **Center Diamond** and/or **Side Diamond** to add stone rows.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Stone** | ✅ | Required on every stone row. |
| **Shape** | ✅ | Required on every stone row. |
| **Stone Setting** | - | Setting type for the stone. |
| **Stone Weight** | ✅ | Required on every stone row. |
| **Stone Pieces** | ✅ | Number of stones in the row. |
| **Is Band** | - | Side diamonds on 3D products only: **Yes** or **No**. |

### Additional Info

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Additional Information** | - | Extra product details (rich text). |
| **Certificate Link** | - | Link to the product certificate. |
| **Finding Charge** | - | Added to the product price. |
| **Other Charge** | - | Added to the product price. |
| **Check this box to customize your product** | - | Tick to allow customisation of this product. |

---

## Add Variant Product

Click **Product → Add Variant Product**. A variant product has fixed prices that you enter for each metal, karat, tone and size combination. The sections are the same as the Normal Product form, with these differences:

- **Product Specification** adds **Select Brand**. There are no **Single Product** or **3D Product** switches.
- **Other Details** contains:

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Quantity Track** | - | Tick to track stock. |
| **Quantity** | ✅ (tracked) | Required and must be greater than 0 when **Quantity Track** is ticked. |
| **Final Retail Price** | ✅ | Selling price of the product. |
| **Final Compare Price** | ✅ | Compare-at price shown alongside the retail price. |
| **Select size** / **Select Length** | - | Selected sizes or lengths create extra rows in the metal tables. |
| **Setting Type** | - | Shown for categories that use setting styles. |

- **Metal Details** shows one table per ticked metal with a row for each combination. **Size**, **Length**, **Metal Karat** and **Metal Tone** are read-only. Enter **Quantity**, **Metal Weight**, **Side Diamond Total Weight**, **Side Diamond Total Count**, **Retail Price** and **Compare Price** for each row you sell.
- **Diamond Details** rows include **Stone**, **Shape**, **MM Size**, **Color**, **Clarity**, **Cut** and **Stone Setting**. Center diamond rows also include **Stone Weight** and **Stone Pieces**.

| Diamond Row | Required Fields |
| ----------- | --------------- |
| **Center Diamond** | Stone, Shape, Stone Weight, Stone Pieces |
| **Side Diamond** | Stone, Shape |

---

## Add Choose Settings Product

Click **Product → Add Choose Settings Product**. Use this for ring settings where the customer chooses the center stone. The form follows the Variant Product layout, with these differences:

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **is single** | - | Switch in **Product Specification**. |
| **Select Diamond Shapes** | ✅ | The center stone shapes the customer can choose from. |
| **Select Diamond Sizes** | - | The center stone sizes the customer can choose from. |
| **Final Retail Price** / **Final Compare Price** | - | In **Other Details**. |

- The metal table adds **Center Diamond Total Price** and **Labour Charge** columns.
- At least one metal row must have both **Metal Weight** and **Retail Price** filled in, otherwise the product cannot be saved.
- Diamond rows follow the same required fields as the Variant Product.

:::tip
In every product form, if a required field is missing when you click **Submit**, the page scrolls to the first field with an error.
:::
