import React from 'react'

import tw from 'tailwind.macro'
import styled from 'styled-components'

// containers
import SectionWithSidebar from '../../containers/section-with-sidebar'
// elements
import HPSection from '../../elements/hp-section'

const TransportationRootDiv = styled(HPSection)`
  ${tw`border-solid border-0 border-b border-grey-light`};
`

const TransportationSection = () => {
  return (
    <TransportationRootDiv>
      <SectionWithSidebar sidebar={<Sidebar />} mainContent={<MainContent />} />
    </TransportationRootDiv>
  )
}

const Sidebar = () => {
  return (
    <div className='content-holder'>
      <div className='section-title'>
        <h2>Door to Door Transportation</h2>
        <p>Parents wish for a quality summer day camp near them. With door to door busing,
            it is. Transportation is provided using air-conditioned, 24 passenger
            mini-buses. All buses are professionally driven and have seatbelts. There is a
            bus aid on each bus. Transportation is included in the camp tuition.</p>
      </div>
      <button>See Transportation Areas</button>
      <a href='tel:6096225658'>call us: (609) 622-5658</a>
    </div>
  )
}

const MainContent = () => {
  return (
    <>
      <img src='//via.placeholder.com/692x582' />
    </>
  )
}

export default TransportationSection
