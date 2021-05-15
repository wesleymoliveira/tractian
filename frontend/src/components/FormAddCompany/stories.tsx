import { Story, Meta } from '@storybook/react/types-6-0'
import FormAddCompany from '.'

export default {
  title: 'Form/FormAddCompany',
  component: FormAddCompany,
} as Meta

export const Default: Story = () => (
  <div style={{ width: 695, margin: 'auto' }}>
    <FormAddCompany />
  </div>
)
