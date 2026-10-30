---
sidebar_position: 12
id: invoice-template
title: Invoice Template
sidebar_label: Invoice Template
---

# Invoice Template

The **Invoice Template** page lets you design the invoice templates your store uses, such as the tax invoice and the invoice attached to an email. You build the layout visually with blocks, save it with a name, a subject and the mail types it is for, and reopen it later to change it. It works the same way as [Email Template](./email-template.md).

---

## Invoice Template Screen

When the page opens, it shows **Design Your First Invoice** with two cards.

| Card | Description |
| ---- | ----------- |
| **Empty Invoice** | Create an invoice from scratch by using blocks. Opens the designer with a blank page. |
| **Pre-built Templates** | Edit and use any of our pre-built templates. Opens the list of saved templates. |

After you pick a card, use the **Back** button at the top to return to the two cards.

---

## Design a New Invoice

1. Click **Empty Invoice**.
2. Build the invoice in the designer by adding and arranging blocks.
3. Click **Export HTML** below the designer. A popup opens for the template details.
4. Fill in the fields below and click **Save**. Click **Cancel** to close the popup without saving.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Template Name** | ✅ | Name that identifies the template in the list. Shows "Template Name is required" when empty. |
| **Subject** | ✅ | Subject line. Shows "Subject is required" when empty. |
| **Select Mail Type** | - | One or more mail types the template is meant for. You can select several. The options are **EmailAttachmentInvoice** and **TaxInvoice**. |

When the save succeeds, the system shows its own confirmation message.

---

## Pre-built Templates

The **Pre-built Templates** card opens a grid of saved templates. Each tile shows the invoice as it will look, with the template name on a button underneath. If there are none, the page shows "No templates found."

| Action | Description |
| ------ | ----------- |
| **Preview** | Hover over a tile; the name button changes to **Preview**. Click it to open the template in the designer. |
| **Edit and save** | In the designer, change the blocks, click **Export HTML**, update the details, and click **Save**. The existing template is updated. |
| **Back to Templates** | Returns from the designer to the grid. |
| **Delete** | Click the bin icon at the top right of a tile. In the **Are you Sure?** popup, click **YES** to delete the template or **NO** to keep it. |

:::note Permissions
Creating a template (**Empty Invoice**) uses **Add** permission, and changing a saved template uses **Edit** permission. Without the matching permission, the template fields and the **Save** button are disabled. The bin icon is disabled without **Delete** permission.
:::
