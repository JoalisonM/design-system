import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps, Box } from '@nefex-ui/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../config/theme'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/JoalisonM.png',
    size: 12,
  },
  argTypes: {
    size: {
      type: 'string',
      description: "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 12 | 16 | 20 | 40 | 64 | 80",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "10", "12", "16", "20", "40", "64", "80"],
      control: { type: 'select' },
    }
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
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const Size: StoryObj<AvatarProps> = {
  args: {
    src: 'https://github.com/JoalisonM.png',
    size: 16,
  }
}

export const WithAvatarFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  }
}

export const WithWordFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    fallback: "JM",
  }
}