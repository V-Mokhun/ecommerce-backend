export default {
  title: 'Color',
  name: 'colorItem',
  type: 'object',
  fields: [
    {name: 'name', type: 'string', title: 'Name'},
    {
      name: 'value',
      type: 'color',
      title: 'Value',
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
