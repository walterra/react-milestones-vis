import React, { useMemo, useEffect, useRef } from 'react';

// @ts-expect-error Could not find a declaration file for module 'd3-milestones'.
import milestones from 'd3-milestones';
import '../../../node_modules/d3-milestones/build/d3-milestones.css';

const DIV_ID = 'react-milestones-vis';

interface MilestonesMapping {
  timestamp: string;
  text: string;
}

type MilestonesAggregateBy =
  | 'second'
  | 'minute'
  | 'hour'
  | 'day'
  | 'week'
  | 'month'
  | 'quarter'
  | 'year';
type MilestonesOrientation = 'horizontal' | 'vertical';
type MilestonesDistribution = 'top-bottom' | 'top' | 'bottom';

interface MilestonesProps<T = unknown> {
  /**
   * Aggregation level of time.
   */
  aggregateBy?: MilestonesAggregateBy;
  /**
   * Map attributes to timestamp and text.
   */
  mapping?: MilestonesMapping;
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
   * Array of data elements.
   */
  data: Array<T>;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * React Milestones Visualization
 */
export const Milestones = ({
  aggregateBy,
  mapping,
  parseTime,
  optimize,
  autoResize,
  orientation,
  distribution,
  data,
  ...props
}: MilestonesProps) => {
  const divId = useMemo(
    () => `${DIV_ID}-${Math.random().toString(36).substring(7)}`,
    []
  );
  const milestonesEl = useRef(null);

  useEffect(() => {
    if (milestonesEl.current) {
      const m = milestones(`#${divId}`);

      typeof aggregateBy === 'string' && m.aggregateBy(aggregateBy);
      typeof mapping === 'object' && m.mapping(mapping);
      typeof parseTime === 'string' && m.parseTime(parseTime);
      typeof optimize === 'boolean' && m.optimize(optimize);
      typeof autoResize === 'boolean' && m.autoResize(autoResize);
      typeof orientation === 'string' && m.orientation(orientation);
      typeof distribution === 'string' && m.distribution(distribution);

      m.render(data);
    }
  }, [
    aggregateBy,
    mapping,
    parseTime,
    optimize,
    autoResize,
    orientation,
    distribution,
    data,
  ]);

  return <div id={divId} ref={milestonesEl} />;
};
