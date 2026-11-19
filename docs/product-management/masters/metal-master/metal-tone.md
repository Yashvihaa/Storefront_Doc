---
sidebar_position: 2
id: metal-tone
title: Metal Tone
sidebar_label: Metal Tone
---

# Metal Tone

## Overview

**Metal Tone** is the list of metal colours, for example Rose Gold, Yellow Gold and White Gold. Each tone belongs to one metal from [Metals](./metals.md) and has a name, a sort code and an image. Tones are offered in the **Metal Tone Master** of the configurator settings and in the metal options of [Birthstone Products](../../configurator-products/birthstone-products.md).

On this page you can add, change, switch off and delete tones, and write the info text shown to shoppers.

:::note[One list for every store]
Metal tones are shared by every store on the Storefront platform. When you add, change, switch off or delete a tone, every store sees the change straight away.
:::

:::note[Who can use it]
The page opens for users whose role gives access to it (see [Roles](../../../roles-permission/roles.md)). **Add Metal Tone** needs **Add** permission. The **Edit** icon and the on/off switch need **Edit** permission, and the **Delete** icon needs **Delete** permission. The fields and the save button in the drawer also need **Edit** permission, even when you add a new tone. Only a TCC Tech **Super Admin** can save the **Info** text.
:::

---

## Data Displayed

