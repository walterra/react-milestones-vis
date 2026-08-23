import * as React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { Milestones } from '../milestones';
import { MilestonesEventPayload } from '../types';
import { vikingsData } from './test-utils';

describe('Milestones Component - Callbacks', () => {
  test('calls renderCallback after rendering', async () => {
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
      expect(mockRenderCallback).toHaveBeenCalled();
    });

    mockRenderCallback.mockClear();

    const newData = [
      ...vikingsData,
      {
        year: 850,
        title: 'New timeline event',
      },
    ];

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

    await waitFor(() => {
      expect(mockRenderCallback).toHaveBeenCalled();
    });
  });
});
