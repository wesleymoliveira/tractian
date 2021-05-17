import { Story, Meta } from '@storybook/react/types-6-0'
import AssetCard, { AssetCardProps } from '.'

import mock from './mock'

export default {
  title: 'AssetCard',
  component: AssetCard,
  args: {
    asset: mock,
  },
} as Meta

export const Default: Story<AssetCardProps> = (args) => <AssetCard {...args} />
