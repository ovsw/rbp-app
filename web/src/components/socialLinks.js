import React from 'react'

import tw from 'tailwind.macro'
import styled from 'styled-components'

const SocialLinksWrapper = styled.div`
  ${tw`mb-4`};
`

const SocialLinks = () => {
  return (
    <SocialLinksWrapper>
      Social Links Here
    </SocialLinksWrapper>
  )
}

export default SocialLinks
