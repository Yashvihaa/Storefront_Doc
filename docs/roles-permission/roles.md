---
sidebar_position: 1
id: roles
title: Roles
sidebar_label: Roles
---

# Roles

## Overview

**Roles** is where you create roles for your team and choose which pages and actions each role can use. Every admin user has exactly one role, set on the [User Management](./user-management.md) page. The role decides which pages appear in the user's side menu and which buttons are enabled on those pages.

Use it to give staff only the access they need, for example a sales role that can view and add orders but not change prices.

:::note[Who can use it]
Anyone whose role has **View** on the **Roles** page can open it. **+ Add Role** needs **Add** permission. **Edit Role** and the status switch need **Edit** permission.

Your company's main administrator (the account created when the company signed up) does not use a role. That account always sees every client page with every action.
:::

---

## Data Displayed

### Roles Screen List

Each role is shown as a card. All roles are loaded together, so there is no search box, filter or paging. The first card, **Add New Role** (*Add a new role if it doesn't exist in the system.*), is used to create a role.

| Action | Description |
| ------ | ----------- |
| **+ Add Role** | Opens the **Add Role** drawer. Disabled without **Add** permission. |
| **Edit Role** | Opens the **Edit Role** drawer for that role. Disabled without **Edit** permission. |
| **Status switch** | The switch at the top right of the card. On means the role is active. Clicking it opens a confirmation popup. Disabled without **Edit** permission. |
| **View Documentation** | Opens this page. |

There is no delete button. A role you no longer need can be switched off.

### Role Card

| Element | Type | Description | Example |
| ------- | ---- | ----------- | ------- |
| **User count** | Text | How many users have this role, active and inactive. | *3 Users are associated with this role* |
| **Role name** | Text | The role's name. | **Store Manager** |
| **Status switch** | On / off | Green when the role is active. | On |
| **Super Admin** badge | Badge | Shown on a TCC platform super admin role. | **Super Admin** |
| **Sub Admin** badge | Badge | Shown on a role marked as sub admin. | **Sub Admin** |

Inactive roles stay on the page with their switch off.

### Add Role / Edit Role Fields

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Role Name** | ✅ | Name of the role, for example *Store Manager* or *Catalog Editor*. Must be unique in your company, ignoring upper and lower case. |
| **Super Admin** | - | Switch. Shown only to TCC Tech in the super admin portal. Off by default. See [Super Admin and Sub Admin Roles](#super-admin-and-sub-admin-roles). |
| **Sub admin** | - | Switch. Shown only to TCC Tech in the super admin portal. Off by default. |
| **Role & Permissions** | - | The pages and actions the role can use. See below. A role can be saved with nothing ticked and edited later. |

**Role Name** and the two switches stay fixed at the top of the drawer while you scroll through the permission list.

### Role & Permissions List

The list shows the admin pages, grouped as in the side menu. Top-level groups come first. Click the arrow on a row to see the pages under it. Some pages have pages of their own under them, with their own arrow.

| Option | Description |
| ------ | ----------- |
| **Administrator Access** / **Select All** | Ticks every action on every page in the list. Clear it to remove everything. Shows a partial tick when only some are ticked. Hover over or tap the info icon to see *Grants complete access to all system features and settings*. |
| **Group checkbox** | The checkbox beside a top-level group name. Tick it to give **View** on every page under it and every action on the lowest-level pages. Untick it to remove all access to the group. |
| **View** | Lets the role open the page and see it in the side menu. |
| **Add**, **Edit**, **Delete** and other actions | Greyed out until **View** is ticked for that page. Each can then be ticked or unticked on its own. |

The list only offers pages your company can use. Configurator pages for configurators your company has not bought on [Subscription & Billing](../subscription.md) are left out, and TCC platform pages are left out unless **Super Admin** is on.

---

## How It Works

### Steps to Add a New Role

1. Click **+ Add Role**.
2. Enter the **Role Name**.
3. Tick the pages and actions the role should have (see [Steps to Set Permissions](#steps-to-set-permissions)).
4. Click **Add Role**. Click **Cancel** or the close icon to leave without saving.

The message **Role added successfully** confirms it. The new role is active straight away and can be picked on [User Management](./user-management.md).

If **Role Name** is empty, the message **Role name is required** appears in red under it and the drawer scrolls back to the top. The message also appears if you type a name and then clear it.

### Steps to Set Permissions

1. Open a group with its arrow.
2. Tick **View** on a page. This also ticks all of that page's other actions, and **View** on the groups above it.
3. Untick the actions the role should not have.

Unticking **View** on a page also removes its other actions. If no other page in the same group still has **View**, the group's own access is removed too.

:::tip
To give a role read-only access to a page, tick **View** and then untick **Add**, **Edit** and **Delete**.
:::

### Steps to Edit a Role

1. Click **Edit Role** on the role card. The drawer opens with the current name, switches and ticks.
2. Make your changes.
3. Click **Save Role**.

The message **Role updated successfully** confirms it. The side menu is refreshed, so your own menu updates at once if you changed your own role.

### Steps to Activate or Deactivate a Role

1. Click the status switch on the role card.
2. The popup **Are you Sure** asks *You Want To Deactivate* (or *Activate*) **role name** *Role Which has n User*.
3. Click **YES** to confirm or **NO** to cancel.

The message **Role status updated successfully** confirms it and the switch changes.

### How Permissions Work Across the Admin

A role controls the admin in three ways:

| What the role decides | How it shows |
| --------------------- | ------------ |
| **Pages in the side menu** | A page appears only when the role has **View** on it. A role with no pages at all sees only the Dashboard. |
| **Buttons on a page** | Pages that check permissions disable buttons the role does not have. Without **Add**, the add button (for example **Add New User** or **+ Add Role**) is disabled. Without **Edit**, edit icons, status switches and save buttons are disabled. Without **Delete**, delete icons are disabled. Without **View**, the eye (**View Details**) icon is disabled. |
| **Saving changes** | The system also checks the role when a change is saved, so a disabled button is not the only protection. |

Some pages do not check **Add**, **Edit** or **Delete** separately. On those pages anyone who can open the page can use every button. Each page's guide says so where this applies, for example [Stores](./stores.md).

When your company uses **TCC_TECH Pricing + Margin** on [Price Display](../settings/price-display.md), pricing pages are view-only for everyone, whatever the role allows.

### Super Admin and Sub Admin Roles

TCC Tech runs some pages for the whole platform, such as [Error Logs](../error-logs.md), [Enquiry](../enquiry.md) and client management. These pages are only for TCC Tech's own super admins, signed in through the super admin portal.

| | Client roles | Super Admin roles |
| - | ------------ | ----------------- |
| **Who creates them** | Each company, on this page. | TCC Tech, in the super admin portal, with the **Super Admin** switch on. |
| **Pages they can grant** | Client pages only. TCC platform pages never appear in the list. | Only the TCC platform pages (the super admin group). |
| **Who sees them** | The company that created them. | TCC Tech's super admins. Client companies never see Super Admin or Sub Admin roles, or the users who have them. |

A role can be **Super Admin** or **Sub admin**, not both. Only a TCC Tech super admin can create or change these roles.

### Loading and Error States

| State | What you see |
| ----- | ------------ |
| Loading | The **Add New Role** card shows first, and role cards appear once loaded. |
| No roles yet | Only the **Add New Role** card. |
| Save fails | An error message explains why, for example a duplicate name. The drawer stays open. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Roles uses it |
| ------ | ----------------- |
| Admin menu | The permission list is built from the admin's pages and groups. New pages appear in the list automatically. |
| [Subscription & Billing](../subscription.md) | Configurator pages show in the list only for configurators your company has bought. |
| [User Management](./user-management.md) | Supplies the user count on each card. |

### Modules That Depend On It

| Module | How it uses roles |
| ------ | ----------------- |
| [User Management](./user-management.md) | Every user is given one role in **Select Role**. |
| Side menu and every admin page | The role decides which pages appear and which buttons are enabled. |
| Sign-in | A user whose role is inactive cannot sign in. |
| [Error Logs](../error-logs.md) | Shows the role name of the user who made each failed request. |
| [Audit Logs](../settings/audit-log.md) | Role changes are recorded there. |

### What Changes If…

| Change | Effect |
| ------ | ------ |
| A role's permissions are changed | Every user with that role gets the new access. Their side menu updates the next time it is loaded. |
| A role is deactivated | Its users cannot sign in. They see *Your account is currently inactive due to your assigned role being inactive. Please contact your administrator for assistance.* |
| A role is renamed | The new name shows on [User Management](./user-management.md) and on old entries in [Error Logs](../error-logs.md). |
| A configurator is removed on [Subscription & Billing](../subscription.md) | Its pages disappear from the permission list and from the side menu, even for roles that had them ticked. |
| [Price Display](../settings/price-display.md) is set to **TCC_TECH Pricing + Margin** | Pricing pages become view-only for every role. |

---

## Edge Cases / Notes

- **No delete.** Roles cannot be deleted from this page. Switch a role off instead.
- **Inactive roles are still offered.** **Select Role** on [User Management](./user-management.md) lists inactive roles too. Saving a user with an inactive role fails with *Role not found!*.
- **Duplicate names.** Saving a name that another role already uses shows *The role can not be added! because the role already exists with the same name.* (or *updated*). Case is ignored, so *Sales* and *sales* count as the same.
- **User count includes inactive users.** The count on a card covers every user with the role, active or not.
- **Popup wording.** The status popup always says *User*, even when the role has several users.
- **Select All covers only the list.** **Select All** ticks the pages shown in the drawer. With **Super Admin** on, that is only the TCC platform pages.

:::tip
Create a few roles that match real jobs, such as *Sales*, *Catalog Editor* and *Store Manager*, rather than one role per person. Changing a role then updates everyone who does that job.
:::
