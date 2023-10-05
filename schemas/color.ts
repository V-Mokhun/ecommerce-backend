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
      options: {disableAlpha: true, colorList: ['#FFF', '#000']},
    },
  ],
}
