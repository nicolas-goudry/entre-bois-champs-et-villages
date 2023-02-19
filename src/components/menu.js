import { Box, Flex, Text } from '@chakra-ui/layout'
import { useBreakpoint } from '@chakra-ui/media-query'
import { MDXProvider } from '@mdx-js/react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'

import Markdown from './markdown'

export default function Menu({ location, isOpen, open }) {
  const bp = useBreakpoint()
  const isMobile = ['base', 'sm'].includes(bp)
  const data = useStaticQuery(graphql`
    query MenuQuery {
      menu: googleDocs(name: { eq: "Menu" }) {
        markdown
      }
    }
  `)
  const colors = {
    primary: 'green.500',
    secondary: 'green.50',
  }
  const menuComponents = {
    ul({ children }) {
      return (
        <Flex
          direction={isMobile ? 'column' : 'row'}
          sx={{
            '&:hover a': {
              color: colors.secondary,
              background: colors.primary,
            },
          }}
        >
          {children}
        </Flex>
      )
    },
    li({ children }) {
      return <Box>{children}</Box>
    },
    a({ href, children }) {
      const isActive = location.pathname === href

      return (
        <Box
          as={Link}
          bg={!isMobile && isActive ? colors.secondary : colors.primary}
          color={!isMobile && isActive ? colors.primary : colors.secondary}
          display='inline-block'
          fontSize={isMobile ? '2em' : '1em'}
          px={4}
          py={isMobile ? 4 : 1}
          sx={{
            '&:hover': {
              bg: `${colors.secondary} !important`,
              color: `${colors.primary} !important`,
            },
          }}
          textAlign='center'
          to={href}
          transition='color ease-in-out 300ms, background-color ease-in-out 300ms'
          w={isMobile ? '100%' : 'auto'}
          onClick={() => open(false)}
        >
          {children}
        </Box>
      )
    },
  }

  if (isMobile) {
    return (
      <Flex
        bg={colors.primary}
        color={colors.secondary}
        direction='column'
        h='100vh'
        left={0}
        pos='fixed'
        right={0}
        top={0}
        transform={isOpen ? 'translateX(0)' : 'translateX(100%)'}
        transition='transform 300ms ease-out'
        zIndex={9999}
      >
        <MDXProvider components={menuComponents}>
          <Markdown>{data?.menu?.markdown}</Markdown>
        </MDXProvider>
        <Box flex={1} />
        <Text
          cursor='pointer'
          display='inline-block'
          fontSize='2em'
          p={4}
          textAlign='center'
          w='100%'
          _hover={{
            bg: colors.secondary,
            color: colors.primary,
          }}
          onClick={() => open(false)}
        >
          Fermer
        </Text>
      </Flex>
    )
  }

  return (
    <Box bg={colors.primary} color={colors.secondary}>
      <Flex align='stretch' m='auto' maxW='6xl' px={4} w='100%'>
        <MDXProvider components={menuComponents}>
          <Markdown>{data?.menu?.markdown}</Markdown>
        </MDXProvider>
      </Flex>
    </Box>
  )
}
