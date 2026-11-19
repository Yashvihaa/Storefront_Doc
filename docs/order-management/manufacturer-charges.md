---
sidebar_position: 2
id: manufacturer-charges
title: Manufacturer Charges
sidebar_label: Manufacturer Charges
---

# Manufacturer Charges

## Overview

The **Manufacturer Charges** page is where you set up the manufacturers you work with. Each template is one manufacturer: the template name is the manufacturer's name, and it holds the manufacturer's email addresses and its charges for fabrication, setting and finishing, plus the duty, tariff and shipping applied to the order subtotal.

Your active templates are the manufacturer columns in the **Manufacturing Option Comparison** on every order in [Orders](./orders.md). Their charges price those columns, and their email addresses receive the product when you click **Order Now**.

:::note[TCC Tech's own templates]
When TCC Tech sets up templates on this page for its own company, those manufacturers become the **BENCHMARK** columns that every client sees on their orders. Orders and price requests sent to them appear for TCC Tech on the [Enquiry](../enquiry.md) page. A client's own templates are never shared with other clients.
:::

---

## Data Displayed

### Manufacturer Charges Screen List

Each template appears as a tab at the top of the card, with the number of charges in it shown on the tab. Select a tab to see and edit that template's charges. Inactive templates are shown faded.

| Action | Description |
| ------ | ----------- |
| **Add template** (**+**) | Click the **+** button at the end of the tabs. A new template named **Manufacturer** followed by a number opens straight away with one charge row already added. When the page has no manufacturers at all, a ready-to-fill first template opens automatically. |
| **Rename template** | Hover over a tab and click the **pencil** icon. Type the new name and press **Enter** or click outside the field. Press **Esc** to cancel. |
| **Remove template** | Hover over a tab and click the **×**. For a saved template, a confirmation popup (**Are you Sure?**) appears: click **YES** to delete it or **NO** to cancel. A new template that has not been saved yet is removed straight away. |
| **Search charge types** | Filters the charges in the selected template by charge type or unit. |
| **Manufacturer emails** | The manufacturer's email addresses, separated by commas. The info icon beside the box explains: *Enter the manufacturer's own email address, not yours. To add more than one, separate them with commas.* |
| **Active / Inactive** | Turns the selected template on or off. It takes effect immediately. It is disabled, with the tooltip **Save this template first**, until the template has been saved. |
| **Add Charge** | Adds a new charge row to the selected template. |
| **Remove charge** (trash icon) | Removes that charge row. |
| **Save Configuration** | Saves the changes in every template you have edited. A spinner shows while saving and a tick appears briefly when it is done. The button stays pinned at the top of the screen when you scroll down. |

The number of charge types in the selected template is shown next to the status switch, for example *3 charge types configured*.

### Template Fields

| Field | Required | Type | Remarks | Example |
| ----- | -------- | ---- | ------- | ------- |
| Template name | ✅ | Text | The manufacturer's name, shown as the tab and as the column name on orders. Must be unique (not case sensitive). | *Shree Jewels* |
| **Manufacturer emails** | ✅ for a new template | Text | One or more addresses, separated by commas, up to 20. The placeholder ends with **\*** while the template is new. | *orders@shreejewels.com, cad@shreejewels.com* |
| Charges | ✅ | Rows | At least one charge. See below. | - |

### Charge Table

| Column | Required | Remarks |
| ------ | -------- | ------- |
| **CHARGES FOR** | ✅ | The charge type. See [Charge Types](#charge-types). |
| **CHARGES** | ✅ | The amount. Digits and one decimal point only. An empty box counts as 0. The box shows the unit next to the number (for example `%`, `$`, `$ /pc`, `$ /g`, `$ /ct`). A percentage cannot be typed above 100. |
| **UNIT** | ✅ | How the charge is applied: **Percentage (%)**, **Per gram**, **Per piece / stone**, **Fixed amount** or **Per carat**. |
| **ACTION** | - | The **trash** icon removes the row. |

If the template has no charges, the table shows **No charges yet** (*This template has no charges configured. Add your first charge to start building its cost rules.*) with an **Add Charge** button. If a search finds nothing, it shows **No matching charges** (*No charges match your search. Try a different charge type or unit.*).

### Charge Types

| Charge type | Allowed units | Where it appears on the order comparison |
| ----------- | ------------- | ---------------------------------------- |
| **Making Charges** | All | **Labour** |
| **Labour** | All | **Labour** |
| **Setting Charges** | All | **Setting Charges** |
| **Polishing**, **Certification**, **Packaging**, **Transport**, **Casting Charges**, **Rhodium**, **Hallmark**, **Metal Loss**, **Overheads** | All | **Other Charges** |
| **CAD Charges** | All | Not used. The CAD price on orders is TCC Tech's. |
| **Duty** | **Percentage (%)** only | **Tax**, on the subtotal |
| **Tariff** | **Percentage (%)** only | **Tariff**, on the subtotal |
| **Shipping** | **Fixed amount** or **Percentage (%)** | **Shipping**, on the subtotal |

### Total Charges Summary

Below the table, the **Total Charges Summary** adds up the charges in the selected template. The cards update as you edit, before saving.

| Card | Description | Example |
| ---- | ----------- | ------- |
| **Total Percentage** | Sum of all charges set to **Percentage (%)**, with the number of percentage charges. | **18%** / *3 Percentage charges applied* |
| **Total Per Piece / Stone / Item** | Sum of all charges set to **Per piece / stone**. | **$25.00** / *1 Per-piece charges applied* |
| **Total Fixed Amount** | Sum of all charges set to **Fixed amount**. | **$40.00** / *2 Fixed charges applied* |
| **Duty** | The duty charge, with *Applied on the order subtotal*. Shows **0%** and *No duty charge added* if there is none. | **5%** |
| **Tariff** | The tariff charge. Shows **0%** and *No tariff charge added* if there is none. | **10%** |
| **Shipping** | The shipping charge. Shows **$0.00** and *No shipping charge added* if there is none. | **$35.00** |

:::note
**Duty**, **Tariff** and **Shipping** are not counted in the three unit totals because they are charged on the order subtotal. **Per gram** and **Per carat** charges are saved with the template but do not have a summary card.
:::

---

## How It Works

### Steps to Add a Manufacturer Template

1. Click the **+** button at the end of the tabs.
2. Rename the template to the manufacturer's name (hover the tab and click the pencil).
3. Enter the manufacturer's email address(es) in the email box.
4. Set up the charges (see below).
5. Click **Save Configuration**.

New templates are saved together in a single save. Once saved, the **Active** / **Inactive** switch becomes available. A new template is active.

### Steps to Add a New Charge

1. Select the manufacturer's template tab.
2. Click **Add Charge**. A new row is added using the first charge type not already in the template, an empty amount and the unit **Percentage (%)**. Any search text is cleared so the new row is visible. When every charge type already has a row, nothing is added.
3. Choose the charge type, type the amount and choose the unit.
4. Click **Save Configuration**.

When you change the charge type to **Duty**, **Tariff** or **Shipping** and the current unit is not allowed for it, the unit switches to the first allowed one.

### How Charges Are Applied on an Order

Each charge in a template is worked out for one piece of the product, then added to its line in the comparison:

| Unit | How it is calculated |
| ---- | -------------------- |
| **Percentage (%)** | A percentage of the metal and diamond prices. |
| **Fixed amount** | The amount as it is. |
| **Per piece / stone** | The amount once per piece of jewellery. |
| **Per gram** | The amount times the metal weight. |
| **Per carat** | The amount times the diamond carat weight. |

**Duty** and **Tariff** are a percentage of the subtotal. **Shipping** is a percentage of the subtotal, or its fixed amount. The **Landed Cost** is the subtotal plus duty (shown as **Tax**), tariff and shipping. A charge that needs a value the order does not have, for example a per-gram charge on a product with no metal weight, shows no amount.

### Save Rules

When you click **Save Configuration**, each edited template is checked first. If a check fails, an error message appears and the template with the problem is selected. Nothing is saved until every edited template passes.

| Rule | Message |
| ---- | ------- |
| A new template needs at least one email | *Enter the manufacturer's email address* (under the email box) |
| Every email must be valid | *"…" is not a valid manufacturer email. Use the form name@company.com* (under the email box) |
| The manufacturer name cannot be empty | **Manufacturer name is required** |
| Each template needs at least one charge | **Add at least one charge to "…"** |
| Charges must be 0 or more | **Charges in "…" must be 0 or more** |
| A percentage must be above 0 and at most 100 | **… percentage in "…" must be more than 0 and at most 100** |
| **Duty**, **Tariff** and **Shipping** can appear only once each | **"…" can have only one … charge** |
| The same charge type with the same unit cannot appear twice | **"…" has … (…) more than once** |
| Two templates cannot have the same name (not case sensitive) | **"…" is used by more than one template** |

If nothing has changed, the message **No changes to save** appears. After a successful save you see **Manufacturers updated successfully** (for edited templates) and/or **Manufacturers added successfully** (for new ones). Deleting a template shows **Manufacturer deleted successfully**, and changing the status shows **Manufacturer status updated successfully**.

When a saved template is edited, a charge you removed is deleted, a charge with a type and unit the template already had is updated, and a new type and unit pair is added.

:::note
Adding, renaming and editing templates, emails and charge rows are kept on the page until you click **Save Configuration**. Deleting a saved template and changing a template's status are saved immediately.
:::

### Loading and Empty States

| State | What you see |
| ----- | ------------ |
| Loading | Grey placeholder rows in the card. |
| No templates (after you remove the first one) | *No manufacturers yet. Click "+" to add a template.* |
| No charges in a template | **No charges yet** with an **Add Charge** button |
| Search finds nothing | **No matching charges** |

---

## Dependencies and Impact

### Modules It Depends On

None. Templates are entered by hand on this page.

### Modules That Depend On It

| Module | How it uses Manufacturer Charges |
| ------ | -------------------------------- |
| [Orders](./orders.md) | Each active template is a manufacturer column in the **Manufacturing Option Comparison**. Its charges fill the **Labour**, **Setting Charges**, **Other Charges**, **Tax**, **Tariff** and **Shipping** lines. **Order Now** emails the product to the template's email addresses. |
| [Enquiry](../enquiry.md) | TCC Tech's own templates decide which manufacturers count as TCC Tech's. Their email addresses receive manufacturer orders and price requests, which then appear on Enquiry. |
| Product Details Worksheet | The **Manufacturing Comparison** page of a worksheet downloaded with prices shows the same columns. |

### What Changes If…

| Change | Effect |
| ------ | ------ |
| You add a template | A new column appears on every order whose products have not been sent with **Order Now** yet. |
| You set a template **Inactive** or delete it | Its column disappears from those orders, and you can no longer order from it. Products already sent with **Order Now** keep the column as it was. |
| You change a charge | The comparison on orders not yet sent with **Order Now** changes at once. Orders already sent keep the figures they were sent with. |
| You change a manufacturer's emails | The next **Order Now** to that manufacturer goes to the new addresses. |
| You rename a template | The column name on orders changes. A client template with the same name as a TCC Tech manufacturer replaces that **BENCHMARK** column on your orders. |
| TCC Tech changes its own templates | The **BENCHMARK** columns change for every client, on orders not yet sent with **Order Now**. |

---

## Edge Cases / Notes

- **Duty shows as Tax on orders.** The charge called **Duty** here is the **Tax** line in the order comparison.
- **CAD Charges are not used.** A **CAD Charges** row is saved but never priced. The **CAD** column on orders always shows TCC Tech's CAD price.
- **Per piece / stone means per piece of jewellery.** The charge is added once per piece of the product, not once per stone.
- **A new row is not valid as it is.** **Add Charge** adds a percentage row with no amount, and a percentage must be above 0. Type an amount, or change the unit, before saving.
- **Emails are needed to order.** A saved template can have its emails cleared, but **Order Now** to it then fails with *No valid email address is configured for the selected provider.*
- **Deleting a row does not ask for confirmation.** The row is only removed for good when you click **Save Configuration**. Deleting a whole saved template does ask, and takes effect at once.
- **Unsaved changes are lost** if you leave the page without clicking **Save Configuration**.
