# Visual Snapshot Testing

This directory contains visual snapshot tests for the Milestones component using jest-image-snapshot.

## How it works

1. The tests render the Milestones component with fixed dimensions
2. The component's HTML is captured and sent directly to the HTML2IMG rendering service
3. The service renders the HTML to a PNG image buffer with proper CSS styling
4. jest-image-snapshot compares the PNG buffer to a baseline image

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
- `html-snapshot.ts` - Utility for rendering HTML elements directly to image buffers
- `visual-snapshots.test.tsx` - Visual snapshot tests for Milestones components

## CSS for Rendering

The visual tests automatically include the CSS from `node_modules/d3-milestones/build/d3-milestones.css` when rendering snapshots, ensuring accurate visual representation of the components.

## Notes

- Tests only run against React 18 to ensure consistent rendering
- A small failure threshold (1%) is allowed to account for minor rendering differences
- Visual tests are completely separate from regular unit tests