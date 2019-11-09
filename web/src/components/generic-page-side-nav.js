/** @jsx jsx */
import React,  { useState } from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
import {Flex} from '@theme-ui/components'

import {useSiteMetadata} from '../hooks/use-site-metadata'

import Navlink from '../elements/nav-link'

const PageSidebar = ({section}) => {
  const [expanded, setExpanded] = useState(false)

  function toggleExpanded () {
    if (expanded) {
      setExpanded(false)
    } else {
      setExpanded(true)
    }
  }

  const {siteNav} = useSiteMetadata()

  var currentSectionMenuStructure = siteNav.filter(obj => {
    return obj.title === section
  })
  const currentSectionMenuColumns = currentSectionMenuStructure[0].children

  let sideMenuItems = []

  currentSectionMenuColumns.map((column, i) => {
    sideMenuItems = sideMenuItems.concat(column.children)
  })

  return (
    <>
      <Flex sx={{
        justifyContent: 'space-between',
        borderBottom: ['none', 'none', '2px solid'],
        borderBottomColor: 'gray.5',
        pl: [3, 3, 0],
        bg: ['primary', 'primary', 'transparent']
      }}>
        <h4 sx={{
          m: 0,
          py: 2,

          color: ['white', 'white', 'primary']
        }}>
          {currentSectionMenuStructure[0].title}
        </h4>
        <button onClick={toggleExpanded} sx={{
          display: ['inline-block', 'inline-block', 'none'],
          bg: 'primaryHover',
          color: 'white',
          border: 'none',
          px: 3,
          cursor: 'pointer'
        }}>+</button>
      </Flex>
      <ul sx={{
        variant: 'lists.reset',
        maxHeight: expanded ? ['1000px', '1000px', 'auto'] : ['0', '0', '1000px'],
        transition: 'all 400ms ease-out',
        overflow: 'hidden',
        borderWidth: ['1px', '1px', 'none'],
        borderStyle: ['solid', 'solid', 'none'],
        borderColor: 'gray.4',
        bg: ['gray.2', 'gray.2', 'transparent']

      }}>
        {sideMenuItems.map(menuItem => (
          <li key={menuItem.slug} sx={{
            borderBottom: '1px solid',
            borderBottomColor: 'gray.4'
          }}>
            <Navlink to={menuItem.slug} activeClass='active' sx={{variant: 'links.sidebarNav'}} partiallyActive>{menuItem.title}</Navlink>
            { menuItem.children.length > 0 &&
            <ul sx={{pl: 4, listStyle: 'none'}}>
              {menuItem.children.map(childItem => (
                <li key={childItem.slug} sx={{
                  borderTop: '1px solid',
                  borderTopColor: 'gray.4',
                  '&::marker': {
                    content: '"\\2022"',
                    color: 'primaryLight'
                  }
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
