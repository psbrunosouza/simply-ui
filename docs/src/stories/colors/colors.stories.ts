import { Story, Meta } from '@storybook/angular/types-6-0';
import {ColorsGridComponent} from '../../components/colors-grid/colors-grid.component';

export default {
  title: 'Docs/Colors',
  component: ColorsGridComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
} as Meta;

const Template: Story<ColorsGridComponent> = (args: ColorsGridComponent) => ({
  props: args,
});

export const Colors = Template.bind({});
