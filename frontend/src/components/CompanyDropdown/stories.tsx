import { Story, Meta } from '@storybook/react/types-6-0'
import CompanyDropdown, { CompanyDropdownProps } from '.'

export default {
  title: 'CompanyDropdown',
  component: CompanyDropdown,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta

export const Default: Story<CompanyDropdownProps> = (args) => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CompanyDropdown {...args} />
  </div>
)

Default.args = {
  companyName: 'Wesley',
}
