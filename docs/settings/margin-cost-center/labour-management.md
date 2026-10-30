---
sidebar_position: 8
id: labour-management
title: Labour Management
sidebar_label: Labour Management
---

# Labour Management

The **Labour Management** page sets how the labour (making) charge is worked out for each metal. For each metal you choose a charge logic, **Fixed** or **Per Gram**. For **Per Gram**, you enter the labour rate per gram: one rate for each gold karat, or one rate for a metal such as Silver or Platinum.

---

## Labour Management Screen

The page is a single screen, built from the steps below.

| Step | Description |
| ---- | ----------- |
| **Select Metal** | Click a metal button to work on that metal. The selected metal is highlighted. The page reopens on the metal you used last in the same browser session, otherwise on the first metal. |
| **Karat / Purity** | Shown for **Gold** only. Click a karat, for example 14K, to work on that karat. |
| **Charge Logic for &lt;Metal&gt;** | Choose **Fixed** or **Per Gram** for the selected metal. |
| **Assign Value** | Shown for **Per Gram**. Enter the labour rate and click **+ Add Rule**. |
| **Rule cards** | Show the saved rates for the selected metal. |

---

### Charge Logic

| Option | What it does |
| ------ | ------------ |
| **Fixed** | No value is entered on this page. A note explains that the labour is taken from the individual product details as a fixed calculation. |
| **Per Gram** | Shows the **Assign Value** box and the rule cards, so you can set a labour rate per gram. |

The choice is saved for the selected metal as soon as you click the button, provided the metal already has at least one saved rule. For a metal with no rule yet, the choice is only remembered on screen until you add a rule.

---

### Assign Value (Per Gram)

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Value** | ✅ | The labour rate per gram, shown with your store's currency symbol. A number greater than 0, with up to 2 decimal places. Shows "Value is required", "Only numbers allowed" or "Value must be greater than 0". |

| Button | Description |
| ------ | ----------- |
| **+ Add Rule** | Saves the rate for the selected metal (and karat, for Gold). The message "Labour charge added successfully" appears. |
| **Edit Rule** | Replaces **+ Add Rule** while you are editing a rule. The message "Labour charge updated successfully" appears. |
| **Cancel** | Clears the box and, when editing, leaves edit mode. |

:::note
A metal (or gold karat) can have only one **Per Gram** rule. When one is already saved, the **Value** box shows it, locked, and **+ Add Rule** is disabled. To change the rate, use the edit icon on the rule card; to remove it, use the delete icon.
:::

---

### Rule Cards

| Metal | Cards shown |
| ----- | ----------- |
| **Gold** | One card per karat, titled with the karat and the metal. The selected karat has a darker border. |
| **Silver / Platinum** | A single card for the metal. |

Each card shows the number of rules (**RULE**). When a rule exists, it also shows the rate (for example $12.50) with **Per Gram Rate** and **GRAM**, and two icons:

| Icon | Description |
| ---- | ----------- |
| **Edit** (pencil) | Loads the rule into the **Value** box so you can change it. While editing, the metal, karat and charge logic buttons are disabled. Click **Edit Rule** to save or **Cancel** to stop. |
| **Delete** (bin) | Click it, then **YES** in the **Are you Sure?** popup to remove the rule, or **NO** to keep it. The message "Labour charge deleted successfully" appears. |

A card with no rule shows **NO RULES CONFIGURED**.

:::note
This page does not check **Add**, **Edit** or **Delete** permission separately. Which metals and karats appear depends on your metal master, and **Gold** is recognised through the **Metal Gold Id** in [Front-End Setting](../front-end-setting.md#web-settings).
:::
