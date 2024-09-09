import { StoryObj, Meta } from '@storybook/react'
import { Box, Button, PageHeader, PageHeaderProps, Text } from '@nefex-ui/react'

export default {
  title: 'Surfaces/PageHeader',
  component: PageHeader,
  args: {
    title: 'Lorem Ipsum Dolor',
  },
  decorators: [
    (Story) => {
      return (
        <Box as="label" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<PageHeaderProps>

export const Primary: StoryObj<PageHeaderProps> = {}

export const WithSubTitle: StoryObj<PageHeaderProps> = {
  args: {
    subTitle: "consectetur adipiscing"
  }
}

export const WithButtons: StoryObj<PageHeaderProps> = {
  args: {
    buttons: <><Button>Test</Button></>
  }
}

export const WithContent: StoryObj<PageHeaderProps> = {
  args: {
    subTitle: "consectetur adipiscing",
    buttons: <><Button>Test</Button></>,
    children: (
      <>
        <Text size="sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, reiciendis rem nesciunt unde suscipit perspiciatis facilis repellendus sunt nulla sit in possimus ullam libero quis expedita hic non, fugiat quidem.
        </Text>
      </>
    )
  }
}