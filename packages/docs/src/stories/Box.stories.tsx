import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@nefex-ui/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../config/theme'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: 'Lorem ipsum dolor sit amet'
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          {Story()}
        </ThemeProvider>
      )
    }
  ]
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}