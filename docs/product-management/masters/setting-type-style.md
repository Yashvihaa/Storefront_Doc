---
sidebar_position: 15
id: setting-type-style
title: Setting Style
sidebar_label: Setting Style
---

# Setting Style

## Overview

**Setting Style** is the list of stone setting styles, for example Channel, U Micro or Prong. Each style has a name and an image. Offers on [Offers & Discounts](../offers-discounts.md) can be linked to a setting style.

On this page you can add, change, switch off and delete styles.

:::note[Not the side setting list]
The setting type in configurator product sheets and the **Side Setting Master** of the configurator settings use [Side Setting Style](./side-setting.md), not this list.
:::

:::note[One list for every store]
Setting styles are shared by every store on the Storefront platform. When you add, change, switch off or delete a style, every store sees the change straight away.
:::

:::note[Who can use it]
The page opens for users whose role gives access to it (see [Roles](../../roles-permission/roles.md)). **Add Setting Style** needs **Add** permission. The **Edit** icon and the on/off switch need **Edit** permission, and the **Delete** icon needs **Delete** permission. The fields and the save button in the drawer also need **Edit** permission, even when you add a new style. Only a TCC Tech **Super Admin** can save the **Info** text.
:::

---

## Data Displayed

### Setting Style Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Type part of a style name. The list refreshes about one second after you stop typing and goes back to page 1. Clear the box to show every style again. |
| **Filter** | Shows or hides a filter box under each column heading, so you can narrow the rows on the current page by typing in a column. |
| **Info** | Opens the **Setting Type Info** drawer. See [Info Text](#info-text). |
| **Add Setting Style** | Opens the **Add Setting Style** drawer. See [Steps to Add a New Setting Style](#steps-to-add-a-new-setting-style). |
| **Edit** | Pencil icon in the **Action** column (tooltip *Edit Setting Style*). Opens the **Edit Setting Style** drawer with the saved name and image. |
| **Delete** | Bin icon in the **Action** column (tooltip *Delete Setting Style*). See [Steps to Delete a Setting Style](#steps-to-delete-a-setting-style). |
| **On/off switch** | Last item in the **Action** column (tooltip *Enable/Disable*). Switches the style between **Active** and **Inactive** at once. See [Switching a Setting Style On or Off](#switching-a-setting-style-on-or-off). |
| **View Documentation** | Opens this page. |

### Setting Style List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Action** | - | The **Edit** and **Delete** icons, then the on/off switch. | - |
| **Image** | Image | The style image. Hover over it to see a larger preview. | - |
| **Setting Style Value** | Text | The style name. | *Prong* |
| **Slug** | Text | Made from the name: lower case, spaces turned into hyphens and other symbols removed. It is not a field on the form. | *prong* |
| **Sort Code** | Text | Always **-**. Setting styles do not keep a sort code. | **-** |
| **Status** | Badge | **Active** or **Inactive**. | **Active** |

### Setting Style Fields

| Field | Required | Type | Remarks |
| ----- | -------- | ---- | ------- |
| **Setting Style Name** | ✅ | Text | The style name, for example Prong. It must differ from every other style, ignoring capital letters. |
| **Sort Code** | ✅ | Text | The form asks for it, but it is not saved. See [Edge Cases / Notes](#edge-cases--notes). |
| **Upload Image** | ✅ | Image | Drop a file or click to choose one. Aspect ratio guide: 100 x 100. If it is missing, **Image is required** is shown. |

An empty text field shows **This Field is required**. The image can be a .jpg, .jpeg, .png, .gif, .webp, .bmp, .svg, .ico, .tiff or .tif file up to 20 MB. A file of another type shows **Only allowed image file types can be uploaded** followed by the allowed list, and a rejected or oversized file shows **You can only upload files with a maximum size of 20 MB.** If you remove the image with the **x** and do not choose another, **Please Upload Image** is shown and you cannot save.

### Statuses

| Status | Badge | Meaning |
| ------ | ----- | ------- |
| **Active** | Green | The style is available. A new style starts as **Active**. |
| **Inactive** | Red | The style stays in this list and on records that already use it. |

---

## How It Works

### Steps to Add a New Setting Style

1. Click **Add Setting Style**.
2. Enter the **Setting Style Name** and any **Sort Code**, and upload an image.
3. Click **Add Setting Style** at the bottom of the drawer, or **Cancel** to close without saving.

When the style is saved, a success message appears, the drawer closes and the list refreshes. If a style with the same name already exists, the message **Data already exists** is shown and the drawer stays open.

### Steps to Edit a Setting Style

1. Click the **Edit** icon on the row.
2. Change the name or the image. **Sort Code** opens empty; type any value to be allowed to save.
3. Click **Save Setting Style**.

The slug is rebuilt from the new name. The message **Record updated successfully** confirms the change.

### Steps to Delete a Setting Style

1. Click the **Delete** icon on the row.
2. The **Are you Sure?** box asks *Are you Sure You would like to delete ?*. Click **YES** to delete the style or **NO** to keep it.

A style can be deleted only when no offer, in any store, is linked to it. Otherwise the message *This item is currently linked to other modules, Please remove or update the related records before attempting to delete it.* is shown and the style stays in the list. When the delete works, **Record deleted successfully** is shown and the style leaves the list.

### Switching a Setting Style On or Off

Click the switch in the **Action** column. The change is saved at once, without a confirmation box. The message **Record updated successfully** appears and the **Status** badge changes.

### Info Text

**Info** opens the **Setting Type Info** drawer with a **Title** box and a **Description** editor. The drawer loads the saved text, or opens empty if nothing has been saved yet.

1. Enter the **Title** and the **Description**. Both are required (**This Field is required**).
2. Click **Submit** to save, or **Cancel** to close.

Without **Edit** permission the fields and **Submit** are disabled. Only a TCC Tech **Super Admin** can save the text. The storefront does not show the setting style info text.

### Search, Filters, Sorting and Paging

- **Search** looks through every style by name and slug, not just the current page.
- The **Filter** boxes only narrow the rows already on the current page.
- Click the **Setting Style Value** or **Slug** heading to sort. **Action**, **Image** and **Status** cannot be sorted.
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

| Module | How Setting Style uses it |
| ------ | ------------------------- |
| [Roles](../../roles-permission/roles.md) | Decides who can open the page and which buttons are enabled. |

Styles are typed in here. They do not come from any other module.

### Modules That Depend On It

| Module | How it uses setting styles |
| ------ | -------------------------- |
| [Offers & Discounts](../offers-discounts.md) | An offer can be linked to a setting style. A linked style cannot be deleted. |
| [Audit Logs](../../settings/audit-log.md) | Every add, edit, delete and on/off change is recorded. |

### What Changes If…

| Change | Effect elsewhere |
| ------ | ---------------- |
| A style is renamed | The new name applies everywhere the style is linked, in every store. |
| A style is deleted | Possible only when no offer is linked to it. |
| A style is added or switched off | No other page changes. |

---

## Edge Cases / Notes

- **Shared list.** There is one setting style list for the whole platform.
- **Two similar lists.** Setting Style and [Side Setting Style](./side-setting.md) are separate lists. Configurator settings and product sheets only use Side Setting Style.
- **Sort Code is not kept.** The form requires a **Sort Code**, but setting styles have nowhere to store it. The value is dropped when you save, the **Sort Code** column always shows **-**, and the field is empty each time you edit, so you must type a value again before saving.
