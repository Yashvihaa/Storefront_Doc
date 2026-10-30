---
sidebar_position: 4
id: diamond-group-master
title: Diamond Group Master
sidebar_label: Diamond Group Master
---

# Diamond Group Master

The **Diamond Group Master** stores the price per carat for each stone combination (stone, shape, carat size, MM size, color, clarity and cut). These prices are used to calculate the stone cost of products. You can manage combinations one at a time or update them in bulk from an Excel file.

Each record holds a **Natural Price** and a **Lab Grown Price** per carat, and the carat range (**Min Carat** to **Max Carat**) it applies to. A stone on a product is matched to the record with the same stone, shape, color, clarity, cut and MM size whose carat range contains the stone's weight. On the **Add Normal Product** form, only stones that have at least one record here can be picked.

:::note
Changing a record's status affects the configurator settings and all configurator products, as the confirmation popup warns.
:::

---

## Diamond Group Master Screen List

The page is titled **DIAMOND GROUP MASTER**. The card below it is headed **Diamonds** and shows the total number of records, for example "250 diamonds".

| Action | Description |
| ------ | ----------- |
| **Export Excel** | Opens the **Export Excel** popup. See [Export and Upload Excel](#export-and-upload-excel). |
| **Upload Excel** | Select an Excel file (.xlsx or .xls) to upload diamond group records in bulk. A thin progress line fills along the bottom of the button while the file is sent. |
| **History** | Opens the **Diamond History** popup. See [History](#history). |
| **Add Diamond** | Opens the drawer to add a new record. |
| **Search** | Type in the search box (**Search stone, shape, color, clarity**) to narrow the rows on the current page. It does not search other pages. |
| **All** / **Natural** / **Lab Grown** | Switch above the table. **Natural** shows only rows that have a natural price, **Lab Grown** only rows that have a lab grown price, and hides the other price column. Like search, this narrows the rows on the current page. |
| **Filter** | Click **Filter** to show or hide the filter row. See [Filter](#filter). |
| **Edit** | Click the **Edit** icon to update a record in the drawer. |
| **Delete** | Click the **Delete** icon. A popup asks **Are you Sure?**; click **YES** to remove the record or **NO** to cancel. |
| **Status** | Click the status badge and choose the other status. A popup asks **Mark as Active?** or **Mark as Inactive?** with the message "This will affect the config settings and all config products."; click **Okay** to confirm or **Cancel**. |
| **Export Products** | Select one or more rows using the checkboxes, then click **Export Products** to export the products that use the selected records. |
| **Pagination** | Change the page or the number of rows per page at the bottom of the table. Records are listed newest first, 50 per page by default. |

Most columns can be sorted by clicking the column header. The combined **Shape / Color / Clarity / Cut** and **Carat Range** columns cannot be sorted.

:::note
**Export Excel**, **Upload Excel** and **Add Diamond** are disabled for users without **Add** permission, and **Export Excel** and **Upload Excel** are also disabled while an upload is in progress. Changing the status needs **Edit** permission. The **Edit** and **Delete** icons on this screen are always clickable.
:::

### Diamond Group Master List Columns

| Column | Description |
| ------ | ----------- |
| (checkbox) | Select rows to use **Export Products**. |
| **Action** | **Edit** and **Delete** icons. |
| **Stone** | Stone name. |
| **Carat Size** | Carat size. |
| **MM Size** | Size in millimetres. |
| **Natural Price** | Price per carat for natural stones. Hidden when **Lab Grown** is selected. |
| **Lab Grown Price** | Price per carat for lab-grown stones. Hidden when **Natural** is selected. |
| **Shape / Color / Clarity / Cut** | The shape, color, clarity and cut of the record in one column, separated by "/". Parts the record does not have are left out; a dash is shown when it has none. |
| **Carat Range** | Min and max carat as one range, for example "1.00 - 2.00". |
| **Status** | **Active** or **Inactive**. Click it to change the status. |

---

## Export and Upload Excel

Use these two buttons to update pricing in bulk:

1. Click **Export Excel**. In the popup choose what to include, then click **Export**:
   - **Existing Group Master**: every diamond group row as it is today.
   - **Custom Clarity**: only the color, clarity and cut combinations you pick. The popup loads the saved combinations as starting rows. Change a row by picking or typing a **Color**, **Clarity** and **Cut**, use **Add row** to add another, and use the bin icon to remove a row (one row always stays). Use **Add Custom** to type your own free-text color, clarity and cut rows. If no row has a value, the message **Pick a color, clarity or cut for at least one row** appears.
2. The Excel file downloads and the message **Exported N rows** (or **Export ready**) appears.
3. Change the prices in the downloaded file.
4. Click **Upload Excel** and select the edited file (.xlsx or .xls).

While the file is processed the progress line stops at 99%. When the server finishes, the line fills to 100%, **Uploaded. Waiting for server** is shown briefly and the server's success message appears. If processing takes longer than about 15 seconds, the red message **Upload failed at 99%. Please try again.** appears under the buttons.

If the upload is rejected, an **Upload errors** popup lists the **Row Id** and **Error Message** for each failed row. Correct those rows and upload the file again. Click **Close** to dismiss the popup.

---

## Filter

Click **Filter** to show the filter row. Filter by any combination of:

- **Stone**
- **Shape**
- **Carat Size**
- **MM Size**
- **Color**
- **Clarity**
- **Cut**

Click **Filter** in the row to apply the selection. The button is enabled once at least one value is selected. The filter is applied to all records, not only the current page. Click **clear** to reset the filters and reload the full list. Hiding the filter row with the top **Filter** button also clears the selected values.

---

## Steps to Add a Diamond Group Master

Click **Add Diamond**, fill in the drawer titled **Add Diamond** and click **Add Diamond** at the bottom. When editing, the drawer is titled **Edit Diamond** and the button reads **Save Diamond**. Click **Cancel** to close without saving. Options are chosen by clicking the boxes in each row.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Stone** | ✅ | Stone for this group. Error: **Stone is required**. |
| **Shape** | ✅ | Stone shape. Error: **Shape is required**. |
| **Carat** | ✅ | Carat size. Error: **Carat Size is required**. |
| **MM Size** | - | Size in millimetres. |
| **Color** | ✅ (diamond) | Shown only when the selected stone is a diamond (hint: D colourless to K faint). Error: **Color is required**. |
| **Clarity** | ✅ (diamond) | Shown only when the selected stone is a diamond (hint: Flawless to Included). Error: **Clarity is required**. |
| **Cut** | ✅ (gemstone) | Required when the selected stone is a gemstone. Optional for diamonds. Error: **Cuts is required**. |
| **Sieve Size** | - | Sieve size. |
| **Natural Price** (/ ct) | ✅ (one of two) | Price per carat for natural stones. Numbers only. |
| **Lab Grown Price** (/ ct) | ✅ (one of two) | Price per carat for lab-grown stones. Numbers only. |
| **Min Carat** | ✅ | Numbers only. Error: **Min Carat Range is required**. |
| **Max Carat** | ✅ | Numbers only. Must be greater than Min Carat. Error: **Max Carat Range must be greater than Min Carat Range**. |
| **Average Carat** | - | Numbers only. Must be between Min Carat and Max Carat. Errors: **Average Carat must be greater than or equal to Min Carat Range**, **Average Carat must be less than or equal to Max Carat Range**. |

:::note
Fill in at least one of **Natural Price** and **Lab Grown Price**; a price of 0 counts as empty. If both are empty the message **Fill in the natural or lab grown price.** appears under both fields. You can fill in both. The number boxes ignore anything that is not a digit or a decimal point; other values show **Only numbers are allowed**.
:::

:::tip
If you change the stone to a gemstone, the **Color** and **Clarity** fields disappear and **Cut** becomes required. Color and clarity are not saved for gemstones.
:::

---

## History

Click **History** to open the **Diamond History** popup. It lists every Excel upload, newest first and grouped by month, and lets you roll pricing back.

| Action | Description |
| ------ | ----------- |
| **Upload list** | Each upload shows its file name, whether it was an **Excel upload** or **Excel update**, and the date and time. Click an upload to expand it and see the diamonds it added or repriced, for example "Natural Price 1,000.00 to 2,000.00" with the percentage change. Use **Show more** to load further diamonds, or the search box inside the upload to find a diamond by stone, shape, carat or cut. |
| **Revert** | Shown on each upload. After you confirm with **Yes, revert**, diamond prices go back to the ones in that upload's file and diamonds removed since are restored. Diamonds that are not in that file stay as they are. |
| **Reset to original pricing** | Sets the **Natural Price** and **Lab Grown Price** of every diamond back to its original pricing. Other details stay the same. Confirm with **Yes, reset pricing**. |

After a revert or reset, a green bar names the action and summarises how many diamonds were updated, re-created, unchanged or skipped. When no upload has been made yet, the popup shows **No uploads yet. Each Diamond Group Master Excel upload is listed here.**

:::note
Users without **Edit** permission can open the History popup and read the changes, but **Revert** and **Reset to original pricing** are disabled for them.
:::
