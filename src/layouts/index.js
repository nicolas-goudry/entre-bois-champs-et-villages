import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import { Flex } from '@chakra-ui/layout'

export default function LayoutIndex({ children }) {
  return (
    <Flex direction='column' minH='100vh'>
      <Header />
      {children}
      <Footer />
    </Flex>
  )
}
