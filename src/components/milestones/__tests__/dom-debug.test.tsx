import React from 'react';
import { render } from '@testing-library/react';
import { Milestones } from '../milestones';

// A temporary test to debug the DOM structure
test('DEBUG - check DOM structure', () => {
  const vikingsData = [
    {
      year: 789,
      title: 'Vikings begin attacks on England.',
    },
    {
      year: 800,
      title: 'The Oseberg Viking longship buried',
    },
  ];

  const { container, debug } = render(
    <Milestones
      data={vikingsData}
      aggregateBy="year"
      mapping={{
        timestamp: 'year',
        text: 'title',
      }}
      parseTime="%Y"
    />
  );
  
  // This will output the DOM structure to the console
  console.log('DOM STRUCTURE:');
  debug(container);
  
  // Just a dummy assertion to make the test pass
  expect(true).toBe(true);
});