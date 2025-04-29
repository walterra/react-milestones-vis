# Visual Snapshot Testing

This directory contains visual snapshot tests for the Milestones component using jest-image-snapshot.

## How it works

1. The tests render the Milestones component with fixed dimensions
2. SVG output is converted to canvas using the HTML5 Canvas API
3. The canvas is then converted to a PNG buffer
4. jest-image-snapshot compares the PNG to a baseline image

## Creating new snapshots

To update the snapshots when changes are intentional, run:

```
yarn test -- -u
```

## Snapshot directories

- Baseline snapshots are stored in `__image_snapshots__`
- When a test fails, diff images are saved to `__image_snapshots__/__diff_output__`

## Notes

- Tests only run against React 18 to ensure consistent rendering
- A small failure threshold (1%) is allowed to account for minor rendering differences