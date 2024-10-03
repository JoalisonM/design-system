import { StoryObj, Meta } from '@storybook/react'
import { Box, Switch, SwitchProps, Text } from '@nefex-ui/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../config/theme'

export default {
  title: 'Form/Switch',
  component: Switch,
  args: {
    id: 'terms'
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <Box style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '0.5rem' }}>
            {Story()}
            <Text as='label' size='sm'>Accept terms of use</Text>
          </Box>
        </ThemeProvider>
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
