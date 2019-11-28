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
  return (
    <>
      {/* mobile */}
      <nav
        sx={{
          bg: 'primary',
          maxHeight: showNav ? '1000px' : '0',
          transition: 'all 400ms ease-out',
          position: ['absolute', 'absolute'],
          width: 'auto',
          height: ['84vh', '92vh'],
          overflow: 'scroll',
          top: ['16vh', '8vh'],
          left: 0,
          right: 0,
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)'
        }}
      >
        <Flex as='ul' sx={{
          variant: 'lists.reset',
          m: 0,
          pt: [0, 0],
          pb: [4, 4],
          px: 0,
          display: ['block', 'block', 'flex'],
          justifyContent: 'flex-end'
        }}>
          {navStructure.map((mainMenuItem, i) => {
            return (
              <MobileMenu key={mainMenuItem.slug} menuTitle={mainMenuItem.title} mainLink={mainMenuItem.slug} menuColumns={mainMenuItem.children} />
            )
          })}
        </Flex>

      </nav>

      {/* destop */}
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
          px: [0, 0, 0, 2, 3],
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
                    <Link to='/' sx={{
                      display: 'block',
                      position: 'absolute',
                      width: '100%',
                      left: '100px',
                      marginLeft: '-100px',
                      top: '-45px',
                      textAlign: 'center'}}>
                      <img src={LogoImage} sx={{
                        width: '150px'
                      }} alt='Rambling Pines Logo' />
                    </Link></li>
                  <MegaMenu menuTitle={mainMenuItem.title} mainLink={mainMenuItem.slug} menuColumns={mainMenuItem.children} key={mainMenuItem.slug} />
                </React.Fragment>
              )
            } else {
              return (
                <MegaMenu key={mainMenuItem.slug} menuTitle={mainMenuItem.title} mainLink={mainMenuItem.slug} menuColumns={mainMenuItem.children} />
              )
            }
          })}
        </Flex>

      </nav>
    </>
  )
}

export default MainNav
