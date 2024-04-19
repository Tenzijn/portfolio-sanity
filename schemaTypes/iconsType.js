import {defineField, defineType} from 'sanity'

export const iconType = defineType({
  name: 'icon',
  title: 'Icon',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('A name is required for the icon'),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
    }),
  ],

  preview: {
    select: {
      title: 'name',
      media: 'icon',
    },
  },
})
