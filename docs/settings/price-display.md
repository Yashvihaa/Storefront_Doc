---
sidebar_position: 3
id: price-display
title: Price Display
sidebar_label: Price Display
---

# Price Display

## Overview

**Price Display** sets your company's pricing mode. The mode decides:

- whether customers see prices while they build a design in the product configurator (Diamond Setup, Metal Setup and Configurator steps), and which prices
- whether your prices are built on TCC Tech's rates or your own
- whether you can add and change prices in the admin panel

It does not change the prices you see as the store owner.

:::note[Who can use it]
Anyone whose role has **View** on this page can open it. The page does not check **Add**, **Edit** or **Delete** permission, so anyone who can open it can change the mode.
:::

---

## Data Displayed

### Configurator Pricing Card

The **Configurator Pricing** card (*Choose whether prices are shown to customers in the product configurator (Diamond Setup, Metal Setup and Configurator steps), and which prices they see. This does not affect the prices you see as the store owner.*) lists the three modes, each with a switch. Exactly one mode is active. The active one has a dark border and its switch is on.

| Mode | What customers see | Prices built on |
| ---- | ------------------ | --------------- |
| **TCC_TECH Pricing + Margin** | *Customers see the Tcc tech benchmark price with your configured margins applied.* | TCC Tech's metal rates and diamond prices, plus your margins. Your pricing pages become view-only. |
| **Own Pricing + Margin** | *Customers see your own pricing with your configured margins applied.* | Your own metal rates and diamond prices, plus your margins. You can add and edit prices. |
| **No Price Display** | *Customers do not see prices while building a custom design.* | No price is shown. |

Below the list, a box repeats the description of the active mode. A company that has never chosen a mode uses **TCC_TECH Pricing + Margin**.

### Change Pricing Mode Popup

Clicking a mode opens **Change pricing mode?**, showing the current mode and the new one (for example *Own Pricing + Margin → TCC_TECH Pricing + Margin*), then **What changes**:

| Switching to | What changes |
| ------------ | ------------ |
| **Own Pricing + Margin** | *You will be able to add and edit your own prices: diamond group, labour, metal rates, margins, rounding, duty and tariff, discounts, product prices and others.* / *Customers will see prices built from your own pricing plus your margin.* / *TCC TECH prices will no longer be shown.* / *Switching does not change any price you have already saved. Review your prices after switching so customers see the right amounts.* |
| **TCC_TECH Pricing + Margin** | *Every pricing screen becomes read-only. You will not be able to add or change prices until you switch back to Own Pricing + Margin.* / *Customers will see the TCC Tech pricing along with your own margin.* |
| **No Price Display** | *Customers will not see any price while building a design in the configurator.* |

The popup ends with *Are you sure you want to continue?* and the buttons **Cancel** and **Continue**.

---

## How It Works

### Steps to Change the Pricing Mode

1. Click a mode, or turn on its switch.
2. Read **What changes** in the popup.
3. Click **Continue**. Click **Cancel** or the close icon to keep the current mode.

The new mode is saved straight away. There is no separate **Save** button. A message confirms it:

| New mode | Message |
| -------- | ------- |
| **TCC_TECH Pricing + Margin** | *Switched to TCC_TECH Pricing + Margin. Pricing screens are now read-only.* |
| **Own Pricing + Margin** | *Switched to Own Pricing + Margin. You can now edit your prices.* |
| **No Price Display** | *Switched to No Price Display. Customers will not see prices.* |

While the change is saving, the new mode stays selected and further clicks are ignored. Pricing pages lock or unlock at once, without reloading.

### Pricing Pages Locked by TCC_TECH Pricing + Margin

While **TCC_TECH Pricing + Margin** is active, these pages are view-only, whatever your role allows. They show *Pricing is locked while you use TCC TECH Pricing + Margin. To add or change prices, switch to Own Pricing + Margin first.* with a **Go to Price Display** button:

- [Diamond Group Master](../product-management/diamond-group-master.md)
- [All Products](../product-management/all-products.md), including adding and editing products and variants
- [Birthstone Products](../product-management/configurator-products/birthstone-products.md)
- The configurator product pages, for example [Ring Configurator](../product-management/configurator-products/ring-configurator.md)
- [Metal Rate Settings](./metal-rate-setting.md)

[Labour Management](./margin-cost-center/labour-management.md) also refuses changes in this mode.

### What Happens to Your Diamond Prices

| Switch | Diamond Group Master |
| ------ | -------------------- |
| To **Own Pricing + Margin** | TCC Tech's diamond rows for your configurators are copied into your own Diamond Group Master, where you can edit them. Rows you already have are kept. |
| Back to **TCC_TECH Pricing + Margin** or **No Price Display** | TCC Tech's diamond rows are used again, read-only. Your own rows stay stored but are not used. |

### Loading and Error States

| State | What you see |
| ----- | ------------ |
| Loading | Three grey placeholder rows. |
| Save fails | An error message explains why. The previous mode stays selected. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Price Display uses it |
| ------ | ------------------------- |
| [Multi Currency](./multi-currency.md) | **TCC_TECH Pricing + Margin** can be chosen only when your default currency is USD. Otherwise the message is *TCC_TECH Price + Margins can only be selected when the default currency is USD.* |
| [Subscription & Billing](../subscription.md) | When you switch to own pricing, diamond rows are copied for the configurators you pay for. |

### Modules That Depend On It

| Module | How it uses the pricing mode |
| ------ | ---------------------------- |
| Storefront configurators | Show TCC Tech-based prices, your own prices, or no price. |
| Pricing pages (see the list above) | View-only under **TCC_TECH Pricing + Margin**. |
| [Diamond Group Master](../product-management/diamond-group-master.md) | Uses TCC Tech's rows or your own, as described above. |
| [Product Margin](./margin-cost-center/product-margin.md) and [Duty and Tariff](./margin-cost-center/duty-and-tariff.md) | Your own margins and tariffs apply in every mode. TCC Tech's are never used. |
| [Audit Logs](./audit-log.md) | Each change of mode is recorded there. |

### What Changes If…

| Change | Effect |
| ------ | ------ |
| You switch to **Own Pricing + Margin** | Pricing pages unlock. Customers see prices built on your own rates. TCC Tech's diamond rows are copied to you. Saved prices are not changed. |
| You switch to **TCC_TECH Pricing + Margin** | Pricing pages become view-only. Customers see prices built on TCC Tech's rates plus your margins. |
| You switch to **No Price Display** | Customers see no price in the configurator. |
| TCC Tech changes its rates | Under **TCC_TECH Pricing + Margin**, your customers' prices follow. Under own pricing they do not. |

---

## Edge Cases / Notes

- **No undo for copied rows.** Switching back and forth does not delete the diamond rows copied to you. They are used again the next time you choose own pricing.
- **Clicking the active mode** does nothing. Choose a different mode instead.
- **USD only for TCC pricing.** If your default currency is not USD, you cannot choose **TCC_TECH Pricing + Margin**.
- **TCC Tech itself.** TCC Tech's own company always prices with its own rates, and its pricing pages are never locked in the super admin portal.
- **Mode names.** The page shows its own names for the modes. Other messages from the system may use slightly different wording, such as *Tcc tech price + Mragin*.
