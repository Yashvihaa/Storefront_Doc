---
sidebar_position: 6
id: company-info
title: Company Info
sidebar_label: Company Info
---

# Company Info

**Company Info** holds your company's contact details, logo, brand colors and fonts. The storefront uses these values, for example in the footer, in emails and for the look of your store.

These settings live on the **Front-End Setting** page, under the **General Setting** tab. See [Front-End Setting](./front-end-setting.md) for the other tab, **Configurator Design**, and for the technical **Web Settings**.

---

## Company Info Screen

On **Front-End Setting**, open **General Setting**. A list of sections runs down the left side. Click a section to open it.

| Section | Description |
| ------- | ----------- |
| **Company info** | Company name, contact details, address and copyright text. See [Company info](#company-info-section). |
| **Logo** | Your company logo. See [Logo](#logo-section). |
| **Color** | Primary and secondary brand colors. See [Color](#color-section). |
| **Font Family** | Primary and secondary fonts. See [Font Family](#font-family-section). |
| **Web Settings** | Technical and integration settings. See [Front-End Setting](./front-end-setting.md#web-settings). |

Each section has its own **Save** button at the top right of the page, next to the page title. It saves only the section you are viewing.

:::note
Users without **Edit** permission can view every section, but all fields and the **Save** button are disabled.
:::

:::tip
Click **Save** before you open another section. Unsaved changes are lost when you switch sections.
:::

---

## Company info Section

Update the fields below and click **Save**. The values are loaded from your saved settings when the section opens.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Company Name** | ✅ | Your company or brand name. |
| **Company Email** | ✅ | Contact email. Must be a valid email address; otherwise "Enter a valid email address" is shown. |
| **Company Phone No** | ✅ | Contact number. Digits only, 8 to 10 digits. Otherwise "Phone number must be digits only" or "Phone Number must be between 8 and 10 digits" is shown. |
| **Company Key** | - | Your company key. Shown for reference and cannot be changed. |
| **Company Address - Google Map Embed** | ✅ | Google Maps embed link for your address. Must be a valid link; otherwise "Enter a valid Embed Map link" is shown. |
| **Company Address Link** | ✅ | Link that opens your address in a map. Must be a valid link; otherwise "Enter a valid Address link" is shown. |
| **Copy Right** | ✅ | Copyright text, for example © 2026 Your Company. All rights reserved. |
| **Company Address** | ✅ | Full company address. Supports multiple lines. |

A required field left empty shows a message such as "Company Name is required". When the save succeeds, the message **Success** appears.

:::note
Enter the phone number without the country code. A **+91** prefix on the saved number is removed when the section loads it.
:::

---

## Logo Section

The **Logo** section holds one image, **Company Logo**. The recommended size is 120px * 120px.

| Action | Description |
| ------ | ----------- |
| **Upload** | Drag a file onto the upload box, or click **Browse** to pick one. |
| **Adjust** | After you pick a file, the **Adjust Logo** popup opens. Drag the image or use the arrow keys to position it, use the zoom controls to resize it, then click **Apply**. Click **Reset** to go back to the default position, or **Cancel** to discard the change. |
| **Adjust again** | Hover over an uploaded logo and click the adjust icon to change its zoom and position. |
| **Remove** | Hover over an uploaded logo and click the **x** icon to remove it. |
| **Save** | Saves the logo. |

Accepted file types are .png, .jpg, .jpeg, .gif and .svg. Each file can be up to 10 MB; a larger file is rejected with "You can only upload maximum size of 10 MB." The logo is optional. When the save succeeds, the message **Success** appears.

---

## Color Section

The section is titled **Color Setting**. Click a color box to open the color picker, choose a color and click **Save**.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Primary Color** | ✅ | Main brand color of the storefront. |
| **Secondary Color** | ✅ | Second brand color of the storefront. |

After a successful save, the new colors are picked up by the admin dashboard and header as well.

---

## Font Family Section

Choose the fonts used on your storefront. Both fonts come from Google Fonts.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Primary font** | ✅ | Used for titles and headlines. Type in the box to search Google Fonts, then pick a font. |
| **Secondary font** | ✅ | Used for paragraph and label text. Type in the box to search Google Fonts, then pick a font. |

Under each field, a sample line shows how the selected font looks.

| Message | When it appears |
| ------- | --------------- |
| Pick both a primary and a secondary font | You clicked **Save** while one of the fonts is empty. |
| No changes to save | You clicked **Save** without changing either font. |
| Fonts saved | The fonts were saved. |
| Couldn't load the Google Fonts list. The saved font is still applied. | The font list could not be loaded, so the fields are disabled. Your saved fonts keep working. |
