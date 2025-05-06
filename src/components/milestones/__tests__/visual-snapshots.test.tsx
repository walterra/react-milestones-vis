import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Milestones } from '../milestones';
import { renderElementToSnapshot } from './html-snapshot';
import { timelineData, ordinalData, testForReact18 } from './test-utils';

// Run visual snapshot tests only when specifically selected
describe('Milestones Component - Visual Snapshots', () => {
  /**
   * These visual snapshot tests require a running HTML2IMG rendering service.
   * They are not run by default with the regular test command.
   * 
   * To run these tests:
   * 1. Make sure the HTML2IMG_RENDER_URL and HTML2IMG_API_KEY are configured in .env
   * 2. Run `yarn test:visual` to execute the tests
   * 3. Run `yarn test:visual:update` to update the snapshots
   */

  // Skip snapshot tests in React 16 and 17 as they may have different rendering
  testForReact18('captures visual snapshot of timeline component', async () => {
    // Use fixed dimensions to ensure consistent snapshots
    const fixedWidth = 600;
    const fixedHeight = 200;
    
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
    
    // Render HTML element directly to image buffer for snapshot testing
    const imageBuffer = await renderElementToSnapshot(milestonesElement as HTMLElement, fixedWidth, fixedHeight);
      
    // Expect the snapshot to match
    expect(imageBuffer).toMatchImageSnapshot({
      customSnapshotsDir: `${process.cwd()}/src/components/milestones/__image_snapshots__`,
      customDiffDir: `${process.cwd()}/src/components/milestones/__image_snapshots__/__diff_output__`,
      failureThreshold: 0.01,
      failureThresholdType: 'percent'
    });
  });
  
  testForReact18('captures visual snapshot of ordinal scale component', async () => {
    // Use fixed dimensions for consistent snapshots
    const fixedWidth = 500;
    const fixedHeight = 150;
    
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
    
    // Render HTML element directly to image buffer for snapshot testing
    const imageBuffer = await renderElementToSnapshot(milestonesElement as HTMLElement, fixedWidth, fixedHeight);
      
    // Expect the snapshot to match
    expect(imageBuffer).toMatchImageSnapshot({
      customSnapshotsDir: `${process.cwd()}/src/components/milestones/__image_snapshots__`,
      customDiffDir: `${process.cwd()}/src/components/milestones/__image_snapshots__/__diff_output__`,
      failureThreshold: 0.01,
      failureThresholdType: 'percent'
    });
  });

  testForReact18('captures visual snapshot with custom styling', async () => {
    // Use fixed dimensions for consistent snapshots
    const fixedWidth = 600;
    const fixedHeight = 200;
    
    // Render with custom colors and styling
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
          color="#2196F3"
          backgroundColor="#f5f5f5"
          labelBgColor="#e0e0e0"
          labelTextColor="#333333"
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
    
    // Render HTML element directly to image buffer for snapshot testing
    const imageBuffer = await renderElementToSnapshot(milestonesElement as HTMLElement, fixedWidth, fixedHeight);
      
    // Expect the snapshot to match
    expect(imageBuffer).toMatchImageSnapshot({
      customSnapshotsDir: `${process.cwd()}/src/components/milestones/__image_snapshots__`,
      customDiffDir: `${process.cwd()}/src/components/milestones/__image_snapshots__/__diff_output__`,
      failureThreshold: 0.01,
      failureThresholdType: 'percent'
    });
  });
});