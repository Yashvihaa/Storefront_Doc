---
sidebar_position: 8
id: single-dynamic-product
title: Single Dynamic Product
sidebar_label: Single Dynamic Product
---

# Single Dynamic Product

## Overview

**Single Dynamic Product** holds the diamond options offered for products that are not 3D products. It has three tabs: stone type, diamond color and clarity, and diamond cut. For each option you decide whether it is offered, which one is pre-selected and, where there is an **Order** column, the order it is shown in.

These options are used by the pricing popup on the [All Products](../product-management/all-products.md#pricing-details) page. 3D products use the same kind of settings from [HLD Products](./hld-products.md) instead.

The page works like the other configurator settings pages, such as [Ring Configurator](./ring-configurator.md), but with fewer tabs and columns.

:::caution
In the current version of the admin panel this page does not load any options. Every tab shows **No Data**, the status line shows **All changes saved** and **Save** stays unavailable. The sections below describe how the screen is laid out.
:::

:::note[Who can use it]
Anyone whose role can open the page can see it. Without the **Edit** permission for this page on the [Roles](../roles-permission/roles.md) page, the switches, selections, checkboxes and order boxes are disabled and **Save** cannot be used.
:::

---

## Data Displayed

### Configurator Screen

The page title has a help button that opens this guide. The tabs across the top list the settings in a fixed order. If there are more tabs than fit on the screen, use the arrows at either end of the tab bar to scroll.

Each tab shows:

- the tab name, with a count on the right such as *4 of 10 shown to customers* (only when the tab has options);
- a short description of the tab, in grey;
- the table of options. The table scrolls inside the page, the column headings stay in view, and the **Order** and **Option** columns stay in place when you scroll sideways. A table with no options shows **No Data**;
- a status line, **Unsaved changes**, **Saving…** or **All changes saved**, with the **Save** button beside it.

| Action | Description |
| ------ | ----------- |
| **Tabs** | Click a tab to open its settings. |
| **Active** | Switch on to offer an option. Switch off to hide it. Switching off also clears what was set for that option in the tab (its default, mappings, diamond type and order). Inactive rows appear faded and their other controls are disabled. |
| **Default** | Select the option that is pre-selected. Only active options can be the default. |
| **Order** | Sets where the option is shown. See [Order Numbers](#order-numbers). |
| **Save** | Saves the tab that is open. It is available only when that tab has unsaved changes and you have **Edit** permission. |

### Configurator Tabs

| Order | Tab | Description shown on the tab |
| ----- | --- | ---------------------------- |
| 1 | [Stone Type Master](#stone-type-master) | *Manage stone type options available for your products.* |
| 2 | [Diamond Color and Clarity](#diamond-color-and-clarity) | *Manage the diamond color and clarity combinations available for center stones.* |
| 3 | [Diamond Cut Master](#diamond-cut-master) | *Manage diamond cut options and map them to the stones and diamond types they support.* |

### Settings at a Glance

| Setting | What it does | Required |
| ------- | ------------ | -------- |
| **Active** | Whether the option is offered. | - |
| **Default** / **Center Default** | The pre-selected option. | - |
| **Order** | Display position of the option. | - |
| **Natural** / **Lab Grown** / **Both** | Diamond type the option is offered for. | - |
| Stone checkboxes | Stones a cut applies to. | - |

### Stone Type Master

Controls which stone types are offered and which one is pre-selected. This tab also decides which diamond types can be chosen in the other tabs.

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Order** | Number | Sets where the stone type is shown. See [Order Numbers](#order-numbers). | 1 |
| **Option** | Text | Stone type name, as set in the Stone Type master. | - |
| **Active** | Switch | Switch on to offer the stone type. | On |
| **Center Default** | Selection | The stone type pre-selected for the center stone. | Selected |

This page has no **Side Default** column and no **Available in** columns.

### Diamond Color and Clarity

Controls which diamond color and clarity combinations are offered for the center stone.

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Option** | Text | Color and clarity combination, shown as color/clarity. | *F/VS1* |
| **Active** | Switch | Switch on to offer the combination. | On |
| **Default** | Selection | The combination pre-selected for customers. Only one option per tab can be the default. | Selected |
| **Natural** / **Lab Grown** / **Both** | Checkbox | The diamond type the combination is offered for. See [Diamond Type Columns](#diamond-type-columns). | **Both** |

This tab has no **Order** column.

### Diamond Cut Master

Controls which diamond cuts are offered for the center stone and which stones each cut applies to.

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Order** | Number | Sets where the cut is shown. See [Order Numbers](#order-numbers). | 2 |
| **Option** | Text | Cut name. | *Excellent* |
| **Active** | Switch | Switch on to offer the cut. | On |
| **Default** | Selection | The cut pre-selected for customers. Only one option per tab can be the default. | Selected |
| Stone columns | Checkbox | One column per active stone. Tick the stones the cut applies to. See [Mapping Columns](#mapping-columns). | **Diamond** ticked |
| **Natural** / **Lab Grown** / **Both** | Checkbox | The diamond type the cut is offered for. See [Diamond Type Columns](#diamond-type-columns). | **Natural** |

### Cannot Disable Popup

On this page only a stone type can be blocked from being switched off. The **Cannot Disable Stone Type** popup says *The selected Stone Type cannot be disabled because it is currently in use by other configurations.*, with the hint *Remove this Stone Type from the configurations that depend on it, then try disabling it again.* Click **OK** to close it.

---

## How It Works

### Steps to Set Up the Options

1. Open **Stone Type Master**. Switch on the stone types to offer, set their **Order** and choose the **Center Default**. Click **Save**.
2. Open **Diamond Color and Clarity**. Switch on the combinations to offer, choose a **Default**, and tick **Natural**, **Lab Grown** or **Both** for each. Click **Save**.
3. Open **Diamond Cut Master**. Switch on the cuts to offer, set their **Order**, choose a **Default**, tick the stones each cut applies to, and tick a diamond type. Click **Save**.

Save **Stone Type Master** first. The stone types active there decide which diamond type columns can be used in the other two tabs.

:::tip Save each tab
Changes are saved one tab at a time, and only the active options of that tab are saved. Click **Save** before you open another tab. Unsaved changes on the tab you leave are lost, and you are not asked to confirm.
:::

### Order Numbers

The box shows the row's position in grey until you type a number. Type a number, or use the small up and down arrows next to the box. The up arrow stops at 1. The box is disabled for inactive rows. Lower numbers come first. Order numbers are saved with the tab and are cleared when the option is switched off.

### Diamond Type Columns

Tick **Natural**, **Lab Grown** or **Both** to choose which diamond type the option is offered for. Tick it again to clear it. Only one can be ticked per row. A column is greyed out when the matching stone type is not active in **Stone Type Master**. **Both** needs both the natural and the lab grown stone types to be active.

### Mapping Columns

**Diamond Cut Master** shows one column for each active stone. Tick a column to link the cut to that stone.

### Switching Off a Stone Type

A stone type that is still used by an active option in another tab cannot be switched off. Its diamond type counts as used when an active color and clarity combination or cut is set to that type or to **Both**. The [Cannot Disable Popup](#cannot-disable-popup) appears instead. Remove the stone type from the tab that uses it, save that tab, and then switch the stone type off. The no-diamond stone type is never blocked.

### Loading, Empty and Saving States

| State | What you see |
| ----- | ------------ |
| A tab has no options | **No Data** in the table, and no count next to the tab name. |
| No changes on the open tab | **All changes saved**, and **Save** is faded. |
| You changed something | **Unsaved changes**, with an amber dot. |
| Saving | **Saving…**, and the **Save** button shows a loading indicator. |
| Save finished | A success or error message appears at the top of the screen. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Single Dynamic Product uses it |
| ------ | ---------------------------------- |
| [Stone Type](../product-management/masters/stone-type.md) | Supplies the rows of **Stone Type Master**. |
| [Diamond Group Master](../product-management/diamond-group-master.md) | The color and clarity combinations come from the diamonds set up there, using the [Color](../product-management/masters/color.md) and [Clarity](../product-management/masters/clarity.md) masters. |
| [Cut](../product-management/masters/cut.md) | Supplies the rows of **Diamond Cut Master**. |
| [Stone Master](../product-management/masters/stone-master.md) | Supplies the stone columns in **Diamond Cut Master**. |
| [Roles](../roles-permission/roles.md) | The **Edit** permission for this page decides whether the settings can be changed. |

### Modules That Depend On It

| Module | How it uses Single Dynamic Product |
| ------ | ---------------------------------- |
| [All Products](../product-management/all-products.md#pricing-details) | In the pricing popup (**View Details** in the **Pricing** column) of a product that is not a 3D product, the **Stone Type**, **Color & Clarity** and **Diamond Cut** choices in the **CONFIGURATION** panel are the options active on this page. Picking one recalculates the price. |

The storefront configurators (ring, three stone, eternity band, bracelet, pendant and earring) use their own settings pages and do not read this page.

### What Changes If…

| Change | Effect |
| ------ | ------ |
| An option is active here | It is offered as a choice in the All Products pricing popup for products that are not 3D products. |
| No option in a tab is active | That row (**Stone Type**, **Color & Clarity** or **Diamond Cut**) is not shown in the pricing popup. |
| The **Order** of cuts changes | The cuts in the pricing popup follow the new order. |
| A stone type or cut is made inactive in its master, or a diamond is made inactive in Diamond Group Master | It is no longer offered in the pricing popup, even if it is active here. |
| The **Default** changes | The pricing popup is not affected. It starts on the first option of each row. |

---

## Edge Cases / Notes

- **The page does not load options.** In the current version every tab shows **No Data**, so the settings cannot be viewed or changed here. The All Products pricing popup still uses the options already stored.
- **Not the same as the Single Product switch.** The **Single Product** switch on a product in [All Products](../product-management/all-products.md) is a separate setting and is not controlled from this page.
- **Pricing popup starts on the first option.** The popup selects the first stone type, color and clarity combination and cut in its lists, not the option marked **Default** here. Stone types are always listed in the same fixed order, whatever their **Order** number.
- **Color & Clarity in the popup** is shown for normal and catalog products only.
- **Shared selections.** Unlike the other configurator pages, the stone type and cut selections for this page are not kept separately for each client.
- **New clients.** When a client is set up, it starts with TCC Tech's color and clarity selections for this page.
- **No search or filter.** These tabs have no **Search Table** or **Filter** boxes.
