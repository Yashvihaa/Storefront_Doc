---
sidebar_position: 10
id: multi-currency
title: Multi Currency
sidebar_label: Multi Currency
---

# Multi Currency

## Overview

**Multi Currency** lists the currencies your storefront offers and sets your default currency. Each currency has a name, symbol, code, display order, formatting options and an exchange rate.

Prices are stored and worked out in your default currency. When a shopper picks another currency, the storefront shows each price multiplied by that currency's exchange rate, formatted with its symbol and separator.

:::note[Who can use it]
Your role needs access to the page. **Add Currency** needs **Add** permission. The **Edit** icon, the status switch and the **Default Currency** selector need **Edit** permission, and the **Delete** icon needs **Delete** permission. Each client has its own currencies.
:::

---

## Data Displayed

### Multi Currency Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Type to find currencies. The list refreshes about one second after you stop typing and goes back to page 1. Clearing the box shows all currencies again. |
| **Filter** | Shows or hides a filter box under each column heading, to narrow the rows on the current page. |
| **Add Currency** | Opens the **Add Currency** panel on the right. |
| **Edit** | Click the **Edit** icon in the **Action** column to open the **Edit Currency** panel with the saved values. |
| **Delete** | Click the **Delete** icon. Click **YES** in the **Are you Sure?** popup to remove the currency, or **NO** to keep it. The message *Currency deleted successfully* appears. Not shown for the default currency. |
| Status switch | The switch after the icons in the **Action** column turns the currency on or off. The message *Successfully updated* appears. Not shown for the default currency. |
| **Default Currency** selector | The round button in the **Default Currency** column. See [Changing the Default Currency](#changing-the-default-currency). |
| **View Documentation** | Opens this page. |

### List Columns

| Column | Type | Description | Example |
| ------ | ---- | ----------- | ------- |
| **Action** | - | **Edit** and **Delete** icons, then the status switch. | - |
| **Currency Name** | Text | The currency name. | *Euro* |
| **Symbol** | Text | The symbol shown with prices. | *€* |
| **Sort Code** | Text | The three-letter currency code. | *EUR* |
| **Sort Order** | Number | The display position. | *2* |
| **Exchange Rate** | Number | Units of this currency per 1 unit of the default currency. The default currency is always 1. | *0.92* |
| **Default Currency** | Selector | A filled round button marks the default currency. | - |
| **Status** | Badge | **Active** (green) or **Inactive** (red). | **Active** |

The default currency is always listed first, then the others by **Sort Order**. The list is paged, 50 currencies per page by default. Use the paging controls at the bottom to move between pages or to show 25, 50, 75 or 100 per page.

### Currency Fields

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Currency name** | ✅ | For example *US Dollar*. Must be unique. Shows *Currency name is a required field* when empty. |
| **Symbol** | ✅ | For example **$** or **€**. Must start with a letter or a currency sign such as $, €, £, ¥ or ₹ (*Invalid currency symbol*). Shows *Symbol is a required field* when empty. |
| **Sort code** | ✅ | The three-letter code, for example **USD**. You can type it in lower case: it is saved in capitals. Must be one of the supported codes below (*Invalid currency code*) and unique. Shows *Sort code is a required field* when empty. |
| **Sort order** | ✅ | The display position, a whole number. Shows *Sort order is a required field* or *Sort order must be a whole number*. |
| **Position symbol** | ✅ | **Left** or **Right** of the price. **Left** is selected by default. |
| **Thousand separator** | ✅ | **Comma**, **Dot** or **Space**. **Comma** is selected by default. |
| **Exchange rate type** | ✅ | **Manual** or **API**. **Manual** is selected by default. |
| **Exchange rate** | ✅ (**Manual**) | Shown for **Manual**. A number greater than 0 (*Exchange rate must be greater than 0*). Shows *Exchange rate is a required field* when empty. |
| **API** | ✅ (**API**) | Shown for **API**. A web address. Shows *API URL is a required field* when empty. |

**Position symbol**, **Thousand separator** and **Exchange rate type** are boxes you click. One box is always selected: clicking the selected box again does nothing.

**Supported currency codes:** USD, EUR, GBP, JPY, INR, AUD, CAD, CHF, CNY, SEK, NZD, BRL, ZAR, NGN, RUB, KRW, MXN, IDR, TRY, SAR, AED, SGD and HKD.

---

## How It Works

### Steps to Add a New Currency

1. Click **Add Currency**.
2. Fill in **Currency name**, **Symbol**, **Sort code** and **Sort order**.
3. Choose **Position symbol** and **Thousand separator**.
4. Choose **Exchange rate type**. For **Manual**, check or enter the **Exchange rate**. For **API**, enter the **API** address.
5. Click **Add Currency**. The message *Currency added successfully* appears and the panel closes.

To change a currency, click its **Edit** icon, change the fields and click **Save Currency**. The message *Currency updated successfully* appears. Click **Cancel** or the close icon to close the panel without saving.

### Suggested Exchange Rate

When you add a **Manual** currency, the **Exchange rate** is filled in with the current market rate as soon as you enter a supported **Sort code**. The rate is looked up against your default currency.

- Once you type in the field, the suggestion no longer replaces your value.
- If the lookup is not available, the field stays empty and you enter the rate yourself.
- Nothing is suggested when you edit a currency.

### Manual and API Rates

| Rate type | What happens when you save |
| --------- | -------------------------- |
| **Manual** | The **Exchange rate** you entered is saved. |
| **API** | The rate is fetched from a free currency rate service at that moment and saved. If it cannot be fetched, the save is refused with *The exchange rate for EUR could not be fetched. Enter the rate manually or try again.* |

An **API** rate is fetched only when you save the currency. It is not refreshed on its own afterwards. Edit and save the currency again to take a new rate.

### Changing the Default Currency

1. Click the round button in the **Default Currency** column of an active currency.
2. In the **Change default currency?** popup (*Make Euro (EUR) the default currency?*), click **Okay**, or **Cancel** to keep the current default.
3. The message *Default currency updated successfully* appears.

When the default changes, every other currency's exchange rate is worked out again against the new default, using current market rates. The new default gets a rate of 1.

### How Shoppers See Prices

1. Prices are worked out in your default currency.
2. When a shopper picks another active currency, each price is multiplied by its **Exchange Rate**.
3. For configurator prices, the [Rounding](./margin-cost-center/rounding.md) rule is applied to the converted price, so the price keeps its configured ending in that currency.
4. The price is shown with the currency's symbol, on the chosen side, and with its thousand separator.

### Search, Sorting and Paging

- The search covers every currency, not just the current page.
- The default currency always stays first and the others follow **Sort Order**. Clicking a column heading only reorders currencies that share the same sort order.
- The **Filter** boxes only narrow the rows already on the current page.

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Loading the list | The table shows a loading indicator. |
| No currencies match | **No records to display** |
| The name or code is already used | *Data already exists* |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Multi Currency uses it |
| ------ | -------------------------- |
| [Price Display](./price-display.md) | While it is set to *TCCTECH price + Margins*, the default currency cannot be changed and must stay USD. |

### Modules That Depend On It

| Module | How it uses Multi Currency |
| ------ | -------------------------- |
| Storefront prices and currency switcher | Shoppers can switch between your active currencies. Prices are converted at the saved rates. |
| [Rounding](./margin-cost-center/rounding.md) | Rounds the converted price, in the shopper's currency. |
| [Orders](../order-management/orders.md) | Each order stores its currency, exchange rate and default currency. Order amounts are shown in the order's currency. |
| [Enquiry](../enquiry.md) | Converts each request's amount to TCC Tech's base currency at the order's own exchange rate. |
| [Metal Rate Settings](./metal-rate-setting.md) | Rates are entered in the default currency. Fetched and automatically updated metal rates are converted from US dollars to it. |
| Admin amounts (lists, rate cards and labour rates) | Show the default currency's symbol. |

### What Changes If…

| Change | Effect |
| ------ | ------ |
| An exchange rate changes | Storefront prices in that currency change straight away. Placed orders keep the rate they were placed with. |
| A currency is switched off or deleted | Shoppers can no longer choose it. |
| The default currency changes | The other currencies are re-rated against it. Amounts already saved elsewhere, such as metal rates, diamond rates and product prices, are not converted and keep their numbers, now read in the new currency. |
| The symbol, position or separator changes | Prices in that currency are shown with the new format. |

---

## Edge Cases / Notes

- **The default currency is protected.** It cannot be deleted, switched off or hidden, and its code and rate cannot be changed (*The default currency rate is fixed at 1 and cannot be changed. Its currency code and rate cannot be edited.*).
- **Only active currencies can become the default.** Choosing an inactive one is refused with *The default currency cannot be changed, deactivated or deleted.*
- **Change the default with care.** Changing it does not convert your saved prices and rates. Do it only as a planned change, and update your metal rates, diamond rates and product prices afterwards.
- **TCC Tech pricing needs USD.** While Price Display is *TCCTECH price + Margins*, changing the default is refused with *The default currency cannot be changed while Pricing Display is set to TCC_TECH Price + Margins. It must stay USD.*
- **API rates are fetched against US dollars.** The free rate service is asked for the rate per US dollar. The **API** address you enter is saved but not used to fetch the rate.
- **Codes outside the list.** A currency with a code that is not supported cannot be added.
