/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'

import {Flex} from '@theme-ui/components'
import NavLink from '../../elements/nav-link'

class MobileMenu extends React.Component {
  constructor (props) {
    super(props)

    this.toggleSubMenu = () => {
      console.log('toggled')
      this.setState(state => ({subMenuVisible: !state.subMenuVisible}))
    }

    // this.showSubMenu = () => {
    //   clearTimeout(this.menuTimeout)
    //   this.setState({subMenuVisible: true})
    // }
    this.hideSubMenu = () => {
      this.menuTimeout = setTimeout(() => {
        this.setState({subMenuVisible: false})
      }, 50)
    }

    this.onNavClick = () => {
      this.hideSubMenu()
    }

    this.state = {
      subMenuVisible: false
    }
  }

  render () {
    const {menuTitle, mainLink, menuColumns} = this.props
    const {subMenuVisible} = this.state
    return (
      <li sx={{
        mx: 4,
        borderBottom: '2px solid black'
      }}>
        <NavLink
          role='link'
          tabIndex='-1'
          to={mainLink}
          sx={{
            variant: 'links.navMain',
            color: 'white'
          }}
        >
          {menuTitle}
        </NavLink>
        <button
          onTouchEnd={this.toggleSubMenu}
          sx={{
            variant: 'buttons.bordered',
            color: 'white'
          }}
        >+
        </button>
        <div
          sx={{
            display: subMenuVisible ? 'block' : 'none',
            textAlign: 'left',
            bg: 'primaryDark',
            color: 'white',
            zIndex: 900
          }}
        >
          <Flex className='MenuColumnsContainer' menuTitle={menuTitle}>
            {menuColumns.map(column => (
              <ul key={column.title} sx={{
                variant: 'lists.reset',
                p: 4,
                pt: 3,
                '&:nth-of-type(2)': {
                  borderWidth: 0,
                  borderLeftWidth: '1px',
                  borderStyle: 'dashed',
                  borderLeftColor: 'gray.6',
                  pl: 4
                }
              }}>
                {column.children.map(item => (
                  <li key={item.slug} sx={{py: 1}}>
                    <NavLink to={item.slug} onClick={this.onNavClick} sx={{variant: 'links.navSub'}}>
                      {item.title}
                    </NavLink>
                    {item.children !== undefined && item.children.length > 0 && (
                      <ul>
                        {item.children.map(child => (
                          <li key={child.slug}>
                            <NavLink to={child.slug} onClick={this.onNavClick} sx={{variant: 'links.navSub2'}}>
                              {child.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            ))}
          </Flex>
        </div>
      </li>
    )
  }
}

export default MobileMenu
