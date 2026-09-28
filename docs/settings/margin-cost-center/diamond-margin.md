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
| **Search** | Use the search box to find margin rules. The list updates as you type. |
| **Add Product Margin** | Click the **Add Product Margin** button to open the page for creating a new diamond margin rule. |
| **Edit** | Click the **Edit** icon to open an existing rule and change its details. |
| **Delete** | Click the **Delete** icon to remove a rule. Click **YES** in the confirmation popup to delete it, or **NO** to cancel. |
| **Status** | Shows whether the rule is **Active** or **Inactive**. Use the toggle switch to activate or deactivate the rule. |

The list shows the following columns:

| Column | Description |
| ------ | ----------- |
| **Rule Name** | Name of the margin rule. |
| **Diamond Range** | How the rule is applied (all items or selected attributes). |
| **Stone Type** | Stone origin the rule applies to. |
| **Margin** | Margin value set on the rule. |

---

### Steps to Add a New Diamond Margin

Click **Add Product Margin**, fill in the sections below, and click **Save Rule**. Click **Cancel** or **Back** to return to the list without saving.

#### Margin Information

| Field | Required | Remarks |
| ----- | -------- | ------- |
| Margin Name | ✅ | Enter a name that identifies the rule in the list. |
| Margin Description | - | Optional description of the rule. |

#### Margin Configuration

| Field | Required | Remarks |
| ----- | -------- | ------- |
| Item Type | ✅ | Choose **Loose Diamond** or **Diamond Group Master**. **Loose Diamond** is selected by default. This option cannot be changed when editing an existing rule. |

#### Diamond Margin Management

| Field | Required | Remarks |
| ----- | -------- | ------- |
| Select Stone Type | ✅ | Choose the stone the rule applies to. |
| Select Stone origin | - | Choose lab grown, natural or both. |
| Apply To | ✅ | Choose **All Items** to apply the rule to every matching diamond, or **Attribute** to limit it to selected attributes. |
| Apply Margin On | - | Shown when **Apply To** is **Attribute**. Tick **Shape**, **Color**, **Clarity**, **Cut** and/or **Carat Range**, or tick **All** to select every attribute at once. |
| Select Shape | ✅ | Shown when **Shape** is ticked. |
| Select Color | ✅ | Shown when **Color** is ticked. |
| Select Clarity | ✅ | Shown when **Clarity** is ticked. |
| Select Cut | ✅ | Shown when **Cut** is ticked. |
| Min Carat Range | ✅ | Shown when **Carat Range** is ticked. Lower carat limit. |
| Max Carat Range | ✅ | Shown when **Carat Range** is ticked. Upper carat limit; must be greater than **Min Carat Range**. |
| Select Pricing Type | ✅ | Choose **Margin**, **Markup** or **Multiplier**. |
| Select Margin Type / Select Markup Type | - | Shown for **Margin** and **Markup** pricing only. For **Margin**, choose **Percentage (%)**. For **Markup**, choose **Flat Amount** or **Percentage (%)**. |
| Value | ✅ | Enter the margin value. Negative values are not allowed. When the pricing type is **Margin**, the value must be less than 100. A **%** sign is shown next to the field for percentage margins. |

:::note Example
**Apply To:** Attribute, **Apply Margin On:** Shape and Carat Range, **Select Shape:** Round, **Min Carat Range:** 1, **Max Carat Range:** 2. The rule applies only to round diamonds between 1 and 2 carats.
:::
