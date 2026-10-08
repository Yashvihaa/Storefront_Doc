---
sidebar_position: 7
id: birthstone-products
title: Birthstone Products
sidebar_label: Birthstone Products
---

# Birthstone Products

The **Birthstone Products** list holds jewellery set with birthstones that customers can personalise. You can add products one at a time, or export and upload them in bulk with Excel files.

---

## Birthstone Product Screen List

| Action | Description |
| ------ | ----------- |
| **Export Excel** | Downloads all birthstone products as an Excel file (`Birthstone_products.xlsx`) with the **name**, **sku**, **category** and **status** of each product. The current search is ignored. A progress bar shows the export status. |
| **Info** | Click the **info** icon next to **Export Excel** to open the **Info** popup. Click **Close** to close it. |
| **Upload Excel** | Select an Excel file (.xlsx or .xls) to import birthstone products in bulk. The upload starts as soon as you pick the file. See [Bulk Upload](#bulk-upload). |
| **Search** | Type in the search box to search the list. The list updates shortly after you stop typing. Clear the box to show all products again. |
| **Download** | Downloads the sample Excel file (`Sample_birthstone_product_file.xlsx`) with the column headings needed for bulk upload. |
| **Add Birthstone Product** | Opens the form to add a new birthstone product. |
| **View** | Click the **View** icon to open the product in read-only mode. |
| **Edit** | Click the **Edit** icon to open the product form and change the product. |
| **Delete** | Click the **Delete** icon and confirm with **YES** to remove the product. Click **NO** to cancel. |
| **Status Toggle** | Switch a product on or off directly from the list. |

The list can be sorted by **Name**, **SKU** and category, and paged with 25, 50, 75 or 100 rows per page (50 by default). The table toolbar also has icons to show column filters, show or hide columns, change row spacing and switch to full screen.

### Birthstone Product List Columns

| Column | Description |
| ------ | ----------- |
| **Action** | **View**, **Edit** and **Delete** icons. |
| **Image** | Product image. Hover over it to see a larger preview. |
| **Name** | Product name. |
| **SKU** | Product SKU. |
| *(category)* | Category name of the product. This column has no heading. |
| **Status** | Shows whether the product is **Active** or **Inactive**. |
| **Status** | Toggle to switch the product on or off. |

:::note
**Add Birthstone Product**, **Download**, **Export Excel** and **Upload Excel** are disabled for users without **Add** permission. The **View**, **Edit** and **Delete** icons need **View**, **Edit** and **Delete** permission, and the status toggle needs **Edit** permission.
:::

---

## Bulk Upload

1. Click **Download** to get the sample file.
2. Fill in one product per row using the sample file's columns.
3. Click **Upload Excel** and select the filled file.

The upload bar fills while the file is processed. When the upload succeeds, a success message appears and the list reloads.

If the upload fails, an error message appears. When the server returns row errors, an error table appears at the top of the list with two columns:

| Column | Description |
| ------ | ----------- |
| **Product Details.** | The **Row Id**, **Product Name** and/or **Style No** of the failed row. |
| **Error Message** | Why the row was rejected. |

Correct those rows and upload the file again.

:::note
**Upload Excel** is disabled while an upload is in progress.
:::

---

## Add a New Birthstone Product

Click **Add Birthstone Product**. The form has two steps:

1. **Birthstone Product Basic Details**
2. **Metal & Gemstone Details**

Click **Next** to move to step 2, **Back** to return to step 1, and **Submit** to save. When the product is saved, a success message appears and you return to the list. The **Back** button at the top of the page takes you back to the previous page without saving.

When you open a product with **Edit**, the same form opens with the saved values filled in.

### Step 1: Birthstone Product Basic Details

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Product SKU** | ✅ | SKU of the product. |
| **Product Title** | ✅ | Name of the product. |
| **Product Short Description** | ✅ | Short text about the product. |
| **Product Long Description** | ✅ | Rich text editor. Must contain at least 20 characters of text. |
| **Product Number** | - | Internal product number. |
| **Gemstone Count** | ✅ | Number of **Changeable** gemstones the customer can choose. |
| **Keywords** | ✅ | Select one or more keywords. |
| **Gender** | - | **Male**, **Female** or **Unisex**. You can select more than one. |
| **Engraving Text Count** | - | Number of engraving fields. Starts at 1. Changing the number adds or removes **Engraving Label** / **Character Count** rows to match. |
| **Engraving Label** | - | Label for each engraving field (for example Left or Right). |
| **Character Count** | - | Maximum number of characters allowed in each engraving field. |
| **Category** | ✅ | Select a category. Click **+** to add another category row and **-** to remove a row. The first row is required. |
| **Sub Category** | - | Options depend on the selected category. |
| **Sub Sub Category** | - | Options depend on the selected sub category. |
| **Labor charges** | - | Labor charge for the product. Defaults to 0. |
| **Finding Charge** | - | Finding charge for the product. Defaults to 0. |
| **Other Charge** | - | Any other charge for the product. Defaults to 0. |

When you click **Next**, the form checks the fields in this order:

1. The required fields above. Missing fields are marked with a message such as **Product name is required**, **Product sku is required**, **Keyword is required** or **Long description must be a 20 to 2000 characters!**.
2. A category in the first category row (**please select category**).
3. The number of engraving rows matches **Engraving Text Count** (**Engraving data not match with engraving count**).

### Step 2: Metal & Gemstone Details

#### Size or Length

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Select size** | - | Shown only when the category in the first category row uses sizes. Lists the sizes linked to that category. You can select more than one. |
| **Select Length** | - | Shown only when the category in the first category row uses lengths. Lists the lengths linked to that category. You can select more than one. |

#### Metal Details

The table lists one row for every metal, karat and metal tone combination: each gold karat with each gold tone, and each silver and platinum tone. **Metal**, **Karat** and **Metal Tone** are read-only.

| Column | Required | Remarks |
| ------ | -------- | ------- |
| **PLU NO.** | - | Price look-up number for the row. |
| **Metal Weight** | ✅ | Enter for each combination you sell. |
| **Retail Price** | ✅ | Enter for each combination you sell. |

Only rows with both **Metal Weight** and **Retail Price** are saved. At least one such row is required. When editing, clearing the weight or price of a saved row removes that combination.

#### Gemstone Details

Click **Add Gemstone Details** to add a stone row. Click **-** in the **Delete** column to remove a row. Hover over the info icon on the button to see a reminder that **Gemstone Count** covers only **Changeable** stones.

| Column | Required | Remarks |
| ------ | -------- | ------- |
| **Stone Type** | - | **Fix** (set permanently in the design) or **Changeable** (the customer chooses the birthstone). Decides which other columns are required. |
| **Count** | - | Number of stones in the row. |
| **Stone** | - | The stone. |
| **Shape** | - | Stone shape. |
| **MM Size** | - | Stone size in millimetres. |
| **Color** | - | Stone color. |
| **Clarity** | - | Stone clarity. |
| **Cut** | - | Stone cut. |
| **carat size** | - | Stone carat size. |
| **Stone Weight** | - | Stone weight. |
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
| **Upload Image** | ✅ | One product image. Drag a file onto the box or click it to browse. Accepts PNG, JPG, JPEG, GIF and SVG files up to 10 MB. The label shows the aspect ratio guide **300 x 300**. Click the **x** next to the file or **Remove** to clear it. |

:::tip
When editing a product that already has an image, click **Remove** first and then upload the new image, so that the new image is saved.
:::

When you click **Submit**, the form checks the following and shows the first problem it finds:

1. An image is uploaded (**Image is required**).
2. At least one metal row has both **Metal Weight** and **Retail Price** (**Metal Data is required**).
3. The number of **Changeable** rows matches **Gemstone Count** (**Gemstone detail data not match with gemstone count**).
4. Each **Fix** and **Changeable** row has its required columns. The message names the row number.

---

## View a Birthstone Product

Click the **View** icon in the list to open the product in read-only mode. Text and number fields are read-only, **+** and **Add Gemstone Details** are hidden, the **-** buttons and image upload are disabled, and there is no **Submit** button. Use **Next** and **Back** to move between the two steps.
