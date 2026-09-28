---
sidebar_position: 7
id: hld-products
title: HLD Products
sidebar_label: HLD Products
---

# HLD Products

The **HLD Products** settings control which options customers can choose for HLD products on the website. Each step in the left sidebar covers one attribute, such as stone type, diamond color and clarity, or diamond cut.

---

## Configurator Screen

The left sidebar lists the steps in order. Click a step to open it on the right. Each step shows a table of options, with an information note below the table.

| Action | Description |
| ------ | ----------- |
| **Step sidebar** | Click a numbered step to open its settings. |
| **Active** | Tick to offer an option; untick to hide it. Unticking clears the option's default, mappings and sort order. Inactive rows appear faded and their other fields are disabled. |
| **Default** | Select the option that is pre-selected. Only active options can be the default. |
| **Save** | Saves the step that is currently open. |

:::tip Save each step
Changes are saved one step at a time. Click **Save** before moving to another step, otherwise the changes on the current step are discarded.
:::

Users without edit permission can view the settings, but the fields and the **Save** button are disabled.

### Configurator Steps

| Step | Name |
| ---- | ---- |
| 1 | [Stone Type Master](#stone-type-master) |
| 2 | [Diamond Color and Clarity](#diamond-color-and-clarity) |
| 3 | [Diamond Cut Master](#diamond-cut-master) |

### Diamond Type Columns

Several steps have **Natural**, **Lab Grown** and **Both** columns. Tick one of them to choose which diamond type the option is offered for; tick it again to clear it. Only one can be ticked per row. A column is unavailable when the matching stone type is not active in **Stone Type Master** (**Both** requires natural and lab grown to be active).

### Mapping Columns

**Diamond Cut Master** shows one column for each active stone. Tick a column to link the cut to that stone.

### Cannot Disable Popup

Some options cannot be deactivated while another step still uses them. When you untick **Active** for such an option, a popup explains where it is used and what to remove first. Click **OK**, remove the option from the step that uses it, save that step, and then deactivate the option.

---

## Stone Type Master

Controls which stone types are offered and which one is selected by default.

| Column | Description |
| ------ | ----------- |
| **Options** | Stone type name (for example, natural or lab grown). |
| **Active** | Tick to make the stone type available in this configurator. |
| **Center Default** | Select the stone type that is pre-selected for the center stone. |
| **Sort Order** | Number that sets the display order of the option. |

The stone types you activate here decide which of the **Natural**, **Lab Grown** and **Both** columns can be used in the other steps. A stone type that is still used by another step cannot be deactivated; the **Cannot Disable Stone Type** popup appears instead.

## Diamond Color and Clarity

Controls which diamond color and clarity combinations are offered for the center stone.

| Column | Description |
| ------ | ----------- |
| **Options** | Color and clarity combination, shown as color/clarity. |
| **Active** | Tick to make the option available in this configurator. |
| **Default** | Select the option that is pre-selected. Only one option per step can be the default. |
| **Natural** / **Lab Grown** / **Both** | Choose which diamond type the option is offered for. See [Diamond Type Columns](#diamond-type-columns). |

## Diamond Cut Master

Controls which diamond cuts are offered for the center stone.

| Column | Description |
| ------ | ----------- |
| **Options** | Name of the option. |
| **Active** | Tick to make the option available in this configurator. |
| **Default** | Select the option that is pre-selected. Only one option per step can be the default. |
| Stone columns | One column per active stone. Tick the stones the cut applies to. |
| **Natural** / **Lab Grown** / **Both** | Choose which diamond type the option is offered for. See [Diamond Type Columns](#diamond-type-columns). |
| **Sort Order** | Number that sets the display order of the option. |
