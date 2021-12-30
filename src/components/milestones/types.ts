const milestonesMappingKeys = [
  'category',
  'entries',
  'timestamp',
  'text',
  'url',
] as const;
type MilestonesMappingKeys = typeof milestonesMappingKeys[number];
type MilestonesMapping = Record<MilestonesMappingKeys, string>;
export const isPartialMapping = (
  arg: unknown
): arg is Partial<MilestonesMapping> =>
  typeof arg === 'object' &&
  arg !== null &&
  Object.keys(arg).every((d) =>
    milestonesMappingKeys.includes(d as MilestonesMappingKeys)
  );

const milestonesAggregateBy = [
  'second',
  'minute',
  'hour',
  'day',
  'week',
  'month',
  'quarter',
  'year',
] as const;
type MilestonesAggregateBy = typeof milestonesAggregateBy[number];
export const isAggregateBy = (arg: unknown): arg is MilestonesAggregateBy =>
  typeof arg === 'string' &&
  milestonesAggregateBy.includes(arg as MilestonesAggregateBy);

const milestonesOrientation = ['horizontal', 'vertical'] as const;
type MilestonesOrientation = typeof milestonesOrientation[number];
export const isOrientation = (arg: unknown): arg is MilestonesOrientation =>
  milestonesOrientation.includes(arg as MilestonesOrientation);

const milestonesDistribution = ['top-bottom', 'top', 'bottom'] as const;
type MilestonesDistribution = typeof milestonesDistribution[number];
export const isDistribution = (arg: unknown): arg is MilestonesDistribution =>
  milestonesDistribution.includes(arg as MilestonesDistribution);

type MilestonesRange = [number, number];
export const isRange = (arg: unknown): arg is MilestonesRange =>
  Array.isArray(arg) &&
  arg.length === 2 &&
  arg.every((d) => typeof d === 'number');

export interface MilestonesOptions<T = unknown> {
  /**
   * Aggregation level of time.
   */
  aggregateBy?: MilestonesAggregateBy;
  /**
   * Map attributes to timestamp and text.
   */
  mapping?: Partial<MilestonesMapping>;
  /**
   * Enable/disable label overlap removal.
   */
  optimize?: boolean;
  /**
   * Enable/disable automatic resizing.
   */
  autoResize?: boolean;
  /**
   * Layout orientation, `horizontal` (default) and `vertical` are available.
   */
  orientation?: MilestonesOrientation;
  /**
   * Layout orientation, `horizontal` (default) and `vertical` are available.
   */
  distribution?: MilestonesDistribution;
  /**
   * Custom time parser.
   */
  parseTime?: string;
  /**
   * Custom label format.
   */
  labelFormat?: string;
  /**
   * Enable/disable label display.
   */
  useLabels?: boolean;
  /**
   * Custom date range for the timeline. Useful to extend bounds beyound the dataset.
   */
  range?: MilestonesRange;
  /**
   * Array of data elements.
   */
  data: Array<T>;
  /**
   * Optional label click handler
   */
  onEventClick?: () => void;
  /**
   * Optional label leave handler
   */
  onEventMouseLeave?: () => void;
  /**
   * Optional label over handler
   */
  onEventMouseOver?: () => void;
}
