import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Progress from './Progress';
import { ProgressType } from './Progress.types';

export default {
  title: 'Bit of Meat/Progress',
  component: Progress
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => <Progress {...args} />;

export const Download = Template.bind({});
Download.args = {
  percent: 68
};