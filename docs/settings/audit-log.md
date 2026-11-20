---
sidebar_position: 7
id: audit-log
title: Audit Logs
sidebar_label: Audit Logs
---

# Audit Logs

## Overview

**Audit Logs** shows who changed what, and when, in your admin panel. Each record lists the type of activity, the kind of record it affected, the user who made the change and the time, with the full change details one click away.

The page is read-only. You can filter and read records, but you cannot add, edit or delete them. Use it to answer questions such as who changed a margin, when an order status was updated or who uploaded a product file.

:::note[Who can use it]
Your role needs access to the page. Each client sees only its own records.
:::

---

## Data Displayed

### Audit Logs Screen List

| Action | Description |
| ------ | ----------- |
| **Start Date** | The first day of the date range. Set to today when the page opens. |
| **End Date** | The last day of the date range. Set to today when the page opens. |
| **Search** | Shows the records in the chosen date range. Changing a date does nothing until you click **Search**. |
| **Clear Dates** | Clears both dates and shows the records from 1 January of the current year to today. |
| **Filter** | Shows or hides a filter box under each column heading, so you can narrow the records on the current page by typing in a column. |
| **View Details** | Click **View Details** in the **Change Logs** column to open the **Change Logs Details** popup. See [Change Logs Details](#change-logs-details). |
| **View Documentation** | Opens this page. |

### Audit Logs List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Activity Type** | Text | The kind of action. See [Activity Types](#activity-types). Hover to see it in full. | **UPDATE** |
| **Resource Affected** | Text | The kind of record that changed. Hover to see its full name. | *Product Margin* |
| **User** | Text | The username of the person who made the change, or **-** when none is recorded. | *rahul.mehta* |
| **Time Stamp** | Date and time | When the change was made. | 08 Oct 2026, 10:45 AM |
| **Change Logs** | Link | **View Details**. | - |

The list is sorted with the newest record first. The columns cannot be sorted. The list is paged, 50 records per page by default. Use the paging controls at the bottom to move between pages or to show 25, 50, 75 or 100 records per page.

### Activity Types

| Shown as | Recorded for |
| -------- | ------------ |
| **INSERT** | A record was added, or a customer registered. |
| **UPDATE** | A record was edited, its status was switched, or settings such as colors, fonts, logo or order status were changed. |
| **DELETE** | A record was deleted. |
| **Bulk Upload** | A file of records was uploaded. |
| **Stripe Event**, **Razorpay Event**, **PayPal Event** | A payment gateway sent an update. |

### Change Logs Details

Click **View Details** on a record to open the **Change Logs Details** popup. The top of the popup shows:

| Field | Description | Example |
| ----- | ----------- | ------- |
| **Activity Type** | The kind of action. | **UPDATE** |
| **User** | The username of the person who made the change. | *rahul.mehta* |
| **Log Type** | The kind of record that changed. | *Product Margin* |
| **Date** | The date and time, in month-day-year order. | 10-08-2026 10:45 AM |
| **Reference** | Details that identify the changed record, one label and value per line, or **-**. | **Title:** Ring retail margin |

Below this, **The Following Changes Have Been Made:** lists each changed field:

- A field that had a value shows **was changed from** the old value **to** the new value.
- A field that was empty before shows **set to** the new value.
- Changes inside a group of settings are listed under the group's name.
- Long text values are shown as plain text, without formatting.

Click the close icon to close the popup.

---

## How It Works

### Where Records Come From

A record is written automatically when an admin adds, edits, deletes or switches the status of a record, uploads a file, or changes a setting. This covers the masters, products, the margin and pricing settings, labour, tariff, tax, rounding, currencies, offers, orders, roles, users, stores, themes, web settings, company info and configurator settings. Payment gateway updates are recorded too. Nobody creates records by hand.

Each record stores the old and new values of the fields that changed, the user and the time. A change where nothing actually changed is not listed.

### Dates and Paging

- The date range includes both the start and the end day.
- The range covers all your records, not just the current page. **Search** and **Clear Dates** return you to page 1.
- The **Filter** boxes only narrow the records already on the current page.

### Loading and Empty States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No records in the range | **No records to display** |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Audit Logs uses it |
| ------ | ---------------------- |
| Every admin module that changes data | Each add, edit, delete, status change and upload writes a record. For example [Product Margin](./margin-cost-center/product-margin.md), [Rounding](./margin-cost-center/rounding.md), [Metal Rate Settings](./metal-rate-setting.md), [Tax Master](./tax-master.md), [Multi Currency](./multi-currency.md), [Orders](../order-management/orders.md) and [All Products](../product-management/all-products.md). |
| [User Management](../roles-permission/user-management.md) | Supplies the username shown in **User**. |

### Modules That Depend On It

None. No other page reads audit logs, and nothing in the admin panel or on the storefront changes based on them.

[Error Logs](../error-logs.md) is the closely related TCC super admin list of requests that **failed**. Audit Logs lists changes that **succeeded**. See the tip at the end of this page.

### What Changes If…

| Change | Effect on Audit Logs |
| ------ | -------------------- |
| An admin changes a setting or record | A new record appears with the old and new values. |
| A user is renamed | The **User** column shows the current username, also on older records. |
| A user is removed | Older records may show **-** in **User**. |

---

## Edge Cases / Notes

- **Today only by default.** When the page opens, it shows only today's records. Pick a wider range and click **Search** to see older ones.
- **Clear Dates is not "all time".** Without dates, the list covers 1 January of the current year to today. To see earlier records, set the dates and click **Search**.
- **Sign-in and OTP activity is hidden.** Sign-ins, OTP checks and similar account security events are not listed.
- **Template changes are not listed.** Changes to [Email Template](./email-template.md) and [Invoice Template](./invoice-template.md) are shared by every client and are not shown here.
- **No search box.** You cannot search by text. Narrow the list with the dates, then use the **Filter** boxes on the current page.
- **Values are shown as saved.** Field names are made readable, but values are shown exactly as saved, so some appear as system values, for example *percentage* or *RING_CONFIGURATOR*.

:::tip
When a client says a change did not save, look for it here first. If there is no record, a TCC super admin can check [Error Logs](../error-logs.md) for the failed request and the reason it failed.
:::
