---
sidebar_position: 3
id: diamond-range
title: Diamond Range
sidebar_label: Diamond Range
---

# Diamond Range

The **Diamond Range Management** module lets you define carat ranges for each diamond shape. Each range has a minimum and maximum carat weight and a reference carat value that falls inside it.

---

## Diamond Range Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Use the search box to find diamond ranges. The list updates as you type. |
| **Add Diamond Range** | Click the **Add Diamond Range** button to open the form for a new range. |
| **Edit** | Click the **Edit** icon to change an existing range. |
| **Delete** | Click the **Delete** icon to remove a range. Click **YES** in the confirmation popup to delete it, or **NO** to cancel. |
| **Status** | Shows whether the range is **Active** or **Inactive**. Use the toggle switch to activate or deactivate the range. |
| **Download / Upload / Apply** | Add or update many ranges at once from an Excel file. See [Bulk Upload](#bulk-upload). |

The list shows the following columns:

| Column | Description |
| ------ | ----------- |
| **Diamond Shape** | Shape the range applies to. |
| **Carat Value** | Reference carat value for the range. |
| **Min Diamond Range** | Lower carat limit of the range. |
| **Max Diamond Range** | Upper carat limit of the range. |

---

### Steps to Add a New Diamond Range

Click **Add Diamond Range**. The **Add Diamond Range Management** panel opens on the right. Fill in the fields and click **SUBMIT** (or **EDIT** when changing an existing range). Click **Cancel** to close the panel without saving.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| Carat Value | ✅ | Reference carat value. It must be between the **Min Diamond Range** and **Max Diamond Range** values. |
| Diamond Shape | ✅ | Choose the shape the range applies to. The shape cannot be changed when editing an existing range. |
| Min Diamond Range | ✅ | Lower carat limit. Must be greater than 0 and not more than 100. |
| Max Diamond Range | ✅ | Upper carat limit. Must be greater than **Min Diamond Range** and not more than 100. |

---

## Bulk Upload

Use the buttons above the list to add or update several ranges from an Excel file.

| Button | Description |
| ------ | ----------- |
| **Download** | Downloads a sample Excel file with the required column headings. |
| **upload** | Select the completed Excel file. The selected file name appears next to the button. |
| **Apply** | Processes the selected file and updates the list. |

If any rows in the file cannot be imported, a table appears above the list showing the **Row Id** and **Error Message** for each rejected row. Correct those rows and upload the file again.
