---
sidebar_position: 9
id: diamond-shape
title: Diamond Shape
sidebar_label: Diamond Shape
---

# Diamond Shape

## Overview

**Diamond Shape** is the list of stone shapes, for example Round, Oval, Princess or Marquise. Each shape has a name, a sort code and an image. Shapes are used almost everywhere stones are: the [Diamond Group Master](../diamond-group-master.md), [Diamond Margin](../../settings/margin-cost-center/diamond-margin.md), the **Diamond Shape** list of the configurator settings, every configurator's product sheets and [Birthstone Products](../configurator-products/birthstone-products.md).

On this page you can add, change, switch off and delete shapes, and write the info text shown to shoppers.

:::note[One list for every store]
Diamond shapes are shared by every store on the Storefront platform. When you add, change, switch off or delete a shape, every store sees the change straight away.
:::

:::note[Who can use it]
The page opens for users whose role gives access to it (see [Roles](../../roles-permission/roles.md)). **Add Diamond Shape** needs **Add** permission. The **Edit** icon and the on/off switch need **Edit** permission, and the **Delete** icon needs **Delete** permission. In the drawer, the **Sort Code** field and the save button need **Edit** permission, even when you add a new shape. Only a TCC Tech **Super Admin** can save the **Info** text.
:::

---

## Data Displayed

