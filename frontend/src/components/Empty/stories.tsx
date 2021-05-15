import { Story, Meta } from '@storybook/react/types-6-0'
import Empty, { EmptyProps } from '.'

export default {
  title: 'Empty',
  component: Empty,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta

export const Default: Story<EmptyProps> = (args) => <Empty {...args} />

Default.args = {
  title: 'Sua página de "empresas" está vazia',
  description: 'Adicione empresas para que elas apareçam aqui.',
  hasLink: true,
}
