---
sidebar_position: 9
id: front-end-setting
title: Front-End Setting
sidebar_label: Front-End Setting
---

# Front-End Setting

## Overview

**Front-End Setting** controls how your storefront looks and the company details it shows. It has two tabs:

| Tab | What it holds |
| --- | ------------- |
| **General Setting** | Company details, logo, colours and fonts, in sections down the left side. TCC Tech also sees **Pricing** and **Web Settings** here. |
| **Configurator Design** | The layout of the product configurator on your storefront. |

:::note[Who can use it]
Anyone whose role has **View** on this page can open every tab and section. Without **Edit** permission, all fields and **Save** buttons are disabled.

The **Pricing** and **Web Settings** sections appear only in TCC Tech's super admin portal. Client companies do not see them.
:::

---

## Data Displayed

### Front-End Setting Screen List

| Action | Description |
| ------ | ----------- |
| **General Setting** / **Configurator Design** | Switches between the two tabs. **General Setting** opens first. |
| Section list | On **General Setting**, the list down the left side (a drop-down on phones) opens one section at a time. |
| **Save** | Shown at the top right, next to the page title. Saves only the section or tab you are viewing. Disabled without **Edit** permission. |
| **Add Section** | Shown only for TCC Tech's own company. Adds a new layout. Disabled without **Add** permission. |

### General Setting Sections

