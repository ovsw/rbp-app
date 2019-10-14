import React from 'react'
import Icon from '../icon'
import {cn} from '../../lib/helpers'
import {Link, useStaticQuery, graphql} from 'gatsby'
import MainMenu from './main-menu'

import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => {
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteNav {
              title
              slug
              children {
                title
                slug
                children{
                  title
                  slug
                }
              }
            } 
          }
        }
      }
    `
  )

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.branding}>
          <Link to='/'>{siteTitle}</Link>
        </div>

        <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
          <Icon symbol='hamburger' />
        </button>

        <nav className={cn(styles.nav, showNav && styles.showNav)}>
          <MainMenu menuItems={site.siteMetadata.siteNav} />
        </nav>
      </div>
    </div>
  )
}

export default Header
