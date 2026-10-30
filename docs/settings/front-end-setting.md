---
sidebar_position: 9
id: front-end-setting
title: Front-End Setting
sidebar_label: Front-End Setting
---

# Front-End Setting

The **Front-End Setting** page controls how your storefront looks and which technical settings it uses. It has two tabs.

| Tab | Description |
| --- | ----------- |
| **General Setting** | Company details, logo, colors, fonts and technical settings. Open it to see the sections described in [Company Info](./company-info.md) and [Web Settings](#web-settings) below. |
| **Configurator Design** | Choose the layout of the product configurator. See [Configurator Design](#configurator-design). |

Each tab (and each section of **General Setting**) has its own **Save** button at the top right of the page, next to the page title. It saves only what you are viewing. Switching to another tab or section discards unsaved changes.

:::note
Users without **Edit** permission can open every tab and section, but all fields and **Save** buttons are disabled.
:::

---

## Configurator Design

The **Configurator Design** tab lists the available layouts for the product configurator as cards. Each card shows a preview image, the layout name and a short description.

| Action | Description |
| ------ | ----------- |
| **Preview** | Click the preview image to see it full screen. Click the close icon to return. |
| **Select a layout** | Click a card, or its round selector, to choose that layout. Only one layout can be selected. |
| **Save** | Applies the selected layout. The message returned by the system is shown when it succeeds. |

:::note
The **Edit** button on a card and the **Add Section** button at the top of the page are shown only for the platform owner's own account. They are not available to store accounts.
:::

---

## Web Settings

**Web Settings** is a section of the **General Setting** tab, titled **Security settings** on screen. It holds technical settings and keys that connect your storefront to 3D files, images, maps, login providers and rate or inventory providers.

:::tip
These values are normally set up during onboarding. Change them only when your account manager or support asks you to; a wrong value can break the storefront, for example its 3D views, images or sign-in options.
:::

Keys and secrets are hidden as dots. Click the eye icon in a field to show or hide its value. Click **Save** at the top right of the page to save the section. When the save succeeds, the message returned by the system is shown and the values are reloaded.

### Required fields

| Field | Required | Remarks |
| ----- | -------- | ------- |
| **Metal Silver Id** | ✅ | Number that identifies Silver in your metal master. |
| **Metal Gold Id** | ✅ | Number that identifies Gold in your metal master. |
| **Metal Platinum Id** | ✅ | Number that identifies Platinum in your metal master. |
| **Metal Tone Identifier** | ✅ | Pick one option from the list. |
| **Glb url** | ✅ | Address of your 3D model files. |
| **Image Base Url** | ✅ | Address of your product images. |
| **Site url** | ✅ | Address of your storefront. Must be a valid web address; otherwise "Enter a valid Site URL" is shown. |
| **Reset Password** | ✅ | Address (URL) used for password reset. |
| **Google Map Api Key** | ✅ | Key used to show maps. |

:::note
The **Metal Gold Id**, **Metal Silver Id** and **Metal Platinum Id** values are how the [Metal Rate Settings](./metal-rate-setting.md) page recognises Gold, Silver and Platinum. [Labour Management](./margin-cost-center/labour-management.md) uses **Metal Gold Id** to decide when to ask for a karat.
:::

### Optional fields

| Field | Remarks |
| ----- | ------- |
| **Glb Key**, **Band Glb Key**, **Eternity Band Glb Key**, **Three Stone Glb Key**, **Bracelet Glb Key**, **Pendant Glb Key**, **Stud Glb Key** | Keys used with the 3D files, one for each configurator type. |
| **Metal Karat Value** | Text added after a karat number, for example the K in 14K. |
| **Default Metal / Karat** | The metal or gold karat used by default. Lists the active gold karats and the other metals. |
| **Instagram Secret Key** | Secret used for the Instagram integration. |
| **Login Redirection Path** | Page customers are sent to after signing in. |
| **Google Auth Status And Key**, **Facebook Auth Status And Key**, **Instagram Auth Status And Key**, **Apple Auth Status And Key** | Turn the switch on to offer that sign-in option, and enter its key. |
| **WhatsApp send message status** | Turn on to send WhatsApp messages. Two more fields appear: **WhatsApp send message api** and **WhatsApp send message api token**. When the switch is off, these two values are saved empty. |
| **Diamond Port API URL** and **Diamond Port API Key** | Address and key for the Diamond Port service. The URL must start with http:// or https://; otherwise "Enter a valid HTTP/HTTPS URL" is shown. |
| **Kitco API URL** and **Kitco API Key** | Address and key for the Kitco service. Enter the URL without http:// or https://; otherwise "No need to add http:// or https:// in the URL" is shown. |
| **Diamond Inventory Type** | Diamond inventory type. |
| **Subscription Extend Day** | Number of days for extending a subscription. Digits only. |
| **Stripe Subscription Success Url** | Address used after a subscription payment. It can be edited only from the platform owner's own account. |
