/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled, Container} from 'theme-ui'
import {Box, Flex} from '@theme-ui/components'

// import {buildImageObj} from '../lib/helpers'
// import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import PageSideNav from './generic-page-side-nav'

// import styles from './blog-post.module.css'

function GenericPage ({_rawBody, title, section}) {
  return (
    <Container sx={{maxWidth: '6xl', p: 4, py: 5, bg: 'gray.1'}}>
      {/* <Styled.root> */}
      <Flex >
        <Box sx={{width: ['full', 'full', '1/4']}}>
          <aside sx={{
            pr: 4
          }}>
            {/* // TODO: add other sidebar widgets */}
            <PageSideNav section={section} />
          </aside>
        </Box>
        <Box sx={{variant: 'styles', width: ['full', 'full', '3/4'], pl: 4}}>
          <div sx={{marginBottom: 4}} >
            <Styled.h1 sx={{variant: 'text.caps'}}>{title}</Styled.h1>
          </div>
          {_rawBody && <PortableText blocks={_rawBody} />}
        </Box>
      </Flex>
      {/* </Styled.root> */}
    </Container>
  )
}

export default GenericPage
