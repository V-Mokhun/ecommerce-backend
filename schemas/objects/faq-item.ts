import {Rule} from 'sanity'

export default {
  title: 'Faq Item',
  name: 'faqItem',
  type: 'object',
  fields: [
    {name: 'title', type: 'string', title: 'Title', validation: (Rule: Rule) => Rule.required()},
    {name: 'content', type: 'text', title: 'Content', validation: (Rule: Rule) => Rule.required()},
  ],
}
