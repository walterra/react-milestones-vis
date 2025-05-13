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
 * Renders an example HTML file to an image using the HTML2IMG service
 * 
 * @param exampleFileName The filename in the examples directory (e.g., 'milestones.html')
 * @param width The width of the viewport for rendering
 * @param height The height of the viewport for rendering
 * @param format The output format (png or jpeg)
 * @returns A Buffer containing the image data
 */
export async function renderExampleToImage(
  exampleFileName: string,
  width: number = 800,
  height: number = 600,
  format: 'png' | 'jpeg' = 'png'
): Promise<Buffer> {
  // Load the HTML content
  const html = loadExampleHtml(exampleFileName);
  
  // Render the HTML to an image
  return renderHtmlToImage(html, width, height, format);
}