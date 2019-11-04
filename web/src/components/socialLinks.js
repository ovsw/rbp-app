/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
import {Link} from 'gatsby'

import {FaFacebookSquare, FaYoutubeSquare, FaTwitterSquare} from 'react-icons/fa'

const SocialLinks = () => {
  return (
    <ul sx={{
      variant: 'lists.reset',
      mb: 3,
      li: {
        display: 'inline-block',
        mr: 2
      },
      a: {
        display: 'inline-block',
        fontSize: 5
      }
    }}>
      <li><Link to='https://facebook.com' sx={{color: '#3b5998'}}><FaFacebookSquare /></Link></li>
      <li><Link to='https://youtube.com' sx={{color: '#ff0000'}}><FaYoutubeSquare /></Link></li>
      <li><Link to='https://twitter.com' sx={{color: '#00acee'}}><FaTwitterSquare /></Link></li>
    </ul>
  )
}

export default SocialLinks
