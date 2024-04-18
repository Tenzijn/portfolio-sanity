import {defineField, defineType} from 'sanity'

export const hobbiesType = defineType({
  name: 'hobbies',
  title: 'Hobbies',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
  ],
})
