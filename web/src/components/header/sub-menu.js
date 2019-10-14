import React from 'react'
import {Link} from 'gatsby'

const SubMenu = ({children}) => {
  return (
    <ul>
      {children.map(({title, slug}) =>
        <li key={slug}><Link to={slug} activeStyle={{color: 'red'}}>{title}</Link>
          {children.length > 0 &&
          <ul>
            {children.map(({title, slug}) =>
              <li key={slug}><Link to={slug} activeStyle={{color: 'red'}}>{title}</Link></li>
            )}
          </ul>
          }
        </li>
      )}
    </ul>
  )
}

export default SubMenu
