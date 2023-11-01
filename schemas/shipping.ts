import {Rule} from 'sanity'

export default {
  title: 'Shipping Options',
  name: 'shipping',
  type: 'document',
  fields: [
    {name: 'name', type: 'string', title: 'Name', validation: (Rule: Rule) => Rule.required()},
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: (Rule: Rule) => Rule.required().min(0),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description (For example: 7-30 business days)',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
}
