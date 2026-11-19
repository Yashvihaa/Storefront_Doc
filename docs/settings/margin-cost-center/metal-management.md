---
sidebar_position: 6
id: metal-management
title: Metal Management
sidebar_label: Metal Management
---

# Metal Management

## Overview

**Metal Management** is a simple form for one metal's base rate and the margin added on top of it. It edits the same data as [Metal Rate Settings](../metal-rate-setting.md).

The page opens for one metal at a time, and that metal's saved settings are loaded into the form.

:::tip
Use [Metal Rate Settings](../metal-rate-setting.md) for day-to-day work. It covers all metals on one page, offers the **Margin**, **Markup** and **Multiplier** pricing types, fetches rates with one click and shows the final rate of each karat. See [Edge Cases / Notes](#edge-cases--notes) for what this simpler form does differently.
:::

:::note[Who can use it]
Your role needs access to the page. The page does not check **Add**, **Edit** or **Delete** permission separately. Each client has its own metal rates and margins.
:::

---

## Data Displayed

### Metal Management Screen

| Button | Description |
| ------ | ----------- |
| **Back** | Returns to the previous page without saving. |
| **View Documentation** | Opens this page. |
| **Cancel** | Does nothing. It does not reset the form. |
| **Save** | Saves the rate and margin and opens [Metal Rate Settings](../metal-rate-setting.md). |

### Metal and Rate Source

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Select Metal** | ✅ | The metal being edited: **Gold**, **Silver** or **Platinum**. Read-only. |
| **Auto Update** | - | Turn on to take the rate from a provider. Turn off to enter the rate yourself. |
| **Unit Selection** | ✅ | **Per Gram** or **Per Ounce**. **Per Gram** is selected when the metal has no saved unit. |
| **Manual Metal Rate** | ✅ | Shown when **Auto Update** is off. The base rate. Shows *Manual Metal Rate is required* when empty. |
| **Select Provider** | ✅ | Shown when **Auto Update** is on. **MCX**, **LBMA** or **Kitco**. Shows *Provider is required* when empty. |
| **API URL** | ✅ | Shown when **Auto Update** is on. Must be a valid web address (*API URL is required*, *Enter a valid URL*). |
| **API Key** | ✅ | Shown when **Auto Update** is on. Shows *API Key is required* when empty. |
| **API Secret** | ✅ | Shown when **Auto Update** is on. Shows *API Secret is required* when empty. |

### Slab Rules

Under **Slab Rules**, choose **Range-wise Margin** (the default for a metal with no margin) or **Overall Margin**. The saved margin of the metal is loaded when the page opens.

**Range-wise Margin**: a different margin for each metal weight range. Each row has:

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Min Range (gm / oz)** | - | The lower weight of the range. The unit follows **Unit Selection**: **gm** for **Per Gram**, **oz** for **Per Ounce**. |
| **Max (gm / oz)** | - | The upper weight of the range. |
| **Select Margin Type** | ✅ | **Percentage (%)** or **Fixed Price**. Required once any field in the row is filled (*Margin Type is required*). |
| **Value** | ✅ | Required once any field in the row is filled (*Value is required*). Must be a number (*Value must be a number*). |

Click **Add** to add a row and the red **Delete** icon to remove one. Rows left completely empty are ignored.

**Overall Margin**: one margin for every weight.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Select Margin Type** | ✅ | **Percentage (%)** or **Fixed Price**. Shows *Margin Type is required* when empty. |
| **Margin Value** | ✅ | Shows *Margin Value is required* or *Margin Value must be a number*. A **%** sign is shown for a percentage and a **₹** sign for a fixed price. |

---

## How It Works

### Steps to Update a Metal

1. Open the page for the metal you want to change.
2. Choose **Auto Update** and **Unit Selection**, then enter the rate (or the provider details).
3. Under **Slab Rules**, choose **Range-wise Margin** or **Overall Margin** and fill in the margin.
4. Click **Save**. The message *Metal Management data submitted!* appears and [Metal Rate Settings](../metal-rate-setting.md) opens.

### What Saving Does

- The rate, unit, provider and API details are saved for the metal, for your company only.
- Margins are saved as **Markup** margins: a **Percentage (%)** margin adds that percentage of the rate, and a **Fixed Price** margin adds the amount to the rate.
- A row whose weight range matches a saved range updates that margin. New ranges are added. Saved margins that are not on the form are removed.

How the rate and margin are then used in prices is described in [Metal Rate Settings](../metal-rate-setting.md#how-it-works).

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Metal Management uses it |
| ------ | ---------------------------- |
| [Metals](../../product-management/masters/metal-master/metals.md) | The metal being edited. |
| [Metal Rate Settings](../metal-rate-setting.md) | Shares the same rate and margin data. |

### Modules That Depend On It

Everything that depends on [Metal Rate Settings](../metal-rate-setting.md#modules-that-depend-on-it) depends on this page too, because both save the same data: configurator prices, carts, wishlists, new orders and the own-rate columns of the **Manufacturing Option Comparison**.

### What Changes If…

| Change | Effect |
| ------ | ------ |
| The rate or margin is saved here | It replaces the values shown on [Metal Rate Settings](../metal-rate-setting.md), and configurator prices in that metal change straight away. |
| A metal that used **Margin** or **Multiplier** is saved here | Its margins become **Markup** margins, so prices change. |
| The form is saved with no margin filled in | All saved margins of the metal are removed. |

---

## Edge Cases / Notes

- **Pricing type is reset to Markup.** This form has no pricing type field. Saving here turns **Margin** and **Multiplier** margins into **Markup** margins. Use [Metal Rate Settings](../metal-rate-setting.md) to keep them.
- **Empty margins remove the saved ones.** Saving with no margin rows filled in deletes the metal's margins.
- **No Fetch button.** With **Auto Update** on, this form does not fetch a rate. It saves the rate that was loaded, together with the provider details.
- **No pricing lock.** Unlike [Metal Rate Settings](../metal-rate-setting.md), this form does not lock the rate fields when Price Display is set to *TCCTECH price + Margins*.
- **Opening the page.** The form loads a metal only when the page is opened for a specific metal. Opened without one, the form stays empty and **Select Metal** shows **Gold**.
