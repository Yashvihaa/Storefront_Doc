---
sidebar_position: 4
id: store-master
title: Store Master
sidebar_label: Store Master
---

# Store Master

**Store Master** manages your store branches and the contact details shown to customers: branch name, phone number, opening hours, map link and address.

:::note
Store Master is not the same as the [Stores](../roles-permission/stores.md) page under Roles & Permission. See [Store Master vs Stores](#store-master-vs-stores).
:::

---

## Store Master Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Use the search box to find stores. The list updates shortly after you stop typing; clear the box to show all stores again. |
| **Add Store** | Click the **Add Store** button to create a new store branch. |
| **Edit** | Click the **Edit** icon to change a store's details. |
| **Delete** | Click the **Delete** icon and confirm with **YES** to remove a store. Click **NO** to keep it. |
| **Status** | Shows whether the store is **Active** or **Inactive**. |
| **Status Toggle** | Switch a store on or off directly from the list. |

The list shows the **Branch Name**, **Address**, **Created Date** and **Status** of each store, and can be sorted and paged.

:::note
The **Add Store** button is disabled for users without **Add** permission. The **Edit** icon and the status toggle need **Edit** permission, and the **Delete** icon needs **Delete** permission.
:::

---

### Steps to Add a New Store

Click **Add Store**, fill in the fields below and click **SUBMIT**. When editing, the button reads **EDIT**. Click **Cancel** to close without saving.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Branch Name** | ✅ | Name of the store or branch, for example Mumbai Showroom. |
| **Country Code** | ✅ | Phone country code. The list shows the **Country Code** of every active country in [Country](./country.md). The first code is selected for you. |
| **Phone number** | ✅ | Store contact number. Numbers only, with no spaces or symbols. |
| **Timing** | - | Opening hours. Hover over the info icon next to the label to see an example format: 10:30 AM - 9:30 PM Mon to Sat. |
| **Map Link** | ✅ | Link that opens the store location in a map, for example a Google Maps link. |
| **Address** | ✅ | Full store address. Supports multiple lines. |

The phone number is saved together with the country code, for example **+91 9876543210**. When you edit a store, the code and number are split back into the two fields.

:::tip
If the **Country Code** field is empty when you edit a store, the saved code did not start with **+**. Select the code again and remove any code from the **Phone number** field before you click **EDIT**.
:::

---

## Store Master vs Stores

Both pages manage stores, but they keep separate lists and are used for different things. A store added on one page does not appear on the other.

| | **Store Master** | **Stores** (Roles & Permission) |
| - | ---------------- | ------------------------------- |
| **Purpose** | Branch details shown to customers. | Internal store locations that admin users are assigned to. |
| **Used by** | The storefront branch and contact information. | The **Select Store** field when you add a user in User Management. |
| **Fields** | Branch Name, Country Code, Phone number, Timing, Map Link, Address. | Store Name, Store Code, City, Phone Number, Address, Description. |
| **Required fields** | Branch Name, Country Code, Phone number, Map Link, Address. | Store Name only. |
| **List columns** | Branch Name, Address, Created Date, Status. | Store Name, Store Code, City, Phone Number, Address, Status. |

Use **Store Master** to publish where customers can find you and how to contact each branch. Use **Stores** to organize your admin team by location.
