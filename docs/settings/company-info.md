---
sidebar_position: 6
id: company-info
title: Company Info
sidebar_label: Company Info
---

# Company Info

**Company Info** holds your company's contact details, logos and images, custom script and brand colors. The storefront uses these values, for example in the footer, on error and empty pages and in emails.

---

## Company Info Screen

The page has four tabs. Each tab has its own **Save** button that saves only after you click it.

| Tab | Description |
| --- | ----------- |
| **Company info** | Company name, contact details, address and copyright text. See [Company info](#company-info-tab). |
| **Logo** | Logos and images used across the storefront. See [Logo](#logo-tab). |
| **Script** | Third-party script added to the storefront. See [Script](#script-tab). |
| **Color** | Primary and secondary brand colors. See [Color](#color-tab). |

:::note
Users without **Edit** permission can view all tabs, but every field and the **Save** button are disabled.
:::

:::tip
Click **Save** before you switch to another tab. Unsaved changes are lost when you change tabs.
:::

---

## Company info Tab

Update the fields below and click **Save**.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Company Name** | ✅ | Your company or brand name. |
| **Company Email** | ✅ | Contact email. Must be a valid email address. |
| **Company Phone No** | ✅ | Contact number. Digits only, 8 to 10 digits. |
| **Company Address - Google Map Embed** | ✅ | Google Maps embed link for your address. Must be a valid URL. |
| **Company Address Link** | ✅ | Link that opens your address in a map. Must be a valid URL. |
| **Copy Right** | ✅ | Copyright text, for example © 2026 Your Company. All rights reserved. |
| **Company Address** | ✅ | Full company address. Supports multiple lines. |

:::note
Enter the phone number without the country code. A **+91** prefix on the saved number is removed when the page loads it.
:::

---

## Logo Tab

Click an upload box or drag a file onto it to add an image. Click the **x** icon on an uploaded image to remove it, then click **Save**. All images are optional.

| Image | Recommended Size | Remarks |
| ----- | ---------------- | ------- |
| **Header Logo** | 120px * 120px | Logo in the storefront header. |
| **Footer Logo** | 120px * 120px | Logo in the storefront footer. |
| **Favicon Image** | 16px * 16px | Small icon shown in the browser tab. |
| **Loader Image** | 120px * 120px | Image shown while pages load. |
| **Mail Template Image** | 120px * 120px | Logo used in emails. PNG only. |
| **Og Image** | 1200px * 630px | Preview image shown when a storefront link is shared on social media. |
| **Page Not found** | 400px * 400px | Image on the page-not-found page. |
| **Default Image** | 300px * 300px | Image shown when no other image is available. |
| **Order Not found** | 300px * 300px | Image shown when no order is found. |
| **Product Not Found** | 300px * 300px | Image shown when no product is found. |

Accepted file types are .png, .jpg, .jpeg, .gif and .svg, except **Mail Template Image**, which accepts .png only. Each file can be up to 10 MB.

---

## Script Tab

Paste a third-party script, for example Google Tag Manager, Google Analytics or a live chat widget, and click **Save**.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Script** | ✅ | Must start with `<script` and end with `</script>`. |

:::tip
To add more than one script, paste them one after another in the same box. The whole text must still start with `<script` and end with `</script>`.
:::

---

## Color Tab

Click a color box to open the color picker, choose a color and click **Save**.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Primary Color** | ✅ | Main brand color of the storefront. |
| **Secondary Color** | ✅ | Second brand color of the storefront. |
