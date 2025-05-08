import * as fs from 'fs';
import * as path from 'path';
import { renderHtmlToImage } from './html2img-service';

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
 * Renders an HTML element to a PNG image buffer for snapshot testing
 */
export async function renderElementToSnapshot(
  element: HTMLElement, 
  width: number, 
  height: number
): Promise<Buffer> {
  // Get the HTML content of the element
  const elementHTML = element.outerHTML;
  
  // Combine d3-milestones CSS with additional styles
  const combinedCSS = d3MilestonesCSS + ADDITIONAL_STYLES;
  
  // Create a full HTML document wrapping the element HTML
  const fullHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body>
        ${elementHTML}
      </body>
    </html>
  `;
  
  // Use the HTML2IMG service to render the HTML to an image buffer
  return renderHtmlToImage(fullHtml, width, height, 'png', combinedCSS);
}