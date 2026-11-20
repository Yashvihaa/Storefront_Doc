---
sidebar_position: 6
id: company-info
title: Company Info
sidebar_label: Company Info
---

# Company Info

## Overview

**Company Info** covers your company's contact details, logo, brand colours and fonts. They are four sections of the **General Setting** tab on the [Front-End Setting](./front-end-setting.md) page. There is no separate Company Info page in the menu.

Your storefront and the emails sent to customers use these values, for example your name and address in the footer, your logo in emails and your colours and fonts across the store.

:::note[Who can use it]
Anyone whose role has **View** on **Front-End Setting** can see every section. Without **Edit** permission, all fields and the **Save** button are disabled.
:::

---

## Data Displayed

### Company Info Screen

On **Front-End Setting**, open **General Setting**. A list of sections runs down the left side (a drop-down on phones). Click a section to open it.

| Section | What it holds |
| ------- | ------------- |
| **Company info** | Company name, contact person, email, phone, address, map links and copyright text. See [Company info Section](#company-info-section). |
| **Logo** | Your company logo. See [Logo Section](#logo-section). |
| **Color** | Primary and secondary brand colours. See [Color Section](#color-section). |
| **Font Family** | Primary and secondary fonts. See [Font Family Section](#font-family-section). |

TCC Tech also sees **Pricing** and **Web Settings** in this list. See [Front-End Setting](./front-end-setting.md#web-settings).

Each section has its own **Save** button at the top right of the page, next to the page title. It saves only the section you are viewing.

### Company info Section

The section is titled **Company Info**. It loads your saved details when it opens.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Company Name** | ✅ | Your company or brand name. Message: *Company Name is required*. |
| **Contact Person Name** | - | The main contact at your company. Up to 255 characters. Message: *Contact Person Name must be at most 255 characters*. |
| **Company Email** | ✅ | Contact email. Messages: *Company Email is required*, *Enter a valid email address*. |
| **Company Phone No** | ✅ | A country code picker (type a country name, code or dial code to search) and the number. Digits only, 8 to 10 digits. Messages: *Company Phone Number is required*, *Phone number must be digits only*, *Phone Number must be between 8 and 10 digits*. |
| **Company Key** | - | Your company key. Shown for reference and cannot be changed. |
| **Company Address - Google Map Embed** | ✅ | The Google Maps embed link for your address. Messages: *Embed Map is required*, *Enter a valid Embed Map link*. |
| **Company Address Link** | ✅ | A link that opens your address in a map. Messages: *Address link is required*, *Enter a valid Address link*. |
| **Copy Right** | ✅ | Copyright text, for example *© 2026 Your Company. All rights reserved.* Message: *Copy Right is required*. |
| **Company Address** | ✅ | Full company address. Several lines. Message: *Address is required*. |

### Logo Section

The section holds one image, **Company Logo** (*Size should be 120px \* 120px*).

| Action | Description |
| ------ | ----------- |
| **Upload** | Drag a file onto the upload box, or click **Browse** to pick one. |
| **Adjust** | After you pick a file, the **Adjust Logo** popup opens. Drag the image or use the arrow keys to position it, and use the zoom buttons to resize it. Click **Apply** to keep it. |
| **Adjust again** | Hover over an uploaded logo and click the adjust icon (*Adjust zoom and position*). |
| **Remove** | Hover over an uploaded logo and click the **x** icon. |

| Rule | Value |
| ---- | ----- |
| File types | .png, .jpg, .jpeg, .gif and .svg. Another type shows *Invalid file format. Please upload a PNG image.* |
| Size | Up to 10 MB. A larger file shows *You can only upload maximum size of 10 MB.* |
| Required | No. You can save without a logo. |

### Color Section

The section is titled **Color Setting**.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Primary Color** | ✅ | Main brand colour. Type a hex code, or click the colour box. Starts on black (#000000) until a colour is saved. |
| **Secondary Color** | ✅ | Second brand colour. Type a hex code, or click the colour box. Starts on white (#FFFFFF) until a colour is saved. |

Under each field is a row of colour swatches to pick from, plus a swatch that opens a custom colour picker. The primary row starts with colours taken from your logo and your saved colour. The secondary row starts with white.

| Message | When it appears |
| ------- | --------------- |
| *Enter a color code* | The field is empty when you click **Save**. |
| *Enter a valid hex code, e.g. #1A2B3C* | The code is not a valid hex colour. |

### Font Family Section

Both fonts come from Google Fonts.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Primary font** | ✅ | *Titles and headlines*. Type in the box (*Search Google Fonts*) and pick a font. |
| **Secondary font** | ✅ | *Paragraph and label text*. Type in the box and pick a font. |

Under each field, a sample line (*Handcrafted Diamond Rings in 14K & 18K Gold, from $1,250*) shows how the font looks. A field with nothing picked shows *No font selected*.

---

## How It Works

### Steps to Update Company Details

1. Open **Front-End Setting**, then **General Setting**, then **Company info**.
2. Change the fields.
3. Click **Save**. The message **Success** confirms it.

### Steps to Change the Logo

1. Open the **Logo** section.
2. Drag a file onto the box or click **Browse**.
3. Position and zoom the logo in **Adjust Logo**, then click **Apply**.
4. Click **Save**. The message **Success** confirms it.

### Steps to Change the Colours

1. Open the **Color** section.
2. For each colour, type a hex code, click a swatch, or open the custom picker.
3. Click **Save**. A confirmation message appears.

The admin dashboard and header pick up the new colours straight away.

### Steps to Change the Fonts

1. Open the **Font Family** section.
2. Search for and pick a **Primary font** and a **Secondary font**.
3. Click **Save**.

| Message | When it appears |
| ------- | --------------- |
| *Pick both a primary and a secondary font* | One of the fonts is empty. |
| *No changes to save* | Neither font has changed. |
| *Fonts saved* | The fonts were saved. |
| *Couldn't load the Google Fonts list. The saved font is still applied.* | The font list could not be loaded. The fields are disabled, and your saved fonts keep working. |

### Loading and Error States

| State | What you see |
| ----- | ------------ |
| Loading **Company info** | Grey placeholder fields. |
| Loading the font list | The search box shows *Loading fonts…*. |
| A required field is missing | The message appears in red under the field and nothing is saved. |
| Save fails | An error message explains why. Your changes stay on screen. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Company Info uses it |
| ------ | ------------------------ |
| [Front-End Setting](./front-end-setting.md) | These sections live on its **General Setting** tab and share its **Edit** permission. |
| Google Fonts | The font lists come from Google Fonts. |

### Modules That Depend On It

| Module | How it uses Company Info |
| ------ | ------------------------ |
| Storefront | Shows your company name, contact details, address, map, copyright text, logo, colours and fonts. |
| Emails | Use your company name, logo, primary and secondary colours, email, phone and address. See [Email Template](./email-template.md). |
| Admin panel | The dashboard and header use your colours. |

### What Changes If…

| Change | Effect |
| ------ | ------ |
| The company name, email, phone or address changes | The storefront and new emails show the new details. Emails already sent do not change. |
| The logo changes | The storefront and new emails show the new logo. |
| The colours change | The storefront, new emails and the admin dashboard and header use the new colours. |
| The fonts change | The storefront uses the new fonts. |

---

## Edge Cases / Notes

- **Not in the menu.** Company Info is reached through **Front-End Setting**, not its own menu item.
- **Save each section.** Unsaved changes are lost when you switch sections.
- **Company Key is fixed.** It identifies your company and cannot be changed here.
- **Phone length.** The phone number must be 8 to 10 digits, whatever country code is picked.
- **Logo message.** The wrong-file-type message mentions PNG, but .jpg, .jpeg, .gif and .svg are accepted too.

:::tip
Click **Save** before you open another section.
:::
