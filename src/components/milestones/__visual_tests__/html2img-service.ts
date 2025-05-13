import * as dotenv from 'dotenv';
import * as https from 'https';
import * as http from 'http';

// Load environment variables from .env file
dotenv.config();

const HTML2IMG_RENDER_URL = process.env.HTML2IMG_RENDER_URL || 'http://localhost:3000/render';
const HTML2IMG_API_KEY = process.env.HTML2IMG_API_KEY || '';

interface HtmlToImageOptions {
  width: number;
  height: number;
  format?: 'png' | 'jpeg';
  css?: string;
  clipSelector?: string;
  waitForSelector?: string;
}

/**
 * Renders HTML to an image using the node-html2img-render-server
 */
export async function renderHtmlToImage(
  html: string,
  width: number,
  height: number,
  format: 'png' | 'jpeg' = 'png',
  css?: string,
  clipSelector?: string,
  waitForSelector?: string
): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
      // Parse the URL to determine if we should use http or https
      const url = new URL(HTML2IMG_RENDER_URL);
      const isHttps = url.protocol === 'https:';
      const httpModule = isHttps ? https : http;
      
      // Add API key as query parameter if available
      if (HTML2IMG_API_KEY) {
        url.searchParams.append('apiKey', HTML2IMG_API_KEY);
      }
      
      // Prepare the request data
      const requestData: any = {
        html,
        viewport: {
          width,
          height
        },
        format
      };
      
      // Only include optional parameters if provided
      if (css) {
        requestData.css = css;
      }
      
      if (clipSelector) {
        requestData.clipSelector = clipSelector;
      }
      
      if (waitForSelector) {
        requestData.waitForSelector = waitForSelector;
      }
      
      const requestDataString = JSON.stringify(requestData);
      
      // Prepare request options with full path including query parameters
      const options = {
        hostname: url.hostname,
        port: url.port || (isHttps ? 443 : 80),
        path: `${url.pathname}${url.search}`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(requestDataString)
        }
      };
      
      // Make the request
      const req = httpModule.request(options, (res) => {
        const chunks: Buffer[] = [];
        
        res.on('data', (chunk) => {
          chunks.push(Buffer.from(chunk));
        });
        
        res.on('end', () => {
          if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
            const buffer = Buffer.concat(chunks as unknown as Uint8Array[]);
            resolve(buffer);
          } else {
            // Try to parse error response if available
            const responseData = Buffer.concat(chunks as unknown as Uint8Array[]).toString('utf8');
            console.error('Error response from server:', responseData);
            reject(new Error(`HTML2IMG API error: HTTP Status ${res.statusCode} - ${responseData}`));
          }
        });
      });
      
      req.on('error', (error) => {
        reject(new Error(`HTML2IMG API request error: ${error.message}`));
      });
      
      // Send the request data
      req.write(requestDataString);
      req.end();
    } catch (error) {
      reject(error instanceof Error ? error : new Error(String(error)));
    }
  });
}