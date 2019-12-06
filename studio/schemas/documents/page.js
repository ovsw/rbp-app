// import {format} from 'date-fns'
import {FiFile} from 'react-icons/fi'

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: FiFile,
  liveEdit: false,
  __experimental_actions: [ 'create', 'update', 'publish', 'delete' ], /* 'create', 'delete' */
  fieldsets: [
    {title: 'SEO Info',
      name: 'seo',
      options: {collapsible: true, collapsed: true}
    }
  ],
  fields: [
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      fieldset: 'seo'
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      fieldset: 'seo'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'longTitle',
      title: 'Long Title (optional)',
      type: 'string',
      description: 'This is the main heading of the page. If left empty, the "Title" field above will be used instead.'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: Rule => Rule.error('You have to fill out the slug of the page.').required(),
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      title: 'Section',
      name: 'section',
      type: 'string',
      options: {
        list: ['Future Families', 'About us', 'Current Families', 'Staff'],
        layout: 'radio',
        direction: 'horizontal'
      }
    },
    {
      name: 'headerImage',
      title: 'Header Image',
      type: 'mainImage'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'bodyPortableText'
    }
  ],
  orderings: [
    {
      name: 'createdAt',
      title: 'Created older->newer',
      by: [
        {
          field: '_createdAt',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug'
    },
    prepare ({title = 'No title', slug = {}}) {
      const path = `/${slug.current}/`
      return {
        title,
        subtitle: path
      }
    }
  }
}
