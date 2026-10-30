---
sidebar_position: 14
id: push-and-back
title: Push Back Master
sidebar_label: Push Back Master
---

# Push Back Master

The **Push Back Master** manages the push-back options for stud earrings, that is, the backing that holds the earring post in place. Each option is marked as a **Push** or a **Back** and has a name, sort code, slug and image. The [Stud Configurator](../configurator-products/stud-configurator.md) page has a **Push & Back Stud Export** for stud products by push back. You can add options one at a time or upload them in bulk from an Excel file.

---

## Push Back Master Screen List

| Action | Description |
| ------ | ----------- |
| **Download** | Downloads a sample Excel file (**Sample_PushBack.xlsx**) that contains only the column headings for a bulk upload. |
| **upload File** | Select an Excel file (.xlsx or .xls) to upload. The file name is shown next to the button. See [Bulk Upload](#bulk-upload). |
| **Apply Changes** | Uploads the selected file and imports its rows. |
| **Add Push Back** | Click the **Add Push Back** button to open the **Add Push Back** drawer and create a new push back. |
| **Filter** | Click **Filter** to show or hide a filter box under each column heading. Filtering applies to the rows on the current page. |
| **Edit** | Click the **Edit** icon to open the **Edit Push Back** drawer and change a push back's details. |
| **Delete** | Click the **Delete** icon. A box titled **Are you Sure?** asks you to confirm; click **YES** to delete the push back or **NO** to keep it. If the deletion is not allowed, an error message is shown and the push back stays in the list. |
| **Status** | Shows whether the push back is **Active** or **Inactive**. |
| **Status Toggle** | Switch a push back on or off directly from the list. The change is saved immediately, without a confirmation box. |

The **View Documentation** button at the top right of the page opens this guide.

### Push Back List Columns

| Column | Description |
| ------ | ----------- |
| **Action** | The **Edit** and **Delete** icons. |
| **Image** | Picture of the push back. Hover over it to see a larger preview. |
| **Name** | Name of the push back. |
| **Slug** | The slug you entered. |
| **Sort Code** | The sort code you entered. |
| **Status** | An **Active** or **Inactive** badge, followed by the on/off switch. |

The **Push Back Type** you choose in the form is not shown as a column; open **Edit** to see it. Click a column heading to sort by it. The **Action**, **Image** and **Status** columns cannot be sorted. The newest push backs are shown first, 50 rows per page by default; use the page controls under the list to move between pages or to show 25, 50, 75 or 100 rows.

:::note
This page has no **Search** box and no **Info** button.
:::

:::note
**upload File**, **Apply Changes** and **Add Push Back** need **Add** permission. The **Edit** icon and the status toggle need **Edit** permission, and the **Delete** icon needs **Delete** permission. The drawer fields and the **Add Push Back** / **Save Push Back** button are disabled without **Edit** permission, including when you add a new push back. **Download** is always available.
:::

---

## Bulk Upload

1. Click **Download** to get the sample file.
2. Fill in one push back per row under the column headings.
3. Click **upload File** and select the file.
4. Click **Apply Changes**.

A progress bar shows the upload status. When the file reaches the server, the message **Uploaded. Waiting for server...** appears until processing finishes, and the list then reloads. If the upload fails, a red message such as **Upload failed at 99%. Please try again.** is shown under the bar and an error table at the top of the page lists the **Row Id** and **Error Message** for each failed row. Correct those rows and upload the file again.

---

### Steps to Add a New Push Back

Click **Add Push Back**, fill in the fields below and click **Add Push Back** at the bottom of the drawer. When editing, the same button reads **Save Push Back**. Click **Cancel** to close without saving.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Push Back Name** | ✅ | Name of the backing, for example Butterfly or Screw. |
| **Sort Code** | ✅ | Short code for the push back. |
| **Slug** | ✅ | Slug for the push back. Enter it yourself; it is not generated from the name. |
| **Push Back Type** | ✅ | Choose one of the boxes: **Push** or **Back**. |
| **Upload Image** | ✅ | Drop an image or click to upload. Accepts .jpg, .jpeg, .png, .gif, .webp, .bmp, .svg, .ico, .tiff and .tif files up to 20 MB. If it is missing, the message **Image is required** is shown. |

An empty text field or an unselected **Push Back Type** shows **This Field is required**. A file of another type shows **Only allowed image file types can be uploaded** followed by the allowed list, and a rejected or oversized file shows **You can only upload files with a maximum size of 20 MB.** Click the **x** on the image preview to remove it; if you remove it and do not choose another, **Please Upload Image** is shown and you cannot save.

The drawer closes and the list refreshes once the push back is saved. If saving fails, a red message appears and the drawer stays open.
