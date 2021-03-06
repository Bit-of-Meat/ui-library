import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';
import { withTests } from '@storybook/addon-jest';
import results from '../../../.jest-test-results.json';

export default {
  title: 'Bit of Meat/Button',
  component: Button,
  decorators: [withTests({ results })]
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button'
};