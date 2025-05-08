import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Milestones } from '../milestones';
import { renderMilestonesToImage } from '../__tests__/d3-milestones-html';
import { timelineData, ordinalData, testForReact18 } from '../__tests__/test-utils';

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

  // Common settings for image snapshots
  const snapshotSettings = {
    customSnapshotsDir: `${process.cwd()}/src/components/milestones/__visual_tests__/__image_snapshots__`,
    customDiffDir: `${process.cwd()}/src/components/milestones/__visual_tests__/__image_snapshots__/__diff_output__`,
    failureThreshold: 0.01,
    failureThresholdType: 'percent'
  };

  // This works in any environment including jsdom since it bypasses the DOM completely
  test('captures visual snapshot of timeline component', async () => {
    // Use fixed dimensions to ensure consistent snapshots
    const fixedWidth = 600;
    const fixedHeight = 200;
    
    // Render directly to image using self-contained HTML approach
    const imageBuffer = await renderMilestonesToImage({
      data: timelineData,
      aggregateBy: "year",
      mapping: {
        timestamp: 'year',
        text: 'title',
      },
      parseTime: "%Y",
      width: fixedWidth,
      height: fixedHeight
    });
      
    // Expect the snapshot to match
    expect(imageBuffer).toMatchImageSnapshot(snapshotSettings);
  });
  
  test('captures visual snapshot of ordinal scale component', async () => {
    // Use fixed dimensions for consistent snapshots
    const fixedWidth = 500;
    const fixedHeight = 150;
    
    // Render directly to image using self-contained HTML approach
    const imageBuffer = await renderMilestonesToImage({
      data: ordinalData,
      scaleType: "ordinal",
      mapping: {
        value: 'value',
        text: 'description',
      },
      width: fixedWidth,
      height: fixedHeight
    });
      
    // Expect the snapshot to match
    expect(imageBuffer).toMatchImageSnapshot(snapshotSettings);
  });

  test('captures visual snapshot with custom styling', async () => {
    // Use fixed dimensions for consistent snapshots
    const fixedWidth = 600;
    const fixedHeight = 200;
    
    // Render directly to image using self-contained HTML approach
    const imageBuffer = await renderMilestonesToImage({
      data: timelineData,
      aggregateBy: "year",
      mapping: {
        timestamp: 'year',
        text: 'title',
      },
      parseTime: "%Y",
      color: "#2196F3",
      backgroundColor: "#f5f5f5",
      labelBgColor: "#e0e0e0",
      labelTextColor: "#333333",
      width: fixedWidth,
      height: fixedHeight
    });
      
    // Expect the snapshot to match
    expect(imageBuffer).toMatchImageSnapshot(snapshotSettings);
  });

  // Keep one example of the React component rendering for reference
  // This test will be skipped in jsdom environments
  testForReact18('renders the React component correctly in browser environment', async () => {
    const fixedWidth = 600;
    const fixedHeight = 200;
    
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
    
    // Just verify that the component rendered
    expect(container.querySelector('.milestones')).toBeInTheDocument();
  });
});