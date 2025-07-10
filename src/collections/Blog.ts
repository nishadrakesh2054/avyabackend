import { CollectionConfig } from 'payload'

const Blog: CollectionConfig = {
  slug: 'blogs',
  admin: {
    useAsTitle: 'title',
    group: 'CONTENT',
  },
  access: {
    read: () => true,

    update: ({ req }) => {
      return (
        req.user?.role === 'admin' || req.user?.role === 'viewer' || req.user?.role === 'editor'
      )
    },

    create: ({ req }) => {
      return (
        req.user?.role === 'admin' || req.user?.role === 'viewer' || req.user?.role === 'editor'
      )
    },

    delete: ({ req }) => {
      return req.user?.role === 'admin'
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },

    {
      name: 'content',
      type: 'richText',
      required: true,

      label: 'Content',
    },
    {
      name: 'readTime',
      type: 'text',
      label: 'Read Time',
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Boxing Training',
          value: 'Boxing Training',
        },
        {
          label: 'Body Building Class',
          value: 'Body Building Class',
        },
        {
          label: 'Meditation Class',
          value: 'Meditation Class',
        },
        {
          label: 'Mental Yoga Training',
          value: 'Mental Yoga Training',
        },
        {
          label: 'CrossFit Body Class',
          value: 'CrossFit Body Class',
        },
      ],
      defaultValue: 'Boxing Training',
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      defaultValue: () => new Date().toISOString(),
    },

    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Blog image',
    },
  ],
}

export default Blog
