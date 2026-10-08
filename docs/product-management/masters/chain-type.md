---
sidebar_position: 4
id: chain-type
title: Chain Type Master
sidebar_label: Chain Type Master
---

# Chain Type Master

The **Chain Type Master** page manages the chain types offered with pendants, such as box, rope or cable chains. You can add chain types one at a time or in bulk from an Excel file.

---

## Chain Type Master Screen List

| Action | Description |
| ------ | ----------- |
| **Download** | Downloads a sample Excel file for bulk upload. See [Bulk Upload](#bulk-upload). |
| **upload File** | Select an Excel file (.xlsx or .xls) to upload chain types in bulk. |
| **Apply Changes** | Uploads the selected file. |
| **Add Chain Type** | Click the **Add Chain Type** button to create a new chain type. |
| **Edit** | Click the **Edit** icon to change a chain type. |
| **Delete** | Click the **Delete** icon and confirm with **YES** to remove a chain type. Click **NO** to keep it. |
| **Status** | Shows whether the chain type is **Active** or **Inactive**. |
| **Status Toggle** | Switch a chain type on or off directly from the list. |

The list shows the **Image**, **Name**, **Slug**, **GLB Identifier**, **Sort Code** and **Status** of each chain type, and can be sorted and paged. Hover over an image to see a larger preview.

:::note
This page has no search box.
:::

:::note
Without **Add** permission the **upload File**, **Apply Changes** and **Add Chain Type** buttons are disabled. Without **Edit** permission the **Edit** icon and the **Status Toggle** are disabled. Without **Delete** permission the **Delete** icon is disabled.
:::

---

### Steps to Add a New Chain Type

Click **Add Chain Type**, fill in the fields below and click **SUBMIT**. When editing, the button reads **EDIT**. Click **Cancel** to close without saving.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Chain Type Name** | ✅ | Display name of the chain type, for example Box, Rope or Cable. |
| **Sort Code** | ✅ | Sort code of the chain type. |
| **Slug** | ✅ | Slug of the chain type. Enter it yourself; it is not generated from the name. |
| **GLB Identifier** | ✅ | GLB identifier of the chain type. |
| **Upload Image** | ✅ | Image of the chain type. If it is missing, the message **Image is required** is shown. |

To add the image, drop a file on the upload area or click it to choose one. Allowed types are .jpg, .jpeg, .png, .gif, .webp, .bmp, .svg, .ico, .tiff and .tif, up to 20 MB. Click the **x** on the preview to remove the image.

:::note
The fields and the **SUBMIT** button need **Edit** permission, even when you add a new chain type.
:::

---

## Bulk Upload

1. Click **Download** to get the sample file **Sample_ChainType.xlsx**. It contains only the column headers.
2. Fill in one row per chain type and save the file.
3. Click **upload File** and select the file. The file name appears next to the button.
4. Click **Apply Changes** to upload it.

A progress bar shows the upload status. When the upload succeeds, a success message is shown and the list refreshes.

If some rows fail, the message **Upload failed at 99%. Please try again.** appears under the progress bar and an error table at the top of the page lists the **Row Id** and **Error Message** for each failed row. Correct those rows and upload the file again.
