import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Load example data files
const loadJsonFile = (filename: string) => {
  const filePath = path.join(
    __dirname,
    '../../../../node_modules/d3-milestones/src/stories/assets',
    filename
  );
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

// Load all the example data files
export const examples = [
  {
    name: 'milestones',
    data: loadJsonFile('milestones.json'),
    options: {
      optimize: true,
      aggregateBy: 'day',
      mapping: {
        timestamp: 'timestamp',
        text: 'detail',
        url: 'giturl',
      },
      urlTarget: '_blank',
    },
  },
  {
    name: 'milestones-events',
    data: loadJsonFile('milestones-events.json'),
    options: {
      optimize: true,
      aggregateBy: 'day',
      mapping: {
        timestamp: 'timestamp',
        text: 'detail',
      },
    },
  },
  {
    name: 'vikings',
    data: loadJsonFile('vikings.json'),
    options: {
      aggregateBy: 'year',
      mapping: {
        timestamp: 'year',
        text: 'title',
      },
      optimize: true,
      autoResize: true,
      parseTime: '%Y',
    },
  },
  {
    name: 'os-category-labels',
    data: loadJsonFile('os-category-labels.json'),
    options: {
      optimize: true,
      aggregateBy: 'year',
      parseTime: '%Y',
      mapping: {
        category: 'system',
        entries: 'versions',
        timestamp: 'year',
        text: 'title',
      },
    },
  },
  {
    name: 'covid19',
    data: loadJsonFile('covid19.json'),
    options: {
      optimize: true,
      aggregateBy: 'day',
      parseTime: '%Y-%m-%d',
      mapping: {
        timestamp: 'date',
        text: 'title',
      },
    },
  },
  {
    name: 'ultima-series',
    data: loadJsonFile('ultima-series.json'),
    options: {
      aggregateBy: 'year',
      optimize: true,
      parseTime: '%Y',
      mapping: {
        timestamp: 'year',
        text: 'title',
      },
    },
  },
  {
    name: 'styles',
    data: loadJsonFile('styles.json'),
    options: {
      aggregateBy: 'year',
      optimize: true,
      parseTime: '%Y',
      mapping: {
        timestamp: 'year',
        text: 'text',
      },
    },
  },
];
