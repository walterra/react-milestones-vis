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

## Data mapping

The `mapping` prop maps milestone properties to fields in each data object. In addition to `timestamp`, `value`, `text`, `url`, `category`, and `entries`, it supports custom DOM IDs and inline style objects:

```tsx
<Milestones
  data={[{
    date: '2024-01-01',
    label: 'Version 1.0',
    elementId: 'version-1',
    bulletCss: { backgroundColor: 'royalblue', borderColor: 'navy' },
  }]}
  mapping={{
    timestamp: 'date',
    text: 'label',
    id: 'elementId',
    bulletStyle: 'bulletCss',
  }}
/>
```

Use `categoryStyle` for style objects on category records. All supported mapping keys are `category`, `entries`, `timestamp`, `value`, `text`, `url`, `id`, `textStyle`, `titleStyle`, `categoryStyle`, and `bulletStyle`.

## Label distribution

The `distribution` prop accepts the presets `top-bottom`, `top`, and `bottom`. It also supports data-driven object and function forms.

Use a declarative object to place labels according to an event field. `top` and `bottom` accept a single string, number, boolean, or `null`, or arrays of those values. This example places Gandalf's events above the timeline and Frodo's below it:

```tsx
<Milestones
  aggregateBy="day"
  data={lotrEvents}
  distribution={{
    field: 'character',
    top: 'Gandalf',
    bottom: 'Frodo',
  }}
  optimize
  parseTime="%d.%m.%Y"
/>
```

Use a function for grouped or computed logic. It receives the grouped event data and group index, and returns `true` for top/left or `false` for bottom/right. This equivalent function keeps a date above the timeline when any event in its group belongs to Gandalf:

```tsx
<Milestones
  aggregateBy="day"
  data={lotrEvents}
  distribution={(group) =>
    group.values.some((event) => event.character === 'Gandalf')
  }
  optimize
  parseTime="%d.%m.%Y"
/>
```

For vertical timelines, `top` means left and `bottom` means right.

## Available Scripts

In the project directory, you can run:

### `yarn storybook`

Runs storybook for development.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn test:react18`, `yarn test:react19`

Run tests against the supported React versions. The compatibility matrix covers React 18.3 and React 19.

### `yarn test:visual`

Run visual snapshot tests using HTML2IMG rendering service. These tests validate the visual appearance of components by comparing screenshots against baselines.

**Requirements for Visual Tests:**
- Setup an `.env` file with `HTML2IMG_RENDER_URL` and `HTML2IMG_API_KEY`
- Install and run [node-html2img-render-server](https://github.com/walterra/node-html2img-render-server)
- Use `yarn test:visual:update` to update existing snapshots

For more information about the visual testing setup and troubleshooting, see [VISUAL_TESTING.md](./VISUAL_TESTING.md).

### `yarn build`

Builds the app for production to the `build` folder using `rollup`.
