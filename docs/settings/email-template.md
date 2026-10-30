---
sidebar_position: 11
id: email-template
title: Email Template
sidebar_label: Email Template
---

# Email Template

The **Email Template** page lets you design the emails your store sends, such as order, enquiry, appointment and password emails. You build the layout visually with blocks, save it with a name, a subject and the mail types it is for, and reopen it later to change it.

---

## Email Template Screen

When the page opens, it shows **Design Your First Email** with two cards.

| Card | Description |
| ---- | ----------- |
| **Empty Email** | Create an email from scratch by using blocks. Opens the email designer with a blank page. |
| **My Templates** | Edit and use any of our pre-built templates. Opens the list of saved templates. |

After you pick a card, use the **Back** button at the top to return to the two cards.

---

## Design a New Email

1. Click **Empty Email**.
2. Build the email in the designer by adding and arranging blocks.
3. Click **Export HTML** below the designer. The **Enter Template Name and Subject** popup opens.
4. Fill in the fields below and click **Save**. Click **Cancel** to close the popup without saving.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Template Name** | ✅ | Name that identifies the template in **My Templates**. Shows "Template Name is required" when empty. |
| **Subject** | ✅ | Subject line of the email. Shows "Subject is required" when empty. |
| **Select Mail Type** | - | One or more mail types the template is meant for. You can select several. See [Mail types](#mail-types). |

When the save succeeds, the system shows its own confirmation message.

---

## My Templates

The **My Templates** card opens a grid of saved templates. Each tile shows the email as it will look, with the template name on a button underneath. If there are none, the page shows "No templates found."

| Action | Description |
| ------ | ----------- |
| **Preview** | Hover over a tile; the name button changes to **Preview**. Click it to open the template in the designer. |
| **Edit and save** | In the designer, change the blocks, click **Export HTML**, update **Template Name**, **Subject** or **Select Mail Type**, and click **Save**. The existing template is updated. |
| **Back to Templates** | Returns from the designer to the grid. |
| **Delete** | Click the bin icon at the top right of a tile. In the **Are you Sure?** popup, click **YES** to delete the template or **NO** to keep it. |

:::note Permissions
Creating a template (**Empty Email**) uses **Add** permission, and changing a saved template uses **Edit** permission. Without the matching permission, the **Template Name**, **Subject** and **Select Mail Type** fields and the **Save** button are disabled. The bin icon is disabled without **Delete** permission.
:::

---

## Mail types

The **Select Mail Type** list offers these mail types:

**AdminAppointment**, **AdminProductInquiry**, **CataloguesNewOrderReceivedAdmin**, **CataloguesNewOrderReceivedUser**, **configuratorOtp**, **CustomerAppointment**, **CustomerProductInquiry**, **CustomerOtp**, **NewOrderReceivedAdmin**, **ResetPassword**, **Registration**, **AdminChangeOrderStatus**, **UserOrderPurchase**, **DailyCartWishlistReport**, **DiamondSyncEmailTemplate**, **SkuGeneratorEmailTemplate**, **ExploreProductsfromYourSelectedDiamondGroup**, **SubscriptionCheckoutLink**, **ExportProduct**, **ClientPromotionStatus**, **SubscriptionExpiryReminder** and **ClientAccountCredentials**.
