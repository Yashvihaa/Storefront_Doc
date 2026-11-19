---
id: enquiry
title: Enquiry
sidebar_label: Enquiry
---

# Enquiry

## Overview

**Enquiry** collects the requests clients have sent to TCC Tech from their orders. It covers three kinds of request, each on its own tab:

| Tab | What it lists |
| --- | ------------- |
| **CAD** | Products a client sent to TCC Tech for CAD design. |
| **Manufacturer Order** | Products a client ordered from one of TCC Tech's own manufacturers. |
| **Pricing Request** | Requests for TCC Tech benchmark prices that were missing for a product. |

Each row is one request. Open it to see the product, the cost breakup and the email that was sent. Summary cards at the top show how many requests of each kind there are and how much revenue the CAD and manufacturer orders represent.

The page is read-only. You cannot reply to, change or delete a request from here.

:::note[Who can use it]
Enquiry is a TCC platform page. Only a **Super Admin** of the TCC Tech company, signed in through the super admin portal, can open it. Clients send these requests from their own [Orders](./order-management/orders.md) page but cannot see this page. The **View Details** (eye) icon is enabled only when your role has **View** permission for the page.
:::

:::info[Not the same as storefront enquiries]
The **Recent Enquiries** on a client's [Dashboard](./dashboard.md) are product enquiries from storefront customers. They are separate and do not appear here.
:::

---

## Data Displayed

### Summary Cards

Four cards sit above the tabs:

| Card | Value | Line below | Example |
| ---- | ----- | ---------- | ------- |
| **CAD requests** | Number of CAD requests | The revenue from CAD requests | **42** / *$6,300.00 revenue* |
| **Manufacturer orders** | Number of manufacturer orders | The revenue from manufacturer orders | **18** / *$67,834.44 revenue* |
| **Pricing requests** | Number of pricing requests | - | **9** |
| **Total revenue** | CAD revenue plus manufacturer order revenue | How many orders were counted, plus an **excluded** tag when some were left out | **$74,134.44** / *58 orders counted* **2 excluded** |

