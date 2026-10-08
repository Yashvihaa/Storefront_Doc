---
sidebar_position: 1
id: metal-rate-setting
title: Metal Rate Settings
sidebar_label: Metal Rate Settings
---

# Metal Rate Settings

The **Metal Rate Settings** page sets the base rate for each metal and the margin added on top of it. The resulting final rates are shown per karat (Gold) or per weight range (Silver and Platinum) at the bottom of the page.

---

## Metal Rate Settings Screen

| Action | Description |
| ------ | ----------- |
| **Metal Buttons** | Click **Gold**, **Silver** or **Platinum** at the top of the card to load that metal's settings. The selected metal is highlighted. |
| **Auto Update** | Switch on to take the metal rate from a rate provider. Switch off to enter the rate manually. |
| **Unit Selection** | Choose the unit the rate applies to: **Per Gram** or **Per Ounce**. |
| **Slab Rules** | Choose **Range-wise Margin** or **Overall Margin**. |
| **Save** | Saves the rate and margin settings for the selected metal. |
| **Rate Cards** | Show the base rate, margin and final rate calculated from the saved settings. |

:::note
**Save** and **Fetch** are disabled for users without **Edit** permission.
:::

---

### Metal Rate

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Auto Update** | - | Off by default. Controls whether the rate is entered manually or fetched from a provider. |
| **Unit Selection** | ✅ | **Per Gram** or **Per Ounce**. Silver and Platinum always use **Per Gram**. Gold offers **Per Gram** and **Per Ounce** when entered manually, and uses **Per Ounce** when Auto Update is on. |
| **Select Provider** | ✅ (Auto Update on) | Shown only when Auto Update is on. Options: **MCX**, **LBMA**, **Kitco**. |
| **Fetch** | ✅ (Auto Update on) | Click after selecting a provider to fetch the current rate. The fetched rate fills the metal rate field. |
| **&lt;Metal&gt; Metal Rate** | ✅ (Auto Update off) | For example, **Gold Metal Rate**. Enter the base rate manually. When Auto Update is on, this field is read-only and shows the fetched rate. |

:::note
With Auto Update on, you must click **Fetch** before saving. Changing the provider clears the fetched rate, so fetch again after switching providers.
:::

---

### Range-wise Margin

Apply a different margin to each metal weight range. Each row contains:

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Min Range (gm)** | - | Start of the weight range. Must be a number. |
| **Max Range (gm)** | - | End of the weight range. Must be greater than Min Range. |
| **Select Pricing Type** | - | **Margin**, **Markup** or **Multiplier**. Defaults to **Markup**. |
| **Select Margin / Markup Type** | ✅ | Required once any field in the row is filled. **Margin** allows **Percentage (%)** only. **Markup** allows **Flat Amount** or **Percentage (%)**. Hidden for **Multiplier**. |
| **Value** | ✅ | Required once any field in the row is filled. Must be a number. With the **Margin** pricing type, the value must be less than 100. |

- Click **Add** to add another range row.
- Click the **delete** icon on a row to remove it.
- Completely empty rows are ignored when saving.
- Ranges must not overlap or duplicate each other.

---

### Overall Margin

Apply one margin to all weights of the selected metal.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Select Pricing Type** | - | **Margin**, **Markup** or **Multiplier**. |
| **Select Margin / Markup Type** | ✅ | **Margin** allows **Percentage (%)** only. **Markup** allows **Flat Amount** or **Percentage (%)**. Hidden for **Multiplier**. |
| **Value** | ✅ | Must be a number. With the **Margin** pricing type, the value must be less than 100. |

Click the **Reset margin value** icon next to the fields to clear the pricing type, type and value.

---

## Rate Cards

After saving, the rates calculated for the selected metal are shown below the form.

| Metal | What is shown |
| ----- | ------------- |
| **Gold** | Cards are grouped by margin slab. Each group heading shows the calculation type (**Fixed**, **Percentage** or **Multiplier**) and, for range-wise margins, the **Min Range** and **Max Range**. Each karat card shows the karat and unit, **Base Rate**, the margin type and value, and **Final Rate**. |
| **Silver / Platinum** | Each card shows the **Weight Range (Units)**, **Base Rate**, the margin type and value, and **Final Rate**. |

:::tip
The **Base Rate** on the cards updates as soon as you enter or fetch a new rate, so you can check it before saving. The **Final Rate** reflects the last saved settings.
:::
