import { renderExampleToImage } from './example-html-renderer';
import { examples } from './example-configurations';

// Common settings for image snapshots - using the same settings as in visual-snapshots.test.tsx
const snapshotSettings = {
  customSnapshotsDir: `${process.cwd()}/src/components/milestones/__visual_tests__/__image_snapshots__`,
  customDiffDir: `${process.cwd()}/src/components/milestones/__visual_tests__/__image_snapshots__/__diff_output__`,
  failureThreshold: 0.01,
  failureThresholdType: 'percent' as const,
};

// Viewport dimensions
// This is the size of the browser window during rendering
// We make it larger than the container to ensure the container fits comfortably
const viewportWidth = 1200;
const viewportHeight = 2000;

describe('Example Files - Visual Snapshots', () => {
  /**
   * These visual snapshot tests require a running HTML2IMG rendering service.
   * They are not run by default with the regular test command.
   *
   * To run these tests:
   * 1. Make sure the HTML2IMG_RENDER_URL and HTML2IMG_API_KEY are configured in .env
   * 2. Run `yarn test:visual` to execute the tests
   * 3. Run `yarn test:visual:update` to update the snapshots
   */

  // Use a longer timeout for rendering (10 seconds)
  jest.setTimeout(10000);

  // Loop through each example and create a test for it
  examples.forEach((example) => {
    test(`captures visual snapshot of ${example.name}`, async () => {
      const imageBuffer = await renderExampleToImage(
        example,
        viewportWidth,
        viewportHeight
      );

      expect(imageBuffer).toMatchImageSnapshot({
        ...snapshotSettings,
        customSnapshotIdentifier: `example-${example.name}`,
      });
    });
  });
});
