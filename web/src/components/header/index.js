import React from 'react'
import Icon from '../icon'
// import {cn} from '../../lib/helpers'
import {Link, useStaticQuery, graphql} from 'gatsby'

import TopBar from './top-bar'
import MegaMenu from './mega-menu'

import tw from 'tailwind.macro'
import styled from 'styled-components'
import media from '../../lib/responsive'

import LogoImage from '../../images/rambling-pines-logo-retina.png'
import headerBgImage from '../../images/bg-header-tiled.png'

const HeaderRoot = styled.div`
  ${tw`relative z-100`};
  padding-bottom: 60px;
  background: url(${headerBgImage}) repeat-x bottom left;
  border-bottom: 2px solid gray;
`
const MainNavDiv = styled.div`
  ${tw`flex relative my-0 mx-auto max-w-xl py-4 justify-between`};
`
const BrandingDiv = styled.div`
  ${tw`flex-1 font-semibold`};
  & a {
    ${tw`inline-block p-2 text-inherit no-underline`};
      &:hover {
        color: var(--color-accent);
      }
  }
  ${media.md`display:none;`};
`
const ToggleNavBtn = styled.button`
  ${tw`text-2xl border-0 bg-transparent m-0 text-inherit`};
  outline:none;
  padding: calc(14 / 17 / 2 * 1rem);
  appearance: none;
  & svg {
    ${tw`block fill-inherit`};
  }
  ${media.md`display:none;`};
`
const MainNav = styled.nav`
  display: ${props => props.showNav ? 'block' : 'none'};
  ${tw`absolute text-black`};
  left:0;
  right: 0;
  top: 4.3rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);

  ${media.md`
    display:block; box-shadow: none;
    ${tw`static w-full`};
  `};
`
const MainMenuRootUl = styled.ul`
    ${tw`m-0 py-4 px-0`};
    ${media.md`${tw`list-reset flex justify-end`};`};
`
const LogoLi = styled.li`
  ${tw`flex-grow relative`};
  display: none;
  ${media.md`display:block;`};

  img {
    ${tw`absolute`};
    width: 160px;
    left: 50%;
    margin-left: -75px;
    top:-65px;
  }
`

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => {
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          id
          siteMetadata {
            siteNav {
              title
              slug
              children {
                title
                children {
                  title
                  slug
                  children {
                    title
                    slug
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <HeaderRoot>
      <TopBar />
      <MainNavDiv>
        <BrandingDiv>
          <Link to='/'>{siteTitle}</Link>
        </BrandingDiv>

        <ToggleNavBtn onClick={showNav ? onHideNav : onShowNav}>
          <Icon symbol='hamburger' />
        </ToggleNavBtn>

        {/* <nav className={cn(styles.nav, showNav && styles.showNav)}> */}
        <MainNav showNav={showNav}>
          {/* <MainMenu menuItems={site.siteMetadata.siteNav} /> */}
          <MainMenuRootUl>
            {site.siteMetadata.siteNav.map((mainMenuItem, i) => {
              if (i === 2) {
                return (
                  <>
                    <LogoLi><Link to='/'><img src={LogoImage} /></Link></LogoLi>
                    <MegaMenu menuTitle={mainMenuItem.title} mainLink={mainMenuItem.slug} menuColumns={mainMenuItem.children} key={mainMenuItem.slug} />
                  </>
                )
              } else {
                return (
                  <MegaMenu menuTitle={mainMenuItem.title} mainLink={mainMenuItem.slug} menuColumns={mainMenuItem.children} key={mainMenuItem.slug} />
                )
              }
            })}
          </MainMenuRootUl>

        </MainNav>
      </MainNavDiv>
    </HeaderRoot>
  )
}

export default Header
