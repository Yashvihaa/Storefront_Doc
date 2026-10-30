---
sidebar_position: 15
id: setting-type-style
title: Setting Style
sidebar_label: Setting Style
---

# Setting Style

The **Setting Style** page manages the setting styles available for your products, for example Channel, U Micro and Prong. Each style has a name, a sort code and an image. In the product form the styles are offered in the **Setting Type** field (shown for categories that use setting styles) and in the **Stone Setting** choice of the diamond details.

---

## Setting Style Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Use the **Search** box to find setting styles. The list updates about a second after you stop typing. Clear the box to show all styles again. |
| **Filter** | Click **Filter** to show or hide a filter box under each column heading. Filtering applies to the rows on the current page. |
| **Info** | Opens the **Setting Type Info** drawer, which shows the module's **Title** and **Description**. Both are required (**This Field is required**). Change them and click **Submit** to save, or click **Cancel** to close. Without **Edit** permission the fields and **Submit** are disabled. |
| **Add Setting Style** | Click the **Add Setting Style** button to open the **Add Setting Style** drawer and create a new style. |
| **Edit** | Click the **Edit** icon to open the **Edit Setting Style** drawer and change a style's details. |
| **Delete** | Click the **Delete** icon. A box titled **Are you Sure?** asks you to confirm; click **YES** to delete the style or **NO** to keep it. If the deletion is not allowed, an error message is shown and the style stays in the list. |
| **Status** | Shows whether the style is **Active** or **Inactive**. |
| **Status Toggle** | Switch a style on or off directly from the list. The change is saved immediately, without a confirmation box. |

The **View Documentation** button at the top right of the page opens this guide.

### Setting Style List Columns

| Column | Description |
| ------ | ----------- |
| **Action** | The **Edit** and **Delete** icons. |
| **Image** | Picture of the style. Hover over it to see a larger preview. |
| **Setting Style Value** | Name of the style. |
| **Slug** | Web-friendly version of the name. It is shown for reference and is not a field on the form. |
| **Sort Code** | The sort code you entered. |
| **Status** | An **Active** or **Inactive** badge, followed by the on/off switch. |

Click a column heading to sort by it. The **Action**, **Image** and **Status** columns cannot be sorted. The newest styles are shown first, 50 rows per page by default; use the page controls under the list to move between pages or to show 25, 50, 75 or 100 rows.

:::note
The **Add Setting Style** button needs **Add** permission. The **Edit** icon and the status toggle need **Edit** permission, and the **Delete** icon needs **Delete** permission. The fields and the **Add Setting Style** / **Save Setting Style** button in the drawer are disabled without **Edit** permission, including when you add a new style.
:::

---

### Steps to Add a New Setting Style

Click **Add Setting Style**, fill in the fields below and click **Add Setting Style** at the bottom of the drawer. When editing, the same button reads **Save Setting Style**. Click **Cancel** to close without saving.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Setting Style Name** | ✅ | Name of the style, for example Prong. If it is empty, the message **This Field is required** is shown. |
| **Sort Code** | ✅ | Short code for the style. If it is empty, the message **This Field is required** is shown. |
| **Upload Image** | ✅ | Drop an image or click to upload. Accepts .jpg, .jpeg, .png, .gif, .webp, .bmp, .svg, .ico, .tiff and .tif files up to 20 MB. Recommended aspect ratio: 100 x 100. If it is missing, the message **Image is required** is shown. |

A file of another type shows **Only allowed image file types can be uploaded** followed by the allowed list, and a rejected or oversized file shows **You can only upload files with a maximum size of 20 MB.** Click the **x** on the image preview to remove it; if you remove it and do not choose another, **Please Upload Image** is shown and you cannot save.

The drawer closes and the list refreshes once the style is saved. If saving fails, a red message appears and the drawer stays open.
