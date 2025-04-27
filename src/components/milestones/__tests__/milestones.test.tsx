import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { Milestones } from '../milestones';

// Mock ResizeObserver before tests
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// Add to global
global.ResizeObserver = ResizeObserverMock;

describe('Milestones Component', () => {
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

  test('renders without crashing', () => {
    const { container } = render(
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
    
    // Verify the div container is rendered
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild?.nodeName).toBe('DIV');
  });

  test('applies the correct props to the component', () => {
    const { container } = render(
      <Milestones
        data={vikingsData}
        aggregateBy="year"
        mapping={{
          timestamp: 'year',
          text: 'title',
        }}
        optimize={true}
        autoResize={true}
        parseTime="%Y"
      />
    );
    
    // We can't directly test d3-milestones configuration but we can verify 
    // that our React component rendered successfully
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild?.nodeName).toBe('DIV');
  });

  test('calls renderCallback after rendering', async () => {
    // Create a mock function for renderCallback
    const mockRenderCallback = jest.fn();

    // Render component with the mock callback
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

    // Wait for all effects to complete
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    // Check if the callback was called
    expect(mockRenderCallback).toHaveBeenCalled();
  });

  test('renders with ordinal scale', () => {
    const ordinalData = [
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
});