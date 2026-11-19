---
sidebar_position: 7
id: color
title: Color
sidebar_label: Color
---

# Color

## Overview

**Color** is the list of diamond color grades, for example D, E or F. Each color has only a name. The colors are picked in the [Diamond Group Master](../diamond-group-master.md) to price diamonds, in [Diamond Margin](../../settings/margin-cost-center/diamond-margin.md) rules and in the diamond options of [Birthstone Products](../configurator-products/birthstone-products.md).

On this page you can add, rename, switch off and delete colors, and write the info text shown to shoppers.

:::note[One list for every store]
Colors are shared by every store on the Storefront platform. When you add, rename, switch off or delete a color, every store sees the change straight away.
:::

:::note[Who can use it]
The page opens for users whose role gives access to it (see [Roles](../../roles-permission/roles.md)). **Add Color** needs **Add** permission. The **Edit** icon and the on/off switch need **Edit** permission, and the **Delete** icon needs **Delete** permission. The **Color Name** field and the save button in the drawer also need **Edit** permission, even when you add a new color. Only a TCC Tech **Super Admin** can save the **Info** text.
:::

---

## Data Displayed

### Color Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Type part of a color name. The list refreshes about one second after you stop typing and goes back to page 1. Clear the box to show every color again. |
| **Filter** | Shows or hides a filter box under each column heading, so you can narrow the rows on the current page by typing in a column. |
| **Info** | Opens the **Color Info** drawer. See [Info Text](#info-text). |
| **Add Color** | Opens the **Add Color** drawer. See [Steps to Add a New Color](#steps-to-add-a-new-color). |
| **Edit** | Pencil icon in the **Action** column (tooltip *Edit Color*). Opens the **Edit Color** drawer with the saved name. |
| **Delete** | Bin icon in the **Action** column (tooltip *Delete Color*). See [Steps to Delete a Color](#steps-to-delete-a-color). |
| **On/off switch** | Last item in the **Action** column (tooltip *Enable/Disable*). Switches the color between **Active** and **Inactive** at once. See [Switching a Color On or Off](#switching-a-color-on-or-off). |
| **View Documentation** | Opens this page. |

### Color List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Action** | - | The **Edit** and **Delete** icons, then the on/off switch. | - |
| **Name** | Text | The color name. | *D* |
| **Slug** | Text | Made from the name: lower case, spaces turned into hyphens and other symbols removed. It is not a field on the form. | *d* |
| **Status** | Badge | **Active** or **Inactive**. | **Active** |

An empty cell shows **-**.

### Color Fields

The **Add Color** and **Edit Color** drawers have one field.

| Field | Required | Type | Remarks |
| ----- | -------- | ---- | ------- |
| **Color Name** | ✅ | Text | The color name, for example D. It must differ from every other color, ignoring capital letters and spaces at either end. |

### Statuses

| Status | Badge | Meaning |
| ------ | ----- | ------- |
| **Active** | Green | The color is offered in the lists that use it. A new color starts as **Active**. |
| **Inactive** | Red | The color stays in this list and on records that already use it, but it is no longer offered for new choices. |

---

## How It Works

### Steps to Add a New Color

1. Click **Add Color**.
2. Enter the **Color Name**.
3. Click **Add Color** at the bottom of the drawer, or **Cancel** to close without saving.

If the field is empty, **This Field is required** is shown. When the color is saved, a success message appears, the drawer closes and the list refreshes. If a color with the same name already exists, the message **Data already exists** is shown and the drawer stays open.

### Steps to Edit a Color

1. Click the **Edit** icon on the row.
2. Change the **Color Name**.
3. Click **Save Color**.

The slug is rebuilt from the new name. The message **Record updated successfully** confirms the change.

### Steps to Delete a Color

1. Click the **Delete** icon on the row.
2. The **Are you Sure?** box asks *Are you Sure You would like to delete ?*. Click **YES** to delete the color or **NO** to keep it.

A color can be deleted only when nothing uses it in any store: no diamond group, diamond margin or birthstone diamond option. Otherwise the message *This item is currently linked to other modules, Please remove or update the related records before attempting to delete it.* is shown and the color stays in the list. When the delete works, **Record deleted successfully** is shown and the color leaves the list.

### Switching a Color On or Off

Click the switch in the **Action** column. The change is saved at once, without a confirmation box. The message **Record updated successfully** appears and the **Status** badge changes. A color can be switched off even while it is in use.

### Info Text

**Info** opens the **Color Info** drawer with a **Title** box and a **Description** editor. The drawer loads the saved text, or opens empty if nothing has been saved yet.

1. Enter the **Title** and the **Description**. Both are required (**This Field is required**).
2. Click **Submit** to save, or **Cancel** to close.

Without **Edit** permission the fields and **Submit** are disabled. Only a TCC Tech **Super Admin** can save the text; for anyone else the save is refused and a red message is shown.

Once a text is saved, the storefront configurator pages show an info icon next to the color option. Clicking it opens the title and description.

### Search, Filters, Sorting and Paging

- **Search** looks through every color by name, not just the current page.
- The **Filter** boxes only narrow the rows already on the current page.
- Click the **Name** or **Slug** heading to sort. **Action** and **Status** cannot be sorted.
- The newest colors are shown first, 50 rows per page by default. Use the paging controls under the list to move between pages or to show 25, 50, 75 or 100 rows.

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No colors match | **No records to display** |
| Saving a color | The save button shows a loading spinner. |
| Loading the info text | Grey placeholder bars in the drawer. |
| An action fails | A red message with the reason. The drawer stays open. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Color uses it |
| ------ | ----------------- |
| [Roles](../../roles-permission/roles.md) | Decides who can open the page and which buttons are enabled. |

Colors are typed in here. They do not come from any other module.

### Modules That Depend On It

| Module | How it uses colors |
| ------ | ------------------ |
| [Diamond Group Master](../diamond-group-master.md) | The **Color** of each diamond group. Only active colors are offered. |
| Configurator settings ([Ring](../../config-setting/ring-configurator.md), [Three Stone](../../config-setting/three-stone-configurator.md), [Earring](../../config-setting/earring-configurator.md), [Pendant](../../config-setting/pendant-configurator.md), [Bracelet](../../config-setting/bracelet-configurator.md), [Eternity](../../config-setting/eternity-configurator.md), [HLD Products](../../config-setting/hld-products.md), [Single Dynamic Product](../../config-setting/single-dynamic-product.md)) | The **Diamond Color and Clarity** lists are built from the color and clarity pairs used in the Diamond Group Master. |
| [Diamond Margin](../../settings/margin-cost-center/diamond-margin.md) | Margin rules can be set for a color. |
| [Birthstone Products](../configurator-products/birthstone-products.md) | The **Color** of a diamond option. Only active colors are listed. |
| [SKU Builder](../../settings/sku-builder.md) | The color segment uses each color's code. Unless a code is set on that page, the color name is used. |
| Storefront configurator pages | Show the [Info Text](#info-text). |
| [Audit Logs](../../settings/audit-log.md) | Every add, edit, delete and on/off change is recorded. |

### What Changes If…

| Change | Effect elsewhere |
| ------ | ---------------- |
| A color is renamed | The new name shows wherever the color is used, in every store, including diamond groups and products that already use it. In SKU Builder the color's code changes too, unless a code was set there. |
| A color is switched off | It is no longer offered in the Diamond Group Master or Birthstone Products. Diamond groups, margins and products that already use it keep it. |
| A color is deleted | Possible only when nothing uses it. It disappears from every list. |
| A color is added | Every store can use it straight away. |
| The info text changes | The storefront info popup shows the new text. |

---

## Edge Cases / Notes

- **Shared list.** There is one color list for the whole platform. Agree changes with every store before renaming or switching off a color.
- **Duplicate names.** *d* and *D* count as the same name, and so do names that differ only by spaces at either end.
- **Switching off is not checked.** The switch works even while the color is in use. Only **Delete** checks whether the color is in use.
- **Reusing a deleted name.** After a color is deleted, you can add a new color with the same name. It is a new color and is not linked to anything the old one was used on.
- **Slug.** The slug is always made from the name. You cannot type your own.
