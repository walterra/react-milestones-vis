import * as React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Milestones } from '../milestones';
import { ordinalData } from './test-utils';

describe('Milestones Component - Ordinal Scale', () => {
  test('renders with ordinal scale', () => {
    const { container } = render(
      <Milestones
        data={ordinalData}
        scaleType="ordinal"
        mapping={{
          value: 'value',
          text: 'description',
        }}
      />
    );

    // Verify the div container is rendered with ordinal scale
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild?.nodeName).toBe('DIV');
  });

  test('updates ordinal scale when data changes', async () => {
    const { container, rerender } = render(
      <Milestones
        data={ordinalData}
        scaleType="ordinal"
        mapping={{
          value: 'value',
          text: 'description',
        }}
      />
    );

    // Wait for initial render
    await waitFor(() => {
      expect(container.querySelector('.milestones')).toBeInTheDocument();
    });

    // Add a new data point
    const updatedData = [
      ...ordinalData,
      {
        value: 4,
        description: 'Fourth milestone',
      },
    ];

    // Rerender with updated data
    rerender(
      <Milestones
        data={updatedData}
        scaleType="ordinal"
        mapping={{
          value: 'value',
          text: 'description',
        }}
      />
    );

    // Verify component updates with new data
    expect(container.firstChild).toBeInTheDocument();
    expect(container.querySelector('.milestones')).toBeInTheDocument();
  });
});
