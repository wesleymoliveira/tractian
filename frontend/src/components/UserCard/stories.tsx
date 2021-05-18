import { Story, Meta } from '@storybook/react/types-6-0'
import UserCard, { UserCardProps } from '.'

export default {
  title: 'UserCard',
  component: UserCard,
} as Meta

export const Default: Story<UserCardProps> = (args) => <UserCard {...args} />

Default.args = {
  name: 'Mecânico1',
}
