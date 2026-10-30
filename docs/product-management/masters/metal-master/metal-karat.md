---
sidebar_position: 3
id: metal-karat
title: Metal Karat
sidebar_label: Metal Karat
---

# Metal Karat

The **Karat Master** page manages the gold karats offered for your products, for example 10K, 14K and 18K, along with the gold percentage of each karat. Karats are the **Metal Karat** choice in the gold metal details of a product.

---

## Karat Master Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Use the **Search** box to find karats. The list updates about a second after you stop typing. Clear the box to show all karats again. |
| **Filter** | Click **Filter** to show or hide a filter box under each column heading. Filtering applies to the rows on the current page. |
| **Info** | Opens the **Metal Karat Info** drawer, which shows the module's **Title** and **Description**. Both are required (**This Field is required**). Change them and click **Submit** to save, or click **Cancel** to close. Without **Edit** permission the fields and **Submit** are disabled. |
| **Add Karat** | Click the **Add Karat** button to open the **Add Karat** drawer and create a new karat. |
| **Edit** | Click the **Edit** icon to open the **Edit Karat** drawer and change a karat's value, gold percentage or image. |
| **Delete** | Click the **Delete** icon. A box titled **Are you Sure?** asks you to confirm; click **YES** to delete the karat or **NO** to keep it. If the deletion is not allowed, an error message is shown and the karat stays in the list. |
| **Status** | Shows whether the karat is **Active** or **Inactive**. |
| **Status Toggle** | Switch a karat on or off directly from the list. The change is saved immediately, without a confirmation box. |

The **View Documentation** button at the top right of the page opens this guide.

### Karat Master List Columns

| Column | Description |
| ------ | ----------- |
| **Action** | The **Edit** and **Delete** icons. |
| **Image** | Picture of the karat, if one was uploaded. Hover over it to see a larger preview. |
| **Carat** | The karat value. |
| **Slug** | Web-friendly version of the value. It is shown for reference and is not a field on the form. |
| **Gold Calculate Rate** | The gold percentage of the karat, shown with two decimals. |
| **Status** | An **Active** or **Inactive** badge, followed by the on/off switch. |

Click a column heading to sort by it. The **Action**, **Image** and **Status** columns cannot be sorted. The newest karats are shown first, 50 rows per page by default; use the page controls under the list to move between pages or to show 25, 50, 75 or 100 rows.

:::note
The **Add Karat** button needs **Add** permission. The **Edit** icon and the status toggle need **Edit** permission, and the **Delete** icon needs **Delete** permission. The drawer fields and the **Add Karat** / **Save Karat** button are disabled without **Edit** permission, including when you add a new karat.
:::

---

### Steps to Add a New Karat

Click **Add Karat**, fill in the fields below and click **Add Karat** at the bottom of the drawer. When editing, the same button reads **Save Karat**. Click **Cancel** to close without saving.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Karat** | ✅ | Karat value. Whole numbers only (digits, no decimals, minus sign or spaces), for example 14 or 18. Anything else is rejected with **The Metal karat must be a positive number**. |
| **Select Metal** | ✅ | Only the Gold metal is offered. Choose its box. Shows **Please select metal** if left empty. |
| **Gold Percentage** | - | Percentage of pure gold in this karat, for example 58.3 for 14K. A value of 101 or more shows **Gold percentage cannot be more than 100%. Please enter a valid gold percentage.** and the karat is not saved. |
| **Upload Image** | - | Drop an image or click to upload. Accepts .jpg, .jpeg, .png, .gif, .webp, .bmp, .svg, .ico, .tiff and .tif files up to 20 MB. Recommended aspect ratio: 500 x 500. |

A file of another type shows **Only allowed image file types can be uploaded** followed by the allowed list, and a rejected or oversized file shows **You can only upload files with a maximum size of 20 MB.** Click the **x** on the image preview to remove it; when you edit a karat and save after removing its image, the image is removed from the karat.

The drawer closes and the list refreshes once the karat is saved. If saving fails, a red message appears and the drawer stays open.

:::note
**Upload Image** is marked with a red asterisk, but the form does not check it. You can save a karat without an image.
:::

:::tip
Karats apply only to Gold. The Gold rates on [Metal Rate Settings](../../../settings/metal-rate-setting.md) are shown per karat.
:::
