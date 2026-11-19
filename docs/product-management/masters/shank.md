---
sidebar_position: 16
id: shank
title: Shank
sidebar_label: Shank
---

# Shank

## Overview

**Shank** is the list of shank styles. The shank is the band of the ring. Each shank has a name and an image. Shanks are offered in the **Shank Master** of the configurator settings and are named in the product sheets of ring and three stone products.

On this page you can add, change, switch off and delete shanks, and write the info text shown to shoppers.

:::note[One list for every store]
Shanks are shared by every store on the Storefront platform. When you add, change, switch off or delete a shank, every store sees the change straight away.
:::

:::note[Who can use it]
The page opens for users whose role gives access to it (see [Roles](../../roles-permission/roles.md)). **Add Shank** needs **Add** permission. The **Edit** icon and the on/off switch need **Edit** permission, and the **Delete** icon needs **Delete** permission. The fields and the save button in the drawer also need **Edit** permission, even when you add a new shank. Only a TCC Tech **Super Admin** can save the **Info** text.
:::

---

## Data Displayed

### Shank Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Type part of a shank name. The list refreshes about one second after you stop typing and goes back to page 1. Clear the box to show every shank again. |
| **Filter** | Shows or hides a filter box under each column heading, so you can narrow the rows on the current page by typing in a column. |
| **Info** | Opens the **Shank Info** drawer. See [Info Text](#info-text). |
| **Add Shank** | Opens the **Add Shank** drawer. See [Steps to Add a New Shank](#steps-to-add-a-new-shank). |
| **Edit** | Pencil icon in the **Action** column (tooltip *Edit Shank*). Opens the **Edit Shank** drawer with the saved name and image. |
| **Delete** | Bin icon in the **Action** column (tooltip *Delete Shank*). See [Steps to Delete a Shank](#steps-to-delete-a-shank). |
| **On/off switch** | Last item in the **Action** column (tooltip *Enable/Disable*). Switches the shank between **Active** and **Inactive** at once. See [Switching a Shank On or Off](#switching-a-shank-on-or-off). |
| **View Documentation** | Opens this page. |

### Shank List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Action** | - | The **Edit** and **Delete** icons, then the on/off switch. | - |
| **Image** | Image | The shank image. Hover over it to see a larger preview. | - |
| **Shank Value** | Text | The shank name. | *Cathedral* |
| **Slug** | Text | Made from the name: lower case, spaces turned into hyphens and other symbols removed. It is not a field on the form. | *cathedral* |
| **Sort Code** | Text | Always **-**. Shanks do not keep a sort code. | **-** |
| **Status** | Badge | **Active** or **Inactive**. | **Active** |

### Shank Fields

| Field | Required | Type | Remarks |
| ----- | -------- | ---- | ------- |
| **Shank Name** | ✅ | Text | The shank name. It must differ from every other shank, ignoring capital letters. |
| **Sort Code** | ✅ | Text | The form asks for it, but it is not saved. See [Edge Cases / Notes](#edge-cases--notes). |
| **Upload Image** | ✅ | Image | Drop a file or click to choose one. Aspect ratio guide: 100 x 100. If it is missing, **Image is required** is shown. |

An empty text field shows **This Field is required**. The image can be a .jpg, .jpeg, .png, .gif, .webp, .bmp, .svg, .ico, .tiff or .tif file up to 20 MB. A file of another type shows **Only allowed image file types can be uploaded** followed by the allowed list, and a rejected or oversized file shows **You can only upload files with a maximum size of 20 MB.** If you remove the image with the **x** and do not choose another, **Please Upload Image** is shown and you cannot save.

### Statuses

| Status | Badge | Meaning |
| ------ | ----- | ------- |
| **Active** | Green | The shank is offered in the configurator settings and can be named in product sheets. A new shank starts as **Active**. |
| **Inactive** | Red | The shank stays in this list and on products that already use it, but it is no longer offered for new choices. |

---

## How It Works

### Steps to Add a New Shank

1. Click **Add Shank**.
2. Enter the **Shank Name** and any **Sort Code**, and upload an image.
3. Click **Add Shank** at the bottom of the drawer, or **Cancel** to close without saving.

When the shank is saved, a success message appears, the drawer closes and the list refreshes. If a shank with the same name already exists, the message **Data already exists** is shown and the drawer stays open.

### Steps to Edit a Shank

1. Click the **Edit** icon on the row.
2. Change the name or the image. **Sort Code** opens empty; type any value to be allowed to save.
3. Click **Save Shank**.

The slug is rebuilt from the new name. The message **Record updated successfully** confirms the change.

### Steps to Delete a Shank

1. Click the **Delete** icon on the row.
2. The **Are you Sure?** box asks *Are you Sure You would like to delete ?*. Click **YES** to delete the shank or **NO** to keep it.

A shank can be deleted only when no ring or three stone product uses it, in any store. Otherwise the message *This item is currently linked to other modules, Please remove or update the related records before attempting to delete it.* is shown and the shank stays in the list. When the delete works, **Record deleted successfully** is shown and the shank leaves the list.

### Switching a Shank On or Off

Click the switch in the **Action** column. The change is saved at once, without a confirmation box. The message **Record updated successfully** appears and the **Status** badge changes. A shank can be switched off even while it is in use.

### Info Text

**Info** opens the **Shank Info** drawer with a **Title** box and a **Description** editor. The drawer loads the saved text, or opens empty if nothing has been saved yet.

1. Enter the **Title** and the **Description**. Both are required (**This Field is required**).
2. Click **Submit** to save, or **Cancel** to close.

Without **Edit** permission the fields and **Submit** are disabled. Only a TCC Tech **Super Admin** can save the text; for anyone else the save is refused and a red message is shown.

Once a text is saved, the storefront ring configurator shows an info icon next to the shank option. Clicking it opens the title and description.

### Search, Filters, Sorting and Paging

- **Search** looks through every shank by name and slug, not just the current page.
- The **Filter** boxes only narrow the rows already on the current page.
- Click the **Shank Value** or **Slug** heading to sort. **Action**, **Image** and **Status** cannot be sorted.
- The newest shanks are shown first, 50 rows per page by default. Use the paging controls under the list to move between pages or to show 25, 50, 75 or 100 rows.

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No shanks match | **No records to display** |
| Opening a shank | The image area shows a loading indicator until the image appears. |
| Saving a shank | The save button shows a loading spinner. |
| Loading the info text | Grey placeholder bars in the drawer. |
| An action fails | A red message with the reason. The drawer stays open. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Shank uses it |
| ------ | ----------------- |
| [Roles](../../roles-permission/roles.md) | Decides who can open the page and which buttons are enabled. |

Shanks are typed in here. They do not come from any other module.

### Modules That Depend On It

| Module | How it uses shanks |
| ------ | ------------------ |
| Configurator settings ([Ring](../../config-setting/ring-configurator.md), [Three Stone](../../config-setting/three-stone-configurator.md), [Earring](../../config-setting/earring-configurator.md), [Pendant](../../config-setting/pendant-configurator.md)) | The **Shank Master** lists the active shanks. Each store picks the shanks it offers. A client store only sees the shanks TCC Tech has switched on for that configurator. |
| Configurator products ([Ring](../configurator-products/ring-configurator.md), [Three Stone](../configurator-products/three-stone-configurator.md)) | Product sheets name the shank type of each ring. The name must match an active shank, ignoring capital letters and extra spaces. |
| [SKU Builder](../../settings/sku-builder.md) | The shank segment uses each shank's code. Unless a code is set on that page, the shank name is used. |
| Storefront ring configurator | Shows the [Info Text](#info-text). |
| [Audit Logs](../../settings/audit-log.md) | Every add, edit, delete and on/off change is recorded. |

### What Changes If…

| Change | Effect elsewhere |
| ------ | ---------------- |
| A shank is renamed | The new name shows wherever the shank is used, in every store. Product sheets uploaded later must use the new name. In SKU Builder the code changes too, unless a code was set there. |
| A shank is switched off | It is no longer offered in the configurator settings, and ring sheet rows that name it are rejected. Products that already use it keep it. |
| A shank is deleted | Possible only when no ring or three stone product uses it. It disappears from every list. |
| A shank is added | Every store can use it straight away. |
| The info text changes | The storefront info popup shows the new text. |

---

## Edge Cases / Notes

- **Shared list.** There is one shank list for the whole platform. Agree changes with every store before renaming or switching off a shank.
- **Sort Code is not kept.** The form requires a **Sort Code**, but shanks have nowhere to store it. The value is dropped when you save, the **Sort Code** column always shows **-**, and the field is empty each time you edit, so you must type a value again before saving.
- **Switching off is not checked.** The switch works even while the shank is in use. Only **Delete** checks whether it is in use.
