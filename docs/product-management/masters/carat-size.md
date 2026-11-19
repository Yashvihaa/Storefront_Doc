---
sidebar_position: 3
id: carat-size
title: Carat Size
sidebar_label: Carat Size
---

# Carat Size

## Overview

**Carat Size** is the list of stone carat weights, for example 0.50 or 1.25. Each carat size has a value, a sort code worked out from the value, and an optional image. Carat sizes are used in the [Diamond Group Master](../diamond-group-master.md) to price stones, in the **Carat Master** of the configurator settings, in [Birthstone Products](../configurator-products/birthstone-products.md), and in the product sheets of the configurators.

On this page you can add, change, switch off and delete carat sizes, and write the info text shown to shoppers.

:::note[One list for every store]
Carat sizes are shared by every store on the Storefront platform. When you add, change, switch off or delete a carat size, every store sees the change straight away.
:::

:::note[Who can use it]
The page opens for users whose role gives access to it (see [Roles](../../roles-permission/roles.md)). **Add Carat Size** needs **Add** permission. The **Edit** icon and the on/off switch need **Edit** permission, and the **Delete** icon needs **Delete** permission. The fields and the save button in the drawer also need **Edit** permission, even when you add a new carat size. Only a TCC Tech **Super Admin** can save the **Info** text.
:::

---

## Data Displayed

