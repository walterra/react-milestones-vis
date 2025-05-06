# Visual Snapshot Testing

This directory contains visual snapshot tests for the Milestones component using jest-image-snapshot.

## How it works

1. The tests render the Milestones component with fixed dimensions
2. Component HTML is captured and sent to the HTML2IMG rendering service
3. The service renders the HTML to a PNG image
4. jest-image-snapshot compares the PNG to a baseline image

## Setup Requirements

### Environment Variables

The image rendering service requires the following environment variables in a `.env` file:

```
HTML2IMG_RENDER_URL=http://your-render-server-url/render
HTML2IMG_API_KEY=your-api-key-here
```

The HTML2IMG_RENDER_URL should point to a running instance of the [node-html2img-render-server](https://github.com/walterra/node-html2img-render-server).

## Creating new snapshots

To update the snapshots when changes are intentional, run:

```
yarn test -- -u
```

Or specifically for snapshot tests:

```
yarn test -- --testNamePattern="captures visual snapshot" --updateSnapshot
```

## Snapshot directories

- Baseline snapshots are stored in `__image_snapshots__`
- When a test fails, diff images are saved to `__image_snapshots__/__diff_output__`

## Key Files

- `html2img-service.ts` - Client for the HTML-to-image rendering service
- `canvas-helper.ts` - Utility for converting HTML elements to images
- `milestones.test.tsx` - Tests for the Milestones component

## Notes

- Tests only run against React 18 to ensure consistent rendering
- A small failure threshold (1%) is allowed to account for minor rendering differences