---
sidebar_position: 5
id: earring-configurator
title: Earring Configurator
sidebar_label: Earring Configurator
---

# Earring Configurator

The **Earring Configurator** settings control which options customers can choose for earrings on the website. Each step in the left sidebar covers one attribute, such as stone type, carat size, diamond shape or metal.

---

## Configurator Screen

The left sidebar lists the steps in order. Click a step to open it on the right. Each step shows a table of options, with an information note below the table.

| Action | Description |
| ------ | ----------- |
| **Step sidebar** | Click a numbered step to open its settings. |
| **Active** | Tick to offer an option; untick to hide it. Unticking clears the option's default, mappings and sort order. Inactive rows appear faded and their other fields are disabled. |
| **Default** | Select the option that is pre-selected. Only active options can be the default. |
| **Search and Filter** | Available on larger steps. See [Search and Filter](#search-and-filter). |
| **Save** | Saves the step that is currently open. |

:::tip Save each step
Changes are saved one step at a time. Click **Save** before moving to another step, otherwise the changes on the current step are discarded.
:::

Users without edit permission can view the settings, but the fields and the **Save** button are disabled.

### Configurator Steps

| Step | Name |
| ---- | ---- |
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
| 15 | [Back Master](#back-master) |
| 16 | [Push Master](#push-master) |
| 17 | [Head Image Upload](#head-image-upload) |
| 18 | [Side Setting Image Upload](#side-setting-image-upload) |

### Diamond Type Columns

Several steps have **Natural**, **Lab Grown** and **Both** columns. Tick one of them to choose which diamond type the option is offered for; tick it again to clear it. Only one can be ticked per row. A column is unavailable when the matching stone type is not active in **Stone Type Master** (**Both** requires natural and lab grown to be active).

### Mapping Columns

Some steps show one column for each active option of another step (for example, one column per active metal tone in **Metal Karat Master**). Only options that are active and saved in the related step appear as columns. Tick a column to link the two options.

### Search and Filter

The **Carat Master**, **Diamond Shape**, **Side Setting Master** and **Head Master** steps have a search and filter bar above the table.

| Field | Description |
| ----- | ----------- |
| **Search Table** | Type to show only options whose name contains the text. |
| **Filter by** | Select one or more options to show only those rows. Selected values appear under **Active Filters**; click the cross on a value to remove it, or **Clear All** to remove all. |

Search and filter values are remembered in your browser for each step.

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
| **Side Default** | Select the stone type that is pre-selected for side stones. |
| **Center stone** and **Side stone** | Tick the stone positions the stone type can be used for. |
| **Sort Order** | Number that sets the display order of the option. |

The stone types you activate here decide which of the **Natural**, **Lab Grown** and **Both** columns can be used in the other steps. A stone type that is still used by another step cannot be deactivated; the **Cannot Disable Stone Type** popup appears instead.

## Stone Master

Controls which stones are offered.

| Column | Description |
| ------ | ----------- |
| **Options** | Name of the option. |
| **Active** | Tick to make the option available in this configurator. |
| **Default** | Select the option that is pre-selected. Only one option per step can be the default. |

## Carat Master

Controls which carat sizes are offered.

| Column | Description |
| ------ | ----------- |
| **Options** | Name of the option. |
| **Active** | Tick to make the option available in this configurator. |
| **Default** | Select the option that is pre-selected. Only one option per step can be the default. |
| **Natural** / **Lab Grown** / **Both** | Choose which diamond type the option is offered for. See [Diamond Type Columns](#diamond-type-columns). |

This step has a search and filter bar (see [Search and Filter](#search-and-filter)); the filter here is **Filter by Carat Size**.

A carat size that is mapped in **Diamond Shape** or **Head Master** cannot be deactivated; the **Cannot Disable Carat** popup appears instead.

## Diamond Shape

Controls which diamond shapes are offered.

| Column | Description |
| ------ | ----------- |
| **Options** | Name of the option. |
| **Active** | Tick to make the option available in this configurator. |
| **Default** | Select the option that is pre-selected. Only one option per step can be the default. |
| **Natural** / **Lab Grown** / **Both** | Choose which diamond type the option is offered for. See [Diamond Type Columns](#diamond-type-columns). |
| Carat size columns | One column per active carat size from **Carat Master**. Tick the carat sizes offered for the shape. |
| **Sort Order** | Number that sets the display order of the option. |

This step has a search and filter bar (see [Search and Filter](#search-and-filter)); the filter here is **Filter by Diamond Shape**.

## Diamond Color and Clarity

Controls which diamond color and clarity combinations are offered for the center stone.

| Column | Description |
| ------ | ----------- |
| **Options** | Color and clarity combination, shown as color/clarity. |
| **Active** | Tick to make the option available in this configurator. |
| **Default** | Select the option that is pre-selected. Only one option per step can be the default. |
| **Natural** / **Lab Grown** / **Both** | Choose which diamond type the option is offered for. See [Diamond Type Columns](#diamond-type-columns). |

## Side Diamond Color and Clarity

Controls which diamond color and clarity combinations are offered for side stones.

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
| Stone columns | One column per active stone from **Stone Master**. Tick the stones the cut applies to. |
| **Natural** / **Lab Grown** / **Both** | Choose which diamond type the option is offered for. See [Diamond Type Columns](#diamond-type-columns). |
| **Sort Order** | Number that sets the display order of the option. |

## Side Stone Cuts

Controls which diamond cuts are offered for side stones.

| Column | Description |
| ------ | ----------- |
| **Options** | Name of the option. |
| **Active** | Tick to make the option available in this configurator. |
| **Default** | Select the option that is pre-selected. Only one option per step can be the default. |
| **Natural** / **Lab Grown** / **Both** | Choose which diamond type the option is offered for. See [Diamond Type Columns](#diamond-type-columns). |
| **Sort Order** | Number that sets the display order of the option. |

## Metal Master

Controls which metals are offered.

| Column | Description |
| ------ | ----------- |
| **Options** | Name of the option. |
| **Active** | Tick to make the option available in this configurator. |
| **Default** | Select the option that is pre-selected. Only one option per step can be the default. |

A metal that is mapped in **Side Setting Master** cannot be deactivated; the **Cannot Disable Metal Master** popup appears instead.

## Metal Tone Master

Controls which metal tones are offered.

| Column | Description |
| ------ | ----------- |
| **Options** | Name of the option. |
| **Active** | Tick to make the option available in this configurator. |
| **Default** | Select the option that is pre-selected. Only one option per step can be the default. |

A metal tone that is mapped in **Metal Karat Master** cannot be deactivated; the **Cannot Disable Metal Tone** popup appears instead.

## Metal Karat Master

Controls which karats are offered and which metal tones each karat supports.

| Column | Description |
| ------ | ----------- |
| **Options** | Name of the option. |
| **Active** | Tick to make the option available in this configurator. |
| **Default** | Select the option that is pre-selected. Only one option per step can be the default. |
| Metal tone columns | One column per active tone from **Metal Tone Master**. Tick the tones the karat is offered in. |
| **Sort Order** | Number that sets the display order of the option. |

## Side Setting Master

Controls which side settings are offered and how they map to other options.

| Column | Description |
| ------ | ----------- |
| **Options** | Name of the option. |
| **Active** | Tick to make the option available in this configurator. |
| **Default** | Select the option that is pre-selected. Only one option per step can be the default. |
| Metal columns | One column per active metal from **Metal Master**. Tick the metals the side setting is offered in. |
| **Sort Order** | Number that sets the display order of the option. |

Every active side setting must have at least one metal ticked. If one is missing, the message "Please select at least one Metal for this active Side Setting." appears under the row and the step is not saved.

This step has a search and filter bar (see [Search and Filter](#search-and-filter)); the filter here is **Filter by Side Setting**.

## Shank Master

Controls which shanks are offered and which side settings each shank supports.

| Column | Description |
| ------ | ----------- |
| **Options** | Name of the option. |
| **Active** | Tick to make the option available in this configurator. |
| **Default** | Select the option that is pre-selected. Only one option per step can be the default. |
| Side setting columns | One column per active side setting from **Side Setting Master**. Tick the side settings the shank supports. |
| **Sort Order** | Number that sets the display order of the option. |

## Head Master

Controls which heads are offered for each carat size and shape.

| Column | Description |
| ------ | ----------- |
| **Options** | Name of the option. |
| **Active** | Tick to make the option available in this configurator. |
| **Default** | Select the option that is pre-selected. Only one option per step can be the default. |
| Carat size columns | One column per active carat size from **Carat Master**. Tick the carat sizes the head is offered for. |
| Diamond shape columns | One column per active shape from **Diamond Shape**. Tick the shapes the head is offered for. |
| **Sort Order** | Number that sets the display order of the option. |

This step has a search and filter bar (see [Search and Filter](#search-and-filter)); the filter here is **Filter by Head**.

## Back Master

Controls which earring backs are offered.

| Column | Description |
| ------ | ----------- |
| **Options** | Name of the option. |
| **Active** | Tick to make the option available in this configurator. |
| **Default** | Select the option that is pre-selected. Only one option per step can be the default. |
| **Sort Order** | Number that sets the display order of the option. |

## Push Master

Controls which earring pushes are offered and which backs each push supports.

| Column | Description |
| ------ | ----------- |
| **Options** | Name of the option. |
| **Active** | Tick to make the option available in this configurator. |
| **Default** | Select the option that is pre-selected. Only one option per step can be the default. |
| Back columns | One column per active back from **Back Master**. Tick the backs the push supports. |
| **Sort Order** | Number that sets the display order of the option. |

## Head Image Upload

Lets you upload an image for each head, used only in the Earring Configurator. Each head has its own upload box, labelled with the head name and the recommended aspect ratio (300 x 300).

1. Drop or select an image in the box for the head.
2. To remove an existing image, use the remove option on the image.
3. Click **Save** to upload the changes.

## Side Setting Image Upload

Lets you upload an image for each side setting, used only in the Earring Configurator. Each side setting has its own upload box, labelled with the side setting name and the recommended aspect ratio (300 x 300).

1. Drop or select an image in the box for the side setting.
2. To remove an existing image, use the remove option on the image.
3. Click **Save** to upload the changes.
