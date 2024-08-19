import { StoryObj, Meta } from '@storybook/react'
import { Box, TextArea, TextAreaProps, Text } from '@nefex-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {
    placeholder: 'Please type something',
  },
  decorators: [
    (Story) => {
      return (
        <Box as="label" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Text size='sm'>Something:</Text>
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
    value: 'someone@nefex.io'
  }
}
