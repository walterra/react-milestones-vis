# react-milestones-vis Examples

This directory contains self-contained HTML examples of the react-milestones-vis component.

## Usage

Open any of the HTML files in a browser to see the component in action.

## Examples

- `milestones.html` - Basic milestones timeline
- `milestones-events.html` - Timeline with events 
- `vikings.html` - Timeline of Viking history
- `os-category-labels.html` - Timeline with category labels
- `covid19.html` - COVID-19 timeline
- `ultima-series.html` - Ultima game series timeline
- `styles.html` - Timeline with custom styles

## Generating Examples

These examples were generated with the `yarn build:examples` command, which:

1. Creates self-contained HTML files that include:
   - React and ReactDOM libraries
   - The react-milestones-vis UMD bundle (with d3-milestones as an internal dependency)
   - Example data and configuration

**Important:** Before running `yarn build:examples`, make sure to run `yarn build` first to generate the UMD bundle that will be used in the examples.

2. Each example shows:
   - The rendered timeline
   - The configuration used
   - The data used

## Learning from Examples

These examples are useful for:
- Understanding how to configure the component
- Seeing different data formats in action
- Testing the component in isolation
- Using as templates for your own implementations