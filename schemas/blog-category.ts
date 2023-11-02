import {Rule} from 'sanity'

export default {
  title: 'Blog Category',
  name: 'blogCategory',
  type: 'document',
  fields: [
    {name: 'name', type: 'string', title: 'Name', validation: (Rule: Rule) => Rule.required()},
    {
      name: 'blogPosts',
      type: 'array',
      title: 'Blog Posts',
      of: [{type: 'blogPost'}],
    },
  ],
}
