import * as React from 'react';
import { render } from '@testing-library/react';
import { Milestones } from '../milestones';

const event = {
  year: 2024,
  title: 'Custom milestone',
  customId: 'custom-milestone',
  customBulletStyle: {
    'background-color': 'rgb(255, 0, 0)',
    'border-color': 'rgb(0, 0, 0)',
  },
};

const baseMapping = {
  timestamp: 'year',
  text: 'title',
};

describe('Milestones Component - Mapping', () => {
  test('maps a custom ID', () => {
    const { container } = render(
      <Milestones
        data={[event]}
        mapping={{ ...baseMapping, id: 'customId' }}
        parseTime="%Y"
      />
    );

    expect(container.querySelector('#custom-milestone')).toHaveTextContent(
      'Custom milestone'
    );
  });

  test('maps custom category styles', () => {
    const data = [
      {
        name: 'Releases',
        events: [event],
        customCategoryStyle: {
          color: 'rgb(0, 0, 255)',
          'font-weight': '700',
        },
      },
    ];
    const { container } = render(
      <Milestones
        data={data}
        mapping={{
          ...baseMapping,
          category: 'name',
          entries: 'events',
          categoryStyle: 'customCategoryStyle',
        }}
        parseTime="%Y"
      />
    );

    const category = container.querySelector<HTMLElement>(
      '.milestones__category_label'
    );
    expect(category).toHaveStyle({ color: 'rgb(0, 0, 255)', fontWeight: '700' });
  });

  test('maps custom bullet styles', () => {
    const { container } = render(
      <Milestones
        data={[event]}
        mapping={{ ...baseMapping, bulletStyle: 'customBulletStyle' }}
        parseTime="%Y"
      />
    );

    const bullet = container.querySelector<HTMLElement>(
      '.milestones__group__bullet'
    );
    expect(bullet).toHaveStyle({
      backgroundColor: 'rgb(255, 0, 0)',
      borderColor: 'rgb(0, 0, 0)',
    });
  });

  test('maps custom IDs, category styles, and bullet styles together', () => {
    const data = [
      {
        name: 'Releases',
        events: [event],
        customCategoryStyle: { color: 'rgb(0, 128, 0)' },
      },
    ];
    const { container } = render(
      <Milestones
        data={data}
        mapping={{
          ...baseMapping,
          category: 'name',
          entries: 'events',
          id: 'customId',
          categoryStyle: 'customCategoryStyle',
          bulletStyle: 'customBulletStyle',
        }}
        parseTime="%Y"
      />
    );

    expect(container.querySelector('#custom-milestone')).toBeInTheDocument();
    expect(container.querySelector('.milestones__category_label')).toHaveStyle({
      color: 'rgb(0, 128, 0)',
    });
    expect(container.querySelector('.milestones__group__bullet')).toHaveStyle({
      backgroundColor: 'rgb(255, 0, 0)',
    });
  });
});
