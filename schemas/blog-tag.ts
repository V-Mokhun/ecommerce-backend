import {Rule} from 'sanity'

export default {
  title: 'Blog Tag',
  name: 'blogTag',
  type: 'document',
  fields: [
    {name: 'name', type: 'string', title: 'Name', validation: (Rule: Rule) => Rule.required()},
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (Rule: Rule) => Rule.required(),
      options: {
        source: 'name',
        slugify: (input: string) =>
          input.toLowerCase().replaceAll('.', '').replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'blogPosts',
      type: 'array',
      title: 'Blog Posts',
      of: [{type: 'reference', to: [{type: 'blogPost'}]}],
    },
  ],
}
