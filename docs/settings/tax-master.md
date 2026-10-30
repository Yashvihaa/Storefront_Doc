---
sidebar_position: 2
id: tax-master
title: Tax Master
sidebar_label: Tax Master
---

# Tax Master

**Tax Master** lets you configure the tax rates used by checkout and order calculations. Each tax has a name and a percentage rate, and can optionally be tied to a country and a state. A tax can be switched on or off at any time.

---

## Tax Master Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Use the search box to find taxes. The list updates about one second after you stop typing; clear the box to show all taxes again. |
| **Filter** | Shows or hides a filter box under each column heading, to narrow the rows on the current page. |
| **Add Tax** | Click the **Add Tax** button to create a new tax. |
| **Edit** | Click the **Edit** icon to change a tax. |
| **Delete** | Click the **Delete** icon. In the **Are you Sure?** popup, click **YES** to remove the tax or **NO** to keep it. |
| **Status** | Shows whether the tax is **Active** or **Inactive**. |
| **Status Toggle** | Switch a tax on or off directly from the list. |

The list shows the following columns, and can be sorted and paged:

| Column | Description |
| ------ | ----------- |
| **Name** | Name of the tax, for example GST. |
| **Rate (%)** | Tax percentage. |
| **Country Code** | Country the tax is tied to. Empty when none is set. |
| **State** | State the tax is tied to. Empty when none is set. |
| **Status** | **Active** or **Inactive**, followed by the status toggle. |

:::note
**Add Tax** is disabled for users without **Add** permission. The **Edit** icon and the **Status Toggle** are disabled without **Edit** permission, and the **Delete** icon is disabled without **Delete** permission.
:::

---

### Steps to Add a New Tax

Click **Add Tax**. The **Add Tax** panel opens on the right (**Edit Tax** when editing). Fill in the fields below and click **Add Tax** (**Save Tax** when editing). Click **Cancel** or the close icon to close the panel without saving.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Tax name** | ✅ | Name used to identify the tax, for example GST, IGST or VAT. Shows "This Field is required" when empty. |
| **Rate (%)** | ✅ | Tax percentage. A number from 0 to 100. For example, 18 means 18% tax. |
| **Country code** | - | Optional country the tax applies to. |
| **State** | - | Optional state the tax applies to. |

The **Rate (%)** field shows these messages:

| Message | When it appears |
| ------- | --------------- |
| Tax rate must be a valid number | The rate is empty or is not a number. |
| Tax rate must be at least 0% | The rate is below 0. |
| Tax rate cannot exceed 100% | The rate is above 100. |

When editing, the panel opens with the tax's saved values.

### Messages

| Action | Message |
| ------ | ------- |
| Add | Tax added successfully |
| Edit | Tax updated successfully |
| Delete | Tax deleted successfully |
| Status toggle | Successfully updated |

:::tip
If you may need a tax again, switch it off with the **Status Toggle** instead of deleting it. You can switch it back on later.
:::
