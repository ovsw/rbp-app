import React from 'react'
import {Link} from 'gatsby'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import media from '../../lib/responsive'

const TopBarRootDiv = styled.div`
  ${tw``};
`
const Desktop = styled.div`
  ${tw`hidden max-w-2xl mx-auto pt-6`};
  ${media.md`${tw`flex`}`};

  a {
    ${tw`inline-block no-underline text-grey-darkest uppercase text-sm font-bold`};
  }
`
const LeftColDiv = styled.div`
  ${tw`w-1/2 text-right pr-32`};
  a {
    ${tw`ml-8`};
  }
`
const RightColDiv = styled.div`
  ${tw`w-1/2 pl-32`};
  a {
    ${tw`mr-8`};
  }
`
const TopBar = () => {
  return (
    <TopBarRootDiv>
      <Desktop>
        <LeftColDiv>
          <Link to='/dates-and-rates/'>Dates &amp; Rates</Link>
          {/* <Link to='/'>Schedule Tour</Link> */}
          <Link to='/request-info/'>Request Info</Link>
        </LeftColDiv>
        <RightColDiv>
          <a href='https://ramblingpines.campintouch.com/ui/forms/application/camper/App' rel='noopener noreferrer' target='_blank'>Enroll Now</a>
          <a href='https://ramblingpines.campintouch.com/v2/login.aspx' rel='noopener noreferrer' target='_blank'>Parent Login</a>
        </RightColDiv>
      </Desktop>
    </TopBarRootDiv>
  )
}

export default TopBar
