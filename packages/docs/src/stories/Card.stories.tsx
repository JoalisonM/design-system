import { StoryObj, Meta } from '@storybook/react'
import type { ButtonProps } from '@nefex-ui/react'
import { Box, Button, Card, Heading, Input, Text } from '@nefex-ui/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../config/theme'

export default {
  title: 'Data Display/Card',
  component: Button,
  args: {
    children: 'Enviar'
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <Box>
            <Card.Root>
              <Card.Header>
                <Heading size='xl'>Lorem ipsum dolor</Heading>

                <Text size='sm'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quos fugit adipisci, dolorem, vitae placeat distinctio illum cumque similique quis enim nulla nemo excepturi temporibus cum fugiat magnam aut sapiente?
                </Text>
              </Card.Header>
              <Card.Content style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Input placeholder='lorem ipsum dolor' />
              </Card.Content>
              <Card.Footer>
                {Story()}
              </Card.Footer>
            </Card.Root>
          </Box>
        </ThemeProvider>
      )
    }
  ]
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}