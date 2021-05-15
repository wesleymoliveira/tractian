import { Story, Meta } from '@storybook/react/types-6-0'
import FormAddAsset from '.'

export default {
  title: 'Form/FormAddAsset',
  component: FormAddAsset,
} as Meta

export const Default: Story = () => (
  <div style={{ width: 695, margin: 'auto' }}>
    <FormAddAsset />
  </div>
)
