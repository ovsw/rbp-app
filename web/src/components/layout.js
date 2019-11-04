import React from 'react'

import {Global} from '@emotion/core'
import {Layout as ThemeLayout} from 'theme-ui'
import Header from './header'
import Footer from './footer'

import 'typeface-dosis'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <ThemeLayout>
    <Global styles={theme => ({
      '*': {boxSizing: 'border-box'},
      body: {margin: 0},
      '.slick-track': {
        display: 'flex',
        '.slick-slide': {
          display: 'flex',
          height: 'auto'
        }
      }
    })} />
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />

    <div>{children}</div>

    <Footer />
  </ThemeLayout>
)

export default Layout
