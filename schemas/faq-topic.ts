import {Rule} from 'sanity'

export default {
  title: 'Faq Topics',
  name: 'faqTopic',
  type: 'document',
  fields: [
    {name: 'name', type: 'string', title: 'Name', validation: (Rule: Rule) => Rule.required()},
    {
      name: 'items',
      type: 'array',
      title: 'Items',
      of: [{type: 'faqItem'}],
      validation: (Rule: Rule) => Rule.required().min(1),
    },
  ],
}
