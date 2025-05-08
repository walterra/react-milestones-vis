import * as React from 'react';
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
});
