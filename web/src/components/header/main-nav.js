/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
import {Flex} from '@theme-ui/components'
import {Link} from 'gatsby'

// components
import MegaMenu from './mega-menu'
import LogoImage from '../../images/rambling-pines-logo-retina.png'

const MainNav = ({navStructure, showNav}) => {
  const navDisplay = showNav ? 'block' : 'none'
  return (
    <nav showNav={showNav}
      sx={{
        bg: ['primary', 'primaryLight', 'transparent'],
        display: [navDisplay, navDisplay, 'block'],
        position: ['absolute', 'absolute', 'static'],
        width: ['auto', 'auto', 'full'],
        top: '4.3rem',
        left: 0,
        right: 0,
        boxShadow: ['0 0 10px rgba(0, 0, 0, 0.25)', '0 0 10px rgba(0, 0, 0, 0.25)', 'none']
      }}
    >
      {/* <MainMenu menuItems={site.siteMetadata.siteNav} /> */}
      <Flex as='ul' sx={{
        variant: 'lists.reset',
        m: 0,
        py: 2,
        px: 0,
        display: ['block', 'block', 'flex'],
        justifyContent: 'flex-end'
      }}>
        {navStructure.map((mainMenuItem, i) => {
          if (i === 2) {
            return (
              <>
                <li sx={{
                  flexGrow: '1',
                  position: 'relative',
                  display: ['none', 'none', 'block']
                }}>
                  <Link to='/'>
                    <img src={LogoImage} sx={{
                      position: 'absolute',
                      width: '160px',
                      left: '50%',
                      marginLeft: '-75px',
                      top: '-65px'
                    }} />
                  </Link></li>
                <MegaMenu menuTitle={mainMenuItem.title} mainLink={mainMenuItem.slug} menuColumns={mainMenuItem.children} key={mainMenuItem.slug} />
              </>
            )
          } else {
            return (
              <MegaMenu menuTitle={mainMenuItem.title} mainLink={mainMenuItem.slug} menuColumns={mainMenuItem.children} key={mainMenuItem.slug} />
            )
          }
        })}
      </Flex>

    </nav>
  )
}

export default MainNav
