import { Box, Link, Flex } from '@chakra-ui/layout'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'

export default function Footer() {
  return (
    <Box as='footer' bg='gray.900' color='white'>
      <Flex align='center' justify='space-between' m='auto' maxW='6xl' minH={36} px={4} py={2} w='100%'>
        <Link
          href='https://www.facebook.com/Entreboischampsetvillages/'
          target='_blank'
          transition='color ease-in-out 300ms'
          _hover={{ color: 'blue.400' }}
        >
          <FontAwesomeIcon fixedWidth icon={faFacebook} size='2x' />
        </Link>
        <Flex gap={2}>
          <Link as={GatsbyLink} to='/presse'>
            Presse
          </Link>
          |
          <Link as={GatsbyLink} to='/mentions-legales'>
            Mentions légales
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}
