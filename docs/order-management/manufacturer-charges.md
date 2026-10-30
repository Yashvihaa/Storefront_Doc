---
sidebar_position: 2
id: manufacturer-charges
title: Manufacturer Charges
sidebar_label: Manufacturer Charges
---

# Manufacturer Charges

The **Manufacturer Charges** page (*Define templates for customized fabrication, setting, and finishing cost rules*) lets you define a charge template for each manufacturer, covering fabrication, setting and finishing costs, plus the tax, tariff and shipping applied to the order subtotal. Each template is one manufacturer, and the template name is the manufacturer's name. These manufacturers are the ones compared on an order in [Orders](./orders.md).

---

## Manufacturer Charges Screen List

Each template appears as a tab at the top of the card, with the number of charges in it shown on the tab. Select a tab to see and edit that template's charges. Inactive templates are shown faded.

| Action | Description |
| ------ | ----------- |
| **Add Template** | Click the **+** button at the end of the tabs. A new template named **Manufacturer** followed by a number opens straight away with one charge row already added. When the page has no manufacturers at all, a ready-to-fill first template opens automatically. |
| **Rename Template** | Hover over a tab and click the **pencil** icon (**Rename template**). Type the new name and press **Enter** or click outside the field. Press **Esc** to cancel. |
| **Delete Template** | Hover over a tab and click the **×**. For a saved template, a confirmation popup (**Are you Sure?**) appears: click **YES** to delete it or **NO** to cancel. A new template that has not been saved yet is removed straight away. |
| **Search** | Type in **Search charge types** to filter the charges in the selected template by charge type or unit. |
| **Manufacturer emails** | Enter one or more email addresses for the manufacturer in the email box, separated by commas. |
| **Status Toggle** | The **Active** / **Inactive** switch next to the search box turns the selected template on or off. It takes effect immediately. It is disabled, with the tooltip **Save this template first**, until the template has been saved. |
| **Add Charge** | Click **Add Charge** to add a new charge row to the selected template. |
| **Edit Charge** | Change a row's charge type, amount or unit directly in the table. |
| **Delete Charge** | Click the **trash** icon (**Remove charge**) on a row to remove that charge. |
| **Save Configuration** | Click **Save Configuration** at the top right of the page to save the changes in every template you have edited. A spinner shows while saving and a tick appears briefly when it is done. |

The number of charge types in the selected template is shown next to the status switch (for example *3 charge types configured*). If there are no templates, the card shows *No manufacturers yet. Click "+" to add a template.*

:::note
Adding, renaming and editing templates, emails and charge rows are kept on the page until you click **Save Configuration**. Deleting a saved template and changing a template's status are saved immediately.
:::

---

### Steps to Add a Manufacturer Template

1. Click the **+** button at the end of the tabs.
2. Rename the template to the manufacturer's name (hover the tab and click the pencil).
3. Enter the manufacturer's email address(es) in the email box.
4. Set up the charges (see below).
5. Click **Save Configuration**.

New templates are saved together in a single save. Once saved, the switch **Active** / **Inactive** becomes available.

---

### Steps to Add a New Charge

1. Select the manufacturer's template tab.
2. Click **Add Charge**. A new row is added using the first charge type not already in the template, an amount of 0 and the unit **Percentage (%)**. Any search text is cleared so the new row is visible.
3. Fill in the row:

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **CHARGES FOR** | ✅ | Charge type: **Making Charges**, **Setting Charges**, **Polishing**, **Certification**, **Packaging**, **Transport**, **Labour**, **CAD Charges**, **Casting Charges**, **Rhodium**, **Hallmark**, **Wastage**, **Overheads**, **Tax**, **Tariff** or **Shipping**. |
| **CHARGES** | ✅ | The charge amount. Digits and one decimal point only; an empty field counts as 0. The box shows the unit symbol next to the number (for example `%`, `$`, `$ /pc`, `$ /g`, `$ /ct`). |
| **UNIT** | ✅ | How the charge is applied: **Percentage (%)**, **Per gram**, **Per piece / stone**, **Fixed amount** or **Per carat**. |
| **ACTION** | - | The **trash** icon removes the row. |

4. Click **Save Configuration**.

:::note
**Tax** and **Tariff** can only use **Percentage (%)**, and **Shipping** can only use **Fixed amount** or **Percentage (%)**. If you change the charge type to one of these and the current unit is not allowed, the unit switches automatically to the first allowed one.
:::

---

### Save Rules

When you click **Save Configuration**, each edited template is checked first. If a check fails, an error message appears and the template with the problem is selected. Nothing is saved until every edited template passes.

| Rule | Message |
| ---- | ------- |
| Manufacturer name cannot be empty | **Manufacturer name is required** |
| A new template needs at least one email | **At least one email is required** (shown under the email box) |
| Every email must be valid | **"…" is not a valid email** (shown under the email box) |
| Each template needs at least one charge | **Add at least one charge to "…"** |
| Charges must be 0 or more | **Charges in "…" must be 0 or more** |
| **Tax**, **Tariff** and **Shipping** can appear only once each in a template | **"…" can have only one … charge** |
| The same charge type with the same unit cannot appear twice | **"…" has … (…) more than once** |
| Two templates cannot have the same name (not case sensitive) | **"…" is used by more than one template** |

If nothing has changed, the message **No changes to save** appears. After a successful save you see **Manufacturers updated successfully** (for edited templates) and/or **Manufacturers added successfully** (for new ones). Deleting a template shows **Manufacturer deleted successfully**, and changing the status shows **Manufacturer status updated successfully**.

---

### Charge Table

| Column | Description |
| ------ | ----------- |
| **CHARGES FOR** | The charge type |
| **CHARGES** | The amount |
| **UNIT** | How the amount is applied |
| **ACTION** | Remove the row |

If the template has no charges, the table shows **No charges yet** and an **Add Charge** button. If a search finds nothing, it shows **No matching charges**.

---

### Total Charges Summary

Below the table, the **Total Charges Summary** adds up the charges in the selected template. Cards update as you edit, before saving.

| Card | Description |
| ---- | ----------- |
| **Total Percentage** | Sum of all charges set to **Percentage (%)**, with the number of percentage charges applied. |
| **Total Per Piece / Stone / Item** | Sum of all charges set to **Per piece / stone**, shown per piece (`/pc`). |
| **Total Fixed Amount** | Sum of all charges set to **Fixed amount**. |
| **Tax** | The tax charge, applied on the order subtotal. Shows `0%` and *No tax charge added* if there is none. |
| **Tariff** | The tariff charge, applied on the order subtotal. Shows `0%` and *No tariff charge added* if there is none. |
| **Shipping** | The shipping charge, applied on the order subtotal. Shows `$ 0.00` and *No shipping charge added* if there is none. |

:::note
**Tax**, **Tariff** and **Shipping** are not counted in the three unit totals because they are charged on the order subtotal. **Per gram** and **Per carat** charges are saved with the template but do not have a summary card.
:::

:::tip
Deleting a charge row does not ask for confirmation. The row is only removed for good when you click **Save Configuration**.
:::
