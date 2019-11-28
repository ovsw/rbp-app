/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled} from 'theme-ui'
import {Link, useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

import {FaMap, FaPhone} from 'react-icons/fa'

// containers
import SectionWithSidebar from '../../containers/section-with-sidebar'

// images
import SectionBg from '../../images/white-torn-bg.png'
// import SectionBg from '../../images/activities-section-bg.png'

const TransportationSection = () => {
  return (
    <section sx={{variant: 'sections.hpSectionLight', background: `url(${SectionBg}) repeat-x bottom center`, paddingBottom: '0', marginBottom: '-6rem', position: 'relative', zIndex: '10'}}>
      <SectionWithSidebar mainContent={<MainContent />} sidebar={<Sidebar />} />
    </section>
  )
}

const MainContent = () => {
  const {transportationImage} = useStaticQuery(
    graphql`
    query {
      transportationImage: file(relativePath: { eq: "transportation-illustration.png" }) {
        childImageSharp {
          fluid(maxWidth: 726) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
    `
  )
  return (
    <>
      <Img fluid={transportationImage.childImageSharp.fluid} />
    </>
  )
}

const Sidebar = () => {
  return (
    <div sx={{p: {lineHeight: 'snug'}}}>
      <Styled.h1 as='h2'>Door to Door Transportation</Styled.h1>
      <p>Parents wish for a quality summer day camp near them. With door to door busing, it is.</p>
      <p>Transportation is provided using air-conditioned, 24 passenger mini-buses.</p>
      <p>All buses are professionally driven and have seatbelts. There is a bus aid on each bus. Transportation is included in the camp tuition.</p>
      <Link to='/transportation/' sx={{variant: 'buttons.3D', display: 'inline-block', my: 3, mr: 3, position: 'relative', pl: '3.5rem'}}>
        <FaMap sx={{position: 'absolute', top: '0.7rem', left: '1rem', fontSize: 4}} /> See Transportation Areas
      </Link>
      <a href='tel:6096225658' sx={{variant: 'buttons.3DAccent', display: 'inline-block'}}><FaPhone /> Call Us: (609) 622-5658</a>
    </div>
  )
}

export default TransportationSection
