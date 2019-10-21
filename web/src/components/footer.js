import React from 'react'

import tw from 'tailwind.macro'
import styled from 'styled-components'
import media from '../lib/responsive'

// components
import SocialLinks from './socialLinks'

// images
import AcaLogoImg from '../images/aca-logo.png'

const FooterStyled = styled.footer`
  ${tw`border-0 border-t border-solid`};
`

const FooterWrapperDiv = styled.div`
  ${tw`max-w-2xl mx-auto`};
  ${tw`flex p-4`};

  h3 {
    ${tw`mt-0`};
  }
`
const LeftColDiv = styled.div`
  ${tw`w-full md:w-1/2 px-4`};
  ${tw`text-right border-solid border-0 border-r`};
`
const RightColDiv = styled.div`
  ${tw`w-full md:w-1/2 px-4`};
`
const CopyRightDiv = styled.div`
${tw`p-2 border-0 border-t border-solid`};
${tw`text-center text-sm bg-white`};
`
const PartnerLogoImage = styled.img`
  ${tw`w-48 max-w-full`};
`

const Footer = () => {
  return (
    <FooterStyled>
      <FooterWrapperDiv>
        <LeftColDiv>
          <div className='vcard'>
            <div className='org'><h3>Rambling Pines Day Camp</h3></div>
            <div className='tel'>Call Now (609) 466-1212<br />Vendors: (609) 466-1212</div>
            <a className='email' href='mailto:campinfo@ramblingpines.com'>campinfo@ramblingpines.com</a>
            <div className='adr'>
              <div className='street-address'>174 Lambertville Hopewell Rd.</div>
              <span className='locality'>Hopewell</span>,
              <span className='region'>NJ</span>,
              <span className='postal-code'>08525</span>
              <span className='country-name'>United States</span>
            </div>

          </div>
        </LeftColDiv>
        <RightColDiv>
          <SocialLinks />
          <PartnerLogoImage src={AcaLogoImg} />
        </RightColDiv>
      </FooterWrapperDiv>
      <CopyRightDiv>
      &copy; {new Date().getFullYear()}, Rambling Pines Day Camp
        |
        Website by <a href='https://ovswebsites.com'>OVS Websites</a>
      </CopyRightDiv>
    </FooterStyled>
  )
}

export default Footer
