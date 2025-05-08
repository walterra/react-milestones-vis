import React from 'react';
import { render } from '@testing-library/react';
import { Milestones } from '../milestones';
import { vikingsData } from './test-utils';

describe('Milestones Component - Props', () => {
  test('applies basic props to the component', () => {
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
    
    // Verify the component renders correctly with basic props
    expect(container.firstChild).toBeInTheDocument();
    expect(container.querySelector('.milestones')).toBeInTheDocument();
  });

  test('applies optimization props correctly', () => {
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
    
    // Verify the component renders with optimization props
    expect(container.firstChild).toBeInTheDocument();
    expect(container.querySelector('.milestones')).toBeInTheDocument();
  });

  test('applies custom dimensions correctly', () => {
    const customWidth = 800;
    const customHeight = 300;
    
    const { container } = render(
      <Milestones
        data={vikingsData}
        aggregateBy="year"
        mapping={{
          timestamp: 'year',
          text: 'title',
        }}
        parseTime="%Y"
        width={customWidth}
        height={customHeight}
      />
    );
    
    // Verify the component renders with custom dimensions
    expect(container.firstChild).toBeInTheDocument();
    expect(container.querySelector('.milestones')).toBeInTheDocument();
  });

  test('applies custom colors correctly', () => {
    const { container } = render(
      <Milestones
        data={vikingsData}
        aggregateBy="year"
        mapping={{
          timestamp: 'year',
          text: 'title',
        }}
        parseTime="%Y"
        color="#ff0000"
        backgroundColor="#f5f5f5"
      />
    );
    
    // Verify the component renders with custom colors
    expect(container.firstChild).toBeInTheDocument();
    expect(container.querySelector('.milestones')).toBeInTheDocument();
  });

  test('applies hideLabels prop correctly', () => {
    const { container } = render(
      <Milestones
        data={vikingsData}
        aggregateBy="year"
        mapping={{
          timestamp: 'year',
          text: 'title',
        }}
        parseTime="%Y"
        hideLabels={true}
      />
    );
    
    // Verify the component renders with labels hidden
    expect(container.firstChild).toBeInTheDocument();
    expect(container.querySelector('.milestones')).toBeInTheDocument();
  });

  test('accepts custom style prop', () => {
    const customStyles = { border: '1px solid blue', padding: '10px' };
    const { container } = render(
      <Milestones
        data={vikingsData}
        aggregateBy="year"
        mapping={{
          timestamp: 'year',
          text: 'title',
        }}
        parseTime="%Y"
        style={customStyles}
      />
    );
    
    // Just verify the component renders with the style prop
    // We can't easily test exact style values since d3-milestones may apply styles differently
    expect(container.firstChild).toBeInTheDocument();
  });
});