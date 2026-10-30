---
sidebar_position: 1
id: all-products
title: All Products
sidebar_label: All Products
---

# All Products

The **Product List** shows every catalog product in the store. From here you can add Normal, Variant and Choose Settings products, export the catalog, switch products on or off, mark them as trending and manage the **New Arrival** tag.

There are three kinds of product, and each has its own form:

| Product Type | How the price is set |
| ------------ | -------------------- |
| **Normal Product** | Calculated from the metal weight, the live metal rate and the stones. |
| **Variant Product** | You type a fixed price for every metal, karat, tone and size combination. |
| **Setting Product** | A ring setting where the customer picks the center stone. The setting is priced like a variant product. |

---

## Product List Screen

The page is titled **PRODUCT LIST**. Products are listed newest first, 50 per page.

| Action | Description |
| ------ | ----------- |
| **Search** | Type in the search box to filter the list. The list updates about a second after you stop typing; clear the box to show all products again. |
| **Product** | Opens a menu with **Add Normal Product**, **Add Variant Product** and **Add Choose Settings Product**. |
| **Export** | Opens a menu with **Normal Product Export** and **Variant Product Export**. A message appears once the export is started. |
| **Filter** | Shows or hides a filter row under the column headings. It narrows the products already loaded on the current page. |
| **Add New Arrival** | Button at the top of the page. Opens the **Add New Arrival Tag** popup. See [New Arrival Tag](#new-arrival-tag). |
| **View** | Click the **View** icon to open the product in read-only mode. |
| **Edit** | Click the **Edit** icon to open the product in the form it was created with (Normal, Variant or Choose Settings). |
| **Delete** | Click the **Delete** icon. A popup asks **Are you Sure?**; click **YES** to remove the product or **NO** to cancel. |
| **Status Toggle** | Switch a product on or off directly from the list. |
| **Is Trending** | Switch on to mark the product as trending on the storefront. Some stores show this column as **Is Favorite**. |
| **Arrival Status** | Switch on to apply the New Arrival tag to the product. Disabled when no New Arrival tag exists or the tag is turned off. |
| **Pagination** | Change the page or the number of rows per page (25, 50, 75 or 100) at the bottom of the table. |

Most columns can be sorted by clicking the column header; **Pricing** and **Arrival Status** cannot be sorted. When there are no products, the table shows **No records to display**. After a switch is changed, the message **Successfully updated** appears and the list reloads.

:::note
The **View**, **Edit** and **Delete** icons need the matching **View**, **Edit** and **Delete** permission; without it the icon is greyed out. The **Status**, **Is Trending** and **Arrival Status** switches need the **Edit** permission.
:::

### Product List Columns

| Column | Description |
| ------ | ----------- |
| (checkbox) | Select a row to use the [Bulk Actions](#bulk-actions). |
| **Action** | **View**, **Edit** and **Delete** icons. |
| **Image** | Product thumbnail. Hover over it to see a larger preview. |
| **Name** | Product name. |
| **Parent SKU** | SKU of the parent product, if the product is grouped under one. |
| **SKU** | Product SKU. |
| **Product Type** | **Normal Product**, **Variant Product** or **Setting Product** (a Choose Settings product). |
| **Category Name** | Category assigned to the product. |
| **Pricing** | Click **View Details** to open the pricing popup. See [Pricing Details](#pricing-details). |
| **Status** | Badge showing whether the product is **Active** or **Inactive**. |
| **Status** (switch) | Turns the product on or off. |
| **Is Trending** / **Is Favorite** | Marks the product as trending. |
| **Arrival Status** | Applies or removes the New Arrival tag. |

---

## Bulk Actions

Select one or more products using the checkboxes. The following buttons appear above the table:

| Action | Description |
| ------ | ----------- |
| **DELETE** | Deletes all selected products after you confirm with **YES**. |
| **Enable** | Sets all selected products to Active. |
| **Disable** | Sets all selected products to Inactive. |
| **Arrival Enable** | Applies the New Arrival tag to all selected products. |
| **Arrival Disable** | Removes the New Arrival tag from all selected products. |

:::note
**Arrival Enable** and **Arrival Disable** are available only when a New Arrival tag exists and is enabled.
:::

---

## New Arrival Tag

Click **Add New Arrival** to create or update the store's New Arrival tag. The popup is titled **Add New Arrival Tag**. A store has one New Arrival tag, so reopening the popup shows the existing tag for editing.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Tag Name** | ✅ | Name shown on tagged products, for example "New Arrival". Minimum 2 characters. Errors: **Tag name is required**, **Tag name must be at least 2 characters**. |
| **Duration (Days)** | ✅ | Whole number from 1 to 365. The tag expires automatically after this many days. Errors: **Duration is required**, **Duration must be a whole number**, **Duration must be at least 1 day**, **Duration cannot exceed 365 days**. |
| **Enable Tag** | - | Turns the tag on or off. On by default. Available only after the tag has been created. |

| Action | Description |
| ------ | ----------- |
| **Apply Tag** | Saves the tag. The button reads **Saving...** while the tag is being saved. |
| **Delete** | Removes the tag after you confirm with **YES**. Shown only when a tag already exists. |
| **Cancel** | Closes the popup without saving. |

Once the tag exists and is enabled, apply it to products with the **Arrival Status** switch or the **Arrival Enable** / **Arrival Disable** bulk actions.

:::note
If you turn **Enable Tag** off, the **Arrival Status** switches and the **Arrival Enable** / **Arrival Disable** buttons are disabled until you turn it back on.
:::

---

## Pricing Details

Click **View Details** in the **Pricing** column to see how the product price is built.

- The top of the popup shows the product name, **SKU**, created date and **Final Retail Price**, followed by **Metal**, **Metal Weight**, **Stones** and **Total Wt.**
- The **CONFIGURATION** panel lists the **Metal**, **Metal Tone**, **Stone Type**, **Color & Clarity** and **Diamond Cut** options. Pick an option to recalculate the price for that combination. **Color & Clarity** is shown for normal products only.
- The **Price Breakdown** tab shows:
  - **Cost Calculation**: **Total Diamond Cost**, **Total Setting Cost**, **Labour** and **Duty** (with its percentage), adding up to the **Landed Cost**.
  - **Margin Cost**: the diamond margin, metal margin and product margin, adding up to the **Total Margin**. Each line is labelled **Margin** or **Markup** according to the pricing type set for it in your store. For Variant and Setting products only the product line is shown.
  - **Retail Calculation**: **Subtotal (Landed Cost + Margin)** and the **Final Retail Price**.
- The **Specifications** tab lists the product's stones (type, shape, color, clarity, cut, quantity and weight), with a total row and a summary of the number of entries, stones and total carat weight. For normal products it also shows the price per carat and the stone totals with and without margin. It shows **No diamond entries** when the product has no stones.
- Click **Download pdf** to save the pricing breakdown as a PDF named after the product SKU.

---

## Add Normal Product

Click **Product → Add Normal Product**. The price of a normal product is calculated from the metal weight, metal rate and stones. The form is a single page made up of the sections below. Click **Submit** at the bottom to save, or **Back** to leave without saving. After a successful save you return to the product list.

When you open a product with **View**, every field is read-only and the **Submit** button is hidden.

### Product Basic information

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Product SKU** | ✅ | SKU of the product. Error: **Product sku is required**. |
| **Select Parent SKU** | - | Groups this product under an existing product. |
| **Product Title** | ✅ | Name of the product. Error: **Product name is required**. |
| **Product Short Description** | - | Short summary of the product. |
| **Product Long Description** | ✅ | Rich text. Must be at least 20 characters of text. Error: **Long description must be a 20 to 2000 characters!** |
| **Tags** | ✅ | Select one or more tags. Error: **Keyword is required**. |

### Product Specification

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Gender** | - | Select one or more of **Male**, **Female** and **Unisex**. |
| **Collection Name** | - | Select one or more collections. |
| **Category** | ✅ | Select a category. Use **+** to add another category row and **-** to remove one (the last row cannot be removed). Error: **Please Select Category**. |
| **Sub Category** | - | Options depend on the selected category. |
| **Sub Sub Category** | - | Options depend on the selected sub category. |
| **Single Product** | - | Switch on for a product sold as a single fixed item. Turning it on turns **3D Product** off. |
| **3D Product** | - | Switch on for a product built in 3D. Shows **Setting Diamond Shapes** and **Setting Diamond Sizes** (one choice each), and adds the **Is Band** switch to the metal section. Turning it on turns **Single Product** off. |

:::note
The first category row decides which size or length options the product can have. Products can be listed under several categories by adding more rows.
:::

### Product SEO

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **SEO Title** | - | Title shown in search results and browser tabs. |
| **SEO Description** | - | Short summary shown in search results. |
| **SEO Keywords** | - | Type a keyword and press Enter to add it. |

### Other Details

Shown after a category is selected.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Quantity Track** | - | Tick to track stock for this product. Ticked by default. |
| **Quantity** | - | Available stock. The value is copied into every metal row. |
| **Setting Type** | - | Select one or more setting types. Shown for categories that use setting styles, and for 3D products. |
| **Select size** / **Select Length** | - | Select one or more sizes for sized categories (for example rings), or lengths for measured categories (for example chains). |

### Metal Details

Tick one or more metals (for example **Gold**, **Silver**, **Platinum**). At least one metal is required; otherwise the form shows **Please select at least one metal**. For 3D products, an **Is Band** switch appears above the metals.

Each ticked metal shows a table:

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Metal Karat** | - | Gold only. One row per karat (for example 14KT), read-only. |
| **Metal Tone** | - | Gold: select one or more tones for the karat. Gold rows without a tone are skipped. Silver and platinum tones are read-only. |
| **Quantity** | - | Stock for the row. Numbers only. |
| **Metal Weight** | ✅ | Required on every silver and platinum row, and on every gold row that has a tone. Numbers and one decimal point only. Error: **Metal Weight is required**. |
| **Band Metal Weight** | ✅ (band) | Shown and required when **3D Product** and **Is Band** are on. Error: **Band Metal Weight is required**. |
| **Rate** / **Price** | - | Read-only. **Rate** is the current metal rate for the weight you entered, and **Price** is the weight multiplied by the rate. **Price** reads **Price (incl. band)** when the band columns are shown, and then uses the metal weight plus the band weight. |
| **Labour Charge** / **Band Labour Charge** | - | Shown only when a fixed labour charge applies to the metal. **Band Labour Charge** also needs **Is Band** on. |

### Diamond Details

Switch on **Center Diamond** and/or **Side Diamond** to add stone rows. Side diamonds can have several rows: use **+** to add a row and **-** to remove one. The **Stone** list contains only stones that have a price set up in the [Diamond Group Master](./diamond-group-master.md).

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Is Band** | - | Side diamonds only, shown when **3D Product** and **Is Band** are on: **Yes** or **No**. |
| **Stone** | ✅ | Required on every stone row. Error: **Stone is required**. |
| **Shape** | ✅ | Required on every stone row. Error: **Shape is required**. |
| **Stone Setting** | - | Setting type for the stone. |
| **Stone Weight** | ✅ | Required on every stone row. Error: **Stone weight is required**. |
| **Stone Pieces** | ✅ | Number of stones in the row. Error: **Stone count is required**. |

### Additional Info

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Additional Information** | - | Extra product details (rich text). |
| **Certificate Link** | - | Link to the product certificate. |
| **Finding Charge** | - | Added to the product price. |
| **Other Charge** | - | Added to the product price. |
| **Check this box to customize your product** | - | Tick to allow customization of this product. |

---

## Add Variant Product

Click **Product → Add Variant Product**. A variant product has fixed prices that you enter for each metal, karat, tone and size combination. The form has the same sections as the Normal Product form, with the **Back** button at the top and **Submit** at the bottom. The differences are:

- **Product Basic information** has no **Select Parent SKU** field.
- **Product Specification** adds **Select Brand**. There are no **Single Product** or **3D Product** switches.
- **Other Details** contains:

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Quantity Track** | - | Tick to track stock. Ticked by default. |
| **Quantity** | ✅ (tracked) | Required and must be greater than 0 when **Quantity Track** is ticked. Error: **Quantity is required**. |
| **Final Retail Price** | ✅ | Selling price of the product. Error: **Retail price is required**. |
| **Final Compare Price** | ✅ | Compare-at price shown alongside the retail price. Error: **Compare price is required**. |
| **Select size** / **Select Length** | - | Each selected size or length adds rows to the metal tables. |
| **Setting Type** | - | Shown for categories that use setting styles. |

The **Quantity**, **Final Retail Price** and **Final Compare Price** values are copied into every metal row. You can then change them row by row.

- **Metal Details** shows one table per ticked metal with a row for each combination. **Size**, **Length**, **Metal Karat** (gold only) and **Metal Tone** are read-only. Enter **Quantity**, **Metal Weight**, **Side Diamond Total Weight**, **Side Diamond Total Count**, **Retail Price** and **Compare Price** for each row you sell. A new row is saved only when it has both **Metal Weight** and **Retail Price**. Clearing **Metal Weight** on a saved row removes it when you save. If no row has a metal weight, the product is saved with the product-level quantity and prices only.
- **Diamond Details** rows include **Stone**, **Shape**, **MM Size**, **Color**, **Clarity**, **Cut** and **Stone Setting**. Center diamond rows also include **Stone Weight** and **Stone Pieces**. Only the required fields below are checked; the other attributes are optional. There is no **Is Band** option. Stone prices come from the matching record in the [Diamond Group Master](./diamond-group-master.md).
- **Additional Info** has no customization checkbox.

| Diamond Row | Required Fields |
| ----------- | --------------- |
| **Center Diamond** | Stone, Shape, Stone Weight, Stone Pieces |
| **Side Diamond** | Stone, Shape |

---

## Add Choose Settings Product

Click **Product → Add Choose Settings Product**. Use this for ring settings where the customer chooses the center stone. The form follows the Variant Product layout. The sections appear in this order: **Product Basic information**, **Product Specification**, **Other Details**, **Diamond Details**, **Metal Details**, **Additional Info** and **Product SEO**.

The differences from the Variant Product form are:

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **is single** | - | Switch in **Product Specification**. |
| **Select Diamond Shapes** | ✅ | The center stone shapes the customer can choose from. Required when you edit an existing product (**Center diamond shapes is required**). |
| **Select Diamond Sizes** | - | The center stone sizes the customer can choose from. |
| **Final Retail Price** / **Final Compare Price** | - | In **Other Details**. Optional for this product type. |

- **Quantity** in **Other Details** is not required.
- Gold shows one karat at a time. Click a karat button next to **Gold** to work on that karat's rows.
- The metal table adds a **Center Diamond Total Price** column, and a **Labour Charge** column when a fixed labour charge applies to the metal.
- A new metal row is saved only when it has both **Metal Weight** and **Retail Price**. If there are no metal rows to save, the form shows **Metal Data is required**.
- Diamond rows follow the same required fields as the Variant Product.

:::tip
In every product form, if a required field is missing when you click **Submit**, the form shows the error under the field and scrolls to the first field with an error. If the server rejects the product, its message appears as a notification and you stay on the form.
:::
