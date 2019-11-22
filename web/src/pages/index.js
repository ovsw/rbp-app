import React from 'react'
import {graphql} from 'gatsby'
// import {
//   mapEdgesToNodes,
//   filterOutDocsWithoutSlugs,
//   filterOutDocsPublishedInTheFuture
// } from '../lib/helpers'
// import BlogPostPreviewList from '../components/blog-post-preview-list'
// import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import Hero from '../components/hp-sections/hero'
import Transportation from '../components/hp-sections/transportation'
import Lunch from '../components/hp-sections/lunch'
import Programs from '../components/hp-sections/programs'
import LocationGmap from '../components/hp-sections/location-gmap'
import Testimonials from '../components/hp-sections/testimonials'

const IndexPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  // const postNodes = (data || {}).posts
  //   ? mapEdgesToNodes(data.posts)
  //     .filter(filterOutDocsWithoutSlugs)
  //     .filter(filterOutDocsPublishedInTheFuture)
  //   : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <Hero />
      <Transportation />
      <Programs />
      <Lunch />
      <LocationGmap />
      <Testimonials />

      {/* {postNodes && (
          <BlogPostPreviewList
            title='Latest blog posts'
            nodes={postNodes}
            browseMoreHref='/archive/'
          />
        )} */}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost(
      limit: 1
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`
