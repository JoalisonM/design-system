import { StoryObj, Meta } from '@storybook/react'
import { Box, Button, Drawer, DrawerProps } from '@nefex-ui/react'
import { useArgs } from '@storybook/client-api'

export default {
  title: 'Feedback/Drawer',
  component: Drawer,
  args: {
    title: 'Lorem Ipsum Dolor',
    open: false,
    onOpenChange: () => { },
    children: (
      <>
        <div>item 1</div>
        <div>item 2</div>
        <div>item 3</div>
      </>
    )
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
        <div>item 1</div>
        <div>item 2</div>
        <div>item 3</div>
      </Drawer>
    </>
  )
}

