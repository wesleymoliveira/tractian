import { Story, Meta } from '@storybook/react/types-6-0'

import { AssetCardProps } from 'components/AssetCard'
import AssetCardSlider from '.'
import assets from './mock'

export default {
  title: 'AssetCardSlider',
  component: AssetCardSlider,
  args: { assets },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Default: Story<AssetCardProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <AssetCardSlider assets={args} {...args} />
  </div>
)
