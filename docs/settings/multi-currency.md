---
sidebar_position: 10
id: multi-currency
title: Multi Currency
sidebar_label: Multi Currency
---

# Multi Currency

The **Multi Currency** page lets you choose the system default currency and manage the currencies shoppers can switch between. Each currency has a name, a symbol, a sort code, formatting options and an exchange rate.

The page is titled **MULTI CURRENCY** and has two cards: **System Default Currency** at the top, and the list of currencies below it.

---

## Multi Currency Screen List

### System Default Currency

| Action | Description |
| ------ | ----------- |
| **Set Default Currency** | List of your **active** currencies, each shown as the currency name followed by its sort code, for example US Dollar (USD). The saved default is selected when the page opens. |
| **Save Default** | Saves the currency you picked. It stays disabled until you pick a currency other than the saved default. The message "Default currency updated successfully" appears. |

### Currency list

| Action | Description |
| ------ | ----------- |
| **Search** | Use the search box to find currencies. The list updates about one second after you stop typing, and goes back to page 1; clear the box to show all currencies again. |
| **Filter** | Shows or hides a filter box under each column heading, to narrow the rows on the current page. |
| **Add Currency** | Click the **Add Currency** button to create a new currency. |
| **Edit** | Click the **Edit** icon to change a currency. The panel opens with the saved values filled in. |
| **Delete** | Click the **Delete** icon. In the **Are you Sure?** popup, click **YES** to remove the currency or **NO** to keep it. The popup closes when the delete succeeds. |
| **Status Toggle** | Switch a currency on or off directly from the list. |

### List columns

| Column | Description |
| ------ | ----------- |
| **Action** | **Edit** and **Delete** icons. |
| **Currency Name** | Name of the currency. |
| **Symbol** | Currency symbol, for example $. |
| **Sort Code** | The currency code, for example USD. |
| **Exchange Rate** | The exchange rate saved for the currency. |
| **Status** | **Active** or **Inactive**. |
| (toggle) | The switch that turns the currency on or off. |

The list shows 50 rows per page, newest first. You can change the page size, move between pages and click a column heading to sort.

:::note Permissions
**Add Currency** is disabled for users without **Add** permission. The **Edit** icon, the status toggle, **Set Default Currency** and **Save Default** are disabled without **Edit** permission, and the **Delete** icon is disabled without **Delete** permission.
:::

---

## Choose the System Default Currency

1. Open **Set Default Currency** and pick a currency.
2. Click **Save Default**.

Only **active** currencies are listed. To make a new currency the default, add it, make sure it is **Active**, then pick it and click **Save Default**.

:::note
Your default currency is also the base for the suggested exchange rate when you add a currency (see [Suggested exchange rate](#suggested-exchange-rate)). If no default is saved yet, no rate is suggested.
:::

---

### Steps to Add a New Currency

Click **Add Currency**. The **Add Currency** panel opens on the right (**Edit Currency** when editing). Fill in the fields and click **Add Currency** (**Save Currency** when editing). Click **Cancel** or the close icon to close the panel without saving.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Currency name** | ✅ | Name of the currency, for example US Dollar. Message when empty: "Currency name is a required field". |
| **Symbol** | ✅ | The symbol shown with prices, for example $ or €. It must start with a letter or a currency sign such as $, €, £, ¥ or ₹; otherwise "Invalid currency symbol" is shown. Message when empty: "Symbol is a required field". |
| **Sort code** | ✅ | The three-letter currency code, for example USD. You can type it in lower case: it is saved in capital letters. It must be one of the supported codes below; otherwise "Invalid currency code" is shown. Message when empty: "Sort code is a required field". |
| **Position symbol** | ✅ | Where the symbol sits next to the price: **Left** or **Right**. **Left** is selected by default. |
| **Thousand separator** | ✅ | Character that separates thousands: **Comma**, **Dot** or **Space**. **Comma** is selected by default. |
| **Exchange rate type** | ✅ | How the exchange rate is set: **Manual** or **API**. **Manual** is selected by default. |
| **Exchange rate** | ✅ (**Manual** only) | Shown only for **Manual**. Enter a number greater than 0. Messages: "Exchange rate is a required field" when empty and "Exchange rate must be greater than 0" for zero or a negative number. |
| **API** | ✅ (**API** only) | Shown only for **API**. Enter the web address that provides the rate. Message when empty: "API URL is a required field". |

**Position symbol**, **Thousand separator** and **Exchange rate type** are boxes you click to choose from. One box is always selected: clicking the selected box again does nothing.

**Supported currency codes:** USD, EUR, GBP, JPY, INR, AUD, CAD, CHF, CNY, SEK, NZD, BRL, ZAR, NGN, RUB, KRW, MXN, IDR, TRY, SAR, AED, SGD and HKD. A currency with any other code cannot be added.

When the save succeeds, the panel closes and one of these messages appears: "Currency added successfully" or "Currency updated successfully". Deleting shows "Currency deleted successfully", and the status toggle shows "Successfully updated".

---

## Suggested exchange rate

When you **add** a currency with the **Manual** rate type, the **Exchange rate** field is filled in with the current market rate as soon as you enter a supported **Sort code**. The rate is looked up against your saved default currency.

- Type your own rate at any time: once you edit the field, the suggestion no longer overwrites it.
- The suggestion is optional. If no default currency is saved, or the rate lookup is not available, the field stays empty and you enter the rate by hand.
- Nothing is suggested when you edit an existing currency.

---

## Manual and API rates

| Rate type | What is saved |
| --------- | ------------- |
| **Manual** | The **Exchange rate** you entered. |
| **API** | The web address you entered in **API**. The **Exchange rate** field is not saved for this type. |

If you change a currency from one rate type to the other, only the fields for the selected type are saved.

:::note
The page checks that the **API** address is filled in, but not that it works or what it returns.
:::
