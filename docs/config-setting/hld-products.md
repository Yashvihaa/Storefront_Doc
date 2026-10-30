---
sidebar_position: 9
id: hld-products
title: HLD Products
sidebar_label: HLD Products
---

# HLD Products

The **HLD Products** settings control which options customers can choose for HLD products on the website. Each tab covers one attribute: stone type, diamond color and clarity, or diamond cut.

---

## Configurator Screen

The page title is **HLD PRODUCTS**, with the line "Control which options appear in the live product configurator" and a help button that opens this guide. The tabs across the top list the settings in a fixed order; click a tab to open it. If there are more tabs than fit on the screen, use the arrows at either end of the tab bar to scroll.

:::caution
In the current version of the admin panel this page does not load any options: every tab shows **No Data** and **Save** stays unavailable. The sections below describe how the screen is laid out.
:::

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
| **Save** | Saves the tab that is currently open. It is available only when that tab has unsaved changes and you have edit permission. |

:::tip Save each tab
Changes are saved one tab at a time, and only the active options of that tab are saved. Click **Save** before you open another tab. Opening a tab reloads the saved settings, so unsaved changes on the tab you leave are lost, and you are not asked to confirm.
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

### Configurator Tabs

| Order | Tab |
| ----- | --- |
| 1 | [Stone Type Master](#stone-type-master) |
| 2 | [Diamond Color and Clarity](#diamond-color-and-clarity) |
| 3 | [Diamond Cut Master](#diamond-cut-master) |

### Order Numbers

Tabs with an **Order** column let you set the position of each option. The box shows the row's current position in grey until you type a number. Type a number, or use the small up and down arrows next to the box (the up arrow stops at 1). The box is disabled for inactive rows. Lower numbers come first. Order numbers are saved with the tab and are cleared when the option is switched off.

### Diamond Type Columns

Several tabs have **Natural**, **Lab Grown** and **Both** columns. Tick one of them to choose which diamond type the option is offered for; tick it again to clear it. Only one can be ticked per row. A column is unavailable (greyed out) when the matching stone type is not active in **Stone Type Master**; **Both** needs natural and lab grown to be active.

### Mapping Columns

**Diamond Cut Master** shows one column for each active stone. Tick a column to link the cut to that stone.

### Cannot Disable Popup

On this page only a stone type can be blocked from being switched off. When you switch **Active** off for a stone type that another tab still uses, the **Cannot Disable Stone Type** popup appears. Click **OK**, remove the stone type from the tab that uses it, save that tab, and then switch the stone type off.

---

## Stone Type Master

Controls which stone types are offered and which one is pre-selected. This tab also decides which diamond types can be chosen in the other tabs.

| Column | Description |
| ------ | ----------- |
| **Order** | Number that sets where the stone type is shown. See [Order Numbers](#order-numbers). |
| **Option** | Stone type name. |
| **Active** | Switch on to make the stone type available in this configurator. |
| **Center Default** | Select the stone type that is pre-selected for the center stone. |

This page has no **Side Default** column and no **Available in** columns.

The stone types you activate here decide which of the **Natural**, **Lab Grown** and **Both** columns can be used in the other tabs. Save this tab first, then set up the others.

A stone type that is still used by an active option in another tab cannot be switched off. The **Cannot Disable Stone Type** popup appears instead (see [Cannot Disable Popup](#cannot-disable-popup)). The "no diamond" stone type is never blocked.

## Diamond Color and Clarity

Controls which diamond color and clarity combinations are offered for the center stone.

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
| Stone columns | One column per active stone. Tick the stones the cut applies to. |
| **Natural** / **Lab Grown** / **Both** | Choose which diamond type the option is offered for. See [Diamond Type Columns](#diamond-type-columns). |

This page has no **Stone Master** tab, so the stone columns show the stones that are already active for this configurator.
