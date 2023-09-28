import {Rule} from 'sanity'

// Brand, Price, Status, isDiscount,

export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule: Rule) => Rule.required().min(1),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: (Rule: Rule) => Rule.required().min(1),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
      validation: (Rule: Rule) => Rule.min(1).max(5),
    },
    {
      name: 'colors',
      type: 'array',
      title: 'Colors',
      of: [
        {
          title: 'Color',
          name: 'colorItem',
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Name'},
            {
              name: 'value',
              type: 'color',
              title: 'Value',
              options: {disableAlpha: true, colorList: ['#FFF', '#000']},
            },
          ],
        },
      ],
      validation: (Rule: Rule) => Rule.required().min(1).unique(),
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Image',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{type: 'image'}],
    },
    {
      name: 'details',
      type: 'array',
      title: 'Details',
      of: [
        {
          title: 'Detail',
          name: 'detail',
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Name'},
            {name: 'value', type: 'string', title: 'Value'},
          ],
        },
      ],
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{type: 'category'}],
    },
    {
      name: 'isOnSale',
      type: 'boolean',
      title: 'On Sale',
    },
    {
      name: 'salePrice',
      type: 'number',
      title: 'Sale Price',
      validation: (Rule: Rule) => Rule.min(1).lessThan(Rule.valueOfField('price')),
    },
    {
      name: 'salePercentage',
      type: 'number',
      title: 'Sale Percentage, %',
      validation: (Rule: Rule) => Rule.min(1).max(99).integer(),
    },
    {name: 'isNew', type: 'boolean', title: 'New'},
    {name: 'isInStock', type: 'boolean', title: 'In Stock'},
    {name: 'isBestSeller', type: 'boolean', title: 'Best Seller'},
    {name: 'isFreeDelivery', type: 'boolean', title: 'Free Delivery'},
    {name: 'isGuaranteed', type: 'boolean', title: 'Guaranteed'},
  ],
  initialValue: {
    isOnSale: false,
    isNew: false,
    isInStock: true,
    isBestSeller: false,
    isFreeDelivery: false,
    isGuaranteed: false,
  },
}
