import {Rule} from 'sanity'

export default {
  name: 'contact',
  type: 'document',
  title: 'Contacts',
  fields: [
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: (Rule: Rule) => Rule.required().email(),
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone Number',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'phoneShort',
      type: 'string',
      title: 'Phone Number ( Without spaces and dashes )',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
}
