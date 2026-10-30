---
sidebar_position: 1
id: metal-rate-setting
title: Metal Rate Settings
sidebar_label: Metal Rate Settings
---

# Metal Rate Settings

The **Metal Rate Settings** page sets the base rate for each metal and the margin added on top of it. The resulting final rates are shown per karat (Gold) or per weight range (Silver and Platinum) at the bottom of the page. These final rates are what the system works from when it prices the metal in your products.

---

## Metal Rate Settings Screen

| Action | Description |
| ------ | ----------- |
| **Metal Buttons** | Click **Gold**, **Silver** or **Platinum** at the top of the card to load that metal's saved settings. The selected metal is highlighted. A metal that is inactive in your metal master is not shown. **Gold** is selected when the page opens. |
| **Auto Update** | Switch on to take the metal rate from a rate provider. Switch off to enter the rate manually. The information icon beside it explains how Auto Update works. |
| **Unit Selection** | Choose the unit the rate applies to: **Per Gram** or **Per Ounce**. |
| **Slab Rules** | Choose **Range-wise Margin** or **Overall Margin**. **Range-wise Margin** is selected by default. |
| **Save** | Saves the rate and margin settings for the selected metal. |
| **Rate Cards** | Show the base rate, margin and final rate calculated from the saved settings. |

:::note
**Save** and **Fetch** are disabled for users without **Edit** permission.
:::

:::tip
Each metal is saved separately. Click **Save** before you switch to another metal, or the changes you made are not kept. The **Cancel** button on this page does not reset the form.
:::

---

### Metal Rate

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Auto Update** | - | Off by default. Controls whether the rate is entered manually or fetched from a provider. |
| **Unit Selection** | ✅ | **Per Gram** is selected by default. Silver and Platinum always use **Per Gram**. Gold offers **Per Gram** and **Per Ounce** when entered manually, and offers **Per Ounce** only when Auto Update is on. |
| **Select Provider** | ✅ (Auto Update on) | Shown only when Auto Update is on. Options: **MCX**, **LBMA**, **Kitco**. |
| **Fetch** | ✅ (Auto Update on) | Click after selecting a provider to fetch the current rate. The fetched rate fills the metal rate field and the unit is set from the provider's answer (always **Per Gram** for Silver and Platinum). It is disabled until a provider is selected. |
| **&lt;Metal&gt; Metal Rate** | ✅ (Auto Update off) | For example, **Gold Metal Rate**. Enter the base rate manually. When Auto Update is on, this field is read-only and shows the fetched rate. |

When you switch Auto Update on, the rate you had typed is remembered and the saved provider and rate (if any) are shown. When you switch it off again, the rate and unit you had typed are restored.

:::note
With Auto Update on, you must click **Fetch** before saving. Changing the provider clears the fetched rate, so fetch again after switching providers.
:::

| Message | When it appears |
| ------- | --------------- |
| Manual Metal Rate is required | You clicked **Save** with Auto Update off and no rate entered. |
| Provider is required | You clicked **Save** with Auto Update on and no provider selected. |
| Please select a provider | You clicked **Fetch** without a provider. |
| Metal price fetched successfully | **Fetch** loaded a rate. |
| Unable to fetch metal price | The provider returned no rate. |
| Please fetch metal rate before saving | You clicked **Save** with Auto Update on and have not fetched a rate yet. |
| Metal Management data submitted! | The settings were saved. |

---

### Pricing Types

Every margin row uses one of three pricing types. **Markup** is selected by default.

| Pricing Type | Margin / Markup Type | Notes |
| ------------ | -------------------- | ---------------------------- |
| **Margin** | **Flat Amount** or **Percentage (%)** | With **Percentage (%)** the value must be less than 100. |
| **Markup** | **Flat Amount** or **Percentage (%)** | No upper limit is enforced on the value. |
| **Multiplier** | None (the type field is hidden) | The value is entered as a multiplier, shown with a **×** sign. |

The sign beside the **Value** box shows the unit: **×** for a multiplier, **%** for a percentage and **$** for a flat amount. It stays empty until you choose a type.

The final rate shown on the rate cards is calculated by the system from your saved base rate and margin.

---

### Range-wise Margin

Apply a different margin to each metal weight range. Each row contains:

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Min Range (gm)** | - | Start of the weight range. Must be a number; otherwise "Min Range must be a number" is shown. |
| **Max Range (gm)** | - | End of the weight range. Must be a number and greater than Min Range; otherwise "Max Range must be a number" or "Max must be greater than Min" is shown. |
| **Select Pricing Type** | - | **Margin**, **Markup** or **Multiplier**. Defaults to **Markup**. |
| **Select Margin Type / Select Markup Type** | ✅ | Required once any field in the row is filled; otherwise "Margin Type is required" is shown. Hidden for **Multiplier**. |
| **Value** | ✅ | Required once any field in the row is filled ("Value is required"). Must be a number ("Value must be a number"). With **Margin** and **Percentage (%)**, the value must be less than 100 ("Margin value must be less than 100"). |

- Click **Add** to add another range row.
- Click the **delete** icon on a row to remove it.
- Completely empty rows are ignored when saving.
- Ranges must not overlap or duplicate each other; otherwise "Ranges must not overlap or duplicate." is shown.
- Each row has its own pricing type, so one metal can mix margins, markups and multipliers across ranges.

---

### Overall Margin

Apply one margin to all weights of the selected metal.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Select Pricing Type** | - | **Margin**, **Markup** or **Multiplier**. |
| **Select Margin Type / Select Markup Type** | ✅ | **Flat Amount** or **Percentage (%)**; otherwise "Margin Type is required" is shown. Hidden for **Multiplier**. |
| **Value** | ✅ | Must be a number. "Margin Value is required" and "Margin Value must be a number" are shown when it is missing or not a number. With **Margin** and **Percentage (%)**, the value must be less than 100 ("Margin value must be less than 100"). |

Click the **Reset margin value** icon next to the fields to clear the pricing type, type and value.

---

## Rate Cards

After saving, the rates calculated for the selected metal are shown below the form. Amounts use your store's default currency.

| Metal | What is shown |
| ----- | ------------- |
| **Gold** | One card per karat. Each card shows the karat and unit, **Base Rate**, the margin (labelled **Fixed**, **Percentage** or **Multiplier**, with its value), and the final rate. |
| **Silver / Platinum** | One card per weight range, headed **WEIGHT RANGE (UNITS)** and showing the range (**All Over** when the margin covers every weight). Each card shows **Base Rate**, the margin (labelled **Fixed**, **Percentage** or **Multiplier**, with its value), and the final rate. The cards are not shown until a margin has been saved for the metal. |

The final rate is labelled **Final Rate (with Margin)**, **Final Rate (with Markup)** or **Final Rate (with Multiplier)**, following the pricing type. For Gold with no margin saved, it is labelled **Final Rate**.

:::tip
The **Base Rate** on the cards updates as soon as you enter or fetch a new rate, so you can check it before saving. The final rate reflects the last saved settings.
:::
