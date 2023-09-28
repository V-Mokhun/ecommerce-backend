import {Rule} from 'sanity'

export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule: Rule) => Rule.required().min(1),
    },
    {
      name: 'icon',
      type: 'image',
      title: 'Icon',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'products',
      type: 'array',
      title: 'Products',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'product',
            },
          ],
        },
      ],
    },
  ],
}
