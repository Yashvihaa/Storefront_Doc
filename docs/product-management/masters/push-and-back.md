---
sidebar_position: 14
id: push-and-back
title: Push Back Master
sidebar_label: Push Back Master
---

# Push Back Master

## Overview

**Push Back Master** is the list of earring findings: the pushes and backs that hold a stud earring's post in place, for example Butterfly or Screw. Each option is a **Push** or a **Back** and has a name and an image. The options are offered in the **Push Master** and **Back Master** of the [Earring configurator settings](../../config-setting/earring-configurator.md) and are named in the push back product sheets of the [Stud Configurator](../configurator-products/stud-configurator.md).

The page also lets you export the push back products to Excel and upload the sheet back to update their details and charges.

:::note[One list for every store]
Push back options are shared by every store on the Storefront platform. When you add, change, switch off or delete an option, every store sees the change straight away.
:::

:::note[Who can use it]
The page opens for users whose role gives access to it (see [Roles](../../roles-permission/roles.md)). **Add Push Back**, **Export Excel** and **Upload Excel** need **Add** permission. The **Edit** icon and the on/off switch need **Edit** permission, and the **Delete** icon needs **Delete** permission. The fields and the save button in the drawer also need **Edit** permission, even when you add a new option. Only a TCC Tech **Super Admin** can save the **Info** text.
:::

---

## Data Displayed

### Push Back Master Screen List

