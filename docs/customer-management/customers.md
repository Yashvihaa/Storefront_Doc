---
sidebar_position: 1
id: customers
title: Customers
sidebar_label: Customers
---

# Customers

The **Customers List** stores the profiles of your registered customers. You can add, edit, view, activate or deactivate, and delete customer accounts.

---

## Customers List Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Type in the search box to find customers. The list updates about one second after you stop typing; clear the box to show all customers again. |
| **Add New Customers** | Click **Add New Customers** to open the **Add Customer** drawer and create a new customer account. |
| **View** | Click the **View Details** (eye) icon to open the customer's details page. |
| **Edit** | Click the **Edit Customers** icon to open the **Edit Customer** drawer and update the customer's name, mobile number, country or image. |
| **Delete** | Click the **Delete Customers** icon and confirm with **YES** to permanently remove the customer. Click **NO** to cancel. |
| **Status** | Shows whether the customer is **Active** or **Inactive**. |
| **Status Toggle** | Use the **Enable/Disable** switch to activate or deactivate the customer directly from the list. |
| **View Documentation** | Opens the help page for this screen in a new browser tab. |

### Customers List Columns

| Column | Description |
| ------ | ----------- |
| **Action** | **View Details**, **Edit** and **Delete** icons. |
| **Image** | Customer's profile image. Hover over it to see a larger preview. |
| **Name** | Customer's full name. |
| **Email** | Customer's email address. |
| **Phone No.** | Customer's mobile number. |
| **Status** | **Active** or **Inactive** badge. |
| **Status** | **Enable/Disable** switch. |

You can sort the **Name**, **Email** and **Phone No.** columns. The list is paged; choose 25, 50, 75 or 100 rows per page. The table toolbar also has **Filter**, **Columns** (show/hide), **Density** and **Full screen** options. When there are no customers, the table shows **No records to display**.

---

### Steps to Add a New Customer

Click **Add New Customers**, fill in the fields below and click **SUBMIT**. When editing, the drawer title reads **Edit Customer** and the button reads **EDIT**. Click **Cancel** to close without saving.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Name** | ✅ | Customer's full name. |
| **Email** | ✅ | Must be a valid email address. Cannot be changed when editing. |
| **Mobile No.** | ✅ | Digits only, exactly 10 digits (the field accepts at most 10 and needs at least 10). |
| **Password** | ✅ | Shown only when adding. At least 8 characters, with at least one uppercase letter, one lowercase letter, one number and one special character. |
| **Select Country** | ✅ | Choose the customer's country from the dropdown. Each option shows the country name and its code. |
| **Upload Image** | - | Profile image. Drop a file or click to upload. Image files only (.jpg, .jpeg, .png, .gif, .webp, .bmp, .svg, .ico, .tiff, .tif), up to 20 MB. Recommended aspect ratio: 500 x 500. |

:::note
The **Upload Image** label shows an asterisk, but the image is not required. You can save a customer without one.
:::

:::note
When editing a customer, the **Email** field is locked and the **Password** field is not shown.
:::

---

## Customer Details

Click the **View Details** (eye) icon on a customer to open their details page.

| Section | Description |
| ------- | ----------- |
| **Profile** | The customer's image and full name. |
| **Details** | **Username**, **Email**, **Status** (**Active** or **Inactive**) and **Contact** number. |
| **Recent Search Data** | The customer's recent searches on the storefront, numbered in a single **Search Value** column. Shown only if the customer has searched. |

Click **Back** to return to the previous page.

---

## Permissions

| Action | Requirement | Without it |
| ------ | ----------- | ---------- |
| **Add New Customers** | **Add** permission | Button is disabled |
| **View Details** | **View** permission | Icon is disabled |
| **Edit** and **Status Toggle** | **Edit** permission | Icon and switch are disabled |
| **Delete** | **Delete** permission | Icon is disabled |

To change what a user can access, update their role under **Roles & Permission**.
