import { extendTheme, theme } from "@chakra-ui/react";

export const extendedTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'purple.800',
        color: 'white',
        minH: '100vh'
      },
    }
  },
  fonts: {
    heading: `'baloo', ${theme.fonts.heading}`,
  },
  shadows: { ...theme.shadows, outline:'0 !important' },
})