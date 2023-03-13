// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {ColorsComponent} from "../components/colors/colors.component";

export default {
  title: 'Docs/Style',
  component: ColorsComponent,
} as Meta;

const Template: Story<ColorsComponent> = (args: ColorsComponent) => ({
  props: args,
});

export const Colors = Template.bind({});

