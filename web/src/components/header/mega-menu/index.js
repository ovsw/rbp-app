// TODO: add mobile styles

/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
import {Flex} from '@theme-ui/components'
import NavLink from '../../../elements/nav-link'

class Megamenu extends React.Component {
  constructor (props) {
    super(props)

    this.toggleMegaMenu = () => {
      this.setState(state => ({megaMenuVisible: !state.megaMenuVisible}))
    }

    this.showMenu = () => {
      clearTimeout(this.menuTimeout)
      this.setState({megaMenuVisible: true})
    }
    this.hideMenu = () => {
      this.menuTimeout = setTimeout(() => {
        this.setState({megaMenuVisible: false})
      }, 50)
    }

    this.onNavClick = () => {
      this.hideMenu()
    }

    this.state = {
      megaMenuVisible: false
    }
  }

  render () {
    const {menuTitle, mainLink, menuColumns} = this.props
    const {megaMenuVisible} = this.state
    return (
      <li sx={{
        mx: 4,
        borderBottom: '2px solid black'
      }}>
        <NavLink
          onTouchStart={this.toggleMegaMenu}
          onMouseEnter={this.showMenu}
          onMouseLeave={this.hideMenu}
          role='link'
          tabIndex='-1'
          to={mainLink}
          sx={{
            variant: 'links.navMain',
            color: ['white', 'white', 'primary']
          }}
        >
          {menuTitle}
        </NavLink>
        <div
          onMouseEnter={this.showMenu}
          onMouseLeave={this.hideMenu}
          sx={{
            display: megaMenuVisible ? 'block' : 'none',
            position: 'absolute',
            top: '3.2rem',
            textAlign: 'left',
            bg: 'primary',
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

export default Megamenu
