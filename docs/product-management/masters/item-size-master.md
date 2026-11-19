---
sidebar_position: 12
id: item-size-master
title: Item Size
sidebar_label: Item Size
---

# Item Size

## Overview

**Item Size** is the list of ring sizes, for example 6 or 6.5. Sizes are kept as US sizes. Each size has a value and an optional sort order. Sizes are used by the **Ring Size Master** of the configurator settings, by [Eternity Band](../configurator-products/eternity-band-configurator.md) products and by [Birthstone Products](../configurator-products/birthstone-products.md). Lengths are kept separately in [Item Length](./item-length-master.md).

What you see here also depends on the size charts your store picked on [Ring Size](../../settings/margin-cost-center/ring-size.md).

:::note[One list for every store]
Item sizes are shared by every store on the Storefront platform. When you add, change, switch off or delete a size, every store sees the change straight away.
:::

:::note[Who can use it]
The page opens for users whose role gives access to it (see [Roles](../../roles-permission/roles.md)). **Add Item Size** needs **Add** permission. The **Edit** icon and the on/off switch need **Edit** permission, and the **Delete** icon needs **Delete** permission. The **Item Value** field and the save button in the drawer also need **Edit** permission, even when you add a new size. Only a TCC Tech **Super Admin** can save the **Info** text.
:::

---

## Data Displayed

