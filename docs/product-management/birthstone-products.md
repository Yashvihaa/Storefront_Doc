---
sidebar_position: 2
id: birthstone-products
title: Birthstone Products
sidebar_label: Birthstone Products
---

# Birthstone Products

The **Birthstone Products** list holds jewellery set with birthstones that customers can personalise. You can add products one at a time or import them in bulk from an Excel file.

---

## Birthstone Product Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Type in the search box to filter the list. Clearing the box reloads the full list. |
| **Download** | Downloads a sample Excel file with the columns required for bulk upload. |
| **Upload** | Select a filled Excel file (.xlsx or .xls). The selected file name appears next to the button. |
| **Apply** | Imports the selected file. See [Bulk Upload](#bulk-upload). |
| **Add Birthstone Product** | Opens the form to add a new birthstone product. |
| **View** | Click the **View** icon to open the product in read-only mode. |
| **Edit** | Click the **Edit** icon to modify the product. |
| **Delete** | Click the **Delete** icon and confirm to remove the product. |
| **Status (toggle)** | Switch the product on or off without opening it. |

### Birthstone Product List Columns

| Column | Description |
| ------ | ----------- |
| **Image** | Product image. |
| **Name** | Product name. |
| **SKU** | Product SKU. |
| **Category Name** | Category assigned to the product. |
| **Status** | Shows whether the product is **Active** or **Inactive**. |

---

## Bulk Upload

1. Click **Download** to get the sample file.
2. Fill in one product per row using the sample file's columns.
3. Click **Upload** and select the filled file.
4. Click **Apply** to import the products.

If any rows fail, an error table appears above the list showing the product details (row, product name or style number) and the **Error Message** for each row. Correct those rows and upload the file again.

---

## Add a New Birthstone Product

Click **Add Birthstone Product**. The form has two steps:

1. **Birthstone Product Basic Details**
2. **Metal & Gemstone Details**

Click **Next** to move to step 2, **Back** to return to step 1, and **Submit** to save.

### Step 1: Birthstone Product Basic Details

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Product SKU** | ✅ | Unique SKU for the product. |
| **Product Title** | ✅ | Name of the product. |
| **Product Short Description** | ✅ | 4 to 400 characters. |
| **Product Long Description** | ✅ | 20 to 2000 characters. |
| **Product Number** | - | Internal product number. |
| **Gemstone Count** | ✅ | Number of changeable gemstones the customer can choose. |
| **Keywords** | ✅ | Select one or more keywords. |
| **Gender** | - | Male, Female or Unisex. Multiple values allowed. |
| **Engraving Text Count** | - | Number of engraving fields. Entering a number adds that many **Engraving Label** / **Character Count** rows. |
| **Engraving Label** | - | Label for each engraving field (e.g. Left, Right). |
| **Character Count** | - | Maximum characters allowed for each engraving field. |
| **Category** | ✅ | Select a category. Use **+** to add another category row and **-** to remove one. |
| **Sub Category** | - | Options depend on the selected category. |
| **Sub Sub Category** | - | Options depend on the selected sub category. |
| **Labor charges** | - | Labour charge for the product. |
| **Finding Charge** | - | Finding charge for the product. |
| **Other Charge** | - | Any other charge for the product. |

:::note
The number of engraving rows must match **Engraving Text Count**, otherwise you cannot move to step 2.
:::

### Step 2: Metal & Gemstone Details

#### Size or Length

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Select size** | - | Shown for sized categories (e.g. rings). Multiple sizes allowed. |
| **Select Length** | - | Shown for measured categories (e.g. chains). Multiple lengths allowed. |

#### Metal Details

The table lists one row for every metal, karat and tone combination. **Metal**, **Karat** and **Metal Tone** are read-only.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **PLU No.** | - | Price look-up number for the row. |
| **Metal Weight** | ✅ | Enter for each combination you sell. |
| **Retail Price** | ✅ | Enter for each combination you sell. |

Only rows with both **Metal Weight** and **Retail Price** are saved. At least one row is required.

#### Gemstone Details

Click **Add Gemstone Details** to add a stone row. Click **-** on a row to remove it.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Stone Type** | ✅ | **Fix** (set permanently in the design) or **Changeable** (the customer chooses the birthstone). |
| **Stone Count** | - | Number of stones in the row. |
| **Stone** | - | The stone. |
| **Shape** | - | Stone shape. |
| **MM Size** | - | Stone size in millimetres. |
| **Color** | - | Stone color. |
| **Clarity** | - | Stone clarity. |
| **Cut** | - | Stone cut. |
| **Carat Size** | - | Stone carat size. |
| **Stone Weight** | - | Stone weight. |
| **Stone Pieces** | - | Number of stone pieces. |

Required fields depend on the stone type:

| Stone Type | Required Fields |
| ---------- | --------------- |
| **Fix** | Stone, Shape, Stone Weight, Stone Count |
| **Changeable** | Shape, Cut |

:::note
The number of **Changeable** rows must match the **Gemstone Count** entered in step 1. Fixed stones are not included in this count.
:::

#### Upload Image

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Upload Image** | ✅ | Product image. Recommended size 300 x 300. |
