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
| **+ Add Role** | Click the button on the **Add New Role** card to create a new role. |
| **User Count** | Shows how many users are assigned to the role, for example "3 Users are associated with this role". |
| **Role Name** | The name of the role. |
| **Edit Role** | Click to change the role's name and permissions. |
| **Role Badges** | **Super Admin** and **Sub Admin** badges appear on roles of that type. |
| **Status Toggle** | Activates or deactivates the role. A confirmation popup appears first. |

---

### Steps to Add a New Role

Click **+ Add Role**, complete the fields below and click **Submit**. Click **Cancel** to close without saving.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Role Name** | ✅ | Name of the role, for example Store Manager or Catalog Editor. |
| **Super Admin** | - | Switch shown only to Super Admin users. When on, the permission list shows only the Super Admin modules. |
| **Sub admin** | - | Switch shown only to Super Admin users. Marks the role as a Sub Admin role. |
| **Role & Permissions** | - | Select the modules and actions the role can access. See below. |

---

## Role & Permissions

The permission list shows every module in the admin panel, grouped the same way as the side menu.

| Option | Description |
| ------ | ----------- |
| **Select All** | Grants every action on every module (Administrator Access). Clear it to remove all permissions. |
| **Module checkbox** | Tick a module to give **View** access to it and everything under it. Untick it to remove access. |
| **Expand arrow** | Opens a module to show its sub-modules and actions. |
| **View** | Allows the role to open the module. |
| **Other actions** | Actions such as **Add**, **Edit** and **Delete**. These can only be ticked after **View** is ticked for that module. |

:::note
Unticking **View** on a module also removes all other actions for that module.
:::

---

## Edit a Role

Click **Edit Role** on a role card. The drawer opens with the role's current name and permissions. Make your changes and click **Submit**.

---

## Activate / Deactivate a Role

Click the **Status Toggle** on a role card. A popup asks you to confirm and shows how many users have that role. Click **YES** to confirm or **NO** to cancel.
