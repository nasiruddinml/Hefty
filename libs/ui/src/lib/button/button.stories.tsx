import { Story, Meta } from '@storybook/react';
import { Button } from './button';

export default {
  component: Button,
  title: 'Button',
} as Meta;

const Template: Story = (args) => <Button children={undefined} {...args} />;

export const Primary = Template.bind({});
Primary.args = {children: 'Primary', color: 'primary'};
