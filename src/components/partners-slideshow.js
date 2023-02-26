import { Box, keyframes, useTheme } from '@chakra-ui/react'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import { hexToRgb } from '../utils'

function Slide({ children }) {
  return (
    <Box h='100px' width='360px' display='flex' alignItems='center' justifyContent='center'>
      {children}
    </Box>
  )
}

export default function PartnersSlideshow() {
  const theme = useTheme()
  const animation = keyframes`
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-360px * 3)); }
  `
  const sliderBgDim = {
    bgGradient: `linear(to-r, ${hexToRgb(theme.colors.green['50'], 1)}, ${hexToRgb(theme.colors.green['50'], 0)})`,
    content: '""',
    height: '100px',
    position: 'absolute',
    width: '200px',
    zIndex: '2',
  }

  return (
    <Box
      h='100px'
      w='100%'
      overflow='hidden'
      pos='relative'
      sx={{
        '&::before': { ...sliderBgDim, left: 0, top: 0 },
        '&::after': {
          ...sliderBgDim,
          right: 0,
          top: 0,
          transform: 'rotateZ(180deg)',
        },
      }}
    >
      <Box animation={`${animation} 25s linear infinite`} display='flex' width='calc(6 * 360px)'>
        <Slide>
          <StaticImage
            key='onf'
            src='../assets/logo_onf.png'
            height={100}
            title='Office National des Forêts'
            alt='Logo ONF'
          />
        </Slide>
        <Slide>
          <StaticImage
            key='roso'
            src='../assets/logo_roso.png'
            height={100}
            title="Regroupement des Organismes de Sauvegarde de l'Oise"
            alt='Logo ROSO'
          />
        </Slide>
        <Slide>
          <StaticImage
            key='oise-nature'
            src='../assets/logo_oise-nature.png'
            height={100}
            title='Association Oise Nature'
            alt='Logo Oise Nature'
          />
        </Slide>
        <Slide>
          <StaticImage
            key='onf'
            src='../assets/logo_onf.png'
            height={100}
            title='Office National des Forêts'
            alt='Logo ONF'
          />
        </Slide>
        <Slide>
          <StaticImage
            key='roso'
            src='../assets/logo_roso.png'
            height={100}
            title="Regroupement des Organismes de Sauvegarde de l'Oise"
            alt='Logo ROSO'
          />
        </Slide>
        <Slide>
          <StaticImage
            key='oise-nature'
            src='../assets/logo_oise-nature.png'
            height={100}
            title='Association Oise Nature'
            alt='Logo Oise Nature'
          />
        </Slide>
      </Box>
    </Box>
  )
}
