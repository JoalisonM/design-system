import { StoryObj, Meta } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { Box, Badge, BadgeProps } from '@nefex-ui/react'
import { theme } from '../config/theme'

export default {
  title: 'Data Display/Badge',
  component: Badge,
  args: {
    children: 'Lorem ipsum'
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <Box>
            {Story()}
          </Box>
        </ThemeProvider>
      )
    }
  ]
} as Meta<BadgeProps>

export const Primary: StoryObj<BadgeProps> = {}

export const Secondary: StoryObj<BadgeProps> = {
  args: {
    variant: 'secondary',
    children: 'Secondary'
  }
}

export const Outline: StoryObj<BadgeProps> = {
  args: {
    variant: 'outline',
    children: 'Outline'
  }
}

export const Destructive: StoryObj<BadgeProps> = {
  args: {
    variant: 'destructive',
    children: 'Destructive'
  }
}

export const Success: StoryObj<BadgeProps> = {
  args: {
    variant: 'success',
    children: 'Success'
  }
}

export const Warning: StoryObj<BadgeProps> = {
  args: {
    variant: 'warning',
    children: 'Warning'
  }
}