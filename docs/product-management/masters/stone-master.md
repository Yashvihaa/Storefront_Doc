---
sidebar_position: 18
id: stone-master
title: Stone Master
sidebar_label: Stone Master
---

# Stone Master

## Overview

**Stone Master** is the list of stones, for example Diamond, Ruby or Sapphire. Each stone has a name, a sort code, an image and a stone type: **Diamond** or **Gemstone**. Stones are used in the [Diamond Group Master](../diamond-group-master.md) to price stones, in the **Stone Master** of the configurator settings, in [Diamond Margin](../../settings/margin-cost-center/diamond-margin.md) rules and in [Birthstone Products](../configurator-products/birthstone-products.md).

On this page you can add, change, switch off and delete stones.

:::note[One list for every store]
Stones are shared by every store on the Storefront platform. When you add, change, switch off or delete a stone, every store sees the change straight away.
:::

:::note[Who can use it]
The page opens for users whose role gives access to it (see [Roles](../../roles-permission/roles.md)). **Add Stone Master** needs **Add** permission. The **Edit** icon and the on/off switch need **Edit** permission, and the **Delete** icon needs **Delete** permission. The fields and the save button in the drawer also need **Edit** permission, even when you add a new stone. Only a TCC Tech **Super Admin** can save the **Info** text.
:::

---

## Data Displayed

