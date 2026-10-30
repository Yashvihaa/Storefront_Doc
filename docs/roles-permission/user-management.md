---
sidebar_position: 2
id: user-management
title: User Management
sidebar_label: User Management
---

# User Management

The **User List** page stores the details of users who can access the admin panel. You can add users, assign each one a role and a store, and activate or deactivate them. The page description reads "Control what each team member can see and do". The **View Documentation** button at the top opens this guide page in a new tab.

---

## User List Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Use the search box to find users. The list updates shortly after you stop typing; clear the box to show all users again. |
| **Filter** | Shows or hides a filter box under each column heading so you can narrow the list further. |
| **Add New User** | Click the **Add New User** button to create a user. |
| **Edit** | Click the **Edit** icon (tooltip "Edit User") to change a user's name, phone number, role, store or PIN. |
| **Delete** | Click the **Delete** icon (tooltip "Delete User"). A popup asks "Are you Sure You would like to delete ?". Click **YES** to remove the user or **NO** to cancel. |
| **Status** | Shows whether the user is **Active** or **Inactive**. |
| **Status Toggle** | Switch a user on or off directly from the list (tooltip "Enable/Disable"). It saves straight away, with no confirmation popup. |

The list shows each user's **Role**, **Store**, **Name**, **Email**, **Phone Number** and **Status**. Inactive users are included in the list. It can be sorted (except by **Role** and **Store**) and paged.

:::note
**Add New User** is disabled for users without **Add** permission. The **Edit** icon and the **Status Toggle** are disabled without **Edit** permission, and the **Delete** icon is disabled without **Delete** permission.
:::

---

### Steps to Add a New User

Click **Add New User**, fill in the fields below and click **Add User**. Click **Cancel** to close without saving. The drawer is titled **Add New user**. On success the message "User added successfully" appears and the new user is created as **Active**.

Fields are checked when you move out of them, and the message appears in red under the field.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Name** | ✅ | User's full name. Message when empty: "Name is a required field". |
| **Email** | ✅ | A valid email address. Messages: "Email is a required field" when empty, or a message that the email must be valid. |
| **Phone Number** | ✅ | Exactly 10 digits. Numbers only. Message: "Please Enter 10 Digit Number". |
| **Password** | ✅ | At least 8 characters, with at least one uppercase letter, one lowercase letter, one number and one special character. Only these special characters are accepted: @ $ ! % * ? &. Any other character, such as # or a space, is rejected with the message "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character". The password is shown as you type. |
| **Confirm Password** | ✅ | Must match the password. Messages: "Confirm Password is a required field" or "Passwords must match". |
| **Select Role** | ✅ | Click one of the roles created on the [Roles](./roles.md) page. Message: "Role is a required field". |
| **Select Store** | ✅ | Click the store the user belongs to. Stores are created on the [Stores](./stores.md) page. Message: "Store is a required field". |
| **PIN** | ✅ | Exactly 4 digits. Numbers only; the field accepts no more than 4 characters. The digits are hidden; click the eye icon to show or hide them. Messages: "PIN is a required field" or "PIN must be 4 digits". |

The role and store lists are loaded fresh each time the drawer opens, so a role or store you just created is available straight away.

---

### Edit a User

Click the **Edit** icon on a user. The drawer is titled **Edit New user** and shows a loading placeholder until the user's details, the roles and the stores have loaded. The **Save User** button stays disabled until then.

The drawer shows **Name**, **Phone Number**, **Select Role**, **Select Store** and **PIN**, filled in with the user's current details. **Email**, **Password** and **Confirm Password** are not shown and cannot be changed here. Change what you need and click **Save User**. On success the message "User updated successfully" appears.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **PIN** | - | Shows the user's current PIN, hidden. Leave it as it is, or clear it, to keep the current PIN. Enter a new 4-digit PIN to change it. Message if the value is not 4 digits: "PIN must be 4 digits". |

All other fields follow the same rules as when adding a user.

---

## Activate, Deactivate or Delete a User

- Use the **Status Toggle** on the row to activate or deactivate a user. The message "User status updated successfully" appears.
- Use the **Delete** icon and confirm with **YES** to remove a user. The message "User deleted successfully" appears.

:::note
Each user has exactly one role and one store. To change a user's access, edit the user and select a different role, or change the role's permissions on the [Roles](./roles.md) page.
:::
