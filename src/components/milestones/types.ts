import type {
  D3MilestonesAdapter,
  D3MilestonesDistribution,
  D3MilestonesDistributionData,
  D3MilestonesDistributionFunction,
  D3MilestonesDistributionObject,
  D3MilestonesDistributionPreset,
  D3MilestonesDistributionValue,
  D3MilestonesEventPayload,
  D3MilestonesMapping,
} from './d3-milestones-adapter';

const milestonesMappingKeys = [
  'category',
  'entries',
  'timestamp', // Used for time scale
  'value',     // Used for ordinal scale
  'text',
  'url',
  'id',
  'textStyle',
  'titleStyle',
  'categoryStyle',
  'bulletStyle',
] as const;
type MilestonesMappingKeys = typeof milestonesMappingKeys[number];

/** Maps milestone properties to fields in the supplied data. */
export type MilestonesMapping = D3MilestonesMapping;
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
export type MilestonesDistributionPreset = D3MilestonesDistributionPreset;
export type MilestonesDistributionValue = D3MilestonesDistributionValue;

/** Declarative field-based label distribution. */
export type MilestonesDistributionObject = D3MilestonesDistributionObject;

/** Grouped event data passed to a custom distribution function. */
export type MilestonesDistributionData<T = unknown> =
  D3MilestonesDistributionData<T>;

/** Custom label distribution function. `true` places a group above the timeline. */
export type MilestonesDistributionFunction<T = unknown> =
  D3MilestonesDistributionFunction<T>;

export type MilestonesDistribution<T = unknown> =
  D3MilestonesDistribution<T>;

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

/**
 * Data passed to milestone label event callbacks.
 *
 * `text` and `timestamp` are the values selected by the configured mapping,
 * while `attributes` contains the original source data object.
 */
export type MilestonesEventPayload<T = unknown> =
  D3MilestonesEventPayload<T>;

export interface MilestonesOptions<T = unknown> {
  /**
   * Aggregation level of time.
   */
  aggregateBy?: Parameters<D3MilestonesAdapter<T>['aggregateBy']>[0];
  /**
   * Map attributes to timestamp/value and text.
   */
  mapping?: Parameters<D3MilestonesAdapter<T>['mapping']>[0];
  /**
   * Enable/disable label overlap removal.
   */
  optimize?: Parameters<D3MilestonesAdapter<T>['optimize']>[0];
  /**
   * Enable/disable automatic resizing.
   */
  autoResize?: Parameters<D3MilestonesAdapter<T>['autoResize']>[0];
  /**
   * Layout orientation, `horizontal` (default) and `vertical` are available.
   */
  orientation?: Parameters<D3MilestonesAdapter<T>['orientation']>[0];
  /**
   * Label distribution preset, declarative field mapping, or custom function.
   */
  distribution?: Parameters<D3MilestonesAdapter<T>['distribution']>[0];
  /**
   * Scale type, `time` (default) or `ordinal` are available.
   */
  scaleType?: Parameters<D3MilestonesAdapter<T>['scaleType']>[0];
  /**
   * Custom time parser.
   */
  parseTime?: Parameters<D3MilestonesAdapter<T>['parseTime']>[0];
  /**
   * Custom label format.
   */
  labelFormat?: Parameters<D3MilestonesAdapter<T>['labelFormat']>[0];
  /**
   * Target attribute for URLs.
   */
  urlTarget?: Parameters<D3MilestonesAdapter<T>['urlTarget']>[0];
  /**
   * Enable/disable label display.
   */
  useLabels?: Parameters<D3MilestonesAdapter<T>['useLabels']>[0];
  /**
   * Custom date range for the timeline. Useful to extend bounds beyound the dataset.
   */
  range?: Parameters<D3MilestonesAdapter<T>['range']>[0];
  /**
   * Array of data elements.
   */
  data: Array<T>;
  /**
   * Optional label click handler. Receives the mapped event values and the
   * original source data object.
   */
  onEventClick?: (event: MilestonesEventPayload<T>) => void;
  /**
   * Optional label leave handler. Receives the mapped event values and the
   * original source data object.
   */
  onEventMouseLeave?: (event: MilestonesEventPayload<T>) => void;
  /**
   * Optional label over handler. Receives the mapped event values and the
   * original source data object.
   */
  onEventMouseOver?: (event: MilestonesEventPayload<T>) => void;
  /**
   * Callback that executes after rendering is complete
   */
  renderCallback?: Parameters<D3MilestonesAdapter<T>['renderCallback']>[0];
}