### Diamond Shape Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Type part of a shape name. The list refreshes about one second after you stop typing and goes back to page 1. Clear the box to show every shape again. |
| **Filter** | Shows or hides a filter box under each column heading, so you can narrow the rows on the current page by typing in a column. |
| **Info** | Opens the **Diamond Shape Info** drawer. See [Info Text](#info-text). |
| **Add Diamond Shape** | Opens the **Add Diamond Shape** drawer. See [Steps to Add a New Diamond Shape](#steps-to-add-a-new-diamond-shape). |
| **Edit** | Pencil icon in the **Action** column (tooltip *Edit Diamond Shape*). Opens the **Edit Diamond Shape** drawer with the saved name, sort code and image. |
| **Delete** | Bin icon in the **Action** column (tooltip *Delete Diamond Shape*). See [Steps to Delete a Diamond Shape](#steps-to-delete-a-diamond-shape). |
| **On/off switch** | Last item in the **Action** column (tooltip *Enable/Disable*). Switches the shape between **Active** and **Inactive** at once. See [Switching a Diamond Shape On or Off](#switching-a-diamond-shape-on-or-off). |
| **View Documentation** | Opens this page. |

### Diamond Shape List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Action** | - | The **Edit** and **Delete** icons, then the on/off switch. | - |
| **Image** | Image | The shape image. Hover over it to see a larger preview. | - |
| **Name** | Text | The shape name. | *Round* |
| **Slug** | Text | Made from the name: lower case, spaces turned into hyphens and other symbols removed. It is not a field on the form. | *round* |
| **Sort Code** | Text | The code you entered. | *RND* |
| **Status** | Badge | **Active** or **Inactive**. | **Active** |

### Diamond Shape Fields

| Field | Required | Type | Remarks |
| ----- | -------- | ---- | ------- |
| **Diamond Shape Name** | ✅ | Text | The shape name, for example Round. It must differ from every other shape. |
| **Sort Code** | ✅ | Text | A short code, for example RND. It must differ from every other shape's code. |
| **Upload Image** | ✅ | Image | Drop a file or click to choose one. Aspect ratio guide: 100 x 100. If it is missing, **Image is required** is shown. |

An empty text field shows **This Field is required**. The image can be a .jpg, .jpeg, .png, .gif, .webp, .bmp, .svg, .ico, .tiff or .tif file up to 20 MB. A file of another type shows **Only allowed image file types can be uploaded** followed by the allowed list, and a rejected or oversized file shows **You can only upload files with a maximum size of 20 MB.** If you remove the image with the **x** and do not choose another, **Please Upload Image** is shown and you cannot save.

### Statuses

| Status | Badge | Meaning |
| ------ | ----- | ------- |
| **Active** | Green | The shape is offered in the lists that use it and can be named in product sheets. A new shape starts as **Active**. |
| **Inactive** | Red | The shape stays in this list and on records that already use it, but it is no longer offered for new choices. |

---

## How It Works

### Steps to Add a New Diamond Shape

1. Click **Add Diamond Shape**.
2. Enter the **Diamond Shape Name** and the **Sort Code**, and upload an image.
3. Click **Add Diamond Shape** at the bottom of the drawer, or **Cancel** to close without saving.

When the shape is saved, a success message appears, the drawer closes and the list refreshes. If another shape already has the same name or the same sort code, the message **Data already exists** is shown and the drawer stays open.

### Steps to Edit a Diamond Shape

1. Click the **Edit** icon on the row.
2. Change the name, the sort code or the image.
3. Click **Save Diamond Shape**.

The slug is rebuilt from the new name. The message **Record updated successfully** confirms the change.

### Steps to Delete a Diamond Shape

1. Click the **Delete** icon on the row.
2. The **Are you Sure?** box asks *Are you Sure You would like to delete ?*. Click **YES** to delete the shape or **NO** to keep it.

A shape can be deleted only when nothing uses it in any store: no diamond group, diamond margin, birthstone diamond option, or ring, three stone, stud, pendant, bracelet, eternity band, chain or push back product. Otherwise the message *This item is currently linked to other modules, Please remove or update the related records before attempting to delete it.* is shown and the shape stays in the list. When the delete works, **Record deleted successfully** is shown and the shape leaves the list.

### Switching a Diamond Shape On or Off

Click the switch in the **Action** column. The change is saved at once, without a confirmation box. The message **Record updated successfully** appears and the **Status** badge changes. A shape can be switched off even while it is in use.

### Info Text

**Info** opens the **Diamond Shape Info** drawer with a **Title** box and a **Description** editor. The drawer loads the saved text, or opens empty if nothing has been saved yet.

1. Enter the **Title** and the **Description**. Both are required (**This Field is required**).
2. Click **Submit** to save, or **Cancel** to close.

Without **Edit** permission the fields and **Submit** are disabled. Only a TCC Tech **Super Admin** can save the text; for anyone else the save is refused and a red message is shown.

Once a text is saved, the storefront configurator pages show an info icon next to the shape option. Clicking it opens the title and description.

### Search, Filters, Sorting and Paging

- **Search** looks through every shape by name and slug, not just the current page.
- The **Filter** boxes only narrow the rows already on the current page.
- Click the **Name**, **Slug** or **Sort Code** heading to sort. **Action**, **Image** and **Status** cannot be sorted.
- The newest shapes are shown first, 50 rows per page by default. Use the paging controls under the list to move between pages or to show 25, 50, 75 or 100 rows.

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No shapes match | **No records to display** |
| Opening a shape | The image area shows a loading indicator until the image appears. |
| Saving a shape | The save button shows a loading spinner. |
| Loading the info text | Grey placeholder bars in the drawer. |
| An action fails | A red message with the reason. The drawer stays open. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Diamond Shape uses it |
| ------ | ------------------------- |
| [Roles](../../roles-permission/roles.md) | Decides who can open the page and which buttons are enabled. |

Shapes are typed in here. They do not come from any other module.

### Modules That Depend On It

| Module | How it uses diamond shapes |
| ------ | -------------------------- |
| [Diamond Group Master](../diamond-group-master.md) | The **Shape** of a diamond group. Only active shapes are offered. |
| Configurator settings ([Ring](../../config-setting/ring-configurator.md), [Three Stone](../../config-setting/three-stone-configurator.md), [Earring](../../config-setting/earring-configurator.md), [Pendant](../../config-setting/pendant-configurator.md), [Bracelet](../../config-setting/bracelet-configurator.md), [Eternity](../../config-setting/eternity-configurator.md)) | The **Diamond Shape** list shows the active shapes. Each store picks the shapes it offers. A client store only sees the shapes TCC Tech has switched on for that configurator. |
| Configurator products ([Ring](../configurator-products/ring-configurator.md), [Three Stone](../configurator-products/three-stone-configurator.md), [Stud](../configurator-products/stud-configurator.md), [Pendant](../configurator-products/pendant-configurator.md), [Bracelet](../configurator-products/bracelet-configurator.md), [Eternity Band](../configurator-products/eternity-band-configurator.md)), chain and push back products | Product sheets name the center and side stone shapes. The name must match an active shape, ignoring capital letters and extra spaces. |
| [Diamond Margin](../../settings/margin-cost-center/diamond-margin.md) | Margin rules can be set for a shape. |
| [Birthstone Products](../configurator-products/birthstone-products.md) | The **Shape** of a diamond option. Only active shapes are listed. |
| [SKU Builder](../../settings/sku-builder.md) | The shape segment uses each shape's code. |
| [Analytics](../../analytics.md) | Shape names appear on the analytics cards. |
| Storefront configurator pages | Show the [Info Text](#info-text). |
| [Audit Logs](../../settings/audit-log.md) | Every add, edit, delete and on/off change is recorded. |

### What Changes If…

| Change | Effect elsewhere |
| ------ | ---------------- |
| A shape is renamed | The new name shows wherever the shape is used, in every store, including the storefront. Product sheets uploaded later must use the new name. |
| The image is changed | The new image shows wherever the shape image is used. |
| A shape is switched off | It is no longer offered in the Diamond Group Master, the configurator settings or Birthstone Products, and product sheet rows that name it are rejected. Records that already use it keep it. |
| A shape is deleted | Possible only when nothing uses it. It disappears from every list. |
| A shape is added | Every store can use it straight away. |
| The info text changes | The storefront info popup shows the new text. |

---

## Edge Cases / Notes

- **Shared list.** There is one shape list for the whole platform. Agree changes with every store before renaming or switching off a shape.
- **Duplicate check is exact.** The name and sort code checks match capital letters exactly, so *Round* and *round* can both be saved. Avoid this: product sheets match names without regard to capital letters.
- **Locked and unlocked fields.** Without **Edit** permission, **Sort Code** is locked but the name and image areas are not. The shape still cannot be saved.
- **Switching off is not checked.** The switch works even while the shape is in use. Only **Delete** checks whether it is in use.
