import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { ButtonProps } from '.'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import { FavoriteBorder } from '@styled-icons/material-outlined/FavoriteBorder'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    icon: {
      type: '',
    },
  },
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Ver Equipamento',
}

export const WithIcon: Story<ButtonProps> = (args) => <Button {...args} />

WithIcon.args = {
  size: 'large',
  children: 'Ver Equipamento',
  icon: <AddShoppingCart />,
}

export const asLink: Story = (args) => <Button {...args} />

asLink.args = {
  size: 'large',
  children: 'Ver Equipamento',
  as: 'a',
  href: '/link',
}

export const Minimalist: Story = (args) => <Button {...args} />

Minimalist.args = {
  minimalist: true,
  size: 'medium',
  children: 'Add Equipamento',
  icon: <FavoriteBorder />,
}

export const Disabled: Story = (args) => <Button {...args} />

Disabled.args = {
  disabled: true,
  children: 'Add Equipamento',
}
