import { Story, Meta } from '@storybook/react/types-6-0'
import { MenuProps } from 'components/Menu'
import Menu from '.'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta

export const Default: Story<MenuProps> = (args) => <Menu {...args} />

export const Logged: Story<MenuProps> = (args) => <Menu {...args} />

Logged.args = {
  username: 'John Doe',
}
