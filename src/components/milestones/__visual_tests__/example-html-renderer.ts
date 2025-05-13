import * as fs from 'fs';
import * as path from 'path';
import { renderHtmlToImage } from './html2img-service';

/**
 * Loads file content from the examples directory
 */
export function loadFile(relativePath: string): string {
  const filePath = path.resolve(process.cwd(), 'examples', relativePath);

  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error(`Error loading file ${relativePath}:`, error);
    throw error;
  }
}

/**
 * Loads example HTML file content
 */
export function loadExampleHtml(exampleFileName: string): string {
  return loadFile(exampleFileName);
}

/**
 * Loads CSS and JS files needed for examples
 */
export function loadCommonResources(): { css: string; javascript: string } {
  // Load the common CSS files
  const styles = loadFile('common/styles.css');
  // const d3MilestonesStyles = loadFile('common/d3-milestones.css');

  // Load the JavaScript file
  const exampleBoilerplate = loadFile('common/example_boilerplate.js');

  return {
    css: styles,
    javascript: exampleBoilerplate,
  };
}

/**
 * Renders only the milestones container from an example HTML file
 * to an image using the HTML2IMG service with clipSelector
 *
 * @param exampleFileName The filename in the examples directory (e.g., 'milestones.html')
 * @param width The width of the viewport for rendering
 * @param height The height of the viewport for rendering
 * @param format The output format (png or jpeg)
 * @returns A Buffer containing the image data
 */
export async function renderExampleToImage(
  example: any,
  width = 800,
  height = 600,
  format: 'png' | 'jpeg' = 'png'
): Promise<Buffer> {
  // Load the HTML content
  const html = `<div class="container">
    <h1>react-milestones-vis - ${example.name}</h1>
    <div id="clip-container">
      <div id="milestones-container"></div>
    </div>
      </div>`;

  // Load common resources (CSS and JS)
  const { css: commonCss, javascript } = loadCommonResources();

  // Additional CSS to ensure the milestones container is properly visible
  const additionalCss = `
    #milestones-container {
      visibility: visible !important;
      margin: 0 !important;
      padding: 0 !important;
    }
    
    .milestones {
      overflow: visible !important;
    }
  `;

  // Combine all CSS
  const css = commonCss + '\n' + additionalCss;

  // Combine JS
  const fullJS = `
    ${javascript}

    const data = ${JSON.stringify(example.data)};
    const options = ${JSON.stringify(example.options)};
        
    // Render the component
    initializeExample({...options, data});
    `;

  // Render the HTML to an image, clipping to just the milestones container
  // Also wait for the container to ensure it's fully rendered
  return renderHtmlToImage(
    html,
    width,
    height,
    format,
    css,
    fullJS,
    '#clip-container', // clipSelector - only capture this element
    '#milestones-container' // waitForSelector - wait for this element to be visible
  );
}
