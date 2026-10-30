---
sidebar_position: 16
id: shank
title: Shank
sidebar_label: Shank
---

# Shank

The **Shank** page manages the shank styles used in ring products. The shank is the band of the ring. Each shank has a name, a sort code and an image.

---

## Shank Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Use the **Search** box to find shanks. The list updates about a second after you stop typing. Clear the box to show all shanks again. |
| **Filter** | Click **Filter** to show or hide a filter box under each column heading. Filtering applies to the rows on the current page. |
| **Info** | Opens the **Shank Info** drawer, which shows the module's **Title** and **Description**. Both are required (**This Field is required**). Change them and click **Submit** to save, or click **Cancel** to close. Without **Edit** permission the fields and **Submit** are disabled. |
| **Add Shank** | Click the **Add Shank** button to open the **Add Shank** drawer and create a new shank. |
| **Edit** | Click the **Edit** icon to open the **Edit Shank** drawer and change a shank's details. |
| **Delete** | Click the **Delete** icon. A box titled **Are you Sure?** asks you to confirm; click **YES** to delete the shank or **NO** to keep it. If the deletion is not allowed, an error message is shown and the shank stays in the list. |
| **Status** | Shows whether the shank is **Active** or **Inactive**. |
| **Status Toggle** | Switch a shank on or off directly from the list. The change is saved immediately, without a confirmation box. |

The **View Documentation** button at the top right of the page opens this guide.

### Shank List Columns

| Column | Description |
| ------ | ----------- |
| **Action** | The **Edit** and **Delete** icons. |
| **Image** | Picture of the shank. Hover over it to see a larger preview. |
| **Shank Value** | Name of the shank. |
| **Slug** | Web-friendly version of the name. It is shown for reference and is not a field on the form. |
| **Sort Code** | The sort code you entered. |
| **Status** | An **Active** or **Inactive** badge, followed by the on/off switch. |

Click a column heading to sort by it. The **Action**, **Image** and **Status** columns cannot be sorted. The newest shanks are shown first, 50 rows per page by default; use the page controls under the list to move between pages or to show 25, 50, 75 or 100 rows.

:::note
The **Add Shank** button needs **Add** permission. The **Edit** icon and the status toggle need **Edit** permission, and the **Delete** icon needs **Delete** permission. The drawer fields and the **Add Shank** / **Save Shank** button are disabled without **Edit** permission, including when you add a new shank.
:::

---

### Steps to Add a New Shank

Click **Add Shank**, fill in the fields below and click **Add Shank** at the bottom of the drawer. When editing, the same button reads **Save Shank**. Click **Cancel** to close without saving.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Shank Name** | ✅ | Name of the shank style. If it is empty, the message **This Field is required** is shown. |
| **Sort Code** | ✅ | Short code for the shank. If it is empty, the message **This Field is required** is shown. |
| **Upload Image** | ✅ | Drop an image or click to upload. Accepts .jpg, .jpeg, .png, .gif, .webp, .bmp, .svg, .ico, .tiff and .tif files up to 20 MB. Recommended aspect ratio: 100 x 100. If it is missing, the message **Image is required** is shown. |

A file of another type shows **Only allowed image file types can be uploaded** followed by the allowed list, and a rejected or oversized file shows **You can only upload files with a maximum size of 20 MB.** Click the **x** on the image preview to remove it; if you remove it and do not choose another, **Please Upload Image** is shown and you cannot save.

The drawer closes and the list refreshes once the shank is saved. If saving fails, a red message appears and the drawer stays open.
