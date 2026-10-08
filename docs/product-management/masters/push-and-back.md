---
sidebar_position: 14
id: push-and-back
title: Push Back Master
sidebar_label: Push Back Master
---

# Push Back Master

The **Push Back Master** manages the push-back options for stud earrings, that is, the backing that holds the earring post in place. You can add options one at a time or upload them in bulk from an Excel file.

---

## Push Back Master Screen List

| Action | Description |
| ------ | ----------- |
| **Download** | Downloads a sample Excel file (**Sample_PushBack.xlsx**) that contains only the column headings for a bulk upload. |
| **upload File** | Select an Excel file (.xlsx or .xls) to upload. The file name is shown next to the button. See [Bulk Upload](#bulk-upload). |
| **Apply Changes** | Uploads the selected file and imports its rows. |
| **Add Push Back** | Click the **Add Push Back** button to create a new push back. |
| **Edit** | Click the **Edit** icon to change a push back's details. |
| **Delete** | Click the **Delete** icon and confirm with **YES** to remove a push back. Click **NO** to keep it. |
| **Status** | Shows whether the push back is **Active** or **Inactive**. |
| **Status Toggle** | Switch a push back on or off directly from the list. |

The list shows the **Image**, **Name**, **Slug**, **Sort Code** and **Status** of each push back, and can be sorted and paged. This page has no search box.

:::note
**upload File**, **Apply Changes** and **Add Push Back** need **Add** permission. The **Edit** icon and the status toggle need **Edit** permission, and the **Delete** icon needs **Delete** permission. The drawer fields and the **SUBMIT** button are disabled without **Edit** permission, including when you add a new push back.
:::

---

## Bulk Upload

1. Click **Download** to get the sample file.
2. Fill in one push back per row under the column headings.
3. Click **upload File** and select the file.
4. Click **Apply Changes**.

A progress bar shows the upload status. When the file reaches the server, the message **Uploaded. Waiting for server...** appears until processing finishes, and the list then reloads. If the upload fails, a red message is shown under the bar and an error table at the top of the page lists the **Row Id** and **Error Message** for each failed row. Correct those rows and upload the file again.

---

### Steps to Add a New Push Back

Click **Add Push Back**, fill in the fields below and click **SUBMIT**. When editing, the button reads **EDIT**. Click **Cancel** to close without saving.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Push Back Name** | ✅ | Name of the backing, for example Butterfly or Screw. |
| **Sort Code** | ✅ | Short code for the push back. |
| **Slug** | ✅ | Slug for the push back. Enter it yourself. |
| **Push Back Type** | ✅ | **Push** or **Back**. |
| **Upload Image** | ✅ | Drop an image or click to upload. Accepts .jpg, .jpeg, .png, .gif, .webp, .bmp, .svg, .ico, .tiff and .tif files up to 20 MB. |
