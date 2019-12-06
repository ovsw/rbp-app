/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {Header as ThemeHeader, Container, jsx} from 'theme-ui'
import {Box, Flex} from '@theme-ui/components'

import {Link} from 'gatsby'
import {useSiteMetadata} from '../../hooks/use-site-metadata'

import Icon from '../icon'
import TopBar from './top-bar'
import MainNav from './main-nav'

import headerBgImage from '../../images/white-paper-bg2.jpg'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => {
  const {siteNav} = useSiteMetadata()
  return (
    <ThemeHeader sx={{
      background: `url(${headerBgImage}) repeat bottom left`,
      pb: 2,
      position: 'fixed',
      width: '100%',
      zIndex: 9999,
      boxShadow: '0 3px 12px rgba(0,0,0,0.3)'
    }}>
      <Container className='HeaderContainer' sx={{pt: 3, pb: 0}}>
        <TopBar />
        <Flex sx={{position: ['static', 'relative'], justifyContent: 'space-between'}} className='MainNav'>
          <Box sx={{flex: 'flex: 1 1 0%'}}>
            <Link to='/' sx={{variant: 'links.logoText'}}>Rambling Pines<br />Day Camp</Link>
          </Box>

          <button sx={{variant: 'buttons.navToggle'}}onClick={showNav ? onHideNav : onShowNav}>
            <Icon symbol='hamburger' />
          </button>

          <MainNav navStructure={siteNav} showNav={showNav} />
        </Flex>
      </Container>
    </ThemeHeader>
  )
}

export default Header
