---
sidebar_position: 3
id: stores
title: Stores
sidebar_label: Stores
---

# Stores

## Overview

**Stores** lists your company's store locations. You can add, view, edit, switch off and delete stores.

Every admin user belongs to one store, picked on [User Management](./user-management.md). Orders placed by a user belong to that user's store. How many stores you can have depends on the user licences you hold on [Subscription & Billing](../subscription.md#users--licences).

:::note[Who can use it]
Anyone whose role has **View** on this page can open it. The buttons on this page are not switched off by a role's **Add**, **Edit** or **Delete** settings, so anyone who can open the page can use all of them. Give a role access to this page only where that is intended.
:::

---

## Data Displayed

### Stores Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Type part of a store's name, code, address, city or phone number. The list refreshes once you pause typing and goes back to page 1. Clear the box to see every store again. |
| **Filter** | Shows or hides a filter box under each column heading, so you can narrow the stores on the current page by typing in a column. |
| **Add New Store** | Opens the **Add Store** drawer. |
| **View** | The eye icon (tooltip *View Details*). Opens the **View Store** drawer, read-only. |
| **Edit** | The pencil icon (tooltip *Edit Store*). Opens the **Edit Store** drawer. |
| **Delete** | The bin icon (tooltip *Delete Store*). Asks *Are you Sure You would like to delete ?*. Click **YES** to delete or **NO** to cancel. |
| **Status switch** | Switches the store on or off straight away (tooltip *Enable/Disable*). There is no confirmation. |
| **View Documentation** | Opens this page. |

### Stores List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Action** | - | The **View**, **Edit** and **Delete** icons. | - |
| **Store Name** | Text | The store's name. | *Downtown Store* |
| **Store Code** | Text | The store's short code. | *DT01* |
| **City** | Text | The city. | *Mumbai* |
| **Phone Number** | Text | The phone number, without the country code. | *9876543210* |
| **Address** | Text | The full address. | *12 MG Road, Fort* |
| **Status** | On / off | The status switch. | On |

The list shows active and inactive stores, newest first, 50 per page. The columns cannot be sorted. Use the paging controls at the bottom to move between pages or change how many rows are shown.

### Store Fields

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Store Name** | ✅ | The store's name. A name made only of spaces is not accepted. Message: *Store Name is required*. |
| **Store Code** | - | A short code for the store. Must be unique among your stores. |
| **City** | - | The city. Free text. |
| **Phone Number** | - | A country code picker (starts on **+91**; type a country name, code or dial code to search) and the number. The number takes digits only, up to the longest number for that country. |
| **Address** | - | The full address. Several lines. |

Spaces at the start and end of each field are removed when you save.

---

## How It Works

### Steps to Add a New Store

1. Click **Add New Store**.
2. Fill in the fields above.
3. Click **Add Store**. Click **Cancel** or the close icon to leave without saving.

The message **Store added successfully** confirms it. The new store is active and can be picked in **Select Store** on [User Management](./user-management.md).

### Steps to View a Store

1. Click the **View** icon on the store's row.
2. The **View Store** drawer shows the saved details, greyed out. There is no save button.
3. Click **Close**.

### Steps to Edit a Store

1. Click the **Edit** icon on the store's row. The **Edit Store** drawer opens with the store's saved details.
2. Change what you need.
3. Click **Save Store**.

The message **Store updated successfully** confirms it.

### Steps to Activate or Deactivate a Store

1. Click the status switch on the store's row.
2. The change saves at once. The message **Store status updated successfully** confirms it.

An inactive store can no longer be given to a new user.

### Steps to Delete a Store

1. Click the **Delete** icon on the store's row.
2. Click **YES** in the popup.

The message **Store deleted successfully** confirms it. Every user who belonged to the store is removed from it, and their store PIN goes with it. They can then be given another store.

### Main Store

Your company's main store is created when the company signs up. It cannot be edited, deleted or switched off. The buttons are still shown on its row, but the system refuses the change:

| Action | Message |
| ------ | ------- |
| **Save Store** | *The main store cannot be modified. Please contact your administrator if you need to make changes.* |
| **Delete** | *The main store cannot be deleted. Please contact your administrator if you need to make changes.* |
| Status switch | *The main store cannot be deactivated. Please contact your administrator if you need to make changes.* |

### Store Limit

Your company can have only as many stores (the main store included) as it has user licences. When you reach the limit, **Add Store** shows *Store limit reached: this company can have at most N stores.* Buy more licences on [Subscription & Billing](../subscription.md#users--licences) to add more stores.

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No stores match | **No records to display** |
| Save fails | An error message explains why, for example a duplicate store code. The drawer stays open. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Stores uses it |
| ------ | ------------------ |
| [Subscription & Billing](../subscription.md#users--licences) | The number of user licences sets how many stores you can have. |

### Modules That Depend On It

| Module | How it uses stores |
| ------ | ------------------ |
| [User Management](./user-management.md) | Every user is given a store in **Select Store**. The user's 4-digit PIN belongs to that store. |
| [Orders](../order-management/orders.md) | An order belongs to the store of the user who placed it. Pickup orders are picked up from a store. |
| [Subscription & Billing](../subscription.md#users--licences) | Licence cards show the store of the user who holds the licence. The **User Licences** card on **Overview** counts your stores. |
| [Enquiry](../enquiry.md) | Shows the store name under the client on each TCC Tech request. |
| [Audit Logs](../settings/audit-log.md) | Adding, editing, switching and deleting stores is recorded there. |

### What Changes If…

| Change | Effect |
| ------ | ------ |
| A store is renamed | The new name shows on User Management and on licence cards. |
| A store is switched off | It can no longer be picked for a new user. Users already in it keep it. |
| A store is deleted | Its users lose their store and PIN. They cannot place orders or have their PIN changed until they are given a store again. |
| Licences are removed on Subscription & Billing | You cannot add new stores until you are under the limit again. Existing stores stay. |

---

## Edge Cases / Notes

- **No permission checks.** **Add New Store**, **Edit**, **Delete** and the status switch are not limited by the role's **Add**, **Edit** or **Delete** settings.
- **Unique store code.** A store code already used by another of your stores is refused with *Store code already exists!*. A store can be saved without a code.
- **Delete cannot be undone.** A deleted store leaves the list, and its users must be given a new store.
- **User store list.** **Select Store** on User Management shows only the 10 most recently added stores, active and inactive.

:::tip
Before you delete a store, note which users belong to it. Afterwards they have no store, so they cannot place orders until they are given one.
:::
