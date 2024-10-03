import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextProps } from '@nefex-ui/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../config/theme'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatem unde sequi debitis voluptatum, impedit iusto sit veniam soluta. Illo magnam non reiciendis quis tempore repellat beatae veritatis quibusdam eaque?'
  },
  argTypes: {
    size: {
      type: 'string',
      description: 'sm | lg | xxs | xs | md | xl | 2xl | 4xl | 5xl | 6xl | 7xl | 8xl | 9xl',
      options: ["sm", "lg", "xxs", "xs", "md", "xl", "2xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"],
      control: { type: 'select' },
    }
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
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
  args: {
    size: '4xl',
  }
}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    as: 'strong',
    size: 'xl',
    children: 'Lorem ipsum dolor',
  },
  parameters: {
    docs: {
      description: {
        story: 'Por padrão o text sempre será um `p`, mas podemos alterar isso com a propriedade `as`'
      }
    }
  }
}