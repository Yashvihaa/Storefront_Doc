---
sidebar_position: 5
id: earring-configurator
title: Earring Configurator
sidebar_label: Earring Configurator
---

# Earring Configurator

## Overview

The **Earring Configurator** settings control which options customers can choose for earrings in the configurator on the website. Each tab covers one attribute, such as stone type, carat size, diamond shape or metal. For every option you decide whether it is offered, which one is pre-selected, how it is ordered, and how it links to the options in other tabs.

The options themselves are created in the master pages (metals, shapes, carat sizes and so on). This page only picks which of them the earring configurator offers. The same master record can be on in one configurator and off in another. Settings are kept separately for each company.

:::note[Who can use it]
Anyone whose role can open the page can see the settings. Changing them needs the **Edit** permission for this page. Without it, the switches, selections, checkboxes and order boxes are disabled and **Save** cannot be used. The page has no add or delete actions, so the **Add** and **Delete** permissions have no effect here.

For a client company, each tab lists only the options that TCC Tech has switched on in its own Earring Configurator. See [Where the Options Come From](#where-the-options-come-from).
:::

---

## Data Displayed

### Configurator Screen

The tabs across the top list the settings in a fixed order; click a tab to open it. If there are more tabs than fit on the screen, use the arrows at either end of the tab bar to scroll. The page opens on the first tab that has options.

Each tab shows:

- the tab name, with a count on the right such as *4 of 10 shown to customers* (only when the tab has options);
- a short description of the tab, shown in italics under each tab heading below;
- the table of options. The table scrolls inside the page, the column headings stay in view, and the **Order** and **Option** columns stay in place when you scroll sideways. Inactive rows appear faded;
- a status line, **Unsaved changes**, **Saving…** or **All changes saved**, with the **Save** button beside it.

| Action | Description |
| ------ | ----------- |
| **Tabs** | Click a tab to open its settings. Opening a tab reloads its saved settings. |
| **Active** | Switch on to offer an option; switch off to hide it from customers. Switching off also clears what was set for that option in the tab (its default, mappings, diamond type and order), and its other controls are disabled. |
| **Default** | Select the option that is pre-selected. Only active options can be the default. |
| **Order** | Sets where the option is shown. See [Order Numbers](#order-numbers). |
| **Search Table** / **Filter by** | Available on larger tabs. See [Search and Filter](#search-and-filter). |
| **Save** | Saves the tab that is currently open. It is available only when that tab has unsaved changes and you have the **Edit** permission. |
| **View Documentation** | Opens this page. |

### Configurator Tabs

| Order | Tab | What it sets |
| ----- | --- | ------------ |
| 1 | [Stone Type Master](#stone-type-master) | Stone types offered, their defaults and the stone positions they can be used for. |
| 2 | [Stone Master](#stone-master) | Stones offered. |
| 3 | [Carat Master](#carat-master) | Carat sizes offered, and their diamond type. |
| 4 | [Diamond Shape](#diamond-shape) | Diamond shapes offered, their diamond type and the carat sizes of each shape. |
| 5 | [Diamond Color and Clarity](#diamond-color-and-clarity) | Color and clarity combinations offered for the center stone. |
| 6 | [Side Diamond Color and Clarity](#side-diamond-color-and-clarity) | Color and clarity combinations offered for side stones. |
| 7 | [Diamond Cut Master](#diamond-cut-master) | Cuts offered for the center stone, and the stones each cut applies to. |
| 8 | [Side Stone Cuts](#side-stone-cuts) | Cuts offered for side stones. |
| 9 | [Metal Master](#metal-master) | Metals offered. |
| 10 | [Metal Tone Master](#metal-tone-master) | Metal tones offered. |
| 11 | [Metal Karat Master](#metal-karat-master) | Karats offered, and the metal tones of each karat. |
| 12 | [Side Setting Master](#side-setting-master) | Side settings offered, and their metals. |
| 13 | [Shank Master](#shank-master) | Shanks offered, and the side settings each shank supports. |
| 14 | [Head Master](#head-master) | Heads offered, and the carat sizes and shapes of each head. |
| 15 | [Ring Size Master](#ring-size-master) | Ring sizes offered. |
| 16 | [Back Master](#back-master) | Earring backs offered. |
| 17 | [Push Master](#push-master) | Earring pushes offered, and the backs each push supports. |
| 18 | [Head Image Upload](#head-image-upload) | A picture for each head. |
| 19 | [Side Setting Image Upload](#side-setting-image-upload) | A picture for each side setting. |

### Settings at a Glance

| Setting | Type | What it does | Required |
| ------- | ---- | ------------ | -------- |
| **Active** | Switch | Whether the option is offered. | - |
| **Default** | Single choice per tab | The pre-selected option. | - |
| **Order** | Whole number, 1 or more | Display position of the option, for example *1*. | - |
| **Natural** / **Lab Grown** / **Both** | One choice per row, can be cleared | Diamond type the option is offered for. | - |
| Mapping checkboxes | Any number per row | Links to options in other tabs. | - |
| Metal checkboxes in **Side Setting Master** | Any number per row | Metals a side setting is offered in. | ✅ (at least one per active side setting) |
| Pictures in the image upload tabs | Image file | Pictures for heads and side settings. | - |

### Order Numbers

Tabs with an **Order** column let you set the position of each option. The box shows the row's position in the table in grey until you type a number. Type a number, or use the small up and down arrows next to the box (the up arrow stops at 1). The box is disabled for inactive rows. Lower numbers come first. Order numbers are saved with the tab and are cleared when the option is switched off.

### Diamond Type Columns

Several tabs have **Natural**, **Lab Grown** and **Both** columns. Tick one of them to choose which diamond type the option is offered for; tick it again to clear it. Only one can be ticked per row. A column is unavailable (greyed out) when the matching stone type is not active in **Stone Type Master**; **Both** needs natural and lab grown to be active.

### Mapping Columns

Some tabs show one column for each active option of another tab (for example, one column per active metal tone in **Metal Karat Master**). Only options that are active and saved in the related tab appear as columns. Tick a column to link the two options. After you save, an option that is switched off no longer appears as a column in the linked tabs.

### Stone Type Master

*Manage stone type options available for your products.*

Controls which stone types are offered and which one is pre-selected for each stone position. This tab also decides which diamond types can be chosen in the other tabs.

| Column | Description |
| ------ | ----------- |
| **Order** | Number that sets where the stone type is shown. See [Order Numbers](#order-numbers). |
| **Option** | Stone type name. |
| **Active** | Switch on to make the stone type available in this configurator. |
| **Center Default** | Select the stone type that is pre-selected for the center stone. |
| **Side Default** | Select the stone type that is pre-selected for side stones. |
| **Available in** (**Center stone**, **Side stone**) | Tick the stone positions the stone type can be used for. |

The default columns are independent of each other: each one has its own selected stone type.

The stone types you activate here decide which of the **Natural**, **Lab Grown** and **Both** columns can be used in the other tabs (see [Diamond Type Columns](#diamond-type-columns)). Save this tab first, then set up the others.

A stone type that is still used by an active option in another tab cannot be switched off. The **Cannot Disable Stone Type** popup appears instead (see [Cannot Disable Popup](#cannot-disable-popup)). The "no diamond" stone type is never blocked.

### Stone Master

*Manage and configure the stone options available for your products.*

Controls which stones are offered. The active stones become the stone columns in **Diamond Cut Master**.

| Column | Description |
| ------ | ----------- |
| **Option** | Stone name. |
| **Active** | Switch on to offer the stone in this configurator. Switch off to hide it. |
| **Default** | Select the option that is pre-selected for customers. Only one option per tab can be the default, and only an active option can be selected. |

This tab has no **Order** column. A stone that is ticked in a cut tab can be switched off here without a popup. After you save, its column disappears from the cut tab.

### Carat Master

*Manage carat size options and their diamond-type mapping.*

Controls which carat sizes are offered.

| Column | Description |
| ------ | ----------- |
| **Option** | Carat size. |
| **Active** | Switch on to offer the carat size in this configurator. Switch off to hide it. |
| **Default** | Select the option that is pre-selected for customers. Only one option per tab can be the default, and only an active option can be selected. |
| **Natural** / **Lab Grown** / **Both** | Choose which diamond type the option is offered for. See [Diamond Type Columns](#diamond-type-columns). |

This tab has no **Order** column. It has a search and filter bar (see [Search and Filter](#search-and-filter)); the filter here is **Filter by Carat Size**.

A carat size that is ticked in **Diamond Shape** or **Head Master** cannot be switched off. The **Cannot Disable Carat** popup appears instead.

### Diamond Shape

*Manage diamond shape options and their carat size and diamond-type mapping.*

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

### Diamond Color and Clarity

*Manage the diamond color and clarity combinations available for center stones.*

Controls which diamond color and clarity combinations are offered for the center stone.

| Column | Description |
| ------ | ----------- |
| **Option** | Color and clarity combination, shown as color/clarity, for example *F/VS1*. |
| **Active** | Switch on to offer the combination in this configurator. Switch off to hide it. |
| **Default** | Select the option that is pre-selected for customers. Only one option per tab can be the default, and only an active option can be selected. |
| **Natural** / **Lab Grown** / **Both** | Choose which diamond type the option is offered for. See [Diamond Type Columns](#diamond-type-columns). |

This tab has no **Order** column. The combinations come from the active records in the Diamond Group Master (see [Where the Options Come From](#where-the-options-come-from)).

### Side Diamond Color and Clarity

*Manage the diamond color and clarity combinations available for side stones.*

Controls which diamond color and clarity combinations are offered for side stones.

| Column | Description |
| ------ | ----------- |
| **Option** | Color and clarity combination, shown as color/clarity, for example *F/VS1*. |
| **Active** | Switch on to offer the combination in this configurator. Switch off to hide it. |
| **Default** | Select the option that is pre-selected for customers. Only one option per tab can be the default, and only an active option can be selected. |
| **Natural** / **Lab Grown** / **Both** | Choose which diamond type the option is offered for. See [Diamond Type Columns](#diamond-type-columns). |

This tab has no **Order** column. The combinations come from the active records in the Diamond Group Master (see [Where the Options Come From](#where-the-options-come-from)).

### Diamond Cut Master

*Manage diamond cut options and map them to the stones and diamond types they support.*

Controls which diamond cuts are offered for the center stone and which stones each cut applies to.

| Column | Description |
| ------ | ----------- |
| **Order** | Number that sets where the option is shown. See [Order Numbers](#order-numbers). |
| **Option** | Cut name. |
| **Active** | Switch on to offer the cut in this configurator. Switch off to hide it. |
| **Default** | Select the option that is pre-selected for customers. Only one option per tab can be the default, and only an active option can be selected. |
| Stone columns | One column per active stone from **Stone Master**. Tick the stones the cut applies to. |
| **Natural** / **Lab Grown** / **Both** | Choose which diamond type the option is offered for. See [Diamond Type Columns](#diamond-type-columns). |

### Side Stone Cuts

*Manage side diamond cut options and their diamond-type mapping.*

Controls which diamond cuts are offered for side stones.

| Column | Description |
| ------ | ----------- |
| **Order** | Number that sets where the option is shown. See [Order Numbers](#order-numbers). |
| **Option** | Cut name. |
| **Active** | Switch on to offer the cut in this configurator. Switch off to hide it. |
| **Default** | Select the option that is pre-selected for customers. Only one option per tab can be the default, and only an active option can be selected. |
| **Natural** / **Lab Grown** / **Both** | Choose which diamond type the option is offered for. See [Diamond Type Columns](#diamond-type-columns). |

Unlike the center stone cuts, side stone cuts have no stone columns.

### Metal Master

*Manage and configure the base metal types available for your products.*

Controls which metals are offered.

| Column | Description |
| ------ | ----------- |
| **Option** | Metal name. |
| **Active** | Switch on to offer the metal in this configurator. Switch off to hide it. |
| **Default** | Select the option that is pre-selected for customers. Only one option per tab can be the default, and only an active option can be selected. |

This tab has no **Order** column. A metal that is ticked in **Side Setting Master** cannot be switched off. The **Cannot Disable Metal Master** popup appears instead.

### Metal Tone Master

*Manage and configure the metal tone options available for your products.*

Controls which metal tones are offered.

| Column | Description |
| ------ | ----------- |
| **Option** | Metal tone name. |
| **Active** | Switch on to offer the metal tone in this configurator. Switch off to hide it. |
| **Default** | Select the option that is pre-selected for customers. Only one option per tab can be the default, and only an active option can be selected. |

This tab has no **Order** column. A metal tone that is ticked in **Metal Karat Master** cannot be switched off. The **Cannot Disable Metal Tone** popup appears instead.

### Metal Karat Master

*Manage karat options and map them to the metal tones they support.*

Controls which karats are offered and which metal tones each karat is available in.

| Column | Description |
| ------ | ----------- |
| **Order** | Number that sets where the option is shown. See [Order Numbers](#order-numbers). |
| **Option** | Karat name. |
| **Active** | Switch on to offer the karat in this configurator. Switch off to hide it. |
| **Default** | Select the option that is pre-selected for customers. Only one option per tab can be the default, and only an active option can be selected. |
| Metal tone columns | One column per active tone from **Metal Tone Master**. Tick the tones the karat is offered in. |

### Side Setting Master

*Manage side setting options and map them to metals, shapes, and sizes.*

Controls which side settings are offered and which metals each one is available in.

| Column | Description |
| ------ | ----------- |
| **Order** | Number that sets where the option is shown. See [Order Numbers](#order-numbers). |
| **Option** | Side setting name. |
| **Active** | Switch on to offer the side setting in this configurator. Switch off to hide it. |
| **Default** | Select the option that is pre-selected for customers. Only one option per tab can be the default, and only an active option can be selected. |
| Metal columns | One column per active metal from **Metal Master**. Tick the metals the side setting is offered in. Required: at least one for each active side setting. |

This tab has a search and filter bar (see [Search and Filter](#search-and-filter)); the filter here is **Filter by Side Setting**. Every active side setting needs at least one metal (see [Side Setting Metals](#side-setting-metals)).

The side settings you activate here become the columns in **Shank Master**.

The picture for each side setting is uploaded in [Side Setting Image Upload](#side-setting-image-upload).

### Shank Master

*Manage shank options and map them to the side settings they support.*

Controls which shanks are offered and which side settings each shank supports.

| Column | Description |
| ------ | ----------- |
| **Order** | Number that sets where the option is shown. See [Order Numbers](#order-numbers). |
| **Option** | Shank name. |
| **Active** | Switch on to offer the shank in this configurator. Switch off to hide it. |
| **Default** | Select the option that is pre-selected for customers. Only one option per tab can be the default, and only an active option can be selected. |
| Side setting columns | One column per active side setting from **Side Setting Master**. Tick the side settings the shank supports. |

### Head Master

*Manage head options and map them to carat sizes and diamond shapes.*

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

### Ring Size Master

*Manage the sizes (ring size, or length for bracelets) available for your products.*

Controls which ring sizes are offered.

| Column | Description |
| ------ | ----------- |
| **Order** | Number that sets where the option is shown. See [Order Numbers](#order-numbers). |
| **Option** | Ring size. When countries are selected on the [Ring Size](../settings/margin-cost-center/ring-size.md) page, the size is shown in every regional size it has a value for, for example *3 US · 44 FR · 14 DE*; hover over a country code to see the country name. Otherwise the plain size is shown. |
| **Active** | Switch on to offer the size in this configurator. Switch off to hide it. |
| **Default** | Select the option that is pre-selected for customers. Only one option per tab can be the default, and only an active option can be selected. |

### Back Master

*Manage back options available for your products.*

Controls which earring backs are offered.

| Column | Description |
| ------ | ----------- |
| **Order** | Number that sets where the option is shown. See [Order Numbers](#order-numbers). |
| **Option** | Back name. |
| **Active** | Switch on to offer the back in this configurator. Switch off to hide it. |
| **Default** | Select the option that is pre-selected for customers. Only one option per tab can be the default, and only an active option can be selected. |

The backs you activate here become the columns in **Push Master**.

### Push Master

*Manage push options and map them to the backs they support.*

Controls which earring pushes are offered and which backs each push supports.

| Column | Description |
| ------ | ----------- |
| **Order** | Number that sets where the option is shown. See [Order Numbers](#order-numbers). |
| **Option** | Push name. |
| **Active** | Switch on to offer the push in this configurator. Switch off to hide it. |
| **Default** | Select the option that is pre-selected for customers. Only one option per tab can be the default, and only an active option can be selected. |
| Back columns | One column per active back from **Back Master**. Tick the backs the push supports. |

### Head Image Upload

*Upload and manage head images used across your products.*

Lets you upload a picture of each head for this configurator. Each head has its own upload box, labelled with the head name and the recommended aspect ratio (**Aspect Ratio: 300 x 300**). There is a box for every active head in the [Head](../product-management/masters/head.md) master, including heads that are switched off in this configurator. See [Steps to Upload Images](#steps-to-upload-images).

| Rule | Detail |
| ---- | ------ |
| Required | - (every box is optional) |
| File types | .jpg, .jpeg, .png, .gif, .webp, .bmp, .svg, .ico, .tiff, .tif |
| Maximum size | 20 MB per image |
| Images per box | One. Dropping a new file replaces the one in the box. |

### Side Setting Image Upload

*Upload and manage side setting images used across your products.*

Lets you upload a picture of each side setting for this configurator. Each side setting has its own upload box, labelled with the side setting name and the recommended aspect ratio (**Aspect Ratio: 300 x 300**). There is a box for every active side setting in the [Side Setting Style](../product-management/masters/side-setting.md) master, including side settings that are switched off in this configurator. See [Steps to Upload Images](#steps-to-upload-images).

| Rule | Detail |
| ---- | ------ |
| Required | - (every box is optional) |
| File types | .jpg, .jpeg, .png, .gif, .webp, .bmp, .svg, .ico, .tiff, .tif |
| Maximum size | 20 MB per image |
| Images per box | One. Dropping a new file replaces the one in the box. |

---

## How It Works

### Where the Options Come From

Each tab lists the records of one master (see [Modules It Depends On](#modules-it-depends-on)). Only active master records appear. A record that is switched off or deleted in its master disappears from the tab, and a new master record appears switched off until you switch it on here.

- **Row order.** Rows are listed in the order the records were added to the master, not by their **Order** number. Carat sizes are listed by their sort code.
- **Color and clarity.** The color and clarity tabs list one row for each color and clarity pair in your company's [Diamond Group Master](../product-management/diamond-group-master.md). If your company uses TCC Tech's diamond pricing, they come from TCC Tech's Diamond Group Master instead.
- **Ring sizes.** **Ring Size Master** lists the active sizes of the [Item Size](../product-management/masters/item-size-master.md) master. When countries are selected on the [Ring Size](../settings/margin-cost-center/ring-size.md) page, only the sizes in those size charts are listed, smallest first, with their regional sizes. Otherwise every size is listed.
- **Client companies.** For a client company, every tab except the color and clarity tabs and the cut tabs lists only the options that TCC Tech has switched on in its own Earring Configurator. TCC Tech sees every active master record.

### Steps to Set Up the Configurator

Linked tabs only list options that are active and saved in the tab they link to, so work from the basics outwards.

1. Open **Stone Type Master**. Switch on the stone types you sell, choose the defaults, tick the stone positions and click **Save**.
2. Set up **Stone Master**, **Carat Master**, **Diamond Shape**, **Diamond Color and Clarity**, **Side Diamond Color and Clarity**, **Metal Master**, **Metal Tone Master** and **Back Master**. In each tab switch on the options, choose a default, tick the diamond type where there is one and click **Save**.
3. Set up the tabs that link to them: **Metal Karat Master**, **Diamond Cut Master**, **Side Stone Cuts**, **Side Setting Master**, **Shank Master**, **Head Master** and **Push Master**. Tick the linked options in each row and click **Save**.
4. Open **Ring Size Master**, switch on the sizes you offer, set the order and default, and click **Save**.
5. Upload the pictures in **Head Image Upload** and **Side Setting Image Upload**.

### Steps to Change a Tab

1. Click the tab.
2. On a large tab, use **Search Table** or **Filter by** to find the rows you want.
3. Switch **Active** on or off, choose the **Default**, tick the diamond type and the mapping columns, and set the **Order**.
4. The status line shows **Unsaved changes**.
5. Click **Save**. The status line shows **Saving…**, then a confirmation message appears, the tab reloads and the status line shows **All changes saved**.

:::tip Save each tab
Changes are saved one tab at a time. Click **Save** before you open another tab. Opening a tab reloads the saved settings, so unsaved changes on the tab you leave are lost, and you are not asked to confirm.
:::

### Steps to Upload Images

1. Open **Head Image Upload** or **Side Setting Image Upload**.
2. Drop an image on a box, or click the box to choose a file (*Drop files here or click to upload.*).
3. To remove an image, click the **X** icon next to it.
4. Click **Save**. It becomes available once you have added or removed an image. After a successful save the page shows a confirmation message and reloads the images.

If the file type is not allowed, the message *Only allowed image file types can be uploaded.* followed by the list of allowed types appears. If the file is too large, the message *You can only upload files with a maximum size of 20 MB.* appears.

Pictures are kept separately for each configurator, so a head or side setting can have a different picture here than in another configurator.

### What Saving Does

- Only the open tab is saved, and only its active options are kept on. Every option that is not active is switched off for this configurator, and its default, order and links in that tab are removed.
- The settings belong to this configurator and your company. Saving here does not change the other configurators or other companies, even though they list the same master records (except the **Active** setting in **Back Master** and **Push Master**, see [Edge Cases / Notes](#edge-cases--notes)).
- When you save **Diamond Shape**, shapes that are switched off are also removed from every head in **Head Master**.
- Saved changes are recorded in [Audit Logs](../settings/audit-log.md).
- If your company uses TCC Tech's diamond pricing, **Side Diamond Color and Clarity** always follows TCC Tech's own selection. Saving that tab shows *Saved. Not applied: …* followed by an explanation, and your changes there are not kept.

### Search and Filter

The **Carat Master**, **Diamond Shape**, **Side Setting Master** and **Head Master** tabs have a search and filter bar above the table.

| Field | Description |
| ----- | ----------- |
| **Search Table** | Type to show only options whose name contains the text (placeholder *Search by option...*). The search is not case-sensitive. |
| **Filter by** | Select one or more options to show only those rows. The label names the tab, for example **Filter by Carat Size**. Selected values appear under **Active Filters**; click the cross on a value to remove it, or **Clear All** to remove all. |

Search and filter values apply immediately and are remembered in your browser for each tab, so they are still there the next time you open the page. They only hide rows and do not change what is saved. Clear them if a row seems to be missing.

### Cannot Disable Popup

Some options cannot be switched off while another tab still uses them. When you switch **Active** off for such an option, a popup explains where it is used and what to remove first. Click **OK**, remove the option from the tab that uses it, save that tab, and then switch the option off. The switch is not changed until the blocking link is removed.

| Popup | When it appears |
| ----- | --------------- |
| **Cannot Disable Stone Type** | The stone type is used by an active option in another tab (shape, color and clarity, cuts or carat). |
| **Cannot Disable Carat** | The carat size is ticked in **Diamond Shape** or **Head Master**. |
| **Cannot Disable Metal Master** | The metal is ticked in **Side Setting Master**. |
| **Cannot Disable Metal Tone** | The metal tone is ticked in **Metal Karat Master**. |

### Side Setting Metals

Every active side setting needs at least one metal. If one is missing when you click **Save** in **Side Setting Master**, the message *Please select at least one Metal for this active Side Setting.* appears under that row and nothing is saved. The message clears when you tick a metal, switch the side setting off or open another tab.

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the settings | The table shows **No Data** and the count is hidden until the settings arrive. |
| A tab has no options | **No Data** |
| Search or filter matches nothing | **No Data** |
| The settings cannot be loaded | An error message with the reason, for example *Failed to fetch master list*. |
| Saving | The status line shows **Saving…** and the **Save** button shows a loading indicator. |
| A save fails | An error message with the reason. Your changes stay on screen and the status line still shows **Unsaved changes**. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How the Earring Configurator uses it |
| ------ | ------------------------- |
| [Stone Type](../product-management/masters/stone-type.md) | Supplies the rows of **Stone Type Master**. |
| [Stone Master](../product-management/masters/stone-master.md) | Supplies the rows of **Stone Master**, which become the stone columns in the cut tabs. |
| [Carat Size](../product-management/masters/carat-size.md) | Supplies the rows of **Carat Master** and their sort order. |
| [Diamond Shape](../product-management/masters/diamond-shape.md) | Supplies the rows of **Diamond Shape**. |
| [Diamond Group Master](../product-management/diamond-group-master.md), [Color](../product-management/masters/color.md) and [Clarity](../product-management/masters/clarity.md) | Supply the color and clarity pairs. Switching a Diamond Group Master record on or off changes the rows in the color and clarity tabs. |
| [Diamond Cut](../product-management/masters/cut.md) | Supplies the rows of the cut tabs. |
| [Metals](../product-management/masters/metal-master/metals.md) | Supplies the rows of **Metal Master**. |
| [Metal Tone](../product-management/masters/metal-master/metal-tone.md) | Supplies the rows of **Metal Tone Master**. |
| [Metal Karat](../product-management/masters/metal-master/metal-karat.md) | Supplies the rows of **Metal Karat Master**. |
| [Side Setting Style](../product-management/masters/side-setting.md) | Supplies the rows of **Side Setting Master** and the boxes in **Side Setting Image Upload**. |
| [Shank](../product-management/masters/shank.md) | Supplies the rows of **Shank Master**. |
| [Head](../product-management/masters/head.md) | Supplies the rows of **Head Master** and the boxes in **Head Image Upload**. |
| [Push Back Master](../product-management/masters/push-and-back.md) | Supplies the rows of **Back Master** and **Push Master**. |
| [Item Size](../product-management/masters/item-size-master.md) and [Ring Size](../settings/margin-cost-center/ring-size.md) | Item Size supplies the rows of **Ring Size Master**. The countries selected on the Ring Size page decide which sizes are listed and the regional sizes shown. |
| TCC Tech's Earring Configurator | For a client company, limits each tab to the options TCC Tech has switched on (except the color and clarity tabs and the cut tabs). |

### Modules That Depend On It

| Module | How it uses these settings |
| ------ | -------------------------- |
| The earring configurator on the website | Customers can choose only the active options. The default option is pre-selected, and options are shown in the set order. The links between tabs decide which options can be combined. |
| [Stud Configurator products](../product-management/configurator-products/stud-configurator.md) | The configurator product page in the admin lists its options (such as stones, diamond types, cuts, colors and clarities) from these settings. |
| Client companies' Earring Configurator settings | TCC Tech's settings decide which options a client company sees in its own tabs. |
| [Audit Logs](../settings/audit-log.md) | Records each saved change. |

### What Changes If…

| Change | Effect |
| ------ | ------ |
| You switch an option off and save | Customers can no longer choose it in the earring configurator. It is removed from the columns of linked tabs, and its default, order and links in the tab are cleared. |
| You change the default and save | A different option is pre-selected for customers. |
| You change the order and save | The options are shown to customers in the new order. The table on this page keeps its own order. |
| You switch a stone type off in **Stone Type Master** and save | Its **Natural** or **Lab Grown** column (and **Both**) becomes unavailable in the other tabs. |
| You switch a shape off in **Diamond Shape** and save | It is removed from every head in **Head Master**. |
| You switch a back off in **Back Master** and save | Its column disappears from **Push Master**. Because the **Active** setting of backs is shared, it is also switched off for other companies. |
| A record is switched off or deleted in its master | It disappears from the tab and from the configurator. |
| A new record is added in a master | It appears in the tab switched off. Customers do not see it until you switch it on and save. |
| A Diamond Group Master record is switched off | Its color and clarity pair may disappear from the color and clarity tabs. |
| The countries on the Ring Size page change | **Ring Size Master** lists a different set of sizes, with different regional sizes. |
| TCC Tech switches an option off in its Earring Configurator | The option no longer appears in client companies' tabs (except the color and clarity tabs and the cut tabs). |

---

## Edge Cases / Notes

- **Unsaved changes are lost without warning** when you open another tab or leave the page.
- **The Order number does not re-sort the table.** It only changes the order customers see.
- **Switching every option off.** In **Stone Type Master**, **Carat Master**, **Diamond Shape**, **Diamond Color and Clarity**, **Side Diamond Color and Clarity**, **Side Setting Master**, **Shank Master**, **Head Master**, **Back Master** and **Push Master**, at least one option must stay active. If you switch them all off and save, the tab reloads with the options still active.
- **Head Master and Push Master without Edit.** The **Active** switch in these tabs can be moved even without the **Edit** permission, but the change cannot be saved because **Save** stays disabled.
- **Image boxes for switched-off options.** The image upload tabs show a box for every active head or side setting in the master, even if it is switched off in this configurator.
- **Filters are remembered.** A search or filter left on a tab is still applied the next time you open the page in the same browser, which can make rows look missing.
- **Back Master and Push Master are shared.** Unlike the other tabs, the **Active** setting of a back or push is not kept per company. It is shared by every company on the platform, so switching a back or push off also hides it for other companies. Its default and order are kept per company.
- **Shared diamond pricing.** If your company uses TCC Tech's diamond pricing, changes in **Side Diamond Color and Clarity** are not kept. The center stone **Diamond Color and Clarity** tab is saved for your company as normal.

:::tip
If customers cannot see an option in the earring configurator, check that it is active in its master, switched on here, and ticked in the tabs that link to it.
:::
