---
sidebar_position: 10
id: head
title: Head
sidebar_label: Head
---

# Head

## Overview

**Head** is the list of head styles. The head, also called the crown, is the part of the setting that holds the center stone. Each head has a name, a sort code and an image. Heads are offered in the **Head Master** of the configurator settings and are named in the product sheets of the ring, three stone, stud, pendant, chain and push back products.

On this page you can add, change, switch off and delete heads, and write the info text shown to shoppers.

:::note[One list for every store]
Heads are shared by every store on the Storefront platform. When you add, change, switch off or delete a head, every store sees the change straight away.
:::

:::note[Who can use it]
The page opens for users whose role gives access to it (see [Roles](../../roles-permission/roles.md)). **Add Head** needs **Add** permission. The **Edit** icon and the on/off switch need **Edit** permission, and the **Delete** icon needs **Delete** permission. The fields and the save button in the drawer also need **Edit** permission, even when you add a new head. Only a TCC Tech **Super Admin** can save the **Info** text.
:::

---

## Data Displayed

### Head Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Type part of a head name. The list refreshes about one second after you stop typing and goes back to page 1. Clear the box to show every head again. |
| **Filter** | Shows or hides a filter box under each column heading, so you can narrow the rows on the current page by typing in a column. |
| **Info** | Opens the **Head Info** drawer. See [Info Text](#info-text). |
| **Add Head** | Opens the **Add Head** drawer. See [Steps to Add a New Head](#steps-to-add-a-new-head). |
| **Edit** | Pencil icon in the **Action** column (tooltip *Edit Head*). Opens the **Edit Head** drawer and loads the latest saved name, sort code and image. |
| **Delete** | Bin icon in the **Action** column (tooltip *Delete Head*). See [Steps to Delete a Head](#steps-to-delete-a-head). |
| **On/off switch** | Last item in the **Action** column (tooltip *Enable/Disable*). Switches the head between **Active** and **Inactive** at once. See [Switching a Head On or Off](#switching-a-head-on-or-off). |
| **View Documentation** | Opens this page. |

### Head List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Action** | - | The **Edit** and **Delete** icons, then the on/off switch. | - |
| **Image** | Image | The head image. Hover over it to see a larger preview. | - |
| **Value** | Text | The head name. | *4 Prong* |
| **Slug** | Text | Made from the name: lower case, spaces turned into hyphens and other symbols removed. It is not a field on the form. | *4-prong* |
| **Sort Code** | Text | The code you entered. | *HD01* |
| **Status** | Badge | **Active** or **Inactive**. | **Active** |

### Head Fields

| Field | Required | Type | Remarks |
| ----- | -------- | ---- | ------- |
| **Head Name** | ✅ | Text | The head name. It must differ from every other head, ignoring capital letters. |
| **Sort Code** | ✅ | Text | A short code, for example HD01. Two heads can have the same code. |
| **Upload Image** | ✅ | Image | Drop a file or click to choose one. Aspect ratio guide: 100 x 100. If it is missing, **Image is required** is shown. |

An empty text field shows **This Field is required**. The image can be a .jpg, .jpeg, .png, .gif, .webp, .bmp, .svg, .ico, .tiff or .tif file up to 20 MB. A file of another type shows **Only allowed image file types can be uploaded** followed by the allowed list, and a rejected or oversized file shows **You can only upload files with a maximum size of 20 MB.** If you remove the image with the **x** and do not choose another, **Please Upload Image** is shown and you cannot save.

### Statuses

| Status | Badge | Meaning |
| ------ | ----- | ------- |
| **Active** | Green | The head is offered in the configurator settings and can be named in product sheets. A new head starts as **Active**. |
| **Inactive** | Red | The head stays in this list and on products that already use it, but it is no longer offered for new choices. |

---

## How It Works

### Steps to Add a New Head

1. Click **Add Head**.
2. Enter the **Head Name** and the **Sort Code**, and upload an image.
3. Click **Add Head** at the bottom of the drawer, or **Cancel** to close without saving.

When the head is saved, a success message appears, the drawer closes and the list refreshes. If a head with the same name already exists, the message **Data already exists** is shown and the drawer stays open.

### Steps to Edit a Head

1. Click the **Edit** icon on the row. The drawer loads the latest saved values.
2. Change the name, the sort code or the image.
3. Click **Save Head**.

The slug is rebuilt from the new name. The message **Record updated successfully** confirms the change.

### Steps to Delete a Head

1. Click the **Delete** icon on the row.
2. The **Are you Sure?** box asks *Are you Sure You would like to delete ?*. Click **YES** to delete the head or **NO** to keep it.

A head can be deleted only when no ring, three stone, stud, pendant, chain or push back product uses it, in any store. Otherwise the message *This item is currently linked to other modules, Please remove or update the related records before attempting to delete it.* is shown and the head stays in the list. When the delete works, **Record deleted successfully** is shown and the head leaves the list.

### Switching a Head On or Off

Click the switch in the **Action** column. The change is saved at once, without a confirmation box. The message **Record updated successfully** appears and the **Status** badge changes. A head can be switched off even while it is in use.

### Info Text

**Info** opens the **Head Info** drawer with a **Title** box and a **Description** editor. The drawer loads the saved text, or opens empty if nothing has been saved yet.

1. Enter the **Title** and the **Description**. Both are required (**This Field is required**).
2. Click **Submit** to save, or **Cancel** to close.

Without **Edit** permission the fields and **Submit** are disabled. Only a TCC Tech **Super Admin** can save the text; for anyone else the save is refused and a red message is shown.

Once a text is saved, the storefront ring configurator shows an info icon next to the head option. Clicking it opens the title and description.

### Search, Filters, Sorting and Paging

- **Search** looks through every head by name and slug, not just the current page.
- The **Filter** boxes only narrow the rows already on the current page.
- Click the **Value**, **Slug** or **Sort Code** heading to sort. **Action**, **Image** and **Status** cannot be sorted.
- The newest heads are shown first, 50 rows per page by default. Use the paging controls under the list to move between pages or to show 25, 50, 75 or 100 rows.

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No heads match | **No records to display** |
| Opening a head | The image area shows a loading indicator until the saved values are loaded. |
| Saving a head | The save button shows a loading spinner. |
| Loading the info text | Grey placeholder bars in the drawer. |
| An action fails | A red message with the reason. The drawer stays open. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Head uses it |
| ------ | ---------------- |
| [Roles](../../roles-permission/roles.md) | Decides who can open the page and which buttons are enabled. |

Heads are typed in here. They do not come from any other module.

### Modules That Depend On It

| Module | How it uses heads |
| ------ | ----------------- |
| Configurator settings ([Ring](../../config-setting/ring-configurator.md), [Earring](../../config-setting/earring-configurator.md), [Pendant](../../config-setting/pendant-configurator.md)) | The **Head Master** lists the active heads. Each store picks the heads it offers, and **Head Image Upload** adds images per configurator. A client store only sees the heads TCC Tech has switched on for that configurator. |
| Configurator products ([Ring](../configurator-products/ring-configurator.md), [Three Stone](../configurator-products/three-stone-configurator.md), [Stud](../configurator-products/stud-configurator.md), [Pendant](../configurator-products/pendant-configurator.md)), chain and push back products | Product sheets name the head: the head type of ring products, the setting type of stud and push back products, and the design type of pendant and chain products. The name must match an active head, ignoring capital letters and extra spaces. |
| [SKU Builder](../../settings/sku-builder.md) | The head segment uses each head's code. Unless a code is set on that page, the head name is used. |
| [Analytics](../../analytics.md) | Head names appear on the analytics cards. |
| Storefront ring configurator | Shows the [Info Text](#info-text). |
| [Audit Logs](../../settings/audit-log.md) | Every add, edit, delete and on/off change is recorded. |

### What Changes If…

| Change | Effect elsewhere |
| ------ | ---------------- |
| A head is renamed | The new name shows wherever the head is used, in every store. Product sheets uploaded later must use the new name. In SKU Builder the code changes too, unless a code was set there. |
| A head is switched off | It is no longer offered in the configurator settings, and product sheet rows that name it are rejected. Products that already use it keep it. |
| A head is deleted | Possible only when no product uses it. It disappears from every list. |
| A head is added | Every store can use it straight away. |
| The info text changes | The storefront info popup shows the new text. |

---

## Edge Cases / Notes

- **Shared list.** There is one head list for the whole platform. Agree changes with every store before renaming or switching off a head.
- **One head, several sheet columns.** The same head list is matched by different sheet columns: head type for rings, setting type for studs and push backs, and design type for pendants and chains.
- **Sort codes can repeat.** Only the name must be unique.
- **Switching off is not checked.** The switch works even while the head is in use. Only **Delete** checks whether it is in use.
