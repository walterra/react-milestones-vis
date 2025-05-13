[![npm](https://img.shields.io/npm/v/react-milestones-vis.svg?maxAge=2592000)](https://www.npmjs.com/package/react-milestones-vis)
[![npm](https://img.shields.io/npm/l/react-milestones-vis.svg?maxAge=2592000)](https://www.npmjs.com/package/react-milestones-vis)
[![npm](https://img.shields.io/npm/dt/react-milestones-vis.svg?maxAge=2592000)](https://www.npmjs.com/package/react-milestones-vis)

# React Milestones Visualization

- NPM: https://www.npmjs.com/package/react-milestones-vis
- Github: https://github.com/walterra/react-milestones-vis
- Storybook demos: https://walterra.github.io/react-milestones-vis

<img src="https://github.com/walterra/d3-milestones/raw/main/src/stories/assets/vikings.png" />


```jsx
import { Milestones } from 'react-milestones-vis';

// Time-based example
export const Vikings = () => <Milestones
  aggregateBy="year"
  data={[
    {
      title: 'Vikings begin attacks on England.',
      year: 789
    },
    {
      title: 'The Oseberg Viking longship buried',
      year: 800
    },
    {
      title: 'Vikings found Dublin in Ireland.',
      year: 840
    },
    ...
  ]}
  mapping={{
    text: 'title',
    timestamp: 'year'
  }}
  parseTime="%Y"
  optimize
/>;

// Ordinal scale example
export const ProjectSteps = () => <Milestones
  scaleType="ordinal"
  data={[
    {
      step: 'Step 1',
      detail: 'Planning phase',
    },
    {
      step: 'Step 2',
      detail: 'Research phase',
    },
    {
      step: 'Step 3',
      detail: 'Development phase',
    },
    ...
  ]}
  mapping={{
    value: 'step',
    text: 'detail'
  }}
  optimize
/>;
```

`react-milestones-vis` is based on the d3 based library `d3-milestones`: https://github.com/walterra/d3-milestones

## Available Scripts

In the project directory, you can run:

### `yarn storybook`

Runs storybook for development.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn test:react16`, `yarn test:react17`, `yarn test:react18`

Run tests for specific React versions. This is useful for ensuring compatibility across different React versions.

### `yarn test:visual`

Run visual snapshot tests using HTML2IMG rendering service. These tests validate the visual appearance of components by comparing screenshots against baselines.

**Requirements for Visual Tests:**
- Setup an `.env` file with `HTML2IMG_RENDER_URL` and `HTML2IMG_API_KEY`
- Install and run [node-html2img-render-server](https://github.com/walterra/node-html2img-render-server)
- Use `yarn test:visual:update` to update existing snapshots

For more information about the visual testing setup and troubleshooting, see [VISUAL_TESTING.md](./VISUAL_TESTING.md).

### `yarn build`

Builds the app for production to the `build` folder using `rollup`.
