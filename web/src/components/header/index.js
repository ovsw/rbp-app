/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {Container, jsx, Styled} from 'theme-ui'
import {Box, Flex} from '@theme-ui/components'

import Icon from '../icon'
import {Link, useStaticQuery, graphql} from 'gatsby'
import {Header as ThemeHeader} from 'theme-ui'

import TopBar from './top-bar'
import MainNav from './main-nav'

import headerBgImage from '../../images/bg-header-tiled.png'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => {
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          id
          siteMetadata {
            siteNav {
              title
              slug
              children {
                title
                children {
                  title
                  slug
                  children {
                    title
                    slug
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <ThemeHeader sx={{background: `url(${headerBgImage}) repeat-x bottom left`, paddingBottom: '40px', mb: '-55px'}}>
      <Container >
        <TopBar />
        <Flex sx={{position: 'relative', justifyContent: 'space-between'}} className='MainNav'>
          <Box sx={{flex: 'flex: 1 1 0%'}}>
            <Link to='/' sx={{variant: 'links.logoText'}}>{siteTitle}</Link>
          </Box>

          <button sx={{variant: 'buttons.navToggle'}}onClick={showNav ? onHideNav : onShowNav}>
            <Icon symbol='hamburger' />
          </button>

          <MainNav navStructure={site.siteMetadata.siteNav} showNav={showNav} />
        </Flex>
      </Container>
    </ThemeHeader>
  )
}

export default Header
