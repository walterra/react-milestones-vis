import React, { ReactElement, useEffect, useRef, useState } from 'react';

import milestones from 'd3-milestones';

import '../../../node_modules/d3-milestones/build/d3-milestones.css';

import type { D3MilestonesAdapter } from './d3-milestones-adapter';
import { getDefaults } from './defaults';
import {
  isAggregateBy,
  isDistribution,
  isOrientation,
  isPartialMapping,
  isRange,
  isScaleType,
  isUrlTarget,
  MilestonesEventPayload,
  MilestonesOptions,
} from './types';

interface D3MilestonesEventTarget extends EventTarget {
  __data__: MilestonesEventPayload<unknown>;
}

const eventPayloadCallback = <T,>(
  callback: (event: MilestonesEventPayload<T>) => void
): ((event: Event) => void) => (event): void => {
  const target = event.currentTarget as D3MilestonesEventTarget;
  callback(target.__data__ as MilestonesEventPayload<T>);
};

/**
 * React Milestones Visualization
 */
export const Milestones = <T,>(props: MilestonesOptions<T>): ReactElement => {
  const milestonesDivEl = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState<D3MilestonesAdapter<T>>();

  useEffect(() => {
    if (milestonesDivEl.current !== null) {
      setVis(milestones<T>(milestonesDivEl.current));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [milestonesDivEl.current]);

  useEffect(() => {
    if (vis) {
      const {
        aggregateBy,
        mapping,
        optimize,
        autoResize,
        orientation,
        distribution,
        scaleType,
        parseTime,
        labelFormat,
        urlTarget,
        useLabels,
        range,
        onEventClick,
        onEventMouseLeave,
        onEventMouseOver,
        renderCallback,
        data,
      } = { ...getDefaults(), ...props };

      isAggregateBy(aggregateBy) && vis.aggregateBy(aggregateBy);
      isPartialMapping(mapping) && vis.mapping(mapping);
      typeof optimize === 'boolean' && vis.optimize(optimize);
      typeof autoResize === 'boolean' && vis.autoResize(autoResize);
      isOrientation(orientation) && vis.orientation(orientation);
      isDistribution(distribution) && vis.distribution(distribution);
      isScaleType(scaleType) && vis.scaleType(scaleType);
      typeof parseTime === 'string' && vis.parseTime(parseTime);
      typeof labelFormat === 'string' && vis.labelFormat(labelFormat);
      isUrlTarget(urlTarget) && vis.urlTarget(urlTarget);
      typeof useLabels === 'boolean' && vis.useLabels(useLabels);
      isRange(range) && vis.range(range);
      typeof onEventClick === 'function' &&
        vis.onEventClick(eventPayloadCallback(onEventClick));
      typeof onEventMouseLeave === 'function' &&
        vis.onEventMouseLeave(eventPayloadCallback(onEventMouseLeave));
      typeof onEventMouseOver === 'function' &&
        vis.onEventMouseOver(eventPayloadCallback(onEventMouseOver));
      typeof renderCallback === 'function' &&
        vis.renderCallback(renderCallback);

      vis.render(data);
    }
  }, [vis, props]);

  return <div ref={milestonesDivEl} />;
};