| Section | What it holds | Shown to |
| ------- | ------------- | -------- |
| **Company info** | Company name, contact person, email, phone, address, map links and copyright text. See [Company Info](./company-info.md#company-info-section). | Everyone |
| **Logo** | Your company logo. See [Company Info](./company-info.md#logo-section). | Everyone |
| **Color** | Primary and secondary brand colours. See [Company Info](./company-info.md#color-section). | Everyone |
| **Font Family** | Primary and secondary fonts. See [Company Info](./company-info.md#font-family-section). | Everyone |
| **Pricing** | Platform prices for CAD design and user licences. See [Pricing](#pricing). | Super admin portal only |
| **Web Settings** | Technical settings and keys. See [Web Settings](#web-settings). | Super admin portal only |

### Configurator Design Tab

The tab lists the available configurator layouts as cards. Each card shows a preview image, the layout name and a short description. The selected card has its round selector filled.

| Action | Description |
| ------ | ----------- |
| **Preview** | Click the preview image to see it full screen. Click the close icon to return. |
| **Select a layout** | Click a card, or its round selector. Only one layout can be selected. |
| **Edit** | Shown only for TCC Tech's own company. Changes a layout's details. |
| **Save** | Applies the selected layout. When the header scrolls out of view, **Save** is repeated in a bar at the top of the screen. |

### Pricing

Shown only in the super admin portal. It holds two prices that apply to every client.

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **CAD Price** | ✅ | The price of a CAD design. Digits and one decimal point only. Must be more than 0. Messages: *CAD price is required*, *CAD price must be more than 0*. |
| **User Licence Price** | ✅ | The monthly price of one user licence. Digits and one decimal point only. Must be more than 0. Messages: *User licence price is required*, *User licence price must be more than 0*. |

### Web Settings

Shown only in the super admin portal, with the title **Security settings**. It holds the technical settings and keys that connect a storefront to 3D files, images, maps, sign-in providers and rate or inventory providers. Keys and secrets are hidden as dots; click the eye icon in a field to show or hide its value.

:::tip
These values are normally set up during onboarding. A wrong value can break the storefront, for example its 3D views, images or sign-in options.
:::

**Required fields**

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Metal Silver Id** | ✅ | Number that identifies Silver in the metal master. Message: *Metal silver id is required*. |
| **Metal Gold Id** | ✅ | Number that identifies Gold in the metal master. Message: *Metal gold id is required*. |
| **Metal Platinum Id** | ✅ | Number that identifies Platinum in the metal master. Message: *Metal platinum id is required*. |
| **Metal Tone Identifier** | ✅ | Pick one option from the list. Message: *metal tone identifier is required*. |
| **Glb url** | ✅ | Address of the 3D model files. Message: *glb url is required*. |
| **Image Base Url** | ✅ | Address of the product images. Message when empty: *glb url is required*. |
| **Site url** | ✅ | Address of the storefront. Messages: *Site URL is required*, *Enter a valid Site URL*. |
| **Reset Password** | ✅ | Address used for password reset. Message: *Reset Password is required*. |
| **Google Map Api Key** | ✅ | Key used to show maps. Message: *Google Map API Key is required*. |

**Optional fields**

| Field | Remarks |
| ----- | ------- |
| **Glb Key**, **Band Glb Key**, **Eternity Band Glb Key**, **Three Stone Glb Key**, **Bracelet Glb Key**, **Pendant Glb Key**, **Stud Glb Key** | Keys used with the 3D files, one for each configurator type. |
| **Metal Karat Value** | Text added after a karat number, for example the K in 14K. |
| **Default Metal / Karat** | The metal or gold karat used by default. Lists the active gold karats and the other metals. |
| **Instagram Secret Key** | Secret used for the Instagram integration. |
| **Login Redirection Path** | Page customers are sent to after signing in. |
| **Google Auth Status And Key**, **Facebook Auth Status And Key**, **Instagram Auth Status And Key**, **Apple Auth Status And Key** | Turn the switch on to offer that sign-in option, and enter its key. |
| **WhatsApp send message status** | Turn on to send WhatsApp messages. Two more fields appear: **WhatsApp send message api** and **WhatsApp send message api token**. When the switch is off, these two values are saved empty. |
| **Diamond Port API URL** and **Diamond Port API Key** | Address and key for the Diamond Port service. The URL must start with http:// or https://; otherwise *Enter a valid HTTP/HTTPS URL* is shown. |
| **Kitco API URL** and **Kitco API Key** | Address and key for the Kitco service. Enter the URL without http:// or https://; otherwise *No need to add http:// or https:// in the URL* is shown. |
| **Diamond Inventory Type** | Diamond inventory type. |
| **Subscription Extend Day** | Number of days for extending a subscription. Digits only. |
| **Stripe Subscription Success Url** | Address used after a subscription payment. Editable only for TCC Tech's own company. |
| **Support Mail** | The support email address, for example *support@company.com*. Message: *Enter a valid support email, e.g. support@company.com*. |

---

## How It Works

### Steps to Change a General Setting Section

1. Open **General Setting** and click a section in the list.
2. Change the fields. Each section loads its saved values when it opens.
3. Click **Save** at the top right.

Each section saves on its own. Switching to another section or tab discards changes you have not saved. See [Company Info](./company-info.md) for the messages each section shows.

### Steps to Choose a Configurator Layout

1. Open **Configurator Design**.
2. Click the preview image of a card to look at it full screen, if you want.
3. Click the card you want.
4. Click **Save**. A confirmation message appears.

### Steps to Change Pricing (TCC Tech only)

1. In the super admin portal, open **General Setting**, then **Pricing**.
2. Enter **CAD Price** and **User Licence Price**.
3. Click **Save**. The message **Prices saved** confirms it.

### Steps to Change Web Settings (TCC Tech only)

1. In the super admin portal, open **General Setting**, then **Web Settings**.
2. Change the fields. Click the eye icon to check a hidden value.
3. Click **Save**. A confirmation message appears and the values reload.

### Loading and Error States

| State | What you see |
| ----- | ------------ |
| Loading a section | Grey placeholder fields. |
| A section cannot be loaded | An error message explains why. |
| Save fails | An error message explains why. Your changes stay on screen. |
| A required field is missing | The message appears in red under the field and nothing is saved. |

---

## Dependencies and Impact

### Modules It Depends On

| Module | How Front-End Setting uses it |
| ------ | ----------------------------- |
| [Metals](../product-management/masters/metal-master/metals.md) and [Metal Karat](../product-management/masters/metal-master/metal-karat.md) | **Default Metal / Karat** lists the active gold karats and metals. The metal IDs in **Web Settings** must match the metal master. |
| Google Fonts | The **Font Family** section searches Google Fonts. |

### Modules That Depend On It

| Module | How it uses these settings |
| ------ | -------------------------- |
| Storefront | Shows your company details, logo, colours, fonts and the chosen configurator layout. Uses the **Web Settings** addresses for 3D files, images, sign-in options and maps. |
| Emails | Use your company name, logo, colours, email, phone and address. See [Email Template](./email-template.md). |
| [Metal Rate Settings](./metal-rate-setting.md) | Recognises Gold, Silver and Platinum by **Metal Gold Id**, **Metal Silver Id** and **Metal Platinum Id**. |
| [Labour Management](./margin-cost-center/labour-management.md) | Uses **Metal Gold Id** to decide when to ask for a karat. |
| [Subscription & Billing](../subscription.md#users--licences) | Shows **User Licence Price** as the price of one licence. |
| [Orders](../order-management/orders.md) and [Enquiry](../enquiry.md) | A client's CAD request uses **CAD Price**. When it is not set, the request has no amount. |
| Admin panel | The **Color** section's colours are also used in the admin dashboard and header. Images in the admin load from **Image Base Url**. |

### What Changes If…

| Change | Effect |
| ------ | ------ |
| Company details, logo, colours or fonts change | The storefront and new emails use the new values. |
| A different configurator layout is saved | The storefront configurator uses the new layout. |
| **Metal Gold Id**, **Metal Silver Id** or **Metal Platinum Id** is wrong | Metal Rate Settings and Labour Management no longer recognise that metal. |
| **Image Base Url** or **Glb url** is wrong | Images or 3D views stop loading. |
| **CAD Price** changes | New CAD requests use the new price for every client. |
| **User Licence Price** changes | **Buy User Licences** shows the new price to every client. |

---

## Edge Cases / Notes

- **One section at a time.** **Save** saves only the section you are viewing.
- **Pricing applies to everyone.** **CAD Price** and **User Licence Price** are one platform price for all clients, not a per-client setting.
- **Image Base Url message.** When **Image Base Url** is empty, the message says *glb url is required*.
- **Add Section and Edit.** **Add Section** and the **Edit** button on layout cards are shown only for TCC Tech's own company.
- **WhatsApp values.** Switching **WhatsApp send message status** off and saving clears the WhatsApp address and token.
