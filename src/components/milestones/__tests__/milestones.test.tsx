import React from 'react';
import { render, screen } from '@testing-library/react';
import { Milestones } from '../milestones';

// Mocking the d3-milestones library
jest.mock('d3-milestones', () => {
  return jest.fn().mockImplementation(() => ({
    aggregateBy: jest.fn().mockReturnThis(),
    mapping: jest.fn().mockReturnThis(),
    optimize: jest.fn().mockReturnThis(),
    autoResize: jest.fn().mockReturnThis(),
    orientation: jest.fn().mockReturnThis(),
    distribution: jest.fn().mockReturnThis(),
    parseTime: jest.fn().mockReturnThis(),
    labelFormat: jest.fn().mockReturnThis(),
    urlTarget: jest.fn().mockReturnThis(),
    useLabels: jest.fn().mockReturnThis(),
    range: jest.fn().mockReturnThis(),
    onEventClick: jest.fn().mockReturnThis(),
    onEventMouseLeave: jest.fn().mockReturnThis(),
    onEventMouseOver: jest.fn().mockReturnThis(),
    renderCallback: jest.fn().mockReturnThis(),
    render: jest.fn(),
  }));
});

describe('Milestones Component', () => {
  const mockData = [
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
    render(
      <Milestones
        data={mockData}
        aggregateBy="year"
        mapping={{
          timestamp: 'year',
          text: 'title',
        }}
        parseTime="%Y"
      />
    );
    
    // Verify the div container is rendered
    const divElement = document.querySelector('div');
    expect(divElement).toBeInTheDocument();
  });
});