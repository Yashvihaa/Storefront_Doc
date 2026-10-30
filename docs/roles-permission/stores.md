---
sidebar_position: 3
id: stores
title: Stores
sidebar_label: Stores
---

# Stores

The **Stores** page manages your store locations. Each admin user is assigned to one of these stores on the [User Management](./user-management.md) page. The page description reads "Manage your store locations". The **View Documentation** button at the top opens this guide page in a new tab.

---

## Stores Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Use the search box to find stores. The list updates shortly after you stop typing; clear the box to show all stores again. |
| **Filter** | Shows or hides a filter box under each column heading so you can narrow the list further. |
| **Add New Store** | Click the **Add New Store** button to create a store. |
| **View** | Click the **View** icon (tooltip "View Details") to open the store's details in read-only mode. Click **Close** to leave. |
| **Edit** | Click the **Edit** icon (tooltip "Edit Store") to change a store's details. |
| **Delete** | Click the **Delete** icon (tooltip "Delete Store"). A popup asks "Are you Sure You would like to delete ?". Click **YES** to remove the store or **NO** to cancel. |
| **Status Toggle** | Switch a store on or off directly from the list (tooltip "Enable/Disable"). It saves straight away, with no confirmation popup. |

The list shows each store's **Store Name**, **Store Code**, **City**, **Phone Number**, **Address** and a status switch, and can be paged. The columns are not sortable.

:::note
The buttons on this page are not switched off by a role's **Add**, **Edit** or **Delete** settings. Anyone who can open the **Stores** page can use all of its buttons, so give the role **View** access to this page only where that is intended.
:::

---

### Steps to Add a New Store

Click **Add New Store**, fill in the fields below and click **Add Store**. Click **Cancel** to close without saving. On success the message "Store added successfully" appears.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Store Name** | ✅ | Name of the store. A name made only of spaces is not accepted. Message when empty: "Store Name is required". |
| **Store Code** | - | Short code for the store. |
| **City** | - | City where the store is located. Free text. |
| **Phone Number** | - | Store contact number. Free text, with no format check. |
| **Address** | - | Full store address. Supports multiple lines. |
| **Description** | - | Any extra notes about the store. Supports multiple lines. |

Leading and trailing spaces are removed from every field when you save.

---

### View, Edit and Delete a Store

- **View:** the drawer is titled **View Store**. All fields are greyed out and there is no save button, only **Close**.
- **Edit:** the drawer is titled **Edit Store** and opens with the store's saved details, loaded fresh from the system, with the same fields and rules as when adding. Change what you need and click **Save Store**. The message "Store updated successfully" appears.
- **Delete:** after you click **YES**, the message "Store deleted successfully" appears.
- **Status Toggle:** the message "Store status updated successfully" appears.

:::note
Stores are listed in the **Select Store** field when you add or edit a user.
:::
