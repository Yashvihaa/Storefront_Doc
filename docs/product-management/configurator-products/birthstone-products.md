---
sidebar_position: 7
id: birthstone-products
title: Birthstone Products
sidebar_label: Birthstone Products
---

# Birthstone Products

The **Birthstone Products** list holds jewellery set with birthstones that customers can personalise. You can add products one at a time, or export and upload them in bulk with Excel files. The list screen is titled **PRODUCT LIST**.

---

## Birthstone Product Screen List

| Action | Description |
| ------ | ----------- |
| **Export Excel** | Downloads all birthstone products as an Excel file (`Birthstone_products.xlsx`) with the **name**, **sku**, **category** and **status** (**Active** or **Inactive**) of each product. The current search is ignored. A thin progress line fills along the bottom of the button. |
| **Upload Excel** | Select an Excel file (.xlsx or .xls) to import birthstone products in bulk. The upload starts as soon as you pick the file. See [Bulk Upload and Bulk Edit](#bulk-upload-and-bulk-edit). |
| **View Documentation** | Opens this page of the user guide in a new tab. |
| **Search** | Type in the search box to search the list. The list updates shortly after you stop typing. Clear the box to show all products again. |
| **Download** | Downloads the sample Excel file (`Sample_birthstone_product_file.xlsx`). It contains only the column headings needed for bulk upload, with no sample rows. |
| **Bulk Edit** | Click **Bulk Edit** and select an Excel file (.xlsx or .xls) to update existing products. The update starts as soon as you pick the file, and its status is shown on the **Upload Excel** progress line. |
| **Filter** | Shows or hides a row of filter boxes under the column headings. Typing in a box narrows the rows currently shown on the page. The **Image** column has no filter. |
| **Add Birthstone Product** | Opens the form to add a new birthstone product. |
| **View** | Click the **View** icon to open the product in read-only mode. |
| **Edit** | Click the **Edit** icon to open the product form and change the product. |
| **Delete** | Click the **Delete** icon (**Delete Product**). A dialog titled **Are you Sure?** asks **Are you Sure You would like to delete ?**. Click **YES** to remove the product or **NO** to cancel. The server's message is shown once the product is removed and the list reloads. |
| **Status Toggle** | Switch a product on or off directly from the list. **Successfully updated** appears and the list reloads. |

### Birthstone Product List Columns

| Column | Description |
| ------ | ----------- |
| **Action** | **View**, **Edit** and **Delete** icons. |
| **Image** | Product image. Hover over it to see a larger preview. A placeholder is shown when the product has no image. |
| **Name** | Product name. |
| **SKU** | Product SKU. |
| *(category)* | Category name of the product. This column has no heading. |
| **Status** | Shows whether the product is **Active** or **Inactive**. |
| **Status** (toggle) | Switch to turn the product on or off. Hover to see **Enable/Disable**. |

The newest product is listed first. The list can be sorted by **Name**, **SKU** and the category column by clicking the heading; the image and the two status columns cannot be sorted. It is paged with 25, 50, 75 or 100 rows per page (50 by default). While the list loads, placeholder rows are shown; when there are no products, the table shows **No records to display**.

:::note
**Add Birthstone Product**, **Download**, **Export Excel** and **Upload Excel** are disabled for users without **Add** permission. **Bulk Edit** and the status toggle need **Edit** permission. The **View**, **Edit** and **Delete** icons need **View**, **Edit** and **Delete** permission. **Export Excel** and **Upload Excel** are also disabled while an upload or bulk edit is in progress.
:::

---

## Bulk Upload and Bulk Edit

1. Click **Download** to get the sample file.
2. Fill in one product per row using the sample file's columns.
3. To add new products, click **Upload Excel** and select the filled file. To update existing products, click **Bulk Edit** and select the file.

The progress line fills while the file is processed, for both uploads and bulk edits. When the file is accepted, a success message appears and the list reloads. The error table is cleared after a successful upload or bulk edit.

If the file is rejected, an error message appears. When the server returns row errors, an error table appears at the top of the list with two columns:

| Column | Description |
| ------ | ----------- |
| **Product Details.** | The **Row Id**, **Product Name** and/or **Style No** of the failed row. |
| **Error Message** | Why the row was rejected. |

Correct those rows and upload the file again.

---

## Add a New Birthstone Product

Click **Add Birthstone Product**. The form has two steps, shown in a progress bar at the top:

1. **Birthstone Product Basic Details**
2. **Metal & Gemstone Details**

Above the form, the **Back** button on the left returns you to the previous page without saving. On the right, **Next** moves from step 1 to step 2. On step 2, **Previous Step** returns to step 1 and **Submit** saves the product. When the product is saved, a success message appears and you return to the list.

When you open a product with **Edit**, the same form opens with the saved values filled in. Saving an edit also returns you to the list.

### Step 1: Birthstone Product Basic Details

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Product SKU** | ✅ | SKU of the product. |
| **Product Title** | ✅ | Name of the product. |
| **Product Short Description** | ✅ | Short text about the product. |
| **Product Long Description** | ✅ | Rich text editor. Must contain at least 20 characters of text (formatting does not count). |
| **Product Number** | - | Internal product number. |
| **Gemstone Count** | ✅ | Number of **Changeable** gemstones the customer can choose. Fixed stones are not counted. |
| **Keywords** | ✅ | Select one or more keywords. |
| **Gender** | - | **Male**, **Female** or **Unisex**. You can select more than one. |
| **Engraving Text Count** | - | Number of engraving fields. Starts at 1. Changing the number adds or removes **Engraving Label** / **Character Count** rows to match. |
| **Engraving Label** | - | Label for each engraving field (for example Left or Right). |
| **Character Count** | - | Maximum number of characters allowed in each engraving field. |
| **Category** | ✅ | Type the category name. The first row is required. Click **+** to add another category row and **-** to remove a row. |
| **Sub Category** | - | Type the sub category name. |
| **Sub Sub Category** | - | Type the sub sub category name. |
| **Labor charges** | - | Labor charge for the product. Defaults to 0. |
| **Finding Charge** | - | Finding charge for the product. Defaults to 0. |
| **Other Charge** | - | Any other charge for the product. Defaults to 0. |

Categories are typed as free text, not picked from a list, so spell them exactly as you want them to appear. Leaving **Sub Category** or **Sub Sub Category** empty clears it.

:::note
**+** is part of each category row. If you remove every category row with **-**, there is no **+** left to add a new one, and you cannot move on because a category is required. Reload the form if this happens.
:::

When you click **Next**, the form checks the fields in this order:

1. The required fields above. Missing fields are marked with a message under the field: **Product name is required**, **Product sku is required**, **Sort description must be a 4 to 400 characters** (shown when the short description is empty), **Long description must be a 20 to 2000 characters!**, **Keyword is required** or **Gemstont count is required**.
2. A category in the first category row (**Please enter a category**).
3. The number of engraving rows matches **Engraving Text Count** (**Engraving data not match with engraving count**).

### Step 2: Metal & Gemstone Details

#### Size or Length

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Select size** | - | Shown only when sizes are set up for your store. You can select more than one. |
| **Select Length** | - | Shown only when lengths are set up for your store. You can select more than one. |

#### Metal Details

The table lists one row for every metal, karat and metal tone combination: each gold karat with each gold tone, and each silver and platinum tone. **Metal**, **Karat** and **Metal Tone** are read-only.

| Column | Required | Remarks |
| ------ | -------- | ------- |
| **PLU NO.** | - | Price look-up number for the row. |
| **Metal Weight** | ✅ | Number. Enter for each combination you sell. |
| **Retail Price** | ✅ | Number. Enter for each combination you sell. |

Only rows with both **Metal Weight** and **Retail Price** are saved. At least one such row is required. When editing, clearing the weight or price of a saved row removes that combination.

#### Gemstone Details

Click **Add Gemstone Details** to add a stone row. Click **-** in the **Delete** column to remove a row. Hover over the info icon on the button to see a reminder that **Gemstone Count** covers only **Changeable** stones.

| Column | Required | Remarks |
| ------ | -------- | ------- |
| **Stone Type** | - | **Fix** (set permanently in the design) or **Changeable** (the customer chooses the birthstone). Empty on a new row. Decides which other columns are required. A row with no stone type is not checked or counted. |
| **Count** | - | Number of stones in the row. |
| **Stone** | - | The stone. |
| **Shape** | - | Stone shape. |
| **MM Size** | - | Stone size in millimetres. |
| **Color** | - | Stone color. |
| **Clarity** | - | Stone clarity. |
| **Cut** | - | Stone cut. |
| **carat size** | - | Stone carat size. |
| **Stone Weight** | - | Stone weight (number). |
| **Stone Pieces/count** | - | Same value as **Count**. Changing one changes the other. |

Required columns depend on the stone type:

| Stone Type | Required Columns |
| ---------- | ---------------- |
| **Fix** | Stone, Shape, Stone Weight and Count |
| **Changeable** | Shape and Cut |

:::note
The number of **Changeable** rows must equal the **Gemstone Count** entered in step 1. **Fix** stones are not included in this count.
:::

#### Upload Image

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Upload Image** | ✅ | One product image. Drag a file onto the box (**Drop files here or click to upload.**) or click it to browse. Accepts PNG, JPG, JPEG, GIF and SVG files up to 10 MB. The label shows the aspect ratio guide **300 x 300**. The chosen file is shown with its name and size; click **Remove** to clear it. A file that is too large or of another type is rejected with **You can only upload maximum size of 10 MB.** |

:::tip
When editing a product that already has an image, click **Remove** first and then upload the new image. If you do not remove the saved image, the product is saved with the image it already has and a newly chosen file is ignored.
:::

When you click **Submit**, the form checks the following and shows the first problem it finds:

1. An image is uploaded (**Image is required**). This applies to a new product, and to an edited product whose saved image was removed.
2. At least one metal row has both **Metal Weight** and **Retail Price** (**Metal Data is required**).
3. The number of **Changeable** rows matches **Gemstone Count** (**Gemstone detail data not match with gemstone count**).
4. Each **Fix** and **Changeable** row has its required columns. The message names the row number, for example **Row 2 : Please enter fix stone, diamond shape, stone weight and stone count in diamond detail** or **Row 2 : Please enter changeble stone, diamond shape and stone cut in diamond detail**.

For a new product, the details are saved first and the image is uploaded right after.

---

## View a Birthstone Product

Click the **View** icon in the list to open the product in read-only mode. Text and number fields are read-only, **+** and **Add Gemstone Details** are hidden, the **-** buttons and image upload are disabled, and there is no **Submit** button. Use **Next** and **Previous Step** to move between the two steps.
