---
sidebar_position: 20
id: tags
title: Tags
sidebar_label: Tags
---

# Tags

## Overview

**Tags** is the list of short words or phrases used to label products, for example Bestseller. Each tag has only a name. Tags are offered in the **Keywords** field of the [Birthstone Products](../configurator-products/birthstone-products.md) form.

On this page you can add, rename, switch off and delete tags.

:::note[One list for every store]
Tags are shared by every store on the Storefront platform. When a tag is added, renamed, switched off or deleted, every store sees the change straight away.
:::

:::note[Who can use it]
Any user whose role gives access to the page (see [Roles](../../roles-permission/roles.md)) can view and search tags. Only a **Super Admin** of the TCC Tech company can add, edit, delete or switch tags on and off, or save the **Info** text. For anyone else the action is refused with a red message such as *Only a Super Admin can perform this action.*

The buttons follow the role's permissions: **Add Tags** needs **Add**, the **Edit** icon and the on/off switch need **Edit**, and the **Delete** icon needs **Delete**. The **Tags Name** field and the save button also need **Edit** permission, even when you add a new tag.
:::

---

## Data Displayed

### Tags Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Type part of a tag name. The list refreshes about one second after you stop typing and goes back to page 1. Clear the box to show every tag again. |
| **Filter** | Shows or hides a filter box under each column heading, so you can narrow the rows on the current page by typing in a column. |
| **Info** | Opens the **Tag Info** drawer. See [Info Text](#info-text). |
| **Add Tags** | Opens the **Add Tag** drawer. See [Steps to Add a New Tag](#steps-to-add-a-new-tag). |
| **Edit** | Pencil icon in the **Action** column (tooltip *Edit Tags*). Opens the **Edit Tag** drawer with the saved name. |
| **Delete** | Bin icon in the **Action** column (tooltip *Delete Tags*). See [Steps to Delete a Tag](#steps-to-delete-a-tag). |
| **On/off switch** | Last item in the **Action** column (tooltip *Enable/Disable*). Switches the tag between **Active** and **Inactive** at once. See [Switching a Tag On or Off](#switching-a-tag-on-or-off). |
| **View Documentation** | Opens this page. |

### Tags List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Action** | - | The **Edit** and **Delete** icons, then the on/off switch. | - |
| **Name** | Text | The tag name. | *Bestseller* |
| **Status** | Badge | **Active** or **Inactive**. | **Active** |

Each tag also has a slug made from its name, but it is not shown in the list.

### Tag Fields

The **Add Tag** and **Edit Tag** drawers have one field.

| Field | Required | Type | Remarks |
| ----- | -------- | ---- | ------- |
| **Tags Name** | ✅ | Text | The tag name, up to 100 characters. Spaces at either end are removed. It must contain at least one letter or number, and its name and slug must differ from every other tag's, ignoring capital letters. |

### Statuses

| Status | Badge | Meaning |
| ------ | ----- | ------- |
| **Active** | Green | The tag is offered in the **Keywords** field of the Birthstone product form. A new tag starts as **Active**. |
| **Inactive** | Red | The tag stays in this list and on products that already use it, but it is no longer offered for new choices. |

---

## How It Works

### Steps to Add a New Tag

1. Click **Add Tags**.
2. Enter the **Tags Name**.
3. Click **Add Tag** at the bottom of the drawer, or **Cancel** to close without saving.

If the field is empty, **This Field is required** is shown. When the tag is saved, a success message appears, the drawer closes and the list refreshes. The drawer stays open and shows a red message when:

- another tag has the same name or slug: *A tag with the same name already exists!*
- the name has no letter or number: *Tag name must contain at least one letter or number.*
- the name is too long: *Tag name must be at most 100 characters.*

### Steps to Edit a Tag

1. Click the **Edit** icon on the row.
2. Change the **Tags Name**.
3. Click **Save Tag**.

The same checks as when adding apply. The message **Record updated successfully** confirms the change.

### Steps to Delete a Tag

1. Click the **Delete** icon on the row.
2. The **Are you Sure?** box asks *Are you Sure You would like to delete ?*. Click **YES** to delete the tag or **NO** to keep it.

A tag can be deleted only when no Birthstone product uses it. Otherwise the message *This item is currently linked to other modules, Please remove or update the related records before attempting to delete it.* is shown and the tag stays in the list. When the delete works, **Record deleted successfully** is shown and the tag leaves the list.

### Switching a Tag On or Off

Click the switch in the **Action** column. The change is saved at once, without a confirmation box. The message **Record updated successfully** appears and the **Status** badge changes. A tag can be switched off even while it is in use.

### Info Text

**Info** opens the **Tag Info** drawer with a **Title** box and a **Description** editor. The drawer loads the saved text, or opens empty if nothing has been saved yet.

1. Enter the **Title** and the **Description**. Both are required (**This Field is required**).
2. Click **Submit** to save, or **Cancel** to close.

Without **Edit** permission the fields and **Submit** are disabled. Only a TCC Tech **Super Admin** can save the text. The storefront does not show the tag info text.

### Search, Filters, Sorting and Paging

- **Search** looks through every tag by name and slug, not just the current page.
- The **Filter** boxes only narrow the rows already on the current page.
- Click the **Name** heading to sort. **Action** and **Status** cannot be sorted.
- The newest tags are shown first, 50 rows per page by default. Use the paging controls under the list to move between pages or to show 25, 50, 75 or 100 rows.

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No tags match | **No records to display** |
| Saving a tag | The save button shows a loading spinner. |
| Loading the info text | Grey placeholder bars in the drawer. |
| An action fails | A red message with the reason. The drawer stays open. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Tags uses it |
| ------ | ---------------- |
| [Roles](../../roles-permission/roles.md) | Decides who can open the page and which buttons are enabled. |
| Super Admin sign-in | Only a TCC Tech Super Admin can change tags. |

### Modules That Depend On It

| Module | How it uses tags |
| ------ | ---------------- |
| [Birthstone Products](../configurator-products/birthstone-products.md) | The **Keywords** field lists the active tags. A product can have several. |
| [Audit Logs](../../settings/audit-log.md) | Every add, edit, delete and on/off change is recorded. |

### What Changes If…

| Change | Effect elsewhere |
| ------ | ---------------- |
| A tag is renamed | The new name shows on every Birthstone product that uses it, in every store. |
| A tag is switched off | It is no longer offered in the **Keywords** field. Products that already use it keep it. |
| A tag is deleted | Possible only when no Birthstone product uses it. It disappears from the **Keywords** list. |
| A tag is added | Every store can pick it straight away. |

---

## Edge Cases / Notes

- **Shared list.** There is one tag list for the whole platform, managed by TCC Tech.
- **Buttons may look enabled.** A role can enable the buttons for a user who is not a TCC Tech Super Admin, but the save is still refused.
- **Duplicates.** Two tags cannot share a name or a slug. *Best Seller* and *best-seller* have the same slug, so the second is refused.
- **Not the New Arrival tag.** The **New Arrival** tag on [All Products](../all-products.md) is set up there and is not part of this list.
- **Switching off is not checked.** The switch works even while the tag is in use. Only **Delete** checks whether the tag is in use.
