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
      <h4 sx={{
        borderBottom: '2px solid',
        borderBottomColor: 'gray.5',
        pb: 2,
        mb: 0
      }}>{currentSectionMenuStructure[0].title}</h4>
      <ul sx={{
        variant: 'lists.reset'
      }}>
        {sideMenuItems.map(menuItem => (
          <li key={menuItem.slug} sx={{
            borderBottom: '1px solid',
            borderBottomColor: 'gray.4'
          }}>
            <Navlink to={menuItem.slug} activeClass='active' sx={{
              variant: 'links.sidebarNav'
            }}>{menuItem.title}</Navlink>
            { menuItem.children.length > 0 &&
            <ul sx={{
              pl: 4
            }}>
              {menuItem.children.map(childItem => (
                <li key={childItem.slug} sx={{
                  borderTop: '1px solid',
                  borderTopColor: 'gray.4'
                }}>
                  <Navlink to={childItem.slug} sx={{
                    variant: 'links.sidebarNav',
                    fontWeight: 'normal'
                  }}>{childItem.title}</Navlink>
                </li>
              ))}
            </ul>
            }
          </li>
        ))}
      </ul>
    </>
  )
}

export default PageSidebar
