---
sidebar_position: 18
id: stone-master
title: Stone Master
sidebar_label: Stone Master
---

# Stone Master

The **Stone Master** manages the stones and gemstones used in your products. Each stone is marked as either a diamond or a gemstone and has a name, a sort code and an image. Stones are the **Stone** choice in the [Diamond Group Master](../diamond-group-master.md) and in the diamond details of a product form.

:::tip
In the diamond details of the Add Product form, the **Stone** list only offers stones that have at least one record in the [Diamond Group Master](../diamond-group-master.md). A new stone will not appear there until it is priced in that master.
:::

---

## Stone Master Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Use the **Search** box to find stones. The list updates about a second after you stop typing. Clear the box to show all stones again. |
| **Filter** | Click **Filter** to show or hide a filter box under each column heading. Filtering applies to the rows on the current page. |
| **Info** | Opens the **Stone Master Info** drawer, which shows the module's **Title** and **Description**. Both are required (**This Field is required**). Change them and click **Submit** to save, or click **Cancel** to close. Without **Edit** permission the fields and **Submit** are disabled. |
| **Add Stone Master** | Click the **Add Stone Master** button to open the **Add Stone Master** drawer and create a new stone. |
| **Edit** | Click the **Edit** icon to open the **Edit Stone Master** drawer and change a stone's details. |
| **Delete** | Click the **Delete** icon. A box titled **Are you Sure?** asks you to confirm; click **YES** to delete the stone or **NO** to keep it. If the deletion is not allowed, an error message is shown and the stone stays in the list. |
| **Status** | Shows whether the stone is **Active** or **Inactive**. |
| **Status Toggle** | Switch a stone on or off directly from the list. The change is saved immediately, without a confirmation box. |

The **View Documentation** button at the top right of the page opens this guide.

### Stone Master List Columns

| Column | Description |
| ------ | ----------- |
| **Action** | The **Edit** and **Delete** icons. |
| **Image** | Picture of the stone. Hover over it to see a larger preview. |
| **Name** | Name of the stone. |
| **Slug** | Web-friendly version of the name. It is shown for reference and is not a field on the form. |
| **Sort Code** | The sort code you entered. |
| **Status** | An **Active** or **Inactive** badge, followed by the on/off switch. |

The **Stone Type** (diamond or gemstone) you choose in the form is not shown as a column; open **Edit** to see it. Click a column heading to sort by it. The **Action**, **Image** and **Status** columns cannot be sorted. The newest stones are shown first, 50 rows per page by default; use the page controls under the list to move between pages or to show 25, 50, 75 or 100 rows.

:::note
The **Add Stone Master** button needs **Add** permission. The **Edit** icon and the status toggle need **Edit** permission, and the **Delete** icon needs **Delete** permission. The drawer fields and the **Add Stone** / **Save Stone** button are disabled without **Edit** permission, including when you add a new stone.
:::

---

### Steps to Add a New Stone

Click **Add Stone Master**, fill in the fields below and click **Add Stone** at the bottom of the drawer. When editing, the button reads **Save Stone**. Click **Cancel** to close without saving.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Stone Name** | ✅ | Name of the stone, for example Diamond or Ruby. If it is empty, the message **This Field is required** is shown. |
| **Sort Code** | ✅ | Short code for the stone. If it is empty, the message **This Field is required** is shown. |
| **Stone Type** | ✅ | Choose one of the boxes: **Diamond** or **Gemstone**. If none is chosen, **This Field is required** is shown. |
| **Upload Image** | ✅ | Drop an image or click to upload. Accepts .jpg, .jpeg, .png, .gif, .webp, .bmp, .svg, .ico, .tiff and .tif files up to 20 MB. Recommended aspect ratio: 100 x 100. If it is missing, the message **Image is required** is shown. |

A file of another type shows **Only allowed image file types can be uploaded** followed by the allowed list, and a rejected or oversized file shows **You can only upload files with a maximum size of 20 MB.** Click the **x** on the image preview to remove it; if you remove it and do not choose another, **Please Upload Image** is shown and you cannot save.

The drawer closes and the list refreshes once the stone is saved. If saving fails, a red message appears and the drawer stays open.

:::tip
The **Stone Type** field here is a fixed choice between **Diamond** and **Gemstone**. It is not linked to the [Stone Type](./stone-type.md) master.
:::
