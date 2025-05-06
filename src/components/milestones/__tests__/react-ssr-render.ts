import * as fs from 'fs';
import * as path from 'path';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { renderHtmlToImage } from './html2img-service';
import { MilestonesOptions } from '../types';

// Path to the built component
const REACT_MILESTONES_PATH = path.resolve(process.cwd(), 'build/index.js');

// Import the built component
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Milestones } = require(REACT_MILESTONES_PATH);

// Get the d3-milestones CSS directly from node_modules
const D3_MILESTONES_CSS_PATH = path.resolve(
  process.cwd(),
  'node_modules/d3-milestones/build/d3-milestones.css'
);

// Read CSS file once at module load time
let d3MilestonesCSS = '';
try {
  d3MilestonesCSS = fs.readFileSync(D3_MILESTONES_CSS_PATH, 'utf8');
} catch (error) {
  console.warn('Could not read d3-milestones CSS file:', error);
}

// Additional custom styles for proper rendering
const ADDITIONAL_STYLES = `
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  .milestones {
    overflow: visible !important;
  }
`;

/**
 * Creates a self-contained HTML file with server-rendered React Milestones component
 * and the necessary scripts to hydrate it in the browser
 */
export function createServerRenderedMilestonesHtml(
  props: MilestonesOptions & { width?: number; height?: number }
): string {
  // Combine d3-milestones CSS with additional styles
  const combinedCSS = d3MilestonesCSS + ADDITIONAL_STYLES;
  
  // Extract width and height or use defaults
  const width = props.width || 600;
  const height = props.height || 200;
  
  // Create a new props object without width and height 
  // since they're not actual MilestonesOptions properties
  const { width: _, height: __, ...milestonesProps } = props;
  
  // Create a React element with the Milestones component
  const element = React.createElement(Milestones, milestonesProps);
  
  // Server-side render the React component to HTML
  const html = ReactDOMServer.renderToString(element);
  
  // Create a full HTML document with the server-rendered component
  // and the necessary scripts to hydrate it
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>${combinedCSS}</style>
      </head>
      <body>
        <div id="root" style="width: ${width}px; height: ${height}px;">
          ${html}
        </div>
        
        <!-- Core dependencies -->
        <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
        <script src="https://d3js.org/d3.v5.min.js"></script>
        <script src="https://unpkg.com/d3-milestones@1.5.0/build/d3-milestones.min.js"></script>
        
        <!-- Hydration is not strictly necessary for the HTML2IMG service since it just captures the initial render -->
        <!-- But including basic initialization to ensure proper styling is applied -->
        <script>
          // Initialize d3-milestones directly to ensure proper styling
          document.addEventListener('DOMContentLoaded', function() {
            // Get the container element - this is just to ensure proper styling is applied
            const container = document.querySelector('.milestones');
            if (container) {
              const props = ${JSON.stringify(milestonesProps, null, 2)};
              
              // Apply any custom CSS variables if provided
              if (props.color) {
                document.documentElement.style.setProperty('--d3-milestones-color', props.color);
              }
              if (props.backgroundColor) {
                document.documentElement.style.setProperty('--d3-milestones-background-color', props.backgroundColor);
              }
              if (props.labelBgColor) {
                document.documentElement.style.setProperty('--d3-milestones-label-bg-color', props.labelBgColor);
              }
              if (props.labelTextColor) {
                document.documentElement.style.setProperty('--d3-milestones-label-text-color', props.labelTextColor);
              }
            }
          });
        </script>
      </body>
    </html>
  `;
}

/**
 * Renders a React Milestones component to an image using server-side rendering
 * and the HTML2IMG service
 */
export async function renderReactMilestonesToImage(
  props: MilestonesOptions & { width?: number; height?: number },
  format: 'png' | 'jpeg' = 'png'
): Promise<Buffer> {
  // Extract width and height or use defaults
  const width = props.width || 600;
  const height = props.height || 200;
  
  // Generate the server-rendered HTML
  const html = createServerRenderedMilestonesHtml(props);
  
  // Render the HTML to an image using the HTML2IMG service
  return renderHtmlToImage(html, width, height, format);
}