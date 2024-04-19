// This is for the About page schema type
import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About',
  type: 'document',

  _id: 'about',

  __experiental_actions: ['update', /*'create', 'delete',*/ 'publish'],

  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule) => Rule.required().error("Name field can't be empty"),
    }),

    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule) => Rule.required().error("Name field can't be empty"),
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Profile image: 200x200px',
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'reference',
      to: [{type: 'places'}],
    }),

    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
    }),

    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'number',
    }),

    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),

    defineField({
      name: 'social',
      title: 'Social',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'icon'}],
        },
      ],
    }),

    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'url',
        },
      ],
      description: 'Add your social media links here with same order as the social icons',
    }),
  ],

  initialValue: {
    _id: 'about',
  },
})
