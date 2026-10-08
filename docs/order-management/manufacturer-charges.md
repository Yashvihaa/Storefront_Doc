---
sidebar_position: 2
id: manufacturer-charges
title: Manufacturer Charges
sidebar_label: Manufacturer Charges
---

# Manufacturer Charges

The **Manufacturer Charges Master** lets you define a charge template for each manufacturer, covering fabrication, setting and finishing costs. Each template is one manufacturer, and the template name is the manufacturer's name.

---

## Manufacturer Charges Screen List

Each template appears as a tab at the top of the card. Select a tab to see and edit that template's charges. Inactive templates are shown faded, and a dot on a tab means it has unsaved changes.

| Action | Description |
| ------ | ----------- |
| **Add Template** | Click the **+** button at the end of the tabs to create a new template. It is named **New Template** followed by a number and opens straight away. |
| **Rename Template** | Hover over a tab and click the **pencil** icon. Type the new name and press **Enter**, or click outside the field. Press **Esc** to cancel. |
| **Delete Template** | Click the **×** on a tab. For a saved template, confirm with **YES** to delete it (click **NO** to cancel). A new template that has not been saved yet is removed straight away. |
| **Search** | Type in **Search charge types...** to filter the charges in the selected template by charge type or unit. |
| **Status Toggle** | The **Active** / **Inactive** switch next to the search box activates or deactivates the selected template. It takes effect immediately. It is disabled for a new template until you save it. |
| **Add Charge** | Click **Add Charge** to add a new charge row to the selected template. |
| **Edit Charge** | Change a row's charge type, amount or unit directly in the table. |
| **Delete Charge** | Click the **trash** icon on a row to remove that charge. |
| **Save Configuration** | Click **Save Configuration** at the top of the page to save the changes in every template you have edited. |

The number of charge types configured in the selected template is shown next to the search box. If there are no templates yet, the card shows "No manufacturers yet. Click "+" to add a template."

:::note
Adding, renaming and editing templates and charge rows are kept on the page until you click **Save Configuration**. Deleting a saved template and changing a template's status are saved immediately.
:::

---

### Steps to Add a New Charge

1. Select the manufacturer's template tab, or click **+** to create one.
2. Click **Add Charge**. A new row is added using the next charge type not already in the template, an amount of 0 and the unit **%**.
3. Fill in the row:

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **CHARGES FOR** | ✅ | Select the charge type: **Making Charges**, **Setting Charges**, **Polish Charges**, **Certification**, **Packaging**, **Transport**, **Labour**, **CAD Charges**, **Casting Charges**, **Rhodium**, **Hallmark**, **Wastage** or **Overheads**. |
| **CHARGES** | ✅ | Enter the charge amount. Numbers and decimals only; an empty field counts as 0. |
| **UNIT** | ✅ | Select how the charge is applied: **%**, **Per Gram**, **Per Piece / Stone / item**, **Fixed Amount** or **Per Carat**. |

4. Click **Save Configuration**.

---

### Save Rules

When you click **Save Configuration**, each edited template is checked first. If a check fails, an error message appears and the template with the problem is selected.

- The template name cannot be empty.
- Each template needs at least one charge.
- Charges must be 0 or more.
- The same charge type with the same unit cannot appear twice in one template.
- Two templates cannot have the same name.

If nothing has changed, the message "No changes to save" appears.

---

### Total Charges Summary

Below the table, the **Total Charges Summary** adds up the charges in the selected template by unit:

| Card | Description |
| ---- | ----------- |
| **Total Percentage** | Sum of all charges set to **%**. |
| **Total Per Gram** | Sum of all charges set to **Per Gram**, shown per gram. |
| **Total Fixed Amount** | Sum of all charges set to **Fixed Amount**. |

:::note
Deleting a charge row does not ask for confirmation. The row is only removed for good when you click **Save Configuration**.
:::
