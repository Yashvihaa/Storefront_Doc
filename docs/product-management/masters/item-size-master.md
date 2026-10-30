---
sidebar_position: 12
id: item-size-master
title: Item Size
sidebar_label: Item Size
---

# Item Size

The **Item Size** page manages the item sizes available for your products, such as ring sizes. When you add a product whose category is sized, the **Select size** field of the product form lets you pick one or more of these sizes. (Categories that are not sized use the [Item Length](./item-length-master.md) master instead.)

---

## Item Size Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Use the **Search** box to find item sizes. The list updates about one second after you stop typing; clear the box to show all item sizes again. |
| **Filter** | Click **Filter** to show or hide a filter box under each column heading. Filtering applies to the rows on the current page. |
| **Info** | Opens the **Item Size Info** drawer showing this module's **Title** and **Description**. Both are required (**This Field is required**). Click **Submit** to save or **Cancel** to close. Without **Edit** permission the fields and **Submit** are disabled. |
| **Add Item Size** | Click the **Add Item Size** button to open the **Add Item Size** drawer and create a new item size. |
| **Edit** | Click the **Edit** icon to open the **Edit Item Size** drawer and change an item size or its sort order. |
| **Delete** | Click the **Delete** icon. A box titled **Are you Sure?** asks you to confirm; click **YES** to delete the item size or **NO** to keep it. If the deletion is not allowed, an error message is shown and the item size stays in the list. |
| **Status** | Shows whether the item size is **Active** or **Inactive**. |
| **Status Toggle** | Switch an item size on or off directly from the list. The change is saved immediately, without a confirmation box. |

The **View Documentation** button at the top right of the page opens this guide.

### Item Size List Columns

| Column | Description |
| ------ | ----------- |
| **Action** | The **Edit** and **Delete** icons. |
| **Item Value** | The size value. |
| **Slug** | Web-friendly version of the value. It is shown for reference and is not a field on the form. |
| **Sort Order** | The display order you entered, if any. |
| **Status** | An **Active** or **Inactive** badge, followed by the on/off switch. |

Click a column heading to sort by it. The **Action** and **Status** columns cannot be sorted. The newest records are shown first, 50 rows per page by default; use the page controls under the list to move between pages or to show 25, 50, 75 or 100 rows.

:::note
Without **Add** permission the **Add Item Size** button is disabled. Without **Edit** permission the **Edit** icon and the **Status Toggle** are disabled. Without **Delete** permission the **Delete** icon is disabled.
:::

---

### Steps to Add a New Item Size

Click **Add Item Size**, fill in the fields below and click **Add Item Size** at the bottom of the drawer. When editing, the same button reads **Save Item Size**. Click **Cancel** to close without saving.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Sort Order** | - | Number that sets the display order. Leave it empty if you do not need to set one. |
| **Item Value** | ✅ | The size value. If it is missing, the message **Item Size is required** is shown. |

The drawer closes and the list refreshes once the item size is saved. If saving fails, the message from the server is shown and the drawer stays open.

:::note
The **Item Value** field and the **Add Item Size** / **Save Item Size** button need **Edit** permission, even when you add a new item size. The **Sort Order** box is not locked, but nothing can be saved without **Edit** permission.
:::
