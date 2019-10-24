import React from 'react'
import tw from 'tailwind.macro'
import styled from 'styled-components'

// elements
import {H1} from '../elements/headings'

const SectionHeading = styled.h2`
  ${H1};
  ${tw`text-center w-full`};
`
const RootContainer = styled.div`
  ${tw`flex flex-wrap max-w-2xl mx-auto`};
  flex-direction: ${props => props.leftSidebar ? 'row-reverse' : 'row'};
`
const Sidebar = styled.div`
  ${tw`w-1/3`};
`
const MainContent = styled.div`
${tw`w-2/3`};
`
const SectionWithLeftSidebar = ({title, sidebar = <p>no sidebar</p>, mainContent = <p>no content</p>, leftSidebar = false}) => {
  return (
    <RootContainer leftSidebar={leftSidebar}>
      {title &&
        <SectionHeading>
          {title}
        </SectionHeading>
      }
      <MainContent>
        {mainContent}
      </MainContent>
      <Sidebar>
        {sidebar}
      </Sidebar>
    </RootContainer>
  )
}

export default SectionWithLeftSidebar
