import {defineField, defineType} from 'sanity'

export const skillsType = defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().error("Language field can't be empty"),
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required().error("Category field can't be empty"),
      options: {
        list: ['computerLanguages', 'tools', 'os', 'learning', 'workflow'],
      },
    }),

    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
    }),

    defineField({
      name: 'experience',
      title: 'Experience',
      type: 'string',
      options: {
        list: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
      },
    }),
  ],
})
