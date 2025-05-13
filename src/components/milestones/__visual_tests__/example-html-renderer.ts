import * as fs from 'fs';
import * as path from 'path';
import { renderHtmlToImage } from './html2img-service';

/**
 * Loads example HTML file content
 */
export function loadExampleHtml(exampleFileName: string): string {
  const examplePath = path.resolve(process.cwd(), 'examples', exampleFileName);

  try {
    return fs.readFileSync(examplePath, 'utf8');
  } catch (error) {
    console.error(`Error loading example file ${exampleFileName}:`, error);
    throw error;
  }
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
  exampleFileName: string,
  width = 800,
  height = 600,
  format: 'png' | 'jpeg' = 'png'
): Promise<Buffer> {
  // Load the HTML content
  const html = loadExampleHtml(exampleFileName);

  // CSS to ensure the milestones container is visible
  const css = `
    #milestones-container {
      visibility: visible !important;
      margin: 0 !important;
      padding: 0 !important;
    }
    
    .milestones {
      overflow: visible !important;
    }
  `;

  // Render the HTML to an image, clipping to just the milestones container
  // Also wait for the container to ensure it's fully rendered
  return renderHtmlToImage(
    html,
    width,
    height,
    format,
    css,
    '#clip-container', // clipSelector - only capture this element
    '#milestones-container' // waitForSelector - wait for this element to be visible
  );
}
