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
      name: 'shortName',
      type: 'string',
      title: 'Short Name',
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
			options: {
				hotspot: true
			}
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
