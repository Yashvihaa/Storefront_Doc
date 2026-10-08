---
sidebar_position: 8
id: sku-builder
title: SKU Builder
sidebar_label: SKU Builder
---

# SKU Builder

**SKU Builder** defines the SKU structure for each configurator product type. You choose which segments make up the SKU, their order, the code used for each value and the separator between segments. A live preview shows the resulting SKU as you work.

---

## SKU Builder Screen

| Action | Description |
| ------ | ----------- |
| **Select Product Type** | Choose the product type whose SKU structure you want to edit. **Ring Configurator** is selected when the page opens. |
| **Save** | Saves the SKU structure of the selected product type. See [Saving Changes](#saving-changes). |
| **Copy SKU** | Copies the SKU shown in the preview. The button shows **✓ Copied** for a moment. |
| **Drag a row** | Drag a segment row up or down to change its position in the SKU. |
| **Segment Name** | Click a segment name to show or hide its values. See [Segment Values](#segment-values). |
| **Value Code** | Click the code to change it. See [Value Codes](#value-codes). |
| **Separator** | Click the separator to choose a different one. See [Separators](#separators). |
| **Active** | Switch a segment on or off. Only active segments are part of the SKU. |

The **Select Product Type** list contains **Ring Configurator**, **Three Stone Configurator**, **Eternity Band Configurator**, **Bracelet Configurator**, **Pendant Configurator**, **Earring Configurator** and **Single Treasure Configurator**.

---

## Live Preview

The **Current Logic Output** box at the top shows the SKU built from the current settings. It updates as soon as you change anything on the page, before you save.

| Item | Description |
| ---- | ----------- |
| **SKU** | The SKU built from the active segments. |
| **Chars** | Number of characters in the SKU, separators included. |
| **Segments** | Number of active segments. |

---

## Segments Table

Each row is one segment of the SKU, such as metal, karat or diamond shape. The segments and their values are loaded for the selected product type.

| Column | Description |
| ------ | ----------- |
| **Pos** | Position of the segment in the SKU. Updates when you drag rows. |
| **Segment Name** | Name of the segment. The badge next to it shows how many values the segment has. |
| **Value Code** | Code of the value currently used in the preview. |
| **Separator** | Character placed after this segment's code. The last row shows **FINAL** because nothing follows it. |
| **Active** | Whether the segment is part of the SKU. |

### Locked Segments

Some segments are always part of the SKU for a product type. Their **Active** switch is on and cannot be turned off.

| Product Type | Locked Segments |
| ------------ | --------------- |
| **Ring Configurator** | Head, Shank, Side Setting, Metal, Karat, Carat Size, Diamond Shape |
| **Three Stone Configurator** | Head, Shank, Side Setting, Metal, Karat, Carat Size, Diamond Shape |
| **Eternity Band Configurator** | Side Setting, Metal, Karat, Carat Size, Diamond Shape, Ring Size |
| **Bracelet Configurator** | Side Setting, Metal, Karat, Carat Size, Diamond Shape, Length, Hook Type |
| **Earring Configurator** | Head, Side Setting, Metal, Karat, Carat Size, Diamond Shape, Stud Type |
| **Pendant Configurator** | Head, Metal, Karat, Carat Size, Diamond Shape, Pendant Type |
| **Single Treasure Configurator** | None. All segments can be switched on or off. |

You can still reorder locked segments and change their separators and value codes.

---

## Segment Values

Click a segment name to expand its **Segment Values** list. Each value shows:

- a round selector button,
- a box with the value's code,
- the value name.

Click the round button next to a value to use it in the preview. The selected value is marked **ACTIVE**, and its code is shown in the **Value Code** column.

---

## Value Codes

Each value has its own code, and you can replace it with your own code. You can change a code in two places:

- **In the Value Code column**: click the code, type the new code and press **Enter** or click elsewhere. Press **Esc** to cancel. This changes the code of the value currently used in the preview. An empty entry is ignored.
- **In the Segment Values list**: type in the code box next to any value. If you leave the box empty, the value's original code is used.

---

## Separators

Click the separator in a row to open the list and pick one of these:

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

## How the SKU Is Built

The SKU is built from top to bottom using only the active segments:

1. Take the first active segment and add the code of its selected value.
2. Add that segment's separator.
3. Repeat for each following active segment.
4. After the last active segment, add no separator.

Inactive segments are skipped completely, including their separators.

:::note
The **FINAL** label always sits on the last row of the table. If you switch off the last row, the separator of the active segment above it is also left out, because it becomes the last active segment.
:::

### Worked Example

This example uses **Ring Configurator** with its seven locked segments in the order below and the default **Hyphen** separator. The value codes are examples only; the real codes are the ones loaded for each segment.

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

Now make these changes:

1. Change the separator on **Metal** to **Underscore**. The preview becomes **HD1-SH2-SS1-WG_14K-1CT-RD**.
2. Change the **Karat** value code to **14KT**. The preview becomes **HD1-SH2-SS1-WG_14KT-1CT-RD** and **Chars** becomes **26**.
3. Drag **Diamond Shape** to the top. Its separator is still **Hyphen**, and **Carat Size** is now the last row, so its separator is dropped. The preview becomes **RD-HD1-SH2-SS1-WG_14KT-1CT**.

Click **Save** to keep the new structure.

---

## Saving Changes

Click **Save** to store the SKU structure of the selected product type. Saving stores, for every segment:

- its position,
- its separator,
- whether it is active,
- the code of each value. A value with an empty code box is saved with its original code.

When the save succeeds, the message **SKU Builder updated successfully** appears and the table reloads from the saved settings.

:::note
The **Save** button is disabled while the segments are loading and when the selected product type has no segments.
:::

:::tip
Each product type is saved separately. Click **Save** before you pick another product type in **Select Product Type**, or your changes are lost.
:::
