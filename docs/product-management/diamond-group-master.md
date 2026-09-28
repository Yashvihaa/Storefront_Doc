---
sidebar_position: 4
id: diamond-group-master
title: Diamond Group Master
sidebar_label: Diamond Group Master
---

# Diamond Group Master

The **Diamond Group Master** stores the price per carat for each stone combination (stone, shape, carat size, color, clarity and cut). These prices are used to calculate the stone cost of products. You can manage combinations one at a time or update them in bulk from an Excel file.

---

## Diamond Group Master Screen List

| Action | Description |
| ------ | ----------- |
| **Export Excel** | Downloads all diamond group records as an Excel file. A progress bar shows the export status. |
| **Info** | Click the **info** icon next to Export Excel to see how the export and upload work together. |
| **Upload Excel** | Select an Excel file (.xlsx or .xls) to upload diamond group records in bulk. A progress bar shows the upload status. |
| **Filter** | Click the **filter** icon to show or hide the filter row. See [Filter](#filter). |
| **History** | Opens the **Diamond History** popup. See [History](#history). |
| **Add Diamond Group Master** | Opens the drawer to add a new record. |
| **Edit** | Click the **Edit** icon to update a record in the drawer. |
| **Delete** | Click the **Delete** icon and confirm to remove a record. |
| **Status (toggle)** | Switch a record on or off. |
| **Export Products** | Select one or more rows using the checkboxes, then click **Export Products** to export the selected records. |

### Diamond Group Master List Columns

| Column | Description |
| ------ | ----------- |
| **Stone** | Stone name. |
| **Shape** | Stone shape. |
| **Carat Size** | Carat size. |
| **MM Size** | Size in millimetres. |
| **Color** | Color grade. |
| **Clarity** | Clarity grade. |
| **Cut** | Cut grade. |
| **Natural Stone Price** | Price per carat for natural stones. |
| **Lab Grown Stone Price** | Price per carat for lab-grown stones. |
| **Min Carat Range** / **Max Carat Range** | Carat range the record applies to. |
| **Status** | Shows whether the record is **Active** or **Inactive**. |

---

## Export and Upload Excel

Use these two buttons to update pricing in bulk:

1. Click **Export Excel** to download the current pricing.
2. Change the prices in the downloaded file.
3. Click **Upload Excel** and select the edited file.

The upload bar fills as the file is sent. When the file reaches the server, the message **Uploaded. Waiting for server...** appears until processing finishes. If the upload fails, a red message is shown under the bar and an error table lists the **Row Id** and **Error Message** for each failed row. Correct those rows and upload the file again.

:::note
Export Excel and Upload Excel are disabled for users without **Add** permission, and while an upload is in progress.
:::

---

## Filter

Click the **filter** icon to show the filter row. Filter by any combination of:

- **Stone**
- **Shape**
- **Carat Size**
- **MM Size**
- **Color**
- **Clarity**
- **Cut**

Click **Filter** to apply the selection. The button is enabled once at least one value is selected. Click **clear** to reset the filters and reload the full list.

---

## Steps to Add a Diamond Group Master

Click **Add Diamond Group Master**, fill in the drawer and click **SUBMIT**. When editing, the button reads **EDIT**. Click **Cancel** to close without saving.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Select Stone** | ✅ | Stone for this group. |
| **Select Shape** | ✅ | Stone shape. |
| **Select Carat Size** | ✅ | Carat size. |
| **Select MM Size** | - | Size in millimetres. |
| **Select Color** | ✅ (diamond) | Shown and required only when the selected stone is a diamond. |
| **Select Clarity** | ✅ (diamond) | Shown and required only when the selected stone is a diamond. |
| **Select Cuts** | ✅ (gemstone) | Required when the selected stone is a gemstone. Optional for diamonds. |
| **Select Sevie Size** | - | Sieve size. |
| **Natural Stone Price/ct** | ✅ (one of two) | Price per carat for natural stones. Numbers only. |
| **Lab Grown Stone Price/ct** | ✅ (one of two) | Price per carat for lab-grown stones. Numbers only. |
| **Average Carat** | - | Numbers only. Must be between Min Carat Range and Max Carat Range. |
| **Min Carat Range** | ✅ | Numbers only. |
| **Max Carat Range** | ✅ | Numbers only. Must be greater than Min Carat Range. |

:::note
Fill in at least one of **Natural Stone Price/ct** and **Lab Grown Stone Price/ct**. You can fill in both.
:::

---

## History

Click **History** to open the **Diamond History** popup. It shows what changed on each day and lets you roll pricing back.

| Action | Description |
| ------ | ----------- |
| **Day list** | Changes are grouped by month and day, newest first. Click a day to expand it and see each changed diamond, **What changed** (old and new values) and the **Time** of the change. |
| **Revert** | Shown on each day. Returns every diamond changed that day to the values it had before that day. Other diamonds are not affected. |
| **Reset to original pricing** | Sets the **Natural Price** and **Lab Grown Price** of every diamond back to the pricing it had when first recorded. A confirmation popup lists each affected diamond with its current and original price. Click **Yes, reset pricing** to confirm. Disabled when all diamonds already have their original pricing. |
| **Undo** | After a Revert or Reset, a message bar appears with an **Undo** button. Click it to cancel the last action. |

:::note
Users without **Edit** permission can open the History popup but cannot use **Revert**, **Reset to original pricing** or **Undo**.
:::