### Stone Master Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Type part of a stone name. The list refreshes about one second after you stop typing and goes back to page 1. Clear the box to show every stone again. |
| **Filter** | Shows or hides a filter box under each column heading, so you can narrow the rows on the current page by typing in a column. |
| **Info** | Opens the **Stone Master Info** drawer. See [Info Text](#info-text). |
| **Add Stone Master** | Opens the **Add Stone Master** drawer. See [Steps to Add a New Stone](#steps-to-add-a-new-stone). |
| **Edit** | Pencil icon in the **Action** column (tooltip *Edit Stone*). Opens the **Edit Stone Master** drawer with the saved values. |
| **Delete** | Bin icon in the **Action** column (tooltip *Delete Stone*). See [Steps to Delete a Stone](#steps-to-delete-a-stone). |
| **On/off switch** | Last item in the **Action** column (tooltip *Enable/Disable*). Switches the stone between **Active** and **Inactive** at once. See [Switching a Stone On or Off](#switching-a-stone-on-or-off). |
| **View Documentation** | Opens this page. |

### Stone Master List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Action** | - | The **Edit** and **Delete** icons, then the on/off switch. | - |
| **Image** | Image | The stone image. Hover over it to see a larger preview. | - |
| **Name** | Text | The stone name. | *Ruby* |
| **Slug** | Text | Made from the name: lower case, spaces turned into hyphens and other symbols removed. It is not a field on the form. | *ruby* |
| **Sort Code** | Text | The code you entered. | *RB* |
| **Status** | Badge | **Active** or **Inactive**. | **Active** |

The stone type (**Diamond** or **Gemstone**) is not shown as a column. Open **Edit** to see it.

### Stone Fields

| Field | Required | Type | Remarks |
| ----- | -------- | ---- | ------- |
| **Stone Name** | ✅ | Text | The stone name, for example Ruby. It must differ from every other stone, ignoring capital letters. |
| **Sort Code** | ✅ | Text | A short code. It must differ from every other stone's code, ignoring capital letters. |
| **Stone Type** | ✅ | Choice | Choose one of the boxes: **Diamond** or **Gemstone**. Only one stone can be **Diamond**. |
| **Upload Image** | ✅ | Image | Drop a file or click to choose one. Aspect ratio guide: 100 x 100. If it is missing, **Image is required** is shown. |

An empty field or an unselected **Stone Type** shows **This Field is required**. The image can be a .jpg, .jpeg, .png, .gif, .webp, .bmp, .svg, .ico, .tiff or .tif file up to 20 MB. A file of another type shows **Only allowed image file types can be uploaded** followed by the allowed list, and a rejected or oversized file shows **You can only upload files with a maximum size of 20 MB.** If you remove the image with the **x** and do not choose another, **Please Upload Image** is shown and you cannot save.

### Statuses

| Status | Badge | Meaning |
| ------ | ----- | ------- |
| **Active** | Green | The stone is offered in the lists that use it. A new stone starts as **Active**. |
| **Inactive** | Red | The stone stays in this list and on records that already use it, but it is no longer offered for new choices. |

---

## How It Works

### Steps to Add a New Stone

1. Click **Add Stone Master**.
2. Enter the **Stone Name** and **Sort Code**, choose the **Stone Type** and upload an image.
3. Click **Add Stone** at the bottom of the drawer, or **Cancel** to close without saving.

When the stone is saved, a success message appears, the drawer closes and the list refreshes. The drawer stays open and shows a red message when:

- another stone has the same name or sort code: **Data already exists**
- you chose **Diamond** and a diamond stone already exists: *Diamond type already exists!*

### Steps to Edit a Stone

1. Click the **Edit** icon on the row.
2. Change the name, sort code, stone type or image.
3. Click **Save Stone**.

The same checks as when adding apply. The slug is rebuilt from the new name. The message **Record updated successfully** confirms the change.

### Steps to Delete a Stone

1. Click the **Delete** icon on the row.
2. The **Are you Sure?** box asks *Are you Sure You would like to delete ?*. Click **YES** to delete the stone or **NO** to keep it.

A stone can be deleted only when nothing uses it in any store: no diamond group, diamond margin or birthstone diamond option. Otherwise the message *This item is currently linked to other modules, Please remove or update the related records before attempting to delete it.* is shown and the stone stays in the list. When the delete works, **Record deleted successfully** is shown and the stone leaves the list.

### Switching a Stone On or Off

Click the switch in the **Action** column. The change is saved at once, without a confirmation box. The message **Record updated successfully** appears and the **Status** badge changes. A stone can be switched off even while it is in use.

### Info Text

**Info** opens the **Stone Master Info** drawer with a **Title** box and a **Description** editor. The drawer loads the saved text, or opens empty if nothing has been saved yet.

1. Enter the **Title** and the **Description**. Both are required (**This Field is required**).
2. Click **Submit** to save, or **Cancel** to close.

Without **Edit** permission the fields and **Submit** are disabled. Only a TCC Tech **Super Admin** can save the text. The storefront does not show the stone info text.

### Search, Filters, Sorting and Paging

- **Search** looks through every stone by name and slug, not just the current page.
- The **Filter** boxes only narrow the rows already on the current page.
- Click the **Name**, **Slug** or **Sort Code** heading to sort. **Action**, **Image** and **Status** cannot be sorted.
- The newest stones are shown first, 50 rows per page by default. Use the paging controls under the list to move between pages or to show 25, 50, 75 or 100 rows.

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No stones match | **No records to display** |
| Opening a stone | The image area shows a loading indicator until the image appears. |
| Saving a stone | The save button shows a loading spinner. |
| Loading the info text | Grey placeholder bars in the drawer. |
| An action fails | A red message with the reason. The drawer stays open. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Stone Master uses it |
| ------ | ------------------------ |
| [Roles](../../roles-permission/roles.md) | Decides who can open the page and which buttons are enabled. |

Stones are typed in here. The **Stone Type** choice is a fixed pair of boxes and is not linked to the [Stone Type](./stone-type.md) master.

### Modules That Depend On It

| Module | How it uses stones |
| ------ | ------------------ |
| [Diamond Group Master](../diamond-group-master.md) | The **Stone** of a diamond group. Only active stones are offered. The stone type decides whether a group is treated as a diamond or a gemstone. |
| Configurator settings ([Ring](../../config-setting/ring-configurator.md), [Three Stone](../../config-setting/three-stone-configurator.md), [Earring](../../config-setting/earring-configurator.md), [Pendant](../../config-setting/pendant-configurator.md), [Bracelet](../../config-setting/bracelet-configurator.md), [Eternity](../../config-setting/eternity-configurator.md)) | The **Stone Master** lists the active stones. Each store picks the stones it offers. A client store only sees the stones TCC Tech has switched on for that configurator. |
| [Diamond Margin](../../settings/margin-cost-center/diamond-margin.md) | Margin rules can be set for a stone. |
| [Birthstone Products](../configurator-products/birthstone-products.md) | The **Stone** of a diamond option. Only active stones are listed. |
| [All Products](../all-products.md) | In the product forms, the **Stone** list only offers stones that are priced in the Diamond Group Master. |
| [SKU Builder](../../settings/sku-builder.md) | The stone, side stone and alternate stone segments use each stone's code. |
| [Analytics](../../analytics.md) | Stone names appear on the analytics cards. Only stones marked **Gemstone** count on **Gemstone Analytics**. |
| [Audit Logs](../../settings/audit-log.md) | Every add, edit, delete and on/off change is recorded. |

### What Changes If…

| Change | Effect elsewhere |
| ------ | ---------------- |
| A stone is renamed | The new name shows wherever the stone is used, in every store. |
| The stone type is changed | Diamond groups and analytics that use the stone treat it as the new type. |
| A stone is switched off | It is no longer offered in the Diamond Group Master, the configurator settings or Birthstone Products. Records that already use it keep it. |
| A stone is deleted | Possible only when nothing uses it. It disappears from every list. |
| A stone is added | Every store can use it straight away. It appears in the product forms only once it is priced in the Diamond Group Master. |

---

## Edge Cases / Notes

- **Shared list.** There is one stone list for the whole platform. Agree changes with every store before renaming or switching off a stone.
- **Only one diamond.** Only one stone can have the type **Diamond**. To mark another stone as the diamond, first change or delete the current one.
- **Switching off is not checked.** The switch works even while the stone is in use. Only **Delete** checks whether it is in use.
