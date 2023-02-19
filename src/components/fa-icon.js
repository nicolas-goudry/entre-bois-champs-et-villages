import { chakra } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function FaIcon({ icon, ...props }) {
  const Icon = chakra(FontAwesomeIcon)

  return <Icon icon={icon} {...props} />
}
