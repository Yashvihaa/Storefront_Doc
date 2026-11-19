---
sidebar_position: 19
id: stone-type
title: Stone Type
sidebar_label: Stone Type
---

# Stone Type

## Overview

**Stone Type** holds the names and images of the three stone types: **Natural**, **Lab Grown** and **No Diamond**. Each entry has one display name for diamonds, one for gemstones, and an image. The entries feed the **Stone Type Master** of every configurator's settings.

On this page you can add, change, switch off and delete stone type entries.

:::note[One list for every store]
Stone types are shared by every store on the Storefront platform. When you add, change, switch off or delete an entry, every store sees the change straight away.
:::

:::note[Who can use it]
The page opens for users whose role gives access to it (see [Roles](../../roles-permission/roles.md)). **Add Stone Type** needs **Add** permission. The **Edit** icon and the on/off switch need **Edit** permission, and the **Delete** icon needs **Delete** permission. The fields and the save button in the drawer also need **Edit** permission, even when you add a new entry.
:::

---

## Data Displayed

### Stone Type Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Type part of a diamond name or gemstone name. The list refreshes about one second after you stop typing and goes back to page 1. Clear the box to show every entry again. |
| **Filter** | Shows or hides a filter box under each column heading, so you can narrow the rows on the current page by typing in a column. |
| **Add Stone Type** | Opens the **Add Stone Type** drawer. See [Steps to Add a New Stone Type](#steps-to-add-a-new-stone-type). |
| **Edit** | Pencil icon in the **Action** column (tooltip *Edit Stone*). Opens the **Edit Stone Type** drawer with the saved values. |
| **Delete** | Bin icon in the **Action** column (tooltip *Delete Stone*). See [Steps to Delete a Stone Type](#steps-to-delete-a-stone-type). |
| **On/off switch** | Last item in the **Action** column (tooltip *Enable/Disable*). Switches the entry between **Active** and **Inactive** at once. See [Switching a Stone Type On or Off](#switching-a-stone-type-on-or-off). |
| **View Documentation** | Opens this page. |

This page has no **Info** button.

### Stone Type List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Action** | - | The **Edit** and **Delete** icons, then the on/off switch. | - |
| **Image** | Image | The stone type image. Hover over it to see a larger preview. | - |
| **Diamond Name** | Text | The name shown for diamonds of this type. | *Lab Grown Diamond* |
| **Gemstone Name** | Text | The name shown for gemstones of this type. | *Lab Grown Gemstone* |
| **Status** | Badge | **Active** or **Inactive**. | **Active** |

The **Stone Type** you chose (**Natural**, **Lab Grown** or **No Diamond**) is not shown as a column. Open **Edit** to see it.

### Stone Type Fields

| Field | Required | Type | Remarks |
| ----- | -------- | ---- | ------- |
| **Diamond Name** | ✅ | Text | The name shown for diamonds of this type, for example Lab Grown Diamond. |
| **Gemstone Name** | ✅ | Text | The name shown for gemstones of this type, for example Lab Grown Gemstone. |
| **Stone Type** | ✅ | Choice | Choose one of the boxes: **Natural**, **Lab Grown** or **No Diamond**. Each type can have only one entry. |
| **Upload Image** | ✅ | Image | Drop a file or click to choose one. Aspect ratio guide: 100 x 100. If it is missing, **Image is required** is shown. |

An empty text field or an unselected **Stone Type** shows **This Field is required**. The image can be a .jpg, .jpeg, .png, .gif, .webp, .bmp, .svg, .ico, .tiff or .tif file up to 20 MB. A file of another type shows **Only allowed image file types can be uploaded** followed by the allowed list, and a rejected or oversized file shows **You can only upload files with a maximum size of 20 MB.** If you remove the image with the **x** and do not choose another, **Please Upload Image** is shown and you cannot save.

### Statuses

| Status | Badge | Meaning |
| ------ | ----- | ------- |
| **Active** | Green | The entry is offered in the configurator settings. A new entry starts as **Active**. |
| **Inactive** | Red | The entry stays in this list but is no longer offered in the configurator settings. |

---

## How It Works

### Steps to Add a New Stone Type

1. Click **Add Stone Type**.
2. Enter the **Diamond Name** and **Gemstone Name**, choose the **Stone Type** and upload an image.
3. Click **Add Stone Type** at the bottom of the drawer, or **Cancel** to close without saving.

When the entry is saved, a success message appears, the drawer closes and the list refreshes. If an entry for that stone type already exists, the message *Stone Type already exists!* is shown and the drawer stays open.

### Steps to Edit a Stone Type

1. Click the **Edit** icon on the row.
2. Change the names, the stone type or the image.
3. Click **Save Stone Type**.

You cannot switch an entry to a stone type that already has another entry. The message **Record updated successfully** confirms the change.

### Steps to Delete a Stone Type

1. Click the **Delete** icon on the row.
2. The **Are you Sure?** box asks *Are you Sure You would like to delete ?*. Click **YES** to delete the entry or **NO** to keep it.

The entry is deleted straight away. There is no check for whether a configurator uses it. **Record deleted successfully** confirms the delete.

### Switching a Stone Type On or Off

Click the switch in the **Action** column. The change is saved at once, without a confirmation box. The message **Record updated successfully** appears and the **Status** badge changes.

### Search, Filters, Sorting and Paging

- **Search** looks through every entry by diamond name, gemstone name and slug, not just the current page.
- The **Filter** boxes only narrow the rows already on the current page.
- Click the **Diamond Name** or **Gemstone Name** heading to sort. **Action**, **Image** and **Status** cannot be sorted.
- The newest entries are shown first, 50 rows per page by default. Use the paging controls under the list to move between pages or to show 25, 50, 75 or 100 rows.

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No entries match | **No records to display** |
| Opening an entry | The image area shows a loading indicator until the image appears. |
| Saving an entry | The save button shows a loading spinner. |
| An action fails | A red message with the reason. The drawer stays open. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Stone Type uses it |
| ------ | ---------------------- |
| [Roles](../../roles-permission/roles.md) | Decides who can open the page and which buttons are enabled. |

The three stone types are fixed. Only their names and images are set here.

### Modules That Depend On It

| Module | How it uses stone types |
| ------ | ----------------------- |
| Configurator settings ([Ring](../../config-setting/ring-configurator.md), [Three Stone](../../config-setting/three-stone-configurator.md), [Earring](../../config-setting/earring-configurator.md), [Pendant](../../config-setting/pendant-configurator.md), [Bracelet](../../config-setting/bracelet-configurator.md), [Eternity](../../config-setting/eternity-configurator.md), [HLD Products](../../config-setting/hld-products.md), [Single Dynamic Product](../../config-setting/single-dynamic-product.md)) | The **Stone Type Master** lists the active entries. Each store picks the types it offers. A client store only sees the types TCC Tech has switched on for that configurator. |
| Storefront configurator pages | Show the diamond and gemstone names as the stone type labels. |
| [SKU Builder](../../settings/sku-builder.md) | The stone type segment uses each entry's code. Unless a code is set on that page, the diamond name is used. |
| [Audit Logs](../../settings/audit-log.md) | Every add, edit, delete and on/off change is recorded. |

### What Changes If…

| Change | Effect elsewhere |
| ------ | ---------------- |
| A name is changed | The new name shows in the configurator settings and on the storefront, in every store. In SKU Builder the code changes too, unless a code was set there. |
| An entry is switched off | It is no longer offered in the configurator settings. |
| An entry is deleted | It disappears from the configurator settings straight away, even if stores were offering it. |

---

## Edge Cases / Notes

- **Shared list.** There is one stone type list for the whole platform. Agree changes with every store.
- **At most three entries.** Each of **Natural**, **Lab Grown** and **No Diamond** can have only one entry.
- **Delete is not checked.** Unlike most masters, deleting an entry does not check whether it is in use. Switch it off instead if you may need it again.
- **Not the Stone Master type.** The **Diamond** / **Gemstone** choice on [Stone Master](./stone-master.md) is separate from this list.
