import { Box, Divider, Flex, Heading, Link, ListItem, OrderedList, Text, UnorderedList } from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'

import Header from '../components/header'
import FacebookFeed from '../components/facebook-feed'
import Footer from '../components/footer'

const mdxComponents = {
  a({ href, children }) {
    return (
      <Link as={GatsbyLink} href={href} to={href} target={href.startsWith('#') ? '_self' : '_blank'} color='green.500'>
        {children}
      </Link>
    )
  },
  h1({ children }) {
    return (
      <Heading as='h1' size='xl' mb={6} sx={{ '&:not(:first-of-type)': { mt: 6 } }}>
        {children}
      </Heading>
    )
  },
  h2({ children }) {
    return (
      <Heading as='h2' size='lg' mb={6} sx={{ '&:not(:first-of-type)': { mt: 6 } }}>
        {children}
      </Heading>
    )
  },
  h3({ children }) {
    return (
      <Heading as='h3' size='md' mb={4} sx={{ '&:not(:first-of-type)': { mt: 4 } }}>
        {children}
      </Heading>
    )
  },
  h4({ children }) {
    return (
      <Heading as='h4' size='md' mb={4} sx={{ '&:not(:first-of-type)': { mt: 4 } }}>
        {children}
      </Heading>
    )
  },
  h5({ children }) {
    return (
      <Heading as='h5' size='sm' mb={2} sx={{ '&:not(:first-of-type)': { mt: 2 } }}>
        {children}
      </Heading>
    )
  },
  h6({ children }) {
    return (
      <Heading as='h6' size='sm' mb={2} sx={{ '&:not(:first-of-type)': { mt: 2 } }}>
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
      <Box as='p' mb={4}>
        <OrderedList>{children}</OrderedList>
      </Box>
    )
  },
  ul({ children }) {
    return (
      <Box as='p' mb={4}>
        <UnorderedList>{children}</UnorderedList>
      </Box>
    )
  },
  li({ children }) {
    return <ListItem>{children}</ListItem>
  },
  p({ children }) {
    return (
      <Box as='p' mb={4}>
        {children}
      </Box>
    )
  },
  FacebookFeed,
}

export default function LayoutIndex({ children, location }) {
  return (
    <Flex bg='green.50' direction='column' minH='100vh'>
      <Header location={location} />
      <MDXProvider components={mdxComponents}>{children}</MDXProvider>
      <Footer />
    </Flex>
  )
}
