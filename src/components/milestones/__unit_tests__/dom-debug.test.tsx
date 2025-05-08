import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Milestones } from '../milestones';
import { vikingsData, timelineData, ordinalData } from './test-utils';

/**
 * This file contains DOM debug tests that help with investigating
 * the rendered DOM structure of the Milestones component.
 * Useful during development and debugging. These tests can be
 * skipped in normal test runs by adding .skip after describe.
 */
describe.skip('Milestones Component - DOM Debugging', () => {
  test('DEBUG - check basic timeline DOM structure', async () => {
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
    
    // Wait for the component to render
    await waitFor(() => {
      expect(container.querySelector('.milestones')).toBeInTheDocument();
    });
    
    // Output the DOM structure to the console
    console.log('BASIC TIMELINE DOM STRUCTURE:');
    debug(container);
    
    // Check the DOM structure (these are debugging checks, not real tests)
    const milestonesEl = container.querySelector('.milestones');
    console.log('Classes on milestones element:', milestonesEl?.className);
    console.log('Child elements count:', milestonesEl?.childElementCount);
  });

  test('DEBUG - check ordinal scale DOM structure', async () => {
    const { container, debug } = render(
      <Milestones
        data={ordinalData}
        scaleType="ordinal"
        mapping={{
          value: 'value',
          text: 'description',
        }}
      />
    );
    
    // Wait for the component to render
    await waitFor(() => {
      expect(container.querySelector('.milestones')).toBeInTheDocument();
    });
    
    // Output the DOM structure to the console
    console.log('ORDINAL SCALE DOM STRUCTURE:');
    debug(container);
    
    // Check the DOM structure for ordinal scale
    const milestonesEl = container.querySelector('.milestones');
    console.log('Classes on ordinal scale element:', milestonesEl?.className);
    console.log('Child elements count:', milestonesEl?.childElementCount);
  });

  test('DEBUG - check styled timeline DOM structure', async () => {
    const { container, debug } = render(
      <Milestones
        data={timelineData}
        aggregateBy="year"
        mapping={{
          timestamp: 'year',
          text: 'title',
        }}
        parseTime="%Y"
        color="#ff0000"
        backgroundColor="#f5f5f5"
        labelBgColor="#e0e0e0"
        labelTextColor="#333333"
      />
    );
    
    // Wait for the component to render
    await waitFor(() => {
      expect(container.querySelector('.milestones')).toBeInTheDocument();
    });
    
    // Output the DOM structure to the console
    console.log('STYLED TIMELINE DOM STRUCTURE:');
    debug(container);
  });
});