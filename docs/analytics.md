---
sidebar_position: 3
id: analytics
title: Analytics
sidebar_label: Analytics
---

# Analytics

The **Analytics** page gives catalog, customer and business intelligence for the jewelry configurator. Information is grouped into eleven tabs, each focused on one area of the business. The page is read-only: it only reports figures and has nothing to add, edit or delete.

---

## Analytics Screen List

| Action | Description |
| ------ | ----------- |
| **Section Tabs** | Click a tab (icon and label) below the page title to switch sections. The selected tab is underlined. When the tabs do not fit on screen, arrow buttons appear at the ends of the tab bar so you can scroll through them. The page always opens on **Executive Overview**. |
| **Section Header** | Each tab shows its own name and a one-line description at the top. A loading placeholder appears briefly each time you switch tabs. |
| **Period Selector** | Every tab has its own **Today / Week / Month / Year** selector at the top right of the section. Each tab opens on **Month**, and the choice is remembered separately for each tab only while you stay on the page. |
| **Chart Tooltips** | Hover over any chart to see exact values. |
| **Retry** | If a tab cannot load, an error message with a **Retry** button is shown. Click it to try again. |
| **View Documentation** | Opens the help page for this screen in a new browser tab. |

### Period Selector

| Option | Figures are compared with |
| ------ | ------------------------- |
| **Today** | Yesterday |
| **Week** | The previous week |
| **Month** | The previous month |
| **Year** | The previous year |

While another period loads, the previous figures stay on screen, slightly faded. Money values use the currency symbol of your store (a dollar sign if none is set) and large amounts are shortened (for example `$1.2M`).

---

## Analytics Tabs

| Tab | Purpose |
| --- | ------- |
| **Executive Overview** | How the business is performing right now |
| **Customer Insights** | Journey and segmentation: how customers move through the catalog and who they are |
| **Jewelry Preferences** | What categories customers gravitate toward |
| **Setting Analytics** | Which settings customers view, select and purchase |
| **Gemstone Analytics** | Color-stone demand across the catalog |
| **Metal Analytics** | Metal preference by price tier |
| **Design Intelligence** | Which catalog pages actually convert |
| **Sales Intelligence** | Where revenue and margin actually come from |
| **Inventory Intelligence** | Demand forecasting and stock health |
| **Sales Team Performance** | Per-executive orders, conversion and revenue |
| **Global Trend** | How shapes, settings and full configurations are trending across every storefront visitor |

---

### Executive Overview

Store-wide performance for the selected period.

| Card | Shows |
| ---- | ----- |
| **Configurations** | Configurations created, with the % change against the previous period |
| **Wishlist Added** | Items added to wishlists, with % change |
| **Orders Placed** | Orders placed, with % change |
| **Conversion Rate** | Percentage of visitors who placed an order, with the change in percentage points. Shows `0` when there are no conversions yet. |
| **Revenue Trend** | Area chart of gross sales for the period. The total revenue and the number of orders in the period are shown at the top right of the card. |
| **Avg. Config Value** | Average value **per saved configuration**, with % change |
| **Avg. Session Duration** | Average session length in minutes, with the number of catalog sessions and % change |

Change badges are green for a rise and red for a fall.

---

### Customer Insights

The tab has three summary cards and three panels.

| Card | Shows |
| ---- | ----- |
| **Overall Conversion** | Conversion from the first page of the journey to a completed purchase. Shows `0` when there are no conversions yet. |
| **Biggest Drop-off** | The pair of journey steps where most visitors leave (for example `Product → Customize`) and the % of visitors who leave there. Shows **None yet** when there are not enough visitors to compare steps. |
| **Customers** | Total customers, with the split of new and returning customers |

**Customer Journey**: a funnel showing the number of visitors at each step, from the first page to purchase, with the number of visitors who entered at the top right. Each step after the first shows how much of the previous step was lost (for example `-12.5% drop`). If no visitor activity exists, the panel shows **No visitor activity in this period yet.**

**Customer Segmentation**:

| Card | Shows |
| ---- | ----- |
| **Pricing Range of Selection** | Customers grouped by what they spent in the period, as bars with the customer count and share for each spend band |
| **New vs Returning** | Doughnut chart splitting customers into **New** (first order in this period) and **Returning** (an earlier order exists) |

---

### Jewelry Preferences

