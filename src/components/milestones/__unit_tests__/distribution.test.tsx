import * as React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Milestones } from '../milestones';
import {
  isDistribution,
  isDistributionFunction,
  isDistributionObject,
} from '../types';

interface DistributionEvent {
  timestamp: string;
  text: string;
  lane: string;
  amount: number;
}

const data: DistributionEvent[] = [
  { timestamp: '2024-01-01', text: 'Income', lane: 'top', amount: 100 },
  { timestamp: '2024-02-01', text: 'Expense', lane: 'bottom', amount: -50 },
];

const mapping = {
  timestamp: 'timestamp',
  text: 'text',
};

describe('Milestones distribution options', () => {
  test('validates distribution objects and functions', () => {
    const distributionFunction = () => true;

    expect(
      isDistributionObject({ field: 'lane', top: 'top', bottom: ['bottom'] })
    ).toBe(true);
    expect(isDistributionFunction(distributionFunction)).toBe(true);
    expect(isDistribution(distributionFunction)).toBe(true);
  });

  test.each([
    null,
    [],
    {},
    { field: '', top: 'top', bottom: 'bottom' },
    { field: 'lane', top: [], bottom: 'bottom' },
    { field: 'lane', top: { invalid: true }, bottom: 'bottom' },
    'sideways',
  ])('rejects invalid distribution value %#', (distribution) => {
    expect(isDistribution(distribution)).toBe(false);
  });

  test('renders a declarative distribution', async () => {
    const { container } = render(
      <Milestones
        data={data}
        mapping={mapping}
        distribution={{ field: 'lane', top: 'top', bottom: 'bottom' }}
      />
    );

    await waitFor(() => {
      expect(
        container.querySelector('.milestones__group__label-above-horizontal')
      ).toHaveTextContent('Income');
      expect(
        container.querySelector('.milestones__group__label-below-horizontal')
      ).toHaveTextContent('Expense');
    });
  });

  test('renders a custom distribution function', async () => {
    const { container } = render(
      <Milestones<DistributionEvent>
        data={data}
        mapping={mapping}
        distribution={(group) => group.values[0].amount > 0}
      />
    );

    await waitFor(() => {
      expect(
        container.querySelector('.milestones__group__label-above-horizontal')
      ).toHaveTextContent('Income');
      expect(
        container.querySelector('.milestones__group__label-below-horizontal')
      ).toHaveTextContent('Expense');
    });
  });
});
