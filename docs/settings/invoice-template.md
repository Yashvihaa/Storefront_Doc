---
sidebar_position: 12
id: invoice-template
title: Invoice Template
sidebar_label: Invoice Template
---

# Invoice Template

## Overview

**Invoice Templates** holds the templates used for invoices, such as the PDF invoice attached to an order confirmation email. You design a template visually with blocks, save it with a name, a subject and the invoice types it is for, and reopen it later to change it.

It works the same way as [Email Template](./email-template.md). Invoice templates are kept separately from email templates.

:::note[Who can use it]
Invoice templates are shared by every client. Only a **Super Admin** of the TCC Tech company can list, create, change or delete them. Within the page, creating a template uses **Add** permission, changing one uses **Edit** permission and the bin icon needs **Delete** permission.
:::

---

## Data Displayed

### Invoice Template Screen

When the page opens, it shows **Design Your First Invoice** with two cards.

| Card | Description |
| ---- | ----------- |
| **Empty Invoice** | *Create an Invoice from scratch by using Blocks.* Opens the designer with a blank page. |
| **Pre-built Templates** | *Edit and use any of our Pre-built templates.* Opens the grid of saved invoice templates. |

After you pick a card, use **Back** to return to the two cards.

### Pre-built Templates Grid

Each tile shows the invoice as it will look, with the template name on a button underneath.

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
| **Subject** | ✅ | Shows *Subject is required* when empty. |
| **Select Mail Type** | - | One or more invoice types: **EmailAttachmentInvoice** and **TaxInvoice**. |

| Button | Description |
| ------ | ----------- |
| **Cancel** | Closes the popup without saving. |
| **Save** | Saves the template. The message *Template created successfully.* or *Template updated successfully.* appears. |

Without the matching **Add** or **Edit** permission, the three fields and **Save** are disabled.

### Invoice Types

| Type | Used for |
| ---- | -------- |
| **EmailAttachmentInvoice** | The PDF invoice attached to the order confirmation email sent to the customer when an order is paid. |
| **TaxInvoice** | Can be assigned, but no part of the system uses it yet. |

---

## How It Works

### Steps to Design a New Invoice

1. Click **Empty Invoice**.
2. Build the invoice in the designer by adding and arranging blocks.
3. Click **Export HTML**. The **Enter Template Name and Subject** popup opens.
4. Enter the **Template Name** and **Subject**, and pick the invoice types in **Select Mail Type**.
5. Click **Save**.

### Steps to Edit an Invoice Template

1. Click **Pre-built Templates**.
2. Hover over the template and click **Preview**. It opens in the designer.
3. Change the blocks, then click **Export HTML**.
4. Update the details and click **Save**. The existing template is updated.
5. Click **Back to Templates** to return to the grid.

### One Template per Invoice Type

The rules are the same as for email templates:

- An invoice type can belong to only one template. Adding it to a template removes it from any other.
- You cannot take a type off a template unless it is on another template (*To proceed, please assign this mail type to a different template first*).
- A template that still has types cannot be deleted.

### Loading and Empty States

| State | What you see |
| ----- | ------------ |
| Loading the grid | A loading spinner. |
| No templates | *No templates found.* |
| A template cannot be opened in the designer | *Error while loading template* |

---

## Dependencies and Impact

### Modules It Depends On

None. Invoice templates are managed only here.

### Modules That Depend On It

| Module | How it uses Invoice Template |
| ------ | ---------------------------- |
| Storefront order confirmation | When an order is paid, the **EmailAttachmentInvoice** template is turned into a PDF invoice. The PDF is saved with the order's invoice and attached to the customer's order email. |
| [Email Template](./email-template.md) | The **UserOrderPurchase** email carries the invoice built from this template. |

### What Changes If…

| Change | Effect |
| ------ | ------ |
| The **EmailAttachmentInvoice** template is changed | Invoices attached to new order emails, for every client, use the new layout. Invoices already sent do not change. |
| **EmailAttachmentInvoice** is moved to another template | New order emails carry an invoice built from that template. |

---

## Edge Cases / Notes

- **Shared by every client.** There is one set of invoice templates for the whole platform.
- **Plain HTML templates.** Unlike email templates, an invoice template saved without a designer layout (for example a pre-built HTML template) is not converted when you open it. The designer opens blank or shows *Error while loading template*. Saving from there replaces the template's content, so check the tile preview before you save.
- **Not the admin invoice preview.** The invoice you open from an order in [Orders](../order-management/orders.md) is built by the admin panel itself, not from these templates.
- **No Help button.** The page has no **View Documentation** button. Open this page from the documentation menu.
