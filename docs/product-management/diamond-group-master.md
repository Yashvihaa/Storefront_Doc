---
sidebar_position: 4
id: diamond-group-master
title: Diamond Group Master
sidebar_label: Diamond Group Master
---

# Diamond Group Master

## Overview

The **Diamond Group Master** stores the price per carat for each stone combination: stone, shape, carat size, MM size, color, clarity and cut. These prices are used to calculate the stone cost of products and configurators. You can manage combinations one at a time or update them in bulk from an Excel file, and roll back an upload from its history.

Each record holds a **Natural Price** and a **Lab Grown Price** per carat, and the carat range (**Min Carat** to **Max Carat**) it applies to. A stone on a product is matched to the record with the same stone, shape, color, clarity, cut and MM size whose carat range contains the stone's weight. On the **Add Normal Product** form, only stones that have at least one record here can be picked.

:::note[Who can use it]
Store administrators and users whose role includes **Diamond Group Master**. **Export Excel**, **Upload Excel** and **Add Diamond** need the **Add** permission. Changing the status, and **Revert** and **Reset to original pricing** in the history, need the **Edit** permission.
:::

:::info[Your prices or TCC Tech's prices]
Which diamonds you see depends on your store's [Price Display](../settings/price-display.md):

- **Own Pricing + Margin**: your own diamond records, which you can add, edit and upload.
- **TCC_TECH Pricing + Margin**: TCC Tech's diamonds for the configurators you have bought, read-only. The page shows the notice *Pricing is locked while you use TCC TECH Pricing + Margin. To add or change prices, switch to Own Pricing + Margin first.* with a **Go to Price Display** button, and every button that changes data is disabled.
:::

---

## Data Displayed

### Diamond Group Master Screen List

The card below the page title is headed **Diamonds** and shows the total number of records, for example *250 diamonds*.

| Action | Description |
| ------ | ----------- |
| **Export Excel** | Opens the **Export Excel** popup. See [Steps to Update Prices with Excel](#steps-to-update-prices-with-excel). |
| **Upload Excel** | Select an Excel file (.xlsx or .xls) to upload diamond group records in bulk. A thin progress line fills along the bottom of the button while the file is sent. |
| **View Documentation** | Opens this page. |
| **History** | Opens the **Diamond History** popup. See [History](#history). |
| **Add Diamond** | Opens the drawer to add a new record. |
| **Search** | Type in the search box (**Search stone, shape, color, clarity**) to narrow the rows on the current page. It also matches the cut. It does not search other pages. |
| **All** / **Natural** / **Lab Grown** | Switch above the table. **Natural** shows only rows that have a natural price, **Lab Grown** only rows that have a lab grown price, and hides the other price column. Like search, this narrows the rows on the current page. |
| **Filter** | Shows or hides the filter row. See [Filter](#filter). |
| **Edit** | Click the **Edit** icon to update a record in the drawer. |
| **Delete** | Click the **Delete** icon. A popup titled **Are you Sure?** asks *Are you Sure You would like to delete ?*; click **YES** to remove the record or **NO** to cancel. |
| **Status** | Click the status badge and choose the other status. A popup asks **Mark as Active?** or **Mark as Inactive?** with the message *This will affect the config settings and all config products.*; click **Okay** to confirm or **Cancel**. |
| **Export Products** | Shown when one or more rows are selected with the checkboxes. Requests an export of the products that use the selected records. On phones the button reads **Export**. |
| **Pagination** | Change the page or the number of rows per page (25, 50, 75 or 100) at the bottom of the table. |

### Diamond Group Master List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| (checkbox) | - | Select rows to use **Export Products**. | - |
| **Action** | - | **Edit** and **Delete** icons. | - |
| **Stone** | Text | Stone name. | *Diamond* |
| **Carat Size** | Text | Carat size. | *0.50* |
| **MM Size** | Text | Size in millimetres. | *5.1* |
| **Natural Price** | Amount | Price per carat for natural stones. Hidden when **Lab Grown** is selected. | *$1,000.00* |
| **Lab Grown Price** | Amount | Price per carat for lab-grown stones. Hidden when **Natural** is selected. | *$250.00* |
| **Shape / Color / Clarity / Cut** | Text | The shape, color, clarity and cut of the record in one column, separated by "/". Parts the record does not have are left out; a dash is shown when it has none. | *Round / GH / SI / Good* |
| **Carat Range** | Text | Min and max carat as one range. A range with only one end shows as **≥** or **≤**. | *1.00 - 2.00* |
| **Status** | Badge | **Active** or **Inactive**. Click it to change the status. | **Active** |

### Add / Edit Diamond Drawer

The drawer is titled **Add Diamond** (button **Add Diamond**) or **Edit Diamond** (button **Save Diamond**). Options are chosen by clicking the boxes in each row.

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

Fill in at least one of **Natural Price** and **Lab Grown Price**; a price of 0 counts as empty. If both are empty the message **Fill in the natural or lab grown price.** appears under both fields. You can fill in both. The number boxes ignore anything that is not a digit or a decimal point; other values show **Only numbers are allowed**.

### Upload Errors Popup

If an upload is rejected, an **Upload errors** popup shows the number of failed rows and lists them:

| Column | Description |
| ------ | ----------- |
| **Row Id** | The row of the Excel file that failed. |
| **Error Message** | Why the row was rejected. |

Click **Close** to dismiss the popup. Closing it also clears the progress line and the failure message.

### History

Click **History** to open the **Diamond History** popup. It lists every Excel upload, newest first and grouped by month, and lets you roll pricing back.

| Action | Description |
| ------ | ----------- |
| **Upload list** | Each upload shows its file name, whether it was an **Excel upload** or **Excel update**, and the date and time. Click an upload to expand it and see the diamonds it added or repriced, for example *Natural Price 1,000.00 to 2,000.00* with the percentage change. Use **Show more** to load further diamonds, or the search box inside the upload to find a diamond by stone, shape, carat or cut. |
| **Revert** | Shown on each upload. Confirm with **Yes, revert**. See [Revert and Reset](#revert-and-reset). |
| **Reset to original pricing** | Sets the prices of your diamonds back to TCC Tech's prices. Confirm with **Yes, reset pricing**. |

After a revert or reset, a green bar names the action and summarises how many diamonds were updated, re-created, unchanged or skipped. When no upload has been made yet, the popup shows **No uploads yet. Each Diamond Group Master Excel upload is listed here.**

---

## How It Works

### Steps to Add a Diamond Group Master

1. Click **Add Diamond**.
2. Pick the **Stone**, **Shape** and **Carat**, and the **Color** and **Clarity** (diamonds) or **Cut** (gemstones).
3. Enter a **Natural Price**, a **Lab Grown Price** or both, and the **Min Carat** and **Max Carat**.
4. Click **Add Diamond**. Click **Cancel** to close without saving.

To change a record, click its **Edit** icon, change the fields and click **Save Diamond**. A confirmation message appears and the list reloads.

The save is refused when:

- a record with the same stone, shape, color, clarity, cut and carat already exists, or
- the carat range overlaps another record with the same stone, shape, color, clarity and cut. The message reads *The provided carat range conflicts with an existing range. Please enter a separate, non-duplicate range.*

:::tip
If you change the stone to a gemstone, the **Color** and **Clarity** fields disappear and **Cut** becomes required. Color and clarity are not saved for gemstones.
:::

### Steps to Update Prices with Excel

1. Click **Export Excel**. In the popup choose what to include, then click **Export**:
   - **Existing Group Master**: every diamond group row as it is today.
   - **Custom Clarity**: only the color, clarity and cut combinations you pick. The popup loads the saved combinations as starting rows. Change a row by picking or typing a **Color**, **Clarity** and **Cut**, use **Add row** to add another, and use the bin icon to remove a row (one row always stays). Use **Add Custom** to type your own free-text color, clarity and cut rows. If no row has a value, the message **Pick a color, clarity or cut for at least one row** appears.
2. The Excel file downloads and the message **Exported N rows** (or **Export ready**) appears.
3. Change the prices in the downloaded file.
4. Click **Upload Excel** and select the edited file (.xlsx or .xls).

The export includes only active diamonds that belong to the configurators your store has bought. The file uses the same columns as the upload, so you can edit it and upload it again.

While the file is processed the progress line stops at 99%. When processing finishes, the line fills to 100%, **Uploaded. Waiting for server** is shown briefly and a success message appears. If processing takes longer than about 15 seconds, the red message **Upload failed at 99%. Please try again.** appears under the buttons. If rows are rejected, the [Upload Errors Popup](#upload-errors-popup) opens; correct those rows and upload the file again.

### Revert and Reset

- **Revert** puts prices back to the ones in that upload's file. A diamond in the file that still exists gets the file's prices. A diamond deleted since is restored. A diamond that no longer exists is created again from the file. Diamonds that are not in the file stay as they are. Rows that cannot be read, or that repeat an earlier row, are skipped.
- **Reset to original pricing** gives each of your diamonds the **Natural Price** and **Lab Grown Price** of TCC Tech's matching diamond. Nothing else changes. A diamond TCC Tech has no match for is skipped.

Running the same revert or reset again changes nothing more. Each changed diamond is recorded in the [Audit Log](../settings/audit-log.md).

### Filter

Click **Filter** to show the filter row. Filter by any combination of **Stone**, **Shape**, **Carat Size**, **MM Size**, **Color**, **Clarity** and **Cut**.

Click **Filter** in the row to apply the selection. The button is enabled once at least one value is selected. The filter is applied to all records, not only the current page, and returns you to page 1. Click **clear** to reset the filters and reload the full list. Hiding the filter row with the top **Filter** button also clears the selected values.

### Search, Sorting and Paging

- **Search** and the **All** / **Natural** / **Lab Grown** switch only narrow the rows on the current page.
- Records are listed newest first, 50 per page by default.
- Click the **Stone**, **Carat Size**, **MM Size**, **Natural Price** or **Lab Grown Price** header to sort the whole list. **Shape / Color / Clarity / Cut**, **Carat Range** and **Status** cannot be sorted.

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No records match | **No records to display** |
| Upload sent but not processed in time | **Upload failed at 99%. Please try again.** in red under the buttons. |
| A save, delete or status change fails | An error message appears as a notification. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How the Diamond Group Master uses it |
| ------ | ------------------------------------ |
| [Stone Master](./masters/stone-master.md) | The **Stone** options. Whether a stone is a diamond decides if **Color** and **Clarity** or **Cut** are asked for. |
| [Diamond Shape](./masters/diamond-shape.md), [Carat Size](./masters/carat-size.md), [MM Size](./masters/mm-size.md) | The **Shape**, **Carat** and **MM Size** options. |
| [Color](./masters/color.md), [Clarity](./masters/clarity.md), [Cut](./masters/cut.md) | The **Color**, **Clarity** and **Cut** options, also used by the **Custom Clarity** export. |
| [Price Display](../settings/price-display.md) | Decides whether you see and edit your own diamonds, or see TCC Tech's diamonds read-only. |
| The configurators your store has bought | The export only includes diamonds that belong to those configurators. With **TCC_TECH Pricing + Margin**, the list shows TCC Tech's diamonds for those configurators. |

### Modules That Depend On It

| Module | How it uses diamond prices |
| ------ | -------------------------- |
| [All Products](./all-products.md) | Stone prices of normal, variant and setting products. Only stones priced here can be picked on a normal product. |
| Configurator products ([Ring](./configurator-products/ring-configurator.md), [Three Stone](./configurator-products/three-stone-configurator.md), [Eternity Band](./configurator-products/eternity-band-configurator.md), [Bracelet](./configurator-products/bracelet-configurator.md), [Stud](./configurator-products/stud-configurator.md), [Pendant](./configurator-products/pendant-configurator.md)) | The **Price/Ct.** and stone prices in each configurator's price breakdown. |
| [Birthstone Products](./configurator-products/birthstone-products.md) | Birthstone stone rows are linked to a diamond record. |
| [Diamond Margin](../settings/margin-cost-center/diamond-margin.md) | The diamond margin is added on top of the price per carat set here. |

### What Changes If…

| Change | Effect |
| ------ | ------ |
| A price is changed, uploaded, reverted or reset | Stone costs, and so the prices of products and configurators that use that stone, change. |
| A record is set to **Inactive** | It affects the configurator settings and all configurator products, as the confirmation popup warns. It is also left out of the export. |
| A record is deleted | It is removed from the list and is no longer used for pricing. A **Revert** of an upload that contained it restores it. A record used by a birthstone product cannot be deleted. |
| The last record for a stone is removed | That stone can no longer be picked on the **Add Normal Product** form. |
| Price Display is switched to **TCC_TECH Pricing + Margin** | You see TCC Tech's diamonds read-only, and your own records are not used for pricing. |
| A new color, clarity or cut is typed in **Add Custom** | It is added to the Color, Clarity or Cut master when you export. |

---

## Edge Cases / Notes

- **Search and the origin switch only cover the current page.** Use **Filter** to search across every record.
- **Delete is blocked for linked records.** A record used by a birthstone product's stone row cannot be deleted. The message reads *This item is currently linked to other modules, Please remove or update the related records before attempting to delete it.*
- **Edit and Delete icons.** They are not switched off by role permissions. They are disabled only while pricing is locked.
- **No Pricing Display.** With **No Pricing Display**, the list also shows TCC Tech's diamonds and changes are refused, but the page does not show the lock notice.
- **Custom export adds master values.** A color, clarity or cut name typed in **Add Custom** that does not exist yet is created in the master, for every store.
- **Status flips.** Confirming the status popup switches the record to the other status.
- **Changes are logged.** Adding, editing, deleting and changing the status of a record are recorded in the [Audit Log](../settings/audit-log.md).