Hover over the **excluded** tag to see why orders were left out, for example *1 without revenue status, 0 without amount, 1 duplicate*. See [How Revenue Is Calculated](#how-revenue-is-calculated).

Revenue is shown in TCC Tech's base currency. The cards always cover every request, whatever tab, search or page you are on.

### Enquiry Screen List

| Action | Description |
| ------ | ----------- |
| **CAD / Manufacturer Order / Pricing Request** | Switches between the three lists. **CAD** opens first. The tab you pick is kept in the page address, so **Back** on a detail page returns you to it. |
| **Search** | Type part of an order number, client company name or key, client contact name, store name or product name. The placeholder changes with the tab: *Search CAD orders*, *Search manufacturer orders* or *Search pricing requests*. The list refreshes once you pause typing and goes back to page 1. Each tab keeps its own search. |
| **Filter** | Shows or hides a filter box under each column heading, so you can narrow the rows on the current page by typing in a column. |
| **View Details** | Click the eye icon in the **Action** column to open the request. See [Request Details](#request-details). |
| **View Documentation** | Opens this page. |

### List Columns

| Column | Tabs | Type | Description | Example |
| ------ | ---- | ---- | ----------- | ------- |
| **Order** | All | Text | The client's order number in bold, with the request number below it. | **ORD-10245** / *Request #87* |
| **Client** | All | Text | The client's company name, with the store the order belongs to below it. Shows **-** when either is missing. | *Acme Jewels* / *Downtown Store* |
| **Product** | All | Text | The product name, cut off after two lines (hover to see it all), with the quantity below it. | *Oval Solitaire Engagement Ring* / *Qty 1* |
| **Manufacturer** | Manufacturer Order, Pricing Request | Text | The manufacturer. Underscores in the name are shown as spaces, for example *TCC_TECH* shows as *TCC TECH*. | *TCC TECH* |
| **CAD Design** | CAD | Amount | The CAD price per unit, with its label below. | **$150.00** / *CAD Design* |
| **Landed Cost** | Manufacturer Order | Amount | The landed cost per unit, with its label below. | **$3,768.58** / *Landed Cost* |
| **Missing Prices** | Pricing Request | Count | An amber tag with the number of prices asked for. | **3 prices missing** |
| **Sent Date** | All | Date and time | When the request was sent to TCC Tech. | 18 Nov 2026 / 11:35 AM |
| **Action** | All | - | The **View Details** (eye) icon. | - |

An amount shows **n/a** in grey when the request has no price.

Each list is sorted with the most recently sent request first. The columns cannot be sorted. Lists are paged, 50 rows per page by default. Use the paging controls at the bottom of the list to move between pages or to show 25, 50, 75 or 100 rows per page.

### Request Details

Click the eye icon on a row to open the request. The title shows the tab and the request number, for example **CAD #87**, **MANUFACTURER ORDER #12** or **PRICING REQUEST #5531**. The line below it shows when it was sent, for example *Sent 18 Nov 2026 · 11:35 AM*. Use **Back** to return to the same tab of the list.

The page is made up of these cards:

| Card | Tabs | What it shows |
| ---- | ---- | ------------- |
| **Summary** (titled with the request type, for example *CAD Design*) | All | The product image (or a placeholder), the product name and a **Qty** tag. Pricing requests also show the **prices missing** tag. Below them: **Order**, **Order date**, **Sent**, **Store**, **Manufacturer** (manufacturer orders and pricing requests) and the amount with its label (when there is one). |
| **Product** | All | The SKU in the card header, then the product's options as label and value pairs, for example metal, size or setting. CAD and manufacturer orders also list **Specifications**. Then two tables: **Metals** and **Diamonds** (see below). Each table appears only when it has rows. |
| **Cost breakup** | CAD, Manufacturer Order | One row per cost line, each with an optional detail line and its amount. Total rows are bold. The header shows the cost note, for example *USD, per unit, quantity 1*, and any extra notes are listed below the rows. |
| **Missing prices** | Pricing Request | The prices asked for, with the number of items in the header: **Item**, **Detail** and **Reason** (*Diamond price*, *Metal price* or *Product price*). |
| **Ordered by** | All | The client's initials, company name and company key, then **Client** (contact name), **Client ID**, **Email**, **Phone** and the **Order note**. |
| **Email sent** | All | The send date and time, the email subject, the **Recipients**, any **Failed recipients** (in red, pricing requests only) and the **Email log** number. |

**Metals** table:

| Column | Description | Example |
| ------ | ----------- | ------- |
| **Part** | Which part of the product the metal is for. | *Band* |
| **Metal** | The metal. | *18K Gold* |
| **Tone** | The metal tone. | *White* |
| **Weight** | The metal weight. | *3.2 g* |

**Diamonds** table:

| Column | Description | Example |
| ------ | ----------- | ------- |
| **Diamond** | The diamond's name, with its type, stone and shape below it. | *Center Stone* / *Natural · Diamond · Oval* |
| **Carat** | Carat weight of one stone. | *1.50* |
| **Pcs** | Number of stones. | *1* |
| **Total** | Total carat weight. | *1.50* |
| **Grade** | Color and clarity. | *F / VS1* |

Any detail that has no value shows **-**.

---

## How It Works

### Where Requests Come From

Clients send requests from the **Manufacturing Option Comparison** on an order in their [Orders](./order-management/orders.md) page, one product at a time. Each request emails the product's details to TCC Tech. A request appears here only once its email has been sent.

| Request | How the client sends it | Who receives the email | When it appears here |
| ------- | ----------------------- | ---------------------- | -------------------- |
| **CAD** | **Order Now** in the **CAD** column | TCC Tech's company email | Once sent. There is one row per order product. Sending the same product again updates that row and its sent date. |
| **Manufacturer Order** | **Order Now** in a TCC Tech manufacturer's column (the **BENCHMARK** column) | That manufacturer's email addresses | Once sent. A product can be sent to the same manufacturer only once. |
| **Pricing Request** | **Price Request**, which replaces **Order Now** in a column that has no price for one or more of the product's diamonds | TCC Tech's manufacturer | Once at least one recipient received it. Each time the client asks again, a new request is added. |

Orders a client sends to its **own** manufacturers (from [Manufacturer Charges](./order-management/manufacturer-charges.md)) are not TCC Tech's and do not appear here.

### What a Request Shows

The product, metals, diamonds, cost breakup, missing prices and order note are shown exactly as they were in the email. Changes made to the order or product after the request was sent do not change them.

The client's company name, contact name, contact email and phone, and the store name are looked up when you open the page, so they show current values.

The amount in the list is the per-unit amount from the email:

- **CAD Design**: the CAD price.
- **Landed Cost**: the last total line of the manufacturer's cost breakup.
- Pricing requests have no amount.

### How Revenue Is Calculated

**Total revenue** adds up the CAD and manufacturer orders only. Pricing requests, subscriptions, licences and clients' own sales are never included.

1. Each order's amount is the per-unit amount from the email multiplied by the quantity.
2. The amount is converted from the order's currency to TCC Tech's base currency at the order's own exchange rate.
3. Some orders are left out. They are counted in the **excluded** tag:

| Reason | When an order is left out |
| ------ | ------------------------- |
| **without revenue status** | The client's order is **Returned**, **Failed** or **Cancelled**. |
| **without amount** | The email had no price. |
| **duplicate** | The same product was already counted for the same request type, for example when it was sent to more than one TCC Tech manufacturer. Only the first send is counted. |

### Search, Filters and Paging

- The search covers every request of the selected tab, not just the current page. A new search returns you to page 1.
- The **Filter** boxes under the column headings only narrow the rows already on the current page. **Sent Date** and the amount columns match the text as shown, for example *18 Nov 2026* or *$3,768*.
- Each tab has its own search, paging and filters. They reset when you switch tabs.

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the summary | Grey placeholders in the four cards. |
| The summary cannot be loaded | The cards are hidden and an error message explains why. The tabs still work. |
| Loading a list | The table shows a loading indicator. |
| No requests match | **No records to display** |
| Loading a request | Grey placeholder blocks in the shape of the cards. |
| A request cannot be loaded | *Could not load this request* with the reason (or *No details were returned for this request.*) and a **Try again** button. |
| The product image cannot be loaded | A photo placeholder is shown instead. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Enquiry uses it |
| ------ | ------------------- |
| [Orders](./order-management/orders.md) | Every request is sent from an order's **Manufacturing Option Comparison**. The order number, order date, store and status come from the client's order. |
| [Manufacturer Charges](./order-management/manufacturer-charges.md) | TCC Tech's own manufacturer templates decide which manufacturers count as TCC Tech's, and their email addresses receive manufacturer orders. A client's own templates are not included. |
| [Email Template](./settings/email-template.md) | Requests are sent as emails. Every request's details are read back from the record of the email that was sent. |
| [Stores](./roles-permission/stores.md) | Supplies the store name shown under the client. |
| [Multi Currency](./settings/multi-currency.md) | Amounts are in the order's currency. Revenue is converted at the order's exchange rate. |
| Client companies (super admin client management) | Supplies the client's company name, key, contact name, email and phone, and TCC Tech's base currency and company email. |

### Modules That Depend On It

None. No other page reads enquiries.

### What Changes If…

| Change | Effect on Enquiry |
| ------ | ----------------- |
| A client sends a CAD request, manufacturer order or price request | A new row appears, or for CAD the existing row is updated, once the email is sent. The summary counts go up. |
| A client's order is marked **Returned**, **Failed** or **Cancelled** | Its CAD or manufacturer order stays in the list but is no longer counted in revenue. It moves to the **excluded** tag. |
| The order or product is edited after sending | The request still shows what was emailed. |
| A client's company name, contact details or store name change | The new values show on existing requests. |
| A TCC Tech manufacturer is renamed in Manufacturer Charges | Manufacturer orders show the new name. Pricing requests keep the name from the email. |
| The request email fails for every recipient | Nothing appears here. The client sees an error on the order and can try again. |

---

## Edge Cases / Notes

- **Request numbers.** CAD and manufacturer order numbers are their own record numbers. A pricing request's number is the number of the first email sent for it.
- **One send, several emails.** A pricing request is emailed to each recipient separately. Emails for the same product sent within two minutes of each other count as one request. Asking again later creates a new request.
- **Failed recipients.** A pricing request shows **Failed recipients** when the email could not be delivered to some addresses. It still counts as long as at least one address received it.
- **The Manufacturer column on pricing requests** shows the comparison column the client asked from. The request itself always goes to TCC Tech's manufacturer.
- **CAD price not set.** When TCC Tech's CAD price is not configured, the CAD request is still sent, but its amount shows **n/a** and it is excluded from revenue as *without amount*.
- **Older requests.** A request emailed before the currency was included in the cost note has no currency. Its amount still shows as it was written in the email.
- **No company or date filter.** You cannot filter the lists or summary by client or by date on this page. Use the search to find one client's requests.
- **Amounts are per unit.** The **CAD Design** and **Landed Cost** columns show the per-unit amount. Revenue multiplies it by the quantity.
