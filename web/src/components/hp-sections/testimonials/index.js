/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled, Container} from 'theme-ui'
import Slider from 'react-slick'

import TestimonialItem from './testimonial-item'

// styles
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// function NextArrow (props) {
//   const {onClick} = props
//   return (
//     <button onClick={onClick}>&gt;</button>
//   )
// }

// function PrevArrow (props) {
//   const {onClick} = props
//   return (
//     <button onClick={onClick}>&lt;</button>
//   )
// }

const TestimonialsSection = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: false,
    dots: true,
    arrows: true,
    swipeToSlide: true,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
    // fade: true,
    // adaptiveHeight: true
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
          // initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    appendDots: dots => (
      <div>
        <ul style={{
          position: 'relative', top: '50px'}}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        sx={{
          width: '1.5rem',
          height: '1.5rem',
          fontSize: '1rem',
          lineHeight: '1.5rem',
          bg: 'primaryLight',
          color: 'white',
          border: '1px blue white',
          borderRadius: '100%',
          '.slick-active & ': {
            bg: 'primary'
          }
        }}
      >
        {i + 1}
      </div>
    )
  }
  return (
    <section sx={{variant: 'sections.hpSection'}}>
      <Styled.h1 as='h2' sx={{textAlign: 'center', color: 'primary'}}>What Parents Say</Styled.h1>
      <Container sx={{maxWidth: '6xl'}}>
        <Slider {...settings}>
          {testimonialsContentTemp.map(testimonial => <TestimonialItem {...testimonial} key={testimonial.name} />)}
        </Slider>
      </Container>
    </section>
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
