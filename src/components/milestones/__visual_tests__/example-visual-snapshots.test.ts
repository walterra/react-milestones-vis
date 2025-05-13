import { renderExampleToImage } from './example-html-renderer';

// Common settings for image snapshots - using the same settings as in visual-snapshots.test.tsx
const snapshotSettings = {
  customSnapshotsDir: `${process.cwd()}/src/components/milestones/__visual_tests__/__image_snapshots__`,
  customDiffDir: `${process.cwd()}/src/components/milestones/__visual_tests__/__image_snapshots__/__diff_output__`,
  failureThreshold: 0.01,
  failureThresholdType: 'percent' as const,
};

// Standard dimensions for consistent snapshots
const fixedWidth = 1000;
const fixedHeight = 600;

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

  // Use a longer timeout for rendering (5 seconds)
  jest.setTimeout(10000);

  test('captures visual snapshot of basic milestones example', async () => {
    const imageBuffer = await renderExampleToImage('milestones.html', fixedWidth, fixedHeight);
    expect(imageBuffer).toMatchImageSnapshot({
      ...snapshotSettings,
      customSnapshotIdentifier: 'example-milestones',
    });
  });

  test('captures visual snapshot of milestones events example', async () => {
    const imageBuffer = await renderExampleToImage('milestones-events.html', fixedWidth, fixedHeight);
    expect(imageBuffer).toMatchImageSnapshot({
      ...snapshotSettings,
      customSnapshotIdentifier: 'example-milestones-events',
    });
  });

  test('captures visual snapshot of vikings example', async () => {
    const imageBuffer = await renderExampleToImage('vikings.html', fixedWidth, fixedHeight);
    expect(imageBuffer).toMatchImageSnapshot({
      ...snapshotSettings,
      customSnapshotIdentifier: 'example-vikings',
    });
  });

  test('captures visual snapshot of OS category labels example', async () => {
    const imageBuffer = await renderExampleToImage('os-category-labels.html', fixedWidth, fixedHeight);
    expect(imageBuffer).toMatchImageSnapshot({
      ...snapshotSettings,
      customSnapshotIdentifier: 'example-os-category-labels',
    });
  });

  test('captures visual snapshot of COVID-19 example', async () => {
    const imageBuffer = await renderExampleToImage('covid19.html', fixedWidth, fixedHeight);
    expect(imageBuffer).toMatchImageSnapshot({
      ...snapshotSettings,
      customSnapshotIdentifier: 'example-covid19',
    });
  });

  test('captures visual snapshot of Ultima series example', async () => {
    const imageBuffer = await renderExampleToImage('ultima-series.html', fixedWidth, fixedHeight);
    expect(imageBuffer).toMatchImageSnapshot({
      ...snapshotSettings,
      customSnapshotIdentifier: 'example-ultima-series',
    });
  });

  test('captures visual snapshot of custom styles example', async () => {
    const imageBuffer = await renderExampleToImage('styles.html', fixedWidth, fixedHeight);
    expect(imageBuffer).toMatchImageSnapshot({
      ...snapshotSettings,
      customSnapshotIdentifier: 'example-styles',
    });
  });
});