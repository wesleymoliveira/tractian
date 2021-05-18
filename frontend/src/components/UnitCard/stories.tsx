import { Story, Meta } from '@storybook/react/types-6-0'
import UnitCard, { UnitCardProps } from '.'

export default {
  title: 'UnitCard',
  component: UnitCard,
} as Meta

export const Default: Story<UnitCardProps> = (args) => <UnitCard {...args} />

Default.args = {
  name: 'Unidade 1',
}
