# Visual Snapshot Testing

This directory contains visual snapshot tests for the Milestones component using jest-image-snapshot.

## How it works

The tests now use a self-contained approach for visual testing:

### Self-contained React Component + HTML approach

This approach bypasses jsdom limitations entirely:

1. First, we create a test bundle with our actual React component (using `yarn build:test-bundle`)
2. Tests generate a complete HTML document with embedded React and our component bundle
3. The HTML includes the necessary React runtime and the full configuration for the component 
4. This HTML is sent directly to the HTML2IMG rendering service
5. The service executes the JavaScript in a real browser environment, which properly handles the layout algorithm
6. The rendered PNG is compared to baseline images

## Setup Requirements

### Environment Variables

The image rendering service requires the following environment variables in a `.env` file:

```
HTML2IMG_RENDER_URL=http://your-render-server-url/render
HTML2IMG_API_KEY=your-api-key-here
```

The `HTML2IMG_RENDER_URL` should point to a running instance of the [node-html2img-render-server](https://github.com/walterra/node-html2img-render-server).

### Building the Test Bundle

Before running visual tests, you need to build the test bundle:

```bash
yarn build:test-bundle
```

This creates a self-contained UMD bundle with our React component that can be embedded directly in HTML.

## Running Visual Tests

To run the visual tests (which automatically builds the test bundle):

```bash
# Run visual tests
yarn test:visual

# Update visual snapshots when changes are intentional
yarn test:visual:update
```

## Snapshot directories

- Baseline snapshots are stored in `__image_snapshots__`
- When a test fails, diff images are saved to `__image_snapshots__/__diff_output__`

## Key Files

- `html2img-service.ts` - Client for the HTML-to-image rendering service
- `d3-milestones-html.ts` - Utility for generating self-contained HTML with embedded component
- `create-test-bundle.js` - Script that creates a UMD bundle of our component for testing
- `test-bundle.js` - The generated bundle file (created by build:test-bundle)
- `visual-snapshots.test.tsx` - Visual snapshot tests for Milestones components

## Why this approach?

The d3-milestones layout algorithm doesn't work properly in jsdom because it relies on browser-specific DOM APIs for accurate layout calculations. Our self-contained approach solves this problem by:

1. Bypassing jsdom completely
2. Running our actual React component (not just the underlying d3-milestones library) in a real browser
3. Allowing the layout algorithm to work correctly
4. Producing consistent visual snapshots regardless of test environment
5. Testing our *actual* React component, not just the underlying d3-milestones library

This approach enables accurate snapshot testing of complex visualizations with advanced layout algorithms, even in a headless test environment, while ensuring we're testing our actual component implementation.

## Notes

- The test bundle includes the full React Milestones component, ensuring we test our actual implementation
- Tests can run against any React version since we're no longer dependent on jsdom for rendering
- A small failure threshold (1%) is allowed to account for minor rendering differences
- Visual tests are completely separate from regular unit tests