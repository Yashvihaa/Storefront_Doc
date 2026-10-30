---
slug: /
sidebar_position: 1
id: intro
title: Introduction
sidebar_label: Introduction
---

<head>
  <title>Storefront Docs</title>
</head>

# Storefront Documentation

**Storefront** is TechCore Creations' (TCC) platform for jewelry retailers. It has two parts:

- a **branded jewelry website**, where customers design their own pieces in step-by-step configurators and see the price as they go
- an **admin panel**, where you run everything behind the website: products, pricing, orders, customers, stores, your team and your subscription

This guide explains how to use the admin panel. Start here for an overview of how Storefront works, then open the section for the task you need.

---

## What Storefront Is

Storefront is built for **configure-to-order** jewelry. Most of what you sell is not finished stock. Customers design a piece by choosing the stone, shape, carat, metal, size and setting, and a manufacturer makes it after the order is placed.

| Feature | What it means for you |
| ------- | --------------------- |
| **Your own brand** | The website shows your logo, your brand colors and your own web address. Customers see your business, not TCC. |
| **Configurators** | Step-by-step design tools for each type of jewelry, such as rings, earrings, pendants, bracelets and eternity bands. You choose which configurators to subscribe to and which options each one offers. |
| **Calculated pricing** | Prices are worked out from the metal rates, diamond prices, margins, rounding and tax you set in the admin panel. When a rate changes, prices follow without editing each product. |
| **Several stores** | One account covers all of your store locations. |
| **Monthly subscription** | You pay monthly for the platform, the configurators you enable and the user licences for your team. See [Subscription & Billing](./subscription.md). |
| **Separate data** | Your products, customers and orders are kept separate from every other retailer on the platform. |

---

## How It Works

The website and the admin panel share the same data.

| Part | Used by | What it does |
| ---- | ------- | ------------ |
| **Storefront website** | Your customers, and your sales team in store | Customers browse your catalog, design jewelry in a configurator, add items to their cart or wishlist and place orders. If a customer adds a product to their cart or wishlist, they need to provide their details. This information is then stored and can be viewed in the admin panel. |
| **Admin panel** | You and your team | Set up products, configurators and pricing; handle orders and customers; manage stores, users and your subscription; follow results on the Dashboard and in Analytics. |

Anything you save in the admin panel shows on the website. This includes a new product, an option switched on in a configurator and a change to your metal rates. Anything customers do on the website comes back to the admin panel, including visits, searches, carts, wishlists and orders.

:::tip[Selling in store]
Your sales team can also install the storefront on an iPad as an app, with your logo on the home screen, and design pieces with customers at the counter.
:::

### From Design to Order

1. **You set up the catalog.** Add products in [Product Management](/product-management), choose the options each configurator offers in [Configurators](/configurators), and set your metal rates, margins and tax in [Settings](/settings).
2. **A customer designs a piece.** On the website they choose a design and go through the configurator steps. The price updates with each choice. The [Price Display](./settings/price-display.md) setting decides which price customers see, or hides prices completely.
3. **The customer saves it or orders it.** Items added to a cart appear under [Cart & Wishlist Management](/sales-funnel), and wishlisted items appear in [Customer Reports](./customer-management/customer-reports.md), so you can follow up on designs that were not bought. Placed orders appear under [Orders](./order-management/orders.md).
4. **You choose who makes it.** On each order, compare the manufacturing cost from TCC Tech with your own manufacturers, share the Product Details Worksheet, and order from the manufacturer you choose.
5. **You track the results.** The [Dashboard](./dashboard.md) shows orders, website visitors, revenue and best sellers for the period you choose. [Analytics](./analytics.md) goes further into customers, designs and sales.

---

## Getting Started

### Create Your Account

Signing up is self-service and has three steps, shown as **Products**, **Store & Identity** and **Payment**:

1. **Select your products.** Choose the jewelry types (configurators) you want to sell. You need at least one to continue.
2. **Enter your store and identity details.** Give the number of branches (up to 100), company name, company logo, CIN number (Corporate Identification Number), email address, a password, phone number and full business address. For India you also give the state, city and a 6-digit postal code.
3. **Choose your web address and pay.** Check the order summary, enter the web address (subdomain) for your storefront, apply a coupon if you have one, and pay for your monthly subscription in the secure payment window. Two user licences come with the plan; each branch after the first needs one more.
4. **Check your email.** When the payment goes through, your store is set up and your login details are sent to you. Look in your spam folder if you do not see the email.
5. **Sign in** on your store's sign-in page (**Welcome Back**) with your email address and password.
6. **Complete store setup.** The first time you sign in, you are taken through **Branding** (logo, primary color and fonts) and **Margins** (the margin for each product category). Later sign-ins go straight to your storefront.