| Action | Description |
| ------ | ----------- |
| **Export Excel** | Next to the page title. Asks for an Excel file of the push back products, which is emailed to you. See [Export Excel](#export-excel). |
| **Upload Excel** | Next to the page title. Choose an edited export file to update the push back products. See [Upload Excel](#upload-excel). |
| **View Documentation** | Opens this page. |
| **Search** | Type part of an option name. The list refreshes about one second after you stop typing and goes back to page 1. Clear the box to show every option again. |
| **Filter** | Shows or hides a filter box under each column heading, so you can narrow the rows on the current page by typing in a column. |
| **Info** | Opens the **Push Back Info** drawer. See [Info Text](#info-text). |
| **Add Push Back** | Opens the **Add Push Back** drawer. See [Steps to Add a New Push Back](#steps-to-add-a-new-push-back). |
| **Edit** | Pencil icon in the **Action** column (tooltip *Edit Push Back*). Opens the **Edit Push Back** drawer with the saved values. |
| **Delete** | Bin icon in the **Action** column (tooltip *Delete Push Back*). See [Steps to Delete a Push Back](#steps-to-delete-a-push-back). |
| **On/off switch** | Last item in the **Action** column (tooltip *Enable/Disable*). Switches the option between **Active** and **Inactive** at once. See [Switching a Push Back On or Off](#switching-a-push-back-on-or-off). |

### Push Back List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Action** | - | The **Edit** and **Delete** icons, then the on/off switch. | - |
| **Image** | Image | The option image. Hover over it to see a larger preview. | - |
| **Name** | Text | The option name. | *Butterfly* |
| **Slug** | Text | Made from the name: lower case, spaces turned into hyphens and other symbols removed. | *butterfly* |
| **Sort Code** | Text | Always **-**. Push back options do not keep a sort code. | **-** |
| **Status** | Badge | **Active** or **Inactive**. | **Active** |

The **Push Back Type** (**Push** or **Back**) is not shown as a column. Open **Edit** to see it.

### Push Back Fields

| Field | Required | Type | Remarks |
| ----- | -------- | ---- | ------- |
| **Push Back Name** | ✅ | Text | The option name, for example Butterfly. |
| **Sort Code** | ✅ | Text | The form asks for it, but it is not saved. See [Edge Cases / Notes](#edge-cases--notes). |
| **Slug** | ✅ | Text | The form asks for it, but the saved slug is always made from the name. |
| **Push Back Type** | ✅ | Choice | Choose one of the boxes: **Push** or **Back**. A name can be used once per type. |
| **Upload Image** | ✅ | Image | Drop a file or click to choose one. If it is missing, **Image is required** is shown. |

An empty text field or an unselected **Push Back Type** shows **This Field is required**. The image can be a .jpg, .jpeg, .png, .gif, .webp, .bmp, .svg, .ico, .tiff or .tif file up to 20 MB. A file of another type shows **Only allowed image file types can be uploaded** followed by the allowed list, and a rejected or oversized file shows **You can only upload files with a maximum size of 20 MB.** If you remove the image with the **x** and do not choose another, **Please Upload Image** is shown and you cannot save.

### Statuses

| Status | Badge | Meaning |
| ------ | ----- | ------- |
| **Active** | Green | The option is offered in the Earring configurator settings and can be named in product sheets. A new option starts as **Active**. |
| **Inactive** | Red | The option stays in this list and on products that already use it, but it is no longer offered. |

---

## How It Works

### Steps to Add a New Push Back

1. Click **Add Push Back**.
2. Fill in **Push Back Name**, **Sort Code** and **Slug**, choose the **Push Back Type** and upload an image.
3. Click **Add Push Back** at the bottom of the drawer, or **Cancel** to close without saving.

When the option is saved, a success message appears, the drawer closes and the list refreshes. If an option with the same name and type already exists, the message *Stud Push Back already exists!* is shown and the drawer stays open.

### Steps to Edit a Push Back

1. Click the **Edit** icon on the row.
2. Change the name, type or image. **Sort Code** opens empty; type any value to be allowed to save.
3. Click **Save Push Back**.

The slug is rebuilt from the new name. A success message confirms the change.

### Steps to Delete a Push Back

1. Click the **Delete** icon on the row.
2. The **Are you Sure?** box asks *Are you Sure You would like to delete ?*. Click **YES** to delete the option or **NO** to keep it.

An option can be deleted only when no push back product uses it. Otherwise the message *This item is currently linked to other modules, Please remove or update the related records before attempting to delete it.* is shown and the option stays in the list. When the delete works, **Record deleted successfully** is shown and the option leaves the list.

### Switching a Push Back On or Off

Click the switch in the **Action** column. The change is saved at once, without a confirmation box. The message **Status Updated** appears and the **Status** badge changes. An option can be switched off even while it is in use.

### Export Excel

Click **Export Excel**. The file of push back products is prepared in the background, and the message *Please wait, your export file is being prepared. It will be sent to your registered email shortly.* appears. The file arrives by email. A short progress line under the button shows the request being sent.

### Upload Excel

Use this to change existing push back products in bulk. It does not add options or new products.

1. Click **Export Excel** and wait for the file to arrive by email.
2. Edit the values in the file and save it as .xlsx or .xls.
3. Click **Upload Excel** and choose the file. The upload starts as soon as you pick it; a progress line shows it running.

Each row must match a live push back product by its style, setting, carat, shape, push or back type, finding, metal and karat. What the upload changes depends on your company:

| Who uploads | What is saved |
| ----------- | ------------- |
| A Super Admin, or TCC Tech | The style number, metal weight, labour charge and other charge of each matched product, for every store. |
| Any other store | Only that store's own labour charge and other charge for each product. The shared products are not changed. |
| A store set to **TCC_TECH Pricing + Margin** (or to no price display) on [Price Display](../../settings/price-display.md) | Nothing. The upload is refused with *Labour charges are set by Tcc tech with Tcc tech price + Mragin. Switch to Own Pricing + Margins to set your own labour charges.* |

When the upload works, a green message appears and the list refreshes. If any row does not match a product, appears twice, or has another problem, nothing is saved, a red message appears, and a table above the page lists each **Row Id** with its **Error Message**. Correct those rows and upload the file again.

### Info Text

**Info** opens the **Push Back Info** drawer with a **Title** box and a **Description** editor. The drawer loads the saved text, or opens empty if nothing has been saved yet.

1. Enter the **Title** and the **Description**. Both are required (**This Field is required**).
2. Click **Submit** to save, or **Cancel** to close.

Without **Edit** permission the fields and **Submit** are disabled. Only a TCC Tech **Super Admin** can save the text. The storefront does not show the push back info text.

### Search, Filters, Sorting and Paging

- **Search** looks through every option by name and slug, not just the current page.
- The **Filter** boxes only narrow the rows already on the current page.
- Click a column heading to sort. **Action**, **Image** and **Status** cannot be sorted.
- The newest options are shown first, 50 rows per page by default. Use the paging controls under the list to move between pages or to show 25, 50, 75 or 100 rows.

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No options match | **No records to display** |
| Opening an option | The image area shows a loading indicator until the image appears. |
| Uploading a file | A progress line under **Upload Excel**. Both Excel buttons are disabled until it finishes. |
| An upload has row errors | A **Row Id** / **Error Message** table above the page. |
| An action fails | A red message with the reason. The drawer stays open. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Push Back Master uses it |
| ------ | ---------------------------- |
| [Roles](../../roles-permission/roles.md) | Decides who can open the page and which buttons are enabled. |
| [Price Display](../../settings/price-display.md) | A store on **TCC_TECH Pricing + Margin** cannot upload its own labour and other charges. |

### Modules That Depend On It

| Module | How it uses push back options |
| ------ | ----------------------------- |
| [Earring configurator settings](../../config-setting/earring-configurator.md) | The **Push Master** lists the active pushes and the **Back Master** the active backs. Each store picks the options it offers. A client store only sees the options TCC Tech has switched on. |
| Push back products ([Stud Configurator](../configurator-products/stud-configurator.md)) | Each push back product has a finding from this list. Product sheets name it in the finding type column, and it must match an active option. |
| Storefront earring configurator | Offers the active push and back options. |
| [Audit Logs](../../settings/audit-log.md) | Every add, edit, delete and on/off change is recorded. |

### What Changes If…

| Change | Effect elsewhere |
| ------ | ---------------- |
| An option is renamed | The new name shows wherever the option is used, in every store. Product sheets must use the new name. |
| The type is changed | The option moves between the **Push Master** and **Back Master** lists. |
| An option is switched off | It is no longer offered in the Earring configurator settings or on the storefront, and sheet rows that name it are rejected. Products that already use it keep it. |
| An option is deleted | Possible only when no push back product uses it. |
| A push back products sheet is uploaded by TCC Tech | The details and charges change for every store, except where a store has its own labour or other charge. |

---

## Edge Cases / Notes

- **Shared list.** There is one push back list for the whole platform.
- **Same name, different type.** *Screw* can exist once as a **Push** and once as a **Back**.
- **Sort Code is not kept.** The form requires a **Sort Code**, but push back options have nowhere to store it. The value is dropped when you save, the **Sort Code** column always shows **-**, and the field is empty each time you edit, so you must type a value again before saving.
- **Typed slug is ignored.** Whatever you type in **Slug**, the saved slug is made from the name.
- **Upload edits only.** **Upload Excel** changes existing push back products. It never adds products; adding new push back products is limited to a Super Admin.
- **Switching off is not checked.** The switch works even while the option is in use. Only **Delete** checks whether it is in use.
