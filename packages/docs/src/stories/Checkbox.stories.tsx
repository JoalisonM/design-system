import { StoryObj, Meta } from '@storybook/react'
import { Box, Checkbox, CheckboxProps, Text } from '@nefex-ui/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../config/theme'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <Box as="label" style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '0.5rem' }}>
            {Story()}
            <Text size='sm'>Accept terms of use</Text>
          </Box>
        </ThemeProvider>
      )
    }
  ]
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
