---
sidebar_position: 3
id: carat-size
title: Carat Size
sidebar_label: Carat Size
---

# Carat Size

The **Carat Size** page manages the carat sizes available for your products, for example 0.50 or 1.25. Carat sizes are also used as the **Carat Size** choice in the [Diamond Group Master](../diamond-group-master.md) to price stones.

---

## Carat Size Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Use the **Search** box to find carat sizes. The list updates about one second after you stop typing; clear the box to show all carat sizes again. |
| **Filter** | Click **Filter** to show or hide a filter box under each column heading. Filtering applies to the rows on the current page. |
| **Info** | Opens the **Carat Size Info** drawer showing this module's **Title** and **Description**. Both are required (**This Field is required**). Click **Submit** to save or **Cancel** to close. Without **Edit** permission the fields and **Submit** are disabled. |
| **Add Carat Size** | Click the **Add Carat Size** button to open the **Add Carat Size** drawer and create a new carat size. |
| **Edit** | Click the **Edit** icon to open the **Edit Carat Size** drawer and change a carat size's value or image. |
| **Delete** | Click the **Delete** icon. A box titled **Are you Sure?** asks you to confirm; click **YES** to delete the carat size or **NO** to keep it. If the deletion is not allowed, an error message is shown and the carat size stays in the list. |
| **Status** | Shows whether the carat size is **Active** or **Inactive**. |
| **Status Toggle** | Switch a carat size on or off directly from the list. The change is saved immediately, without a confirmation box. |

The **View Documentation** button at the top right of the page opens this guide.

### Carat Size List Columns

| Column | Description |
| ------ | ----------- |
| **Action** | The **Edit** and **Delete** icons. |
| **Image** | Picture of the carat size, if one was uploaded. Hover over it to see a larger preview. |
| **Value** | The carat size. |
| **Slug** | Web-friendly version of the value. It is shown for reference and is not a field on the form. |
| **Sort Code** | Code of the carat size. You do not enter it when adding; it is shown here and, read-only, when you edit. |
| **Status** | An **Active** or **Inactive** badge, followed by the on/off switch. |

Click a column heading to sort by it. The **Action**, **Image** and **Status** columns cannot be sorted. The newest carat sizes are shown first, 50 rows per page by default; use the page controls under the list to move between pages or to show 25, 50, 75 or 100 rows.

:::note
Without **Add** permission the **Add Carat Size** button is disabled. Without **Edit** permission the **Edit** icon and the **Status Toggle** are disabled. Without **Delete** permission the **Delete** icon is disabled.
:::

---

### Steps to Add a New Carat Size

Click **Add Carat Size**, fill in the fields below and click **Add Carat Size** at the bottom of the drawer. When editing, the same button reads **Save Carat Size**. Click **Cancel** to close without saving.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Value** | ✅ | Carat size as a positive number, for example 0.50 or 1.25. Digits only, with an optional decimal part of up to 10 decimal places; no minus sign, spaces or letters. A value in any other format is rejected with **The size must be a positive number**. |
| **Sort Code** | - | Shown only when editing, and read-only. |
| **Upload Image** | - | Image for the carat size. The form suggests an aspect ratio of 100 x 100. |

To add the image, drop a file on the upload area or click it to choose one. Only one image can be used. Allowed types are .jpg, .jpeg, .png, .gif, .webp, .bmp, .svg, .ico, .tiff and .tif, up to 20 MB. A file of another type shows **Only allowed image file types can be uploaded** followed by the allowed list, and a rejected or oversized file shows **You can only upload files with a maximum size of 20 MB.** Click the **x** on the preview to remove the image; when you edit a carat size and save after removing its image, the image is deleted from the carat size.

The drawer closes and the list refreshes once the carat size is saved. If saving fails, a red message appears and the drawer stays open.

:::note
**Upload Image** is marked with a red asterisk, but the form does not check it. You can save a carat size without an image.
:::

:::note
The fields and the **Add Carat Size** / **Save Carat Size** button need **Edit** permission, even when you add a new carat size.
:::
