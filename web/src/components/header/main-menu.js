import React from 'react'
import {Link} from 'gatsby'
import SubMenu from './sub-menu'

const MainMenu = ({menuItems}) => {
  return (
    <ul>
      {menuItems.map(({title, slug, children}) =>
        <li key={slug} className={children.length > 0 ? 'in-dropdown' : ''}>
          <Link to={slug} activeStyle={{color: 'red'}}>{title}</Link>
          {children.length > 0 &&
          <SubMenu children={children} />
          }
        </li>)}
    </ul>
  )
}

export default MainMenu
