---
sidebar_position: 2
id: user-management
title: User Management
sidebar_label: User Management
---

# User Management

## Overview

**User Management** holds the people who sign in to your admin panel. You add each user with a role and a store, and you can edit, activate, deactivate or delete them.

A user's [role](./roles.md) decides what they can see and do. Their [store](./stores.md) decides which store their orders belong to, and their 4-digit PIN is used for store sign-in. To sign in, a user also needs a user licence, assigned on [Subscription & Billing](../subscription.md#users--licences).

:::note[Who can use it]
Anyone whose role has **View** on this page can open it. **Add New User** needs **Add** permission. The **Edit** icon and the status switch need **Edit** permission. The **Delete** icon needs **Delete** permission.
:::

---

## Data Displayed

### User List Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Type part of a user's name, email, phone number or role name. The list refreshes once you pause typing and goes back to page 1. Clear the box to see everyone again. |
| **Filter** | Shows or hides a filter box under each column heading, so you can narrow the users on the current page by typing in a column. |
| **Add New User** | Opens the **Add New user** drawer. Disabled without **Add** permission. |
| **Edit** | The pencil icon (tooltip *Edit User*). Opens the **Edit New user** drawer. Disabled without **Edit** permission. |
| **Delete** | The bin icon (tooltip *Delete User*). Asks *Are you Sure You would like to delete ?*. Click **YES** to delete or **NO** to cancel. Disabled without **Delete** permission. |
| **Status switch** | Switches the user on or off straight away (tooltip *Enable/Disable*). There is no confirmation. Disabled without **Edit** permission. |
| **View Documentation** | Opens this page. |

### User List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Action** | - | The **Edit** and **Delete** icons. | - |
| **Role** | Text | The user's role. | *Store Manager* |
| **Store** | Text | The store the user belongs to. Empty when the user has no store. | *Downtown Store* |
| **Name** | Text | The user's name. | *Rahul Mehta* |
| **Email** | Text | The user's email, which is also their sign-in name. | *rahul@acmejewels.com* |
| **Phone Number** | Text | The phone number, without the country code. | *9876543210* |
| **Status** | Badge | **Active** or **Inactive**. | **Active** |
| **Status** (switch) | On / off | Switch the user on or off. | On |

The list shows active and inactive users, newest first, 10 per page. Click the **Name**, **Email** or **Phone Number** heading to sort by it. **Role** and **Store** cannot be sorted. Use the paging controls at the bottom to move between pages or change how many rows are shown.

Users with a TCC platform **Super Admin** or **Sub Admin** role are never shown to client companies.

### Add New User Fields

Fields are checked when you leave them. Messages appear in red under the field.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Name** | ✅ | The user's full name. Message: *Name is a required field*. |
| **Email** | ✅ | A valid email address. It becomes the user's sign-in name. Messages: *Email is a required field*, or a message that the email must be valid. |
| **Phone Number** | ✅ | A country code picker (starts on **+91**; type a country name, code or dial code to search) and the number. The number takes digits only and must be exactly 10 digits. Messages: *Phone Number is a required field* or *Please Enter 10 Digit Number*. |
| **Password** | ✅ | At least 8 characters, with an uppercase letter, a lowercase letter, a number and a special character. Only **@ $ ! % * ? &** are accepted as special characters, so **#** or a space is refused. Message: *Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character*. The password is shown as you type. |
| **Confirm Password** | ✅ | Must match **Password**. Messages: *Confirm Password is a required field* or *Passwords must match*. |
| **Select Role** | ✅ | Click one of the roles from the [Roles](./roles.md) page. Message: *Role is a required field*. |
| **Select Store** | ✅ | Click the store the user works in. Stores come from the [Stores](./stores.md) page. Message: *Store is a required field*. |
| **PIN** | ✅ | Exactly 4 digits. The box takes no more than 4 characters. The digits are hidden; click the eye icon to show or hide them. Messages: *PIN is a required field* or *PIN must be 4 digits*. |

The role and store lists load fresh each time the drawer opens, so a role or store you have just created is there straight away.

### Edit User Fields

The edit drawer shows **Name**, **Phone Number**, **Select Role**, **Select Store** and **PIN**, filled in with the user's current details. **Email**, **Password** and **Confirm Password** are not shown.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Name** | ✅ | As when adding. |
| **Phone Number** | ✅ | As when adding. |
| **Select Role** | ✅ | As when adding. |
| **Select Store** | ✅ | Shows the user's store. See [Edge Cases / Notes](#edge-cases--notes). |
| **PIN** | - | Shows the current PIN, hidden. Leave it as it is, or clear it, to keep the current PIN. Enter a new 4-digit PIN to change it. Message: *PIN must be 4 digits*. |

