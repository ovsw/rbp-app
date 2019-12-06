/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled, Container} from 'theme-ui'
import {Box, Flex} from '@theme-ui/components'
import Img from 'gatsby-image'
// import BackgroundImage from 'gatsby-background-image'

// import {buildImageObj} from '../lib/helpers'
// import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import PageSideNav from './generic-page-side-nav'

function GenericPage ({_rawBody, title, section, headerImage = null}) {
  const sources = [
    headerImage.asset.mobileImage,
    {
      ...headerImage.asset.tabletImage,
      media: `(min-width: 491px)`
    },
    {
      ...headerImage.asset.desktopImage,
      media: `(min-width: 1200px)`
    }
  ]

  return (
    <>
      {headerImage && headerImage && (
        // <div>
        //   <Img fluid={headerImage.asset.fluid} alt={headerImage.alt} />
        // </div>
        <Img
          // Tag={`section`}
          // id={`media-test`}
          // className={className}
          fluid={headerImage.asset.desktopImage}
          // sx={{height: ['300px', '300px', '300px', '400px', '500px']}}
        />
      // <div sx={{
      //   height: ['300px', '300px', '300px', '500px']
      // }} />
        // </BackgroundImage>
      )}

      <Container sx={{maxWidth: '6xl', p: 4, py: [4, 5]}}s>
        {/* <Styled.root> */}
        <Flex sx={{flexWrap: 'wrap', flexDirection: 'row-reverse'}}>
          <Box sx={{width: ['full', 'full', '3/4'], pl: [0, 0, 4]}}>
            <div sx={{display: ['block', 'block', 'none'], mb: 4}}>
              <PageSideNav section={section} />
            </div>
            <div sx={{variant: 'styles', mb: 5}} role='main'>
              <div sx={{marginBottom: 4}} >
                <Styled.h1 sx={{variant: 'text.caps'}}>{title}</Styled.h1>
              </div>
              {_rawBody && <PortableText blocks={_rawBody} />}
            </div>
          </Box>
          <Box sx={{width: ['full', 'full', '1/4']}}>
            <aside sx={{
              pr: [0, 0, 4],
              pb: 4
            }}>
              <PageSideNav section={section} />
            </aside>
          </Box>
        </Flex>
        {/* </Styled.root> */}
      </Container>
    </>
  )
}

export default GenericPage
