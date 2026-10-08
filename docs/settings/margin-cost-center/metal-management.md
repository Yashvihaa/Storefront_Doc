---
sidebar_position: 6
id: metal-management
title: Metal Management
sidebar_label: Metal Management
---

# Metal Management

The **Metal Management** page lets you set the base rate for a metal, either entered manually or fetched automatically from a rate provider, and define the margin added on top of that rate.

---

## Metal Management Settings

This is a settings page with a single form. Fill in the fields below and click **Save**. After a successful save, you are taken to the [Metal Rate Settings](../metal-rate-setting.md) page. Click **Back** to return to the previous page without saving.

### Metal and Rate Source

| Field | Required | Remarks |
| ----- | -------- | ------- |
| Select Metal | ✅ | Shows the metal being configured (**Gold**, **Silver** or **Platinum**). This field is read-only. |
| Auto Update | - | Turn on to fetch the metal rate automatically from a provider. Turn off to enter the rate manually. |
| Unit Selection | ✅ | Choose **Per Gram** or **Per Ounce**. **Per Gram** is selected by default. |
| Manual Metal Rate | ✅ | Shown when **Auto Update** is off. Enter the metal rate. |
| Select Provider | ✅ | Shown when **Auto Update** is on. Choose **MCX**, **LBMA** or **Kitco**. |
| API URL | ✅ | Shown when **Auto Update** is on. Enter the provider's rate URL. It must be a valid URL. |
| API Key | ✅ | Shown when **Auto Update** is on. Enter the key issued by the provider. |
| API Secret | ✅ | Shown when **Auto Update** is on. Enter the secret issued by the provider. |

---

## Slab Rules

Under **Slab Rules**, choose how the margin is added to the metal rate.

### Range-wise Margin

Set a different margin for each metal weight range. **Range-wise Margin** is selected by default. Each row has the following fields:

| Field | Required | Remarks |
| ----- | -------- | ------- |
| Min Range (gm / oz) | - | Lower weight limit of the slab. The unit follows **Unit Selection**. |
| Max (gm / oz) | - | Upper weight limit of the slab. |
| Select Margin Type | ✅ | Choose **Percentage (%)** or **Fixed Price**. Required once any field in the row is filled. |
| Value | ✅ | Margin value for the slab. Must be a number. Required once any field in the row is filled. |

Click **Add** to add another slab row. Click the red **Delete** icon to remove a row. Rows left completely empty are ignored when you save.

### Overall Margin

Apply one margin to every weight.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| Select Margin Type | ✅ | Choose **Percentage (%)** or **Fixed Price**. |
| Margin Value | ✅ | Margin value to add. Must be a number. A **%** sign is shown next to the field for percentage margins, and a **₹** sign for fixed prices. |
