import * as React from 'react';

// Get the current React version for conditional testing
export const reactVersion = parseInt(React.version.split('.')[0], 10);

/**
 * Helper to run tests conditionally based on React version
 */
export function testForReact18(name: string, testFn: jest.ProvidesCallback): void {
  if (reactVersion >= 18) {
    test(name, testFn);
  } else {
    test.skip(`${name} (requires React 18)`, () => {});
  }
}

/**
 * Sample Vikings data for timeline tests
 */
export const vikingsData = [
  {
    year: 789,
    title: 'Vikings begin attacks on England.',
  },
  {
    year: 800,
    title: 'The Oseberg Viking longship buried',
  },
];

/**
 * Sample modern events data for timeline tests
 */
export const timelineData = [
  {
    year: 1969,
    title: 'Moon Landing',
  },
  {
    year: 1989,
    title: 'Berlin Wall Falls',
  },
  {
    year: 2001,
    title: 'Wikipedia Launched',
  },
  {
    year: 2008,
    title: 'Global Financial Crisis',
  },
  {
    year: 2020,
    title: 'COVID-19 Pandemic',
  }
];

/**
 * Sample ordinal data for ordinal scale tests
 */
export const ordinalData = [
  {
    value: 1,
    description: 'First milestone',
  },
  {
    value: 2,
    description: 'Second milestone',
  },
  {
    value: 3,
    description: 'Third milestone',
  }
];