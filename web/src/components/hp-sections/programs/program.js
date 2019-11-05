/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled} from 'theme-ui'
import {Link} from 'gatsby'

import Icon from '../../icon'

const ProgramItem = ({name, icon = 'pineCone', iconSize='3rem', description, link}) => {
  return (
    <Link to={link} sx={{variant: 'links.programListLink'}}>
      <span className='pine-cone' />
      <div sx={{fontSize: iconSize}}>

        <Icon symbol={icon} />
      </div>
      <Styled.h3>{name}</Styled.h3>
      <p>{description}</p>
    </Link>
  )
}

export default ProgramItem
