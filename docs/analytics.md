---
sidebar_position: 3
id: analytics
title: Analytics
sidebar_label: Analytics
---

# Analytics

## Overview

The **Analytics** page reports how customers use your configurators and what sells. Information is grouped into eleven tabs, each focused on one area of the business.

The page is read-only. It only reports figures and has nothing to add, edit or delete. All figures are worked out from your data each time a tab loads.

:::note[Who can see what]
Any user whose role gives access to the Analytics menu can open the page. The figures follow the same store rules as [Orders](./order-management/orders.md):

- **Orders** are counted the same way as in the order list. The main user of the main store sees every order. Other users see only the orders of their store that are assigned to them. A user with no store sees none.
- **Storefront activity** (views, configurations, sessions): the main user sees every store's activity. Other users see their own store's activity.
- **Cart and wishlist** items always count for the whole company, because they are not linked to a store.
- **Global Trend** is the exception. It covers every storefront on the platform, not only yours.
:::

---

## Data Displayed

### Analytics Screen List

| Action | Description |
| ------ | ----------- |
| **Section tabs** | Click a tab (icon and label) below the page title to switch sections. The selected tab is underlined. When the tabs do not fit on screen, arrow buttons appear at the ends of the tab bar so you can scroll through them. The page always opens on **Executive Overview**. |
| **Today / Week / Month / Year** | Each tab has its own period selector at the top right of the section. It starts on **Month**. See [Periods](#periods). |
| **Chart tooltips** | Hover over a chart to see exact values. |
| **Retry** | Shown with an error message when a tab cannot load. Click it to try again. |
| **View Documentation** | Opens this page in a new browser tab. |

### Analytics Tabs

| Tab | Description shown under the tab name |
| --- | ------------------------------------ |
| **Executive Overview** | *How the business is performing right now · Store-wide performance for the selected period* |
| **Customer Insights** | *Journey and segmentation · How customers move through the catalog and who they are* |
| **Jewelry Preferences** | *What categories customers gravitate toward* |
| **Setting Analytics** | *Which settings customers view, select and purchase* |
| **Gemstone Analytics** | *Color-stone demand across the catalog* |
| **Metal Analytics** | *Metal preference by price tier* |
| **Design Intelligence** | *Which catalog pages actually convert* |
| **Sales Intelligence** | *Where revenue and margin actually come from* |
| **Inventory Intelligence** | *Demand forecasting and stock health* |
| **Sales Team Performance** | *Per-executive orders, conversion and revenue* |
| **Global Trend** | *How shapes, settings and full configurations are trending across every storefront visitor* |

### Executive Overview

| Card | Shows | Example |
| ---- | ----- | ------- |
| **Configurations** | Unique designs customers configured in the period. A design counts once, however often or by however many customers it was built. With the % change. | **128** / **+12.5%** *vs previous month* |
| **Wishlist Added** | Items added to wishlists, with the % change. | **46** |
| **Orders Placed** | Orders placed, with the % change. | **19** |
| **Conversion Rate** | Share of visitors who made a purchase, with the change in percentage points. Shows **0** when there are no conversions yet. | **2.35%** / **+0.4 pts** |
| **Revenue Trend** | Area chart of gross sales, subtitled *Gross sales ·* and the period name. The total revenue and the number of orders are shown at the top right. | **$41.2K** / *19 orders* |
| **Avg. Config Value** | The average value of one configured item that was ordered in the period, captioned *per saved configuration*, with the % change. | **$2,180** |
| **Avg. Session Duration** | The average session length in minutes, with the number of catalog sessions and the % change. | **7.1 min** / *312 catalog sessions* |

### Customer Insights

| Card | Shows |
| ---- | ----- |
| **Overall Conversion** | Visitors who completed a purchase as a share of visitors who reached the first page of the journey. Shows **0** when there are no conversions yet. |
| **Biggest Drop-off** | The pair of journey steps where most visitors leave, for example *Product → Customize*, captioned with the share who leave there. Shows **None yet** and *Not enough visitors to compare stages* when there is not enough activity. |
| **Customers** | Total customers who ordered in the period, captioned with the number of new and returning customers. |
| **Customer Journey** | A funnel with the number of visitors at each step: products page, configurator, customize, wishlist or cart, and purchase. Each step after the first shows how much of the previous step was lost, for example *−12.5% drop*. With no activity it shows *No visitor activity in this period yet.* |
| **Pricing Range of Selection** | *Customers by what they spent in the period*, as bars with the customer count and share for each spend band. |
| **New vs Returning** | *First order in this period vs an earlier one*: a doughnut chart of **New** customers (their first ever order is in this period) and **Returning** customers (they ordered before). |

### Jewelry Preferences

| Card | Shows |
| ---- | ----- |
| **Total Combinations** | *Every shape x setting x metal x carat pairing available across the configurator*, counted across the configurators your company has enabled. |
| **Configurators** | *Product categories covered by the configurator*: one small card per enabled configurator. Hover over a card to see its number of combinations. Shows *No configurators on this store yet.* when none are enabled. |
| **Most Selected Category** | *Breakdown across the product catalog*: a doughnut chart of selections by category, only for your enabled configurators. Up to five slices: when there are more categories, the four largest are named and the rest are grouped as **Other**. Shows *No category selections in this period yet.* when empty. |

### Setting Analytics

| Card | Shows |
| ---- | ----- |
| **Most Purchased Setting** | The top setting style and its number of purchases, or **None yet** with *No purchases in this period*. |
| **Settings Tracked** | Number of setting styles with activity. |
| **Total Selections** | Total times settings were selected. |
| **Setting Performance** | *Selected to purchased, by setting style*: a table of **Setting**, **Selected**, **Purchased** and **Conversion** (purchased divided by selected, with a small bar). Shows *No setting selections in this period yet.* when empty. |

### Gemstone Analytics

| Card | Shows |
| ---- | ----- |
| **Top Gemstone** | The most selected color stone, captioned with its share of gemstone selections, or **None yet**. |
| **Gemstone Mix** | *Share of gemstone selections in the period*: a doughnut chart. Up to six slices: when there are more stones, the five largest are named and the rest are grouped as **Other**. Shows *No gemstone selections in this period yet.* when empty. |

Only color stones are counted. Diamonds are left out.

### Metal Analytics

| Card | Shows |
| ---- | ----- |
| **Most Selected Metal** | *Share of metal selections in the period*: a doughnut chart by metal (karat and tone). Up to six slices, grouped as on Gemstone Mix. Shows *No metal selections in this period yet.* when empty. |
| **Metal by Price Band** | *Purchased pieces per metal within each price tier*, as stacked bars with the total for each tier. Shows *No purchases in this period yet.* when empty. |

### Design Intelligence

**Top Designs** (*Ranked by revenue, orders and selections*) lists your catalog designs with these columns:

| Column | Description |
| ------ | ----------- |
| **Design** | Product name, with a **Trending** or **Cooling** badge when its activity moved a lot |
| **Configs** | Times the design was configured |
| **Orders** | Orders that included it |
| **Revenue** | Revenue from those orders |

Shows *No design activity in this period yet.* when empty.

### Sales Intelligence

| Card | Shows |
| ---- | ----- |
| **Highest Margin Category** | *From the period's orders*: the category with the highest average margin, captioned with the % margin. |
| **Highest Selling Diamond Shape** | The best-selling diamond shape and the quantity sold. |
| **Highest Selling Metal** | The best-selling metal and the quantity sold. |
| **Average Selling Price** | Revenue divided by the number of orders, with the number of orders. Shows **0** when there are no orders. |
| **Revenue by Category** | *Share of total revenue*: each category's share as a bar, with the total revenue. Shows *No revenue in this period yet.* when empty. |

The first three cards show *No data yet.* when there is nothing to report.

### Inventory Intelligence

| Card | Shows |
| ---- | ----- |
| **Next Month Demand Forecast** | *Change in selections by diamond shape from the previous period*, as a % with an up (green) or down (red) arrow. Shows *No shape selections to forecast from yet.* when empty. |
| **Stock Alerts** | *Items that need procurement attention*, each with the days to sell and a **Low Stock**, **Fast Moving** or **Dead Inventory** badge. |

### Sales Team Performance

| Card | Shows |
| ---- | ----- |
| **Top Performer** | The sales executive with the highest revenue, captioned with their revenue and conversion, or **None yet** with *No executive revenue in this period*. |
| **Per-Executive Performance** | A table of **Executive**, **Conversion**, **Average Order Value** and **Revenue** for each executive. An executive without a profile name is shown as **User #** and their user number. Shows *No executive activity in this period yet.* when empty. |

### Global Trend

| Card | Shows |
| ---- | ----- |
| **Top Trending Shape** | The most selected diamond shape with its share of selections, or **None yet**. |
| **Top Trending Setting** | The most purchased setting with its share of purchases, or **None yet**. |
| **Top Combination** | The most configured shape, setting and metal combination, its share of selections and its change from the previous period, or **None yet**. |
| **Trending Shapes** | *Share of selections by diamond shape*: a doughnut chart (up to six slices). |
| **Trending Settings** | *Ranked by purchases across the storefront*: a table of **Setting**, **Purchased** and **Share**. |
| **Trending Combinations** | *Full shape + setting + metal pairings, ranked by share*. Each row shows its share, *selections · in the previous period* and whether it is trending up, down or flat. |

Empty panels show a line such as *No shape selections in this period yet.*, *No setting purchases in this period yet.* or *No combinations selected in this period yet.*

---

## How It Works

### Periods

Every period is a rolling range that ends today, the same as on the [Dashboard](./dashboard.md). Where a tab compares figures, it compares them with the range of the same length just before.

| Option | Covers | Compared with | Caption |
| ------ | ------ | ------------- | ------- |
| **Today** | Today, from midnight | Yesterday | *vs yesterday* |
| **Week** | Today and the 6 days before | The 7 days before that | *vs previous week* |
| **Month** | Today and the 29 days before | The 30 days before that | *vs previous month* |
| **Year** | Today and the 364 days before | The 365 days before that | *vs previous year* |

### Steps to Review Your Store's Performance

1. Open **Analytics** from the menu. **Executive Overview** opens for the last 30 days (**Month**).
2. Pick another period at the top right of the section if needed.
3. Read the cards. A green badge means a rise and a red badge a fall against the previous period.
4. Click another tab, for example **Customer Insights**, to see where visitors leave the journey.
5. Hover over any chart for exact values.

### What the Figures Count

| Figures based on | What counts |
| ------ | ----------- |
| **Orders** | Your orders by order date. Revenue leaves out **Returned**, **Failed** and **Cancelled** orders, the same rule as the Dashboard. |
| **Selections** | What customers picked: each option change in a configurator, plus items in carts, wishlists and orders. An ordered item is not counted again for the cart it left. Each selection is matched to its category, diamond shape, setting (head, else side setting), metal and stone. |
| **Storefront activity** | Page views, configurations, wishlist and cart adds and purchases tracked on the storefront. A visitor is one signed-in storefront customer, counted once across visits. Activity without a customer is not counted as a visitor. |
| **Customers** | The people who ordered in the period, identified by email (or phone when there is no email). |

Some cards use their own rules:

| Card | How it is calculated |
| ---- | -------------------- |
| **Avg. Config Value** | The total value of the configurator items on revenue orders, divided by their quantity. Configurations that were only saved have no price, so only ordered ones count. |
| **Avg. Session Duration** | For each session, the time between its first and last tracked event, averaged over all sessions. A session with one event lasts 0 minutes. |
| **Pricing Range of Selection** | Spend bands of under 50,000, 50,000 to 100,000, 100,000 to 300,000 and over 300,000, in your company's currency. |
| **Metal by Price Band** | Unit price bands of under 2,000, 2,000 to 5,000, 5,000 to 10,000 and over 10,000. |
| **Trending / Cooling** | A design, or a combination on Global Trend, is trending or cooling when its activity changed by 20% or more from the previous period. |
| **Highest Margin Category** | Margin is the price of each order item minus its price before margin. |
| **Sales team** | An executive is the store user an order is assigned to (or who created it), or who served a storefront visitor. Conversion is their orders divided by the visitors they served. |
| **Next Month Demand Forecast** | The change in selections of each diamond shape from the previous period. It shows the direction demand is moving. |

### Loading, Empty and Error States

| State | What you see |
| ----- | ------------ |
| Switching tabs | Grey placeholder blocks for a moment, then the tab's cards. |
| Loading a tab | Grey placeholder blocks in the shape of the cards. |
| Changing the period | The previous figures stay on screen, slightly faded, until the new ones arrive. |
| A tab cannot load | A message such as *Couldn't load the overview. Check your connection and try again.* with a **Retry** button. |
| No data for a card | The card's own message, for example *No setting selections in this period yet.* or **None yet**. |

Money values on most cards use your store's currency symbol (a dollar sign if none is set). Large amounts are shortened, for example **$1.2M**, **$236K** or **$840**.

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Analytics uses it |
| ------ | --------------------- |
| [Orders](./order-management/orders.md) | Orders, revenue, average selling price, sales team and purchase figures. Status changes decide which orders count as revenue. |
| [Cart Products](./sales-funnel/cart-products.md) and [Wishlist Products](./sales-funnel/wishlist-products.md) | Cart and wishlist items count as selections. Wishlist adds feed **Wishlist Added**. |
| [Subscription & Billing](./subscription.md) | The configurators your company has enabled decide **Total Combinations**, **Configurators** and **Most Selected Category**. |
| [Configurator products](./product-management/configurator-products/ring-configurator.md) | The catalog rows of each configurator give the combinations and the design names on **Top Designs**. |
| [Diamond Shape](./product-management/masters/diamond-shape.md), [Head](./product-management/masters/head.md), [Side Setting](./product-management/masters/side-setting.md), [Metal Karat](./product-management/masters/metal-master/metal-karat.md), [Stone Master](./product-management/masters/stone-master.md) | Supply the shape, setting, metal and stone names on the cards. Only stones not marked as diamonds count on **Gemstone Analytics**. |
| [Product Margin](./settings/margin-cost-center/product-margin.md) | The margin saved with each order item feeds **Highest Margin Category**. |
| [Stores](./roles-permission/stores.md) and [User Management](./roles-permission/user-management.md) | Decide which orders and activity a user sees, and supply executive names on **Sales Team Performance**. |
| [Multi Currency](./settings/multi-currency.md) | Your default currency supplies the symbol on money values. |

### Modules That Depend On It

None. Analytics only reads data. No other page uses its figures.

### What Changes If…

| Change | Effect on Analytics |
| ------ | ------------------- |
| An order is placed | Orders, revenue and purchase figures go up the next time a tab loads. |
| An order becomes **Returned**, **Failed** or **Cancelled** | It stays in **Orders Placed** but its value leaves revenue, average selling price and margin figures. |
| A configurator is enabled or disabled in Subscription | **Total Combinations**, **Configurators** and **Most Selected Category** change to match. |
| A master value is renamed, for example a shape or a head | The new name shows on the cards, including for past periods. |
| An order is reassigned to another user | Its revenue moves to that executive on **Sales Team Performance**, and to the user who now sees it. |
| A customer adds an item to a cart or wishlist | It counts as a selection for shape, setting, metal and stone figures. |

---

## Edge Cases / Notes

- **The period resets when you switch tabs.** Each tab starts on **Month** every time you open it, even if you picked another period there before.
- **Global Trend covers every storefront.** Its figures include all clients on the platform, not only your company.
- **Stock Alerts is always empty.** Stock levels are not tracked in the catalog, so the card shows *Stock levels aren't tracked in the catalog yet.*
- **Some revenue columns always show a $ sign.** **Revenue** on **Top Designs** and **Average Order Value** and **Revenue** on **Sales Team Performance** use **$**, whatever your store's currency.
- **Avg. Config Value counts ordered items only**, even though the card says *per saved configuration*.
- **Visitors must be signed in.** Activity from storefront visitors who never identified themselves is not counted as a visitor, so conversion figures can look low.
- **Cart and wishlist items ignore store rules.** Every user sees them for the whole company.
- **Percentages are cut, not rounded.** Shares such as *57.14%* drop extra decimals.
- **Today may not start at your midnight.** The periods follow the platform's time zone, which may differ from your own.
