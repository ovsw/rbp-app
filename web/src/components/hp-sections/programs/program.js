/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled} from 'theme-ui'
import {Link} from 'gatsby'

import Icon from '../../icon'

const ProgramItem = ({name, icon = 'pineCone', iconSize = '3rem', description, link}) => {
  return (
    <Link to={link} sx={{variant: 'links.programListLink',
      transition: 'transform 0.1s ease-out',
      boxShadow: '0 0 12px -2px rgba(0,0,0,0.1)',
      '&:hover': {
        boxShadow: '0 0 12px -2px rgba(0,0,0,0.2)',
        transform: 'scale(1.1)',
        '.iconBg': {
          bg: 'primary'
        }
      }}}>

      <div sx={{
        fontSize: iconSize,
        color: 'white',
        borderRadius: '1000px'
      }}>
        <div className='iconBg' sx={{
          borderRadius: '1000px',
          width: '6rem',
          height: '6rem',
          bg: 'primaryLight',
          border: '1px dashed red',
          borderColor: 'white',
          p: '1.5rem',
          mx: 'auto',
          transition: 'background-color 0.5s ease-out'
        }}>
          <Icon symbol={icon} />
        </div>
      </div>
      <Styled.h3 sx={{mt: 2}}>{name}</Styled.h3>
      <p sx={{fontSize: 1, lineHeight: '1.5'}}>{description}</p>
    </Link>
  )
}

export default ProgramItem
