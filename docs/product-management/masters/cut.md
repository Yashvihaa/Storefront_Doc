---
sidebar_position: 8
id: cut
title: Diamond Cut
sidebar_label: Diamond Cut
---

# Diamond Cut

## Overview

**Diamond Cut** is the list of diamond cut grades, for example Good, Very Good or Excellent. Each grade has only a name. The grades are picked in the [Diamond Group Master](../diamond-group-master.md) to price diamonds, in [Diamond Margin](../../settings/margin-cost-center/diamond-margin.md) rules, in the diamond options of [Birthstone Products](../configurator-products/birthstone-products.md) and in the cut lists of the configurator settings.

On this page you can add, rename, switch off and delete cut grades, and write the info text shown to shoppers.

:::note[One list for every store]
Cut grades are shared by every store on the Storefront platform. When you add, rename, switch off or delete a grade, every store sees the change straight away.
:::

:::note[Who can use it]
The page opens for users whose role gives access to it (see [Roles](../../roles-permission/roles.md)). **Add Diamond Cut** needs **Add** permission. The **Edit** icon and the on/off switch need **Edit** permission, and the **Delete** icon needs **Delete** permission. The **Value** field and the save button in the drawer also need **Edit** permission, even when you add a new grade. Only a TCC Tech **Super Admin** can save the **Info** text.
:::

---

## Data Displayed

