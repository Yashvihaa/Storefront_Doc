---
sidebar_position: 7
id: birthstone-products
title: Birthstone Products
sidebar_label: Birthstone Products
---

# Birthstone Products

## Overview

**Birthstone Products** holds jewellery set with birthstones that customers personalise on the storefront. Each product has metal options with a weight and retail price, fixed and changeable gemstones, and optional engraving fields.

Birthstone products are shared by every store. TCC Tech creates and maintains the products; each store chooses which ones to show and can set its own prices and charges.

| Who | What they can do |
| --- | ---------------- |
| **TCC Tech Super Admin** (signed in with the TCC Tech company) | Add, edit and delete products, upload their images and update them in bulk. Switching a product off hides it for every store. |
| **Any other store** | View the products, switch a product on or off for its own website, and use **Bulk Edit** to set its own charges and metal option prices. |

:::note[Who can use it]
Users whose role includes **All Birthstone Products** and whose subscription includes birthstone products. **Add Birthstone Product** and **Download** need the **Add** permission, and **Export Excel** needs **Add** too. **Bulk Edit** and the status switch need **Edit**. The **View**, **Edit** and **Delete** icons need **View**, **Edit** and **Delete**.

A store that is not TCC Tech can open the add and edit form, but saving it, deleting a product or uploading an image is refused with *Only a Super Admin can perform this action.*
:::

:::info[Pricing lock]
When the store's [Price Display](../../settings/price-display.md) is set to **TCC_TECH Pricing + Margin**, the list and the form show the notice *Pricing is locked while you use TCC TECH Pricing + Margin. To add or change prices, switch to Own Pricing + Margin first.* with a **Go to Price Display** button. The list then works as if your role had **View** permission only, and **Labor charges**, **Finding Charge**, **Other Charge** and **Retail Price** in the form are read-only.
:::

---

## Data Displayed

### Birthstone Product Screen List

