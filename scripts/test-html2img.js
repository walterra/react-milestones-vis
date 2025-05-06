// Script to test the HTML2IMG service with a simple HTML document
const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Debug environment variables
console.log('Debug - Environment variables:');
console.log('- HTML2IMG_RENDER_URL:', process.env.HTML2IMG_RENDER_URL || '(not set)');
console.log('- HTML2IMG_API_KEY present:', process.env.HTML2IMG_API_KEY ? 'Yes' : 'No');

const HTML2IMG_RENDER_URL = process.env.HTML2IMG_RENDER_URL || 'http://localhost:3000/render';
const HTML2IMG_API_KEY = process.env.HTML2IMG_API_KEY || '';

// Simple test HTML
const simpleHtml = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <h1>Test HTML2IMG Service</h1>
    <div style="width: 400px; height: 200px; background-color: #f0f0f0; display: flex; align-items: center; justify-content: center;">
      <div style="font-size: 24px; color: #333;">Test Content</div>
    </div>
  </body>
</html>
`;

function renderHtmlToImage(html, width, height, format) {
  return new Promise((resolve, reject) => {
    try {
      // Parse the URL
      const url = new URL(HTML2IMG_RENDER_URL);
      const isHttps = url.protocol === 'https:';
      const httpModule = isHttps ? https : http;
      
      // Add API key if available
      if (HTML2IMG_API_KEY) {
        url.searchParams.append('apiKey', HTML2IMG_API_KEY);
      }
      
      console.log(`HTML2IMG service URL: ${url.toString()}`);
      
      // Prepare the request data
      const requestData = {
        html,
        viewport: {
          width,
          height
        },
        format
      };
      
      const requestDataString = JSON.stringify(requestData);
      
      // Prepare request options
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
      
      console.log('Request options:', {
        hostname: options.hostname,
        port: options.port,
        path: options.path,
        method: options.method,
      });
      
      // Make the request
      const req = httpModule.request(options, (res) => {
        const chunks = [];
        
        console.log('Response status:', res.statusCode);
        console.log('Response headers:', res.headers);
        
        res.on('data', (chunk) => {
          chunks.push(Buffer.from(chunk));
        });
        
        res.on('end', () => {
          if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
            const buffer = Buffer.concat(chunks);
            resolve(buffer);
          } else {
            const responseData = Buffer.concat(chunks).toString('utf8');
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

async function testRender() {
  try {
    // Try to render a simple test image
    console.log('Attempting to render test image...');
    const buffer = await renderHtmlToImage(simpleHtml, 400, 200, 'png');
    
    // Save the result to a file
    const outputPath = path.resolve(__dirname, '../test-output.png');
    fs.writeFileSync(outputPath, buffer);
    
    console.log(`Test successful! Image saved to: ${outputPath}`);
  } catch (error) {
    console.error('Test failed:', error);
  }
}

testRender();