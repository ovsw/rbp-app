/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled, Container} from 'theme-ui'
import {Flex, Box} from '@theme-ui/components'

import {Link, useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

import {FaBus} from 'react-icons/fa'

// containers
import SectionWithSidebar from '../../containers/section-with-sidebar'

const TransportationSection = () => {
  return (
    <section sx={{variant: 'sections.hpSectionLight'}}>
      <SectionWithSidebar mainContent={<MainContent />} sidebar={<Sidebar />} />
      <Container sx={{maxWidth: '6xl', pt: [4, 4, 0]}}>
        <Styled.h1 as='h3' sx={{fontWeight: 'normal', mb: 4}}>Transporation Areas</Styled.h1>
        <Flex sx={{
          flexWrap: 'wrap',
          'div': {
            pr: 4,
            mb: [4, 4, 0],
            width: ['full', '1/3', '1/5'],
            'ul': {
              variant: 'lists.reset',
              mt: 3,
              ml: 1,
              borderLeft: '2px solid',
              borderColor: 'accent',
              pl: 3
            },
            'h4': {
              fontWeight: 'normal'
            }
          }
        }}>

          <Box>
            <Styled.h4>Mercer County:</Styled.h4>
            <ul>
              <li>Ewing,</li>
              <li>Hamilton,</li>
              <li>Hopewell,</li>
              <li>Lawrenceville,</li>
              <li>Pennington,</li>
              <li>Princeton,</li>
              <li>Robbinsville,</li>
              <li>Titusville.</li>
            </ul>
          </Box>

          <Box>
            <Styled.h4>Somerset County:</Styled.h4>
            <ul>
              <li>Belle Mead,</li>
              <li>Hillsborough,</li>
              <li>Neshanic,</li>
              <li>Rocky Hill,</li>
              <li>Skillman.</li>
            </ul>

          </Box>

          <Box>
            <Styled.h4>Hunterdon County: </Styled.h4>
            <ul>
              <li>East Amwell,</li>
              <li>Flemington,</li>
              <li>Lambertville,</li>
              <li>Sergeantville,</li>
              <li>Stockton,</li>
              <li>West Amwell.</li>
            </ul>
          </Box>

          <Box>
            <Styled.h4>Bucks County: </Styled.h4>
            <ul>
              <li>New Hope,</li>
              <li>Newtown,</li>
              <li>Washington Crossing,</li>
              <li>Yardley.</li>
            </ul>
          </Box>

          <Box>
            <Styled.h4>Middlesex County:</Styled.h4>
            <ul>
              <li>Kendall Park,</li>
              <li>Plainsboro,</li>
              <li>South Brunswick.</li>
            </ul>
          </Box>
        </Flex>
      </Container>
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
      <Img fluid={transportationImage.childImageSharp.fluid} sx={{maxWidth: '650px', ml: [0, 0, 4]}} />
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
        <FaBus sx={{position: 'absolute', top: '0.7rem', left: '1rem', fontSize: 4}} /> Read More
      </Link>
      {/* <a href='tel:6094661212' sx={{variant: 'buttons.3DAccent', display: 'inline-block'}}><FaPhone /> Call Us: (609) 466-1212</a> */}
    </div>
  )
}

export default TransportationSection
