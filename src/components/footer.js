import { Box, Link, Flex } from '@chakra-ui/layout'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'

export default function Footer() {
  return (
    <Box as='footer' bg='blackAlpha.800' color='white'>
      <Flex align='center' justify='space-between' px={4} py={2} w='100%' minH={36} maxW='6xl' m='auto'>
        <Link href='https://www.facebook.com/Entreboischampsetvillages/' target='_blank'>
          <FontAwesomeIcon fixedWidth icon={faFacebook} size='2x' />
        </Link>
        <Link as={GatsbyLink} to='/mentions-legales'>
          Mentions légales
        </Link>
      </Flex>
    </Box>
  )
}
