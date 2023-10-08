import {Rule} from 'sanity'

export default {
  name: 'banner',
  type: 'document',
  title: 'Banners',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'desktopImage',
      type: 'image',
      title: 'Desktop Image',
      validation: (Rule: Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'mobileImage',
      type: 'image',
      title: 'Mobile Image',
      validation: (Rule: Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'link',
      type: 'string',
      title: 'Link',
      description: 'Example: /products/wearables',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'size',
      type: 'string',
      title: 'Size',
      options: {
        list: [
          {title: 'Large', value: 'lg'},
          {title: 'Medium', value: 'md'},
          {title: 'Small', value: 'sm'},
        ],
        layout: 'radio',
      },
      validation: (Rule: Rule) => Rule.required(),
      initialValue: 'md',
    },
  ],
}
