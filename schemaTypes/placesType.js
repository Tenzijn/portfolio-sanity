import {defineField, defineType} from 'sanity'

export const placesType = defineType({
  name: 'places',
  title: 'Places',
  type: 'document',

  fields: [
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required().error("Country field can't be empty"),
      description: 'City, Country',
    }),
  ],
})
