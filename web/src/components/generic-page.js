/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled, Container} from 'theme-ui'
// import {Box, Flex} from '@theme-ui/components'

// import {buildImageObj} from '../lib/helpers'
// import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'

// import styles from './blog-post.module.css'

function GenericPage (props) {
  const {_rawBody, title} = props
  return (
    <div
      sx={{
        variant: 'styles'
      }}>
      {/* <Styled.root> */}
      <Container sx={{maxWidth: '5xl', p: 4, py: 5, bg: 'gray.1'}}>
        <Styled.h1>{title}</Styled.h1>
        {_rawBody && <PortableText blocks={_rawBody} />}
      </Container>
      {/* </Styled.root> */}
    </div>
  )
}

export default GenericPage
