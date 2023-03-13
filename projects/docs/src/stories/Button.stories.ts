import { Story, Meta } from '@storybook/angular/types-6-0';
import Button from '../components/button/button.component';

export default {
  title: 'Form/Button',
  component: Button,
} as Meta;

const Template: Story<Button> = (args: Button) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

