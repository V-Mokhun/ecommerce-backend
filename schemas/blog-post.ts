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
          input
            .toLowerCase()
            .replaceAll('.', '')
            .replaceAll(':', '')
            .replace(/\s+/g, '-')
            .slice(0, 200),
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
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'blogTag'}]}],
      validation: (Rule: Rule) => Rule.required().min(1),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'blogCategory'}],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      author: 'author.name',
    },
    prepare(selection: {title: string; author: string; media: string}) {
      const {title, author, media} = selection
      return {
        title,
        media,
        subtitle: `Written by: ${author ? author : 'unknown'}`,
      }
    },
  },
}
