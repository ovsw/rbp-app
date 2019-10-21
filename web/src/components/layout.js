import React from 'react'
import Header from './header'
import Footer from './footer'

import '../styles/layout.css'
// import styles from './layout.module.css'

import tw from 'tailwind.macro'
import styled from 'styled-components'
import media from '../lib/responsive'

const LayoutWrapperDiv = styled.div`
  ${tw``};
`

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />

    <LayoutWrapperDiv>{children}</LayoutWrapperDiv>

    <Footer />
  </>
)

export default Layout
