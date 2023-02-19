import { IconButton } from '@chakra-ui/react'
import React from 'react'

import FaIcon from './fa-icon'

export default function FaIconButton(props) {
  const { icon, ...otherProps } = props

  return <IconButton icon={<FaIcon icon={icon} />} {...otherProps} />
}
