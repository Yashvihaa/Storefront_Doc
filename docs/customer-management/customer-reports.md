---
sidebar_position: 2
id: customer-reports
title: Customer Reports
sidebar_label: Customer Reports
---

# Customer Reports

The **Customer Reports** page (*Download customer data as Excel for a chosen report type and date range*) lets you download customer data as an Excel file for a chosen report type and date range.

---

## Customer Reports Screen List

| Action | Description |
| ------ | ----------- |
| **Customer Reports** | Select the type of report to download from the dropdown. |
| **Select date** | Click the box (or the calendar icon) and pick the start and end dates for the report. Dates are shown as DD/MM/YYYY. |
| **Download Excel** | Downloads the selected report as an Excel (.xlsx) file. The data is a single sheet named **Sheet1**. |
| **View Documentation** | Opens the help page for this screen in a new browser tab. |

---

### Steps to Download a Report

On the **Reports** card, fill in the fields below and click **Download Excel**.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Customer Reports** | ✅ | Choose the report type from the dropdown. |
| **Select date** | ✅ | Click the box or the calendar icon and pick a start and end date. Both dates start as today. Future dates cannot be selected, and the range can be at most 365 days (a longer range is shortened to 365 days from the start date). If the range is cleared, the message **Date range is required** appears under the box. |

The report data loads as soon as you choose a report type or change the dates. While it loads, the **Download Excel** button shows a loading indicator. If you change the report or dates quickly, only the latest request is used. The file contains exactly the data loaded for the selected report and dates.

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
If a report cannot be loaded, an error message from the system appears. If you click **Download Excel** without selecting a report, the message **Please select customer reports name** appears. If the report has no data for the selected dates, the message **Data Not Found** appears. In both cases no file is downloaded.
:::

:::tip
In the **Customers** and **Customers Wishlist** files, the column headings are the raw field names shown above. The **Customers Cart** heading **User Phone Numer** is spelled that way in the file.
:::
