import { StoryObj, Meta } from '@storybook/react'
import { Box, Button, ButtonProps } from '@nefex-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Enviar',
    variant: 'default',
    size: 'default',
    disabled: false,
  },
  argTypes: {
    variant: {
      type: 'string',
      description: 'default | destructive | success | outline | ghost | link',
      options: ['default', 'destructive', 'success', 'outline', 'ghost', 'link'],
      control: { type: 'select' },
    },
    size: {
      type: 'string',
      description: 'default | sm | lg | icon',
      options: ['default', 'sm', 'lg', 'icon'],
      control: { type: 'select' },
    },
    onClick: {
      action: 'click',
    },
    disabled: {
      control: {
        type: 'boolean',
      }
    }
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
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {
  args: {
    size: 'default',
  }
}

export const Success: StoryObj<ButtonProps> = {
  args: {
    variant: 'success',
    size: 'lg',
  }
}

export const Destructive: StoryObj<ButtonProps> = {
  args: {
    variant: 'destructive',
    size: 'sm'
  }
}

export const Ghost: StoryObj<ButtonProps> = {
  args: {
    variant: 'ghost',
    size: 'default',
  }
}

export const Link: StoryObj<ButtonProps> = {
  args: {
    variant: 'link',
    size: 'default'
  }
}

export const Outline: StoryObj<ButtonProps> = {
  args: {
    variant: 'outline',
    size: 'default'
  }
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    variant: 'success',
    size: 'default',
    disabled: true,
  }
}


export const Icon: StoryObj<ButtonProps> = {
  args: {
    children: 'J',
    size: 'icon',
  }
}

export const AsChild: StoryObj<ButtonProps> = {
  args: {
    asChild: true,
    children: (
      <>
        <a href="https://github.com/JoalisonM" target='_blank'>Enviar</a>
      </>
    ),
  }
}