---
sidebar_position: 4
id: subscription
title: Subscription & Billing
sidebar_label: Subscription & Billing
---

# Subscription & Billing

## Overview

**Subscription & Billing** is where your company manages what it pays TCC Tech for each month. You can:

- see your monthly total and what it includes
- enable or disable jewelry configurators
- buy user licences and bind them to your team
- see every purchase and change to your subscription

Everything is billed monthly to your card and the subscription renews automatically every month. Payments are made through Stripe.

:::note[Who can use it]
Anyone whose role has **View** on this page can open it. The buttons on this page are not limited by the role's **Add**, **Edit** or **Delete** settings, so anyone who can open the page can buy, remove and bind. Give a role access to this page only where that is intended.
:::

---

## Data Displayed

### Tabs

The page has four tabs. It opens on **Overview**. When the tabs do not fit on screen, arrow buttons appear at the ends of the tab bar.

| Tab | Line under the tabs | What it shows |
| --- | ------------------- | ------------- |
| **Overview** | *Your current recurring monthly total and what's included.* | Your monthly total and the items in your plan. |
| **Configurators** | - | Every configurator, with its price and status. |
| **Users & Licences** | *Buy user licence packs and assign them to your sales team.* | The licence price, and every licence with the user who holds it. |
| **Billing History** | *Every purchase and change to your subscription.* | Your monthly renewal and a list of billing events. |

**View Documentation** at the top right opens this page.

### Overview Tab

| Card | Value | Line below | Example |
| ---- | ----- | ---------- | ------- |
| **Monthly Total** | Your recurring charge per month. A plan in more than one currency shows one total per currency, joined with **+**. | **Next charge** and the date, or **No upcoming charge** | **$249.00** / *Next charge Dec 1, 2026* |
| **Active Configurators** | Number of configurators you pay for | How many more are available | **3** / *4 more available* |
| **User Licences** | Number of your stores | How many of them have a user (other than the main administrator) | **5** / *3 assigned* |

**Included In Your Plan** (*Billed monthly*) lists every item in your monthly bill, grouped under **Platform**, **Configurators** and **User Licences** (any other kind of item gets a group of its own). Each group shows its subtotal. Each line shows the item name, a short note and its monthly price. The card ends with **Total / month**. With nothing active it shows **No active plan items.**

### Configurators Tab

The line *Enable more jewelry configurators for your store. Active prices are locked in.* sits above the cards, with the **Credit** box and the **All / Active / Inactive** filter.

| Control | Description |
| ------- | ----------- |
| **Credit** | Your wallet credit in your plan's currency. Hover over or tap the info icon for **How credit works**. Shown when your subscription has a credit figure. |
| **All / Active / Inactive** | Shows every configurator, only those you pay for, or only those you do not. |
| **Checkbox** (top left of each image) | Selects the card. A selection bar appears. |

Each configurator card shows:

| Element | Description | Example |
| ------- | ----------- | ------- |
| Image and name | The configurator's picture and name. | *Ring Configurator* |
| Note | **Locked in · billed monthly** when you pay for it, **Available to enable** when you do not. | **Locked in · billed monthly** |
| Price | The monthly price. A configurator you pay for keeps the price you bought it at. One you do not pay for shows today's price. | **$49.00** |
| **Status** | **Active** (green) or **Inactive**, with a switch. See [Turn a Configurator On or Off](#turn-a-configurator-on-or-off). | **Status: Active** |
| Button | **Disable** when you pay for it, **Enable · $price/mo** when you do not. | **Enable · $49.00/mo** |

The selection bar shows **N selected** (with the combined monthly price of the inactive ones), **Clear**, **Disable selected (N)** for selected active cards and **Enable selected · $price/mo** for selected inactive ones.

### Users & Licences Tab

**Buy User Licences** shows the price of one licence, for example *$30.00 per user, billed monthly*, the **Credit** box and the **Buy · $price/mo** button. Below them, use **-** and **+** to choose how many licences to buy (at least 1). The count shows as, for example, *2 licences* with *$30.00/user/mo* under it.

**Your User Licences** shows **N total · N assigned · N unassigned** at the top, then:

| Control | Description |
| ------- | ----------- |
| **Search licences** | Type part of the licence ID or the holder's name, email or sign-in name. The list refreshes once you pause typing and goes back to page 1. |
| **All / Assigned / Unassigned** | Shows every licence, only bound ones, or only free ones. |
| Paging | At the bottom. 25 licences per page by default; choose 25, 50, 75 or 100. |

Unassigned licences are listed first. Each licence is a card:

| Element | Description | Example |
| ------- | ----------- | ------- |
| Header tag | **#** and the licence's position in the list, then the holder's store name (dots when there is none). | **#1 · Downtown Store** |
| **View Details** | Opens the licence details. Disabled until a user holds the licence. | - |
| Bin icon | Deletes the licence. Locked on the administrator's licence (*An admin's licence can't be deleted*). | - |
| Holder | **Assigned to** and the user's name, with their email below. The company's main administrator has an **Admin** tag. A free licence shows **Unassigned** and has a black border. | **Assigned to Rahul Mehta** |
| **Bind** / **Rebind** | **Bind** on a free licence, **Rebind** on a bound one. | - |
| **Unbind** | Frees the licence at once, with no confirmation. Locked (with a lock icon) on the administrator's licence. | - |

### Licence Details

**View Details** opens **Licence Details** with the store name under the title. It lists the details recorded for the licence as label and value rows, for example **Licence Id**, **Pin**, **Created**, **Email**, **Role** and **Phone Number**. The PIN is hidden as dots; click the eye icon to show it. Click **Done** to close.

### Billing History Tab

The **Billing History** card (*Your subscription renews automatically every month*) shows:

| Item | Description | Example |
| ---- | ----------- | ------- |
| **Monthly Renewal** | Your monthly total, with what it includes and the next charge date. | *Platform, configurators and user licences · Next charge Dec 1, 2026* |
| Info icon | Opens **Monthly Renewal Breakdown** (*Everything included in your $… /mo recurring charge*). Each item shows its name, date, note and monthly price (**--** when free, a minus sign for a discount), then **Total / month**. | - |
| Summary lines | One line per group with its monthly amount: the item's own name when alone, otherwise for example **Configurators (4)** or **Licence packs (2)**. | **Configurators (3)** $147.00 |
| **Total user licences** | How many licences your company has. | **5** |
| Event list | One row per billing event, newest first: an icon, a title, the date (day/month/year) with a note, and an amount. | *Ring Configurator added* · 18/11/2026 · **+$49.00/mo** |

The amount on an event is the amount charged, **Credit** and an amount for a refund to your wallet, **+** or **-** with **/mo** for a change in the monthly price, **Failed** for a failed payment, or **—** when nothing changed.

Event titles include **First payment**, **Renewal**, **Subscription upgraded**, **Subscription downgraded — credit kept**, **Payment failed**, an item followed by **added** or **removed**, and a subscription **cancelled** or **set to cancel**. A change that was never paid shows **— not applied**.

---

## How It Works

### Steps to Enable a Configurator

1. Click **Enable · $price/mo** on the card. Nothing is charged yet. A price quote opens in the **Buy configurators** popup (*Added to your subscription, billed monthly until cancelled.*).
2. Review the quote:
   - each configurator with its monthly price
   - **Monthly price** (*tax included*), from your current total to the new total
   - **Today**: what is charged now for the rest of the period, **Wallet credit used** if credit applies, and **To pay now** (or **Nothing to pay**)
3. Choose how to pay, when something is due: **Saved card** (*Your saved card will be charged.*) or **Another card**, which shows a card form.
4. Click **Pay $amount**, or **Confirm** when nothing is due. Click **Cancel** or the close icon to leave without changes.
5. The popup shows progress: **Charging your card…**, then **Payment received. Applying the change…**. If your bank needs to check the payment, you see **Confirm the payment with your bank in the Stripe window…**.
6. When the change is live, **Payment successful** lists the configurators that *are now active*, with the payment details. Click **Done**.

### Steps to Disable a Configurator

1. Click **Disable** on the card. A popup asks **Disable this configurator?** with its name and *You will see the price change before anything is removed.* Click **Disable** (or **Cancel**).
2. The **Remove configurators** popup (*Taken off your subscription; the unused days are credited.*) shows **Remove** and the names, the new monthly price, and under **Today** the **Unused days of** credit. When nothing is owed, the credit is shown as **Added to your wallet for your next payment**.
3. Click **Confirm removal** (or **Pay $amount** if an amount is due), or **Cancel**.
4. **Your subscription is updated** confirms that the configurators *were removed from your subscription*. Click **Done**.

### Enable or Disable Several at Once

1. Tick the checkbox on each card you want.
2. Click **Enable selected · $price/mo** for the inactive ones or **Disable selected (N)** for the active ones. Click **Clear** to empty the selection. If you pick both kinds, both buttons are shown.
3. Continue with the same popups as above.

### Turn a Configurator On or Off

The **Status** switch on a card you pay for turns the configurator off or on for your store without changing what you pay. The message *Configurator name turned off* (or *on*) confirms it.

- A configurator switched off is left out of the configurators your store offers. It stays on your subscription and is still billed.
- The switch is greyed out on configurators you do not pay for.

To stop paying for a configurator, use **Disable** instead.

### Result Popup

After a successful change the popup lists each item and, where they apply:

| Row | Meaning |
| --- | ------- |
| **Amount paid** | What was charged today. Hidden when nothing was charged. |
| **Credit kept for your next payment** | Credit left over after the change. |
| **Plan period** | The start and end of the period the change covers. |
| **New monthly price** | Your monthly total after the change. |
| **Next payment** | The date of your next payment. |

The popup ends with *Amounts include tax.*

### Users & Licences

A user licence lets one user sign in. Each user can hold one licence. Your company's main administrator always holds one.

#### Steps to Buy User Licences

1. Use **-** and **+** to choose how many licences to buy.
2. Click **Buy · $price/mo**. A quote opens in the **Buy user licences** popup with the same review, **Today** amounts, card choice and progress messages as [enabling a configurator](#steps-to-enable-a-configurator).
3. Click **Pay $amount**.
4. **Payment successful** shows *Your new user licence is added:* (or *licences are added*) with the amount paid, plan period and new monthly price. Click **Done**. The count goes back to 1.

New licences start unassigned. Buying licences also raises how many [stores](./roles-permission/stores.md) you can have.

#### Steps to Bind or Rebind a Licence

1. Click **Bind** (or **Rebind**) on the licence card.
2. Pick a user from the list, shown as name and email. The first user is picked for you. Only users who do not hold a licence are offered.
3. Click **Save** (it shows **Saving…**), or **Cancel**.

The message **User assigned successfully** confirms it. The user can now sign in. When you rebind, the current holder is unbound first, then the new user is bound.

If there is no one to offer, the card shows *Create a user first that is not bound to any licence.* Add the user on [User Management](./roles-permission/user-management.md) first.

#### Steps to Unbind a Licence

Click **Unbind** on the licence card. The licence is freed at once and the message **User unassigned successfully** appears. The user can no longer sign in until a licence is bound to them again. Their store and PIN stay as they were.

#### Steps to Delete a Licence

1. Click the bin icon on the licence card.
2. The popup **Delete licence?** says the licence *will be removed from your subscription* (and *its user unassigned* if it is bound).
3. Click **Delete** (it shows **Deleting…**), or **Cancel**.

The message *Licence #N deleted* confirms it. Your monthly total goes down.

### Credit

When you disable a configurator or remove a licence before the end of your billing period, the days you did not use come back to your wallet as credit. For example, a $49/month configurator bought on the 1st and disabled on the 15th returns about half, roughly $24.50. Credit is used automatically on your next purchase or billing cycle.

### Payment Problems

| Situation | What you see |
| --------- | ------------ |
| Card declined or bank check failed | The reason in the popup, followed by *Nothing was charged.* When Stripe offers it, a **Pay $amount on Stripe** button opens Stripe's payment page in a new tab, and the popup updates once the payment arrives. |
| Saved card cannot be charged | *Your saved card could not be charged. Pay on Stripe's page; this window updates when it's paid.* with the **Pay $amount on Stripe** button. |
| Stripe does not answer | **Waiting for Stripe to confirm the payment…**. The payment may still go through, so do not pay twice. Check **Billing History** later. |
| Payment not finished in time | *Still waiting for the payment. The change is made as soon as it is paid.* |
| Payment failed or expired | *The payment was not completed. Nothing was changed.* |
| An earlier change is still unpaid | The earlier change is cancelled for you: *The earlier unpaid change was cancelled and nothing was charged. You can buy or enable again now.* Then try again. |
| Another card cannot be used | *Enter your card details.* or *Your card could not be verified.* |
| Company details still loading | *Your company details are still loading. Please try again in a moment.* |
| Quote could not be loaded | *The price preview could not be loaded. Please try again.* |

The popup cannot be closed while the charge itself is being sent. Once the bank check starts, the button changes to **Close** and you can close it.

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading a tab | Grey placeholder blocks. |
| Overview cannot be loaded | *Could not load billing overview. Please try again.* |
| Configurators cannot be loaded | *Could not load configurators. Please try again.* |
| No configurators for the filter | *No active configurators yet.* (**Active**) or *Every configurator is already active.* (**Inactive**) |
| Licence price cannot be loaded | *Could not load the licence rate. Please try again.* The **Buy** button is hidden. |
| Licences cannot be loaded | *Could not load your licences. Please try again.* |
| No licences | *No licences purchased yet.*, or *No licences match your search.* when searching or filtering |
| Users cannot be loaded when binding | *Loading users…*, then *Could not load the users. Please try again.* if it fails |
| Licence details | Grey lines while loading, *No licence details for this store.* when empty, *Could not load the licence details. Please try again.* on failure |
| Billing history cannot be loaded | *Could not load billing history. Please try again.* |
| No billing events | *No billing history yet.* |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Subscription & Billing uses it |
| ------ | ---------------------------------- |
| [Front-End Setting](./settings/front-end-setting.md) | The licence price is set by TCC Tech in the **Pricing** section, in the super admin portal. |
| [User Management](./roles-permission/user-management.md) | Supplies the users offered when binding a licence. |
| [Stores](./roles-permission/stores.md) | Licence cards show the holder's store. The **User Licences** card on **Overview** counts your stores. |
| Stripe | Takes the payments, holds your saved card and keeps your wallet credit. |

### Modules That Depend On It

| Module | How it uses your subscription |
| ------ | ----------------------------- |
| Side menu and [Roles](./roles-permission/roles.md) | Configurator pages (products and config settings) appear only for configurators you pay for. |
| Configurator settings, for example [Ring Configurator](./config-setting/ring-configurator.md) | Each configurator's settings page is available only while you pay for it. |
| Sign-in | A user needs a bound licence to sign in. Your main administrator always has one. |
| [Stores](./roles-permission/stores.md) | You can have as many stores as you have licences. |
| [User Management](./roles-permission/user-management.md) | A user who holds a licence cannot be deactivated or deleted until it is unbound. |
| Storefront | Configurators switched off with the **Status** switch are left out of what your store offers. |

### What Changes If…

| Change | Effect |
| ------ | ------ |
| You enable a configurator | Its product and settings pages appear in the side menu and in the role permission list. Your monthly total goes up. |
| You disable a configurator | Its pages leave the side menu and the permission list. Unused days are credited. |
| You switch a configurator off with **Status** | It is left out of what your store offers. Billing and menu pages stay the same. |
| You buy licences | You can bind more users and add more stores. |
| You unbind a licence | That user cannot sign in until a licence is bound to them again. |
| You delete a licence | The licence is removed and its user, if any, is unbound. Your store limit goes down by one. |
| TCC Tech changes a configurator's price | Configurators you already pay for keep their price. Only new purchases use the new price. |
| TCC Tech changes the licence price | The new price shows in **Buy User Licences**. |

---

## Edge Cases / Notes

- **Locked-in prices.** A configurator you pay for keeps the price you bought it at, even if today's price changes.
- **Status is not billing.** Turning a configurator off with the **Status** switch does not lower your bill. Use **Disable**.
- **Licence numbers move.** The **#** on a licence card is its position in the current list, so it changes when you search, filter or change page.
- **Administrator's licence.** The main administrator's licence cannot be unbound or deleted.
- **You cannot unbind yourself.** Unbinding your own licence is refused with *You cannot unassign your own user licence.*
- **Dollar signs.** Card prices, the licence price and the **Buy** button always show a **$** sign. The quote and result popups show your plan's own currency.
- **Overview licence count.** The **User Licences** card on **Overview** counts stores, so it can differ from the totals on **Users & Licences**.
- **Credit box.** The **Credit** box appears only when your subscription has a credit figure. It can show **$0.00**.

:::tip
To add a new team member: add the user on [User Management](./roles-permission/user-management.md), then come here, open **Users & Licences** and **Bind** a free licence to them. Buy a licence first if none are free.
:::
