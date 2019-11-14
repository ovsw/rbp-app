/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled} from 'theme-ui'

const TestimonialItem = ({name = 'missing name', text = 'missing content'}) => {
  return (
    <div sx={{px: 3, py: 4, mx: 2, borderRadius: 'lg', bg: 'white', height: '100%', boxShadow: '0 0 12px -2px rgba(0,0,0,0.1)'}}>
      <Styled.h4 as='h3' sx={{color: 'gray.6'}}>{name}</Styled.h4>
      <p sx={{mb: 0, fontWeight: 'light', fontStyle: 'italic', color: 'textMuted'}}>"{text}"</p>
    </div>
  )
}

export default TestimonialItem
