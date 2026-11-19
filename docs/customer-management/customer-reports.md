---
sidebar_position: 2
id: customer-reports
title: Customer Reports
sidebar_label: Customer Reports
---

# Customer Reports

## Overview

The **Customer Reports** page lets you download customer, subscriber, wishlist, cart and top-selling product data as an Excel file for a date range you choose.

The page has no table on screen. You pick a report and dates, and the data is downloaded as a file. Access to the page is controlled by the user's role under [Roles](../roles-permission/roles.md).

---

## Data Displayed

### Customer Reports Screen List

| Action | Description |
| ------ | ----------- |
| **Customer Reports** | Choose the type of report from the dropdown. |
| **Select date** | Click the box (or the calendar icon) and pick the start and end dates for the report. Dates are shown as DD/MM/YYYY. |
| **Download Excel** | Downloads the selected report as an Excel (.xlsx) file with a single sheet named **Sheet1**. |
| **View Documentation** | Opens this page in a new browser tab. |

### Report Fields

The fields sit on the **Reports** card.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Customer Reports** | ✅ | The report type. See [Report Types](#report-types). |
| **Select date** | ✅ | A start and end date. Future dates cannot be picked, and the range can be at most 365 days. A longer range is shortened to 365 days from the start date. If the range is cleared, **Date range is required** appears under the box. |

### Report Types

| Report | File name | Columns in the file |
| ------ | --------- | ------------------- |
| **Customers** | CustomerListDataSheet.xlsx | `full_name`, `email`, `country_code` and `phone_number`. |
| **Customers Subscribers** | CustomerSubscriberDataSheet.xlsx | **Email** and **Create Date** of each subscriber. |
| **Customers Wishlist** | WishListDataSheet.xlsx | `product_name`, `product_sku`, `product_slug`, `sort_description`, `long_description` (with any formatting removed), `user_name`, `user_email` and `user_phone_number`. |
| **Customers Cart** | CartListDataSheet.xlsx | **User Name**, **User Email**, **User Phone Numer**, **Product Name**, **Product Sku**, **Product Slug**, **Product Image**, **Product Size**, **Product Length**, **Product Metal**, **Product Karat**, **Metal Tone**, **Head Metal Tone**, **Shank Metal Tone**, **Band Metal Tone**, **Is Band** and **Product Price**. |
| **Top Selling Products** | TopSellingProductDataSheet.xlsx | **Order Count**, **Product Sku**, **Product Name** and **Product Slug**. |

---

## How It Works

### Steps to Download a Report

1. Open **Customer Reports**.
2. Choose a report in **Customer Reports**.
3. Click **Select date** and pick the start and end dates.
4. Wait for the loading indicator on **Download Excel** to finish.
5. Click **Download Excel**. The file is saved by your browser.

### When the Data Loads

- The report data loads as soon as you choose a report type or change the dates, not when you click **Download Excel**.
- While it loads, **Download Excel** shows a loading indicator.
- If you change the report or dates quickly, only the latest request is used.
- The file holds exactly the data loaded for the selected report and dates.

### Messages

| Situation | Message |
| --------- | ------- |
| **Download Excel** is clicked with no report chosen | **Please select customer reports name** |
| The report has no data for the selected dates | **Data Not Found** |
| The report cannot be loaded | An error message from the system, or **Data Not Found** for the cart report |
| The date range is cleared | **Date range is required** (under the box) |

In each case no file is downloaded.

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Customer Reports uses it |
| ------ | ---------------------------- |
| [Customers](./customers.md) | The **Customers** report lists customer names and contact details. |
| [Wishlist Products](../sales-funnel/wishlist-products.md) | The **Customers Wishlist** report lists saved products with the customer who saved them. |
| [Cart Products](../sales-funnel/cart-products.md) | The **Customers Cart** report lists cart items with the customer's contact details and the product's options. |
| [Orders](../order-management/orders.md) | The **Top Selling Products** report counts how many orders included each product. |
| [All Products](../product-management/all-products.md) | Supplies the product name, SKU, slug and descriptions in the wishlist, cart and top-selling reports. |

### Modules That Depend On It

None. The page only downloads data.

### What Changes If…

| Change | Effect on Customer Reports |
| ------ | -------------------------- |
| A product is renamed or its SKU changes | Later downloads show the new name or SKU. |
| A customer adds or removes a cart or wishlist item | The next download of that report reflects it. |
| An order is placed | It is counted in the next **Top Selling Products** download. |

---

## Edge Cases / Notes

- **The date box starts on today, but the first report does not.** Until you pick dates, the box shows today's date, while the report you choose covers roughly the last 8 months up to today. Pick dates before downloading if you need an exact range.
- **Raw column headings.** In the **Customers** and **Customers Wishlist** files, the column headings are the raw field names shown above.
- **Spelling in the cart file.** The **Customers Cart** heading **User Phone Numer** is spelled that way in the file.
- **Only five reports.** Product enquiry and order reports are not offered on this page.

:::tip
For an on-screen view of carts and wishlists, use [Cart Products](../sales-funnel/cart-products.md) and [Wishlist Products](../sales-funnel/wishlist-products.md).
:::
