/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
import {Flex} from '@theme-ui/components'
import {Link} from 'gatsby'

// components
import MobileMenu from './mobile-menu'
import MegaMenu from './mega-menu'
import LogoImage from '../../images/rambling-pines-logo-retina.png'

const MainNav = ({navStructure, showNav}) => {
  const navDisplay = showNav ? 'block' : 'none'
  return (
    <>
      {/* <MainMenu menuItems={site.siteMetadata.siteNav} /> */}
      <nav
        sx={{
          bg: 'primary',
          display: [navDisplay, navDisplay, 'none'],
          position: ['absolute', 'absolute'],
          width: ['auto', 'auto'],
          top: '4.3rem',
          left: 0,
          right: 0,
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)'
        }}
      >
        <Flex as='ul' sx={{
          variant: 'lists.reset',
          m: 0,
          pt: [3, 3, 2],
          pb: [4, 4, 2],
          px: 0,
          display: ['block', 'block', 'flex'],
          justifyContent: 'flex-end'
        }}>
          {navStructure.map((mainMenuItem, i) => {
            return (
              <MobileMenu key={mainMenuItem.slug} menuTitle={mainMenuItem.title} mainLink={mainMenuItem.slug} menuColumns={mainMenuItem.children} key={mainMenuItem.slug} />
            )
          })}
        </Flex>

      </nav>

      <nav
        sx={{
          display: ['none', 'none', 'block'],
          width: 'full'
        }}
      >
        <Flex as='ul' sx={{
          variant: 'lists.reset',
          m: 0,
          pt: [3, 3, 2],
          pb: [4, 4, 2],
          px: 0,
          display: ['block', 'block', 'flex'],
          justifyContent: 'flex-end'
        }}>
          {navStructure.map((mainMenuItem, i) => {
            if (i === 2) {
              return (
                <React.Fragment key={mainMenuItem.slug}>
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
                </React.Fragment>
              )
            } else {
              return (
                <MegaMenu key={mainMenuItem.slug} menuTitle={mainMenuItem.title} mainLink={mainMenuItem.slug} menuColumns={mainMenuItem.children} key={mainMenuItem.slug} />
              )
            }
          })}
        </Flex>

      </nav>
    </>
  )
}

export default MainNav