| Card | Shows |
| ---- | ----- |
| **Total Combinations** | Every shape x setting x metal x carat pairing available across the configurator |
| **Configurators** | One small card for each product category covered by the configurator. Hover over a card to see its number of combinations. Shows **No configurators on this store yet.** if none exist. |
| **Most Selected Category** | Doughnut chart of selections by category. Only the five largest categories are named; the rest are grouped together. Shows **No category selections in this period yet.** when empty. |

---

### Setting Analytics

| Card | Shows |
| ---- | ----- |
| **Most Purchased Setting** | Top setting style and its number of purchases, or **None yet** |
| **Settings Tracked** | Number of setting styles tracked |
| **Total Selections** | Total times settings were selected |
| **Setting Performance** | Table of **Setting**, **Selected**, **Purchased** and **Conversion** (purchased divided by selected, with a small bar) for each setting style, most selected first. Shows **No setting selections in this period yet.** when empty. |

---

### Gemstone Analytics

| Card | Shows |
| ---- | ----- |
| **Top Gemstone** | Most popular gemstone and its % share of gemstone selections, or **None yet** |
| **Gemstone Mix** | Doughnut chart of the share of each gemstone in the period. The six largest are named; the rest are grouped together. Shows **No gemstone selections in this period yet.** when empty. |

---

### Metal Analytics

| Card | Shows |
| ---- | ----- |
| **Most Selected Metal** | Doughnut chart of the share of each metal in the period (six largest named, the rest grouped). Shows **No metal selections in this period yet.** when empty. |
| **Metal by Price Band** | Purchased pieces per metal within each price tier, as stacked bars with the total for each tier. Shows **No purchases in this period yet.** when empty. |

---

### Design Intelligence

**Top Designs** lists designs ranked by revenue, orders and selections, with **Design**, **Configs**, **Orders** and **Revenue** columns. Designs that are rising are marked **Trending** and designs that are falling are marked **Cooling**; steady designs have no badge. Shows **No design activity in this period yet.** when empty.

---

### Sales Intelligence

| Card | Shows |
| ---- | ----- |
| **Highest Margin Category** | Category with the highest average margin in the period, with the % margin |
| **Highest Selling Diamond Shape** | Best-selling diamond shape and the quantity sold |
| **Highest Selling Metal** | Best-selling metal and the quantity sold |
| **Average Selling Price** | Average selling price across the period's orders, with the number of orders. Shows `0` when there are no orders. |
| **Revenue by Category** | Each category's share of total revenue as a bar, with the total revenue. Shows **No revenue in this period yet.** when empty. |

Cards without data show **No data yet.**

---

### Inventory Intelligence

| Card | Shows |
| ---- | ----- |
| **Next Month Demand Forecast** | Change in selections by diamond shape compared with the previous period, shown as a % with an up (green) or down (red) arrow. Shows **No shape selections to forecast from yet.** when empty. |
| **Stock Alerts** | Items needing procurement attention, with the days to sell (for example `12d to sell`) and a status badge of **Low Stock**, **Fast Moving** or **Dead Inventory** |

If stock levels are not tracked in your catalog, **Stock Alerts** shows **Stock levels aren't tracked in the catalog yet.** If they are tracked but nothing needs attention, it shows **No stock alerts right now.**

---

### Sales Team Performance

| Card | Shows |
| ---- | ----- |
| **Top Performer** | Sales executive with the highest revenue, with their revenue and conversion rate, or **None yet** |
| **Per-Executive Performance** | Table of **Executive**, **Conversion**, **Average Order Value** and **Revenue** for each sales executive. An executive without a profile name is shown as `User #` followed by their user number. Shows **No executive activity in this period yet.** when empty. |

---

### Global Trend

| Card | Shows |
| ---- | ----- |
| **Top Trending Shape** | Most popular diamond shape with its share of selections, or **None yet** |
| **Top Trending Setting** | Most purchased setting with its share of purchases, or **None yet** |
| **Top Combination** | Most configured shape, setting and metal combination, its share of selections and its change against the previous period |
| **Trending Shapes** | Doughnut chart of the share of selections by diamond shape |
| **Trending Settings** | Table of **Setting**, **Purchased** and **Share**, ranked by purchases |
| **Trending Combinations** | Full shape, setting and metal pairings ranked by share, each with its selections, the selections in the previous period, and a marker showing whether it is trending up, down or flat |

When a panel has no data, it shows a line such as **No shape selections in this period yet.**, **No setting purchases in this period yet.** or **No combinations selected in this period yet.**

:::note
Several cards show **No data yet -- add rows in the master.** when the related master data (for example categories or shapes) has not been set up. Add the data in the relevant master and the cards fill in.
:::
