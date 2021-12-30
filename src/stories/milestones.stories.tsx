import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Milestones } from '../components/milestones';

import dataVikings from './vikings.json';

export default {
  title: 'react-milestones-vis',
  component: Milestones,
} as ComponentMeta<typeof Milestones>;

const Template: ComponentStory<typeof Milestones> = (args) => (
  <Milestones {...args} />
);

export const Vikings = Template.bind({});
Vikings.args = {
  aggregateBy: 'year',
  mapping: {
    timestamp: 'year',
    text: 'title',
  },
  optimize: true,
  autoResize: true,
  parseTime: '%Y',
  data: dataVikings,
};
