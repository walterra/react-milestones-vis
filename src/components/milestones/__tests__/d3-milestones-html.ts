import * as fs from 'fs';
import * as path from 'path';
import { renderHtmlToImage } from './html2img-service';
import { MilestonesOptions } from '../types';

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
 * Creates a self-contained HTML file with embedded d3-milestones
 * JavaScript and required props for direct rendering in the browser
 */
export function createSelfContainedMilestonesHtml(
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
  
  // Create a full HTML document with embedded d3-milestones
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>${combinedCSS}</style>
        <script src="https://d3js.org/d3.v5.min.js"></script>
        <script src="https://unpkg.com/d3-milestones@1.5.0/build/d3-milestones.min.js"></script>
      </head>
      <body>
        <div id="visualization" style="width: ${width}px; height: ${height}px;"></div>
        <script>
          // Wait for document to be fully loaded
          document.addEventListener('DOMContentLoaded', function() {
            // Get the props for the visualization
            const props = ${JSON.stringify(milestonesProps, null, 2)};
            const container = document.getElementById('visualization');
            
            // Initialize d3-milestones
            const vis = milestones(container);
            
            // Configure all properties
            if (props.aggregateBy) vis.aggregateBy(props.aggregateBy);
            if (props.mapping) vis.mapping(props.mapping);
            if (props.optimize !== undefined) vis.optimize(props.optimize);
            if (props.autoResize !== undefined) vis.autoResize(props.autoResize);
            if (props.orientation) vis.orientation(props.orientation);
            if (props.distribution) vis.distribution(props.distribution);
            if (props.scaleType) vis.scaleType(props.scaleType);
            if (props.parseTime) vis.parseTime(props.parseTime);
            if (props.labelFormat) vis.labelFormat(props.labelFormat);
            if (props.urlTarget) vis.urlTarget(props.urlTarget);
            if (props.useLabels !== undefined) vis.useLabels(props.useLabels);
            if (props.range) vis.range(props.range);
            if (props.onEventClick) vis.onEventClick(props.onEventClick);
            if (props.onEventMouseLeave) vis.onEventMouseLeave(props.onEventMouseLeave);
            if (props.onEventMouseOver) vis.onEventMouseOver(props.onEventMouseOver);
            if (props.renderCallback) vis.renderCallback(props.renderCallback);
            
            // Apply custom styling if provided
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
            
            // Render the visualization with the data
            vis.render(props.data);
          });
        </script>
      </body>
    </html>
  `;
}

/**
 * Renders a d3-milestones visualization directly to an image 
 * using the self-contained HTML approach
 */
export async function renderMilestonesToImage(
  props: MilestonesOptions & { width?: number; height?: number },
  format: 'png' | 'jpeg' = 'png'
): Promise<Buffer> {
  // Extract width and height or use defaults
  const width = props.width || 600;
  const height = props.height || 200;
  
  // Generate the self-contained HTML
  const html = createSelfContainedMilestonesHtml(props);
  
  // Render the HTML to an image using the HTML2IMG service
  return renderHtmlToImage(html, width, height, format);
}