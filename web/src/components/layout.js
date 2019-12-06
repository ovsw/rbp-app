import React from 'react'

import {Global} from '@emotion/core'
import {Layout as ThemeLayout} from 'theme-ui'
import Header from './header'
import Footer from './footer'

//  TODO: Decide on body font
import 'typeface-dosis'
import 'typeface-open-sans'
import 'typeface-lato'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <ThemeLayout>
    <Global styles={theme => ({
      '*': {boxSizing: 'border-box'},
      body: {
        margin: 0,
        overflow: showNav ? 'hidden' : 'auto'
      },
      img: {
        maxWidth: '100%'
      },
      '.slick-track': {
        display: 'flex',
        '.slick-slide': {
          display: 'flex',
          height: 'auto'
        }
      }
    })} />
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />

    <>{children}</>

    <Footer />
  </ThemeLayout>
)

export default Layout
