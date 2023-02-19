import { Box, Divider, Heading, Link, ListItem, OrderedList, Text, UnorderedList } from '@chakra-ui/react'
import { Link as GatsbyLink, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import rehypeReact from 'rehype-react'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    a({ href, children }) {
      return (
        <Link as={GatsbyLink} href={href} to={href} target={href.startsWith('#') ? '_self' : '_blank'}>
          {children}
        </Link>
      )
    },
    h1({ children }) {
      return (
        <Heading as='h1' size='3xl'>
          {children}
        </Heading>
      )
    },
    h2({ children }) {
      return (
        <Heading as='h2' size='2xl'>
          {children}
        </Heading>
      )
    },
    h3({ children }) {
      return (
        <Heading as='h3' size='xl'>
          {children}
        </Heading>
      )
    },
    h4({ children }) {
      return (
        <Heading as='h4' size='lg'>
          {children}
        </Heading>
      )
    },
    h5({ children }) {
      return (
        <Heading as='h5' size='md'>
          {children}
        </Heading>
      )
    },
    h6({ children }) {
      return (
        <Heading as='h6' size='sm'>
          {children}
        </Heading>
      )
    },
    strong({ children }) {
      return <Text as='strong'>{children}</Text>
    },
    em({ children }) {
      return <Text as='em'>{children}</Text>
    },
    hr() {
      return <Divider />
    },
    ol({ children }) {
      return (
        <p>
          <OrderedList>{children}</OrderedList>
        </p>
      )
    },
    ul({ children }) {
      return (
        <p>
          <UnorderedList>{children}</UnorderedList>
        </p>
      )
    },
    li({ children }) {
      return <ListItem>{children}</ListItem>
    },
    p({ children }) {
      return <p>{children}</p>
    },
  },
}).Compiler

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
      childMarkdownRemark {
        htmlAst
      }
    }
  }
`

export default function PageTemplate({
  data: {
    page: {
      name,
      cover,
      childMarkdownRemark: { htmlAst },
    },
  },
}) {
  const coverProps = {
    style: {
      width: '100%',
      height: '24rem',
      maxHeight: '24rem',
    },
    objectPosition: 'center 60%',
  }

  if (cover.title) {
    coverProps.title = cover.title
  }

  if (cover.alt) {
    coverProps.alt = cover.alt
  }

  return (
    <>
      <Box w='100%' h={96} maxH={96} pos='relative'>
        {/*
        To add a cover:
        Add an image in your Google Doc first page header
        https://support.google.com/docs/answer/86629
      */}
        {cover && <GatsbyImage image={getImage(cover.image)} {...coverProps} />}
        <Box px={4} m='auto' maxW='6xl' borderRadius={1}>
          <Heading
            as='h1'
            px={8}
            py={4}
            size='3xl'
            zIndex={1}
            bg='blackAlpha.600'
            color='white'
            pos='absolute'
            bottom={8}
          >
            {name}
          </Heading>
        </Box>
      </Box>
      <Box as='main' flex={1}>
        <Box px={4} py={2} mx='auto' my={8} w='100%' maxW='6xl'>
          {renderAst(htmlAst)}
        </Box>
      </Box>
    </>
  )
}
