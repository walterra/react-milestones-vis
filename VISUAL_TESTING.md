# Visual Testing Solution for d3-milestones

This document describes the solution implemented for visual snapshot testing of the react-milestones-vis component.

## The Problem

The d3-milestones layout algorithm doesn't work properly in jsdom because:

1. It relies on browser-specific DOM APIs for layout calculations
2. These APIs are not fully implemented or behave differently in jsdom
3. This makes it impossible to accurately test visual output using jsdom-based testing

## The Solution

We've implemented a self-contained HTML + d3-milestones solution that:

1. Uses d3-milestones directly (bypassing React) for visual testing
2. Creates a complete HTML document with embedded d3-milestones
3. Sends this HTML to a browser-based rendering service
4. Captures the resulting image for snapshot testing

### Key Components

1. **Self-contained HTML Generation:**
   - Creates a complete HTML document that includes:
     - D3 and d3-milestones libraries from CDN
     - The test configuration and props
     - Pure JavaScript implementation with the same API
   - This HTML is completely self-contained and doesn't depend on jsdom

2. **Direct D3-Milestones Usage:**
   - Instead of using React, the tests configure d3-milestones directly
   - This avoids any React-specific issues while still testing the core visualization
   - All component props are passed through to d3-milestones with the same API

3. **Browser-based Rendering:**
   - HTML is sent to an HTML2IMG service (a headless browser)
   - The service executes the JavaScript in a real browser environment
   - The layout algorithm works correctly in this environment
   - The rendered image is captured and returned for snapshot comparison

### Advantages of this Approach

1. **Focuses on Visual Correctness:**
   - Tests the visual output of d3-milestones directly
   - Ensures that the layout algorithm works correctly in a real browser
   - Visual tests complement the unit tests that verify React component behavior

2. **Bypasses jsdom Limitations:**
   - Completely avoids the layout algorithm issues in jsdom
   - Executes in a real browser environment with full DOM API support

3. **Reliable Visual Testing:**
   - Produces consistent, accurate visual snapshots
   - Makes visual regression testing reliable even for complex visualizations

4. **Clean Separation:**
   - Keeps unit tests separate from visual tests
   - Unit tests can still use jsdom for speed and simplicity
   - Visual tests use the browser-based approach for accuracy

## Setup

### HTML2IMG Rendering Service

For the visual tests to work, you need access to an HTML2IMG rendering service that can convert HTML to images. 

The tests require two environment variables to be set:
- `HTML2IMG_RENDER_URL`: The URL of the HTML2IMG rendering service
- `HTML2IMG_API_KEY`: The API key for accessing the service

You can either:
1. Create a `.env` file in the project root with these variables
2. Run the provided setup script: `node scripts/update-env.js`

### No Build Step Required

One of the advantages of this approach is that it doesn't require a build step before running visual tests. The test HTML is generated on-the-fly using the d3-milestones library directly from a CDN.

## Usage

### Running Visual Tests

```bash
# Build the test bundle and run visual tests
yarn test:visual

# Update visual snapshots when changes are intentional
yarn test:visual:update
```

### Troubleshooting Visual Tests

If you encounter issues with the visual tests:

1. **Check HTML2IMG Service Configuration:**
   - Verify that the HTML2IMG service URL and API key are correctly set in your `.env` file
   - Run `node scripts/test-html2img.js` to test the connection to the service

2. **Test Bundle Issues:**
   - Make sure the test bundle is up-to-date by running `yarn build:test-bundle`
   - Check the script output for any compilation errors

3. **Debug HTML Generation:**
   - The tests log the generated HTML to the console for debugging purposes
   - Look for any JavaScript errors or missing resources

### Adding New Visual Tests

To add new visual tests:

1. Ensure the test bundle includes any new changes by running `yarn build:test-bundle`
2. Add a new test case in `visual-snapshots.test.tsx`
3. Run `yarn test:visual` to generate new snapshots

## Future Improvements

Potential future improvements to this approach:

1. **Automatic Bundle Invalidation:**
   - Automatically rebuild the test bundle when source files change
   - Implement a file watcher to detect changes to component files

2. **Parallel Testing:**
   - Run visual tests in parallel for faster execution
   - Use worker threads to generate multiple snapshots simultaneously

3. **Visual Diff Tool:**
   - Add a web-based visual diff viewer for snapshot comparisons
   - Make it easier to review and approve visual changes

4. **Component Variations:**
   - Add more visual tests for different component configurations
   - Create a comprehensive visual test suite covering all component features