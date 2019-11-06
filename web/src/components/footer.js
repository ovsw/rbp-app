/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled, Container, Footer as ThemeFooter} from 'theme-ui'
import {Box, Flex} from '@theme-ui/components'

// components
import SocialLinks from './socialLinks'

// images
import AcaLogoImg from '../images/aca-logo.png'

const Footer = () => {
  return (
    <ThemeFooter sx={{display: 'block'}}>
      <Container>
        <Flex sx={{flexWrap: 'wrap'}}>
          <Box sx={{width: ['full', 'full', '1/2'], px: [0, 4], py: [4, 0], textAlign: ['center', 'right'], borderRight: ['none', '1px solid lightgray']}}>
            <div className='vcard'>
              <div className='org'><Styled.h3 as='h3' sx={{mt: 0}}>Rambling Pines Day Camp</Styled.h3></div>
              <div className='tel'>
              Call Now <Styled.a href='tel:609-466-1212'>(609) 466-1212</Styled.a>
                <br />
              Vendors: <Styled.a href='tel:609-466-1212'>(609) 466-1212</Styled.a>
              </div>
              <Styled.a className='email' href='mailto:campinfo@ramblingpines.com'>campinfo@ramblingpines.com</Styled.a>
              <div className='adr' sx={{mt: 4}}>
                <div className='street-address'>174 Lambertville Hopewell Rd.</div>
                <span className='locality'>Hopewell</span>,{' '}
                <span className='region'>NJ</span>2{' '}
                <span className='postal-code'>08525</span>{' '}
                <span className='country-name'>United States</span>
              </div>

            </div>
          </Box>
          <Box sx={{width: ['full', 'full', '1/2'], px: 4, textAlign: 'center'}}>
            <SocialLinks />
            <img src={AcaLogoImg} sx={{maxWidth: 'full', width: '48'}} />
          </Box>
        </Flex>
      </Container>
      <div sx={{bg: 'white', textAlign: 'center', p: 2, borderTop: '1px solid lightgray', fontSize: 1}}>
      &copy; {new Date().getFullYear()}, Rambling Pines Day Camp
        |
        Website by <a href='https://ovswebsites.com'>OVS Websites</a>
      </div>
    </ThemeFooter>
  )
}

export default Footer
