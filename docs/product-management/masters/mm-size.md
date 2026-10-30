---
sidebar_position: 13
id: mm-size
title: MM Size
sidebar_label: MM Size
---

# MM Size

The **MM Size** page manages the millimetre sizes available for your products, such as the sizes of diamonds and gemstones, for example 3.5. MM sizes are also used as the **MM Size** choice in the [Diamond Group Master](../diamond-group-master.md) to price stones.

---

## MM Size Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Use the **Search** box to find MM sizes. The list updates about a second after you stop typing. Clear the box to show all sizes again. |
| **Filter** | Click **Filter** to show or hide a filter box under each column heading. Filtering applies to the rows on the current page. |
| **Info** | Opens the **MM Size Info** drawer, which shows the module's **Title** and **Description**. Both are required (**This Field is required**). Change them and click **Submit** to save, or click **Cancel** to close. Without **Edit** permission the fields and **Submit** are disabled. |
| **Add MM Size** | Click the **Add MM Size** button to open the **Add MM Size** drawer and create a new size. |
| **Edit** | Click the **Edit** icon to open the **Edit MM Size** drawer and change a size's value. |
| **Delete** | Click the **Delete** icon. A box titled **Are you Sure?** asks you to confirm; click **YES** to delete the size or **NO** to keep it. If the deletion is not allowed, an error message is shown and the size stays in the list. |
| **Status** | Shows whether the size is **Active** or **Inactive**. |
| **Status Toggle** | Switch a size on or off directly from the list. The change is saved immediately, without a confirmation box. |

The **View Documentation** button at the top right of the page opens this guide.

### MM Size List Columns

| Column | Description |
| ------ | ----------- |
| **Action** | The **Edit** and **Delete** icons. |
| **Value** | The size in millimetres. |
| **Slug** | Web-friendly version of the value. It is shown for reference and is not a field on the form. |
| **Status** | An **Active** or **Inactive** badge, followed by the on/off switch. |

Click a column heading to sort by it. The **Action** and **Status** columns cannot be sorted. The newest sizes are shown first, 50 rows per page by default; use the page controls under the list to move between pages or to show 25, 50, 75 or 100 rows.

:::note
The **Add MM Size** button needs **Add** permission. The **Edit** icon and the status toggle need **Edit** permission, and the **Delete** icon needs **Delete** permission. The **Value** field and the **Add MM Size** / **Save MM Size** button are disabled without **Edit** permission, including when you add a new size.
:::

---

### Steps to Add a New MM Size

Click **Add MM Size**, fill in the field below and click **Add MM Size** at the bottom of the drawer. When editing, the same button reads **Save MM Size**. Click **Cancel** to close without saving.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Value** | ✅ | Size in millimetres, for example 3.5. It cannot start with a minus sign or contain spaces; otherwise **Enter Valid MM size** is shown. An empty field is also rejected. The form does not check that the value is a number, so enter it carefully. |

The drawer closes and the list refreshes once the size is saved. If saving fails, a red message appears and the drawer stays open.
