import { StoryObj, Meta } from '@storybook/react'
import { Box, ScrollArea, ScrollAreaProps } from '@nefex-ui/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../config/theme'

export default {
  title: 'Surfaces/ScrollArea',
  component: ScrollArea,
  args: {
    children: (
      <div>
        <div>item 1</div>
        <div>item 2</div>
        <div>item 3</div>
        <div>item 4</div>
        <div>item 5</div>
        <div>item 6</div>
        <div>item 7</div>
        <div>item 8</div>
        <div>item 9</div>
        <div>item 10</div>
        <div>item 10</div>
        <div>item 10</div>
        <div>item 10</div>
        <div>item 10</div>
        <div>item 10</div>
        <div>item 10</div>
        <div>item 10</div>
        <div>item 10</div>
        <div>item 10</div>
        <div>item 10</div>
        <div>item 10</div>
        <div>item 10</div>
        <div>item 10</div>
        <div>item 10</div>
      </div>
    )
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <Box>
            {Story()}
          </Box>
        </ThemeProvider>
      )
    }
  ]
} as Meta<ScrollAreaProps>

export const Primary: StoryObj<ScrollAreaProps> = {}