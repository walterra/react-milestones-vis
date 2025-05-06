// Script to test the React server-side rendering with the HTML2IMG service
const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const dotenv = require('dotenv');
const http = require('http');
const https = require('https');

// Load environment variables
dotenv.config();

// Debug environment variables
console.log('Debug - Environment variables:');
console.log('- HTML2IMG_RENDER_URL:', process.env.HTML2IMG_RENDER_URL || '(not set)');
console.log('- HTML2IMG_API_KEY present:', process.env.HTML2IMG_API_KEY ? 'Yes' : 'No');

// Service URL and API key
const HTML2IMG_RENDER_URL = process.env.HTML2IMG_RENDER_URL || 'http://localhost:3000/render';
const HTML2IMG_API_KEY = process.env.HTML2IMG_API_KEY || '';

// Path to the built component
const REACT_MILESTONES_PATH = path.resolve(process.cwd(), 'build/index.js');

// Path to d3-milestones CSS
const D3_MILESTONES_CSS_PATH = path.resolve(
  process.cwd(),
  'node_modules/d3-milestones/build/d3-milestones.css'
);

// Read CSS file
let d3MilestonesCSS = '';
try {
  console.log('Reading CSS from:', D3_MILESTONES_CSS_PATH);
  d3MilestonesCSS = fs.readFileSync(D3_MILESTONES_CSS_PATH, 'utf8');
} catch (error) {
  console.warn('Could not read d3-milestones CSS file:', error);
}

// Import the built component
console.log('Importing React component from:', REACT_MILESTONES_PATH);
const { Milestones } = require(REACT_MILESTONES_PATH);

// Test data
const timelineData = [
  { year: '2010', title: 'Start exploring' },
  { year: '2012', title: 'First milestone reached' },
  { year: '2015', title: 'Major breakthrough' },
  { year: '2018', title: 'Goal achieved' },
  { year: '2020', title: 'New horizon' }
];

// Additional styles
const additionalStyles = `
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
 */
function createServerRenderedHtml(props) {
  // Combine styles
  const combinedCSS = d3MilestonesCSS + additionalStyles;
  
  // Extract width and height
  const width = props.width || 600;
  const height = props.height || 200;
  
  // Create a new props object without width and height
  const { width: _, height: __, ...milestonesProps } = props;
  
  // Create a React element
  const element = React.createElement(Milestones, milestonesProps);
  
  // Server-side render the component
  const html = ReactDOMServer.renderToString(element);
  
  // Create a full HTML document
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
        
        <!-- Basic initialization for proper rendering -->
        <script>
          document.addEventListener('DOMContentLoaded', function() {
            const container = document.querySelector('.milestones');
            if (container) {
              const props = ${JSON.stringify(milestonesProps, null, 2)};
              
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
            }
          });
        </script>
      </body>
    </html>
  `;
}

/**
 * Renders HTML to an image using the HTML2IMG service
 */
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

async function testReactSSR() {
  try {
    // Test props
    const testProps = {
      data: timelineData,
      aggregateBy: "year",
      mapping: {
        timestamp: 'year',
        text: 'title',
      },
      parseTime: "%Y",
      width: 600,
      height: 200,
      color: "#2196F3", // Add some custom styling
    };
    
    // Generate HTML with server-side rendered React component
    console.log('Generating server-rendered HTML...');
    const html = createServerRenderedHtml(testProps);
    
    // Write HTML to a file for debugging
    const htmlPath = path.resolve(__dirname, '../test-react-ssr.html');
    fs.writeFileSync(htmlPath, html);
    console.log(`HTML saved to: ${htmlPath}`);
    
    // Render the HTML to an image
    console.log('Rendering HTML to image...');
    const imageBuffer = await renderHtmlToImage(html, testProps.width, testProps.height, 'png');
    
    // Save the result to a file
    const outputPath = path.resolve(__dirname, '../test-react-ssr.png');
    fs.writeFileSync(outputPath, imageBuffer);
    
    console.log(`Test successful! Image saved to: ${outputPath}`);
  } catch (error) {
    console.error('Test failed:', error);
  }
}

// Execute the test
console.log('Starting React SSR test...');
testReactSSR();