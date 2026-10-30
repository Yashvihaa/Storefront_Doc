---
sidebar_position: 9
id: diamond-shape
title: Diamond Shape
sidebar_label: Diamond Shape
---

# Diamond Shape

The **Diamond Shape** page manages the diamond shapes available for your products, such as Round, Oval, Princess or Marquise. Each shape has a name, a sort code and an image. Shapes are the **Shape** choice in the diamond details of a product and in the [Diamond Group Master](../diamond-group-master.md), where they are used to price stones.

---

## Diamond Shape Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Use the **Search** box to find diamond shapes. The list updates about one second after you stop typing; clear the box to show all shapes again. |
| **Filter** | Click **Filter** to show or hide a filter box under each column heading. Filtering applies to the rows on the current page. |
| **Info** | Opens the **Diamond Shape Info** drawer showing this module's **Title** and **Description**. Both are required (**This Field is required**). Click **Submit** to save or **Cancel** to close. Without **Edit** permission the fields and **Submit** are disabled. |
| **Add Diamond Shape** | Click the **Add Diamond Shape** button to open the **Add Diamond Shape** drawer and create a new shape. |
| **Edit** | Click the **Edit** icon to open the **Edit Diamond Shape** drawer and change a shape. |
| **Delete** | Click the **Delete** icon. A box titled **Are you Sure?** asks you to confirm; click **YES** to delete the shape or **NO** to keep it. If the deletion is not allowed, an error message is shown and the shape stays in the list. |
| **Status** | Shows whether the shape is **Active** or **Inactive**. |
| **Status Toggle** | Switch a shape on or off directly from the list. The change is saved immediately, without a confirmation box. |

The **View Documentation** button at the top right of the page opens this guide.

### Diamond Shape List Columns

| Column | Description |
| ------ | ----------- |
| **Action** | The **Edit** and **Delete** icons. |
| **Image** | Picture of the shape. Hover over it to see a larger preview. |
| **Name** | Name of the shape. |
| **Slug** | Web-friendly version of the name. It is shown for reference and is not a field on the form. |
| **Sort Code** | The sort code you entered, for example RND. |
| **Status** | An **Active** or **Inactive** badge, followed by the on/off switch. |

Click a column heading to sort by it. The **Action**, **Image** and **Status** columns cannot be sorted. The newest shapes are shown first, 50 rows per page by default; use the page controls under the list to move between pages or to show 25, 50, 75 or 100 rows.

:::note
Without **Add** permission the **Add Diamond Shape** button is disabled. Without **Edit** permission the **Edit** icon and the **Status Toggle** are disabled. Without **Delete** permission the **Delete** icon is disabled.
:::

---

### Steps to Add a New Diamond Shape

Click **Add Diamond Shape**, fill in the fields below and click **Add Diamond Shape** at the bottom of the drawer. When editing, the same button reads **Save Diamond Shape**. Click **Cancel** to close without saving.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Diamond Shape Name** | ✅ | Name of the shape, for example Round or Oval. If it is empty, the message **This Field is required** is shown. |
| **Sort Code** | ✅ | Short code for the shape, for example RND or OVL. If it is empty, the message **This Field is required** is shown. |
| **Upload Image** | ✅ | Image of the shape. The form suggests an aspect ratio of 100 x 100. If it is missing, the message **Image is required** is shown. |

To add the image, drop a file on the upload area or click it to choose one. Only one image can be used. Allowed types are .jpg, .jpeg, .png, .gif, .webp, .bmp, .svg, .ico, .tiff and .tif, up to 20 MB. A file of another type shows **Only allowed image file types can be uploaded** followed by the allowed list, and a rejected or oversized file shows **You can only upload files with a maximum size of 20 MB.** Click the **x** on the preview to remove the image; if you remove it and do not choose another, **Please Upload Image** is shown and you cannot save.

The drawer closes and the list refreshes once the shape is saved. If saving fails, a red message appears and the drawer stays open.

:::note
The **Sort Code** field and the **Add Diamond Shape** / **Save Diamond Shape** button need **Edit** permission, even when you add a new shape. The name and image areas are not locked, but nothing can be saved without **Edit** permission.
:::
