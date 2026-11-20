---
sidebar_position: 2
id: tax-master
title: Tax Master
sidebar_label: Tax Master
---

# Tax Master

## Overview

**Tax Master** holds the taxes added to your storefront orders. Each tax has a name and a percentage rate, and can be tied to a country and a state. A tax can be switched on or off at any time.

Every active tax is added to the cart and to each order placed on your storefront.

:::note[Who can use it]
Your role needs access to the page. **Add Tax** needs **Add** permission, the **Edit** icon and the status switch need **Edit** permission, and the **Delete** icon needs **Delete** permission. Each client has its own taxes.

In the TCC super admin portal, the page also shows **State match**. TCC Tech's own taxes are the taxes charged on client subscriptions.
:::

---

## Data Displayed

### Tax Master Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Type part of a tax name. The list refreshes about one second after you stop typing and goes back to page 1. Clearing the box shows all taxes again. |
| **Filter** | Shows or hides a filter box under each column heading, to narrow the rows on the current page. |
| **Add Tax** | Opens the **Add Tax** panel on the right. |
| **Edit** | Click the **Edit** icon in the **Action** column to open the **Edit Tax** panel with the saved values. |
| **Delete** | Click the **Delete** icon. Click **YES** in the **Are you Sure?** popup to remove the tax, or **NO** to keep it. The message *Tax deleted successfully* appears. |
| Status switch | The switch after the icons in the **Action** column turns the tax on or off. The message *Successfully updated* appears. |
| **View Documentation** | Opens this page. |

### List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Action** | - | **Edit** and **Delete** icons, then the status switch. | - |
| **Name** | Text | The tax name. | *GST* |
| **Rate (%)** | Number | The tax percentage. | *18* |
| **Country Code** | Text | The two-letter country code, or **-** when none is set. | *IN* |
| **State** | Text | The state, or **-** when none is set. | *Gujarat* |
| **State Match** | Text | Super admin portal only. **Any**, **Same as seller** or **Other than seller**. | *Same as seller* |
| **Status** | Badge | **Active** (green) or **Inactive** (red). | **Active** |

The list is sorted with the newest tax first, 50 taxes per page by default. Click a column heading to sort. Use the paging controls at the bottom to move between pages or to show 25, 50, 75 or 100 taxes per page.

### Tax Fields

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Tax name** | ✅ | For example GST, IGST or VAT. Must be unique. Shows *This Field is required* when empty. |
| **Rate (%)** | ✅ | A number from 0 to 100. For example, 18 means 18%. |
| **Country code** | - | A two-letter country code, for example IN or US. Saved in capitals. |
| **State** | - | A state name, up to 120 characters. Needs a country code. |
| **State match** | - | Super admin portal only. **Any**, **Same as seller** or **Other than seller**. **Any** is selected by default. Needs a country code when not **Any**. |

**Rate (%)** messages:

| Message | When it appears |
| ------- | --------------- |
| Tax rate must be a valid number | The rate is empty or not a number. |
| Tax rate must be at least 0% | The rate is below 0. |
| Tax rate cannot exceed 100% | The rate is above 100. |

Other messages you may see:

| Message | When it appears |
| ------- | --------------- |
| country_code must be a 2-letter ISO country code (e.g. IN, US). | The country code is not two letters. |
| country_code is required when state or state_match is set. | A state or state match is set without a country code. |
| Data already exists | Another tax already has the same name. |

---

## How It Works

### Steps to Add a New Tax

1. Click **Add Tax**.
2. Enter the **Tax name** and **Rate (%)**.
3. Optionally enter the **Country code** and **State**.
4. Click **Add Tax**. The message *Tax added successfully* appears and the panel closes.

To change a tax, click its **Edit** icon, change the fields and click **Save Tax**. The message *Tax updated successfully* appears. Click **Cancel** or the close icon to close the panel without saving.

### How Taxes Are Applied to Orders

When a shopper views the cart or places an order on your storefront:

1. The subtotal is worked out from the products.
2. Discounts from [Offers and Discounts](../product-management/offers-discounts.md) are taken off.
3. The [Gift Charges](./gift-charges.md) amount is added for a gift order.
4. **Each** active tax is worked out separately on that amount, and all of them are added to the total.

For example, with active taxes CGST 9% and SGST 9% on an amount of 1,000, the order shows CGST 90 and SGST 90, and a total of 1,180.

The order stores each tax line (name, rate and amount) when it is placed.

### Country, State and State Match

On your storefront orders, **Country code** and **State** are for your reference: every active tax is applied, whatever the shopper's address.

For TCC Tech's own taxes on client subscriptions, they decide which taxes apply to a client's billing address:

| Setting | Tax applies when |
| ------- | ---------------- |
| No country code | Always. |
| **Country code** | The client's billing country matches. |
| **State** | The client's billing state also matches. |
| **Same as seller** | The client's state is the same as TCC Tech's billing state, for example for CGST and SGST. |
| **Other than seller** | The client's state differs from TCC Tech's billing state, for example for IGST. |

### Search, Sorting and Paging

- The search covers every tax, not just the current page, and matches the tax name.
- Sorting and paging are done across all taxes.
- The **Filter** boxes only narrow the rows already on the current page.

### Loading and Empty States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No taxes match | **No records to display** |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Tax Master uses it |
| ------ | ---------------------- |
| Client onboarding (super admin client management) | When a new client is set up, standard tax rates for its country and state are added to its Tax Master, switched off. |

### Modules That Depend On It

| Module | How it uses Tax Master |
| ------ | ---------------------- |
| Storefront cart and checkout | Every active tax is shown and added to the total. |
| [Orders](../order-management/orders.md) | Each order stores its tax lines and total tax at the time it was placed. |
| [Cart Products](../sales-funnel/cart-products.md) | Cart totals include the active taxes. |
| [Subscription](../subscription.md) | TCC Tech's own taxes are added to client subscription payments, by billing address. |

### What Changes If…

| Change | Effect |
| ------ | ------ |
| A tax is added, edited or switched on | It is added to carts and new orders straight away. Orders already placed keep their taxes. |
| A tax is switched off or deleted | It is no longer added to carts and new orders. |
| A rate changes | Carts and new orders use the new rate. |
| TCC Tech changes one of its own taxes | Every running client subscription is priced again in the background. |

---

## Edge Cases / Notes

- **All active taxes are added.** There is no rule that picks one tax per country or state for storefront orders. Switch off the taxes you do not want to charge.
- **New clients start with taxes switched off.** Taxes added during onboarding are standard rates, not jewellery-specific rates. Check them and switch on the ones you need.
- **Taxes are not part of product prices.** Configurator and product prices are shown before tax. Taxes are added in the cart and at checkout.
- **Manufacturer tax is separate.** The **Tax** line in the **Manufacturing Option Comparison** comes from the manufacturer's own charges in [Manufacturer Charges](../order-management/manufacturer-charges.md), not from this page.

:::tip
If you may need a tax again, switch it off instead of deleting it.
:::
