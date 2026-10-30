---
sidebar_position: 1
id: ring-configurator
title: Ring Configurator
sidebar_label: Ring Configurator
---

# Ring Configurator

The **Ring Configurator** settings control which options customers can choose for a ring on the website. Each tab covers one attribute, such as stone type, carat size, diamond shape or metal. For every option you decide whether it is offered, which one is pre-selected, how it is ordered, and how it links to the options in other tabs.

---

## Configurator Screen

The page title is **RING CONFIGURATOR**, with the line "Control which options appear in the live product configurator" and a help button that opens this guide. The tabs across the top list the settings in a fixed order; click a tab to open it. If there are more tabs than fit on the screen, use the arrows at either end of the tab bar to scroll.

Each tab shows:

- the tab name, with a count on the right such as "4 of 10 shown to customers" (only when the tab has options);
- a short description of the tab;
- the table of options. The table scrolls inside the page, the column headings stay in view, and the **Order** and **Option** columns stay in place when you scroll sideways. A table with no options shows **No Data**;
- a status line, **Unsaved changes**, **Saving…** or **All changes saved**, with the **Save** button beside it.

The page opens on the first tab that has options.

| Action | Description |
| ------ | ----------- |
| **Tabs** | Click a tab to open its settings. |
| **Active** | Switch on to offer an option; switch off to hide it from customers. Switching off also clears what was set for that option in the tab (its default, mappings, diamond type and order). Inactive rows appear faded and their other controls are disabled. |
| **Default** | Select the option that is pre-selected. Only active options can be the default. |
| **Order** | Sets where the option is shown. See [Order Numbers](#order-numbers). |
| **Search and Filter** | Available on larger tabs. See [Search and Filter](#search-and-filter). |
| **Save** | Saves the tab that is currently open. It is available only when that tab has unsaved changes and you have edit permission. |

:::tip Save each tab
Changes are saved one tab at a time, and only the active options of that tab are saved. Click **Save** before you open another tab. Opening a tab reloads the saved settings, so unsaved changes on the tab you leave are lost, and you are not asked to confirm.
:::

:::tip Set up in order
Linked tabs only list options that are active and saved in the tab they link to. Work from the basics outwards: start with **Stone Type Master**, then the stone, carat, shape and metal tabs, and finish with the tabs that link to them (such as karats, side settings and cuts).
:::

**Permissions:** anyone who can open the page can see the settings. Without the **Edit** permission on this page, the switches, selections, checkboxes and order boxes are disabled and **Save** cannot be used.

### Settings at a Glance

| Setting | What it does | Required |
| ------- | ------------ | -------- |
| **Active** | Whether the option is offered. | - |
| **Default** | The pre-selected option. | - |
| **Order** | Display position of the option. | - |
| **Natural** / **Lab Grown** / **Both** | Diamond type the option is offered for. | - |
| Mapping checkboxes | Links to options in other tabs. | - |
| Metal checkboxes in **Side Setting Master** | Metals a side setting is offered in. | ✅ (at least one per active side setting) |
| Pictures in the image upload tabs | Pictures for heads and side settings. | - |

### Configurator Tabs

| Order | Tab |
| ----- | --- |
| 1 | [Stone Type Master](#stone-type-master) |
| 2 | [Stone Master](#stone-master) |
| 3 | [Carat Master](#carat-master) |
| 4 | [Diamond Shape](#diamond-shape) |
| 5 | [Diamond Color and Clarity](#diamond-color-and-clarity) |
| 6 | [Side Diamond Color and Clarity](#side-diamond-color-and-clarity) |
| 7 | [Diamond Cut Master](#diamond-cut-master) |
| 8 | [Side Stone Cuts](#side-stone-cuts) |
| 9 | [Metal Master](#metal-master) |
| 10 | [Metal Tone Master](#metal-tone-master) |
| 11 | [Metal Karat Master](#metal-karat-master) |
| 12 | [Side Setting Master](#side-setting-master) |
| 13 | [Shank Master](#shank-master) |
| 14 | [Head Master](#head-master) |
| 15 | [Ring Size Master](#ring-size-master) |
| 16 | [Head Image Upload](#head-image-upload) |
| 17 | [Side Setting Image Upload](#side-setting-image-upload) |

### Order Numbers

Tabs with an **Order** column let you set the position of each option. The box shows the row's current position in grey until you type a number. Type a number, or use the small up and down arrows next to the box (the up arrow stops at 1). The box is disabled for inactive rows. Lower numbers come first. Order numbers are saved with the tab and are cleared when the option is switched off.

### Diamond Type Columns

Several tabs have **Natural**, **Lab Grown** and **Both** columns. Tick one of them to choose which diamond type the option is offered for; tick it again to clear it. Only one can be ticked per row. A column is unavailable (greyed out) when the matching stone type is not active in **Stone Type Master**; **Both** needs natural and lab grown to be active.

### Mapping Columns

Some tabs show one column for each active option of another tab (for example, one column per active metal tone in **Metal Karat Master**). Only options that are active and saved in the related tab appear as columns. Tick a column to link the two options. After you save, an option that is switched off no longer appears as a column in the linked tabs.

### Search and Filter

The **Carat Master**, **Diamond Shape**, **Side Setting Master** and **Head Master** tabs have a search and filter bar above the table.

| Field | Description |
| ----- | ----------- |
| **Search Table** | Type to show only options whose name contains the text (placeholder "Search by option..."). |
| **Filter by** | Select one or more options to show only those rows. The label names the tab, for example **Filter by Carat Size**. Selected values appear under **Active Filters**; click the cross on a value to remove it, or **Clear All** to remove all. |

Search and filter values are remembered in your browser for each tab and apply immediately. They only hide rows and do not change what is saved. Clear them if a row seems to be missing.

### Cannot Disable Popup

Some options cannot be switched off while another tab still uses them. When you switch **Active** off for such an option, a popup explains where it is used and what to remove first. Click **OK**, remove the option from the tab that uses it, save that tab, and then switch the option off. The switch is not changed until the blocking link is removed.

| Popup | When it appears |
| ----- | --------------- |
| **Cannot Disable Stone Type** | The stone type is used by an active option in another tab (shape, color and clarity, cuts or carat). |
| **Cannot Disable Carat** | The carat size is ticked in **Diamond Shape** or **Head Master**. |
| **Cannot Disable Metal Master** | The metal is ticked in **Side Setting Master**. |
| **Cannot Disable Metal Tone** | The metal tone is ticked in **Metal Karat Master**. |

---

## Stone Type Master

Controls which stone types are offered and which one is pre-selected. This tab also decides which diamond types can be chosen in the other tabs.

| Column | Description |
| ------ | ----------- |
| **Order** | Number that sets where the stone type is shown. See [Order Numbers](#order-numbers). |
| **Option** | Stone type name. |
| **Active** | Switch on to make the stone type available in this configurator. |
| **Center Default** | Select the stone type that is pre-selected for the center stone. |
| **Side Default** | Select the stone type that is pre-selected for side stones. |
| **Available in** (**Center stone**, **Side stone**) | Tick the stone positions the stone type can be used for. |

The default columns are independent of each other: each one has its own selected stone type.

The stone types you activate here decide which of the **Natural**, **Lab Grown** and **Both** columns can be used in the other tabs. Save this tab first, then set up the others.

A stone type that is still used by an active option in another tab cannot be switched off. The **Cannot Disable Stone Type** popup appears instead (see [Cannot Disable Popup](#cannot-disable-popup)). The "no diamond" stone type is never blocked.

## Stone Master

Controls which stones are offered. The active stones become the stone columns in the cut tabs.

| Column | Description |
| ------ | ----------- |
| **Option** | Stone name. |
| **Active** | Switch on to offer the stone in this configurator. Switch off to hide it. |
| **Default** | Select the option that is pre-selected for customers. Only one option per tab can be the default, and only an active option can be selected. |

This tab has no **Order** column. A stone that is ticked in a cut tab can be switched off here without a popup; its column disappears from the cut tab the next time that tab is opened.

## Carat Master

Controls which carat sizes are offered.

| Column | Description |
| ------ | ----------- |
| **Option** | Carat size. |
| **Active** | Switch on to offer the carat size in this configurator. Switch off to hide it. |
| **Default** | Select the option that is pre-selected for customers. Only one option per tab can be the default, and only an active option can be selected. |
| **Natural** / **Lab Grown** / **Both** | Choose which diamond type the option is offered for. See [Diamond Type Columns](#diamond-type-columns). |

This tab has no **Order** column. It has a search and filter bar (see [Search and Filter](#search-and-filter)); the filter here is **Filter by Carat Size**.

A carat size that is ticked in **Diamond Shape** or **Head Master** cannot be switched off. The **Cannot Disable Carat** popup appears instead.

## Diamond Shape

Controls which diamond shapes are offered and which carat sizes each shape comes in.

| Column | Description |
| ------ | ----------- |
| **Order** | Number that sets where the option is shown. See [Order Numbers](#order-numbers). |
| **Option** | Shape name. |
| **Active** | Switch on to offer the shape in this configurator. Switch off to hide it. |
| **Default** | Select the option that is pre-selected for customers. Only one option per tab can be the default, and only an active option can be selected. |
| **Natural** / **Lab Grown** / **Both** | Choose which diamond type the option is offered for. See [Diamond Type Columns](#diamond-type-columns). |
| Carat size columns | One column per active carat size from **Carat Master**. Tick the carat sizes offered for the shape. |

This tab has a search and filter bar (see [Search and Filter](#search-and-filter)); the filter here is **Filter by Diamond Shape**.

## Diamond Color and Clarity

Controls which diamond color and clarity combinations are offered for the center stone.

| Column | Description |
| ------ | ----------- |
| **Option** | Color and clarity combination, shown as color/clarity. |
| **Active** | Switch on to offer the combination in this configurator. Switch off to hide it. |
| **Default** | Select the option that is pre-selected for customers. Only one option per tab can be the default, and only an active option can be selected. |
| **Natural** / **Lab Grown** / **Both** | Choose which diamond type the option is offered for. See [Diamond Type Columns](#diamond-type-columns). |

This tab has no **Order** column.

## Side Diamond Color and Clarity

Controls which diamond color and clarity combinations are offered for side stones.

| Column | Description |
| ------ | ----------- |
| **Option** | Color and clarity combination, shown as color/clarity. |
| **Active** | Switch on to offer the combination in this configurator. Switch off to hide it. |
| **Default** | Select the option that is pre-selected for customers. Only one option per tab can be the default, and only an active option can be selected. |
| **Natural** / **Lab Grown** / **Both** | Choose which diamond type the option is offered for. See [Diamond Type Columns](#diamond-type-columns). |

This tab has no **Order** column.

## Diamond Cut Master

Controls which diamond cuts are offered for the center stone and which stones each cut applies to.

| Column | Description |
| ------ | ----------- |
| **Order** | Number that sets where the option is shown. See [Order Numbers](#order-numbers). |
| **Option** | Cut name. |
| **Active** | Switch on to offer the cut in this configurator. Switch off to hide it. |
| **Default** | Select the option that is pre-selected for customers. Only one option per tab can be the default, and only an active option can be selected. |
| Stone columns | One column per active stone from **Stone Master**. Tick the stones the cut applies to. |
| **Natural** / **Lab Grown** / **Both** | Choose which diamond type the option is offered for. See [Diamond Type Columns](#diamond-type-columns). |

## Side Stone Cuts

Controls which diamond cuts are offered for side stones.

| Column | Description |
| ------ | ----------- |
| **Order** | Number that sets where the option is shown. See [Order Numbers](#order-numbers). |
| **Option** | Cut name. |
| **Active** | Switch on to offer the cut in this configurator. Switch off to hide it. |
| **Default** | Select the option that is pre-selected for customers. Only one option per tab can be the default, and only an active option can be selected. |
| **Natural** / **Lab Grown** / **Both** | Choose which diamond type the option is offered for. See [Diamond Type Columns](#diamond-type-columns). |

Unlike the center stone cuts, side stone cuts have no stone columns.

## Metal Master

Controls which metals are offered.

| Column | Description |
| ------ | ----------- |
| **Option** | Metal name. |
| **Active** | Switch on to offer the metal in this configurator. Switch off to hide it. |
| **Default** | Select the option that is pre-selected for customers. Only one option per tab can be the default, and only an active option can be selected. |

This tab has no **Order** column. A metal that is ticked in **Side Setting Master** cannot be switched off. The **Cannot Disable Metal Master** popup appears instead.

## Metal Tone Master

Controls which metal tones are offered.

| Column | Description |
| ------ | ----------- |
| **Option** | Metal tone name. |
| **Active** | Switch on to offer the metal tone in this configurator. Switch off to hide it. |
| **Default** | Select the option that is pre-selected for customers. Only one option per tab can be the default, and only an active option can be selected. |

This tab has no **Order** column. A metal tone that is ticked in **Metal Karat Master** cannot be switched off. The **Cannot Disable Metal Tone** popup appears instead.

## Metal Karat Master

Controls which karats are offered and which metal tones each karat is available in.

| Column | Description |
| ------ | ----------- |
| **Order** | Number that sets where the option is shown. See [Order Numbers](#order-numbers). |
| **Option** | Karat name. |
| **Active** | Switch on to offer the karat in this configurator. Switch off to hide it. |
| **Default** | Select the option that is pre-selected for customers. Only one option per tab can be the default, and only an active option can be selected. |
| Metal tone columns | One column per active tone from **Metal Tone Master**. Tick the tones the karat is offered in. |

## Side Setting Master

Controls which side settings are offered and which metals each one is available in.

| Column | Description |
| ------ | ----------- |
| **Order** | Number that sets where the option is shown. See [Order Numbers](#order-numbers). |
| **Option** | Side setting name. |
| **Active** | Switch on to offer the side setting in this configurator. Switch off to hide it. |
| **Default** | Select the option that is pre-selected for customers. Only one option per tab can be the default, and only an active option can be selected. |
| Metal columns | One column per active metal from **Metal Master**. Tick the metals the side setting is offered in. |

**At least one metal is required** for every active side setting. If one is missing when you click **Save**, the message "Please select at least one Metal for this active Side Setting." appears under that row and nothing is saved. The message clears when you tick a metal, switch the side setting off or open another tab.

This tab has a search and filter bar (see [Search and Filter](#search-and-filter)); the filter here is **Filter by Side Setting**.

The side settings you activate here become the columns in **Shank Master**.

The picture for each side setting is uploaded in [Side Setting Image Upload](#side-setting-image-upload).

## Shank Master

Controls which shanks are offered and which side settings each shank supports.

| Column | Description |
| ------ | ----------- |
| **Order** | Number that sets where the option is shown. See [Order Numbers](#order-numbers). |
| **Option** | Shank name. |
| **Active** | Switch on to offer the shank in this configurator. Switch off to hide it. |
| **Default** | Select the option that is pre-selected for customers. Only one option per tab can be the default, and only an active option can be selected. |
| Side setting columns | One column per active side setting from **Side Setting Master**. Tick the side settings the shank supports. |

## Head Master

Controls which heads are offered for each carat size and shape.

| Column | Description |
| ------ | ----------- |
| **Order** | Number that sets where the option is shown. See [Order Numbers](#order-numbers). |
| **Option** | Head name. |
| **Active** | Switch on to offer the head in this configurator. Switch off to hide it. |
| **Default** | Select the option that is pre-selected for customers. Only one option per tab can be the default, and only an active option can be selected. |
| Carat size columns | One column per active carat size from **Carat Master**. Tick the carat sizes the head is offered for. |
| Diamond shape columns | One column per active shape from **Diamond Shape**. Tick the shapes the head is offered for. |

This tab has a search and filter bar (see [Search and Filter](#search-and-filter)); the filter here is **Filter by Head**.

The picture for each head is uploaded in [Head Image Upload](#head-image-upload).

## Ring Size Master

Controls which ring sizes are offered.

| Column | Description |
| ------ | ----------- |
| **Order** | Number that sets where the option is shown. See [Order Numbers](#order-numbers). |
| **Option** | Ring size. The size is shown in every regional size standard it has a value for, for example "3 US · 44 FR · 14 DE" (see [Ring Size](../settings/margin-cost-center/ring-size.md)); hover over a country code to see the country name. If there are no regional values, the plain size is shown. |
| **Active** | Switch on to offer the size in this configurator. Switch off to hide it. |
| **Default** | Select the option that is pre-selected for customers. Only one option per tab can be the default, and only an active option can be selected. |

## Head Image Upload

Lets you upload a picture for each head for this configurator. Each head has its own upload box, labelled with the head name and the recommended aspect ratio (**Aspect Ratio: 300 x 300**).

1. Drop an image on the box, or click the box to choose a file ("Drop files here or click to upload.").
2. To remove an image, click the **X** icon next to it.
3. Click **Save** to upload the changes. **Save** becomes available once you have added or removed an image.

| Rule | Detail |
| ---- | ------ |
| Required | - (every box is optional) |
| File types | .jpg, .jpeg, .png, .gif, .webp, .bmp, .svg, .ico, .tiff, .tif |
| Maximum size | 20 MB per image |
| Images per box | One. Dropping a new file replaces the one in the box. |

If the file type is not allowed, the message "Only allowed image file types can be uploaded." followed by the list of allowed types appears. If the file is too large, the message "You can only upload files with a maximum size of 20 MB." appears. After a successful save the page shows the system's confirmation message and reloads the images.

## Side Setting Image Upload

Lets you upload a picture for each side setting for this configurator. Each side setting has its own upload box, labelled with the side setting name and the recommended aspect ratio (**Aspect Ratio: 300 x 300**).

1. Drop an image on the box, or click the box to choose a file ("Drop files here or click to upload.").
2. To remove an image, click the **X** icon next to it.
3. Click **Save** to upload the changes. **Save** becomes available once you have added or removed an image.

| Rule | Detail |
| ---- | ------ |
| Required | - (every box is optional) |
| File types | .jpg, .jpeg, .png, .gif, .webp, .bmp, .svg, .ico, .tiff, .tif |
| Maximum size | 20 MB per image |
| Images per box | One. Dropping a new file replaces the one in the box. |

If the file type is not allowed, the message "Only allowed image file types can be uploaded." followed by the list of allowed types appears. If the file is too large, the message "You can only upload files with a maximum size of 20 MB." appears. After a successful save the page shows the system's confirmation message and reloads the images.
