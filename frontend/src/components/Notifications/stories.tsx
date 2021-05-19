import { Story, Meta } from '@storybook/react/types-6-0'
import Notifications, { NotificationsProps } from '.'

export default {
  title: 'Notifications',
  component: Notifications,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta

export const Default: Story<NotificationsProps> = () => (
  <div
    style={{
      right: '0rem',
      justifyContent: 'flex-end',
      width: '40rem',
      height: '25rem',
      position: 'absolute',
      backgroundColor: '#333333',
    }}
  >
    <Notifications />
  </div>
)
