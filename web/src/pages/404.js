/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Container} from 'theme-ui'
import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <Container sx={{maxWidth: '6xl', p: 4, py: 6}}>
      <SEO title='404: Not found' />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
)

export default NotFoundPage
