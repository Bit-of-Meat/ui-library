import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Progress from './Progress';

export default {
  title: 'Bit of Meat/Progress [WIP]',
  component: Progress
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => <Progress {...args} />;

export const Download = Template.bind({});
Download.args = {
  percent: 68
};