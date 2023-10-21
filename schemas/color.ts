import {Rule} from 'sanity'

export default {
  title: 'Colors',
  name: 'colorItem',
  type: 'document',
  fields: [
    {name: 'name', type: 'string', title: 'Name', validation: (Rule: Rule) => Rule.required()},
    {
      name: 'value',
      type: 'color',
      title: 'Value',
      validation: (Rule: Rule) => Rule.required(),
      options: {
        disableAlpha: true,
        colorList: [
          '#FFF',
          '#000',
          '#444',
          '#FF0000',
          '#00FF00',
          '#0000FF',
          '#800080',
          '#FFFF00',
          '#FFA500',
        ],
      },
    },
  ],
}
