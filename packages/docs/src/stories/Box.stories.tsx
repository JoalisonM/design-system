import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@atumalaca-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: 'Lorem ipsum dolor sit amet'
  }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}