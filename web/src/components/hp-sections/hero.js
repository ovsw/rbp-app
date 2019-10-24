import React from 'react'
import tw from 'tailwind.macro'
import styled from 'styled-components'

const HeroRootDiv = styled.div`
  ${tw`border-solid border-0 border-b border-grey-light`};
`

const Hero = () => {
  return (
    <HeroRootDiv>
      Hero
    </HeroRootDiv>
  )
}

export default Hero
