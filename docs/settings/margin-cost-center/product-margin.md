---
sidebar_position: 1
id: product-margin
title: Product Margin
sidebar_label: Product Margin
---

# Product Margin

The **Product Margin Management** module lets you create margin rules for products. Each rule sets how the selling price is built on top of the product cost for a chosen product type.

---

## Product Margin Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Use the search box to find margin rules. The list updates as you type. |
| **Add Product Margin** | Click the **Add Product Margin** button to open the page for creating a new margin rule. |
| **Edit** | Click the **Edit** icon to open an existing rule and change its details. |
| **Delete** | Click the **Delete** icon to remove a rule. Click **YES** in the confirmation popup to delete it, or **NO** to cancel. |
| **Status** | Shows whether the rule is **Active** or **Inactive**. Use the toggle switch to activate or deactivate the rule. |

The list shows the following columns:

| Column | Description |
| ------ | ----------- |
| **Product Margin Title** | Name of the margin rule. |
| **Product Type** | Product type the rule applies to. |
| **Margin Apply** | How the rule is applied (for example, to all items or to selected products). |
| **Margin Type** | Type of margin calculation used by the rule. |
| **Margin Value** | Margin value set on the rule. |

:::note Permissions
The **Add Product Margin** button is disabled if you do not have **Add** permission. The **Edit** icon and the status toggle need **Edit** permission, and the **Delete** icon needs **Delete** permission.
:::

---

### Steps to Add a New Product Margin

Click **Add Product Margin**, fill in the fields below, and click **Save**. When editing an existing rule, the button reads **Edit**. Use the **Back** button to return to the list without saving.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| Rule Title | ✅ | Enter a name that identifies the rule in the list. |
| Select Product Type | ✅ | Choose the product type the rule applies to: Dynamic single product, Variant single product, Ring Configurator, Three stone configurator, Eternity band configurator, Bracelet configurator, Birthstone configurator, Stud configurator or Pendant configurator. |
| Description | ✅ | Enter a short description of the rule. |
| Select Pricing Type | ✅ | Choose **Margin**, **Markup** or **Multiplier**. **Markup** is selected by default. |
| Select Margin Type / Select Markup Type | ✅ | Shown for **Margin** and **Markup** pricing only. For **Margin**, choose **Percentage (%)**. For **Markup**, choose **Flat Amount** or **Percentage (%)**; **Flat Amount** is selected by default. Not shown for **Multiplier**. |
| Margin Value | ✅ | Enter the margin value. When the pricing type is **Margin**, the value must be less than 100. |
| Margin Apply Type | ✅ | Shown only for **Dynamic single product** and **Variant single product**. Choose **All**, **Products**, **Category**, **Collection** or **Brand**. Other product types always apply the rule to all items. |
| Select Products | ✅ | Shown when **Margin Apply Type** is **Products**. Select one or more products by SKU. |
| Select Categories | ✅ | Shown when **Margin Apply Type** is **Category**. Select one or more categories. |
| Select Collections | ✅ | Shown when **Margin Apply Type** is **Collection**. Select one or more collections. |
| Select Brands | ✅ | Shown when **Margin Apply Type** is **Brand**. Select one or more brands. |
| Min Range | - | Shown for **Category**, **Collection** and **Brand**. Optional lower limit of the price range the rule applies to. |
| Max Range | - | Shown for **Category**, **Collection** and **Brand**. Optional upper limit of the price range the rule applies to. |

:::note
When you select **Dynamic single product** or **Variant single product**, **Margin Apply Type** switches to **Products** automatically. Changing the product type clears any products already selected.
:::
