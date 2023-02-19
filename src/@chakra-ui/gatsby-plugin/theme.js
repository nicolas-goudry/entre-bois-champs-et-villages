import '@fontsource/open-sans'
import { extendTheme, baseTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: `"Open Sans", ${baseTheme.fonts.body}`,
    heading: `"Open Sans", ${baseTheme.fonts.body}`,
  },
})

export default theme
export { baseTheme }
