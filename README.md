# React Milestones Visualization

<img src="https://github.com/walterra/d3-milestones/raw/main/src/stories/assets/vikings.png" />


Visit the Storybook based demo: https://walterra.github.io/react-milestones-vis/

Example usage:

```jsx
import { Milestones } from 'react-milestones-vis';

export const Vikings = () => {
  return <Milestones
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
      {
        title: 'A Viking raid on Seville is repulsed.',
        year: 844
      },
      {
        title: 'Rus Vikings attack Constantinople.',
        year: 860
      },
      {
        title: 'Novgorod in Russia is founded by the Rus Viking, Ulrich.',
        year: 862
      },
      {
        title: 'Danish Vikings establish a kingdom in York, England.',
        year: 866
      },
      {
        title: 'Danish advance is halted in England.',
        year: 871
      },
      {
        title: 'Harald I gains control of Norway.',
        year: 872
      },
      {
        title: 'Rurik establishes Kiev as the center of the Kievan Rus\' domains.',
        year: 879
      },
      {
        title: 'Alfred divides England with the Danes under the Danelaw pact.',
        year: 886
      },
      {
        title: 'The Vikings raid along the Mediterranean coast.',
        year: 900
      },
      {
        title: 'The Viking chief Rollo founds Normandy in France.',
        year: 911
      },
      {
        title: 'Rus Vikings attack Constantinople(Istanbul).',
        year: 941
      },
      {
        title: 'Viking leader Erik the Red discovers Greenland.',
        year: 981
      },
      {
        title: 'Viking ships sail in Newfoundland waters.',
        year: 986
      },
      {
        title: 'Olav I conquers Norway and proclaims it a Christian kingdom.',
        year: 995
      },
      {
        title: 'Christianity reaches Greenland and Iceland.',
        year: 1000
      },
      {
        title: 'Leif Eriksson, explores the coast of North America.',
        year: 1000
      },
      {
        title: 'Olav I dies; Norway is ruled by the Danes.',
        year: 1000
      },
      {
        title: 'Brian Boru defeats the Norse and becomes the king of Ireland.',
        year: 1002
      },
      {
        title: 'The Danes conquer England; Æthelred flees to Normandy.',
        year: 1013
      },
      {
        title: 'Vikings abandon the Vinland settlement on the coast of North America.',
        year: 1015
      },
      {
        title: 'Olav II regains Norway from the Danes.',
        year: 1016
      },
      {
        title: 'The Danes under Knut(Canute) rule England.',
        year: 1016
      },
      {
        title: 'Knut(Canute), king of England and Denmark, conquers Norway.',
        year: 1028
      },
      {
        title: 'Edward the Confessor rules England with the support of the Danes.',
        year: 1042
      },
      {
        title: 'The city of Oslo is founded in Norway.',
        year: 1050
      },
      {
        title: 'Battle of Stamford Bridge',
        year: 1066
      },
      {
        title: 'Battle of Hastings.',
        year: 1066
      }
    ]}
    mapping={{
      text: 'title',
      timestamp: 'year'
    }}
    parseTime="%Y"
    optimize
    autoResize
  />;
};
```

## Available Scripts

In the project directory, you can run:

### `yarn storybook`

Runs for storybook for development.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder using `rollup`.
