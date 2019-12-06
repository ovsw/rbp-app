/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {Container, jsx, Styled} from 'theme-ui'
import {Box, Flex} from '@theme-ui/components'
import HeroVideoBg from './hero-video-bg'

import {FaPhone} from 'react-icons/fa'

import VideoPoster from '../../images/rambling-pines-camp-intro-video.jpg'
import BigLogo from '../../images/rambling-pines-art-logo-test-4.png'

const Hero = () => {
  return (
    <Box as='section' pt={[4, 4, 5, 5, 6]} pb={[2, 3, 4, 6]} mt={5} sx={{
      textAlign: 'center',
      borderBottom: '1px solid lightgrey',
      position: 'relative',
      zIndex: '1',
      // bg: 'gray.2',
      backgroundImage: `url('${VideoPoster}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'top right',
      minHeight: ['auto', 'auto', 'auto', 'calc(100vh - 130px)']
    }} className='Hero'>
      <div sx={{
        bg: 'rgba(0,0,0,.3)',
        display: ['none', 'none', 'block'],
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 1
      }} />
      <div sx={{
        display: ['none', 'none', 'block'],
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 0
      }}>
        <HeroVideoBg poster='https://rbpvideo-ac97.kxcdn.com/rambling-pines-camp-intro-video.jpg' />
      </div>
      <Container className='container' sx={{
        maxWidth: '5xl',
        position: 'relative',
        zIndex: 10
        // my: [3, 4, 4, 3, 5]
        // bg: 'rgba(0,0,0,.32)'
      }}>
        <img src={BigLogo} alt='Rambling Pines Big Logo' />
        <Styled.h1 sx={{
          textTransform: 'lowercase',
          color: 'white',
          fontWeight: 'normal',
          textShadow: '2px 2px 2px rgba(0,0,0,.5)',
          fontSize: [3, 4],
          fontFamily: 'Lato',

          mb: 0
        }}>A Summer Day Camp Like no Other.</Styled.h1>
        <p sx={{
          textShadow: '1px 1px 2px rgba(0,0,0,.5)',
          fontSize: [1, 2],
          color: 'light',
          fontFamily: 'Dosis',
          fontWeight: 'light',
          mt: 0
        }}>Your kids deserve the best. The best supervision, the best activities, the best friends, the best memories. </p>
        <a href='tel:6096225658' sx={{
          variant: 'buttons.3DAccent',
          display: 'inline-block',
          py: 3,
          mt: 4
        }}>
          <FaPhone sx={{position: 'relative', top: '2px'}} />
          Call us: (609) 622-5658
        </a>
      </Container>
    </Box>
  )
}

export default Hero
