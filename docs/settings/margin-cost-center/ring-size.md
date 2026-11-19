---
sidebar_position: 7
id: ring-size
title: Ring Size
sidebar_label: Ring Size
---

# Ring Size

## Overview

**Ring Size Management** sets which regional ring size charts your store uses. It also shows a reference chart of equivalent sizes across all supported regions.

The countries you choose decide which sizes appear in the ring size lists of your configurators and how they are labelled. This page does not affect prices.

:::note[Who can use it]
Your role needs access to the page. Without **Edit** permission, the cards, checkboxes and **Save** are disabled. Each client has its own selection.
:::

---

## Data Displayed

### Select Country

Under **Select Country**, one card per region. Each card has a checkbox, the region name and a short description. A selected card is outlined and tinted.

| Card | Description shown |
| ---- | ----------------- |
| **US, Canada, Mexico** | *Numerical scale from 0 to 13.5, including quarter and half sizes. Most common for North American operations.* |
| **France** | *Metric inner circumference in millimeters (e.g., 44 to 70). Standardized across the EU and international shipping.* |
| **Germany, Russia, Ukraine, Asia** | *Numerical scale from 1 to 27 based on inner diameter measurements.* |
| **India, China, Japan, South America, Turkey, Israel** | *Numerical scale from 1 to 27 based on inner diameter measurements.* |
| **Italy, Spain, Netherlands, Switzerland** | *Metric inner circumference in millimeters (e.g., 44 to 70). Standardized across the EU and international shipping.* |
| **UK, Australia, Ireland, New Zealand, South Africa** | *Alphabetical scale from A to Z+ (e.g., L, M, N). Used widely in Commonwealth countries.* |

| Button | Description |
| ------ | ----------- |
| **Save** | At the top right of **Select Country**. Saves the ticked regions. Enabled only after you change the selection, and only while at least one region is ticked. |
| **View Documentation** | Opens this page. |

### Ring Size Chart

The **Ring Size Chart** lists each size with its equivalent in every region, one column per region, in the same order as the cards. It always shows all six regions, whichever cards are ticked. A **-** means the size has no equivalent in that region. Long charts scroll inside the table with the header kept in view. The chart is for reference only and cannot be edited here.

---

## How It Works

### Steps to Choose Ring Size Countries

1. Under **Select Country**, click the cards (or their checkboxes) to tick or untick regions. You can tick several.
2. Click **Save**. The message *Ring size countries updated successfully* appears.

Your choice is not saved until you click **Save**.

### How the Selection Is Used

Ring sizes are stored in the [Item Size](../../product-management/masters/item-size-master.md) master as US sizes. Each master size is matched to its row in the ring size chart. When you have ticked regions:

- The ring size lists in your configurators show only the master sizes that exist in at least one ticked region, each once, in chart order.
- Each size carries its equivalent in every ticked region that has it.

When no region has ever been saved, the size lists show the master sizes unchanged.

### Loading and Empty States

| State | What you see |
| ----- | ------------ |
| Loading the chart | **Loading...** in the chart. |
| No chart rows | **Data Not Available** |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Ring Size uses it |
| ------ | --------------------- |
| [Item Size](../../product-management/masters/item-size-master.md) | Supplies the ring sizes that are matched to the chart. |

### Modules That Depend On It

| Module | How it uses Ring Size |
| ------ | --------------------- |
| Configurator ring size lists on the storefront (for example the Ring, Three Stone and Eternity Band configurators) | Show the sizes of the ticked regions, labelled in those regions' scales. |
| Configurator settings that list ring sizes (for example the [Ring Configurator settings](../../config-setting/ring-configurator.md)) | Use the same filtered size list. |

### What Changes If…

| Change | Effect |
| ------ | ------ |
| A region is ticked | Its sizes are added to the configurator lists, and each size shows its equivalent in that region. |
| A region is unticked | Sizes that exist only in that region disappear from the lists. |
| A size is added to or removed from the Item Size master | It appears in or disappears from the lists, if it exists in a ticked region. |

---

## Edge Cases / Notes

- **At least one region.** You cannot save with no region ticked.
- **Sizes not in the chart.** A master size with no matching row in the chart is left out of the lists once regions are ticked.
- **Prices are not affected.** Ring size does not change the price of a configurator product.
