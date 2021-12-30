import { MilestonesOptions } from './types';

export const getDefaults = (): MilestonesOptions => ({
  aggregateBy: 'minute',
  optimize: false,
  autoResize: true,
  orientation: 'horizontal',
  distribution: 'top-bottom',
  useLabels: true,
  data: [],
});
