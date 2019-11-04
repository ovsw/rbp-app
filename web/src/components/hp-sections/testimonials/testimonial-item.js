/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled} from 'theme-ui'

const TestimonialItem = ({name = 'missing name', text = 'missing content'}) => {
  return (
    <div sx={{px: 3, py: 4, mx: 2, borderRadius: 'lg', bg: 'white', height: '100%'}}>
      <Styled.h4 as='h3' sx={{color: 'dark'}}>{name}</Styled.h4>
      <p sx={{mb: 0}}>{text}</p>
    </div>
  )
}

export default TestimonialItem
