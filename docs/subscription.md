---
sidebar_position: 4
id: subscription
title: Subscription & Billing
sidebar_label: Subscription & Billing
---

# Subscription & Billing

The **Subscription & Billing** page lets you manage your plan, enable or disable jewelry configurators and buy user licences for your sales team. All charges are billed monthly to the card you have on file, and your subscription renews automatically every month.

---

## Subscription Screen List

Click a tab below the page title to switch sections. When the tabs do not fit on screen, arrow buttons appear at the ends of the tab bar. The page opens on **Overview**.

| Tab | Description |
| --- | ----------- |
| **Overview** | Your current recurring monthly total and what is included in your plan. |
| **Configurators** | Enable or disable jewelry configurators for your store. |
| **Users & Licences** | Buy user licences and assign them to your sales team. |
| **Billing History** | Every purchase and change to your subscription. |

Click **View Documentation** at the top right to open this help page in a new browser tab.

:::note
Prices are set by your plan and are shown by the page itself, so always check the amount on the button or in the confirmation popup before you pay. Amounts are shown in the currency of your plan, and a mixed-currency plan shows one total per currency.
:::

---

## Overview

| Card | Shows |
| ---- | ----- |
| **Monthly Total** | Your total recurring charge per month, with the date of the next charge (**Next charge** followed by the date) or **No upcoming charge** |
| **Active Configurators** | Number of configurators enabled, with how many more are available |
| **User Licences** | Number of user licences you hold, with how many are assigned to a user |

**Included In Your Plan** lists everything in your monthly bill, marked **Billed monthly**. Items are grouped under **Platform**, **Configurators** and **User Licences**, each group with a subtotal. Every line shows the item name, a short note and its monthly price. A free item (for example an included licence) is shown as zero in the highlight colour. The list ends with **Total / month**. If nothing is active, the card shows **No active plan items.**

If the figures cannot be loaded, the page shows **Could not load billing overview. Please try again.**

---

## Configurators

Each configurator your store can use is shown as a card with an image, its name and its monthly price. A credit balance box and an **All / Active / Inactive** filter sit above the cards.

| Control | Description |
| ------- | ----------- |
| **All / Active / Inactive** | Show every configurator, only those already enabled, or only those not yet enabled. With no matches the page shows **No active configurators yet.** or **Every configurator is already active.** |
| **Credit** | Your available credit (wallet balance) in the plan currency. Shown when your account has a credit figure. Hover over the info icon for **How credit works**. |
| **Checkbox on a card** | Select the card. A selection bar appears. |

| Card State | Description |
| ---------- | ----------- |
| **Active** | Already enabled. The card has an **Active** badge, the text **Locked in · billed monthly** and the price it was bought at. A **Disable** button is shown. |
| **Not enabled** | Shows **Available to enable** and the price it will cost now. An **Enable · $price/mo** button is shown. |

:::note
An enabled configurator keeps the price it was bought at. A configurator you have not enabled shows its current price.
:::

### Credit

When you disable a configurator before your billing period ends, the days you did not use come back to your wallet as credit. For example, a $49/month configurator bought on the 1st and disabled on the 15th returns about half, roughly $24.50. Credit is applied automatically to your next purchase or billing cycle, so you pay less.

### Steps to Enable a Configurator

1. Click **Enable · $price/mo** on the configurator card. Nothing is charged yet; a price quote opens in the **Buy configurators** popup ("Added to your subscription, billed monthly until cancelled.").
2. Review the quote:
   - Each configurator with its monthly price (for example `+$34.00 / month`).
   - **Monthly price** (tax included) from your current price to the new price.
   - The **Today** section: what you pay now, **Wallet credit used** if credit applies, and the final line **To pay now** (or **Nothing to pay**).
3. Click **Pay $amount** (or **Confirm** when nothing is due). Click **Cancel** or the close icon to leave without changes.
4. The popup shows progress such as **Charging your saved card…**, then **Payment received. Applying the change…**. If your bank requires a check, you are asked to **Confirm the payment with your bank in the Stripe window…**.
5. When the change is live, the **Payment successful** popup lists the configurators now active and the details of the payment. Click **Done**.

### Steps to Disable a Configurator

1. Click **Disable** on an active configurator card. The **Remove configurators** popup opens ("Taken off your subscription; the unused days are credited.").
2. Review the quote: the configurators to **Remove**, the new monthly price, and the **Today** section showing the **Unused days of** credit. If nothing is owed, the credit is shown as **Added to your wallet for your next payment**.
3. Click **Confirm removal** (or **Pay** if an amount is due) to confirm, or **Cancel**.
4. The **Your subscription is updated** popup confirms that the configurators were removed from your subscription. Click **Done**.

### Enable or Disable Several at Once