### Metal Tone Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Type part of a tone name. The list refreshes about one second after you stop typing and goes back to page 1. Clear the box to show every tone again. |
| **Filter** | Shows or hides a filter box under each column heading, so you can narrow the rows on the current page by typing in a column. |
| **Info** | Opens the **Metal Tone Info** drawer. See [Info Text](#info-text). |
| **Add Metal Tone** | Opens the **Add Metal Tone** drawer. See [Steps to Add a New Metal Tone](#steps-to-add-a-new-metal-tone). |
| **Edit** | Pencil icon in the **Action** column (tooltip *Edit Metal Tone*). Opens the **Edit Metal Tone** drawer with the saved values. |
| **Delete** | Bin icon in the **Action** column (tooltip *Delete Metal Tone*). See [Steps to Delete a Metal Tone](#steps-to-delete-a-metal-tone). |
| **On/off switch** | Last item in the **Action** column (tooltip *Enable/Disable*). Switches the tone between **Active** and **Inactive** at once. See [Switching a Metal Tone On or Off](#switching-a-metal-tone-on-or-off). |
| **View Documentation** | Opens this page. |

### Metal Tone List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Action** | - | The **Edit** and **Delete** icons, then the on/off switch. | - |
| **Image** | Image | The tone image. Hover over it to see a larger preview. | - |
| **Metal Tone** | Text | The tone name. | *Rose Gold* |
| **Slug** | Text | Made from the name: lower case, spaces turned into hyphens and other symbols removed. It is not a field on the form. | *rose-gold* |
| **Sort Code** | Text | The code you entered. | *RG* |
| **Status** | Badge | **Active** or **Inactive**. | **Active** |

The metal a tone belongs to is not shown as a column. Open **Edit** to see it.

### Metal Tone Fields

| Field | Required | Type | Remarks |
| ----- | -------- | ---- | ------- |
| **Metal Tone Name** | ✅ | Text | The tone name, for example Rose Gold. It must differ from every other tone, ignoring capital letters. |
| **Sort Code** | ✅ | Text | A short code, for example RG. It must differ from every other tone's code, ignoring capital letters. Read-only when you edit. |
| **Select Metal** | ✅ | Choice | The metal the tone belongs to. Choose one of the boxes; only active metals are listed. |
| **Upload Image** | ✅ | Image | Drop a file or click to choose one. Aspect ratio guide: 50 x 50. If it is missing, **Image is required** is shown. |

An empty field, or no metal chosen when you add a tone, shows **This Field is required**. The image can be a .jpg, .jpeg, .png, .gif, .webp, .bmp, .svg, .ico, .tiff or .tif file up to 20 MB. A file of another type shows **Only allowed image file types can be uploaded** followed by the allowed list, and a rejected or oversized file shows **You can only upload files with a maximum size of 20 MB.** If you remove the image with the **x** and do not choose another, **Please Upload Image** is shown and you cannot save.

### Statuses

| Status | Badge | Meaning |
| ------ | ----- | ------- |
| **Active** | Green | The tone is offered in the lists that use it. A new tone starts as **Active**. |
| **Inactive** | Red | The tone stays in this list and on records that already use it, but it is no longer offered for new choices. |

---

## How It Works

### Steps to Add a New Metal Tone

1. Click **Add Metal Tone**.
2. Enter the **Metal Tone Name** and **Sort Code**, choose the metal in **Select Metal** and upload an image.
3. Click **Add Metal Tone** at the bottom of the drawer, or **Cancel** to close without saving.

When the tone is saved, a success message appears, the drawer closes and the list refreshes. If another tone already has the same name or sort code, the message **Data already exists** is shown and the drawer stays open.

### Steps to Edit a Metal Tone

1. Click the **Edit** icon on the row.
2. Change the name, the metal or the image. The sort code cannot be changed.
3. Click **Save Metal Tone**.

The slug is rebuilt from the new name. The message **Record updated successfully** confirms the change.

### Steps to Delete a Metal Tone

1. Click the **Delete** icon on the row.
2. The **Are you Sure?** box asks *Are you Sure You would like to delete ?*. Click **YES** to delete the tone or **NO** to keep it.

A tone can be deleted only when no Birthstone metal option uses it and no store has picked it as the **Metal Tone Identifier** on [Front-End Setting](../../../settings/front-end-setting.md). Otherwise the message *This item is currently linked to other modules, Please remove or update the related records before attempting to delete it.* is shown and the tone stays in the list. When the delete works, **Record deleted successfully** is shown and the tone leaves the list.

### Switching a Metal Tone On or Off

Click the switch in the **Action** column. The change is saved at once, without a confirmation box. The message **Record updated successfully** appears and the **Status** badge changes. A tone can be switched off even while it is in use.

### Info Text

**Info** opens the **Metal Tone Info** drawer with a **Title** box and a **Description** editor. The drawer loads the saved text, or opens empty if nothing has been saved yet.

1. Enter the **Title** and the **Description**. Both are required (**This Field is required**).
2. Click **Submit** to save, or **Cancel** to close.

Without **Edit** permission the fields and **Submit** are disabled. Only a TCC Tech **Super Admin** can save the text; for anyone else the save is refused and a red message is shown.

Once a text is saved, the storefront ring, three stone, bracelet and eternity band configurators show an info icon next to the metal tone option. Clicking it opens the title and description.

### Search, Filters, Sorting and Paging

- **Search** looks through every tone by name and slug, not just the current page.
- The **Filter** boxes only narrow the rows already on the current page.
- Click the **Metal Tone**, **Slug** or **Sort Code** heading to sort. **Action**, **Image** and **Status** cannot be sorted.
- The newest tones are shown first, 50 rows per page by default. Use the paging controls under the list to move between pages or to show 25, 50, 75 or 100 rows.

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No tones match | **No records to display** |
| Opening a tone | The image area shows a loading indicator until the image appears. |
| Saving a tone | The save button shows a loading spinner. |
| Loading the info text | Grey placeholder bars in the drawer. |
| An action fails | A red message with the reason. The drawer stays open. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Metal Tone uses it |
| ------ | ---------------------- |
| [Metals](./metals.md) | Each tone belongs to one metal. **Select Metal** lists only active metals. |
| [Roles](../../../roles-permission/roles.md) | Decides who can open the page and which buttons are enabled. |

### Modules That Depend On It

| Module | How it uses metal tones |
| ------ | ----------------------- |
| Configurator settings ([Ring](../../../config-setting/ring-configurator.md), [Three Stone](../../../config-setting/three-stone-configurator.md), [Earring](../../../config-setting/earring-configurator.md), [Pendant](../../../config-setting/pendant-configurator.md), [Bracelet](../../../config-setting/bracelet-configurator.md), [Eternity](../../../config-setting/eternity-configurator.md)) | The **Metal Tone Master** lists the active tones. Each store picks the tones it offers. A client store only sees the tones TCC Tech has switched on for that configurator. |
| [Birthstone Products](../../configurator-products/birthstone-products.md) | The metal options list the active tones of each metal. |
| [Front-End Setting](../../../settings/front-end-setting.md) | **Metal Tone Identifier** points at a tone in this list. |
| [SKU Builder](../../../settings/sku-builder.md) | The metal tone, head tone, shank tone and band tone segments use each tone's code. |
| Storefront configurator pages | Show the [Info Text](#info-text). |
| [Audit Logs](../../../settings/audit-log.md) | Every add, edit, delete and on/off change is recorded. |

### What Changes If…

| Change | Effect elsewhere |
| ------ | ---------------- |
| A tone is renamed | The new name shows wherever the tone is used, in every store. |
| A tone is moved to another metal | It is offered under the new metal in the Birthstone metal options. |
| The image is changed | The new image shows wherever the tone image is used. |
| A tone is switched off | It is no longer offered in the configurator settings or Birthstone Products. Products that already use it keep it. |
| A tone is deleted | Possible only when no Birthstone option uses it and no store has it as its **Metal Tone Identifier**. It disappears from every list. |
| The info text changes | The storefront info popup shows the new text. |

---

## Edge Cases / Notes

- **Shared list.** There is one tone list for the whole platform. Agree changes with every store before renaming or switching off a tone.
- **Sort code is fixed.** Pick the sort code carefully: it cannot be changed after the tone is created.
- **Inactive metals.** A tone whose metal is switched off still appears in this list, but the metal is not offered in **Select Metal**.
- **Switching off is not checked.** The switch works even while the tone is in use. Only **Delete** checks whether it is in use.
