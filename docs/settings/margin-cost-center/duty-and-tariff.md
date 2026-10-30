---
sidebar_position: 4
id: duty-and-tariff
title: Duty and Tariff
sidebar_label: Duty and Tariff
---

# Duty and Tariff

The **Duty & Tariff Management** module lets you set up tariff rules, such as import duties or customs charges, that are added to product prices. Each rule has a percentage value and applies to the product types you choose.

---

## Duty & Tariff Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Use the search box to find tariff rules. The list updates about one second after you stop typing; clear the box to show all rules again. |
| **Filter** | Shows or hides a filter box under each column heading, to narrow the rows on the current page. |
| **Add Tariff Rule** | Click the **Add Tariff Rule** button to open the panel for a new rule. |
| **Edit** | Click the **Edit** icon to change an existing rule. |
| **Delete** | Click the **Delete** icon to remove a rule. Click **YES** in the **Are you Sure?** popup to delete it, or **NO** to cancel. The message "Tariff deleted successfully" appears. |
| **Status** | Use the toggle switch to activate or deactivate the rule. The system shows its own confirmation message. |

The list shows the following columns. It can be paged, and sorted by every column except **Product Type**.

| Column | Description |
| ------ | ----------- |
| **Rule Name** | Name of the tariff rule. |
| **Type** | Margin type used by the rule, for example **Percentage (%)**. |
| **Value** | Tariff value set on the rule, for example 5%. |
| **Product Type** | The product types the rule applies to, separated by commas. |
| **Status** | Toggle switch to activate or deactivate the rule. |

:::note Permissions
The **Add Tariff Rule** button is disabled if you do not have **Add** permission. The **Edit** icon and the status toggle need **Edit** permission, and the **Delete** icon needs **Delete** permission.
:::

---

### Steps to Add a New Tariff Rule

Click **Add Tariff Rule**. The **Add Tariff Rule** panel opens on the right (**Edit Tariff Rule** when editing). Fill in the fields and click **Add Tariff Rule** (**Save Tariff Rule** when editing). Click **Cancel** to close the panel without saving.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| Tariff Name | ✅ | Enter a name that identifies the rule in the list. Shows "Tariff Name is required" when empty. |
| Select Margin Type | ✅ | Choose **Percentage (%)**; this is the only option. Shows "Type is required" when empty. |
| Value | ✅ | Enter a value greater than 0, with up to 2 decimal places. |
| Product Type | ✅ | Select one or more product types: Ring Configurator, Three Stone Configurator, Eternity Band Configurator, Bracelet Configurator, Stud Configurator or Pendant Configurator. A type that is already selected is removed from the list. Shows "Product Type is required" when none is selected. |

The **Value** field shows these messages:

| Message | When it appears |
| ------- | --------------- |
| Value is required | The field is empty. |
| Value must be a number | The entry is not a number. |
| Please enter a value greater than 0 | The value is 0. |
| Only 2 decimal places allowed | The value has more than 2 decimal places, or is negative. |

When the save succeeds, the message "Tariff added successfully." or "Tariff updated successfully." appears and the list reloads.

:::note
A rule for several product types is saved as one rule. When you edit a rule, its product types are preselected in the **Product Type** box.
:::
