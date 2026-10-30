---
sidebar_position: 4
id: gift-charges
title: Gift Charges
sidebar_label: Gift Charges
---

# Gift Charges

The **Gift Charges** page sets an extra charge for each cart product the customer marks for gift packaging. You can charge a percentage of the product price or a fixed amount, or keep gift packaging free.

The page is a single form. There is no list, and no separate add or delete: one gift charge setting applies to the whole store.

---

## Gift Charge Settings

| Setting | Description |
| ------- | ----------- |
| **Gift Chargeable Provision** | The switch at the top. Switch it on to charge for gift packaging. When off, gift packaging is free for customers ("Gift packaging is free for customers.") and **Charge Type** and the charge value are disabled. When on, the page shows "Each gifted product is charged extra." Off by default. |
| **Charge Type** | Two cards: **Percentage (%)** charges a percentage of each gifted product's price, and **Fixed Amount ($)** charges the same flat amount for each gifted product. **Fixed Amount ($)** is the type shown until a setting is saved. |
| **Charge Percentage / Charge Amount** | The charge value. The label and the sign beside the box (**%** or **$**) change with the charge type. |
| **Example** | A line that shows the charge and the total for a sample product priced $ 2,357.23, for example "the gift charge will be $ 117.86 and the customer pays $ 2,475.09". It updates as you change the settings. It shows a charge of $ 0.00 while the provision is off or the value is not valid. |

---

### Field Rules

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Gift Chargeable Provision** | - | On or off. |
| **Charge Type** | ✅ | **Percentage (%)** or **Fixed Amount ($)**. |
| **Charge Percentage** | ✅ | Shown for **Percentage (%)**. A number from 0 to 100. For example, 5 for 5%. |
| **Charge Amount** | ✅ | Shown for **Fixed Amount ($)**. A number of 0 or more. For example, 25.00. |

The charge value is required only while **Gift Chargeable Provision** is on.

### How the charge is worked out

- **Percentage (%)**: charge = product price × percentage ÷ 100, rounded to two decimal places. With 5% on a $ 2,357.23 product, the charge is $ 117.86.
- **Fixed Amount ($)**: the charge is the amount you enter for every gifted product, whatever its price. With 25 the charge is $ 25.00, so the customer pays $ 2,382.23.

The charge applies to each cart product the customer marks as a gift.

---

## Saving Changes

- The **Save** button becomes active once you change any setting. Click it to apply the changes; the message "Gift charge settings updated successfully" appears. While saving, the button reads **Saving...**.
- If the charge value is missing or out of range while **Gift Chargeable Provision** is on, saving is blocked with the message "Enter a percentage between 0 and 100" or "Enter a valid amount".
- Click **Cancel** (shown only when there are unsaved changes) to discard them and return to the saved settings.
- The form is dimmed and cannot be edited until the saved setting has loaded.

:::note
Switching **Gift Chargeable Provision** off and saving turns gift charging off for customers. The page does not check **Add**, **Edit** or **Delete** permission separately; whoever can open it can change it.
:::
