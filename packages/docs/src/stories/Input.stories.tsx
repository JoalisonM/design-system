import { StoryObj, Meta } from '@storybook/react'
import { Box, Input, InputProps, Text } from '@nefex-ui/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../config/theme'

export default {
  title: 'Form/Input',
  component: Input,
  args: {
    placeholder: 'Please type something',
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <Box as="label" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Text size='sm'>Something:</Text>
            {Story()}
          </Box>
        </ThemeProvider>
      )
    }
  ]
} as Meta<InputProps>

export const Primary: StoryObj<InputProps> = {}

export const Number: StoryObj<InputProps> = {
  args: {
    type: 'number',
  }
}

export const Disabled: StoryObj<InputProps> = {
  args: {
    disabled: true,
    value: 'someone@nefex.io'
  }
}

export const WithPrefix: StoryObj<InputProps> = {
  args: {
    prefix: '+55',
  }
}

export const WithSuffix: StoryObj<InputProps> = {
  args: {
    suffix: '@nefex.io',
  }
}
