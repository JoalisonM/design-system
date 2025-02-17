import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, defaultTheme } from '@nefex-ui/react'
import { ThemeProvider } from 'styled-components'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: 'Lorem ipsum dolor sit amet'
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={defaultTheme}>
          {Story()}
        </ThemeProvider>
      )
    }
  ]
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}