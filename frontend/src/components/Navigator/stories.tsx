import { Story, Meta } from '@storybook/react/types-6-0'
import Navigator, { NavigatorProps } from '.'

export default {
  title: 'Navigator',
  component: Navigator,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta

export const Default: Story<NavigatorProps> = (args) => <Navigator {...args} />
