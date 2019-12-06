/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled} from 'theme-ui'
import {Link, useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

import {FaHamburger, FaPhone} from 'react-icons/fa'

// containers
import SectionWithSidebar from '../../containers/section-with-sidebar'

const FoodSection = () => {
  return (
    <section sx={{variant: 'sections.hpSectionLightNoBottom'}}>
      <SectionWithSidebar leftSidebar mainContent={<MainContent />} sidebar={<Sidebar />} />
    </section>
  )
}

const MainContent = () => {
  const {foodImage} = useStaticQuery(
    graphql`
    query {
      foodImage: file(relativePath: { eq: "lunch-time-illustration.png" }) {
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
    <div sx={{
      mx: [0, 5, 4, 5, 6]
    }}>
      <Img fluid={foodImage.childImageSharp.fluid} />
    </div>
  )
}

const Sidebar = () => {
  return (
    <div sx={{p: {lineHeight: 'snug'}}}>
      <Styled.h1 as='h2'>Lunch Provided</Styled.h1>
      <p>To make your life a little bit easier, a nutritious and delicious lunch is provided daily. </p>
      <p>A vegetarian option is always available. Little ones get a morning snack and everyone enjoys an afternoon snack of ice cream or ice pops.</p>
      <Link to='/' sx={{variant: 'buttons.3D', display: 'inline-block', my: 3, mr: 3, position: 'relative', pl: '3.5rem'}}>
        <FaHamburger sx={{position: 'absolute', top: '0.7rem', left: '1rem', fontSize: 4}} /> Sample Lunch Menu
      </Link>
      <a href='tel:6094661212' sx={{variant: 'buttons.3DAccent', display: 'inline-block'}}><FaPhone /> Call Us: (609) 466-1212</a>
    </div>
  )
}

export default FoodSection
