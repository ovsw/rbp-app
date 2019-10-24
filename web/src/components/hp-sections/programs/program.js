import React from 'react'
import {Link} from 'gatsby'

import tw from 'tailwind.macro'
import styled from 'styled-components'

const ProgramItemRoot = styled(Link)`
  ${tw``};
`

const ProgramItem = ({name, icon, description, link}) => {
  return (
    <ProgramItemRoot to={link}>
      <span className='pine-cone' />
      <h4>{name}</h4>
      <p>{description}</p>
    </ProgramItemRoot>
  )
}

export default ProgramItem
