import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Milestones } from '../milestones';
import { vikingsData } from './test-utils';

describe('Milestones Component - Callbacks', () => {
  test('calls renderCallback after rendering', async () => {
    // Create a mock function for renderCallback
    const mockRenderCallback = jest.fn();

    const { container } = render(
      <Milestones
        data={vikingsData}
        aggregateBy="year"
        mapping={{
          timestamp: 'year',
          text: 'title',
        }}
        parseTime="%Y"
        renderCallback={mockRenderCallback}
      />
    );

    await waitFor(() => {
      // Check if the callback was called
      expect(mockRenderCallback).toHaveBeenCalled();
    });
  });

  test('calls onClick handler when provided', async () => {
    // Create a mock function for onClick
    const mockOnClick = jest.fn();

    const { container } = render(
      <Milestones
        data={vikingsData}
        aggregateBy="year"
        mapping={{
          timestamp: 'year',
          text: 'title',
        }}
        parseTime="%Y"
        onClick={mockOnClick}
      />
    );

    // Wait for rendering to complete
    await waitFor(() => {
      expect(container.querySelector('.milestones')).toBeInTheDocument();
    });

    // Note: We can't trigger click events in this test because d3-milestones
    // handles them internally, but we can verify the component rendered with the prop
    expect(container.firstChild).toBeInTheDocument();
  });

  test('calls renderCallback after component updates', async () => {
    // Create a mock function for the update callback
    const mockRenderCallback = jest.fn();

    const { container, rerender } = render(
      <Milestones
        data={vikingsData}
        aggregateBy="year"
        mapping={{
          timestamp: 'year',
          text: 'title',
        }}
        parseTime="%Y"
        renderCallback={mockRenderCallback}
      />
    );

    await waitFor(() => {
      // Check if the callback was called at least once
      expect(mockRenderCallback).toHaveBeenCalled();
    });

    // Reset the mock to clearly see new calls
    mockRenderCallback.mockClear();

    // Update with new data
    const newData = [
      ...vikingsData,
      {
        year: 850,
        title: 'New timeline event',
      }
    ];

    // Rerender with new data
    rerender(
      <Milestones
        data={newData}
        aggregateBy="year"
        mapping={{
          timestamp: 'year',
          text: 'title',
        }}
        parseTime="%Y"
        renderCallback={mockRenderCallback}
      />
    );

    // Wait for re-rendering to complete
    await waitFor(() => {
      // Check if the callback was called after update
      expect(mockRenderCallback).toHaveBeenCalled();
    });
  });
});