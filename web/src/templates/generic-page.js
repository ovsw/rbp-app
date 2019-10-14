import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import GenericPage from '../components/generic-page'

// import {toPlainText} from '../lib/helpers'

const GenericPageTemplate = props => {
  const {data, errors, location} = props
  const page = data && data.page

  return (
    <Layout>
      {errors && <SEO seoTitle='GraphQL Error' />}
      {page && <SEO seoTitle={page.seoTitle || page.title || 'Untitled'} description={page.seoDescription || ''} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      <GenericPage {...page} />
    </Layout>
  )
}

export default GenericPageTemplate

export const query = graphql`
  query GenericPageTemplateQuery($id: String!) {
    page: sanityPage(id: {eq: $id}) {
      id
      seoTitle
      seoDescription
      title
      slug {
        current
      }
      _rawBody(resolveReferences: {maxDepth: 5})
    }
  }
`
