---
sidebar_position: 11
id: item-length-master
title: Item Length
sidebar_label: Item Length
---

# Item Length

## Overview

**Item Length** is the list of product lengths, such as bracelet lengths, for example 7 Inch. Each length has a value and an optional sort order. Lengths are used by [Bracelet Configurator](../configurator-products/bracelet-configurator.md) products, by [Birthstone Products](../configurator-products/birthstone-products.md) and by the **Item Length Master** of the [Bracelet configurator settings](../../config-setting/bracelet-configurator.md). Ring sizes are kept separately in [Item Size](./item-size-master.md).

On this page you can add, change, switch off and delete lengths, and write the info text shown to shoppers.

:::note[One list for every store]
Item lengths are shared by every store on the Storefront platform. When you add, change, switch off or delete a length, every store sees the change straight away.
:::

:::note[Who can use it]
The page opens for users whose role gives access to it (see [Roles](../../roles-permission/roles.md)). **Add Item Length** needs **Add** permission. The **Edit** icon and the on/off switch need **Edit** permission, and the **Delete** icon needs **Delete** permission. The **Item Length** field and the save button in the drawer also need **Edit** permission, even when you add a new length. Only a TCC Tech **Super Admin** can save the **Info** text.
:::

---

## Data Displayed

### Item Length Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Type part of a length. The list refreshes about one second after you stop typing and goes back to page 1. Clear the box to show every length again. |
| **Filter** | Shows or hides a filter box under each column heading, so you can narrow the rows on the current page by typing in a column. |
| **Info** | Opens the **Item Length Info** drawer. See [Info Text](#info-text). |
| **Add Item Length** | Opens the **Add Item Length** drawer. See [Steps to Add a New Item Length](#steps-to-add-a-new-item-length). |
| **Edit** | Pencil icon in the **Action** column (tooltip *Edit Item Length*). Opens the **Edit Item Length** drawer with the saved values. |
| **Delete** | Bin icon in the **Action** column (tooltip *Delete Item Length*). See [Steps to Delete an Item Length](#steps-to-delete-an-item-length). |
| **On/off switch** | Last item in the **Action** column (tooltip *Enable/Disable*). Switches the length between **Active** and **Inactive** at once. See [Switching an Item Length On or Off](#switching-an-item-length-on-or-off). |
| **View Documentation** | Opens this page. |

### Item Length List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Action** | - | The **Edit** and **Delete** icons, then the on/off switch. | - |
| **Item Length** | Text | The length value. | *7 Inch* |
| **Slug** | Text | Made from the value: lower case, spaces turned into hyphens and other symbols removed. It is not a field on the form. | *7-inch* |
| **Sort Order** | Number | The sort order you entered, or **-** if none. | *3* |
| **Status** | Badge | **Active** or **Inactive**. | **Active** |

### Item Length Fields

The **Add Item Length** and **Edit Item Length** drawers show the fields in this order.

| Field | Required | Type | Remarks |
| ----- | -------- | ---- | ------- |
| **Sort Order** | - | Number | The position of the length in lists that follow this order, such as the Birthstone product form. Leave it empty if you do not need one. |
| **Item Length** | ✅ | Text | The length value. If it is empty, **Item Length is required** is shown. It must differ from every other length, ignoring capital letters. |

### Statuses

| Status | Badge | Meaning |
| ------ | ----- | ------- |
| **Active** | Green | The length is offered in the lists that use it. A new length starts as **Active**. |
| **Inactive** | Red | The length stays in this list and on records that already use it, but it is no longer offered for new choices. |

---

## How It Works

### Steps to Add a New Item Length

1. Click **Add Item Length**.
2. Enter a **Sort Order** if you want one, and the **Item Length**.
3. Click **Add Item Length** at the bottom of the drawer, or **Cancel** to close without saving.

When the length is saved, a success message appears, the drawer closes and the list refreshes. If a length with the same value already exists, the message **Data already exists** is shown and the drawer stays open.

### Steps to Edit an Item Length

1. Click the **Edit** icon on the row.
2. Change the **Item Length** or the **Sort Order**. Clear **Sort Order** to remove it.
3. Click **Save Item Length**.

The slug is rebuilt from the new value. The message **Record updated successfully** confirms the change.

### Steps to Delete an Item Length

1. Click the **Delete** icon on the row.
2. The **Are you Sure?** box asks *Are you Sure You would like to delete ?*. Click **YES** to delete the length or **NO** to keep it.

A length can be deleted only when nothing uses it in any store: no Birthstone product and no bracelet configurator product. Otherwise the message *This item is currently linked to other modules, Please remove or update the related records before attempting to delete it.* is shown and the length stays in the list. When the delete works, **Record deleted successfully** is shown and the length leaves the list.

### Switching an Item Length On or Off

Click the switch in the **Action** column. The change is saved at once, without a confirmation box. The message **Record updated successfully** appears and the **Status** badge changes. A length can be switched off even while it is in use.

### Info Text

**Info** opens the **Item Length Info** drawer with a **Title** box and a **Description** editor. The drawer loads the saved text, or opens empty if nothing has been saved yet.

1. Enter the **Title** and the **Description**. Both are required (**This Field is required**).
2. Click **Submit** to save, or **Cancel** to close.

Without **Edit** permission the fields and **Submit** are disabled. Only a TCC Tech **Super Admin** can save the text; for anyone else the save is refused and a red message is shown.

Once a text is saved, the storefront bracelet configurator shows an info icon next to the length option. Clicking it opens the title and description.

### Search, Filters, Sorting and Paging

- **Search** looks through every length by its slug, not just the current page. See [Edge Cases / Notes](#edge-cases--notes).
- The **Filter** boxes only narrow the rows already on the current page.
- Click the **Item Length**, **Slug** or **Sort Order** heading to sort. **Action** and **Status** cannot be sorted.
- The newest lengths are shown first, 50 rows per page by default. Use the paging controls under the list to move between pages or to show 25, 50, 75 or 100 rows.

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No lengths match | **No records to display** |
| Saving a length | The save button shows a loading spinner. |
| Loading the info text | Grey placeholder bars in the drawer. |
| An action fails | A red message with the reason. The drawer stays open. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Item Length uses it |
| ------ | ----------------------- |
| [Roles](../../roles-permission/roles.md) | Decides who can open the page and which buttons are enabled. |

Lengths are typed in here. They do not come from any other module.

### Modules That Depend On It

| Module | How it uses item lengths |
| ------ | ------------------------ |
| [Bracelet configurator settings](../../config-setting/bracelet-configurator.md) | The **Item Length Master** lists the active lengths. Each store picks the lengths it offers and sets its own order and default there. |
| [Bracelet Configurator](../configurator-products/bracelet-configurator.md) products | Each bracelet product is stored with a length, so a length in use cannot be deleted. |
| [Birthstone Products](../configurator-products/birthstone-products.md) | **Select Length** lists the active lengths in **Sort Order** order. |
| [SKU Builder](../../settings/sku-builder.md) | The length segment uses each length's code. Unless a code is set on that page, the length value is used. |
| Storefront bracelet configurator | Shows the [Info Text](#info-text). |
| [Audit Logs](../../settings/audit-log.md) | Every add, edit, delete and on/off change is recorded. |

### What Changes If…

| Change | Effect elsewhere |
| ------ | ---------------- |
| A length is changed | The new value shows wherever the length is used, in every store. In SKU Builder the length's code changes too, unless a code was set there. |
| The sort order is changed | Lists that follow this order, such as the Birthstone product form, show the lengths in the new order. The order set in the bracelet configurator settings is separate and does not change. |
| A length is switched off | It is no longer offered in the Bracelet configurator settings or Birthstone Products. Products that already use it keep it. |
| A length is deleted | Possible only when nothing uses it. It disappears from every list. |
| A length is added | Every store can use it straight away. |

---

## Edge Cases / Notes

- **Shared list.** There is one length list for the whole platform. Agree changes with every store before changing or switching off a length.
- **Search uses the slug.** Symbols such as the decimal point are not in the slug, so searching for *7.5* does not find *7.5 Inch*. Search for *75* or *inch* instead.
- **Sort Order is not locked.** The **Sort Order** box can be typed in without **Edit** permission, but the length still cannot be saved.
- **Switching off is not checked.** The switch works even while the length is in use. Only **Delete** checks whether the length is in use.
- **Reusing a deleted value.** After a length is deleted, you can add it again. It is a new length and is not linked to anything the old one was used on.
