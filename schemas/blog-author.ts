import {Rule} from 'sanity'

export default {
  title: 'Blog Author',
  name: 'blogAuthor',
  type: 'document',
  fields: [
    {name: 'name', type: 'string', title: 'Name', validation: (Rule: Rule) => Rule.required()},
    {
      name: 'blogPosts',
      type: 'array',
      title: 'Blog Posts',
      of: [{type: 'reference', to: [{type: 'blogPost'}]}],
    },
  ],
}
