import { Box, Link, Flex } from '@chakra-ui/layout'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'

const FOOTER_NAV = [
  {
    href: '/presse',
    label: 'Presse',
  },
  {
    href: '/mentions-legales',
    label: 'Mentions légales',
  },
]
export default function Footer({ location }) {
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
        <Flex sx={{ '&:hover > a:not(:hover)': { textDecor: 'none' } }}>
          {FOOTER_NAV.map(({ href, label }) => (
            <Link
              as={GatsbyLink}
              to={href}
              textDecor={location.pathname === href ? 'underline' : ''}
              display='inline-block'
              px={2}
              sx={{ '&:not(:last-child)': { borderRight: '1px solid currentColor' } }}
            >
              {label}
            </Link>
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}
