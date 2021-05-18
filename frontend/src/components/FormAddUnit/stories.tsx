import { Story, Meta } from '@storybook/react/types-6-0'
import FormAddUnit from '.'

export default {
  title: 'Form/FormAddUnit',
  component: FormAddUnit,
} as Meta

export const Default: Story = () => (
  <div style={{ width: 695, margin: 'auto' }}>
    <FormAddUnit />
  </div>
)
