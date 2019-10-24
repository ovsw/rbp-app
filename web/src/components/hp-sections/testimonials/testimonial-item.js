import React from 'react'

import tw from 'tailwind.macro'
import styled from 'styled-components'

const TestimonialItem = ({name = 'missing name', text = 'missing content'}) => {
  return (
    <div>
      <h4>{name}</h4>
      <p>{text}</p>
    </div>
  )
}

export default TestimonialItem
