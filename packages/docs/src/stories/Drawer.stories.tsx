import { StoryObj, Meta } from '@storybook/react'
import { Box, Button, Drawer, DrawerProps, Select } from '@nefex-ui/react'
import { useArgs } from '@storybook/client-api'

export default {
  title: 'Feedback/Drawer',
  component: Drawer,
  args: {
    title: 'Lorem Ipsum Dolor',
    open: false,
    onOpenChange: () => { },
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
} as Meta<DrawerProps>

export const Primary: StoryObj<DrawerProps> = () => {
  const [{ open }, updateArgs] = useArgs();

  const toggleDrawer = () => {
    updateArgs({ open: !open }); // Alterna o estado de "open"
  };

  return (
    <>
      <Button onClick={toggleDrawer}>
        Abrir Drawer
      </Button>

      <Drawer
        title="Lorem Ipsum Dolor"
        open={open}
        onOpenChange={toggleDrawer}
        footer={(
          <>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => toggleDrawer()}
            >
              Cancelar
            </Button>
            <Button size="sm">Salvar</Button>
          </>
        )}
      >
        <Box>
          <Select placeholder="Selecione o usuário">
            <Select.Option value="João">João</Select.Option>
            <Select.Option value="Maria">Maria</Select.Option>
            <Select.Option value="José">José</Select.Option>
          </Select>
        </Box>
      </Drawer>
    </>
  )
}

