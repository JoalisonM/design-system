import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@nefex-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/JoalisonM.png'
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
}