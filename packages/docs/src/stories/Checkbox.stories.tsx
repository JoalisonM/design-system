import { StoryObj, Meta } from '@storybook/react'
import { Box, Checkbox, CheckboxProps, Text } from '@atumalaca-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => {
      return (
        <Box as="label" style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '0.5rem' }}>
          {Story()}
          <Text size='sm'>Accept terms of use</Text>
        </Box>
      )
    }
  ]
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
