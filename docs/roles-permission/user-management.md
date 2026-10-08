---
sidebar_position: 2
id: user-management
title: User Management
sidebar_label: User Management
---

# User Management

The **User List** page stores the details of users who can access the admin panel. You can add users, assign each one a role and a store, and activate or deactivate them.

---

## User List Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Use the search box to find users. The list updates as you type; clear the box to show all users again. |
| **Add New User** | Click the **Add New User** button to create a user. |
| **Edit** | Click the **Edit** icon to change a user's name, phone number, role, store or PIN. |
| **Delete** | Click the **Delete** icon and confirm with **YES** to remove a user. Click **NO** to cancel. |
| **Status** | Shows whether the user is **Active** or **Inactive**. |
| **Status Toggle** | Switch a user on or off directly from the list. |

The list shows each user's **Role**, **Name**, **Email**, **Phone Number** and **Status**. It can be sorted (except by **Role**) and paged.

:::note
**Add New User** is disabled for users without **Add** permission. The **Edit** icon and the **Status Toggle** are disabled without **Edit** permission, and the **Delete** icon is disabled without **Delete** permission.
:::

---

### Steps to Add a New User

Click **Add New User**, fill in the fields below and click **Submit**. Click **Cancel** to close without saving.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Name** | ✅ | User's full name. |
| **Email** | ✅ | A valid email address. Used to sign in. |
| **Phone Number** | ✅ | Exactly 10 digits. |
| **Password** | ✅ | At least 8 characters, with at least one uppercase letter, one lowercase letter, one number and one special character (@ $ ! % * ? &). Only these special characters are allowed. |
| **Confirm Password** | ✅ | Must match the password. |
| **Select Role** | ✅ | Choose one of the roles created on the [Roles](./roles.md) page. |
| **Select Store** | ✅ | Choose the store the user belongs to. Stores are created on the [Stores](./stores.md) page. |
| **PIN** | ✅ | Exactly 4 digits. |

---

### Edit a User

When editing, the drawer shows **Name**, **Phone Number**, **Select Role**, **Select Store** and **PIN (leave blank to keep)**. **Email**, **Password** and **Confirm Password** are not shown and cannot be changed here.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **PIN (leave blank to keep)** | - | Leave it empty to keep the current PIN, or enter a new 4-digit PIN. |

All other fields follow the same rules as when adding a user.
