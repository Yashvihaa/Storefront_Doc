---
sidebar_position: 13
id: mm-size
title: MM Size
sidebar_label: MM Size
---

# MM Size

## Overview

**MM Size** is the list of stone sizes in millimetres, for example 3.5. Each size has only a value. MM sizes are picked in the [Diamond Group Master](../diamond-group-master.md) to price stones, in the diamond options of [Birthstone Products](../configurator-products/birthstone-products.md), and are named in the product sheets of several configurators.

On this page you can add, change, switch off and delete sizes.

:::note[One list for every store]
MM sizes are shared by every store on the Storefront platform. When you add, change, switch off or delete a size, every store sees the change straight away.
:::

:::note[Who can use it]
The page opens for users whose role gives access to it (see [Roles](../../roles-permission/roles.md)). **Add MM Size** needs **Add** permission. The **Edit** icon and the on/off switch need **Edit** permission, and the **Delete** icon needs **Delete** permission. The **Value** field and the save button in the drawer also need **Edit** permission, even when you add a new size. Only a TCC Tech **Super Admin** can save the **Info** text.
:::

---

## Data Displayed

### MM Size Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Type part of a size. The list refreshes about one second after you stop typing and goes back to page 1. Clear the box to show every size again. |
| **Filter** | Shows or hides a filter box under each column heading, so you can narrow the rows on the current page by typing in a column. |
| **Info** | Opens the **MM Size Info** drawer. See [Info Text](#info-text). |
| **Add MM Size** | Opens the **Add MM Size** drawer. See [Steps to Add a New MM Size](#steps-to-add-a-new-mm-size). |
| **Edit** | Pencil icon in the **Action** column (tooltip *Edit MM Size*). Opens the **Edit MM Size** drawer with the saved value. |
| **Delete** | Bin icon in the **Action** column (tooltip *Delete MM Size*). See [Steps to Delete an MM Size](#steps-to-delete-an-mm-size). |
| **On/off switch** | Last item in the **Action** column (tooltip *Enable/Disable*). Switches the size between **Active** and **Inactive** at once. See [Switching an MM Size On or Off](#switching-an-mm-size-on-or-off). |
| **View Documentation** | Opens this page. |

### MM Size List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Action** | - | The **Edit** and **Delete** icons, then the on/off switch. | - |
| **Value** | Text | The size in millimetres. | *3.5* |
| **Slug** | Text | Made from the value: lower case, spaces turned into hyphens and other symbols (including the decimal point) removed. It is not a field on the form. | *35* |
| **Status** | Badge | **Active** or **Inactive**. | **Active** |

An empty cell shows **-**.

### MM Size Fields

The **Add MM Size** and **Edit MM Size** drawers have one field.

| Field | Required | Type | Remarks |
| ----- | -------- | ---- | ------- |
| **Value** | ✅ | Text | The size in millimetres, for example 3.5. It cannot start with a minus sign or contain spaces; otherwise **Enter Valid MM size** is shown. The form does not check that it is a number. Its slug must differ from every other size's slug. |

### Statuses

| Status | Badge | Meaning |
| ------ | ----- | ------- |
| **Active** | Green | The size is offered in the lists that use it and can be named in product sheets. A new size starts as **Active**. |
| **Inactive** | Red | The size stays in this list and on records that already use it, but it is no longer offered for new choices. |

---

## How It Works

### Steps to Add a New MM Size

1. Click **Add MM Size**.
2. Enter the **Value**.
3. Click **Add MM Size** at the bottom of the drawer, or **Cancel** to close without saving.

An empty field shows **This Field is required**. When the size is saved, a success message appears, the drawer closes and the list refreshes. If another size already has the same slug, the message **Data already exists** is shown and the drawer stays open.

### Steps to Edit an MM Size

1. Click the **Edit** icon on the row.
2. Change the **Value**.
3. Click **Save MM Size**.

The slug is rebuilt from the new value. The message **Record updated successfully** confirms the change.

### Steps to Delete an MM Size

1. Click the **Delete** icon on the row.
2. The **Are you Sure?** box asks *Are you Sure You would like to delete ?*. Click **YES** to delete the size or **NO** to keep it.

A size can be deleted only when nothing uses it in any store: no diamond group, birthstone diamond option, or ring, three stone, stud, pendant, bracelet or eternity band configurator product. Otherwise the message *This item is currently linked to other modules, Please remove or update the related records before attempting to delete it.* is shown and the size stays in the list. When the delete works, **Record deleted successfully** is shown and the size leaves the list.

### Switching an MM Size On or Off

Click the switch in the **Action** column. The change is saved at once, without a confirmation box. The message **Record updated successfully** appears and the **Status** badge changes. A size can be switched off even while it is in use.

### Info Text

**Info** opens the **MM Size Info** drawer with a **Title** box and a **Description** editor. The drawer loads the saved text, or opens empty if nothing has been saved yet.

1. Enter the **Title** and the **Description**. Both are required (**This Field is required**).
2. Click **Submit** to save, or **Cancel** to close.

Without **Edit** permission the fields and **Submit** are disabled. Only a TCC Tech **Super Admin** can save the text; for anyone else the save is refused and a red message is shown. The storefront does not show the MM size info text.

### Search, Filters, Sorting and Paging

- **Search** looks through every size by value and slug, not just the current page.
- The **Filter** boxes only narrow the rows already on the current page.
- Click the **Value** or **Slug** heading to sort. **Action** and **Status** cannot be sorted.
- The newest sizes are shown first, 50 rows per page by default. Use the paging controls under the list to move between pages or to show 25, 50, 75 or 100 rows.

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No sizes match | **No records to display** |
| Saving a size | The save button shows a loading spinner. |
| Loading the info text | Grey placeholder bars in the drawer. |
| An action fails | A red message with the reason. The drawer stays open. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How MM Size uses it |
| ------ | ------------------- |
| [Roles](../../roles-permission/roles.md) | Decides who can open the page and which buttons are enabled. |

Sizes are typed in here. They do not come from any other module.

### Modules That Depend On It

| Module | How it uses MM sizes |
| ------ | -------------------- |
| [Diamond Group Master](../diamond-group-master.md) | The **MM Size** of a diamond group. Only active sizes are offered. |
| [Birthstone Products](../configurator-products/birthstone-products.md) | The **MM Size** of a diamond option. Only active sizes are listed, smallest first. |
| Configurator products ([Stud](../configurator-products/stud-configurator.md), [Pendant](../configurator-products/pendant-configurator.md), [Bracelet](../configurator-products/bracelet-configurator.md), [Eternity Band](../configurator-products/eternity-band-configurator.md)) | Product sheets name the stone sizes by value. A sheet can only use active sizes. Ring and three stone products also store sizes, so they block a delete. |
| [Audit Logs](../../settings/audit-log.md) | Every add, edit, delete and on/off change is recorded. |

### What Changes If…

| Change | Effect elsewhere |
| ------ | ---------------- |
| A size is changed | The new value shows wherever the size is used, in every store. Product sheets uploaded later must use the new value. |
| A size is switched off | It is no longer offered in the Diamond Group Master or Birthstone Products, and product sheet rows that name it are rejected. Diamond groups and products that already use it keep it. |
| A size is deleted | Possible only when nothing uses it. It disappears from every list. |
| A size is added | Every store can use it straight away. |

---

## Edge Cases / Notes

- **Shared list.** There is one MM size list for the whole platform. Agree changes with every store before changing or switching off a size.
- **Duplicates are found by slug.** The decimal point is dropped from the slug, so *3.5* and *35* have the same slug (*35*) and cannot both exist.
- **No number check.** The form only blocks a leading minus sign and spaces. A value such as *3.5mm* is accepted, so type sizes carefully.
- **Switching off is not checked.** The switch works even while the size is in use. Only **Delete** checks whether the size is in use.
- **Reusing a deleted value.** After a size is deleted, you can add it again. It is a new size and is not linked to anything the old one was used on.
