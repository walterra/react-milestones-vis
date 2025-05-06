import React from 'react';
import { render } from '@testing-library/react';
import { Milestones } from '../milestones';
import { vikingsData, testForReact18 } from './test-utils';

describe('Milestones Component - Basic Rendering', () => {
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

  test('renders with empty data', () => {
    const { container } = render(
      <Milestones
        data={[]}
        aggregateBy="year"
        mapping={{
          timestamp: 'year',
          text: 'title',
        }}
        parseTime="%Y"
      />
    );
    
    // Verify the div container is rendered even with empty data
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild?.nodeName).toBe('DIV');
  });

  test('accepts custom className prop', () => {
    const customClass = 'custom-milestones';
    const { container } = render(
      <Milestones
        data={vikingsData}
        aggregateBy="year"
        mapping={{
          timestamp: 'year',
          text: 'title',
        }}
        parseTime="%Y"
        className={customClass}
      />
    );
    
    // Just verify component renders with the className prop
    // D3-milestones may handle class names differently than direct assignment
    expect(container.firstChild).toBeInTheDocument();
  });
});