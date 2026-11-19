---
sidebar_position: 1
id: metals
title: Metals
sidebar_label: Metals
---

# Metals

## Overview

**Metal Master** lists the metals, such as Gold, Silver and Platinum. Every metal tone and karat belongs to one of these metals, and metal rates, margins and labour charges are set per metal on other pages.

You cannot add, edit or delete metals here. You can only view and search them, switch them on or off, and write the info text shown to shoppers.

:::note[One list for every store]
Metals are shared by every store on the Storefront platform. When a metal is switched on or off, every store sees the change straight away.
:::

:::note[Who can use it]
The page opens for users whose role gives access to it (see [Roles](../../../roles-permission/roles.md)). The on/off switch needs **Edit** permission. Only a TCC Tech **Super Admin** can save the **Info** text.
:::

---

## Data Displayed

### Metal Master Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Type part of a metal name. The list refreshes about one second after you stop typing and goes back to page 1. Clear the box to show every metal again. |
| **Filter** | Shows or hides a filter box under each column heading, so you can narrow the rows on the current page by typing in a column. |
| **Info** | Opens the **Metal Info** drawer. See [Info Text](#info-text). |
| **On/off switch** | In the second **Status** column (tooltip *Enable/Disable*). Switches the metal between **Active** and **Inactive** at once. See [Switching a Metal On or Off](#switching-a-metal-on-or-off). |
| **View Documentation** | Opens this page. |

There is no **Add** button and no **Action** column.

### Metal Master List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Metal Name** | Text | The metal name. | *Gold* |
| **Slug** | Text | Made from the name. | *gold* |
| **Status** | Badge | **Active** or **Inactive**. | **Active** |
| **Status** | Switch | The on/off switch. | - |

### Statuses

| Status | Badge | Meaning |
| ------ | ----- | ------- |
| **Active** | Green | The metal is offered in the lists that use it and can be named in product sheets. |
| **Inactive** | Red | The metal stays in this list and on records that already use it, but it is no longer offered for new choices. |

---

## How It Works

### Switching a Metal On or Off

Click the switch in the second **Status** column. The change is saved at once, without a confirmation box. The message **Record updated successfully** appears and the badge changes. A metal can be switched off even while it is in use.

### Info Text

**Info** opens the **Metal Info** drawer with a **Title** box and a **Description** editor. The drawer loads the saved text, or opens empty if nothing has been saved yet.

1. Enter the **Title** and the **Description**. Both are required (**This Field is required**).
2. Click **Submit** to save, or **Cancel** to close.

Without **Edit** permission the fields and **Submit** are disabled. Only a TCC Tech **Super Admin** can save the text; for anyone else the save is refused and a red message is shown.

Once a text is saved, the storefront configurator pages show an info icon next to the metal option. Clicking it opens the title and description.

### Search, Filters, Sorting and Paging

- **Search** looks through every metal by name and slug, not just the current page.
- The **Filter** boxes only narrow the rows already on the current page.
- Click the **Metal Name** or **Slug** heading to sort. The **Status** columns cannot be sorted.
- The newest metals are shown first, 50 rows per page by default. Use the paging controls under the list to move between pages or to show 25, 50, 75 or 100 rows.

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No metals match | **No records to display** |
| Loading the info text | Grey placeholder bars in the drawer. |
| An action fails | A red message with the reason. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Metals uses it |
| ------ | ------------------ |
| [Roles](../../../roles-permission/roles.md) | Decides who can open the page and whether the switch is enabled. |

### Modules That Depend On It

| Module | How it uses metals |
| ------ | ------------------ |
| [Metal Tone](./metal-tone.md) | Each tone belongs to one metal. **Select Metal** offers only active metals. |
| [Metal Karat](./metal-karat.md) | Karats belong to the Gold metal. |
| [Front-End Setting](../../../settings/front-end-setting.md) | **Metal Gold Id**, **Metal Silver Id** and **Metal Platinum Id** point at metals in this list, so other pages know which metal is Gold, Silver and Platinum. |
| [Metal Rate Settings](../../../settings/metal-rate-setting.md) | Lists the active metals, with Gold shown per active karat. Rates are set there, not here. |
| [Metal Management](../../../settings/margin-cost-center/metal-management.md) | Sets each metal's rate and margin. |
| [Labour Management](../../../settings/margin-cost-center/labour-management.md) | Labour charges are set per metal, and per karat for Gold. |
| Configurator settings ([Ring](../../../config-setting/ring-configurator.md), [Three Stone](../../../config-setting/three-stone-configurator.md), [Earring](../../../config-setting/earring-configurator.md), [Pendant](../../../config-setting/pendant-configurator.md), [Bracelet](../../../config-setting/bracelet-configurator.md), [Eternity](../../../config-setting/eternity-configurator.md)) | The **Metal Master** lists the active metals. Each store picks the metals it offers. A client store only sees the metals TCC Tech has switched on for that configurator. |
| Configurator products ([Ring](../../configurator-products/ring-configurator.md), [Three Stone](../../configurator-products/three-stone-configurator.md), push back products) | Product sheets name the metal. The name must match an active metal, ignoring capital letters and extra spaces. |
| [Birthstone Products](../../configurator-products/birthstone-products.md) | The metal options list the active metals. |
| [SKU Builder](../../../settings/sku-builder.md) | The metal segment uses each metal's code. |
| Storefront configurator pages | Show the [Info Text](#info-text). |
| [Audit Logs](../../../settings/audit-log.md) | Every on/off change is recorded. |

### What Changes If…

| Change | Effect elsewhere |
| ------ | ---------------- |
| A metal is switched off | It disappears from Metal Rate Settings, from **Select Metal** on Metal Tone, from the configurator settings and from Birthstone Products, and product sheet rows that name it are rejected. Products, tones and karats that already use it keep it. |
| A metal is switched back on | It returns to all of those lists. |
| The info text changes | The storefront info popup shows the new text. |

---

## Edge Cases / Notes

- **Shared list.** There is one metal list for the whole platform. Switching off a metal affects every store.
- **No add, edit or delete.** New metals cannot be created from the admin panel.
- **Two Status columns.** The first shows the badge and the second holds the switch.
- **Switching off is not checked.** The switch works even while the metal is in use by tones, karats, rates or products.
