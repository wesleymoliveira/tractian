import { Story, Meta } from '@storybook/react/types-6-0'
import AssetsStatus, { AssetsStatusProps } from '.'

import mock from './mock'

export default {
  title: 'AssetsStatus',
  component: AssetsStatus,
  args: {
    values: mock,
  },
} as Meta

export const Default: Story<AssetsStatusProps> = (args) => (
  <AssetsStatus {...args} />
)
