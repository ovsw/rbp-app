/** @jsx jsx */
import React,  {useContext} from 'react' // eslint-disable-line
import {Container, jsx} from 'theme-ui'
// import {Box, Flex} from '@theme-ui/components'

import {FaTimes} from 'react-icons/fa'

const Announcement = ({closeAlert}) => {
  return (
    <div sx={{position: 'relative', bg: 'primary', color: 'light', textAlign: 'center', 'a': {color: 'accent'}}}>
      <Container sx={{
        p: 0,
        pb: 1,
        whiteSpace: ['normal', 'normal', 'nowrap'],
        overflow: 'hidden',
        '@keyframes marquee': {
          '0%': {
            transform: 'translate(0,0)'
          },
          '100%': {
            transform: 'translate(-100%,0)'
          }
        },
        '&:hover p': {
          '-webkit-animation-play-state': 'paused',
          '-moz-animation-play-state': 'paused',
          '-o-animation-play-state': 'paused',
          'animation-play-state': 'paused'
        }
      }}>
        <p sx={{margin: 0, fontSize: [1, 1, 2], display: 'inline-block', pl: ['0', '0', '100%'], pr: [5, 5, '0'], animation: ['none', 'none', 'marquee 10s linear infinite']}}>This is a text announcement. This text can be anything, and even contain <a href='https://www.ramblingpines.com/'>links</a></p>
      </Container>
      <button onClick={() => closeAlert()} sx={{position: 'absolute', px: '2', right: '0', top: '4px', zIndex: '10', bg: 'transparent', border: 'none', color: 'light', cursor: 'pointer'}}><FaTimes sx={{fontSize: '1rem'}} /><span sx={{display: ['none', 'none', 'inline'], position: 'relative', bottom: '3px'}}>close</span></button>
    </div>
  )
}

export default Announcement
