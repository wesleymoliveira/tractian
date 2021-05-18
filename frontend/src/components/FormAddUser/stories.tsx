import { Story, Meta } from '@storybook/react/types-6-0'
import FormAddUser from '.'

export default {
  title: 'Form/FormAddUser',
  component: FormAddUser,
} as Meta

export const Default: Story = () => (
  <div style={{ width: 695, margin: 'auto' }}>
    <FormAddUser />
  </div>
)
