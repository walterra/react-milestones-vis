import React from 'react';
import { renderReactMilestonesToImage } from './react-ssr-render';
import { timelineData, ordinalData, testForReact18 } from './test-utils';

// Run visual snapshot tests only when specifically selected
describe('React Milestones Component - Visual Snapshots', () => {
  /**
   * These visual snapshot tests require a running HTML2IMG rendering service.
   * They use the actual built React component rather than direct d3-milestones rendering.
   * 
   * To run these tests:
   * 1. Make sure the HTML2IMG_RENDER_URL and HTML2IMG_API_KEY are configured in .env
   * 2. Run `yarn build` to build the React component
   * 3. Run `yarn test:visual` to execute the tests
   * 4. Run `yarn test:visual:update` to update the snapshots
   */

  // Common settings for image snapshots
  const snapshotSettings = {
    customSnapshotsDir: `${process.cwd()}/src/components/milestones/__image_snapshots__`,
    customDiffDir: `${process.cwd()}/src/components/milestones/__image_snapshots__/__diff_output__`,
    failureThreshold: 0.01,
    failureThresholdType: 'percent'
  };

  // This works in any environment including jsdom since it bypasses the DOM
  // but still tests the actual React component
  test('captures visual snapshot of React timeline component', async () => {
    // Use fixed dimensions to ensure consistent snapshots
    const fixedWidth = 600;
    const fixedHeight = 200;
    
    // Render the React component to an image using server-side rendering
    const imageBuffer = await renderReactMilestonesToImage({
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
  
  test('captures visual snapshot of React ordinal scale component', async () => {
    // Use fixed dimensions for consistent snapshots
    const fixedWidth = 500;
    const fixedHeight = 150;
    
    // Render the React component to an image using server-side rendering
    const imageBuffer = await renderReactMilestonesToImage({
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

  test('captures visual snapshot with custom styling using React component', async () => {
    // Use fixed dimensions for consistent snapshots
    const fixedWidth = 600;
    const fixedHeight = 200;
    
    // Render the React component to an image using server-side rendering
    const imageBuffer = await renderReactMilestonesToImage({
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
});