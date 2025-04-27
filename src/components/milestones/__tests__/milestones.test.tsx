import React from 'react';
import { render, screen } from '@testing-library/react';
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
});