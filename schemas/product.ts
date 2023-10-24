import {Rule} from 'sanity'

export default {
  name: 'product',
  type: 'document',
  title: 'Products',
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
        slugify: (input: string) =>
          input.toLowerCase().replaceAll('.', '').replace(/\s+/g, '-').slice(0, 200),
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
      name: 'isOnSale',
      type: 'boolean',
      title: 'On Sale',
    },
    {
      name: 'oldPrice',
      type: 'number',
      title: 'Old Price',
      validation: (Rule: Rule) => Rule.min(1).greaterThan(Rule.valueOfField('price')),
    },
    {
      name: 'salePercentage',
      type: 'number',
      title: 'Sale Percentage, %',
      validation: (Rule: Rule) => Rule.min(1).max(99).integer(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
      validation: (Rule: Rule) => Rule.min(1).max(5).precision(1),
    },
    {
      name: 'brand',
      type: 'reference',
      title: 'Brand',
      to: [{type: 'brand'}],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'colors',
      type: 'array',
      title: 'Colors',
      of: [
        {
          type: 'reference',
          to: [{type: 'colorItem'}],
        },
      ],
      validation: (Rule: Rule) => Rule.unique(),
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Image',
      validation: (Rule: Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
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
          type: 'productDetail',
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
      name: 'similarProducts',
      type: 'array',
      title: 'Similar Products',
      of: [
        {
          type: 'reference',
          to: [{type: 'product'}],
        },
      ],
      validation: (Rule: Rule) => Rule.unique(),
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
