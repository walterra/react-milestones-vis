import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Milestones } from '../components/milestones';

import dataMilestones from '../../node_modules/d3-milestones/src/stories/assets/milestones.json';
import dataMilestonesEvents from '../../node_modules/d3-milestones/src/stories/assets/milestones-events.json';
import dataVikings from '../../node_modules/d3-milestones/src/stories/assets/vikings.json';
import dataOsCategoryLabels from '../../node_modules/d3-milestones/src/stories/assets/os-category-labels.json';
import dataCovid19 from '../../node_modules/d3-milestones/src/stories/assets/covid19.json';
import dataUltima from '../../node_modules/d3-milestones/src/stories/assets/ultima-series.json';
import dataStyles from '../../node_modules/d3-milestones/src/stories/assets/styles.json';

export default {
  title: 'react-milestones-vis',
  component: Milestones,
} as ComponentMeta<typeof Milestones>;

const Template: ComponentStory<typeof Milestones> = (args) => (
  <Milestones {...args} />
);

export const MilestonesReleases = Template.bind({});
MilestonesReleases.args = {
  optimize: true,
  aggregateBy: 'day',
  mapping: {
    timestamp: 'timestamp',
    text: 'detail',
    url: 'giturl',
  },
  urlTarget: '_blank',
  data: dataMilestones,
};

export const EventsAPI = Template.bind({});
EventsAPI.args = {
  optimize: true,
  aggregateBy: 'day',
  mapping: {
    timestamp: 'timestamp',
    text: 'detail',
  },
  data: dataMilestonesEvents,
};

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

export const OsCategoryLabels = Template.bind({});
OsCategoryLabels.args = {
  optimize: true,
  aggregateBy: 'year',
  parseTime: '%Y',
  mapping: {
    category: 'system',
    entries: 'versions',
    timestamp: 'year',
    text: 'title',
  },
  data: dataOsCategoryLabels,
};

export const COVID19 = Template.bind({});
COVID19.args = {
  optimize: true,
  aggregateBy: 'day',
  parseTime: '%Y-%m-%d',
  mapping: {
    timestamp: 'date',
    text: 'title',
  },
  data: dataCovid19,
};

export const UltimaSeries = Template.bind({});
UltimaSeries.args = {
  aggregateBy: 'year',
  optimize: true,
  parseTime: '%Y',
  mapping: {
    timestamp: 'year',
    text: 'title',
  },
  data: dataUltima,
};

export const Styles = Template.bind({});
Styles.args = {
  aggregateBy: 'year',
  optimize: true,
  parseTime: '%Y',
  mapping: {
    timestamp: 'year',
    text: 'text',
  },
  data: dataStyles,
};
