import React from 'react'
// import {buildImageObj} from '../lib/helpers'
// import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'

// import styles from './blog-post.module.css'

import styled from 'styled-components'
import tw from 'tailwind.macro'

const ContainerDiv = styled.div`
  ${tw`max-w-xl mx-auto px-4 py-px`};
  ${tw`bg-grey-lighter`};
`

function GenericPage (props) {
  const {_rawBody, title} = props
  return (
    <>
      <ContainerDiv>
        <h1>{title}</h1>
        {_rawBody && <PortableText blocks={_rawBody} />}
      </ContainerDiv>
    </>
  )
}

export default GenericPage
