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

// Create examples/common directory if it doesn't exist
const examplesCommonDir = path.join(examplesDir, 'common');
if (!fs.existsSync(examplesCommonDir)) {
  fs.mkdirSync(examplesCommonDir);
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

// Write d3-milestones CSS to examples/common directory
const commonCssPath = path.join(examplesCommonDir, 'd3-milestones.css');
fs.writeFileSync(commonCssPath, milestonesCss);
console.log(`Generated ${commonCssPath}`);

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

// Copy the example_boilerplate.js file to examples/common directory
const commonJsPath = path.join(examplesCommonDir, 'example_boilerplate.js');
fs.copyFileSync(reactMilestonesVisExamplePath, commonJsPath);
console.log(`Copied example_boilerplate.js to ${commonJsPath}`);

// We're now using the pre-built iife bundle from the build directory
// This is important because we want to run visual regression tests against
// the actual built package, not a development version
console.log('Using pre-built iife bundle for examples...');

// Generate examples using the pre-built iife bundle
async function generateExamples() {
  try {
    // We're using the pre-built iife bundle loaded as a separate file
    console.log('Generating examples with the pre-built iife bundle...');

    // Create index.html with links to all examples
    let indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>react-milestones-vis examples</title>
  <link rel="stylesheet" href="common/styles.css">
</head>
<body>
  <div class="index-container">
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
  <link rel="stylesheet" href="common/styles.css">
  <link rel="stylesheet" href="common/d3-milestones.css">
</head>
<body>
  <div class="container">
    <h1>react-milestones-vis - ${name}</h1>
    <div class="example-links">
      <a href="index.html">← Back to examples</a>
    </div>
    <div id="clip-container">
      <div id="milestones-container"></div>
    </div>
    
    <h2>Configuration</h2>
    <pre id="config"></pre>
    
    <h2>Data</h2>
    <pre id="data"></pre>
  </div>

  <!-- Load dependencies -->
  <script src="common/example_boilerplate.js"></script>
  
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
