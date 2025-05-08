import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get directory name equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create examples directory if it doesn't exist
const examplesDir = path.join(__dirname, '../examples');
if (!fs.existsSync(examplesDir)) {
  fs.mkdirSync(examplesDir);
}

// Load example data files
const loadJsonFile = (filename) => {
  const filePath = path.join(
    __dirname,
    '../node_modules/d3-milestones/src/stories/assets',
    filename
  );
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

// Try to load all the example data files
const examples = [
  {
    name: 'milestones',
    data: loadJsonFile('milestones.json'),
    options: {
      optimize: true,
      aggregateBy: 'day',
      mapping: {
        timestamp: 'timestamp',
        text: 'detail',
        url: 'giturl',
      },
      urlTarget: '_blank',
    },
  },
  {
    name: 'milestones-events',
    data: loadJsonFile('milestones-events.json'),
    options: {
      optimize: true,
      aggregateBy: 'day',
      mapping: {
        timestamp: 'timestamp',
        text: 'detail',
      },
    },
  },
  {
    name: 'vikings',
    data: loadJsonFile('vikings.json'),
    options: {
      aggregateBy: 'year',
      mapping: {
        timestamp: 'year',
        text: 'title',
      },
      optimize: true,
      autoResize: true,
      parseTime: '%Y',
    },
  },
  {
    name: 'os-category-labels',
    data: loadJsonFile('os-category-labels.json'),
    options: {
      optimize: true,
      aggregateBy: 'year',
      parseTime: '%Y',
      mapping: {
        category: 'system',
        entries: 'versions',
        timestamp: 'year',
        text: 'title',
      },
    },
  },
  {
    name: 'covid19',
    data: loadJsonFile('covid19.json'),
    options: {
      optimize: true,
      aggregateBy: 'day',
      parseTime: '%Y-%m-%d',
      mapping: {
        timestamp: 'date',
        text: 'title',
      },
    },
  },
  {
    name: 'ultima-series',
    data: loadJsonFile('ultima-series.json'),
    options: {
      aggregateBy: 'year',
      optimize: true,
      parseTime: '%Y',
      mapping: {
        timestamp: 'year',
        text: 'title',
      },
    },
  },
  {
    name: 'styles',
    data: loadJsonFile('styles.json'),
    options: {
      aggregateBy: 'year',
      optimize: true,
      parseTime: '%Y',
      mapping: {
        timestamp: 'year',
        text: 'text',
      },
    },
  },
];

// Load d3-milestones CSS
const cssPath = path.join(
  __dirname,
  '../node_modules/d3-milestones/build/d3-milestones.css'
);
const milestonesCss = fs.readFileSync(cssPath, 'utf8');

// Load react-milestones-vis iife example script
const reactMilestonesVisExamplePath = path.join(
  __dirname,
  '../build/example_boilerplate.js'
);

// Check if the iife build exists
if (!fs.existsSync(reactMilestonesVisExamplePath)) {
  console.error(
    'Error: iife build not found. Please run "yarn build:example-rollup" first to generate the UMD bundle.'
  );
  process.exit(1);
}

const reactMilestonesVisExampleScript = fs.readFileSync(
  reactMilestonesVisExamplePath,
  'utf8'
);

// We're now using the pre-built iife bundle from the build directory
// This is important because we want to run visual regression tests against
// the actual built package, not a development version
console.log('Using pre-built iife bundle for examples...');

// Generate examples using the pre-built iife bundle
async function generateExamples() {
  try {
    // We're using the pre-built iife bundle loaded earlier
    console.log('Generating examples with the pre-built iife bundle...');

    // Create index.html with links to all examples
    let indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>react-milestones-vis examples</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
    }
    h1 {
      margin-bottom: 30px;
    }
    ul {
      padding-left: 20px;
    }
    li {
      margin-bottom: 10px;
    }
    a {
      color: #0066cc;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>react-milestones-vis examples</h1>
    <ul>
${examples
  .map(
    (example) =>
      `      <li><a href="${example.name}.html">${example.name}</a></li>`
  )
  .join('\n')}
    </ul>
  </div>
</body>
</html>`;

    fs.writeFileSync(path.join(examplesDir, 'index.html'), indexHtml);
    console.log(`Generated ${path.join(examplesDir, 'index.html')}`);

    // Generate each example
    examples.forEach((example) => {
      const { name, data, options } = example;

      // Create an HTML template
      const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>react-milestones-vis - ${name}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 1000px;
      margin: 0 auto;
    }
    h1 {
      margin-bottom: 20px;
    }
    .example-links {
      margin-bottom: 20px;
    }
    .example-links a {
      color: #0066cc;
      text-decoration: none;
      margin-right: 15px;
    }
    .example-links a:hover {
      text-decoration: underline;
    }
    #milestones-container {
      width: 100%;
      height: 400px;
      margin-bottom: 40px;
    }
    pre {
      background: #f5f5f5;
      padding: 15px;
      border-radius: 4px;
      overflow: auto;
    }

    ${milestonesCss}
  </style>
</head>
<body>
  <div class="container">
    <h1>react-milestones-vis - ${name}</h1>
    <div class="example-links">
      <a href="index.html">← Back to examples</a>
    </div>
    <div id="milestones-container"></div>
    
    <h2>Configuration</h2>
    <pre id="config"></pre>
    
    <h2>Data</h2>
    <pre id="data"></pre>
  </div>

  <!-- Load dependencies -->
  <script>
    ${reactMilestonesVisExampleScript}
  </script>
  
  <!-- Render the component -->
  <script>
    const data = ${JSON.stringify(data)};
    const options = ${JSON.stringify(options)};
    
    // Display the configuration and data
    document.getElementById('config').textContent = JSON.stringify(options, null, 2);
    document.getElementById('data').textContent = JSON.stringify(data, null, 2);
    
    // Render the component
    initializeExample({...options, data});
  </script>
</body>
</html>`;

      // Write the HTML file
      const filePath = path.join(examplesDir, `${name}.html`);
      fs.writeFileSync(filePath, html);
      console.log(`Generated ${filePath}`);
    });

    console.log(`\nExamples generated in ${examplesDir}`);
  } catch (error) {
    console.error('Error generating examples:', error);
    process.exit(1);
  }
}

// Execute the asynchronous function
generateExamples();
