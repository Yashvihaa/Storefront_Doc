---
sidebar_position: 1
id: location-country
title: Country
sidebar_label: Country
---

# Country

**Country Master** is the top level of the location list. The countries you add here are offered when you create states, and the country code of each active country is offered as the phone **Country Code** in [Store Master](./store-master.md).

---

## Country Master Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Use the search box to find countries. The list updates shortly after you stop typing; clear the box to show all countries again. |
| **Add Country** | Click the **Add Country** button to create a new country. |
| **Edit** | Click the **Edit** icon to change a country's details. |
| **Delete** | Click the **Delete** icon and confirm with **YES** to remove a country. Click **NO** to keep it. |
| **Status** | Shows whether the country is **Active** or **Inactive**. |
| **Status Toggle** | Switch a country on or off directly from the list. |

The list shows the **Country Name**, **Country Code**, **Country ISO Code** and **Status** of each country, and can be sorted and paged.

:::note
The **Add Country** button is disabled for users without **Add** permission. The **Edit** icon and the status toggle need **Edit** permission, and the **Delete** icon needs **Delete** permission.
:::

---

### Steps to Add a New Country

Click **Add Country**, fill in the fields below and click **SUBMIT**. When editing, the button reads **EDIT**. Click **Cancel** to close without saving.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Country Name** | ✅ | Full name of the country, for example India or United States. |
| **Country Code** | ✅ | International dialing code, for example +91 or +1. |
| **Country ISO Code** | ✅ | ISO code of the country, for example IN or US. |

:::tip
Enter the **Country Code** with a leading plus sign, for example +91. Store Master uses this value as the phone country code, and it reads the code back correctly when you edit a store only if the code starts with **+**.
:::

:::note
Only active countries are offered in the **Select Country** list on the [State](./state.md) page and in the **Country Code** list on the [Store Master](./store-master.md) page.
:::
