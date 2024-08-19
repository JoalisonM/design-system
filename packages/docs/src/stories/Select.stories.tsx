import { StoryObj, Meta } from '@storybook/react'
import { Box, Select, Option, SelectProps } from '@nefex-ui/react'

export default {
  title: 'Form/Select',
  component: Select,
  args: {
    placeholder: 'Select something',
    showSearch: true,
    children: (
      <>
        <Option value='Apple'>Apple</Option>
        <Option value='Orange'>Orange</Option>
        <Option value='A'>A</Option>
        <Option value='B'>B</Option>
        <Option value='C'>C</Option>
        <Option value='D'>D</Option>
        <Option value='E'>E</Option>
        <Option value='F'>F</Option>
        <Option value='G'>G</Option>
        <Option value='H'>H</Option>
        <Option value='J'>J</Option>
        <Option value='K'>K</Option>
        <Option value='L'>L</Option>
        <Option value='M'>M</Option>
        <Option value='N'>N</Option>
        <Option value='O'>O</Option>
      </>
    ),
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
} as Meta<SelectProps>

export const Primary: StoryObj<SelectProps> = {}

export const Disabled: StoryObj<SelectProps> = {
  args: {
    disabled: true,
  },
}
