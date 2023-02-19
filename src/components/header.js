import { Box, Flex, Text } from '@chakra-ui/layout'
import React from 'react'

import Logo from '../assets/logo.svg'

export default function Header() {
  return (
    <Box as='header' bg='orange.800' color='orange.50'>
      <Flex align='stretch' justify='space-between' px={4} py={2} w='100%' h={16} maxW='6xl' maxH={16} m='auto'>
        <Flex gap={4} color='white' align='center'>
          <Logo style={{ height: '100%'}} />
          <Text as='span'>Entre Bois, Champs et Villages</Text>
        </Flex>
        <Text>MENU</Text>
      </Flex>
    </Box>
  )
}
