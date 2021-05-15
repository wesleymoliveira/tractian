import { Story, Meta } from '@storybook/react/types-6-0'
import Dropdown, { DropDownProps } from '.'

export default {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta

export const Default: Story<DropDownProps> = (args) => <Dropdown {...args} />

Default.args = {
  title: 'Clique aqui',
  children: 'Conteudo aqui',
}
