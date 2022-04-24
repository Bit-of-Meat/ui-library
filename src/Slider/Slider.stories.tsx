import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Slider from './Slider';

export default {
  title: 'Bit of Meat/Slider',
  component: Slider
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const Example = Template.bind({});
Example.args = {
  min: 0,
  max: 1000,
  value: 500
};