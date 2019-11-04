/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled} from 'theme-ui'
import {Link} from 'gatsby'

const ProgramItem = ({name, icon, description, link}) => {
  return (
    <Link to={link} sx={{variant: 'links.programListLink'}}>
      <span className='pine-cone' />
      <Styled.h3>{name}</Styled.h3>
      <p>{description}</p>
    </Link>
  )
}

export default ProgramItem
