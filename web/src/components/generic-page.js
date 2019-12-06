/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled, Container} from 'theme-ui'
import {Box, Flex} from '@theme-ui/components'

import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import PageSideNav from './generic-page-side-nav'

function GenericPage ({_rawBody, title, section, headerImage = null}) {
  return (
    <div sx={{marginTop: '7rem'}}>
      {headerImage && headerImage && (
        <div sx={{
          paddingBottom: ['calc(12 / 16 * 100%)', 'calc(10 / 16 * 100%)', 'calc(6 / 16 * 100%)', 'calc(6 / 16 * 100%)', 'calc(6 / 16 * 100%)', 'calc(5 / 16 * 100%)'],
          position: 'relative',
          backgroundImage: `url(${headerImage.asset.metadata.lqip})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>

          <picture
            sx={{
              width: '100%',
              height: '100%'
            }}>
            <source media='(min-width: 1600px)' srcSet={imageUrlFor(buildImageObj(headerImage))
              .width(1920)
              .height(Math.floor((5 / 16) * 1920))
              .fit('crop')
              .auto('format')
              .url()} />
            <source media='(min-width: 1280px)' srcSet={imageUrlFor(buildImageObj(headerImage))
              .width(1600)
              .height(Math.floor((6 / 16) * 1600))
              .fit('crop')
              .auto('format')
              .url()} />
            <source media='(min-width: 640px)' srcSet={imageUrlFor(buildImageObj(headerImage))
              .width(769)
              .height(Math.floor((6 / 16) * 769))
              .fit('crop')
              .auto('format')
              .url()} />
            <img
              src={imageUrlFor(buildImageObj(headerImage))
                .width(400)
                .height(Math.floor((12 / 16) * 400))
                .fit('crop')
                .auto('format')
                .url()}
              alt={headerImage.alt}
              sx={{
                display: 'block',
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                verticalAlign: 'top',
                objectFit: 'cover'
              }}
            />
          </picture>
        </div>
      )}

      {!headerImage &&

      <div sx={{
        paddingBottom: ['calc(12 / 16 * 100%)', 'calc(10 / 16 * 100%)', 'calc(6 / 16 * 100%)', 'calc(6 / 16 * 100%)', 'calc(6 / 16 * 100%)', 'calc(5 / 16 * 100%)'],
        position: 'relative'
      }}>

        <picture
          sx={{
            width: '100%',
            height: '100%'
          }}>
          <source media='(min-width: 1600px)' srcSet='https://via.placeholder.com/1920x600?text=missing+image' />
          <source media='(min-width: 1280px)' srcSet='https://via.placeholder.com/1600x600?text=missing+image' />
          <source media='(min-width: 640px)' srcSet='https://via.placeholder.com/769x288?text=missing+image' />
          <img src='https://via.placeholder.com/400x300?text=missing+image'
            alt='placeholder'
            sx={{
              display: 'block',
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              verticalAlign: 'top',
              objectFit: 'cover'
            }}
          />
        </picture>
      </div>

      }

      <section sx={{variant: 'sections.hpSectionLight'}}>
        <Container sx={{maxWidth: '6xl', p: 4, py: [4, 5]}}s>
          {/* <Styled.root> */}
          <Flex sx={{flexWrap: 'wrap', flexDirection: 'row-reverse'}}>
            <Box sx={{width: ['full', 'full', '3/4'], pl: [0, 0, 4]}}>
              <div sx={{display: ['block', 'block', 'none'], mb: 4}}>
                <PageSideNav section={section} />
              </div>
              <div sx={{variant: 'styles', mb: 5}} role='main'>
                <div sx={{marginBottom: 4}} >
                  <Styled.h1 sx={{variant: 'text.caps'}}>{title}</Styled.h1>
                </div>
                {_rawBody && <PortableText blocks={_rawBody} />}
              </div>
            </Box>
            <Box sx={{width: ['full', 'full', '1/4']}}>
              <aside sx={{
                pr: [0, 0, 4],
                pb: 4
              }}>
                <PageSideNav section={section} />
              </aside>
            </Box>
          </Flex>
          {/* </Styled.root> */}
        </Container>
      </section>
    </div>
  )
}

export default GenericPage
