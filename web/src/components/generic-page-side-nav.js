/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'

import {useSiteMetadata} from '../hooks/use-site-metadata'

import Navlink from '../elements/nav-link'

const PageSidebar = ({section}) => {
  const {siteNav} = useSiteMetadata()

  var currentSectionMenuStructure = siteNav.filter(obj => {
    return obj.title === section
  })
  const currentSectionMenuColumns = currentSectionMenuStructure[0].children

  let sideMenuItems = []

  currentSectionMenuColumns.map((column, i) => {
    sideMenuItems = sideMenuItems.concat(column.children)
  })
  // TODO: style side nav
  return (
    <>
      <h4>{currentSectionMenuStructure[0].title}</h4>
      <ul>
        {sideMenuItems.map(menuItem => (
          <li key={menuItem.slug}><Navlink to={menuItem.slug}>{menuItem.title}</Navlink>
            { menuItem.children.length > 0 &&
            <ul>
              {menuItem.children.map(childItem => <li key={childItem.slug}><Navlink to={childItem.slug}>{childItem.title}</Navlink></li>)}
            </ul>
            }
          </li>
        ))}
      </ul>
    </>
  )
}

export default PageSidebar
