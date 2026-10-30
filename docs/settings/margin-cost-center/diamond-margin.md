---
sidebar_position: 2
id: diamond-margin
title: Diamond Margin
sidebar_label: Diamond Margin
---

# Diamond Margin

The **Diamond Margin Management** module lets you create margin rules for diamonds. A rule can apply to all diamonds of a stone type and origin, or only to diamonds that match specific attributes such as shape, color, clarity, cut or carat range.

---

## Diamond Margin Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Use the search box to find margin rules. The list updates about one second after you stop typing; clear the box to show all rules again. |
| **Filter** | Shows or hides a filter box under each column heading, to narrow the rows on the current page. |
| **Add Product Margin** | Click the **Add Product Margin** button to open the page for creating a new diamond margin rule. |
| **Edit** | Click the **Edit** icon to open an existing rule and change its details. |
| **Delete** | Click the **Delete** icon to remove a rule. Click **YES** in the **Are you Sure?** popup to delete it, or **NO** to cancel. |
| **Status** | Shows whether the rule is **Active** or **Inactive**. Use the toggle switch to activate or deactivate the rule. |

The list shows the following columns. It can be sorted and paged.

| Column | Description |
| ------ | ----------- |
| **Rule Name** | Name of the margin rule. |
| **Diamond Range** | How the rule is applied: to all items or to selected attributes. |
| **Stone Type** | Stone origin the rule applies to. |
| **Margin** | Margin value set on the rule. |
| **Status** | **Active** or **Inactive**, followed by the status toggle. |

:::note Permissions
The **Add Product Margin** button is disabled if you do not have **Add** permission. The **Edit** icon and the status toggle need **Edit** permission, and the **Delete** icon needs **Delete** permission.
:::

---

### Steps to Add a New Diamond Margin

Click **Add Product Margin**, fill in the sections below, and click **Save Rule**. Click **Cancel** or **Back** to return to the previous page without saving. When the save succeeds, a confirmation message appears and you return to the list.

#### Margin Information

| Field | Required | Remarks |
| ----- | -------- | ------- |
| Margin Name | ✅ | Enter a name that identifies the rule in the list. Shows "Margin name is required" when empty. |
| Margin Description | - | Optional description of the rule. |

#### Margin Configuration

| Field | Required | Remarks |
| ----- | -------- | ------- |
| Item Type | ✅ | New rules are always created for **Diamond Group Master**. **Loose Diamond** appears only when you open an older rule that was saved as a loose diamond rule. The option cannot be changed when editing an existing rule. |

#### Diamond Margin Management

| Field | Required | Remarks |
| ----- | -------- | ------- |
| Select Stone Type | ✅ | Choose the stone the rule applies to. The first stone in the list is selected for a new rule. Shows "Stone type is required" when empty. |
| Select Stone origin | - | Choose **labgrown**, **natural** or **both**. **labgrown** is selected by default. |
| Apply To | ✅ | Choose **All Items** to apply the rule to every matching diamond, or **Attribute** to limit it to selected attributes. **Attribute** is selected by default. |
| Apply Margin On | - | Shown when **Apply To** is **Attribute**. Tick **Shape**, **Color**, **Clarity**, **Cut** and/or **Carat Range**, or tick **All** to select every attribute at once. **All** is ticked automatically when you tick all five attributes one by one. |
| Select Shape | ✅ | Shown when **Shape** (or **All**) is ticked. Shows "Shape is required" when empty. |
| Select Color | ✅ | Shown when **Color** (or **All**) is ticked. Shows "Color is required" when empty. |
| Select Clarity | ✅ | Shown when **Clarity** (or **All**) is ticked. Shows "Clarity is required" when empty. |
| Select Cut | ✅ | Shown when **Cut** (or **All**) is ticked. Shows "Cut is required" when empty. |
| Min Carat Range | ✅ | Shown when **Carat Range** (or **All**) is ticked. Lower carat limit. Shows "Min Carat is required" when empty or "Min Carat must be a number". |
| Max Carat Range | ✅ | Shown when **Carat Range** (or **All**) is ticked. Upper carat limit; must be greater than **Min Carat Range** ("Max Carat must be greater than Min Carat"). Shows "Max Carat is required" when empty. |
| Select Pricing Type | ✅ | Choose **Margin**, **Markup** or **Multiplier**. **Markup** is selected by default. |
| Select Margin Type / Select Markup Type | ✅ | Shown for **Margin** and **Markup** pricing only. For **Margin**, choose **Percentage (%)**. For **Markup**, choose **Flat Amount** or **Percentage (%)**. **Percentage (%)** is selected by default. Not shown for **Multiplier**. |
| Value | ✅ | Enter the margin value. Shows "Value is required" when empty and "Value must be a number" when it is not a number. Negative values are not allowed ("Value cannot be negative"), and the minus key is blocked. When the pricing type is **Margin**, the value must be less than 100 ("Margin value must be less than 100"). A **%** sign is shown next to the field for percentage margins, and a **₹** sign otherwise. |

:::note Example
**Apply To:** Attribute, **Apply Margin On:** Shape and Carat Range, **Select Shape:** Round, **Min Carat Range:** 1, **Max Carat Range:** 2. The rule applies only to round diamonds between 1 and 2 carats.
:::

:::tip
- Each ticked attribute narrows the rule: a diamond must match every ticked attribute for the rule to apply. Unticked attributes are not checked.
- If you choose **Attribute** but tick nothing, no attribute limits are saved. After saving, the list shows such a rule as applying to all items. The same display can appear for a rule limited only by carat range.
- Choosing **All Items** ignores any attribute you had ticked; the attributes are not saved.
:::
