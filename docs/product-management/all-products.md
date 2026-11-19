---
sidebar_position: 1
id: all-products
title: All Products
sidebar_label: All Products
---

# All Products

## Overview

**All Products** shows every catalog product in the store. From here you add Normal, Variant and Choose Settings products, export the catalog, switch products on or off, mark them as trending and manage the **New Arrival** tag.

There are three kinds of product, and each has its own form:

| Product Type | How the price is set |
| ------------ | -------------------- |
| **Normal Product** | Calculated from the metal weight, the live metal rate and the stones. |
| **Variant Product** | You type a fixed price for every metal, karat, tone and size combination. |
| **Setting Product** | A ring setting where the customer picks the center stone. Created with **Add Choose Settings Product** and priced like a variant product. |

Configurator products (ring, three stone, eternity band, bracelet, stud, pendant) and birthstone products are not listed here. They have their own pages under **Configurator Products**.

:::note[Who can use it]
Store administrators and users whose role includes **All Products**. The **View**, **Edit** and **Delete** icons need the matching **View**, **Edit** and **Delete** permission; without it the icon is greyed out. The **Status**, **Is Trending** and **Arrival Status** switches need the **Edit** permission. The **Product** and **Export** menus and the bulk action buttons are not switched off by permissions.
:::

:::info[Pricing lock]
When the store's [Price Display](../settings/price-display.md) is set to **TCC_TECH Pricing + Margin**, the page shows the notice *Pricing is locked while you use TCC TECH Pricing + Margin. To add or change prices, switch to Own Pricing + Margin first.* with a **Go to Price Display** button. The page then works as if your role had **View** permission only, and the price fields in the product forms are read-only. See [Pricing Lock](#pricing-lock).
:::

---

## Data Displayed

### Product List Screen

