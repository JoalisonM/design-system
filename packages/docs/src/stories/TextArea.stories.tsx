import { StoryObj, Meta } from '@storybook/react'
import { Box, TextArea, TextAreaProps } from '@nefex-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {
    placeholder: 'Please type something',
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
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
    value: 'someone@nefex.io'
  }
}
