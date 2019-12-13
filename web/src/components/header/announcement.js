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
        whiteSpace: 'nowrap',
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
        <p sx={{margin: 0, display: 'inline-block', pl: '100%', animation: 'marquee 10s linear infinite'}}>This is a text announcement. This text can be anything, and even contain <a href='https://www.ramblingpines.com/'>links</a></p>
      </Container>
      <button onClick={() => closeAlert()} sx={{position: 'absolute', right: '0', bottom: '3px', zIndex: '10', bg: 'transparent', border: 'none', color: 'light', cursor: 'pointer'}}><FaTimes /><span sx={{position: 'relative', bottom: '3px'}}>close</span></button>
    </div>
  )
}

export default Announcement
