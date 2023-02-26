import { Box, keyframes, useTheme } from '@chakra-ui/react'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { hexToRgb } from '../utils'

/**
 *
 * @mixin white-gradient {
	background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
}

$animationSpeed: 40s;

// Animation
@keyframes scroll {
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-250px * 7))}
}


// Styling
.slider {
	background: white;
	box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
	height: 100px;
	margin: auto;
	overflow:hidden;
	position: relative;
	width: 960px;

	&::before,
	&::after {
		background: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
		content: "";
		height: 100px;
		position: absolute;
		width: 200px;
		z-index: 2;
	}

	&::after {
		right: 0;
		top: 0;
		transform: rotateZ(180deg);
	}

	&::before {
		left: 0;
		top: 0;
	}

	.slide-track {
		animation: scroll $animationSpeed linear infinite;
		display: flex;
		width: calc(250px * 14);
	}

	.slide {
		height: 100px;
		width: 250px;
	}
}
 */

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
    background: `linear-gradient(to right, ${hexToRgb(theme.colors.green['50'], 1)} 0%, ${hexToRgb(
      theme.colors.green['50'],
      0,
    )} 100%)`,
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