| Action | Description |
| ------ | ----------- |
| **Search** | Type in the search box to search the list. The list updates about a second and a half after you stop typing and goes back to page 1. Clear the box to show all products again. |
| **Product** | Opens a menu with **Add Normal Product**, **Add Variant Product** and **Add Choose Settings Product**. |
| **Export** | Opens a menu with **Normal Product Export** and **Variant Product Export**. A message appears once the export is started. |
| **Filter** | Shows or hides a filter row under the column headings. It narrows the products already loaded on the current page. |
| **Add New Arrival** | Button at the top of the page. Opens the **Add New Arrival Tag** popup. See [New Arrival Tag](#new-arrival-tag). |
| **View Documentation** | Opens this page. |
| **View** | Click the **View** icon to open the product in read-only mode. |
| **Edit** | Click the **Edit** icon to open the product in the form it was created with (Normal, Variant or Choose Settings). |
| **Delete** | Click the **Delete** icon. A popup titled **Are you Sure?** asks *Are you Sure You would like to delete ?*. Click **YES** to remove the product or **NO** to cancel. |
| **Status** (switch) | Switch a product on or off directly from the list. |
| **Is Trending** | Switch on to mark the product as trending on the storefront. Some stores show this column as **Is Favorite**. |
| **Arrival Status** | Switch on to apply the New Arrival tag to the product. Disabled when no New Arrival tag exists or the tag is turned off. |
| **Pagination** | Change the page or the number of rows per page (25, 50, 75 or 100) at the bottom of the table. |

### Product List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| (checkbox) | - | Select a row to use the [Bulk Actions](#bulk-actions). | - |
| **Action** | - | **View**, **Edit** and **Delete** icons. | - |
| **Image** | Image | Product thumbnail. Hover over it to see a larger preview. | - |
| **Name** | Text | Product name. | *Classic Solitaire Ring* |
| **Parent SKU** | Text | SKU of the parent product, if the product is grouped under one. | *RG-1001* |
| **SKU** | Text | Product SKU. | *RG-1001-14K* |
| **Product Type** | Text | **Normal Product**, **Variant Product** or **Setting Product**. | **Variant Product** |
| **Category Name** | Text | Category assigned to the product. | *Rings* |
| **Pricing** | Link | Click **View Details** to open the pricing popup. See [Pricing Details](#pricing-details). | **View Details** |
| **Status** | Badge | Whether the product is **Active** or **Inactive**. | **Active** |
| **Status** (switch) | Switch | Turns the product on or off. | - |
| **Is Trending** / **Is Favorite** | Switch | Marks the product as trending. | - |
| **Arrival Status** | Switch | Applies or removes the New Arrival tag. | - |

### Bulk Actions

Select one or more products using the checkboxes. These buttons appear above the table:

| Action | Description |
| ------ | ----------- |
| **DELETE** | Deletes all selected products after you confirm with **YES**. |
| **Enable** | Sets all selected products to Active. |
| **Disable** | Sets all selected products to Inactive. |
| **Arrival Enable** | Applies the New Arrival tag to all selected products. |
| **Arrival Disable** | Removes the New Arrival tag from all selected products. |

**Arrival Enable** and **Arrival Disable** are available only when a New Arrival tag exists and is enabled.

### New Arrival Tag

The **Add New Arrival Tag** popup creates or updates the store's New Arrival tag. A store has one New Arrival tag, so reopening the popup shows the existing tag for editing.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Tag Name** | ✅ | Name shown on tagged products, for example *New Arrival*. Minimum 2 characters. Errors: **Tag name is required**, **Tag name must be at least 2 characters**. |
| **Duration (Days)** | ✅ | Whole number from 1 to 365. The tag expires automatically after this many days. Errors: **Duration is required**, **Duration must be a whole number**, **Duration must be at least 1 day**, **Duration cannot exceed 365 days**. |
| **Enable Tag** | - | Turns the tag on or off. On by default. Available only after the tag has been created. |

| Button | Description |
| ------ | ----------- |
| **Apply Tag** | Saves the tag. The button reads **Saving...** while the tag is being saved. |
| **Delete** | Removes the tag after you confirm with **YES**. Shown only when a tag already exists. |
| **Cancel** | Closes the popup without saving. |

### Pricing Details

Click **View Details** in the **Pricing** column to open the **Product Price Details** popup, which shows how the product price is built.

| Part | What it shows |
| ---- | ------------- |
| **Header** | Product name, **SKU**, created date and **Final Retail Price**, followed by **Metal**, **Metal Weight**, **Stones** and **Total Wt.** |
| **CONFIGURATION** panel | **Metal**, **Metal Tone**, **Stone Type**, **Color & Clarity** and **Diamond Cut** options. Pick an option to recalculate the price for that combination. **Color & Clarity** is shown for normal products only. |
| **Price Breakdown** tab | **Cost Calculation**: **Total Diamond Cost**, **Total Setting Cost**, **Labour** and **Duty** (with its percentage), adding up to **= Landed Cost**. **Margin Cost**: **+ Diamond Margin**, **+ Metal Margin** and **+ Product Margin**, adding up to **= Total Margin**. For Variant and Setting products only the product line is shown. **Retail Calculation**: **Subtotal (Landed Cost + Margin)** and the **Final Retail Price**. |
| **Specifications** tab | The product's stones (type, shape, color, clarity, cut, quantity and weight), with a total row and a summary of the number of entries, stones and total carat weight. For normal products it also shows the price per carat and the stone totals with and without margin. Shows **No diamond entries** when the product has no stones. |
| **Download pdf** | Saves the pricing breakdown as a PDF named after the product SKU. |

Each margin line is labelled **Margin** or **Markup** according to the pricing type set for it in your store. Hover over the info icon next to the product margin to see that it is added on top after the metal and diamond margins.

---

## How It Works

### Find and Manage Products

- **Search** looks across all products, not just the current page. A new search returns you to page 1.
- **Filter** boxes only narrow the rows already on the current page.
- Products are listed newest first, 50 per page by default. Click the **Name**, **Parent SKU**, **SKU**, **Product Type**, **Category Name** or **Is Trending** header to sort; the whole list is re-sorted, not just the current page. **Image**, **Pricing**, the two **Status** columns and **Arrival Status** cannot be sorted.
- The page number and rows per page are kept in the page address.
- After a switch is changed, the message **Successfully updated** appears and the list reloads. After a delete, bulk action or tag change, the server's message appears and the list reloads.

### Steps to Apply the New Arrival Tag

1. Click **Add New Arrival**.
2. Enter the **Tag Name** and **Duration (Days)**, then click **Apply Tag**.
3. Turn on **Arrival Status** for a product, or select several products and click **Arrival Enable**.
4. To stop using the tag, reopen the popup and turn **Enable Tag** off, or click **Delete**.

If you turn **Enable Tag** off, the **Arrival Status** switches and the **Arrival Enable** / **Arrival Disable** buttons are disabled until you turn it back on.

### Add Normal Product

Click **Product → Add Normal Product**. The price of a normal product is calculated from the metal weight, metal rate and stones. The form is a single page made up of the sections below. Click **Submit** at the bottom to save, or **Back** at the top to leave without saving. After a successful save you return to the product list.

When you open a product with **View**, every field is read-only and the **Submit** button is hidden.

#### Product Basic information

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Product SKU** | ✅ | SKU of the product. Error: **Product sku is required**. |
| **Select Parent SKU** | - | Groups this product under an existing product. |
| **Product Title** | ✅ | Name of the product. Error: **Product name is required**. |
| **Product Short Description** | - | Short summary of the product. |
| **Product Long Description** | ✅ | Rich text. Must be at least 20 characters of text. Error: **Long description must be a 20 to 2000 characters!** |
| **Tags** | ✅ | Select one or more tags. Error: **Keyword is required**. |

#### Product Specification

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

#### Other Details

Shown after a category is selected.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Quantity Track** | - | Tick to track stock for this product. Ticked by default. |
| **Quantity** | - | Available stock. The value is copied into every metal row. |
| **Setting Type** | - | Select one or more setting types. Shown for categories that use setting styles, and for 3D products. |
| **Select size** / **Select Length** | - | Select one or more sizes for sized categories (for example rings), or lengths for measured categories (for example chains). |

#### Metal Details

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
| **Labour Charge** / **Band Labour Charge** | - | Shown only when a fixed labour charge applies to the metal. **Band Labour Charge** also needs **Is Band** on. Read-only while pricing is locked. |

#### Diamond Details

Switch on **Center Diamond** and/or **Side Diamond** to add stone rows. Side diamonds can have several rows: use **+** to add a row and **-** to remove one. The **Stone** list contains only stones that have a price set up in the [Diamond Group Master](./diamond-group-master.md).

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Is Band** | - | Side diamonds only, shown when **3D Product** and **Is Band** are on: **Yes** or **No**. |
| **Stone** | ✅ | Required on every stone row. Error: **Stone is required**. |
| **Shape** | ✅ | Required on every stone row. Error: **Shape is required**. |
| **Stone Setting** | - | Setting type for the stone. |
| **Stone Weight** | ✅ | Required on every stone row. Error: **Stone weight is required**. |
| **Stone Pieces** | ✅ | Number of stones in the row. Error: **Stone count is required**. |

#### Additional Info

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Additional Information** | - | Extra product details (rich text). |
| **Certificate Link** | - | Link to the product certificate. |
| **Finding Charge** | - | Added to the product price. Read-only while pricing is locked. |
| **Other Charge** | - | Added to the product price. Read-only while pricing is locked. |
| **Check this box to customize your product** | - | Tick to allow customization of this product. |

### Add Variant Product

Click **Product → Add Variant Product**. A variant product has fixed prices that you enter for each metal, karat, tone and size combination. The form has the same sections as the Normal Product form, with the **Back** button at the top and **Submit** at the bottom. The differences are:

- **Product Basic information** has no **Select Parent SKU** field.
- **Product Specification** adds **Select Brand**. There are no **Single Product** or **3D Product** switches.
- **Other Details** contains:

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Quantity Track** | - | Tick to track stock. Ticked by default. |
| **Quantity** | ✅ (tracked) | Required and must be greater than 0 when **Quantity Track** is ticked. Error: **Quantity is required**. |
| **Final Retail Price** | ✅ | Selling price of the product. Error: **Retail price is required**. Read-only while pricing is locked. |
| **Final Compare Price** | ✅ | Compare-at price shown alongside the retail price. Error: **Compare price is required**. Read-only while pricing is locked. |
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

### Add Choose Settings Product

Click **Product → Add Choose Settings Product**. Use this for ring settings where the customer chooses the center stone. The form follows the Variant Product layout. The sections appear in this order: **Product Basic information**, **Product Specification**, **Other Details**, **Diamond Details**, **Metal Details** and **Additional Info**.

The differences from the Variant Product form are:

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **is single** | - | Switch in **Product Specification**. |
| **Select Diamond Shapes** | ✅ | The center stone shapes the customer can choose from. Required when you edit an existing product (**Center diamond shapes is required**). |
| **Select Diamond Sizes** | - | The center stone sizes the customer can choose from. |
| **Final Retail Price** / **Final Compare Price** | - | In **Other Details**. Optional for this product type. Read-only while pricing is locked. |

- **Quantity** in **Other Details** is not required.
- Gold shows one karat at a time. Click a karat button next to **Gold** to work on that karat's rows.
- The metal table adds a **Center Diamond Total Price** column, and a **Labour Charge** column when a fixed labour charge applies to the metal.
- A new metal row is saved only when it has both **Metal Weight** and **Retail Price**. If there are no metal rows to save, the form shows **Metal Data is required**.
- Diamond rows follow the same required fields as the Variant Product.

### Saving a Product

In every product form, if a required field is missing when you click **Submit**, the form shows the error under the field and scrolls to the first field with an error. If the server rejects the product, its message appears as a notification and you stay on the form.

### Pricing Lock

While the store uses **TCC_TECH Pricing + Margin**:

- The lock notice is shown above the list and above each product form.
- The **View**, **Edit** and **Delete** icons and the three switches behave as if your role had **View** permission only, so only **View** stays available.
- In the product forms, these fields are read-only: **Labour Charge**, **Band Labour Charge**, **Finding Charge** and **Other Charge** (normal products), and **Final Retail Price**, **Final Compare Price** and the **Retail Price**, **Compare Price** and **Center Diamond Total Price** columns (variant and setting products).

Switch to **Own Pricing + Margin** on [Price Display](../settings/price-display.md) to unlock them.

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No products match | **No records to display** |
| Loading a product form | A loading spinner fills the page. |
| A list action fails | The server's message, or a general error message, appears as a notification. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How All Products uses it |
| ------ | ------------------------ |
| [Tags](./masters/tags.md) | The **Tags** list in every product form. |
| [Collection](./masters/collection.md) | The **Collection Name** list. |
| [Metals](./masters/metal-master/metals.md), [Metal Karat](./masters/metal-master/metal-karat.md), [Metal Tone](./masters/metal-master/metal-tone.md) | The metals you can tick, the gold karat rows and the tones in the metal tables. |
| [Metal Rate Settings](../settings/metal-rate-setting.md) | Supplies the **Rate** for each metal and weight on normal products, which sets the metal **Price**. |
| [Labour Management](../settings/margin-cost-center/labour-management.md) | Decides whether a fixed labour charge applies to a metal, which shows the **Labour Charge** columns. |
| [Stone Master](./masters/stone-master.md), [Diamond Shape](./masters/diamond-shape.md), [MM Size](./masters/mm-size.md), [Color](./masters/color.md), [Clarity](./masters/clarity.md), [Cut](./masters/cut.md) | The stone options in **Diamond Details**. |
| [Carat Size](./masters/carat-size.md) | The **Setting Diamond Sizes** and **Select Diamond Sizes** options. |
| [Setting Type / Style](./masters/setting-type-style.md) | The **Setting Type** and **Stone Setting** lists. |
| [Item Size Master](./masters/item-size-master.md), [Item Length Master](./masters/item-length-master.md) | The **Select size** and **Select Length** options, which also add rows to the variant metal tables. |
| [Diamond Group Master](./diamond-group-master.md) | Only stones priced there can be picked on a normal product. Stone prices come from the matching record. |
| [Price Display](../settings/price-display.md) | **TCC_TECH Pricing + Margin** locks the page and the price fields. |

### Modules That Depend On It

| Module | How it uses products |
| ------ | -------------------- |
| [Diamond Group Master](./diamond-group-master.md) | **Export Products** exports the products that use the selected diamond records. |
| Storefront | Shows your catalog products, with the **Is Trending** flag and the New Arrival tag you set here. |

### What Changes If…

| Change | Effect |
| ------ | ------ |
| A product is switched off | Its status changes to **Inactive**. |
| A product is deleted | It is removed from the list. |
| The New Arrival tag is turned off or deleted | The **Arrival Status** switches and the arrival bulk actions are disabled. |
| The New Arrival tag's duration passes | The tag expires automatically. |
| A metal rate changes | The **Rate** and **Price** of normal products change, because they are worked out from the live rate. Variant and setting product prices are fixed and do not change. |
| A stone's price is removed from the Diamond Group Master | That stone can no longer be picked on a normal product. |
| A size or length is added to a master | It becomes available in **Select size** or **Select Length**. |
| Price Display is switched to **TCC_TECH Pricing + Margin** | The page becomes view-only and the price fields lock. |

---

## Edge Cases / Notes

- **Bulk actions are not permission-checked.** **DELETE**, **Enable** and **Disable** above the table are available to anyone who can open the page, including while pricing is locked.
- **The Product menu stays available while pricing is locked.** You can still open the product forms, but the price fields are read-only.
- **Filter only covers the current page.** Use **Search** to look across every product.
- **Is Favorite.** Some stores show the **Is Trending** column as **Is Favorite**. It works the same way.
- **One New Arrival tag per store.** Reopening **Add New Arrival** edits the existing tag.
- **View mode.** Opening a product with **View** shows the same form with every field read-only and no **Submit** button.
- **Variant rows need a weight and a price.** A variant or setting metal row without both **Metal Weight** and **Retail Price** is not saved.
