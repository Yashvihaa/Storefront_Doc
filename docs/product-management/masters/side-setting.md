---
sidebar_position: 17
id: side-setting
title: Side Setting Style
sidebar_label: Side Setting Style
---

# Side Setting Style

## Overview

**Side Setting Style** is the list of side setting styles, for example Pave or 3 Prong. Each style has a name and an image. Styles are offered in the **Side Setting Master** of every configurator's settings and are named as the setting type in the product sheets of ring, three stone, bracelet, eternity band and huggies stud products.

On this page you can add, change, switch off and delete styles, and write the info text shown to shoppers.

:::note[One list for every store]
Side setting styles are shared by every store on the Storefront platform. When you add, change, switch off or delete a style, every store sees the change straight away.
:::

:::note[Who can use it]
The page opens for users whose role gives access to it (see [Roles](../../roles-permission/roles.md)). **Add Side Setting Style** needs **Add** permission. The **Edit** icon and the on/off switch need **Edit** permission, and the **Delete** icon needs **Delete** permission. The fields and the save button in the drawer also need **Edit** permission, even when you add a new style. Only a TCC Tech **Super Admin** can save the **Info** text.
:::

---

## Data Displayed

### Side Setting Style Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Type part of a style name. The list refreshes about one second after you stop typing and goes back to page 1. Clear the box to show every style again. |
| **Filter** | Shows or hides a filter box under each column heading, so you can narrow the rows on the current page by typing in a column. |
| **Info** | Opens the **Side Setting Info** drawer. See [Info Text](#info-text). |
| **Add Side Setting Style** | Opens the **Add Side Setting Style** drawer. See [Steps to Add a New Side Setting Style](#steps-to-add-a-new-side-setting-style). |
| **Edit** | Pencil icon in the **Action** column (tooltip *Edit Side Setting Style*). Opens the **Edit Side Setting Style** drawer with the saved name and image. |
| **Delete** | Bin icon in the **Action** column (tooltip *Delete Side Setting Style*). See [Steps to Delete a Side Setting Style](#steps-to-delete-a-side-setting-style). |
| **On/off switch** | Last item in the **Action** column (tooltip *Enable/Disable*). Switches the style between **Active** and **Inactive** at once. See [Switching a Side Setting Style On or Off](#switching-a-side-setting-style-on-or-off). |
| **View Documentation** | Opens this page. |

### Side Setting Style List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Action** | - | The **Edit** and **Delete** icons, then the on/off switch. | - |
| **Image** | Image | The style image. Hover over it to see a larger preview. | - |
| **Value** | Text | The style name. | *Pave* |
| **Slug** | Text | Made from the name: lower case, spaces turned into hyphens and other symbols removed. It is not a field on the form. | *pave* |
| **Sort Code** | Text | Always **-**. Side setting styles do not keep a sort code. | **-** |
| **Status** | Badge | **Active** or **Inactive**. | **Active** |

### Side Setting Style Fields

| Field | Required | Type | Remarks |
| ----- | -------- | ---- | ------- |
| **Side Setting Style Name** | ✅ | Text | The style name, up to 100 characters. It must differ from every other style, ignoring capital letters. |
| **Sort Code** | ✅ | Text | The form asks for it, but it is not saved. See [Edge Cases / Notes](#edge-cases--notes). |
| **Upload Image** | ✅ | Image | Drop a file or click to choose one. Aspect ratio guide: 100 x 100. If it is missing, **Image is required** is shown. |

An empty text field shows **This Field is required**. The image can be a .jpg, .jpeg, .png, .gif, .webp, .bmp, .svg, .ico, .tiff or .tif file up to 20 MB. A file of another type shows **Only allowed image file types can be uploaded** followed by the allowed list, and a rejected or oversized file shows **You can only upload files with a maximum size of 20 MB.** If you remove the image with the **x** and do not choose another, **Please Upload Image** is shown and you cannot save.

### Statuses

| Status | Badge | Meaning |
| ------ | ----- | ------- |
| **Active** | Green | The style is offered in the configurator settings and can be named in product sheets. A new style starts as **Active**. |
| **Inactive** | Red | The style stays in this list and on products that already use it, but it is no longer offered for new choices. |

---

## How It Works

### Steps to Add a New Side Setting Style

1. Click **Add Side Setting Style**.
2. Enter the **Side Setting Style Name** and any **Sort Code**, and upload an image.
3. Click **Add Side Setting Style** at the bottom of the drawer, or **Cancel** to close without saving.

When the style is saved, a success message appears, the drawer closes and the list refreshes. If a style with the same name already exists, the message **Data already exists** is shown and the drawer stays open.

### Steps to Edit a Side Setting Style

1. Click the **Edit** icon on the row.
2. Change the name or the image. **Sort Code** opens empty; type any value to be allowed to save.
3. Click **Save Side Setting Style**.

The slug is rebuilt from the new name. The message **Record updated successfully** confirms the change.

### Steps to Delete a Side Setting Style

1. Click the **Delete** icon on the row.
2. The **Are you Sure?** box asks *Are you Sure You would like to delete ?*. Click **YES** to delete the style or **NO** to keep it.

A style can be deleted only when no ring, three stone, bracelet, eternity band or stud product uses it, in any store. Otherwise the message *This item is currently linked to other modules, Please remove or update the related records before attempting to delete it.* is shown and the style stays in the list. When the delete works, **Record deleted successfully** is shown and the style leaves the list.

### Switching a Side Setting Style On or Off

Click the switch in the **Action** column. The change is saved at once, without a confirmation box. The message **Record updated successfully** appears and the **Status** badge changes. A style can be switched off even while it is in use.

### Info Text

**Info** opens the **Side Setting Info** drawer with a **Title** box and a **Description** editor. The drawer loads the saved text, or opens empty if nothing has been saved yet.

1. Enter the **Title** and the **Description**. Both are required (**This Field is required**).
2. Click **Submit** to save, or **Cancel** to close.

Without **Edit** permission the fields and **Submit** are disabled. Only a TCC Tech **Super Admin** can save the text; for anyone else the save is refused and a red message is shown.

Once a text is saved, the storefront configurator pages show an info icon next to the side setting option. Clicking it opens the title and description.

### Search, Filters, Sorting and Paging

- **Search** looks through every style by name and slug, not just the current page.
- The **Filter** boxes only narrow the rows already on the current page.
- Click the **Value** or **Slug** heading to sort. **Action**, **Image** and **Status** cannot be sorted.
- The newest styles are shown first, 50 rows per page by default. Use the paging controls under the list to move between pages or to show 25, 50, 75 or 100 rows.

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No styles match | **No records to display** |
| Opening a style | The image area shows a loading indicator until the image appears. |
| Saving a style | The save button shows a loading spinner. |
| Loading the info text | Grey placeholder bars in the drawer. |
| An action fails | A red message with the reason. The drawer stays open. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Side Setting Style uses it |
| ------ | ------------------------------ |
| [Roles](../../roles-permission/roles.md) | Decides who can open the page and which buttons are enabled. |

Styles are typed in here. They do not come from any other module.

### Modules That Depend On It

| Module | How it uses side setting styles |
| ------ | ------------------------------- |
| Configurator settings ([Ring](../../config-setting/ring-configurator.md), [Three Stone](../../config-setting/three-stone-configurator.md), [Earring](../../config-setting/earring-configurator.md), [Pendant](../../config-setting/pendant-configurator.md), [Bracelet](../../config-setting/bracelet-configurator.md), [Eternity](../../config-setting/eternity-configurator.md)) | The **Side Setting Master** lists the active styles. Each store picks the styles it offers, and **Side Setting Image Upload** adds images per configurator. A client store only sees the styles TCC Tech has switched on for that configurator. |
| Configurator products ([Ring](../configurator-products/ring-configurator.md), [Three Stone](../configurator-products/three-stone-configurator.md), [Bracelet](../configurator-products/bracelet-configurator.md), [Eternity Band](../configurator-products/eternity-band-configurator.md), [Stud](../configurator-products/stud-configurator.md)) | Product sheets name the style in the setting type column (the huggies setting type for stud products). The name must match an active style, ignoring capital letters and extra spaces. |
| [SKU Builder](../../settings/sku-builder.md) | The side setting segment uses each style's code. Unless a code is set on that page, the style name is used. |
| [Analytics](../../analytics.md) | Style names appear on the analytics cards. |
| Storefront configurator pages | Show the [Info Text](#info-text). |
| [Audit Logs](../../settings/audit-log.md) | Every add, edit, delete and on/off change is recorded. |

### What Changes If…

| Change | Effect elsewhere |
| ------ | ---------------- |
| A style is renamed | The new name shows wherever the style is used, in every store. Product sheets uploaded later must use the new name. In SKU Builder the code changes too, unless a code was set there. |
| A style is switched off | It is no longer offered in the configurator settings, and sheet rows that name it are rejected. Products that already use it keep it. |
| A style is deleted | Possible only when no product uses it. It disappears from every list. |
| A style is added | Every store can use it straight away. |
| The info text changes | The storefront info popup shows the new text. |

---

## Edge Cases / Notes

- **Shared list.** There is one side setting list for the whole platform. Agree changes with every store before renaming or switching off a style.
- **Setting type in sheets means this list.** The setting type column of ring, three stone, bracelet and eternity band sheets is matched against Side Setting Style, not against [Setting Style](./setting-type-style.md).
- **Sort Code is not kept.** The form requires a **Sort Code**, but side setting styles have nowhere to store it. The value is dropped when you save, the **Sort Code** column always shows **-**, and the field is empty each time you edit, so you must type a value again before saving.
- **Long names.** A name over 100 characters is refused with *Tag name must be at most 100 characters.*
- **Switching off is not checked.** The switch works even while the style is in use. Only **Delete** checks whether it is in use.
