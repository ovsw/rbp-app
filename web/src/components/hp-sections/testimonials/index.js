import React from 'react'
import Slider from 'react-slick'

import tw from 'tailwind.macro'
import styled from 'styled-components'

// elements
import HPSection from '../../../elements/hp-section'

import TestimonialItem from './testimonial-item'

// styles
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const TestimonialsRoot = styled(HPSection)`
  ${tw``};
`
const TestimonialsContainer = styled.div`
  ${tw`max-w-2xl mx-auto`};
`
function NextArrow (props) {
  const {onClick} = props
  return (
    <button onClick={onClick}>&gt;</button>
  )
}

function PrevArrow (props) {
  const {onClick} = props
  return (
    <button onClick={onClick}>&lt;</button>
  )
}

const TestimonialsSection = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    dots: true,
    arrows: true
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
    // fade: true,
    // adaptiveHeight: true
  }
  return (
    <TestimonialsRoot>
      <TestimonialsContainer>
        <Slider {...settings}>
          {testimonialsContentTemp.map(testimonial => <TestimonialItem {...testimonial} key={testimonial.name} />)}
        </Slider>
      </TestimonialsContainer>
    </TestimonialsRoot>
  )
}

const testimonialsContentTemp = [
  {
    name: 'Roger F.',
    text: "I can attest to the quality of service this camp provides. You will get your money's worth, thanks in part to a stellar crew who give it their all. A family-run business who genuinely care about the business they've built over the years."
  },
  {
    name: 'Suzan M.',
    text: ' I find Rambling Pines to be a very nurturing and supportive environment for our children. I have always felt that my children are in safe and loving hands when they are at this camp. My three kids always come off the bus with a smile on their faces and some exciting story to share.'
  },
  {
    name: 'Suzan M.',
    text: ' I find Rambling Pines to be a very nurturing and supportive environment for our children. I have always felt that my children are in safe and loving hands when they are at this camp. My three kids always come off the bus with a smile on their faces and some exciting story to share.'
  },
  {
    name: 'Suzan M.',
    text: ' I find Rambling Pines to be a very nurturing and supportive environment for our children. I have always felt that my children are in safe and loving hands when they are at this camp. My three kids always come off the bus with a smile on their faces and some exciting story to share.'
  },
  {
    name: 'Suzan M.',
    text: ' I find Rambling Pines to be a very nurturing and supportive environment for our children. I have always felt that my children are in safe and loving hands when they are at this camp. My three kids always come off the bus with a smile on their faces and some exciting story to share.'
  },
  {
    name: 'Suzan M.',
    text: ' I find Rambling Pines to be a very nurturing and supportive environment for our children. I have always felt that my children are in safe and loving hands when they are at this camp. My three kids always come off the bus with a smile on their faces and some exciting story to share.'
  },
  {
    name: 'Suzan M.',
    text: ' I find Rambling Pines to be a very nurturing and supportive environment for our children. I have always felt that my children are in safe and loving hands when they are at this camp. My three kids always come off the bus with a smile on their faces and some exciting story to share.'
  }
]

export default TestimonialsSection