| Action | Description |
| ------ | ----------- |
| **Export Excel** | Downloads all birthstone products as an Excel file (`Birthstone_products.xlsx`) with the **name**, **sku**, **category** and **status** (**Active** or **Inactive**) of each product. The current search is ignored. A thin progress line fills along the bottom of the button. |
| **View Documentation** | Opens this page. |
| **Search** | Type in the search box to search the list. |
| **Download** | Downloads the sample Excel file (`Sample_birthstone_product_file.xlsx`). It contains only the column headings, with no sample rows. |
| **Bulk Edit** | Click **Bulk Edit** and select an Excel file (.xlsx or .xls) to update existing products. The update starts as soon as you pick the file. See [Steps to Bulk Edit](#steps-to-bulk-edit). |
| **Add Birthstone Product** | Opens the form to add a new birthstone product. |
| **Filter** | Shows or hides a row of filter boxes under the column headings. Typing in a box narrows the rows currently shown on the page. The **Image** column has no filter. |
| **View** | Click the **View** icon to open the product in read-only mode. |
| **Edit** | Click the **Edit** icon to open the product form. |
| **Delete** | Click the **Delete** icon. A dialog titled **Are you Sure?** asks *Are you Sure You would like to delete ?*. Click **YES** to remove the product or **NO** to cancel. |
| **Status** (switch) | Switch a product on or off directly from the list. **Successfully updated** appears and the list reloads. |

### Birthstone Product List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Action** | - | **View**, **Edit** and **Delete** icons. | - |
| **Image** | Image | Product image. Hover over it to see a larger preview. A placeholder is shown when the product has no image. | - |
| **Name** | Text | Product name. | *Family Birthstone Ring* |
| **SKU** | Text | Product SKU. | *BS-RING-001* |
| **Category Name** | Text | Category name of the product. | *Rings* |
| **Status** | Badge | Whether the product is **Active** or **Inactive** for your store. | **Active** |
| **Status** (switch) | Switch | Turns the product on or off. Hover to see **Enable/Disable**. | - |

### Bulk Edit Errors

When some rows are rejected, an error table appears at the top of the list:

| Column | Description |
| ------ | ----------- |
| **Product Details.** | The **Row Id**, **Product Name** and/or **Style No** of the failed row. |
| **Error Message** | Why the row was rejected. |

The table is cleared after the next successful bulk edit.

### Add a New Birthstone Product

The form has two steps, shown in a progress bar at the top: **Birthstone Product Basic Details** and **Metal & Gemstone Details**.

#### Step 1: Birthstone Product Basic Details

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Product SKU** | ✅ | SKU of the product. |
| **Product Title** | ✅ | Name of the product. |
| **Product Short Description** | ✅ | Short text about the product. Must be longer than 4 characters. |
| **Product Long Description** | ✅ | Rich text editor. Must contain at least 20 characters of text (formatting does not count). |
| **Product Number** | - | Internal product number. |
| **Gemstone Count** | ✅ | Number of **Changeable** gemstones the customer can choose. Fixed stones are not counted. |
| **Keywords** | ✅ | Select one or more tags. |
| **Gender** | - | **Male**, **Female** or **Unisex**. You can select more than one. |
| **Engraving Text Count** | - | Number of engraving fields. Starts at 1. Changing the number adds or removes **Engraving Label** / **Character Count** rows to match. |
| **Engraving Label** | - | Label for each engraving field (for example Left or Right). |
| **Character Count** | - | Maximum number of characters allowed in each engraving field. |
| **Category** | ✅ | Type the category name. The first row is required. Click **+** to add another category row and **-** to remove a row. |
| **Sub Category** | - | Type the sub category name. |
| **Sub Sub Category** | - | Type the sub sub category name. |
| **Labor charges** | - | Labor charge for the product. Defaults to 0. Read-only while pricing is locked. |
| **Finding Charge** | - | Finding charge for the product. Defaults to 0. Read-only while pricing is locked. |
| **Other Charge** | - | Any other charge for the product. Defaults to 0. Read-only while pricing is locked. |

Categories are typed as free text, not picked from a list, so spell them exactly as you want them to appear. Leaving **Sub Category** or **Sub Sub Category** empty clears it.

#### Step 2: Metal & Gemstone Details

**Size or Length**

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Select size** | - | Shown only when sizes are set up for your store. You can select more than one. |
| **Select Length** | - | Shown only when lengths are set up for your store. You can select more than one. |

**Metal Details**

The table lists one row for every metal, karat and metal tone combination: each gold karat with each gold tone, and each silver and platinum tone. **Metal**, **karat** and **Metal Tone** are read-only.

| Column | Required | Remarks |
| ------ | -------- | ------- |
| **PLU No.** | - | Price look-up number for the row. |
| **Metal Weight** | ✅ | Number. Enter for each combination you sell. |
| **Retail Price** | ✅ | Number. Enter for each combination you sell. Read-only while pricing is locked. |

Only rows with both **Metal Weight** and **Retail Price** are saved. At least one such row is required. When editing, clearing the weight or price of a saved row removes that combination.

**Gemstone Details**

Click **Add Gemstone Details** to add a stone row. Click **-** in the **Delete** column to remove a row. Hover over the info icon on the button to see a reminder that **Gemstone Count** covers only **Changeable** stones.

| Column | Required | Remarks |
| ------ | -------- | ------- |
| **Stone Type** | - | **Fix** (set permanently in the design) or **Changeable** (the customer chooses the birthstone). Empty on a new row. Decides which other columns are required. A row with no stone type is not checked or counted. |
| **Stone Count** | - | Number of stones in the row. |
| **Stone** | - | The stone. |
| **Shape** | - | Stone shape. |
| **MM Size** | - | Stone size in millimetres. |
| **Color** | - | Stone color. |
| **Clarity** | - | Stone clarity. |
| **Cut** | - | Stone cut. |
| **carat size** | - | Stone carat size. |
| **Stone Weight** | - | Stone weight (number). |
| **Stone Pieces** | - | Same value as **Stone Count**. Changing one changes the other. |

| Stone Type | Required Columns |
| ---------- | ---------------- |
| **Fix** | Stone, Shape, Stone Weight and Stone Count |
| **Changeable** | Shape and Cut |

**Upload Image**

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Upload Image** | ✅ | One product image. Drag a file onto the box (**Drop files here or click to upload.**) or click it to browse. Accepts PNG, JPG, JPEG, GIF and SVG files up to 10 MB. The label shows the aspect ratio guide **300 x 300**. The chosen file is shown with its name and size; click **Remove** to clear it. A file that is too large or of another type is rejected with **You can only upload maximum size of 10 MB.** |

---

## How It Works

### Steps to Add a New Birthstone Product

1. Click **Add Birthstone Product**.
2. Fill in **Step 1** and click **Next**.
3. Fill in **Step 2**: sizes or lengths, at least one metal row with a weight and price, the gemstone rows and the image.
4. Click **Submit**. When the product is saved, a success message appears and you return to the list.

The **Back** button on the left returns you to the previous page without saving. On step 2, **Previous Step** returns to step 1. When you scroll down, **Previous Step** and **Next** / **Submit** stay pinned at the top of the page.

When you open a product with **Edit**, the same form opens with the saved values filled in. Saving an edit also returns you to the list.

When you click **Next**, the form checks the fields in this order:

1. The required fields. Missing fields are marked with a message under the field: **Product name is required**, **Product sku is required**, **Sort description must be a 4 to 400 characters**, **Long description must be a 20 to 2000 characters!**, **Keyword is required** or **Gemstont count is required**.
2. A category in the first category row (**Please enter a category**).
3. The number of engraving rows matches **Engraving Text Count** (**Engraving data not match with engraving count**).

When you click **Submit**, the form checks the following and shows the first problem it finds:

1. An image is uploaded (**Image is required**). This applies to a new product, and to an edited product whose saved image was removed.
2. At least one metal row has both **Metal Weight** and **Retail Price** (**Metal Data is required**).
3. The number of **Changeable** rows matches **Gemstone Count** (**Gemstone detail data not match with gemstone count**).
4. Each **Fix** and **Changeable** row has its required columns. The message names the row number, for example **Row 2 : Please enter fix stone, diamond shape, stone weight and stone count in diamond detail** or **Row 2 : Please enter changeble stone, diamond shape and stone cut in diamond detail**.

For a new product, the details are saved first and the image is uploaded right after. Each **Fix** stone must match one of TCC Tech's [Diamond Group Master](../diamond-group-master.md) records (same stone, shape, MM size, color, clarity, cut and carat size); otherwise the save is refused with *Diamond group not found!*.

:::tip
When editing a product that already has an image, click **Remove** first and then upload the new image. If you do not remove the saved image, the product is saved with the image it already has and a newly chosen file is ignored.
:::

### View a Birthstone Product

Click the **View** icon to open the product in read-only mode. Text and number fields are read-only, **+** and **Add Gemstone Details** are hidden, the **-** buttons and image upload are disabled, and there is no **Submit** button. Use **Next** and **Previous Step** to move between the two steps.

### Steps to Bulk Edit

1. Click **Download** to get the sample file.
2. Fill in one product per group of rows using the sample file's columns. Each product is matched by its SKU.
3. Click **Bulk Edit** and select the file.

When the file is accepted, a success message appears and the list reloads. If the file is rejected, an error message appears, and when particular rows are rejected the [Bulk Edit Errors](#bulk-edit-errors) table is shown. Correct those rows and upload the file again. A file with any error saves nothing.

What a bulk edit changes depends on who uploads it:

| Who | What the file changes |
| --- | --------------------- |
| **TCC Tech Super Admin** | Updates the shared products from every filled cell, adds new metal options by **PLU No.**, and creates products whose SKU does not exist yet. |
| **Any other store** | Saves only your own prices: the product's labor, finding and other charges, and the price of each metal option (by **PLU No.**). The shared product is never changed, and an unknown SKU is an error. |

### Switching a Product On or Off

- A **TCC Tech Super Admin** switches the product for every store.
- **Any other store** switches the product for its own website only. Other stores are not affected.

When a product is switched off, it is removed from the customer carts and wishlists it was in, for the stores it was switched off for.

### Search, Filters and Paging

- **Search** looks across all products, not just the current page. The list updates about two seconds after you stop typing. Clear the box to show all products again.
- The **Filter** boxes only narrow the rows already on the current page.
- The newest product is listed first, 50 per page by default (25, 50, 75 or 100). Click **Name**, **SKU** or **Category Name** to sort the whole list. The image and the two status columns cannot be sorted.
- The page number and rows per page are kept in the page address.

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the list | Placeholder rows. |
| No products match | **No records to display** |
| A save, delete or bulk edit fails | An error message appears as a notification. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Birthstone Products uses it |
| ------ | ------------------------------- |
| [Tags](../masters/tags.md) | The **Keywords** list. |
| [Metals](../masters/metal-master/metals.md), [Metal Karat](../masters/metal-master/metal-karat.md), [Metal Tone](../masters/metal-master/metal-tone.md) | The rows of the **Metal Details** table. |
| [Item Size Master](../masters/item-size-master.md), [Item Length Master](../masters/item-length-master.md) | The **Select size** and **Select Length** options. Sizes follow the size charts chosen for your store. |
| [Stone Master](../masters/stone-master.md), [Diamond Shape](../masters/diamond-shape.md), [MM Size](../masters/mm-size.md), [Color](../masters/color.md), [Clarity](../masters/clarity.md), [Cut](../masters/cut.md), [Carat Size](../masters/carat-size.md) | The options in **Gemstone Details**. Color, clarity and cut come from TCC Tech's lists. |
| [Diamond Group Master](../diamond-group-master.md) | Every **Fix** stone must match a TCC Tech diamond record. On the storefront, the gemstones a customer picks are priced from your diamond records or TCC Tech's, following your Price Display. |
| [Metal Rate Settings](../../settings/metal-rate-setting.md) | The storefront price calculation uses your metal rate for the chosen metal and karat. |
| [Product Margin](../../settings/margin-cost-center/product-margin.md), [Duty and Tariff](../../settings/margin-cost-center/duty-and-tariff.md) | Your **Birthstone configurator** product margin and your duty are added to the storefront price. |
| [Price Display](../../settings/price-display.md) | **TCC_TECH Pricing + Margin** locks the price fields and makes the list view-only. **No Pricing Display** shows every storefront price as 0. |

### Modules That Depend On It

| Module | How it uses birthstone products |
| ------ | ------------------------------- |
| Storefront | Lists active birthstone products with at least one metal option, shows their details and calculates the price of a personalised piece. |
| [Cart Products](../../sales-funnel/cart-products.md), [Wishlist Products](../../sales-funnel/wishlist-products.md) | Hold birthstone products added by customers. Switching a product off or deleting it removes it from them. |
| [Offers & Discounts](../offers-discounts.md) | A **Birthstone configurator** product type offer applies to birthstone prices in its price range. |
| [Diamond Group Master](../diamond-group-master.md) | A diamond record used by a birthstone stone row cannot be deleted. |

### What Changes If…

| Change | Effect |
| ------ | ------ |
| A store switches a product off | It disappears from that store's website, carts and wishlists only. |
| TCC Tech switches a product off, or deletes it | It disappears for every store, and is removed from every store's carts and wishlists. |
| A store bulk edits its prices | Its own charges and metal option prices replace TCC Tech's for that store. Other stores keep theirs. |
| TCC Tech changes a product's price | Stores that have not set their own price for that metal option or charge see the new price. |
| Price Display is switched to **TCC_TECH Pricing + Margin** | The list becomes view-only and the price fields lock. |
| The TCC Tech diamond record of a fixed stone is removed | Saving a product with that fixed stone is refused with *Diamond group not found!*. |

---

## Edge Cases / Notes

- **No Upload Excel on this page.** New products are added one at a time with **Add Birthstone Product**, or by TCC Tech.
- **No progress line for Bulk Edit.** **Export Excel** is disabled while a bulk edit is running, but the bulk edit itself shows no progress.
- **Removing every category row.** **+** is part of each category row. If you remove every category row with **-**, there is no **+** left to add a new one, and you cannot move on because a category is required. Reload the form if this happens.
- **Status is per store.** The **Status** column shows the status for your store. A product TCC Tech has switched off for everyone does not appear on any storefront, whatever your own switch says.
- **Your own prices are kept.** Prices you set with **Bulk Edit** stay in place when TCC Tech updates the shared product.
- **Short description length.** **Sort description must be a 4 to 400 characters** appears when the short description has 4 characters or fewer.
