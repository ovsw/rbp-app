/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {Container, jsx, Styled} from 'theme-ui'
import {Box, Flex} from '@theme-ui/components'
import HeroVideoBg from './hero-video-bg'

const Hero = () => {
  return (
    <Box as='section' pt={[1, 2, 3, 5]} pb={[1, 2, 3, 5]} sx={{
      borderBottom: '1px solid lightgrey',
      position: 'relative'
      // bg: 'gray.2'
    }} className='Hero'>
      <div sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 0
      }}>
        <HeroVideoBg />
      </div>
      <Container sx={{
        maxWidth: '5xl',
        position: 'relative',
        zIndex: 10,
        my: [3, 4, 4, 3, 5]
        // bg: 'rgba(0,0,0,.32)'
      }}>
        <Flex sx={{flexWrap: 'wrap', color: 'white'}}>
          <Box sx={{width: ['full', '2/3']}}>
            <div className='banner-info'>
              <Styled.h1 sx={{variant: 'text.caps', color: 'white', fontWeight: 'bold', textShadow: '2px 2px 2px rgba(0,0,0,.5)'}}>Welcome to Rambling Pines</Styled.h1>
              <Styled.h2 sx={{color: 'white', textShadow: '2px 2px 2px rgba(0,0,0,.5)'}} >A Summer Day Camp <span>Like no Other...</span></Styled.h2>
              <p sx={{textShadow: '1px 1px 2px rgba(0,0,0,.5)'}}><span sx={{fontWeight: 'bold'}}>Your kids deserve the best.</span> <br />The best supervision, the best activities, the best friends, the best memories. </p>
              <button href='tel:6096225658' sx={{variant: 'buttons.3D', py: 3}}>call us: (609) 622-5658</button>
            </div>
          </Box>
          <Box sx={{width: ['full', '1/3']}}>
            <div>
              <div>
                <Styled.h2 sx={{color: 'white', textShadow: '2px 2px 2px rgba(0,0,0,.5)'}}>Contact Us</Styled.h2>
                {/* <p>Please Contact Us Using the Form Below</p> */}
              </div>

              <iframe src='https://services.cognitoforms.com/f/xPoircp7HEGoNo_tpFEirg?id=156' style={{position: 'relative', minWidth: '100%', width: '100%'}} frameBorder='0' scrolling='yes' seamless='seamless' height='319' width='100%' />
              <script src='https://services.cognitoforms.com/scripts/embed.js' />

            </div>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Hero
