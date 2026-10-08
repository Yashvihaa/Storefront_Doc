---
sidebar_position: 2
id: location-state
title: State
sidebar_label: State
---

# State

**State Master** manages the states and regions that belong to each country. Every state is linked to a country from [Country](./country.md), and the states you add here are offered when you create cities.

---

## State Master Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Use the search box to find states. The list updates shortly after you stop typing; clear the box to show all states again. |
| **Add State** | Click the **Add State** button to create a new state. |
| **Edit** | Click the **Edit** icon to change a state's details. |
| **Delete** | Click the **Delete** icon and confirm with **YES** to remove a state. Click **NO** to keep it. |
| **Status** | Shows whether the state is **Active** or **Inactive**. |
| **Status Toggle** | Switch a state on or off directly from the list. |

The list shows the **State Name**, **State Code** and **Status** of each state, and can be sorted and paged.

:::note
The **Add State** button is disabled for users without **Add** permission. The **Edit** icon and the status toggle need **Edit** permission, and the **Delete** icon needs **Delete** permission.
:::

---

### Steps to Add a New State

Click **Add State**, fill in the fields below and click **SUBMIT**. When editing, the button reads **EDIT**. Click **Cancel** to close without saving.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **State Name** | ✅ | Full name of the state, for example Gujarat or Alabama. |
| **State Code** | ✅ | Short code for the state, for example GJ or AL. |
| **Select Country** | ✅ | Country the state belongs to. Only active countries are listed. |

:::note
Only active states are offered in the **Select State** list on the [City](./city.md) page.
:::
