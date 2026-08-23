const milestonesMappingKeys = [
  'category',
  'entries',
  'timestamp', // Used for time scale
  'value',     // Used for ordinal scale
  'text',
  'url',
  'textStyle',
  'titleStyle',
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
export type MilestonesDistributionPreset = typeof milestonesDistribution[number];
export type MilestonesDistributionValue = string | number | boolean | null;

/** Declarative field-based label distribution. */
export interface MilestonesDistributionObject {
  field: string;
  top: MilestonesDistributionValue | MilestonesDistributionValue[];
  bottom: MilestonesDistributionValue | MilestonesDistributionValue[];
}

/** Grouped event data passed to a custom distribution function. */
export interface MilestonesDistributionData<T = unknown> {
  values: T[];
  [key: string]: unknown;
}

/** Custom label distribution function. `true` places a group above the timeline. */
export type MilestonesDistributionFunction<T = unknown> = (
  data: MilestonesDistributionData<T>,
  index: number
) => boolean;

export type MilestonesDistribution<T = unknown> =
  | MilestonesDistributionPreset
  | MilestonesDistributionObject
  | MilestonesDistributionFunction<T>;

const isDistributionValue = (arg: unknown): arg is MilestonesDistributionValue =>
  arg === null || ['string', 'number', 'boolean'].includes(typeof arg);

export const isDistributionObject = (
  arg: unknown
): arg is MilestonesDistributionObject =>
  typeof arg === 'object' &&
  arg !== null &&
  !Array.isArray(arg) &&
  typeof (arg as MilestonesDistributionObject).field === 'string' &&
  (arg as MilestonesDistributionObject).field.length > 0 &&
  ['top', 'bottom'].every((key) => {
    const value = (arg as Record<string, unknown>)[key];
    return Array.isArray(value)
      ? value.length > 0 && value.every(isDistributionValue)
      : isDistributionValue(value);
  });

export function isDistributionFunction<T = unknown>(
  arg: unknown
): arg is MilestonesDistributionFunction<T> {
  return typeof arg === 'function';
}

export function isDistribution<T = unknown>(
  arg: unknown
): arg is MilestonesDistribution<T> {
  return (
    (typeof arg === 'string' &&
      milestonesDistribution.includes(arg as MilestonesDistributionPreset)) ||
    isDistributionObject(arg) ||
    isDistributionFunction<T>(arg)
  );
}

type MilestonesRange = [number, number];
export const isRange = (arg: unknown): arg is MilestonesRange =>
  Array.isArray(arg) &&
  arg.length === 2 &&
  arg.every((d) => typeof d === 'number');

const milestonesUrlTarget = ['_blank', '_self', '_parent', '_top'] as const;
type MilestonesUrlTarget = typeof milestonesUrlTarget[number];
export const isUrlTarget = (arg: unknown): arg is MilestonesUrlTarget =>
  milestonesUrlTarget.includes(arg as MilestonesUrlTarget);

const milestonesScaleType = ['time', 'ordinal'] as const;
type MilestonesScaleType = typeof milestonesScaleType[number];
export const isScaleType = (arg: unknown): arg is MilestonesScaleType =>
  milestonesScaleType.includes(arg as MilestonesScaleType);

export interface MilestonesOptions<T = unknown> {
  /**
   * Aggregation level of time.
   */
  aggregateBy?: MilestonesAggregateBy;
  /**
   * Map attributes to timestamp/value and text.
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
   * Label distribution preset, declarative field mapping, or custom function.
   */
  distribution?: MilestonesDistribution<T>;
  /**
   * Scale type, `time` (default) or `ordinal` are available.
   */
  scaleType?: MilestonesScaleType;
  /**
   * Custom time parser.
   */
  parseTime?: string;
  /**
   * Custom label format.
   */
  labelFormat?: string;
  /**
   * Target attribute for URLs.
   */
  urlTarget?: MilestonesUrlTarget;
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
  /**
   * Callback that executes after rendering is complete
   */
  renderCallback?: () => void;
}
