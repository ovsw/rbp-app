import React from 'react'
import tw from 'tailwind.macro'
import styled from 'styled-components'

const HeroRootDiv = styled.div`
  ${tw`border-solid border-0 border-b border-grey-light`};
  ${tw`py-32`};
`
const ColumnContainer = styled.div`
  ${tw`max-w-2xl mx-auto`};
  ${tw`flex`};
`
const LeftCol = styled.div`
  ${tw`w-2/3`};
`
const RightCol = styled.div`
  ${tw`w-1/3`};
`

const Hero = () => {
  return (
    <HeroRootDiv>
      <ColumnContainer>
        <LeftCol>
          <div className='banner-info'>
            <h1>A SUMMER DAY CAMP <span>LIKE NO OTHER...</span></h1>
            <p> Your kids deserve the best. The best supervision, the best activities, the best friends, the best memories. </p>
            <a href='tel:6096225658' className='btn btn-primary'>call us: (609) 622-5658</a>
          </div>
        </LeftCol>
        <RightCol>
          <div className='form-wrapper header-contact-form-wrapper'>
            <div className='section-title text-center'>
              <h2>CONTACT US</h2>
              <p>Please Contact Us Using the Form Below</p>
            </div>
            <form id='header-contact-form' className='header-contact-form' action='mailer' method='post' name='Header Form'>
              <div className='form-group'>
                <input type='text' name='phone' id='phone' className='form-control' />
                <label htmlFor='phone'>MOBILE PHONE
                                        NUMBER</label>
                <div className='messages' />
              </div>
              <div className='form-group'><input type='email' name='email' id='email' className='form-control' /> <label htmlFor='email'>EMAIL</label>
                <div className='messages' />
              </div>
              <div className='form-group'><input type='text' name='zip-code' id='zip' className='form-control' /> <label htmlFor='zip'>ZIP CODE</label>
                <div className='messages' />
              </div>

              <div className='form-group btn-wrap'>
                <button type='submit' className='btn btn-secondary form-control'>SUBMIT
                </button>
              </div>
            </form>
          </div>
        </RightCol>
      </ColumnContainer>
    </HeroRootDiv>
  )
}

export default Hero
