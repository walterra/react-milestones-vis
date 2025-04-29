import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

import p from '../package.json';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: `react-milestones-vis v${p.version}`,
  }),
});