### Item Size Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Type part of a size. The list refreshes about one second after you stop typing and goes back to page 1. Clear the box to show every size again. |
| **Filter** | Shows or hides a filter box under each column heading, so you can narrow the rows on the current page by typing in a column. |
| **Info** | Opens the **Item Size Info** drawer. See [Info Text](#info-text). |
| **Add Item Size** | Opens the **Add Item Size** drawer. See [Steps to Add a New Item Size](#steps-to-add-a-new-item-size). |
| **Edit** | Pencil icon in the **Action** column (tooltip *Edit Item Size*). Opens the **Edit Item Size** drawer with the saved values. |
| **Delete** | Bin icon in the **Action** column (tooltip *Delete Item Size*). See [Steps to Delete an Item Size](#steps-to-delete-an-item-size). |
| **On/off switch** | Last item in the **Action** column (tooltip *Enable/Disable*). Switches the size between **Active** and **Inactive** at once. See [Switching an Item Size On or Off](#switching-an-item-size-on-or-off). |
| **View Documentation** | Opens this page. |

### Item Size List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Action** | - | The **Edit** and **Delete** icons, then the on/off switch. | - |
| **Item Value** | Text | The size, as a US size. | *6.5* |
| **Slug** | Text | Made from the value: lower case, spaces turned into hyphens and other symbols (including the decimal point) removed. It is not a field on the form. | *65* |
| **Sort Order** | Number | The sort order you entered, or **-** if none. | *12* |
| **Status** | Badge | **Active** or **Inactive**. | **Active** |

### Item Size Fields

The **Add Item Size** and **Edit Item Size** drawers show the fields in this order.

| Field | Required | Type | Remarks |
| ----- | -------- | ---- | ------- |
| **Sort Order** | - | Number | The position of the size in lists that follow this order. Leave it empty if you do not need one. |
| **Item Value** | ✅ | Text | The US size. If it is empty, **Item Size is required** is shown. It must differ from every other size, ignoring capital letters. When your store uses a size chart, it must be a US size in the chart. |

### Statuses

| Status | Badge | Meaning |
| ------ | ----- | ------- |
| **Active** | Green | The size is offered in the lists that use it. A new size starts as **Active**. |
| **Inactive** | Red | The size stays in this list and on records that already use it, but it is no longer offered for new choices. |

---

## How It Works

### Size Charts

On [Ring Size](../../settings/margin-cost-center/ring-size.md) each store picks one or more regional size charts. The master always holds US sizes, and each US size is matched to its row in the chart.

- **No chart picked**: this page lists every size.
- **One or more charts picked**: this page lists only the sizes that exist in at least one of those charts. Sizes outside the charts are still in the master and other stores may still see them.

### Steps to Add a New Item Size

1. Click **Add Item Size**.
2. Enter a **Sort Order** if you want one, and the **Item Value**.
3. Click **Add Item Size** at the bottom of the drawer, or **Cancel** to close without saving.

When the size is saved, a success message appears, the drawer closes and the list refreshes. The drawer stays open and shows a red message when:

- a size with the same value already exists: **Data already exists**
- your store uses a size chart and the value is not one of its US sizes: **The size is not valid for (US, Canada, Mexico) country.**

### Steps to Edit an Item Size

1. Click the **Edit** icon on the row.
2. Change the **Item Value** or the **Sort Order**. Clear **Sort Order** to remove it.
3. Click **Save Item Size**.

The slug is rebuilt from the new value. The message **Record updated successfully** confirms the change. The size chart check applies only when you add a size, not when you edit one.

### Steps to Delete an Item Size

1. Click the **Delete** icon on the row.
2. The **Are you Sure?** box asks *Are you Sure You would like to delete ?*. Click **YES** to delete the size or **NO** to keep it.

A size can be deleted only when nothing uses it in any store: no Birthstone product and no eternity band configurator product. Otherwise the message *This item is currently linked to other modules, Please remove or update the related records before attempting to delete it.* is shown and the size stays in the list. When the delete works, **Record deleted successfully** is shown and the size leaves the list.

### Switching an Item Size On or Off

Click the switch in the **Action** column. The change is saved at once, without a confirmation box. The message **Record updated successfully** appears and the **Status** badge changes. A size can be switched off even while it is in use.

### Info Text

**Info** opens the **Item Size Info** drawer with a **Title** box and a **Description** editor. The drawer loads the saved text, or opens empty if nothing has been saved yet.

1. Enter the **Title** and the **Description**. Both are required (**This Field is required**).
2. Click **Submit** to save, or **Cancel** to close.

Without **Edit** permission the fields and **Submit** are disabled. Only a TCC Tech **Super Admin** can save the text; for anyone else the save is refused and a red message is shown.

Once a text is saved, the storefront ring, three stone and eternity band configurators show an info icon next to the size option. Clicking it opens the title and description.

### Search, Filters, Sorting and Paging

- **Search** looks through every size by value and slug, not just the current page.
- The **Filter** boxes only narrow the rows already on the current page.
- Click the **Item Value**, **Slug** or **Sort Order** heading to sort. **Action** and **Status** cannot be sorted.
- Sorting by **Item Value** uses ring size order: number sizes by their value (so *4* comes before *10*), and letter sizes from *F* to *Z*, with each half size after its letter (*F*, *F 1/2*, *G*).
- The newest sizes are shown first, 50 rows per page by default. Use the paging controls under the list to move between pages or to show 25, 50, 75 or 100 rows.

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No sizes match | **No records to display** |
| Saving a size | The save button shows a loading spinner. |
| Loading the info text | Grey placeholder bars in the drawer. |
| An action fails | A red message with the reason. The drawer stays open. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Item Size uses it |
| ------ | --------------------- |
| [Ring Size](../../settings/margin-cost-center/ring-size.md) | The size charts your store picked decide which sizes this page lists and which values you can add. |
| [Roles](../../roles-permission/roles.md) | Decides who can open the page and which buttons are enabled. |

### Modules That Depend On It

| Module | How it uses item sizes |
| ------ | ---------------------- |
| Configurator settings ([Ring](../../config-setting/ring-configurator.md), [Three Stone](../../config-setting/three-stone-configurator.md), [Earring](../../config-setting/earring-configurator.md), [Pendant](../../config-setting/pendant-configurator.md), [Eternity](../../config-setting/eternity-configurator.md)) | The **Ring Size Master** lists the active sizes. With a size chart, only the chart's sizes are listed, in chart order, with the size in the chart. Each store picks the sizes it offers and sets its own order and default there. |
| [Eternity Band Configurator](../configurator-products/eternity-band-configurator.md) products | Eternity bands are stored with their sizes, so a size in use cannot be deleted. |
| [Birthstone Products](../configurator-products/birthstone-products.md) | **Select size** lists the active sizes, filtered and ordered by your store's size chart. |
| [SKU Builder](../../settings/sku-builder.md) | The ring size segment uses each size's code. Unless a code is set on that page, the size value is used. |
| Storefront ring, three stone and eternity band configurators | Show the [Info Text](#info-text). |
| [Audit Logs](../../settings/audit-log.md) | Every add, edit, delete and on/off change is recorded. |

### What Changes If…

| Change | Effect elsewhere |
| ------ | ---------------- |
| A size is changed | The new value shows wherever the size is used, in every store. If the new value is not in a store's size chart, that store no longer sees the size in its lists. |
| The sort order is changed | For a store without a size chart, the Birthstone **Select size** list follows the new order. The order set in the configurator settings is separate and does not change. |
| A size is switched off | It is no longer offered in the configurator settings or Birthstone Products. Products that already use it keep it. |
| A size is deleted | Possible only when nothing uses it. It disappears from every list. |
| A store changes its size charts on Ring Size | That store sees a different set of sizes here and in its configurator settings and Birthstone lists. |

---

## Edge Cases / Notes

- **Shared list.** There is one size list for the whole platform. Agree changes with every store before changing or switching off a size.
- **Hidden sizes.** With a size chart, sizes that are not in the chart do not appear on this page, even though they exist. Another store without a chart may still see and use them.
- **Same size, different spelling.** Number sizes are matched to the chart by value, so *4* and *4.0* are the same chart size.
- **Sort Order is not locked.** The **Sort Order** box can be typed in without **Edit** permission, but the size still cannot be saved.
- **Switching off is not checked.** The switch works even while the size is in use. Only **Delete** checks whether the size is in use.
