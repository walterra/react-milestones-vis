import * as React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { Milestones } from '../milestones';
import { MilestonesEventPayload } from '../types';
import { vikingsData } from './test-utils';

describe('Milestones Component - Callbacks', () => {
  test('calls renderCallback after rendering', async () => {
    // Create a mock function for renderCallback
    const mockRenderCallback = jest.fn();

    render(
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

  test('passes mapped and source data to all event callbacks', async () => {
    const onEventClick = jest.fn<void, [MilestonesEventPayload<typeof vikingsData[number]>]>();
    const onEventMouseOver = jest.fn<void, [MilestonesEventPayload<typeof vikingsData[number]>]>();
    const onEventMouseLeave = jest.fn<void, [MilestonesEventPayload<typeof vikingsData[number]>]>();

    const { container } = render(
      <Milestones<typeof vikingsData[number]>
        data={vikingsData}
        aggregateBy="year"
        mapping={{
          timestamp: 'year',
          text: 'title',
        }}
        parseTime="%Y"
        onEventClick={onEventClick}
        onEventMouseOver={onEventMouseOver}
        onEventMouseLeave={onEventMouseLeave}
      />
    );

    // Wait for d3-milestones to render and bind events to a label.
    const label = await waitFor(() => {
      const renderedLabel = container.querySelector('.milestones-label');
      expect(renderedLabel).toBeInTheDocument();
      return renderedLabel as Element;
    });
    const expectedPayload = {
      text: vikingsData[0].title,
      timestamp: vikingsData[0].year,
      attributes: vikingsData[0],
    };

    fireEvent.click(label);
    fireEvent.mouseOver(label);
    fireEvent.mouseLeave(label);

    expect(onEventClick).toHaveBeenCalledWith(expectedPayload);
    expect(onEventMouseOver).toHaveBeenCalledWith(expectedPayload);
    expect(onEventMouseLeave).toHaveBeenCalledWith(expectedPayload);
  });

  test('calls renderCallback after component updates', async () => {
    // Create a mock function for the update callback
    const mockRenderCallback = jest.fn();

    const { rerender } = render(
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
      },
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
