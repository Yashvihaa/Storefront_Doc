---
sidebar_position: 4
id: gift-charges
title: Gift Charges
sidebar_label: Gift Charges
---

# Gift Charges

## Overview

**Gift Charges** sets whether your store offers gift packaging and what it costs. You can charge a percentage of the price or a fixed amount.

The page is a single form. There is no list and no add or delete: one gift charge setting applies to your whole store.

:::note[Who can use it]
Anyone whose role has **View** on this page can open it. The page does not check **Add**, **Edit** or **Delete** permission, so anyone who can open it can change the setting.
:::

---

## Data Displayed

### Gift Charges Screen List

| Action | Description |
| ------ | ----------- |
| **Save** | Saves the setting. Active only after you change something. Shows **Saving...** while it works. |
| **Cancel** | Shown only when there are unsaved changes. Puts the form back to the saved setting. |
| **View Documentation** | Opens this page. |

### Gift Charge Settings

| Setting | Type | Description | Example |
| ------- | ---- | ----------- | ------- |
| **Gift Chargeable Provision** | Switch | Turns gift packaging on or off. When on, the line *Each gifted product is charged extra.* appears under it. Off until a setting is saved. | On |
| **Charge Type** | Choice | Two cards: **Percentage (%)** (*Charge a percentage of each gifted product's price.*) and **Fixed Amount ($)** (*Charge the same flat amount for each gifted product.*). **Fixed Amount ($)** is picked until a setting is saved. | **Percentage (%)** |
| **Charge Percentage** / **Charge Amount** | Number | The charge value. The label and the sign beside the box (**%** or **$**) follow the charge type. | *5* or *25.00* |
| Example line | Text | Shows what a customer pays for a sample product priced **$2,357.23**. Updates as you type. | *Example: gift-packing a product priced $2,357.23, the gift charge will be $117.86 and the customer pays $2,475.09.* |

While **Gift Chargeable Provision** is off, **Charge Type** and the charge value are greyed out.

### Field Rules

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Gift Chargeable Provision** | - | On or off. |
| **Charge Type** | ✅ | **Percentage (%)** or **Fixed Amount ($)**. |
| **Charge Percentage** | ✅ | Shown for **Percentage (%)**. A number from 0 to 100, for example *5* for 5%. Message: *Enter a percentage between 0 and 100*. |
| **Charge Amount** | ✅ | Shown for **Fixed Amount ($)**. A number of 0 or more, for example *25.00*. Message: *Enter a valid amount*. |

The charge value is checked only while **Gift Chargeable Provision** is on.

---

## How It Works

### Steps to Turn On Gift Charges

1. Switch **Gift Chargeable Provision** on.
2. Pick a **Charge Type**.
3. Enter the **Charge Percentage** or **Charge Amount**.
4. Check the example line.
5. Click **Save**. The message **Gift charge settings updated successfully** confirms it.

### Steps to Turn Off Gift Charges

1. Switch **Gift Chargeable Provision** off.
2. Click **Save**.

### What the Example Line Says

| Situation | Example line |
| --------- | ------------ |
| Provision off | *Gift charges are off, so customers will not see the gift package option at checkout. Turn on Gift Chargeable Provision to offer gift packaging.* |
| Provision on, with a charge above 0 | The sample price, the gift charge and what the customer pays. |
| Provision on, with no value, 0 or a value that is not valid | *Enter a charge value above to see what a customer pays for gift packaging.* |

### How the Charge Is Worked Out on an Order

When a customer marks their cart or order as a gift, the gift charge is added once to that order:

- **Percentage (%)**: the percentage of the order's product total (before discounts), rounded to the cent. With 5% on products totalling $2,357.23, the charge is $117.86.
- **Fixed Amount ($)**: the amount you enter, once for the order. With 25 the charge is $25.00.

The gift charge is shown on its own line. It is not discounted by coupons or offers, and tax is worked out on the discounted total plus the gift charge.

### Saving and Validation

- If the charge value is missing or out of range while the provision is on, nothing is saved and the message *Enter a percentage between 0 and 100* or *Enter a valid amount* appears.
- The form is dimmed and cannot be changed until the saved setting has loaded.
- After a successful save, **Save** becomes inactive again until you make another change.

### Loading and Error States

| State | What you see |
| ----- | ------------ |
| Loading the saved setting | The form is dimmed and cannot be changed. |
| Nothing saved yet | The provision is off, with **Fixed Amount ($)** picked. |
| Save fails | An error message explains why, for example *Gift charge percentage must be between 0 and 100.* |

---

## Dependencies and Impact

### Modules It Depends On

None. The setting stands on its own.

### Modules That Depend On It

| Module | How it uses the gift charge |
| ------ | --------------------------- |
| Storefront cart and checkout | Offers the gift package option only while gift charges are on, and adds the charge to gift orders. |
| [Orders](../order-management/orders.md) | A gift order keeps its gift charge and the setting used. The charge shows in the order's totals. |
| Order emails | The order confirmation shows the gift charge. |
| [Tax Master](./tax-master.md) | Tax on a gift order includes the gift charge. |
| [Audit Logs](./audit-log.md) | Changes to the setting are recorded there. |

### What Changes If…

| Change | Effect |
| ------ | ------ |
| Gift charges are turned on | Customers see the gift package option at checkout and gift orders are charged. |
| Gift charges are turned off | Customers no longer see the gift package option. |
| The charge type or value changes | New gift carts and orders use the new charge. Orders already placed keep the charge they had. |

---

## Edge Cases / Notes

- **Once per order.** The page wording says *each gifted product*, but the charge is added once to the whole gift order. A percentage is taken of the order's product total.
- **A zero charge.** You can save the provision on with a value of 0. Customers then see the gift option at no extra cost.
- **Switching off keeps the value.** Turning the provision off and saving keeps the charge type and value, ready for when you turn it back on. A value that is not valid is saved as 0.
