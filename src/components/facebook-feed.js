import { Flex } from '@chakra-ui/layout'
import PropTypes from 'prop-types'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

export default function FacebookFeed({
  adaptWidth,
  appId,
  cover,
  cta,
  facepile,
  height,
  href,
  lazy,
  smallHeader,
  tabs,
  width,
}) {
  const containerRef = useRef()
  const [maxWidth, setMaxWidth] = useState(width)
  const qs = new URLSearchParams()
  const resizeHandler = useDebouncedCallback(() => {
    setMaxWidth(Math.min(containerRef.current.clientWidth, 500))
  }, 200)

  useLayoutEffect(() => {
    resizeHandler()

    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [resizeHandler])

  if (tabs === 'timeline') {
    qs.append('show_posts', true)
  } else {
    qs.append('tabs', tabs)
  }

  qs.append('adapt_container_width', Boolean(adaptWidth))
  qs.append('appId', appId)
  qs.append('height', height)
  qs.append('hide_cover', !cover)
  qs.append('hide_cta', !cta)
  qs.append('href', href)
  qs.append('lazy', lazy)
  qs.append('show_facepile', Boolean(facepile))
  qs.append('small_header', Boolean(smallHeader))
  qs.append('width', maxWidth)

  return (
    <Flex ref={containerRef} justify='center'>
      <iframe
        src={`https://www.facebook.com/plugins/page.php?${qs.toString()}`}
        title='Facebook page feed'
        width={maxWidth}
        height={height}
        style={{ border: 'none', overflow: 'hidden', marginTop: '1rem' }}
        scrolling='no'
        frameborder='0'
        allowfullscreen='true'
        allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
        data-width={`${maxWidth}px`}
      ></iframe>
    </Flex>
  )
}

FacebookFeed.propTypes = {
  adaptWidth: PropTypes.bool,
  appId: PropTypes.string.isRequired,
  cover: PropTypes.bool,
  cta: PropTypes.bool,
  facepile: PropTypes.bool,
  height: PropTypes.number,
  href: PropTypes.string.isRequired,
  lazy: PropTypes.bool,
  smallHeader: PropTypes.bool,
  tabs: PropTypes.string,
  width: PropTypes.number,
}

FacebookFeed.defaultProps = {
  adaptWidth: true,
  cover: true,
  cta: true,
  facepile: true,
  height: 750,
  lazy: false,
  smallHeader: false,
  tabs: 'timeline',
  width: 500,
}