### Open the Admin Panel

The admin panel is opened from your storefront. After you sign in, click the profile button in the storefront header, then enter your 4-digit PIN on the **Enter PIN** keypad. An incorrect PIN shows "Incorrect PIN. Try again." and you can enter it again. If you are signed out of the admin panel, you are returned to the storefront.

### Set Up the Admin Panel

After your first sign-in, work through these pages in order:

| Step | Task | Page |
| ---- | ---- | ---- |
| 1 | Add your store locations | [Stores](./roles-permission/stores.md) |
| 2 | Create roles for your team | [Roles](./roles-permission/roles.md) |
| 3 | Add users and give each one a role and a store | [User Management](./roles-permission/user-management.md) |
| 4 | Assign user licences to your team | [Subscription & Billing](./subscription.md#users--licences) |
| 5 | Set metal rates, tax, margins and price display | [Settings](/settings) |
| 6 | Set up the master data your products use (shapes, stones, metals, sizes) | [Masters](/product-management/masters) |
| 7 | Choose the options each configurator offers | [Configurators](/configurators) |
| 8 | Add your products | [Product Management](/product-management) |

---

## Who Can Do What

Access to the admin panel is controlled by **roles**. A role lists the modules a user can open and the actions they can take in each one, such as **View**, **Add**, **Edit** and **Delete**. Every user has one role.

- You can open only the modules your role has **View** access to. Other modules do not appear in the side menu.
- On most pages, buttons for actions your role does not allow, such as **Add**, **Edit** and **Delete**, are disabled.
- Roles are created and changed on the [Roles](./roles-permission/roles.md) page.

:::note
If a page in this guide is missing from your admin panel, or you cannot change anything on it, ask your administrator to add that permission to your role.
:::

---

## Key Terms

| Term | Meaning |
| ---- | ------- |
| **Account** | Your business's registration on Storefront. One account covers all of your stores. |
| **Store** | One of your physical store locations. |
| **User** | A team member who can sign in to the admin panel. |
| **Role** | A named set of permissions given to users, such as Store Manager or Catalog Editor. |
| **User licence** | A paid seat for one team member, with its own 4-digit PIN. Each user can hold one licence. |
| **PIN** | The 4-digit code entered on the **Enter PIN** keypad to open the admin panel from the storefront. A PIN is also set for each user on the [User Management](./roles-permission/user-management.md) page. |
| **Configurator** | A step-by-step design tool for one type of jewelry, such as rings or pendants. |
| **Configurator product** | A design combination customers can build in a configurator, for example a ring's head, shank and band. |
| **Cart / Wishlist** | Items a customer has saved on the website: the cart for items they intend to buy, the wishlist for later. |
| **Order** | A purchase a customer has placed on the website. |
| **TCC Tech benchmark** | TCC Tech's own price. It is the reference in the manufacturing comparison and, by default, the base of the prices customers see. |

---

## Using This Guide

The guide follows the admin panel's side menu.

| Section | Covers |
| ------- | ------ |
| [Dashboard](./dashboard.md) | Orders, website visitors, revenue, best sellers and store health at a glance. |
| [Analytics](./analytics.md) | Catalog, customer and sales insights, grouped into tabs. |
| [Orders Management](/order-management) | Orders, the manufacturing comparison and manufacturer charge templates. |
| [Product Management](/product-management) | Products, masters, configurator products (including birthstone products), diamond prices and offers. |
| [Customer Management](/customer-management) | Customer accounts and customer reports. |
| [Cart & Wishlist Management](/sales-funnel) | Products customers have added to their carts and wishlists. |
| [Roles & Permission](/roles-permission) | Roles, users and stores. |
| [Configurators](/configurators) | The options customers can choose in each configurator. |
| [Settings](/settings) | Margin rules, metal rates, currency, tax, SKU builder, email and invoice templates and the audit log. |
| [Subscription & Billing](./subscription.md) | Your plan, enabled configurators, user licences and billing history. |
| [Front End Setting](./settings/front-end-setting.md) | Website design, gift charges, price display and company info. |

### How Each Page Is Laid Out

Most pages follow the same pattern:

- A short description of what the page is for.
- A **Screen List** table of the buttons and actions on the screen.
- **Steps** for common tasks, each with a table of fields. In the **Required** column, ✅ means the field must be filled in and **-** means it is optional.
- **Note** and **Tip** boxes for rules that are easy to miss.

:::tip
Several admin screens have a **View Documentation** button that opens the matching page of this guide in a new tab.
:::
