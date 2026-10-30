import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// Mirrors the admin panel's side menu: one heading per menu section, with the same groups and page names.
// Doc ids are folder path + the `id` in each page's front matter.

const section = (label: string, items: NonNullable<SidebarsConfig[string]>, slug?: string, description?: string) => ({
  type: 'category' as const,
  label,
  className: 'sf-section',
  collapsible: false,
  ...(slug ? {link: {type: 'generated-index' as const, slug, description}} : {}),
  items,
});

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    'dashboard',
    'analytics',

    section(
      'Orders Management',
      [
        {type: 'doc', id: 'order-management/orders', label: 'Orders'},
        {type: 'doc', id: 'order-management/manufacturer-charges', label: 'Manufacturer Charges'},
      ],
      'order-management',
      'View orders, track their status and manage manufacturer charge templates.',
    ),

    section(
      'Product Management',
      [
        {
          type: 'category',
          label: 'Product',
          link: {
            type: 'generated-index',
            slug: 'configurator-products',
            description: 'Products and designs created through each product configurator.',
          },
          items: [
            {type: 'doc', id: 'product-management/configurator-products/ring-configurator', label: 'Ring Configurator Product'},
            {type: 'doc', id: 'product-management/configurator-products/three-stone-configurator', label: 'Threestone Configurator'},
            {type: 'doc', id: 'product-management/configurator-products/eternity-band-configurator', label: 'Eternity Band Configurator'},
            {type: 'doc', id: 'product-management/configurator-products/bracelet-configurator', label: 'Bracelet Configurator'},
            {type: 'doc', id: 'product-management/configurator-products/stud-configurator', label: 'Stud Configurator'},
            {type: 'doc', id: 'product-management/configurator-products/pendant-configurator', label: 'Pendant Configurator'},
            {
              type: 'link',
              label: 'Add Birthstone Products',
              href: '/product-management/configurator-products/birthstone-products#add-a-new-birthstone-product',
            },
            {type: 'doc', id: 'product-management/configurator-products/birthstone-products', label: 'All Birthstone Products'},
          ],
        },
        {type: 'doc', id: 'product-management/offers-discounts', label: 'Offers / Coupon code'},
        {type: 'doc', id: 'product-management/diamond-group-master', label: 'Diamond Group Master'},
        {type: 'doc', id: 'product-management/all-products', label: 'All Products'},
        {
          type: 'category',
          label: 'Masters',
          link: {
            type: 'generated-index',
            slug: 'product-management/masters',
            description: 'Master data used to build products: shapes, stones, metals, sizes, settings and tags.',
          },
          items: [
            {
              type: 'category',
              label: 'Metal Master',
              link: {
                type: 'generated-index',
                slug: 'product-management/masters/metal-master',
                description: 'The metals, metal tones and metal karats used in your products.',
              },
              items: [
                'product-management/masters/metal-master/metals',
                'product-management/masters/metal-master/metal-tone',
                'product-management/masters/metal-master/metal-karat',
              ],
            },
            'product-management/masters/diamond-shape',
            'product-management/masters/carat-size',
            'product-management/masters/clarity',
            'product-management/masters/color',
            'product-management/masters/cut',
            'product-management/masters/stone-master',
            'product-management/masters/stone-type',
            'product-management/masters/mm-size',
            'product-management/masters/head',
            'product-management/masters/shank',
            'product-management/masters/side-setting',
            'product-management/masters/setting-type-style',
            'product-management/masters/chain-type',
            'product-management/masters/push-and-back',
            'product-management/masters/item-size-master',
            'product-management/masters/item-length-master',
            'product-management/masters/tags',
          ],
        },
      ],
      'product-management',
      'Manage products, configurator products, diamond group pricing and offers.',
    ),

    section(
      'Customer Management',
      [
        {type: 'doc', id: 'customer-management/customers', label: 'Customers'},
        {type: 'doc', id: 'customer-management/customer-reports', label: 'Customer Reports'},
      ],
      'customer-management',
      'View your customers and their activity reports.',
    ),

    section(
      'Cart & Wishlist Management',
      [
        {type: 'doc', id: 'sales-funnel/cart-products', label: 'Cart Products'},
        {type: 'doc', id: 'sales-funnel/wishlist-products', label: 'Wishlist Products'},
      ],
      'sales-funnel',
      'See the products customers have added to their carts and wishlists.',
    ),

    section(
      'Roles & Permission',
      [
        {
          type: 'category',
          label: 'Roles & Permissions',
          items: [
            {type: 'doc', id: 'roles-permission/roles', label: 'Roles'},
            {type: 'doc', id: 'roles-permission/user-management', label: 'User Management'},
            {type: 'doc', id: 'roles-permission/stores', label: 'Stores'},
          ],
        },
      ],
      'roles-permission',
      'Control who can access the admin panel, what they can do and which store they belong to.',
    ),

    section(
      'Configurators',
      [
        {
          type: 'category',
          label: 'Config Settings',
          items: [
            {type: 'doc', id: 'config-setting/ring-configurator', label: 'Ring Configurator'},
            {type: 'doc', id: 'config-setting/three-stone-configurator', label: 'Three Stones Configurator'},
            {type: 'doc', id: 'config-setting/eternity-configurator', label: 'Eternity Configurator'},
            {type: 'doc', id: 'config-setting/bracelet-configurator', label: 'Bracelet Configurator'},
            {type: 'doc', id: 'config-setting/pendant-configurator', label: 'Pendant Configurator'},
            {type: 'doc', id: 'config-setting/earring-configurator', label: 'Earring Configurator'},
            {type: 'doc', id: 'config-setting/single-dynamic-product', label: 'Single Dynamic Product'},
            {type: 'doc', id: 'config-setting/hld-products', label: 'HLD Products'},
          ],
        },
      ],
      'configurators',
      'Choose which options appear in each product configurator.',
    ),

    section(
      'Settings',
      [
        {
          type: 'category',
          label: 'Margin Management',
          link: {
            type: 'generated-index',
            slug: 'margin-cost-center',
            description: 'Set margins, duties, rounding, metal and ring size rules used in pricing.',
          },
          items: [
            {type: 'doc', id: 'settings/margin-cost-center/rounding', label: 'Rounding'},
            {type: 'doc', id: 'settings/margin-cost-center/ring-size', label: 'Ring Size'},
            {type: 'doc', id: 'settings/margin-cost-center/metal-management', label: 'Metal Margin'},
            {type: 'doc', id: 'settings/margin-cost-center/diamond-margin', label: 'Diamond Margin'},
            {type: 'doc', id: 'settings/margin-cost-center/product-margin', label: 'Product Margin'},
            {type: 'doc', id: 'settings/margin-cost-center/duty-and-tariff', label: 'Duty & Tariff'},
            {type: 'doc', id: 'settings/margin-cost-center/labour-management', label: 'Labour Management'},
          ],
        },
        {type: 'doc', id: 'settings/metal-rate-setting', label: 'Metal Rate Settings'},
        {type: 'doc', id: 'settings/multi-currency', label: 'Multi Currency'},
        {type: 'doc', id: 'settings/tax-master', label: 'Tax Master'},
        {type: 'doc', id: 'settings/sku-builder', label: 'SKU Builder'},
        {type: 'doc', id: 'settings/email-template', label: 'Email Template'},
        {type: 'doc', id: 'settings/invoice-template', label: 'Invoice Template'},
        {type: 'doc', id: 'settings/audit-log', label: 'Audit Log'},
      ],
      'settings',
      'Store-wide settings for margins, metal rates, tax, currency, SKU format and the audit log.',
    ),

    section('Subscription & Billing', [{type: 'doc', id: 'subscription', label: 'Subscription & Billing'}]),

    section('Front End Setting', [
      {type: 'doc', id: 'settings/front-end-setting', label: 'Front-End Settings'},
      {type: 'doc', id: 'settings/gift-charges', label: 'Gift Charges'},
      {type: 'doc', id: 'settings/price-display', label: 'Price Display'},
    ]),
  ],
};

export default sidebars;
