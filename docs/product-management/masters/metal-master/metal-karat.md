---
sidebar_position: 3
id: metal-karat
title: Metal Karat
sidebar_label: Metal Karat
---

# Metal Karat

## Overview

**Karat Master** is the list of gold karats, for example 10, 14 and 18, with the gold percentage of each. The gold percentage turns the gold rate into a rate per karat on [Metal Rate Settings](../../../settings/metal-rate-setting.md), so it feeds the metal cost of gold products. Karats are also used by [Labour Management](../../../settings/margin-cost-center/labour-management.md), the **Metal Karat Master** of the configurator settings and [Birthstone Products](../../configurator-products/birthstone-products.md).

On this page you can add, change, switch off and delete karats.

:::note[One list for every store]
Karats are shared by every store on the Storefront platform. When you add, change, switch off or delete a karat, every store sees the change straight away.
:::

:::note[Who can use it]
The page opens for users whose role gives access to it (see [Roles](../../../roles-permission/roles.md)). **Add Karat** needs **Add** permission. The **Edit** icon and the on/off switch need **Edit** permission, and the **Delete** icon needs **Delete** permission. The fields and the save button in the drawer also need **Edit** permission, even when you add a new karat. Only a TCC Tech **Super Admin** can save the **Info** text.
:::

---

## Data Displayed

