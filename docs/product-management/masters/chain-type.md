---
sidebar_position: 4
id: chain-type
title: Chain Type Master
sidebar_label: Chain Type Master
---

# Chain Type Master

The **Chain Type Master** page manages the chain types offered with pendants, such as box, rope or cable chains. Each chain type has a name, sort code, slug, GLB identifier and image. The [Pendant Configurator](../configurator-products/pendant-configurator.md) page has a **Chain Type Pendant Export** for pendants by chain type. You can add chain types one at a time or in bulk from an Excel file.

---

## Chain Type Master Screen List

| Action | Description |
| ------ | ----------- |
| **Download** | Downloads a sample Excel file, **Sample_ChainType.xlsx**, for bulk upload. It contains only the column headings. See [Bulk Upload](#bulk-upload). |
| **upload File** | Select an Excel file (.xlsx or .xls) to upload chain types in bulk. The file name appears next to the button. |
| **Apply Changes** | Uploads the selected file. |
| **Add Chain Type** | Click the **Add Chain Type** button to open the **Add Chain Type** drawer and create a new chain type. |
| **Filter** | Click **Filter** to show or hide a filter box under each column heading. Filtering applies to the rows on the current page. |
| **Edit** | Click the **Edit** icon to open the **Edit Chain Type** drawer and change a chain type. |
| **Delete** | Click the **Delete** icon. A box titled **Are you Sure?** asks you to confirm; click **YES** to delete the chain type or **NO** to keep it. If the deletion is not allowed, an error message is shown and the chain type stays in the list. |
| **Status** | Shows whether the chain type is **Active** or **Inactive**. |
| **Status Toggle** | Switch a chain type on or off directly from the list. The change is saved immediately, without a confirmation box. |

The **View Documentation** button at the top right of the page opens this guide.

### Chain Type List Columns

| Column | Description |
| ------ | ----------- |
| **Action** | The **Edit** and **Delete** icons. |
| **Image** | Picture of the chain type. Hover over it to see a larger preview. |
| **Name** | Name of the chain type. |
| **Slug** | The slug you entered. |
| **GLB Identifier** | The GLB identifier you entered. |
| **Sort Code** | The sort code you entered. |
| **Status** | An **Active** or **Inactive** badge, followed by the on/off switch. |

Click a column heading to sort by it. The **Action**, **Image** and **Status** columns cannot be sorted. The newest chain types are shown first, 50 rows per page by default; use the page controls under the list to move between pages or to show 25, 50, 75 or 100 rows.

:::note
This page has no **Search** box and no **Info** button.
:::

:::note
Without **Add** permission the **upload File**, **Apply Changes** and **Add Chain Type** buttons are disabled. Without **Edit** permission the **Edit** icon and the **Status Toggle** are disabled. Without **Delete** permission the **Delete** icon is disabled. **Download** is always available.
:::

---

### Steps to Add a New Chain Type

Click **Add Chain Type**, fill in the fields below and click **Add Chain Type** at the bottom of the drawer. When editing, the same button reads **Save Chain Type**. Click **Cancel** to close without saving.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Chain Type Name** | ✅ | Display name of the chain type, for example Box, Rope or Cable. |
| **Sort Code** | ✅ | Sort code of the chain type. |
| **Slug** | ✅ | Slug of the chain type. Enter it yourself; it is not generated from the name. |
| **GLB Identifier** | ✅ | GLB identifier of the chain type. |
| **Upload Image** | ✅ | Image of the chain type. If it is missing, the message **Image is required** is shown. |

An empty text field shows **This Field is required**.

To add the image, drop a file on the upload area or click it to choose one. Only one image can be used. Allowed types are .jpg, .jpeg, .png, .gif, .webp, .bmp, .svg, .ico, .tiff and .tif, up to 20 MB. A file of another type shows **Only allowed image file types can be uploaded** followed by the allowed list, and a rejected or oversized file shows **You can only upload files with a maximum size of 20 MB.** Click the **x** on the preview to remove the image; if you remove it and do not choose another, **Please Upload Image** is shown and you cannot save.

The drawer closes and the list refreshes once the chain type is saved. If saving fails, a red message appears and the drawer stays open.

:::note
The fields and the **Add Chain Type** / **Save Chain Type** button need **Edit** permission, even when you add a new chain type.
:::

---

## Bulk Upload

1. Click **Download** to get the sample file **Sample_ChainType.xlsx**. It contains only the column headers.
2. Fill in one row per chain type and save the file.
3. Click **upload File** and select the file. The file name appears next to the button.
4. Click **Apply Changes** to upload it.

A progress bar shows the upload status. When the file reaches the server, the message **Uploaded. Waiting for server...** appears until processing finishes. When the upload succeeds, a success message is shown and the list refreshes.

If some rows fail, the message **Upload failed at 99%. Please try again.** appears under the progress bar and an error table at the top of the page lists the **Row Id** and **Error Message** for each failed row. Correct those rows and upload the file again.
