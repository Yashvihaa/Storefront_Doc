---
sidebar_position: 7
id: audit-log
title: Audit Logs
sidebar_label: Audit Logs
---

# Audit Logs

**Audit Logs** shows who changed what, and when, across the admin panel. Each record lists the type of activity, the record type it affected, the user who made the change and the time, with the full change details one click away. The page is read-only.

---

## Audit Logs Screen List

| Action | Description |
| ------ | ----------- |
| **Start Date** | First day of the date range. Set to today when the page opens. |
| **End Date** | Last day of the date range. Set to today when the page opens. |
| **Search** | Click to show the records in the selected date range. |
| **Clear Dates** | Clears both dates and shows records for all dates. |
| **View Details** | In the **Change Logs** column, hover over **View Details** to see a quick list of changes, or click it to open the **Change Logs Details** popup. See [Change Logs Details](#change-logs-details). |

:::note
When the page opens, it shows only today's records. Pick a wider date range and click **Search**, or click **Clear Dates**, to see older records.
:::

### Audit Logs List Columns

| Column | Description |
| ------ | ----------- |
| **Activity Type** | Type of action, for example **INSERT**, **UPDATE**, **DELETE**, **LOGIN** or **Bulk Upload**. |
| **Resource Affected** | The kind of record that changed, for example a product, an order or a metal master record. Hover over the value to see its full name. |
| **User** | Username of the person who made the change. |
| **Time Stamp** | Date and time of the change, for example 08 Oct 2026, 10:45 AM. |
| **Change Logs** | Click **View Details** to see exactly what changed. |

The list can be paged.

---

## Change Logs Details

Click **View Details** on a record to open the **Change Logs Details** popup. The top of the popup shows:

| Field | Description |
| ----- | ----------- |
| **Activity Type** | Type of action. |
| **User** | Username of the person who made the change. |
| **Log Type** | The kind of record that changed. |
| **Date** | Date of the change. |
| **Reference** | Details that identify the changed record. |

Below this, **The Following Changes Have Been Made:** lists each changed field. A field that already had a value shows **was changed from** the old value **to** the new value. A field that was empty before shows **set to** the new value. Click the close icon to close the popup.