### Carat Size Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Type part of a carat size. The list refreshes about one second after you stop typing and goes back to page 1. Clear the box to show every carat size again. |
| **Filter** | Shows or hides a filter box under each column heading, so you can narrow the rows on the current page by typing in a column. |
| **Info** | Opens the **Carat Size Info** drawer. See [Info Text](#info-text). |
| **Add Carat Size** | Opens the **Add Carat Size** drawer. See [Steps to Add a New Carat Size](#steps-to-add-a-new-carat-size). |
| **Edit** | Pencil icon in the **Action** column (tooltip *Edit Carat Size*). Opens the **Edit Carat Size** drawer with the saved value, sort code and image. |
| **Delete** | Bin icon in the **Action** column (tooltip *Delete Carat Size*). See [Steps to Delete a Carat Size](#steps-to-delete-a-carat-size). |
| **On/off switch** | Last item in the **Action** column (tooltip *Enable/Disable*). Switches the carat size between **Active** and **Inactive** at once. See [Switching a Carat Size On or Off](#switching-a-carat-size-on-or-off). |
| **View Documentation** | Opens this page. |

### Carat Size List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Action** | - | The **Edit** and **Delete** icons, then the on/off switch. | - |
| **Image** | Image | The carat size image, or a placeholder when none was uploaded. Hover over it to see a larger preview. | - |
| **Value** | Text | The carat weight. | *0.50* |
| **Slug** | Text | Made from the value, with the decimal point and other symbols removed. It is not a field on the form. | *050* |
| **Sort Code** | Number | The value multiplied by 100 and rounded. Worked out for you when the carat size is saved. | *50* |
| **Status** | Badge | **Active** or **Inactive**. | **Active** |

### Carat Size Fields

| Field | Required | Type | Remarks |
| ----- | -------- | ---- | ------- |
| **Value** | ✅ | Number | The carat weight, for example 0.50 or 1.25. Digits with an optional decimal part of up to 10 places; no minus sign, spaces or letters. Anything else shows **The size must be a positive number**. An empty field shows **This field is required**. It must differ from every other carat size. |
| **Sort Code** | - | Number | Shown only when you edit, and read-only. |
| **Upload Image** | - | Image | Marked with a red asterisk but not checked. Drop a file or click to choose one. Aspect ratio guide: 100 x 100. |

The image can be a .jpg, .jpeg, .png, .gif, .webp, .bmp, .svg, .ico, .tiff or .tif file up to 20 MB. A file of another type shows **Only allowed image file types can be uploaded** followed by the allowed list, and a rejected or oversized file shows **You can only upload files with a maximum size of 20 MB.**

### Statuses

| Status | Badge | Meaning |
| ------ | ----- | ------- |
| **Active** | Green | The carat size is offered in the lists that use it and can be named in product sheets. A new carat size starts as **Active**. |
| **Inactive** | Red | The carat size stays in this list and on records that already use it, but it is no longer offered for new choices. |

---

## How It Works

### Steps to Add a New Carat Size

1. Click **Add Carat Size**.
2. Enter the **Value** and, if you want, upload an image.
3. Click **Add Carat Size** at the bottom of the drawer, or **Cancel** to close without saving.

The sort code and slug are worked out from the value. When the carat size is saved, a success message appears, the drawer closes and the list refreshes. If a carat size with the same value already exists, the message **Data already exists** is shown and the drawer stays open.

### Steps to Edit a Carat Size

1. Click the **Edit** icon on the row.
2. Change the **Value** or the image. Click the **x** on the image preview to remove the image.
3. Click **Save Carat Size**.

The sort code and slug are worked out again from the new value. If you removed the image and saved, the image is deleted from the carat size. The message **Record updated successfully** confirms the change.

### Steps to Delete a Carat Size

1. Click the **Delete** icon on the row.
2. The **Are you Sure?** box asks *Are you Sure You would like to delete ?*. Click **YES** to delete the carat size or **NO** to keep it.

A carat size can be deleted only when nothing uses it in any store: no diamond group, birthstone diamond option, or ring, three stone, stud, pendant, bracelet, eternity band, chain or push back product. Otherwise the message *This item is currently linked to other modules, Please remove or update the related records before attempting to delete it.* is shown and the carat size stays in the list. When the delete works, **Record deleted successfully** is shown and the carat size leaves the list.

### Switching a Carat Size On or Off

Click the switch in the **Action** column. The change is saved at once, without a confirmation box. The message **Record updated successfully** appears and the **Status** badge changes. A carat size can be switched off even while it is in use.

### Info Text

**Info** opens the **Carat Size Info** drawer with a **Title** box and a **Description** editor. The drawer loads the saved text, or opens empty if nothing has been saved yet.

1. Enter the **Title** and the **Description**. Both are required (**This Field is required**).
2. Click **Submit** to save, or **Cancel** to close.

Without **Edit** permission the fields and **Submit** are disabled. Only a TCC Tech **Super Admin** can save the text; for anyone else the save is refused and a red message is shown.

Once a text is saved, the storefront configurator pages show an info icon next to the carat option. Clicking it opens the title and description.

### Search, Filters, Sorting and Paging

- **Search** looks through every carat size by value and slug, not just the current page.
- The **Filter** boxes only narrow the rows already on the current page.
- Click the **Value**, **Slug** or **Sort Code** heading to sort. **Action**, **Image** and **Status** cannot be sorted. Sort by **Sort Code** to see the carat sizes from smallest to largest.
- The newest carat sizes are shown first, 50 rows per page by default. Use the paging controls under the list to move between pages or to show 25, 50, 75 or 100 rows.

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No carat sizes match | **No records to display** |
| Opening a carat size with an image | The image area shows a loading indicator until the image appears. |
| Loading the info text | Grey placeholder bars in the drawer. |
| An action fails | A red message with the reason. The drawer stays open. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Carat Size uses it |
| ------ | ---------------------- |
| [Roles](../../roles-permission/roles.md) | Decides who can open the page and which buttons are enabled. |

Carat sizes are typed in here. They do not come from any other module.

### Modules That Depend On It

| Module | How it uses carat sizes |
| ------ | ----------------------- |
| [Diamond Group Master](../diamond-group-master.md) | The **Carat Size** of a diamond group. Only active carat sizes are offered, smallest first. |
| Configurator settings ([Ring](../../config-setting/ring-configurator.md), [Three Stone](../../config-setting/three-stone-configurator.md), [Earring](../../config-setting/earring-configurator.md), [Pendant](../../config-setting/pendant-configurator.md), [Bracelet](../../config-setting/bracelet-configurator.md), [Eternity](../../config-setting/eternity-configurator.md)) | The **Carat Master** lists the active carat sizes. Each store picks the sizes it offers. A client store only sees the sizes TCC Tech has switched on for that configurator. |
| Configurator products ([Ring](../configurator-products/ring-configurator.md), [Three Stone](../configurator-products/three-stone-configurator.md), [Stud](../configurator-products/stud-configurator.md), [Pendant](../configurator-products/pendant-configurator.md), [Bracelet](../configurator-products/bracelet-configurator.md), [Eternity Band](../configurator-products/eternity-band-configurator.md)), chain and push back products | Product sheets name the diamond weight by its carat value. The value must match an active carat size, ignoring capital letters and extra spaces. |
| [Birthstone Products](../configurator-products/birthstone-products.md) | The **carat size** of a diamond option. Only active carat sizes are listed, in sort code order. |
| [SKU Builder](../../settings/sku-builder.md) | The carat segment uses each carat size's code. Unless a code is set on that page, the value is used. |
| Storefront configurator pages | Show the [Info Text](#info-text). |
| [Audit Logs](../../settings/audit-log.md) | Every add, edit, delete and on/off change is recorded. |

### What Changes If…

| Change | Effect elsewhere |
| ------ | ---------------- |
| A carat size is changed | The new value and sort code show wherever the carat size is used, in every store. Product sheets uploaded later must use the new value. In SKU Builder the code changes too, unless a code was set there. |
| A carat size is switched off | It is no longer offered in the Diamond Group Master, the configurator settings or Birthstone Products, and product sheet rows that name it are rejected. Records that already use it keep it. |
| A carat size is deleted | Possible only when nothing uses it. It disappears from every list. |
| A carat size is added | Every store can use it straight away. |
| The info text changes | The storefront info popup shows the new text. |

---

## Edge Cases / Notes

- **Shared list.** There is one carat size list for the whole platform. Agree changes with every store before changing or switching off a carat size.
- **Image is optional.** **Upload Image** has a red asterisk, but you can save without an image.
- **Sort code is automatic.** You cannot type a sort code. Two values that round to the same number, such as *0.501* and *0.504*, get the same sort code.
- **Slug drops the decimal point.** *0.50* has the slug *050* and *1.25* has *125*.
- **Switching off is not checked.** The switch works even while the carat size is in use. Only **Delete** checks whether it is in use.
