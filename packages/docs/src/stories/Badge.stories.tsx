import { StoryObj, Meta } from '@storybook/react'
import { Box, Badge, BadgeProps } from '@nefex-ui/react'

export default {
  title: 'Data Display/Badge',
  component: Badge,
  args: {
    children: 'Lorem ipsum'
  },
  decorators: [
    (Story) => {
      return (
        <Box>
          {Story()}
        </Box>
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

export const Danger: StoryObj<BadgeProps> = {
  args: {
    variant: 'danger',
    children: 'Danger'
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