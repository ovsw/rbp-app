import {FaHubspot} from 'react-icons/fa'

export default {
  name: 'hubSpotFormEmbed',
  type: 'object',
  title: 'Hubspot Form Embed',
  icon: FaHubspot,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule =>
        Rule.required()
    },
    {
      title: 'Form ID (formId)',
      name: 'formId',
      type: 'string',
      validation: Rule =>
        Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
