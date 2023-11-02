import {Rule} from 'sanity'

export default {
  title: 'Blog Post',
  name: 'blogPost',
  type: 'document',
  fields: [
    {name: 'title', type: 'string', title: 'Title', validation: (Rule: Rule) => Rule.required()},
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (Rule: Rule) => Rule.required(),
      options: {
        source: 'title',
        slugify: (input: string) =>
          input.toLowerCase().replaceAll('.', '').replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'readTime',
      title: 'Read Time',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().min(1).max(60),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule: Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
        },
      ],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'blogAuthor'}],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'blogTag'}]}],
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'blogCategory'}]}],
    },
  ],
}
