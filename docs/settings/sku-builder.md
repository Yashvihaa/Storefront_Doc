---
sidebar_position: 8
id: sku-builder
title: SKU Builder
sidebar_label: SKU Builder
---

# SKU Builder

## Overview

**SKU Builder** defines how the SKU of each configurator product is built. You choose which segments make up the SKU (such as head, metal, karat or diamond shape), their order, the code used for each value and the separator between segments. A live preview shows the resulting SKU as you work.

The SKU of a configurator product is built from these settings each time the product is shown, using the options the customer picked.

:::note[Who can use it]
The settings are shared by every client. Any admin with access to the page can view them, but only a **Super Admin** of the TCC Tech company can save changes. The page has no separate **Add**, **Edit** or **Delete** permission checks.
:::

---

## Data Displayed

### SKU Builder Screen

| Action | Description |
| ------ | ----------- |
| **Select Product Type** | The configurator whose SKU you are editing: **Ring Configurator**, **Three Stone Configurator**, **Eternity Band Configurator**, **Bracelet Configurator**, **Pendant Configurator** or **Earring Configurator**. **Ring Configurator** is selected when the page opens. |
| **Save** | Saves the SKU structure of the selected product type. It also appears in a bar at the top of the screen once you scroll down. Disabled while segments are loading and when the type has no segments. |
| **Copy SKU** | Copies the SKU shown in the preview. The button shows **✓ Copied** for a moment. |
| Drag a row | Drag a segment row up or down to change its position. |
| **Segment Name** | Click a segment name to show or hide its values. See [Segment Values](#segment-values). |
| **Value Code** | Click the code to change it. See [Value Codes](#value-codes). |
| **Separator** | Click the separator to choose another. See [Separators](#separators). |
| **Active** | Switch a segment on or off. Only active segments are part of the SKU. |
| **View Documentation** | Opens this page. |

### Live Preview

The **Current Logic Output** box shows the SKU built from the current settings. It updates as soon as you change anything, before you save.

| Item | Description |
| ---- | ----------- |
| SKU | The SKU built from the active segments. |
| **Chars** | The number of characters, separators included. |
| **Segments** | The number of active segments. |

### Segments Table

Each row is one segment of the SKU. The segments are loaded for the selected product type.

| Column | Description |
| ------ | ----------- |
| **Pos** | The position of the segment. Updates when you drag rows. |
| **Segment Name** | The segment name, with a badge showing how many values it has. |
| **Value Code** | The code of the value used in the preview. |
| **Separator** | The character placed after this segment's code. The last row shows **FINAL**, because nothing follows it. |
| **Active** | Whether the segment is part of the SKU. A locked segment cannot be switched off. |

While the segments load, grey placeholder rows are shown.

### Locked Segments

Some segments are always part of the SKU. Their **Active** switch is on and cannot be turned off.

| Product Type | Locked Segments |
| ------------ | --------------- |
| **Ring Configurator** | Head, Shank, Side Setting, Metal, Karat, Carat Size, Diamond Shape |
| **Three Stone Configurator** | Head, Shank, Side Setting, Metal, Karat, Carat Size, Diamond Shape |
| **Eternity Band Configurator** | Side Setting, Metal, Karat, Carat Size, Diamond Shape, Ring Size |
| **Bracelet Configurator** | Side Setting, Metal, Karat, Carat Size, Diamond Shape, Length, Hook Type |
| **Earring Configurator** | Head, Side Setting, Metal, Karat, Carat Size, Diamond Shape, Stud Type |
| **Pendant Configurator** | Head, Metal, Karat, Carat Size, Diamond Shape, Pendant Type |

You can still reorder locked segments and change their separators and value codes. Any other segment can be switched on or off.

### Segment Values

Click a segment name to open its **Segment Values** list. Each value shows a round selector, a box with the value's code and the value name. Click the round selector to use that value in the preview. The selected value is marked **ACTIVE** and its code is shown in the **Value Code** column. The selected value is saved as the segment's default.

### Value Codes

Each value has a code, and you can replace it with your own:

- **In the Value Code column**: click the code, type the new code and press **Enter** or click elsewhere. Press **Esc** to cancel. This changes the code of the value used in the preview. An empty entry is ignored.
- **In the Segment Values list**: type in the code box next to any value. If you leave the box empty, the value's original code is used.

### Separators

| Separator | Name |
| --------- | ---- |
| `-` | Hyphen |
| `_` | Underscore |
| `.` | Dot |
| `/` | Slash |
| `\|` | Pipe |
| `~` | Tilde |
| `::` | Double colon |

**Hyphen** is used when a segment has no separator set.

---

## How It Works

### Steps to Change a SKU Structure

1. Choose the configurator in **Select Product Type**.
2. Drag rows into the order you want.
3. Switch optional segments on or off with **Active**.
4. Change separators and value codes as needed, and check the **Current Logic Output**.
5. Click **Save**. The message *SKU Builder updated successfully* appears and the table reloads from the saved settings.

Each product type is saved separately. Click **Save** before you pick another product type, or your changes are lost.

### How the SKU Is Built

The SKU is built from top to bottom using only the active segments:

1. Take the first active segment and add the code of its value.
2. Add that segment's separator.
3. Repeat for each following active segment.
4. Add no separator after the last active segment.

Inactive segments are skipped, together with their separators. The **FINAL** label always sits on the last row. If you switch off the last row, the active segment above it becomes the last one and its separator is left out.

### Worked Example

This example uses **Ring Configurator** with its seven locked segments and the default **Hyphen** separator. The value codes are examples only.

| Pos | Segment Name | Value Code | Separator |
| --- | ------------ | ---------- | --------- |
| 1 | Head | HD1 | `-` |
| 2 | Shank | SH2 | `-` |
| 3 | Side Setting | SS1 | `-` |
| 4 | Metal | WG | `-` |
| 5 | Karat | 14K | `-` |
| 6 | Carat Size | 1CT | `-` |
| 7 | Diamond Shape | RD | FINAL |

The preview shows **HD1-SH2-SS1-WG-14K-1CT-RD**, with **Chars: 25** and **Segments: 7**.

1. Change the separator on **Metal** to **Underscore**. The preview becomes **HD1-SH2-SS1-WG_14K-1CT-RD**.
2. Change the **Karat** value code to **14KT**. The preview becomes **HD1-SH2-SS1-WG_14KT-1CT-RD** and **Chars** becomes **26**.
3. Drag **Diamond Shape** to the top. **Carat Size** is now the last row, so its separator is dropped. The preview becomes **RD-HD1-SH2-SS1-WG_14KT-1CT**.

### What Saving Stores

For every segment of the product type: its position, separator, whether it is active, and the code of each value (a value with an empty code box is saved with its original code). Value codes are stored with the master value (for example the metal or shape) for that configurator type.

### Where the SKU Is Used

When a configurator product is shown, priced or opened, its SKU is built from the options picked (head, shank, metal, karat, diamond shape and so on) using the saved settings. The new settings are used straight away after saving. If a configurator type has no saved settings, the product's stored SKU is shown instead.

---

## Dependencies and Impact

### Modules It Depends On

| Module | How SKU Builder uses it |
| ------ | ----------------------- |
| Product masters ([Head](../product-management/masters/head.md), [Shank](../product-management/masters/shank.md), [Side Setting](../product-management/masters/side-setting.md), [Metals](../product-management/masters/metal-master/metals.md), [Metal Karat](../product-management/masters/metal-master/metal-karat.md), [Carat Size](../product-management/masters/carat-size.md), [Diamond Shape](../product-management/masters/diamond-shape.md), [Item Size](../product-management/masters/item-size-master.md), [Item Length](../product-management/masters/item-length-master.md) and others) | Supply each segment's values. A value's code starts as its short code or name. |

### Modules That Depend On It

| Module | How it uses SKU Builder |
| ------ | ----------------------- |
| Configurator storefront products (ring, three stone, eternity band, bracelet, earring and pendant) | Show the SKU built from the customer's choices. |
| Configurator product pages in the admin (for example [Ring Configurator](../product-management/configurator-products/ring-configurator.md)) | Show the built SKU. On the ring configurator list, a SKU typed in the search is read back through these settings to find the product. |

### What Changes If…

| Change | Effect |
| ------ | ------ |
| Segments are reordered, switched on or off, or separators change | SKUs of that configurator type change for every client straight away. |
| A value code changes | Every SKU that uses that value changes for every client. |
| A new value is added to a master | It appears in the segment's values with its own short code or name. |

---

## Edge Cases / Notes

- **Shared by every client.** There is one set of settings for the whole platform. A change made by TCC Tech affects every client's SKUs.
- **Saving is TCC Tech only.** Other admins can open the page and try changes in the preview, but saving is refused.
- **Segments cannot be added or deleted here.** You can only reorder them, switch them on or off, and change separators and value codes.
- **Searching by SKU.** Searching the ring configurator list by SKU works best when the leading segments (head, shank, side setting, metal and karat) keep a hyphen separator.
