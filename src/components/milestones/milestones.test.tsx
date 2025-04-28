import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Milestones } from './milestones';

const reactVersion = parseInt(React.version.split('.')[0], 10);

// Mock ResizeObserver before tests
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// Add to global
global.ResizeObserver = ResizeObserverMock;

// Helper to run tests conditionally based on React version
function testForReact18(name: string, testFn: any) {
  if (reactVersion >= 18) {
    test(name, testFn);
  } else {
    test.skip(`${name} (requires React 18)`, () => {});
  }
}

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

  testForReact18('renders without crashing with React 18 strict mode', () => {
    const { container } = render(
      <React.StrictMode>
        <Milestones
          data={vikingsData}
          aggregateBy="year"
          mapping={{
            timestamp: 'year',
            text: 'title',
          }}
          parseTime="%Y"
        />
      </React.StrictMode>
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