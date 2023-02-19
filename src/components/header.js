import { Box, Flex, Text } from '@chakra-ui/layout'
import { useBreakpoint } from '@chakra-ui/media-query'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'
import React, { useState } from 'react'

import Logo from '../assets/logo.svg'
import FaIcon from './fa-icon'
import Menu from './menu'

export default function Header({ location }) {
  const bp = useBreakpoint()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <Box as='header' bg='green.600' color='green.50'>
        <Flex align='stretch' h={24} justify='space-between' m='auto' maxH={24} maxW='6xl' px={4} w='100%'>
          <Flex
            align='center'
            as={Link}
            color='green.50'
            pr={4}
            py={4}
            to='/'
            transition='color ease-in-out 300ms, background-color ease-in-out 300ms'
            _hover={{ backgroundColor: 'green.50', color: 'green.600' }}
          >
            <Box as={Logo} filter='drop-shadow(2px 4px 2px rgb(0 0 0 / 0.4))' h={12} mx={4} />
            <Text as='strong' fontSize={{ base: 16, md: 20 }}>
              Entre Bois, Champs et Villages
            </Text>
          </Flex>
          {['base', 'sm'].includes(bp) && (
            <Flex
              align='center'
              cursor='pointer'
              justify='center'
              px={8}
              py={4}
              transition='color ease-in-out 300ms, background-color ease-in-out 300ms'
              _hover={{ backgroundColor: 'green.50', color: 'green.600' }}
              onClick={() => setIsMenuOpen(true)}
            >
              <FaIcon icon={faBars} size='2x' />
            </Flex>
          )}
        </Flex>
      </Box>
      <Menu isOpen={isMenuOpen} location={location} open={setIsMenuOpen} />
    </>
  )
}
