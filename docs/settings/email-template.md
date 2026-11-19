---
sidebar_position: 11
id: email-template
title: Email Template
sidebar_label: Email Template
---

# Email Template

## Overview

**Email Templates** holds the templates the platform uses for its emails, such as order confirmations, password resets, subscription notices and manufacturing order requests. You design a template visually with blocks, save it with a name, a subject and the mail types it is for, and reopen it later to change it.

When the system sends an email of a given mail type, it uses the active template that has that mail type.

:::note[Who can use it]
Email templates are shared by every client. Only a **Super Admin** of the TCC Tech company can list, create, change or delete them. Within the page, creating a template uses **Add** permission, changing one uses **Edit** permission and the bin icon needs **Delete** permission.
:::

---

## Data Displayed

### Email Template Screen

When the page opens, it shows **Design Your First Email** (*To get started on your first campaign, just select a template, update its content, and your email is ready to go.*) with two cards.

| Card | Description |
| ---- | ----------- |
| **Empty Email** | *Create an email from scratch by using Blocks.* Opens the email designer with a blank page. |
| **My Templates** | *Edit and use any of our Pre-built templates.* Opens the grid of saved templates. |

After you pick a card, use **Back** to return to the two cards.

### My Templates Grid

Each tile shows the email as it will look, with the template name on a button underneath.

| Action | Description |
| ------ | ----------- |
| **Preview** | Hover over a tile and the name button changes to **Preview**. Click it to open the template in the designer. |
| **Back to Templates** | Returns from the designer to the grid. |
| Bin icon | At the top right of a tile. Click it, then **YES** in the **Are you Sure?** popup to delete the template, or **NO** to keep it. The message *Record deleted successfully* appears. |

### Template Details Popup

Clicking **Export HTML** under the designer opens the **Enter Template Name and Subject** popup.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Template Name** | ✅ | The name shown on the tile. Shows *Template Name is required* when empty. |
| **Subject** | ✅ | The email subject line. Shows *Subject is required* when empty. |
| **Select Mail Type** | - | One or more mail types the template is used for. See [Mail Types](#mail-types). |

| Button | Description |
| ------ | ----------- |
| **Cancel** | Closes the popup without saving. |
| **Save** | Saves the template. The message *Template created successfully.* or *Template updated successfully.* appears. |

Without the matching **Add** or **Edit** permission, the three fields and **Save** are disabled.

### Mail Types

The **Select Mail Type** list offers these mail types:

**AdminAppointment**, **AdminProductInquiry**, **CataloguesNewOrderReceivedAdmin**, **CataloguesNewOrderReceivedUser**, **configuratorOtp**, **CustomerAppointment**, **CustomerProductInquiry**, **CustomerOtp**, **NewOrderReceivedAdmin**, **ResetPassword**, **Registration**, **AdminChangeOrderStatus**, **UserOrderPurchase**, **DailyCartWishlistReport**, **DiamondSyncEmailTemplate**, **SkuGeneratorEmailTemplate**, **ExploreProductsfromYourSelectedDiamondGroup**, **SubscriptionCheckoutLink**, **ExportProduct**, **ClientPromotionStatus**, **SubscriptionExpiryReminder** and **ClientAccountCredentials**.

Some emails use mail types that are set on their pre-built templates but are not in this list. See [Edge Cases / Notes](#edge-cases--notes).

---

## How It Works

### Steps to Design a New Email

1. Click **Empty Email**.
2. Build the email in the designer by adding and arranging blocks.
3. Click **Export HTML**. The **Enter Template Name and Subject** popup opens.
4. Enter the **Template Name** and **Subject**, and pick the mail types in **Select Mail Type**.
5. Click **Save**.

### Steps to Edit a Template

1. Click **My Templates**.
2. Hover over the template and click **Preview**. It opens in the designer.
3. Change the blocks, then click **Export HTML**.
4. Update **Template Name**, **Subject** or **Select Mail Type** and click **Save**. The existing template is updated.
5. Click **Back to Templates** to return to the grid.

A pre-built template saved as plain HTML opens in the designer as a single HTML block.

### How a Template Is Chosen When an Email Is Sent

1. The system looks for the active template whose mail types include the email's type.
2. The template's subject and body are used for the email, with the details of the email (such as the order or the customer) filled in.
3. If no active template has that mail type, the email is not sent and the failure is recorded in the email log.

### One Template per Mail Type

- A mail type can belong to only one template. When you add a mail type to a template, it is removed from any other template that had it.
- You cannot take a mail type off a template unless it is on another template. The save is refused with *To proceed, please assign this mail type to a different template first*.
- A template that still has mail types cannot be deleted. The same message is shown. Move its mail types to other templates first.

### Loading and Empty States

| State | What you see |
| ----- | ------------ |
| Loading the grid | A loading spinner. |
| No templates | *No templates found.* |
| A template cannot be opened in the designer | *Error while loading template* |

---

## Dependencies and Impact

### Modules It Depends On

None. Templates are managed only here.

### Modules That Depend On It

| Module | Mail types it sends |
| ------ | ------------------- |
| Storefront orders and payments | **UserOrderPurchase** to the customer and **NewOrderReceivedAdmin** to the store, when an order is paid. |
| [Orders](../order-management/orders.md) | **AdminChangeOrderStatus** when an order status changes. The **Manufacturing Option Comparison** sends manufacturing and CAD orders with the *ManufacturingOrderRequest* template and price requests with the *BenchmarkPriceRequest* template. |
| [Enquiry](../enquiry.md) | Reads every request's details back from the emails sent with the *ManufacturingOrderRequest* and *BenchmarkPriceRequest* templates. |
| Sign-in and password reset | **ResetPassword** and **CustomerOtp**. |
| [Cart Products](../sales-funnel/cart-products.md) and [Wishlist Products](../sales-funnel/wishlist-products.md) | **DailyCartWishlistReport**, a daily report. |
| Product exports | **ExportProduct** when a product export is ready. |
| [Diamond Group Master](../product-management/diamond-group-master.md) | **ExploreProductsfromYourSelectedDiamondGroup**. |
| [Subscription](../subscription.md) and client onboarding | **SubscriptionCheckoutLink**, **SubscriptionExpiryReminder**, **ClientAccountCredentials** and the subscription notice templates (welcome, plan changed, payment received, renewal upcoming, payment failed). |
| [User Management](../roles-permission/user-management.md) | An email to a store user when their PIN or sign-in email changes. |
| Store orders | An email to the company's administrator when a store user places an order. |
| [Invoice Template](./invoice-template.md) | Shares the same designer and template rules. |

### What Changes If…

| Change | Effect |
| ------ | ------ |
| A template's design or subject is changed | Every email of its mail types, for every client, uses the new version from then on. Emails already sent do not change. |
| A mail type is moved to another template | Emails of that type use the other template from then on. |
| No active template has a mail type | Emails of that type are not sent. |
| The *ManufacturingOrderRequest* or *BenchmarkPriceRequest* template is changed | New manufacturing orders, CAD orders and price requests are emailed with the new version. Requests already sent keep the email they were sent with. |

---

## Edge Cases / Notes

- **Shared by every client.** There is one set of templates for the whole platform. A change affects the emails of every store.
- **Mail types not in the list.** Some templates use mail types that **Select Mail Type** does not offer, for example the manufacturing order, price request, store PIN and subscription notice templates. Their mail types are kept when you save the template, but they do not show as names in the list. Do not delete these templates.
- **No Help button.** The page has no **View Documentation** button. Open this page from the documentation menu.
- **No status switch.** The page has no way to switch a template off. To stop a template being used, move its mail types to another template.