---

## How It Works

### Steps to Add a New User

1. Click **Add New User**.
2. Fill in the fields above.
3. Click **Add User**. Click **Cancel** or the close icon to leave without saving.

The message **User added successfully** confirms it. The user is created as **Active**, with the store and PIN you chose.

A new user does not have a user licence yet, so they cannot sign in until one is assigned. Go to [Subscription & Billing](../subscription.md#users--licences), open **Users & Licences** and **Bind** a free licence to the user.

### Steps to Edit a User

1. Click the **Edit** icon on the user's row. A loading placeholder shows until the user's details, the roles and the stores have loaded. **Save User** stays disabled until then.
2. Change what you need.
3. Click **Save User**.

The message **User updated successfully** confirms it. If you changed the PIN, the user is sent an email with their sign-in details and the new PIN.

### Steps to Activate or Deactivate a User

1. Click the status switch on the user's row.
2. The change saves at once. The message **User status updated successfully** confirms it.

An inactive user cannot sign in.

### Steps to Delete a User

1. Click the **Delete** icon on the user's row.
2. Click **YES** in the popup.

The message **User deleted successfully** confirms it and the user leaves the list.

### Users With a Licence

A user who holds a user licence cannot be deactivated or deleted. The system shows *This user holds a user licence. Unassign the user from its store first (that frees the licence), then delete or deactivate it.* Go to [Subscription & Billing](../subscription.md#users--licences), **Unbind** the user's licence, then come back.

Your company's main administrator always keeps a licence and can never be deactivated or deleted. The message is *The company administrator always keeps its user licence and cannot be deleted or deactivated.*

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No users match | **No records to display** |
| Loading a user to edit | Grey placeholder fields in the drawer. |
| Save fails | An error message explains why. The drawer stays open. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How User Management uses it |
| ------ | --------------------------- |
| [Roles](./roles.md) | Supplies the roles in **Select Role**. A user can only be saved with an active role. |
| [Stores](./stores.md) | Supplies the stores in **Select Store**. A new user can only be added to an active store. |
| [Subscription & Billing](../subscription.md#users--licences) | Licences are bought and bound to users there. A user without a licence cannot sign in. |
| Email templates | The email sent when a user's PIN changes uses your company's email setup. See [Email Template](../settings/email-template.md). |

### Modules That Depend On It

| Module | How it uses users |
| ------ | ----------------- |
| Sign-in | Users sign in with their email and password. The 4-digit PIN is used to sign in to their store. |
| [Subscription & Billing](../subscription.md#users--licences) | Only users who do not hold a licence are offered when binding one. |
| [Roles](./roles.md) | Each role card counts the users who have it. |
| [Orders](../order-management/orders.md) | An order placed by a user belongs to the user's store. A user with no store cannot place an order. |
| [Error Logs](../error-logs.md) | Shows the user's name on each failed request they made. |
| [Audit Logs](../settings/audit-log.md) | Adding, editing and deleting users is recorded there. |

### What Changes If…

| Change | Effect |
| ------ | ------ |
| A user's role is changed | They get the new role's pages and buttons. |
| A user is deactivated or deleted | They can no longer sign in. Their licence must be unbound first. |
| A user's licence is unbound on Subscription & Billing | The user stays active here but cannot sign in until a licence is bound again. |
| The user's store is deleted on [Stores](./stores.md) | The user loses their store and PIN. The **Store** column is empty, and changing their PIN fails with *This user is not assigned to a store, so the PIN cannot be set. Assign the user to a store first.* |
| A user is renamed | The new name shows on [Error Logs](../error-logs.md) and on licence cards. |

---

## Edge Cases / Notes

- **Changing the store when editing.** **Select Store** is shown and required in the edit drawer, but saving does not move the user to a different store. The user keeps the store they were added with.
- **Store list.** **Select Store** shows the 10 most recently added stores, active and inactive. Picking an inactive store when adding a user fails with *Store not found!*.
- **Role list.** **Select Role** also lists inactive roles. Saving with one fails with *Role not found!*.
- **Email is fixed.** The email cannot be changed here. It is checked against the other users in your company; a duplicate shows *User is already exists with the same email!*.
- **Phone number length.** The number must be exactly 10 digits, whatever country code is picked.
- **Old PINs.** For some older users the current PIN cannot be shown. The **PIN** field is then empty; leave it empty to keep the PIN.
- **Your own row.** When you edit your own details, your name in the header updates once the list reloads.

:::tip
To give someone access, add the user here, then bind a free licence to them on [Subscription & Billing](../subscription.md#users--licences). Both steps are needed before they can sign in.
:::
