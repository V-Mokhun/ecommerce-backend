import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import {colorInput} from '@sanity/color-input'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'e-commerce',

  projectId: '9m3083ev',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), colorInput(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})

