import React from 'react'
import HubspotForm from 'react-hubspot-form'

export default ({node}) => <HubspotForm
  portalId='5711800'
  formId={node.formId}
  onSubmit={() => console.log('Submit!')}
  onReady={(form) => console.log('Form ready!')}
  loading={<p>Please wait, loading: {node.title} ...</p>}
/>
