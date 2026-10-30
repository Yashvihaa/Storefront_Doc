---
sidebar_position: 7
id: audit-log
title: Audit Logs
sidebar_label: Audit Logs
---

# Audit Logs

**Audit Logs** shows who changed what, and when, across the admin panel. Each record lists the type of activity, the record type it affected, the user who made the change and the time, with the full change details one click away.

The page is read-only: you can search and read records, but you cannot add, edit or delete them. Use it to answer questions such as who changed a setting, when an order status was updated or who uploaded a product file.

---

## Audit Logs Screen List

| Action | Description |
| ------ | ----------- |
| **Start Date** | First day of the date range. Set to today when the page opens. |
| **End Date** | Last day of the date range. Set to today when the page opens. |
| **Search** | Click to show the records in the selected date range. Changing a date does nothing until you click **Search**. |
| **Clear Dates** | Clears both dates and shows records for all dates. |
| **Filter** | Shows or hides a filter box under each column heading, so you can narrow the records on the current page by typing in a column. |
| **View Details** | In the **Change Logs** column, hover over **View Details** to see a quick list of changes, or click it to open the **Change Logs Details** popup. See [Change Logs Details](#change-logs-details). |

:::note
When the page opens, it shows only today's records. Pick a wider date range and click **Search**, or click **Clear Dates**, to see older records.
:::

### Audit Logs List Columns

| Column | Description |
| ------ | ----------- |
| **Activity Type** | Type of action, for example **INSERT**, **UPDATE**, **DELETE**, **LOGIN** or **Bulk Upload**. Payment gateway events appear as **Razorpay Event**, **PayPal Event** or **Stripe Event**. |
| **Resource Affected** | The kind of record that changed, for example **Product**, **Order**, **Metal Master** or **Tax**. Hover over the value to see its full name. |
| **User** | Username of the person who made the change. Shows **-** when no user is recorded. |
| **Time Stamp** | Date and time of the change, for example 08 Oct 2026, 10:45 AM. |
| **Change Logs** | Click **View Details** to see exactly what changed. |

The columns cannot be sorted. The list is paged, 50 records per page by default. Use the paging controls at the bottom of the list to move between pages or to show 25, 50, 75 or 100 records per page.

:::tip
The quick list that appears when you hover over **View Details** shows each changed field as *field : old value → new value*. A field that had no value before shows **Null** as the old value.
:::

---

## Change Logs Details

Click **View Details** on a record to open the **Change Logs Details** popup. The top of the popup shows:

| Field | Description |
| ----- | ----------- |
| **Activity Type** | Type of action. |
| **User** | Username of the person who made the change. |
| **Log Type** | The kind of record that changed. |
| **Date** | Date and time of the change, in month-day-year order, for example 10-08-2026 10:45 AM. |
| **Reference** | Details that identify the changed record, shown as a label and value for each detail. Shows **-** when there are none. |

Below this, **The Following Changes Have Been Made:** lists each changed field.

- A field that already had a value shows **was changed from** the old value **to** the new value.
- A field that was empty before shows **set to** the new value.
- Changes made inside a group of settings are listed under that group's name.
- Long text values are shown as plain text, without formatting.

Click the close icon to close the popup.
