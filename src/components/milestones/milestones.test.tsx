import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Milestones } from './milestones';
import { svgToCanvas } from './__tests__/canvas-helper';

const reactVersion = parseInt(React.version.split('.')[0], 10);

// ResizeObserver is mocked in setupTests.ts

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
  
  testForReact18('captures visual snapshot of ordinal scale component', async () => {
    // Use fixed dimensions for consistent snapshots
    const fixedWidth = 500;
    const fixedHeight = 150;
    
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
      <div style={{ width: `${fixedWidth}px`, height: `${fixedHeight}px` }}>
        <Milestones
          data={ordinalData}
          scaleType="ordinal"
          mapping={{
            value: 'value',
            text: 'description',
          }}
        />
      </div>
    );
    
    // Wait for rendering to complete
    await waitFor(() => {
      expect(container.querySelector('.milestones')).toBeInTheDocument();
    });
    
    // Get the main milestones element
    const milestonesElement = container.querySelector('.milestones');
    if (!milestonesElement) {
      throw new Error('Milestones element not found');
    }
    
    // Convert HTML element to canvas and get buffer for snapshot testing
    const canvas = await svgToCanvas(milestonesElement as HTMLElement, fixedWidth, fixedHeight);
    const buffer = canvas.toBuffer('image/png');
    
    // Expect the snapshot to match
    expect(buffer).toMatchImageSnapshot({
      customSnapshotsDir: `${process.cwd()}/src/components/milestones/__image_snapshots__`,
      customDiffDir: `${process.cwd()}/src/components/milestones/__image_snapshots__/__diff_output__`,
      failureThreshold: 0.01,
      failureThresholdType: 'percent'
    });
  });
  
  // Skip snapshot tests in React 16 and 17 as they may have different rendering
  testForReact18('captures visual snapshot of component', async () => {
    // Use fixed dimensions to ensure consistent snapshots
    const fixedWidth = 600;
    const fixedHeight = 200;
    
    // Create test data
    const timelineData = [
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

    // Render the component with fixed dimensions
    const { container } = render(
      <div style={{ width: `${fixedWidth}px`, height: `${fixedHeight}px` }}>
        <Milestones
          data={timelineData}
          aggregateBy="year"
          mapping={{
            timestamp: 'year',
            text: 'title',
          }}
          parseTime="%Y"
        />
      </div>
    );
    
    // Wait for rendering to complete
    await waitFor(() => {
      expect(container.querySelector('.milestones')).toBeInTheDocument();
    });
    
    // Get the main milestones element
    const milestonesElement = container.querySelector('.milestones');
    if (!milestonesElement) {
      throw new Error('Milestones element not found');
    }
    
    // Convert HTML element to canvas and get buffer for snapshot testing
    const canvas = await svgToCanvas(milestonesElement as HTMLElement, fixedWidth, fixedHeight);
    const buffer = canvas.toBuffer('image/png');
    
    // Expect the snapshot to match
    expect(buffer).toMatchImageSnapshot({
      customSnapshotsDir: `${process.cwd()}/src/components/milestones/__image_snapshots__`,
      customDiffDir: `${process.cwd()}/src/components/milestones/__image_snapshots__/__diff_output__`,
      failureThreshold: 0.01,
      failureThresholdType: 'percent'
    });
  });
});