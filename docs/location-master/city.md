---
sidebar_position: 3
id: location-city
title: City
sidebar_label: City
---

# City

**City Master** manages the cities that belong to each state. Every city is linked to a state from [State](./state.md).

---

## City Master Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Use the search box to find cities. The list updates shortly after you stop typing; clear the box to show all cities again. |
| **Add City** | Click the **Add City** button to create a new city. |
| **Edit** | Click the **Edit** icon to change a city's details. |
| **Delete** | Click the **Delete** icon and confirm with **YES** to remove a city. Click **NO** to keep it. |
| **Status** | Shows whether the city is **Active** or **Inactive**. |
| **Status Toggle** | Switch a city on or off directly from the list. |

The list shows the **City Name**, **City Code** and **Status** of each city, and can be sorted and paged.

:::note
The **Add City** button is disabled for users without **Add** permission. The **Edit** icon and the status toggle need **Edit** permission, and the **Delete** icon needs **Delete** permission.
:::

---

### Steps to Add a New City

Click **Add City**, fill in the fields below and click **SUBMIT**. When editing, the button reads **EDIT**. Click **Cancel** to close without saving.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **City Name** | ✅ | Full name of the city, for example Rajkot or Jamnagar. |
| **City Code** | ✅ | Short code for the city. |
| **Select State** | - | State the city belongs to. Only active states are listed. |

:::tip
The form does not stop you from saving without a state, so always pick one in **Select State** to keep the city linked to the right state.
:::
