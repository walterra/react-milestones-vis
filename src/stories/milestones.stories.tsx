import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Milestones } from '../components/milestones';

import dataMilestones from '../../node_modules/d3-milestones/src/stories/assets/milestones.json';
import dataMilestonesEvents from '../../node_modules/d3-milestones/src/stories/assets/milestones-events.json';
import dataVikings from '../../node_modules/d3-milestones/src/stories/assets/vikings.json';
import dataOsCategoryLabels from '../../node_modules/d3-milestones/src/stories/assets/os-category-labels.json';
import dataCovid19 from '../../node_modules/d3-milestones/src/stories/assets/covid19.json';
import dataUltima from '../../node_modules/d3-milestones/src/stories/assets/ultima-series.json';
import dataStyles from '../../node_modules/d3-milestones/src/stories/assets/styles.json';

const meta = {
  title: 'react-milestones-vis',
  component: Milestones,
} satisfies Meta<typeof Milestones>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MilestonesReleases: Story = {
  render: (args) => <Milestones {...args} />,
  args: {
    optimize: true,
    aggregateBy: 'day',
    mapping: {
      timestamp: 'timestamp',
      text: 'detail',
      url: 'giturl',
    },
    urlTarget: '_blank',
    data: dataMilestones,
  },
};

export const EventsAPI: Story = {
  render: (args) => <Milestones {...args} />,
  args: {
    optimize: true,
    aggregateBy: 'day',
    mapping: {
      timestamp: 'timestamp',
      text: 'detail',
    },
    data: dataMilestonesEvents,
  },
};

export const Vikings: Story = {
  render: (args) => <Milestones {...args} />,
  args: {
    aggregateBy: 'year',
    mapping: {
      timestamp: 'year',
      text: 'title',
    },
    optimize: true,
    autoResize: true,
    parseTime: '%Y',
    data: dataVikings,
  },
};

export const OsCategoryLabels: Story = {
  render: (args) => <Milestones {...args} />,
  args: {
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
  },
};

export const COVID19: Story = {
  render: (args) => <Milestones {...args} />,
  args: {
    optimize: true,
    aggregateBy: 'day',
    parseTime: '%Y-%m-%d',
    mapping: {
      timestamp: 'date',
      text: 'title',
    },
    data: dataCovid19,
  },
};

export const UltimaSeries: Story = {
  render: (args) => <Milestones {...args} />,
  args: {
    aggregateBy: 'year',
    optimize: true,
    parseTime: '%Y',
    mapping: {
      timestamp: 'year',
      text: 'title',
    },
    data: dataUltima,
  },
};

export const Styles: Story = {
  render: (args) => <Milestones {...args} />,
  args: {
    aggregateBy: 'year',
    optimize: true,
    parseTime: '%Y',
    mapping: {
      timestamp: 'year',
      text: 'text',
    },
    data: dataStyles,
  },
};
