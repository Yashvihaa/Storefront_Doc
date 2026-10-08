---
sidebar_position: 2
id: customer-reports
title: Customer Reports
sidebar_label: Customer Reports
---

# Customer Reports

The **Customer Reports** page lets you download customer data as an Excel file for a chosen report type and date range.

---

## Customer Reports Screen List

| Action | Description |
| ------ | ----------- |
| **Customer Reports** | Select the type of report to download. You can type in the box to filter the list. |
| **Select date** | Select the start and end dates for the report. |
| **Download Excel** | Downloads the selected report as an Excel (.xlsx) file. |
| **View Documentation** | Opens the help page for this screen in a new browser tab. |

---

### Steps to Download a Report

On the **Reports** card, fill in the fields below and click **Download Excel**.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Customer Reports** | ✅ | Choose the report type from the dropdown. |
| **Select date** | ✅ | Click the box or the calendar icon and pick a start and end date. Starts with today's date. Future dates cannot be selected, and the range can be at most 365 days. |

The report data loads as soon as you choose a report type or change the dates. While it loads, the **Download Excel** button shows a loading indicator.

---

### Report Types

| Report | File name | Columns in the file |
| ------ | --------- | ------------------- |
| **Customers** | CustomerListDataSheet.xlsx | Customer name (`full_name`), `email`, `country_code` and `phone_number`. |
| **Customers Subscribers** | CustomerSubscriberDataSheet.xlsx | **Email** and **Create Date** of each subscriber. |
| **Customers Wishlist** | WishListDataSheet.xlsx | Product name, SKU, slug, short and long description (`product_name`, `product_sku`, `product_slug`, `sort_description`, `long_description`), with the customer's name, email and phone number (`user_name`, `user_email`, `user_phone_number`). |
| **Customers Cart** | CartListDataSheet.xlsx | **User Name**, **User Email**, **User Phone Numer**, **Product Name**, **Product Sku**, **Product Slug**, **Product Image**, **Product Size**, **Product Length**, **Product Metal**, **Product Karat**, **Metal Tone**, **Head Metal Tone**, **Shank Metal Tone**, **Band Metal Tone**, **Is Band** and **Product Price**. |
| **Top Selling Products** | TopSellingProductDataSheet.xlsx | **Order Count**, **Product Sku**, **Product Name** and **Product Slug**. |

:::note
If you click **Download Excel** without selecting a report, the message **Please select customer reports name** appears. If the report has no data for the selected dates, the message **Data Not Found** appears. In both cases no file is downloaded.
:::

:::tip
In the **Customers** and **Customers Wishlist** files, the column headings are the raw field names shown above.
:::