1. Tick the checkbox on each card you want. A selection bar shows **N selected** and, for configurators to enable, the combined monthly price.
2. Click **Enable selected · $price/mo** for the inactive ones, or **Disable selected (N)** for the active ones, or **Clear** to remove the selection. If you select both active and inactive cards, both buttons are shown.
3. Continue with the same quote and confirmation popup as above.

### Result Popup

After a successful change the popup lists each configurator and, where applicable:

| Row | Meaning |
| --- | ------- |
| **Amount paid** | What was charged today (hidden when nothing was charged) |
| **Credit kept for your next payment** | Credit left over after the change |
| **Plan period** | Start and end of the billing period the change covers |
| **New monthly price** | Your monthly total after the change |
| **Next payment** | The date of your next payment |

The popup ends with **Amounts include tax.**

### Payment Problems

| Situation | What you see |
| --------- | ------------ |
| Card declined or the bank check fails | An error message in the popup, with **Nothing was charged.** where that is the case. If available, a **Pay $amount on Stripe** button opens Stripe's own payment page in a new tab; the popup then waits and updates when the payment is received. |
| Stripe cannot be reached | The popup keeps waiting for the payment to be confirmed. Do not pay twice; if it stays on **Waiting for Stripe to confirm the payment…**, check **Billing History** later. |
| Payment not completed in time | **Still waiting for the payment. The change is made as soon as it is paid.** |
| Company details still loading | **Your company details are still loading. Please try again in a moment.** |
| Quote could not be loaded | **The price preview could not be loaded. Please try again.** |

You cannot close the popup while the charge itself is being made; once the bank check starts you can close it.

If the cards cannot be loaded, the tab shows **Could not load configurators. Please try again.**

---

## Users & Licences

### Buy User Licences

The **Buy User Licences** card shows the price of one licence (for example `$30.00 per user, billed monthly`). If the price cannot be loaded, the card shows **Could not load the licence rate. Please try again.**

1. Use the **-** and **+** buttons to choose the number of users (at least 1). The card shows the number of users and licences being added and the price per user per month.
2. Click **Buy · $price/mo**. A quote opens in the **Buy user licences** popup ("Added to your subscription, billed monthly until cancelled.") with the same review, **Today** amounts, **Pay** button and progress messages described under [Configurators](#steps-to-enable-a-configurator). The charge is made to the card on file.
3. When the purchase is live, the popup **Payment successful** shows **Your new user licence is added:** (or **licences are added**) with the amount paid, plan period and new monthly price. Click **Done**. The number of users resets to 1.

### Your User Licences

Every licence is shown as a card, with **N total · N assigned** at the top. Each card shows the licence (store) name and who holds it. If you have none, the card shows **No licences purchased yet.**

| Card element | Description |
| ------------ | ----------- |
| **Assigned to** | The user's name, with their email under it. If more than one user holds the licence, **+N more** is shown. Shows **Unassigned** when nobody holds it. |
| **View Details** | Opens the licence details. Disabled until a user holds the licence. |
| **Bind** | Assign an unassigned licence to a user. |
| **Rebind** | Move an assigned licence to a different user. |
| **Unbind** | Remove the user from the licence straight away so it can be reused. There is no confirmation popup. |

#### Steps to Bind or Rebind a Licence

1. Click **Bind** (or **Rebind**) on the licence card.
2. Select a user from the dropdown (shown as name and email). The first available user is pre-selected.
3. Click **Save** (the button shows **Saving…** while working), or click **Cancel**.

When you rebind, the current holder is removed first and then the new user is assigned. Only users who do not already hold a licence are offered; if every user already has one, the card shows **Every user is already bound to a licence.**

If the licences cannot be loaded, the card shows **Could not load your licences. Please try again.**

### Licence Details

Click **View Details** on an assigned licence. The **Licence Details** popup shows the licence name and every detail recorded for it as label and value rows (for example the PIN, where the licence has one). Yes/No values are shown as **Yes** or **No**. While loading, placeholders are shown; if nothing is recorded the popup shows **No licence details for this store.** and on failure **Could not load the licence details. Please try again.** Click **Done** to close.

---

## Billing History

The **Billing History** card states that your subscription renews automatically every month.

| Item | Description |
| ---- | ----------- |
| **Monthly Renewal** | Your recurring monthly charge, with a line naming what it includes (for example Platform, configurators and user licences) and the next charge date. |
| **Summary lines** | One line per group (for example **Configurators (4)** or **Licence packs (2)**, or the item's own name when it is alone) with its monthly amount. |
| **Info icon** | Opens the **Monthly Renewal Breakdown** popup ("Everything included in your … recurring charge"). Each item shows its name, its date, a note and its monthly price (`--` when free), followed by **Total / month**. |
| **History entries** | Purchases and changes to your subscription, each with an icon, a title, the date (day/month/year) and the amount added per month (for example `+$15.00/mo`, or a dash when there is no charge). |

If there is no history, the card shows **No billing history yet.** If it cannot be loaded, the tab shows **Could not load billing history. Please try again.**
