---
sidebar_position: 1
id: roles
title: Roles
sidebar_label: Roles
---

# Roles

The **Roles** page lets you create roles for team members and choose which modules and actions each role can access. Users are then assigned a role on the [User Management](./user-management.md) page.

---

## Roles Screen List

Each role is shown as a card. The first card, **Add New Role**, is used to create a role.

| Action | Description |
| ------ | ----------- |
| **+ Add Role** | Click the button on the **Add New Role** card to open the **Add Role** drawer. |
| **User Count** | Shows how many users are assigned to the role, for example "3 Users are associated with this role". |
| **Role Name** | The name of the role. |
| **Edit Role** | Click to open the **Edit Role** drawer and change the role's name and permissions. |
| **Role Badges** | **Super Admin** and **Sub Admin** badges appear on roles of that type. |
| **Status Toggle** | Activates or deactivates the role. A confirmation popup appears first. |

:::note
**+ Add Role** is disabled for users without **Add** permission. **Edit Role** and the **Status Toggle** are disabled for users without **Edit** permission.
:::

---

### Steps to Add a New Role

Click **+ Add Role**, complete the fields below and click **Submit**. Click **Cancel** to close without saving.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Role Name** | ✅ | Name of the role, for example Store Manager or Catalog Editor. If you leave it empty, the message "Role name is required" appears and the drawer scrolls back to the top. |
| **Super Admin** | - | Switch shown only to Super Admin users. When on, the permission list shows only the Super Admin modules, and only those permissions are saved. |
| **Sub admin** | - | Switch shown only to Super Admin users. Marks the role as a Sub Admin role. |
| **Role & Permissions** | - | Select the modules and actions the role can access. See below. |

---

## Role & Permissions

The permission list shows every module in the admin panel, grouped the same way as the side menu. Top-level modules are listed first; click the expand arrow to see the pages and actions under a module.

| Option | Description |
| ------ | ----------- |
| **Select All** | Shown on the **Administrator Access** row. Ticks every action on every module. Clear it to remove all permissions. The box shows a partial tick when only some permissions are selected. |
| **Module checkbox** | Tick a top-level module to tick **View** on every page under it and every action on its pages. Untick it to remove all access to the module. |
| **Expand arrow** | Opens or closes a module to show its pages and actions. |
| **View** | Allows the role to open the page. Ticking **View** on a page also ticks all of that page's other actions; untick the ones the role should not have. |
| **Other actions** | Actions such as **Add**, **Edit** and **Delete**. They can only be ticked after **View** is ticked for that page. |

:::note
Unticking **View** on a page also removes all other actions for that page. If no other page in the same module still has **View**, the module's own access is removed too.
:::

---

## Edit a Role

Click **Edit Role** on a role card. The **Edit Role** drawer opens with the role's current name, Super Admin / Sub admin switches and permissions. Make your changes and click **Submit**.

---

## Activate / Deactivate a Role

Click the **Status Toggle** on a role card. A popup asks "You Want To Activate (or Deactivate) *role name* Role" and shows how many users have that role. Click **YES** to confirm or **NO** to cancel.