### Diamond Cut Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Type part of a cut name. The list refreshes about one second after you stop typing and goes back to page 1. Clear the box to show every grade again. |
| **Filter** | Shows or hides a filter box under each column heading, so you can narrow the rows on the current page by typing in a column. |
| **Info** | Opens the **Cut Info** drawer. See [Info Text](#info-text). |
| **Add Diamond Cut** | Opens the **Add Diamond Cut** drawer. See [Steps to Add a New Diamond Cut](#steps-to-add-a-new-diamond-cut). |
| **Edit** | Pencil icon in the **Action** column (tooltip *Edit Diamond Cut*). Opens the **Edit Diamond Cut** drawer and loads the saved value. |
| **Delete** | Bin icon in the **Action** column (tooltip *Delete Diamond Cut*). See [Steps to Delete a Diamond Cut](#steps-to-delete-a-diamond-cut). |
| **On/off switch** | Last item in the **Action** column (tooltip *Enable/Disable*). Switches the grade between **Active** and **Inactive** at once. See [Switching a Diamond Cut On or Off](#switching-a-diamond-cut-on-or-off). |
| **View Documentation** | Opens this page. |

### Diamond Cut List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Action** | - | The **Edit** and **Delete** icons, then the on/off switch. | - |
| **Cut Value** | Text | The cut grade name. | *Very Good* |
| **Slug** | Text | Made from the name: lower case, spaces turned into hyphens and other symbols removed. It is not a field on the form. | *very-good* |
| **Status** | Badge | **Active** or **Inactive**. | **Active** |

An empty cell shows **-**.

### Diamond Cut Fields

The **Add Diamond Cut** and **Edit Diamond Cut** drawers have one field.

| Field | Required | Type | Remarks |
| ----- | -------- | ---- | ------- |
| **Value** | ✅ | Text | The cut grade name, for example Excellent. It must differ from every other grade, ignoring capital letters and spaces at either end. |

### Statuses

| Status | Badge | Meaning |
| ------ | ----- | ------- |
| **Active** | Green | The grade is offered in the lists that use it. A new grade starts as **Active**. |
| **Inactive** | Red | The grade stays in this list and on records that already use it, but it is no longer offered for new choices. |

---

## How It Works

### Steps to Add a New Diamond Cut

1. Click **Add Diamond Cut**.
2. Enter the **Value**.
3. Click **Add Diamond Cut** at the bottom of the drawer, or **Cancel** to close without saving.

If the field is empty, **This Field is required** is shown. When the grade is saved, a success message appears, the drawer closes and the list refreshes. If a grade with the same name already exists, the message **Data already exists** is shown and the drawer stays open.

### Steps to Edit a Diamond Cut

1. Click the **Edit** icon on the row. The drawer opens and loads the latest saved value.
2. Change the **Value**.
3. Click **Save Diamond Cut**.

The slug is rebuilt from the new name. The message **Record updated successfully** confirms the change.

### Steps to Delete a Diamond Cut

1. Click the **Delete** icon on the row.
2. The **Are you Sure?** box asks *Are you Sure You would like to delete ?*. Click **YES** to delete the grade or **NO** to keep it.

A grade can be deleted only when nothing uses it in any store: no diamond group, diamond margin or birthstone diamond option. Otherwise the message *This item is currently linked to other modules, Please remove or update the related records before attempting to delete it.* is shown and the grade stays in the list. When the delete works, **Record deleted successfully** is shown and the grade leaves the list.

### Switching a Diamond Cut On or Off

Click the switch in the **Action** column. The change is saved at once, without a confirmation box. The message **Record updated successfully** appears and the **Status** badge changes. A grade can be switched off even while it is in use.

### Info Text

**Info** opens the **Cut Info** drawer with a **Title** box and a **Description** editor. The drawer loads the saved text, or opens empty if nothing has been saved yet.

1. Enter the **Title** and the **Description**. Both are required (**This Field is required**).
2. Click **Submit** to save, or **Cancel** to close.

Without **Edit** permission the fields and **Submit** are disabled. Only a TCC Tech **Super Admin** can save the text; for anyone else the save is refused and a red message is shown.

Once a text is saved, the storefront configurator pages show an info icon next to the cut option. Clicking it opens the title and description.

### Search, Filters, Sorting and Paging

- **Search** looks through every grade by name and slug, not just the current page.
- The **Filter** boxes only narrow the rows already on the current page.
- Click the **Cut Value** or **Slug** heading to sort. **Action** and **Status** cannot be sorted.
- The newest grades are shown first, 50 rows per page by default. Use the paging controls under the list to move between pages or to show 25, 50, 75 or 100 rows.

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No grades match | **No records to display** |
| Saving a grade | The save button shows a loading spinner. |
| Loading the info text | Grey placeholder bars in the drawer. |
| An action fails | A red message with the reason. The drawer stays open. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Diamond Cut uses it |
| ------ | ----------------------- |
| [Roles](../../roles-permission/roles.md) | Decides who can open the page and which buttons are enabled. |

Cut grades are typed in here. They do not come from any other module.

### Modules That Depend On It

| Module | How it uses cut grades |
| ------ | ---------------------- |
| [Diamond Group Master](../diamond-group-master.md) | The **Cut** of each diamond group. Only active grades are offered. |
| Configurator settings ([Ring](../../config-setting/ring-configurator.md), [Three Stone](../../config-setting/three-stone-configurator.md), [Earring](../../config-setting/earring-configurator.md), [Pendant](../../config-setting/pendant-configurator.md), [Bracelet](../../config-setting/bracelet-configurator.md), [Eternity](../../config-setting/eternity-configurator.md), [HLD Products](../../config-setting/hld-products.md), [Single Dynamic Product](../../config-setting/single-dynamic-product.md)) | The **Diamond Cut Master**, **Side Stone Cuts** and **Head Diamond Cut Master** lists show the active cut grades. |
| [Diamond Margin](../../settings/margin-cost-center/diamond-margin.md) | Margin rules can be set for a cut. |
| [Birthstone Products](../configurator-products/birthstone-products.md) | The **Cut** of a diamond option. Only active grades are listed. |
| [SKU Builder](../../settings/sku-builder.md) | The cut segment uses each grade's code. Unless a code is set on that page, the grade name is used. |
| Storefront configurator pages | Show the [Info Text](#info-text). |
| [Audit Logs](../../settings/audit-log.md) | Every add, edit, delete and on/off change is recorded. |

### What Changes If…

| Change | Effect elsewhere |
| ------ | ---------------- |
| A grade is renamed | The new name shows wherever the grade is used, in every store, including diamond groups and products that already use it. In SKU Builder the grade's code changes too, unless a code was set there. |
| A grade is switched off | It is no longer offered in the Diamond Group Master, Birthstone Products or the configurator settings cut lists. Diamond groups, margins and products that already use it keep it. |
| A grade is deleted | Possible only when nothing uses it. It disappears from every list. |
| A grade is added | Every store can use it straight away. It also appears in the configurator settings cut lists, where each store chooses whether to offer it. |
| The info text changes | The storefront info popup shows the new text. |

---

## Edge Cases / Notes

- **Shared list.** There is one cut list for the whole platform. Agree changes with every store before renaming or switching off a grade.
- **Duplicate names.** *excellent* and *Excellent* count as the same name, and so do names that differ only by spaces at either end.
- **Switching off is not checked.** The switch works even while the grade is in use. Only **Delete** checks whether the grade is in use.
- **Reusing a deleted name.** After a grade is deleted, you can add a new grade with the same name. It is a new grade and is not linked to anything the old one was used on.
- **Slug.** The slug is always made from the name. You cannot type your own.