### Karat Master Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Type part of a karat. The list refreshes about one second after you stop typing and goes back to page 1. Clear the box to show every karat again. |
| **Filter** | Shows or hides a filter box under each column heading, so you can narrow the rows on the current page by typing in a column. |
| **Info** | Opens the **Metal Karat Info** drawer. See [Info Text](#info-text). |
| **Add Karat** | Opens the **Add Karat** drawer. See [Steps to Add a New Karat](#steps-to-add-a-new-karat). |
| **Edit** | Pencil icon in the **Action** column (tooltip *Edit Karat*). Opens the **Edit Karat** drawer with the saved values. |
| **Delete** | Bin icon in the **Action** column (tooltip *Delete Karat*). See [Steps to Delete a Karat](#steps-to-delete-a-karat). |
| **On/off switch** | Last item in the **Action** column (tooltip *Enable/Disable*). Switches the karat between **Active** and **Inactive** at once. See [Switching a Karat On or Off](#switching-a-karat-on-or-off). |
| **View Documentation** | Opens this page. |

### Karat Master List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Action** | - | The **Edit** and **Delete** icons, then the on/off switch. | - |
| **Image** | Image | The karat image, or a placeholder when none was uploaded. Hover over it to see a larger preview. | - |
| **Carat** | Number | The karat value. | *14* |
| **Slug** | Text | Made from the value. It is not a field on the form. | *14* |
| **Gold Calculate Rate** | Percentage | The gold percentage, shown with two decimals. | *58.30* |
| **Status** | Badge | **Active** or **Inactive**. | **Active** |

### Karat Fields

| Field | Required | Type | Remarks |
| ----- | -------- | ---- | ------- |
| **Karat** | ✅ | Number | Whole numbers only, for example 14 or 18. Anything else shows **The Metal karat must be a positive number**. It must differ from every other karat. |
| **Select Metal** | ✅ | Choice | Only the Gold metal is offered. Choose its box. If left empty, **Please select metal** is shown. |
| **Gold Percentage** | - | Number | The percentage of pure gold, for example 58.3 for 14 karat. A value of 101 or more shows **Gold percentage cannot be more than 100%. Please enter a valid gold percentage.** and the karat is not saved. |
| **Upload Image** | - | Image | Marked with a red asterisk but not checked. Drop a file or click to choose one. Aspect ratio guide: 500 x 500. |

An empty **Karat** shows **This Field is required**. The image can be a .jpg, .jpeg, .png, .gif, .webp, .bmp, .svg, .ico, .tiff or .tif file up to 20 MB. A file of another type shows **Only allowed image file types can be uploaded** followed by the allowed list, and a rejected or oversized file shows **You can only upload files with a maximum size of 20 MB.**

### Statuses

| Status | Badge | Meaning |
| ------ | ----- | ------- |
| **Active** | Green | The karat is offered in the lists that use it and gets a rate on Metal Rate Settings. A new karat starts as **Active**. |
| **Inactive** | Red | The karat stays in this list and on records that already use it, but it is no longer offered for new choices. |

---

## How It Works

### Steps to Add a New Karat

1. Click **Add Karat**.
2. Enter the **Karat**, choose the Gold metal, and enter the **Gold Percentage**. Upload an image if you want one.
3. Click **Add Karat** at the bottom of the drawer, or **Cancel** to close without saving.

When the karat is saved, a success message appears, the drawer closes and the list refreshes. If a karat with the same value already exists, the message **Data already exists** is shown and the drawer stays open.

### Steps to Edit a Karat

1. Click the **Edit** icon on the row.
2. Change the karat, the gold percentage or the image. Click the **x** on the image preview to remove the image.
3. Click **Save Karat**.

If you removed the image and saved, the image is removed from the karat. The message **Record updated successfully** confirms the change.

### Steps to Delete a Karat

1. Click the **Delete** icon on the row.
2. The **Are you Sure?** box asks *Are you Sure You would like to delete ?*. Click **YES** to delete the karat or **NO** to keep it.

A karat can be deleted only when nothing uses it in any store: no labour charge, Birthstone metal option, ring or three stone product metal, or push back product. Otherwise the message *This item is currently linked to other modules, Please remove or update the related records before attempting to delete it.* is shown and the karat stays in the list. When the delete works, **Record deleted successfully** is shown and the karat leaves the list.

### Switching a Karat On or Off

Click the switch in the **Action** column. The change is saved at once, without a confirmation box. The message **Record updated successfully** appears and the **Status** badge changes. A karat can be switched off even while it is in use.

### How the Gold Percentage Is Used

On Metal Rate Settings, each karat's gold rate is the Gold rate divided by Gold's own calculate rate and multiplied by the karat's gold percentage. A higher percentage gives a higher karat rate. The page also shows each karat rate with the metal margin added.

### Info Text

**Info** opens the **Metal Karat Info** drawer with a **Title** box and a **Description** editor. The drawer loads the saved text, or opens empty if nothing has been saved yet.

1. Enter the **Title** and the **Description**. Both are required (**This Field is required**).
2. Click **Submit** to save, or **Cancel** to close.

Without **Edit** permission the fields and **Submit** are disabled. Only a TCC Tech **Super Admin** can save the text. The storefront does not show the karat info text.

### Search, Filters, Sorting and Paging

- **Search** looks through every karat by its slug, not just the current page.
- The **Filter** boxes only narrow the rows already on the current page.
- Click the **Carat**, **Slug** or **Gold Calculate Rate** heading to sort. **Action**, **Image** and **Status** cannot be sorted.
- The newest karats are shown first, 50 rows per page by default. Use the paging controls under the list to move between pages or to show 25, 50, 75 or 100 rows.

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No karats match | **No records to display** |
| Loading the info text | Grey placeholder bars in the drawer. |
| An action fails | A red message with the reason. The drawer stays open. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Metal Karat uses it |
| ------ | ----------------------- |
| [Metals](./metals.md) | Every karat belongs to the Gold metal. |
| [Front-End Setting](../../../settings/front-end-setting.md) | **Metal Gold Id** tells this page which metal is Gold. Only that metal is offered in **Select Metal**. |
| [Roles](../../../roles-permission/roles.md) | Decides who can open the page and which buttons are enabled. |

### Modules That Depend On It

| Module | How it uses karats |
| ------ | ------------------ |
| [Metal Rate Settings](../../../settings/metal-rate-setting.md) | Shows the Gold rate per active karat, worked out from the gold percentage. |
| [Labour Management](../../../settings/margin-cost-center/labour-management.md) | Gold labour charges are set per karat. |
| Configurator settings ([Ring](../../../config-setting/ring-configurator.md), [Three Stone](../../../config-setting/three-stone-configurator.md), [Earring](../../../config-setting/earring-configurator.md), [Pendant](../../../config-setting/pendant-configurator.md), [Bracelet](../../../config-setting/bracelet-configurator.md), [Eternity](../../../config-setting/eternity-configurator.md)) | The **Metal Karat Master** lists the active karats. Each store picks the karats it offers. A client store only sees the karats TCC Tech has switched on for that configurator. |
| Configurator products ([Ring](../../configurator-products/ring-configurator.md), [Three Stone](../../configurator-products/three-stone-configurator.md), push back products) | Product sheets name the karat. It must match an active karat. |
| [Birthstone Products](../../configurator-products/birthstone-products.md) | The metal options list the active karats of the metal. |
| [SKU Builder](../../../settings/sku-builder.md) | The karat segment uses each karat's code. Unless a code is set on that page, the karat value is used. |
| [Analytics](../../../analytics.md) | Karat names appear on the analytics cards. |
| [Audit Logs](../../../settings/audit-log.md) | Every add, edit, delete and on/off change is recorded. |

### What Changes If…

| Change | Effect elsewhere |
| ------ | ---------------- |
| The gold percentage is changed | The karat's gold rate on Metal Rate Settings changes for every store, and with it the metal cost of gold products in that karat. |
| A karat is renamed | The new value shows wherever the karat is used. Product sheets uploaded later must use the new value. In SKU Builder the code changes too, unless a code was set there. |
| A karat is switched off | It disappears from Metal Rate Settings, the configurator settings and Birthstone Products, and product sheet rows that name it are rejected. Products and labour charges that already use it keep it. |
| A karat is deleted | Possible only when nothing uses it. It disappears from every list. |
| A karat is added | It gets a gold rate on Metal Rate Settings, and every store can use it straight away. |

---

## Edge Cases / Notes

- **Shared list.** There is one karat list for the whole platform. A change to the gold percentage changes the karat gold rate for every store.
- **Gold only.** If **Metal Gold Id** on Front-End Setting is not set or does not match a metal, **Select Metal** offers nothing and you cannot add a karat.
- **Gold percentage limit.** The 100% check looks at the whole number only, so 100.5 is accepted.
- **Image is optional.** **Upload Image** has a red asterisk, but you can save without an image.
- **Switching off is not checked.** The switch works even while the karat is in use. Only **Delete** checks whether it is in use.
