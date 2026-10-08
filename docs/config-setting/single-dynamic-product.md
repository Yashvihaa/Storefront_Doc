---
sidebar_position: 8
id: single-dynamic-product
title: Single Dynamic Product
sidebar_label: Single Dynamic Product
---

# Single Dynamic Product

The **Single Dynamic Product** settings control which options customers can choose for single dynamic products on the website. Each tab covers one attribute, such as stone type, diamond color and clarity, or diamond cut.

---

## Configurator Screen

The tabs across the top of the page list the settings in order. Click a tab to open it. Each tab shows its name and a short description, a table of options, an information note below the table and a **Save** button. If there are more tabs than fit on the screen, use the arrows at either end of the tab bar to scroll.

The page opens on the first tab that has options. A table with no options shows **No Data**.

| Action | Description |
| ------ | ----------- |
| **Tabs** | Click a tab to open its settings. |
| **Active** | Tick to offer an option; untick to hide it. Unticking clears the option's default, mappings and sort order. Inactive rows appear faded and their other fields are disabled. |
| **Default** | Select the option that is pre-selected. Only active options can be the default. |
| **Save** | Saves the tab that is currently open. |

:::tip Save each tab
Changes are saved one tab at a time. Click **Save** before you open another tab. Opening a tab reloads the saved settings, so unsaved changes on the current tab are lost.
:::

Users without edit permission can view the settings, but the fields and the **Save** button are disabled.

### Configurator Tabs

| Order | Tab |
| ----- | --- |
| 1 | [Stone Type Master](#stone-type-master) |
| 2 | [Diamond Color and Clarity](#diamond-color-and-clarity) |
| 3 | [Diamond Cut Master](#diamond-cut-master) |

### Diamond Type Columns

Several tabs have **Natural**, **Lab Grown** and **Both** columns. Tick one of them to choose which diamond type the option is offered for; tick it again to clear it. Only one can be ticked per row. A column is unavailable when the matching stone type is not active in **Stone Type Master** (**Both** requires natural and lab grown to be active).

### Mapping Columns

**Diamond Cut Master** shows one column for each active stone. Tick a column to link the cut to that stone. This page has no **Stone Master** tab, so the columns show the stones that are already active for single dynamic products.

### Cannot Disable Popup

On this page only a stone type can be blocked from deactivation. When you untick **Active** for a stone type that another tab still uses, the **Cannot Disable Stone Type** popup appears. Click **OK**, remove the stone type from the tab that uses it, save that tab, and then deactivate the stone type.

---

## Stone Type Master

Controls which stone types are offered and which one is selected by default.

| Column | Description |
| ------ | ----------- |
| **Options** | Stone type name (for example, natural or lab grown). |
| **Active** | Tick to make the stone type available in this configurator. |
| **Center Default** | Select the stone type that is pre-selected for the center stone. This page has no side stone default or stone position columns. |
| **Sort Order** | Number that sets the display order of the option. |

The stone types you activate here decide which of the **Natural**, **Lab Grown** and **Both** columns can be used in the other tabs. A stone type that is still used by another tab cannot be deactivated; the **Cannot Disable Stone Type** popup appears instead.

## Diamond Color and Clarity

Controls which diamond color and clarity combinations are offered for the center stone.

| Column | Description |
| ------ | ----------- |
| **Options** | Color and clarity combination, shown as color/clarity. |
| **Active** | Tick to make the option available in this configurator. |
| **Default** | Select the option that is pre-selected. Only one option per tab can be the default. |
| **Natural** / **Lab Grown** / **Both** | Choose which diamond type the option is offered for. See [Diamond Type Columns](#diamond-type-columns). |

## Diamond Cut Master

Controls which diamond cuts are offered for the center stone.

| Column | Description |
| ------ | ----------- |
| **Options** | Name of the option. |
| **Active** | Tick to make the option available in this configurator. |
| **Default** | Select the option that is pre-selected. Only one option per tab can be the default. |
| Stone columns | One column per active stone. Tick the stones the cut applies to. |
| **Natural** / **Lab Grown** / **Both** | Choose which diamond type the option is offered for. See [Diamond Type Columns](#diamond-type-columns). |
| **Sort Order** | Number that sets the display order of the option. |
