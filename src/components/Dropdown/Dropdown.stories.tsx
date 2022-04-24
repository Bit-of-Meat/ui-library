import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Dropdown from './Dropdown';

export default {
  title: 'Bit of Meat/Dropdown',
  component: Dropdown
} as ComponentMeta<typeof Dropdown>;

export const Template: ComponentStory<typeof Dropdown> = (args) =>
  <div>
    <Dropdown items={["Multiplayer", "Singleplayer"]} />
    <Dropdown items={["PC", "Xbox", "Playstation", "Nintendo Switch"]} />
    <br/>
    <Dropdown items={["Windows", "Mac OS", "Linux"]} />
    <Dropdown items={["Games", "Software"]} />
  </div>