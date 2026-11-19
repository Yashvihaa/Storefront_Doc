---
sidebar_position: 4
id: chain-type
title: Chain Type Master
sidebar_label: Chain Type Master
---

# Chain Type Master

## Overview

**Chain Type Master** is the list of chains that can be sold with a pendant, for example Box, Rope or Cable. Each chain type has a name, a slug, a GLB identifier and an image. Chain types are offered on the storefront pendant configurator and in the **Chain Type** option of a [Pendant Configurator](../configurator-products/pendant-configurator.md) product's detail page.

The page also lets you export the chain products to Excel and upload the sheet back to update their weights and charges.

:::note[One list for every store]
Chain types are shared by every store on the Storefront platform. When you add, change, switch off or delete a chain type, every store sees the change straight away.
:::

:::note[Who can use it]
The page opens for users whose role gives access to it (see [Roles](../../roles-permission/roles.md)). **Add Chain Type**, **Export Excel** and **Upload Excel** need **Add** permission. The **Edit** icon and the on/off switch need **Edit** permission, and the **Delete** icon needs **Delete** permission. The fields and the save button in the drawer also need **Edit** permission, even when you add a new chain type. Only a TCC Tech **Super Admin** can save the **Info** text.
:::

---

## Data Displayed

### Chain Type Master Screen List

