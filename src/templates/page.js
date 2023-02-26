import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

import FacebookFeed from '../components/facebook-feed'
import Markdown from '../components/markdown'

export const pageQuery = graphql`
  query Page($path: String!) {
    page: googleDocs(slug: { eq: $path }) {
      name
      cover {
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      markdown
    }
  }
`

export default function PageTemplate({ data }) {
  const cover = data?.page?.cover
  const coverProps = {
    style: {
      height: '24rem',
      maxHeight: '24rem',
      width: '100%',
    },
    objectPosition: 'center 60%',
  }

  if (cover?.title) {
    coverProps.title = cover.title
  }

  if (cover?.alt) {
    coverProps.alt = cover.alt
  }

  return (
    <>
      {cover && (
        <Box h={96} maxH={96} pos='relative' w='100%'>
          {cover?.image && <GatsbyImage image={getImage(cover.image)} {...coverProps} />}
          {data?.page?.name && (
            <Box borderRadius={1} m='auto' maxW='6xl' px={4}>
              <Heading
                as='h1'
                bg='blackAlpha.600'
                bottom={8}
                color='white'
                pos='absolute'
                px={8}
                py={4}
                size='3xl'
                zIndex={1}
              >
                {data.page.name}
              </Heading>
            </Box>
          )}
        </Box>
      )}
      <Box as='main' flex={1}>
        <Box maxW='6xl' mx='auto' mt={8} mb={16} w='100%'>
          <Flex direction={{ base: 'column', lg: 'row' }}>
            <Box px={4} overflow='hidden'>
              <Markdown>{data?.page?.markdown}</Markdown>
            </Box>
            {data?.page?.name === 'Accueil' && (
              <Box bg='orange.100' borderRadius={4} mx={4} p={4}>
                <Text align='center' as='strong' display='inline-block'>
                  Retrouvez toutes les actualités de l’association sur notre page Facebook !
                </Text>
                <FacebookFeed
                  smallHeader
                  appId='1891293047900564'
                  cover={false}
                  cta={false}
                  facepile={false}
                  href='https://www.facebook.com/Entreboischampsetvillages'
                />
              </Box>
            )}
          </Flex>
        </Box>
      </Box>
    </>
  )
}
