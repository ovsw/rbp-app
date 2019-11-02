/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled} from 'theme-ui'

// containers
import SectionWithSidebar from '../../containers/section-with-sidebar'

const TransportationSection = () => {
  return (
    <section sx={{variant: 'sections.hpSectionLight'}}>
      <SectionWithSidebar mainContent={<MainContent />} sidebar={<Sidebar />} />
    </section>
  )
}

const MainContent = () => {
  return (
    <>
      <img src='//via.placeholder.com/692x582' />
    </>
  )
}

const Sidebar = () => {
  return (
    <div className='content-holder'>
      <div className='section-title'>
        <Styled.h2>Door to Door Transportation</Styled.h2>
        <p>Parents wish for a quality summer day camp near them. With door to door busing, it is.</p>
        <p>Transportation is provided using air-conditioned, 24 passenger mini-buses.</p>
        <p>All buses are professionally driven and have seatbelts. There is a bus aid on each bus. Transportation is included in the camp tuition.</p>
      </div>
      <button sx={{variant: 'buttons.simple', display: 'block', my: 4}}>See Transportation Areas</button>
      <a href='tel:6096225658' sx={{variant: 'buttons.outline', display: 'inline-block'}}>Call Us: (609) 622-5658</a>
    </div>
  )
}

export default TransportationSection
