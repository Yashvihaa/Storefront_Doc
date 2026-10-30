---
sidebar_position: 1
id: product-margin
title: Product Margin
sidebar_label: Product Margin
---

# Product Margin

The **Product Margin Management** module lets you create margin rules for products. Each rule sets how the selling price is built on top of the product cost for a chosen product type. A rule always applies to every product of the product type you choose.

---

## Product Margin Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Use the search box to find margin rules. The list updates about one second after you stop typing; clear the box to show all rules again. |
| **Filter** | Shows or hides a filter box under each column heading, to narrow the rows on the current page. |
| **Add Product Margin** | Click the **Add Product Margin** button to open the page for creating a new margin rule. |
| **Edit** | Click the **Edit** icon to open an existing rule and change its details. |
| **Delete** | Click the **Delete** icon to remove a rule. Click **YES** in the **Are you Sure?** popup to delete it, or **NO** to cancel. The message "Product Margin deleted successfully" appears. |
| **Status** | Shows whether the rule is **Active** or **Inactive**. Use the toggle switch to activate or deactivate the rule. The system shows its own confirmation message. |

The list shows the following columns. It can be sorted and paged.

| Column | Description |
| ------ | ----------- |
| **Product Margin Title** | Name of the margin rule. |
| **Product Type** | Product type the rule applies to. |
| **Margin Apply** | How the rule is applied. New rules always apply to all products of the product type. |
| **Margin Type** | Type of margin calculation used by the rule. |
| **Margin Value** | Margin value set on the rule. |
| **Status** | **Active** or **Inactive**, followed by the status toggle. |

:::note Permissions
The **Add Product Margin** button is disabled if you do not have **Add** permission. The **Edit** icon and the status toggle need **Edit** permission, and the **Delete** icon needs **Delete** permission.
:::

---

### Steps to Add a New Product Margin

Click **Add Product Margin**, fill in the fields below, and click **Save**. When editing an existing rule, the button reads **Edit**. Use the **Back** button to return to the list without saving.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| Rule Title | ✅ | Enter a name that identifies the rule in the list. Shows "Rule Title is required" when empty. |
| Select Product Type | ✅ | Choose the product type the rule applies to: Ring Configurator, Three stone configurator, Eternity band configurator, Bracelet configurator, Birthstone configurator, Stud configurator or Pendant configurator. **Ring Configurator** is selected by default. The rule applies to all products of the selected type. |
| Description | ✅ | Enter a short description of the rule. Shows "Description is required" when empty. |
| Select Pricing Type | ✅ | Choose **Margin**, **Markup** or **Multiplier**. **Markup** is selected by default. |
| Select Margin Type / Select Markup Type | ✅ | Shown for **Margin** and **Markup** pricing only. For **Margin**, choose **Percentage (%)**. For **Markup**, choose **Flat Amount** or **Percentage (%)**; **Flat Amount** is selected by default. Not shown for **Multiplier**. Shows "Margin Type is required" when empty. Changing the pricing type clears a margin type that is no longer allowed. |
| Margin Value | ✅ | Enter the margin value. Shows "Margin Value is required" when empty. When the pricing type is **Margin**, the value must be less than 100 ("Margin value must be less than 100"). |

When the save succeeds, the message "Product margin added successfully." or "Product margin updated successfully." appears and you return to the list.
