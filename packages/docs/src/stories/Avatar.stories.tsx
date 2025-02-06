import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps, Box } from '@nefex-ui/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../config/theme'
import { User } from 'lucide-react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar.Root,
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

export const Primary: StoryObj<AvatarProps> = {
  args: {
    children: (
      <>
        <Avatar.Image src='https://github.com/JoalisonM.png' />
        <Avatar.Fallback>
          JM
        </Avatar.Fallback>
      </>
    )
  }
}

export const Size: StoryObj<AvatarProps> = {
  args: {
    size: 16,
    children: (
      <>
        <Avatar.Image src='https://github.com/JoalisonM.png' />
        <Avatar.Fallback>
          JM
        </Avatar.Fallback>
      </>
    )
  }
}

export const WithAvatarFallback: StoryObj<AvatarProps> = {
  args: {
    children: (
      <>
        <Avatar.Image src={undefined} />
        <Avatar.Fallback>
          <User />
        </Avatar.Fallback>
      </>
    )
  }
}

export const WithWordFallback: StoryObj<AvatarProps> = {
  args: {
    children: (
      <>
        <Avatar.Image src={undefined} />
        <Avatar.Fallback>
          JM
        </Avatar.Fallback>
      </>
    )
  }
}