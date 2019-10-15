import React from 'react'
import {Link} from 'gatsby'

import tw from 'tailwind.macro'
import styled from 'styled-components'
import media from '../../../lib/responsive'

// import styles from './Megamenu.module.css'

const ColumnsContainer = styled.div`
  ${tw`mx-auto flex`};
  ${media.lg`max-width: 1200px`};
  justify-content: ${props => (props.menuTitle === 'Staff' ? 'flex-end' : 'flex-start')};
  `
const MainItemLi = styled.li`
    ${tw`m-0`};
    &>a {
      ${tw`cursor-pointer font-bold py-6 px-8 mx-2 xl:mx-6`};
    }
  `
const MegaMenuDiv = styled.div`
    ${tw`absolute text-left shadow-md bg-grey-darker text-white`};
    top: 3.3rem;
    display: ${props => props.showSubMenu ? 'block' : 'none'};
  `
const MenuColumnUl = styled.ul`
  ${tw`list-reset p-4 mx-4`};
  li {${tw`py-1`}};
  a {
    ${tw`text-white no-underline`};
    &:hover{
      color: purple;
    }
  }
  ul {${tw`my-0 py-0`};}
`

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
      <MainItemLi>
        <Link
          onTouchStart={this.toggleMegaMenu}
          onMouseEnter={this.showMenu}
          onMouseLeave={this.hideMenu}
          role='link'
          tabIndex='-1'
          to={mainLink}
        >
          {menuTitle}
        </Link>
        <MegaMenuDiv
          onMouseEnter={this.showMenu}
          onMouseLeave={this.hideMenu}
          showSubMenu={megaMenuVisible}
        >
          <ColumnsContainer menuTitle={menuTitle}>
            {menuColumns.map(column => (
              <MenuColumnUl>
                {column.children.map(item => (
                  <li key={item.slug}>
                    {item.slug.indexOf('https') !== 0 ? (
                      <Link to={item.slug} onClick={this.onNavClick}>
                        {item.title}
                      </Link>
                    ) : (
                      <a href={item.slug} onClick={this.onNavClick} rel='noopener noreferrer' target='_blank'>
                        {item.title}
                      </a>
                    )}
                    {item.children !== undefined && item.children.length > 0 && (
                      <ul>
                        {item.children.map(child => (
                          <li key={child.slug}>
                            <Link to={child.slug} onClick={this.onNavClick}>
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </MenuColumnUl>
            ))}
          </ColumnsContainer>
        </MegaMenuDiv>
      </MainItemLi>
    )
  }
}

export default Megamenu
