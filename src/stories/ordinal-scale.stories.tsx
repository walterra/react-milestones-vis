import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Milestones } from '../components/milestones';

const meta = {
  title: 'react-milestones-vis',
  component: Milestones,
} satisfies Meta<typeof Milestones>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for ordinal scale timeline
const ordinalData = [
  {
    step: 'Step 1',
    detail: 'Planning phase',
  },
  {
    step: 'Step 2',
    detail: 'Research phase',
  },
  {
    step: 'Step 3',
    detail: 'Development phase',
  },
  {
    step: 'Step 4',
    detail: 'Testing phase',
  },
  {
    step: 'Step 5',
    detail: 'Deployment phase',
  },
];

export const OrdinalScale: Story = {
  render: (args) => <Milestones {...args} />,
  args: {
    optimize: true,
    scaleType: 'ordinal',
    mapping: {
      value: 'step',
      text: 'detail',
    },
    data: ordinalData,
  },
};

// Sample data for ordinal scale with categories
const categoriesData = [
  {
    category: 'Frontend',
    steps: [
      {
        step: 'Requirements',
        detail: 'Gather interface requirements',
      },
      {
        step: 'Wireframes',
        detail: 'Create wireframes and mockups',
      },
      {
        step: 'Implementation',
        detail: 'Develop frontend components',
      },
      {
        step: 'Testing',
        detail: 'Test frontend components',
      },
    ],
  },
  {
    category: 'Backend',
    steps: [
      {
        step: 'Architecture',
        detail: 'Design system architecture',
      },
      {
        step: 'Database',
        detail: 'Create database schema',
      },
      {
        step: 'API',
        detail: 'Implement API endpoints',
      },
      {
        step: 'Integration',
        detail: 'Connect frontend and backend',
      },
    ],
  },
  {
    category: 'DevOps',
    steps: [
      {
        step: 'Environment',
        detail: 'Set up development environment',
      },
      {
        step: 'CI/CD',
        detail: 'Configure CI/CD pipeline',
      },
      {
        step: 'Deployment',
        detail: 'Prepare deployment strategy',
      },
      {
        step: 'Monitoring',
        detail: 'Set up monitoring tools',
      },
    ],
  },
];

export const OrdinalScaleWithCategories: Story = {
  render: (args) => <Milestones {...args} />,
  args: {
    optimize: true,
    scaleType: 'ordinal',
    mapping: {
      category: 'category',
      entries: 'steps',
      value: 'step',
      text: 'detail',
    },
    data: categoriesData,
  },
};