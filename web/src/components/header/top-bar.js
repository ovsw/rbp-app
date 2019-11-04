/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
import {Box, Flex} from '@theme-ui/components'

import {Link} from 'gatsby'

const TopBar = () => {
  return (
    <div>
      <Flex sx={{display: ['none', 'none', 'flex']}}>
        <Box sx={{
          width: '1/2',
          textAlign: 'right',
          pr: 5,
          '& a': {
            mr: 4
          }
        }}>
          <Link to='/dates-and-rates/' sx={{variant: 'links.topBar'}}>Dates &amp; Rates</Link>
          {/* <Link to='/'>Schedule Tour</Link> */}
          <Link to='/request-info/' sx={{variant: 'links.topBar'}}>Request Info</Link>
        </Box>
        <Box sx={{
          width: '1/2',
          pl: '90px',
          '& a': {
            ml: 4
          }
        }}>
          <a href='https://ramblingpines.campintouch.com/ui/forms/application/camper/App' sx={{variant: 'links.topBar'}} rel='noopener noreferrer' target='_blank'>Enroll Now</a>
          <a href='https://ramblingpines.campintouch.com/v2/login.aspx' rel='noopener noreferrer' sx={{variant: 'links.topBar'}}target='_blank'>Parent Login</a>
        </Box>
      </Flex>
    </div>
  )
}

export default TopBar
