/** Aggregation units accepted by d3-milestones v2. */
export type D3MilestonesAggregateBy =
  | 'second'
  | 'minute'
  | 'hour'
  | 'day'
  | 'week'
  | 'month'
  | 'quarter'
  | 'year';

export type D3MilestonesOrientation = 'horizontal' | 'vertical';
export type D3MilestonesScaleType = 'time' | 'ordinal';
export type D3MilestonesUrlTarget = '_blank' | '_self' | '_parent' | '_top';
export type D3MilestonesRange = [number, number];

export interface D3MilestonesMapping {
  category: string;
  entries: string;
  timestamp: string;
  value: string;
  text: string;
  url: string;
  id: string;
  textStyle: string;
  titleStyle: string;
  categoryStyle: string;
  bulletStyle: string;
}

export type D3MilestonesDistributionPreset = 'top-bottom' | 'top' | 'bottom';
export type D3MilestonesDistributionValue = string | number | boolean | null;

export interface D3MilestonesDistributionObject {
  field: string;
  top: D3MilestonesDistributionValue | D3MilestonesDistributionValue[];
  bottom: D3MilestonesDistributionValue | D3MilestonesDistributionValue[];
}

export interface D3MilestonesDistributionData<T = unknown> {
  key?: string;
  values: T[];
  index?: number;
  timelineIndex?: number;
  scaleType?: D3MilestonesScaleType;
}

export type D3MilestonesDistributionFunction<T = unknown> = (
  data: D3MilestonesDistributionData<T>,
  index: number
) => boolean;

export type D3MilestonesDistribution<T = unknown> =
  | D3MilestonesDistributionPreset
  | D3MilestonesDistributionObject
  | D3MilestonesDistributionFunction<T>;

export interface D3MilestonesEventPayload<T = unknown> {
  text: string;
  timestamp: string | number | Date | undefined;
  attributes: T;
}

/** Chainable subset of the d3-milestones v2 API used by the React wrapper. */
export interface D3MilestonesAdapter<T = unknown> {
  aggregateBy(value: D3MilestonesAggregateBy): D3MilestonesAdapter<T>;
  mapping(value: Partial<D3MilestonesMapping>): D3MilestonesAdapter<T>;
  optimize(value: boolean): D3MilestonesAdapter<T>;
  autoResize(value: boolean): D3MilestonesAdapter<T>;
  orientation(value: D3MilestonesOrientation): D3MilestonesAdapter<T>;
  distribution(value: D3MilestonesDistribution<T>): D3MilestonesAdapter<T>;
  scaleType(value: D3MilestonesScaleType): D3MilestonesAdapter<T>;
  parseTime(value: string): D3MilestonesAdapter<T>;
  labelFormat(value: string): D3MilestonesAdapter<T>;
  urlTarget(value: D3MilestonesUrlTarget): D3MilestonesAdapter<T>;
  useLabels(value: boolean): D3MilestonesAdapter<T>;
  range(value: D3MilestonesRange): D3MilestonesAdapter<T>;
  onEventClick(callback: (event: Event) => void): D3MilestonesAdapter<T>;
  onEventMouseLeave(callback: (event: Event) => void): D3MilestonesAdapter<T>;
  onEventMouseOver(callback: (event: Event) => void): D3MilestonesAdapter<T>;
  renderCallback(callback: () => void): D3MilestonesAdapter<T>;
  render(data: T[]): D3MilestonesAdapter<T>;
}
