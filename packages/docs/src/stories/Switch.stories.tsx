import { StoryObj, Meta } from '@storybook/react'
import { Box, Switch, SwitchProps, Text } from '@nefex-ui/react'

export default {
  title: 'Form/Switch',
  component: Switch,
  args: {
    id: 'terms'
  },
  decorators: [
    (Story) => {
      return (
        <Box style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '0.5rem' }}>
          {Story()}
          <Text as='label' size='sm'>Accept terms of use</Text>
        </Box>
      )
    }
  ]
} as Meta<SwitchProps>

export const Primary: StoryObj<SwitchProps> = {}

export const Disabled: StoryObj<SwitchProps> = {
  args: {
    disabled: true,
    value: 'someone@nefex.io'
  }
}
