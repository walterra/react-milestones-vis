# How to use the built component with a render server

This project supports rendering the React Milestones component to static HTML that can be passed to an HTML-to-image render server. Here's how to use it:

## Setup

1. Build the package:
   ```
   yarn build
   ```

2. Import the server-side rendering utility:
   ```javascript
   const { renderReactMilestonesToImage } = require('./src/components/milestones/__tests__/react-ssr-render');
   ```

3. Use it to render components to images:
   ```javascript
   // Configure your component props
   const props = {
     data: myData,
     aggregateBy: 'year',
     mapping: {
       timestamp: 'year',
       text: 'title',
     },
     parseTime: '%Y',
     width: 600,
     height: 200
   };

   // Render to an image buffer
   const imageBuffer = await renderReactMilestonesToImage(props);
   ```

## Test the SSR Implementation

A test script is included to verify the SSR functionality:

```
yarn test:react-ssr
```

This will:
1. Create HTML with the server-rendered React component
2. Save the HTML to `test-react-ssr.html` for inspection
3. Send the HTML to the configured render server
4. Save the rendered image to `test-react-ssr.png`

## Environment Configuration

Make sure to set up the render server URL and API key in a `.env` file:

```
HTML2IMG_RENDER_URL=http://your-render-server/render
HTML2IMG_API_KEY=your-api-key-if-needed
```

## Visual Regression Tests

This project includes visual regression tests that use the server-rendered React component:

```
yarn test:visual
```
