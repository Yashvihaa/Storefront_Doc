---
sidebar_position: 2
id: metal-tone
title: Metal Tone
sidebar_label: Metal Tone
---

# Metal Tone

The **Metal Tone** page manages the tones shown for each metal, for example Rose Gold, Yellow Gold and White Gold for Gold. Each tone belongs to one metal from [Metals](./metals.md) and has a name, a sort code and an image. Tones are the **Metal Tone** choice in the metal details of a product.

---

## Metal Tone Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Use the **Search** box to find metal tones. The list updates about a second after you stop typing. Clear the box to show all tones again. |
| **Filter** | Click **Filter** to show or hide a filter box under each column heading. Filtering applies to the rows on the current page. |
| **Info** | Opens the **Metal Tone Info** drawer, which shows the module's **Title** and **Description**. Both are required (**This Field is required**). Change them and click **Submit** to save, or click **Cancel** to close. Without **Edit** permission the fields and **Submit** are disabled. |
| **Add Metal Tone** | Click the **Add Metal Tone** button to open the **Add Metal Tone** drawer and create a new tone. |
| **Edit** | Click the **Edit** icon to open the **Edit Metal Tone** drawer and change a tone's name, metal or image. |
| **Delete** | Click the **Delete** icon. A box titled **Are you Sure?** asks you to confirm; click **YES** to delete the tone or **NO** to keep it. If the deletion is not allowed, an error message is shown and the tone stays in the list. |
| **Status** | Shows whether the tone is **Active** or **Inactive**. |
| **Status Toggle** | Switch a tone on or off directly from the list. The change is saved immediately, without a confirmation box. |

The **View Documentation** button at the top right of the page opens this guide.

### Metal Tone List Columns

| Column | Description |
| ------ | ----------- |
| **Action** | The **Edit** and **Delete** icons. |
| **Image** | Picture of the tone. Hover over it to see a larger preview. |
| **Metal Tone** | Name of the tone. |
| **Slug** | Web-friendly version of the name. It is shown for reference and is not a field on the form. |
| **Sort Code** | The sort code you entered, for example RG. |
| **Status** | An **Active** or **Inactive** badge, followed by the on/off switch. |

The metal a tone belongs to is not shown as a column; open **Edit** to see it. Click a column heading to sort by it. The **Action**, **Image** and **Status** columns cannot be sorted. The newest tones are shown first, 50 rows per page by default; use the page controls under the list to move between pages or to show 25, 50, 75 or 100 rows.

:::note
The **Add Metal Tone** button needs **Add** permission. The **Edit** icon and the status toggle need **Edit** permission, and the **Delete** icon needs **Delete** permission. The drawer fields and the **Add Metal Tone** / **Save Metal Tone** button are disabled without **Edit** permission, including when you add a new tone.
:::

---

### Steps to Add a New Metal Tone

Click **Add Metal Tone**, fill in the fields below and click **Add Metal Tone** at the bottom of the drawer. When editing, the same button reads **Save Metal Tone**. Click **Cancel** to close without saving.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Metal Tone Name** | ✅ | Name of the tone, for example Rose Gold. If it is empty, the message **This Field is required** is shown. |
| **Sort Code** | ✅ | Short code for the tone, for example RG. Cannot be changed after the tone is created: the field is read-only when you edit. |
| **Select Metal** | ✅ | The metal this tone belongs to. Choose one of the boxes; only active metals are listed. If no metal is chosen when you add a tone, **This Field is required** is shown under the boxes and the tone is not saved. |
| **Upload Image** | ✅ | Drop an image or click to upload. Accepts .jpg, .jpeg, .png, .gif, .webp, .bmp, .svg, .ico, .tiff and .tif files up to 20 MB. Recommended aspect ratio: 50 x 50. If it is missing, the message **Image is required** is shown. |

A file of another type shows **Only allowed image file types can be uploaded** followed by the allowed list, and a rejected or oversized file shows **You can only upload files with a maximum size of 20 MB.** Click the **x** on the image preview to remove it; if you remove it and do not choose another, **Please Upload Image** is shown and you cannot save.

The drawer closes and the list refreshes once the tone is saved. If saving fails, a red message appears and the drawer stays open.
