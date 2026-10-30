---
sidebar_position: 1
id: roles
title: Roles
sidebar_label: Roles
---

# Roles

The **Roles** page lets you create roles for team members and choose which modules and actions each role can access. Users are then assigned a role on the [User Management](./user-management.md) page.

The page title is **ROLES**, with the description "Control what each team member can see and do". The **View Documentation** button at the top opens this guide page in a new tab.

---

## Roles Screen List

Each role is shown as a card. All roles are loaded together on one screen, so there is no search box or paging. The first card, **Add New Role**, is used to create a role.

| Action | Description |
| ------ | ----------- |
| **+ Add Role** | Click the button on the **Add New Role** card ("Add a new role if it doesn't exist in the system.") to open the **Add Role** drawer. |
| **User Count** | Shows how many users are assigned to the role, for example "3 Users are associated with this role" or "1 User is associated with this role". |
| **Role Name** | The name of the role, shown on the card. |
| **Edit Role** | Click to open the **Edit Role** drawer and change the role's name and permissions. |
| **Role Badges** | A **Super Admin** badge and a **Sub Admin** badge appear on roles of that type. |
| **Status Toggle** | The switch at the top right of the card. On means the role is active. Clicking it opens a confirmation popup first. |

:::note
**+ Add Role** is disabled for users without **Add** permission on this page. **Edit Role** and the **Status Toggle** are disabled for users without **Edit** permission.
:::

---

### Steps to Add a New Role

Click **+ Add Role**, complete the fields below and click **Add Role**. Click **Cancel** to close without saving. On success the message "Role added successfully" appears.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Role Name** | ✅ | Name of the role, for example Store Manager or Catalog Editor. If you type in the field and clear it, or click **Add Role** while it is empty, the message "Role name is required" appears in red and the drawer scrolls back to the top. |
| **Super Admin** | - | Switch shown only to Super Admin users. Off by default. When on, the permission list shows only the Super Admin modules, and only those permissions are saved. When off, the Super Admin modules are not shown. |
| **Sub admin** | - | Switch shown only to Super Admin users. Off by default. Marks the role as a Sub Admin role. |
| **Role & Permissions** | - | Select the modules and actions the role can access. See below. |

The **Role Name** and the two switches stay fixed at the top of the drawer while you scroll through the permission list. The form does not require any permission to be ticked, so a role can be saved with no access and edited later.

---

## Role & Permissions

The permission list shows the modules of the admin panel, grouped the same way as the side menu. Top-level modules are listed first; click the expand arrow on a row to see the pages under it. Some pages have further pages under them, and these have their own arrow.

| Option | Description |
| ------ | ----------- |
| **Select All** | Shown on the **Administrator Access** row (hover over the info icon to see "Grants complete access to all system features and settings"). Ticks every action on every module in the list. Clear it to remove all permissions. The box shows a partial tick when only some permissions are selected. |
| **Module checkbox** | The checkbox beside a top-level module name. Tick it to give **View** on every page and sub-page under the module and every action on the pages at the lowest level. Untick it to remove all access to the module. |
| **Expand arrow** | Opens or closes a module or page to show what is under it. |
| **View** | Allows the role to open the page. Ticking **View** on a page also ticks all of that page's other actions, and **View** on the module and parent pages above it. Untick the actions the role should not have. |
| **Other actions** | Actions such as **Add**, **Edit** and **Delete**. They are greyed out and cannot be ticked until **View** is ticked for that page. Each one can then be ticked or unticked on its own. |

:::note
Unticking **View** on a page also removes all other actions for that page. If no other page in the same module still has **View**, the module's own access is removed too.
:::

:::tip
To give a role read-only access to a page, tick **View** and then untick **Add**, **Edit** and **Delete**.
:::

---

## Edit a Role

Click **Edit Role** on a role card. The **Edit Role** drawer opens with the role's current name, **Super Admin** / **Sub admin** switches and permissions already ticked. Make your changes and click **Save Role**. The message "Role updated successfully" appears. Saving a role also refreshes the side menu, so users with that role see the change.

---

## Activate / Deactivate a Role

Click the **Status Toggle** on a role card. A popup titled "Are you Sure" asks "You Want To Activate (or Deactivate) *role name* Role Which has *n* User" and shows how many users have that role. Click **YES** to confirm or **NO** to cancel. On success the message "Role status updated successfully" appears and the switch changes.
