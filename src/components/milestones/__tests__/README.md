# Visual Snapshot Testing

This directory contains visual snapshot tests for the Milestones component using jest-image-snapshot.

## How it works

The tests now use two approaches for visual testing:

### 1. Self-contained HTML + JavaScript approach (New)

This approach bypasses jsdom limitations entirely:

1. Tests generate a complete HTML document with embedded d3-milestones JavaScript and CSS
2. The HTML includes the full configuration for the Milestones visualization
3. This HTML is sent directly to the HTML2IMG rendering service
4. The service executes the JavaScript in a real browser environment, which properly handles the layout algorithm
5. The rendered PNG is compared to baseline images

### 2. React component rendering (Legacy)

The original approach, which has limitations with the layout algorithm in jsdom:

1. The tests render the Milestones component with React
2. The component's HTML is captured and sent to the HTML2IMG rendering service
3. The service renders the HTML to a PNG image buffer with CSS styling
4. Jest-image-snapshot compares the PNG buffer to a baseline image

## Setup Requirements

### Environment Variables

The image rendering service requires the following environment variables in a `.env` file:

```
HTML2IMG_RENDER_URL=http://your-render-server-url/render
HTML2IMG_API_KEY=your-api-key-here
```

The `HTML2IMG_RENDER_URL` should point to a running instance of the [node-html2img-render-server](https://github.com/walterra/node-html2img-render-server).

## Running Visual Tests

To run the visual tests specifically:

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
- `html-snapshot.ts` - Utility for rendering React components' HTML elements to image buffers (legacy approach)
- `d3-milestones-html.ts` - Utility for generating self-contained HTML with embedded d3-milestones (new approach)
- `visual-snapshots.test.tsx` - Visual snapshot tests for Milestones components

## CSS for Rendering

The visual tests automatically include the CSS from `node_modules/d3-milestones/build/d3-milestones.css` when rendering snapshots, ensuring accurate visual representation of the components.

## Why the new approach?

The d3-milestones layout algorithm doesn't work properly in jsdom because it relies on browser-specific DOM APIs for accurate layout calculations. The self-contained HTML approach solves this problem by:

1. Bypassing jsdom completely
2. Running the d3-milestones library directly in a real browser environment
3. Allowing the layout algorithm to work correctly
4. Producing consistent visual snapshots regardless of test environment

This approach enables accurate snapshot testing of complex visualizations with advanced layout algorithms, even in a headless test environment.

## Notes

- Tests can run against any React version since we're no longer dependent on React rendering for visual tests
- A small failure threshold (1%) is allowed to account for minor rendering differences
- Visual tests are completely separate from regular unit tests