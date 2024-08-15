import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@atumalaca-ui/react'

export default {
  title: 'Button',
  component: Button,
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {
  args: {
    children: 'Default',
    size: 'default',
  }
}

export const Success: StoryObj<ButtonProps> = {
  args: {
    children: 'Success',
    variant: 'success',
    size: 'lg',
  }
}

export const Destructive: StoryObj<ButtonProps> = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
    size: 'sm'
  }
}

export const Ghost: StoryObj<ButtonProps> = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
    size: 'default'
  }
}

export const Link: StoryObj<ButtonProps> = {
  args: {
    children: 'Link',
    variant: 'link',
    size: 'default'
  }
}

export const outline: StoryObj<ButtonProps> = {
  args: {
    children: 'Outline',
    variant: 'outline',
    size: 'default'
  }
}


export const Icon: StoryObj<ButtonProps> = {
  args: {
    children: 'J',
    size: 'icon',
  }
}