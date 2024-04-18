import {defineField, defineType} from 'sanity'

export const myJourneyType = defineType({
  name: 'myJourney',
  title: 'My Journey',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error("Title field can't be empty"),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'reference',
      to: [{type: 'places'}],
    }),
    defineField({
      name: 'from',
      title: 'From',
      type: 'date',
    }),
    defineField({
      name: 'to',
      title: 'To',
      type: 'date',
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
