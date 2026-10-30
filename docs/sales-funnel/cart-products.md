---
sidebar_position: 1
id: cart-products
title: Cart Products
sidebar_label: Cart Products
---

# Cart Products

The **Cart Products** page (*Track products customers have added to their carts but not yet purchased*) shows the carts customers have started but not yet bought. Use it to follow up on abandoned carts and see which products and prices customers are interested in. The page is view-only: cart items cannot be edited or removed from the admin panel.

---

## Cart Products Screen List

| Action | Description |
| ------ | ----------- |
| **Search** | Type in the **Search** box above the table to find carts. The list updates about one second after you stop typing; clear the box to show all carts again. |
| **Filter** | Click **Filter** to show a filter box under each column heading. The filter narrows the rows already loaded on the current page. Click **Filter** again to hide the boxes. |
| **Sort** | Click the **Added On** heading to sort by date. The list opens with the most recently added carts first. The other columns cannot be sorted. |
| **Page size** | Use the rows-per-page menu at the bottom of the table to choose 25, 50, 75 or 100 rows (50 by default), and the page arrows to move between pages. |
| **View** | Click the **View Details** (eye) icon in the **Action** column to open the cart in the **View Cart Data** panel. |
| **View Documentation** | Opens the help page for this screen in a new browser tab. |

| Column | Description |
| ------ | ----------- |
| **Action** | The **View Details** icon. |
| **User Name** | The customer who owns the cart. A dash (-) is shown for guest shoppers. |
| **Product Name** | The name of the product in the cart. |
| **SKU** | The product's SKU. |
| **Items** | The number of items in the cart. |
| **Cart Total** | The cart's total value. |
| **Added On** | The date the cart was created. |

When there are no carts, the table shows **No records to display**. If the list cannot be loaded, an error message appears briefly at the top of the screen.

---

### View Cart Data

Clicking the **View** icon opens the **View Cart Data** panel on the right of the screen. Close it with the close button in its header. While the cart loads, placeholders are shown. If the cart cannot be loaded, the panel shows **Could not load the cart details**, the reason, and a **Try again** button.

Every product in the cart is shown one below the other, each with the sections below. A line is shown only when it has a value.

| Section | Details shown |
| ------- | ------------- |
| **Product Details** | The product image (a placeholder is shown if there is none), then **Title**, **SKU**, **Type**, **Quantity**, **Price**, **Metal**, **Karat**, **Size**, **Head Tone**, **Shank Tone**, **Band Tone** and **Engraving**. |
| **Offer Applied** | Shown when an offer discounted the product: **Offer**, **Coupon**, **Discount** and **Price After Discount**. |
| **Diamond Details** | Shown for products with diamonds: **Stone**, **Diamond Type**, **Shape**, **Carat**, **Color**, **Clarity**, **Cut**, **Side Diamond Type**, **Side Color**, **Side Clarity** and **Side Cut**. |
| **Price Breakdown** | How the price was built up: **Metal Value**, **Labour Charge**, **Other Charge**, **Center Diamond**, **Side Diamond**, **Margin** (amount and rate), **Price Correction** (before and after, when a price correction was applied) and **Final Price**. |

After the products, a **Cart Summary** shows **Sub Total**, **Discount**, **Sub Total After Discount**, **Tax** and **Cart Total**.

:::note
The cart panel does not show a customer section. To see who owns a cart, use the **User Name** column in the list. The customer's email and phone number for carts are included in the **Customers Cart** download on the [Customer Reports](../customer-management/customer-reports.md) page.
:::

:::tip
A product that is saved but not in a cart appears under [Wishlist Products](./wishlist-products.md).
:::