| Action | Description |
| ------ | ----------- |
| **Export Excel** | Next to the page title. Asks for an Excel file of the chain products, which is emailed to you. See [Export Excel](#export-excel). |
| **Upload Excel** | Next to the page title. Choose an edited export file to update the chain products. See [Upload Excel](#upload-excel). |
| **View Documentation** | Opens this page. |
| **Search** | Type part of a chain type name, slug or GLB identifier. The list refreshes about one second after you stop typing and goes back to page 1. Clear the box to show every chain type again. |
| **Filter** | Shows or hides a filter box under each column heading, so you can narrow the rows on the current page by typing in a column. |
| **Info** | Opens the **Chain Type Info** drawer. See [Info Text](#info-text). |
| **Add Chain Type** | Opens the **Add Chain Type** drawer. See [Steps to Add a New Chain Type](#steps-to-add-a-new-chain-type). |
| **Edit** | Pencil icon in the **Action** column (tooltip *Edit Chain Type*). Opens the **Edit Chain Type** drawer with the saved values. |
| **Delete** | Bin icon in the **Action** column (tooltip *Delete Chain Type*). See [Steps to Delete a Chain Type](#steps-to-delete-a-chain-type). |
| **On/off switch** | Last item in the **Action** column (tooltip *Enable/Disable*). Switches the chain type between **Active** and **Inactive** at once. See [Switching a Chain Type On or Off](#switching-a-chain-type-on-or-off). |

### Chain Type List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Action** | - | The **Edit** and **Delete** icons, then the on/off switch. | - |
| **Image** | Image | The chain type image. Hover over it to see a larger preview. | - |
| **Name** | Text | The chain type name. | *Rope Chain* |
| **Slug** | Text | Made from the name: lower case, spaces turned into hyphens and other symbols removed. | *rope-chain* |
| **GLB Identifier** | Text | The GLB identifier you entered. | *rope_chain* |
| **Sort Code** | Text | Always **-**. Chain types do not keep a sort code. | **-** |
| **Status** | Badge | **Active** or **Inactive**. | **Active** |

### Chain Type Fields

| Field | Required | Type | Remarks |
| ----- | -------- | ---- | ------- |
| **Chain Type Name** | ✅ | Text | The chain name, for example Rope Chain. Its slug must differ from every other chain type's slug. |
| **Sort Code** | ✅ | Text | The form asks for it, but it is not saved. See [Edge Cases / Notes](#edge-cases--notes). |
| **Slug** | ✅ | Text | The form asks for it, but the saved slug is always made from the name. |
| **GLB Identifier** | ✅ | Text | The identifier of the chain, passed to the storefront pendant configurator. |
| **Upload Image** | ✅ | Image | Drop a file or click to choose one. If it is missing, **Image is required** is shown. |

An empty text field shows **This Field is required**. The image can be a .jpg, .jpeg, .png, .gif, .webp, .bmp, .svg, .ico, .tiff or .tif file up to 20 MB. A file of another type shows **Only allowed image file types can be uploaded** followed by the allowed list, and a rejected or oversized file shows **You can only upload files with a maximum size of 20 MB.** If you remove the image with the **x** and do not choose another, **Please Upload Image** is shown and you cannot save.

### Statuses

| Status | Badge | Meaning |
| ------ | ----- | ------- |
| **Active** | Green | The chain type is offered on the storefront pendant configurator and can be named in chain product sheets. A new chain type starts as **Active**. |
| **Inactive** | Red | The chain type stays in this list and on products that already use it, but it is no longer offered. |

---

## How It Works

### Steps to Add a New Chain Type

1. Click **Add Chain Type**.
2. Fill in **Chain Type Name**, **Sort Code**, **Slug** and **GLB Identifier**, and upload an image.
3. Click **Add Chain Type** at the bottom of the drawer, or **Cancel** to close without saving.

When the chain type is saved, a success message appears, the drawer closes and the list refreshes. If another chain type already has the same slug, the message **Data already exists** is shown and the drawer stays open.

### Steps to Edit a Chain Type

1. Click the **Edit** icon on the row.
2. Change the name, GLB identifier or image. **Sort Code** opens empty; type any value to be allowed to save.
3. Click **Save Chain Type**.

The slug is rebuilt from the new name. The message **Record updated successfully** confirms the change.

### Steps to Delete a Chain Type

1. Click the **Delete** icon on the row.
2. The **Are you Sure?** box asks *Are you Sure You would like to delete ?*. Click **YES** to delete the chain type or **NO** to keep it.

A chain type can be deleted only when no chain product uses it. Otherwise the message *This item is currently linked to other modules, Please remove or update the related records before attempting to delete it.* is shown and the chain type stays in the list. When the delete works, **Record deleted successfully** is shown and the chain type leaves the list.

### Switching a Chain Type On or Off

Click the switch in the **Action** column. The change is saved at once, without a confirmation box. A green message confirms the change and the **Status** badge changes. A chain type can be switched off even while it is in use.

### Export Excel

Click **Export Excel**. The file of chain products is prepared in the background, and the message *Please wait, your export file is being prepared. It will be sent to your registered email shortly.* appears. The file arrives by email. A short progress line under the button shows the request being sent.

### Upload Excel

Use this to change existing chain products in bulk. It does not add chain types or new products.

1. Click **Export Excel** and wait for the file to arrive by email.
2. Edit the values in the file and save it as .xlsx or .xls.
3. Click **Upload Excel** and choose the file. The upload starts as soon as you pick it; a progress line shows it running.

What the upload changes depends on your company:

| Who uploads | What is saved |
| ----------- | ------------- |
| TCC Tech | The metal weight, labour charge and other charge of each matched chain product, for every store. |
| Any other store | Only that store's own labour charge and other charge for each chain product. The shared products are not changed. |
| A store set to **TCC_TECH Pricing + Margin** (or to no price display) on [Price Display](../../settings/price-display.md) | Nothing. The upload is refused with *Labour charges are set by Tcc tech with Tcc tech price + Mragin. Switch to Own Pricing + Margins to set your own labour charges.* |

When the upload works, a green message appears and the list refreshes. If any row has a problem, nothing is saved, a red message appears, and a table above the page lists each **Row Id** with its **Error Message**. Correct those rows and upload the file again.

### Info Text

**Info** opens the **Chain Type Info** drawer with a **Title** box and a **Description** editor. The drawer loads the saved text, or opens empty if nothing has been saved yet.

1. Enter the **Title** and the **Description**. Both are required (**This Field is required**).
2. Click **Submit** to save, or **Cancel** to close.

Without **Edit** permission the fields and **Submit** are disabled. Only a TCC Tech **Super Admin** can save the text. The storefront does not show the chain type info text.

### Search, Filters, Sorting and Paging

- **Search** looks through every chain type by name, slug and GLB identifier, not just the current page.
- The **Filter** boxes only narrow the rows already on the current page.
- Click a column heading to sort. **Action**, **Image** and **Status** cannot be sorted.
- The newest chain types are shown first, 50 rows per page by default. Use the paging controls under the list to move between pages or to show 25, 50, 75 or 100 rows.

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No chain types match | **No records to display** |
| Opening a chain type | The image area shows a loading indicator until the image appears. |
| Uploading a file | A progress line under **Upload Excel**. Both Excel buttons are disabled until it finishes. |
| An upload has row errors | A **Row Id** / **Error Message** table above the page. |
| An action fails | A red message with the reason. The drawer stays open. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Chain Type Master uses it |
| ------ | ----------------------------- |
| [Roles](../../roles-permission/roles.md) | Decides who can open the page and which buttons are enabled. |
| [Price Display](../../settings/price-display.md) | A store on **TCC_TECH Pricing + Margin** cannot upload its own labour and other charges. |

### Modules That Depend On It

| Module | How it uses chain types |
| ------ | ----------------------- |
| Chain products | Each chain product belongs to a chain type. When chain products are added from a sheet, the chain type is matched by name. |
| [Pendant Configurator](../configurator-products/pendant-configurator.md) | The product detail page offers a **Chain Type** option to price a pendant with a chain. |
| Storefront pendant configurator | Offers the active chain types, with their name, image and GLB identifier. |
| [SKU Builder](../../settings/sku-builder.md) | The chain type segment uses each chain type's code. Unless a code is set on that page, the chain type name is used. |
| [Audit Logs](../../settings/audit-log.md) | Every add, edit, delete and on/off change is recorded. |

### What Changes If…

| Change | Effect elsewhere |
| ------ | ---------------- |
| A chain type is renamed | The new name and slug show wherever the chain type is used, in every store. Chain product sheets must use the new name. |
| The GLB identifier is changed | The storefront pendant configurator receives the new identifier. |
| A chain type is switched off | It is no longer offered on the storefront pendant configurator. Chain products that already use it keep it. |
| A chain type is deleted | Possible only when no chain product uses it. |
| A chain products sheet is uploaded by TCC Tech | The weights and charges change for every store, except where a store has its own labour or other charge. |

---

## Edge Cases / Notes

- **Shared list.** There is one chain type list for the whole platform.
- **Sort Code is not kept.** The form requires a **Sort Code**, but chain types have nowhere to store it. The value is dropped when you save, the **Sort Code** column always shows **-**, and the field is empty each time you edit, so you must type a value again before saving.
- **Typed slug is ignored.** Whatever you type in **Slug**, the saved slug is made from the name.
- **Upload edits only.** **Upload Excel** changes existing chain products. It does not add new chain types or products.
- **Other stores are not affected.** A client store's upload only changes its own labour and other charges, never another store's.
- **Switching off is not checked.** The switch works even while the chain type is in use. Only **Delete** checks whether it is in use.
