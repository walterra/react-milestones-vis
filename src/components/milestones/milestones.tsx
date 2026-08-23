import React, { ReactElement, useEffect, useRef, useState } from 'react';

// @ts-ignore Could not find a declaration file for module 'd3-milestones'.
import milestones from 'd3-milestones';

import '../../../node_modules/d3-milestones/build/d3-milestones.css';

import { getDefaults } from './defaults';
import {
  isAggregateBy,
  isDistribution,
  isOrientation,
  isPartialMapping,
  isRange,
  isScaleType,
  isUrlTarget,
  MilestonesOptions,
} from './types';

interface IMilestones<T> {
  aggregateBy: (d: MilestonesOptions<T>['aggregateBy']) => IMilestones<T>;
  mapping: (d: MilestonesOptions<T>['mapping']) => IMilestones<T>;
  optimize: (d: MilestonesOptions<T>['optimize']) => IMilestones<T>;
  autoResize: (d: MilestonesOptions<T>['autoResize']) => IMilestones<T>;
  orientation: (d: MilestonesOptions<T>['orientation']) => IMilestones<T>;
  distribution: (d: MilestonesOptions<T>['distribution']) => IMilestones<T>;
  scaleType: (d: MilestonesOptions<T>['scaleType']) => IMilestones<T>;
  parseTime: (d: MilestonesOptions<T>['parseTime']) => IMilestones<T>;
  labelFormat: (d: MilestonesOptions<T>['labelFormat']) => IMilestones<T>;
  urlTarget: (d: MilestonesOptions<T>['urlTarget']) => IMilestones<T>;
  useLabels: (d: MilestonesOptions<T>['useLabels']) => IMilestones<T>;
  range: (d: MilestonesOptions<T>['range']) => IMilestones<T>;
  onEventClick: (d: MilestonesOptions<T>['onEventClick']) => IMilestones<T>;
  onEventMouseLeave: (d: MilestonesOptions<T>['onEventMouseLeave']) => IMilestones<T>;
  onEventMouseOver: (d: MilestonesOptions<T>['onEventMouseOver']) => IMilestones<T>;
  renderCallback: (d: MilestonesOptions<T>['renderCallback']) => IMilestones<T>;
  render: (d: T[]) => void;
}

/**
 * React Milestones Visualization
 */
export const Milestones = <T,>(props: MilestonesOptions<T>): ReactElement => {
  const milestonesDivEl = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState<IMilestones<T>>();

  useEffect(() => {
    if (milestonesDivEl.current !== null) {
      setVis(milestones(milestonesDivEl.current) as IMilestones<T>);
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
      typeof onEventClick === 'function' && vis.onEventClick(onEventClick);
      typeof onEventMouseLeave === 'function' &&
        vis.onEventMouseLeave(onEventMouseLeave);
      typeof onEventMouseOver === 'function' &&
        vis.onEventMouseOver(onEventMouseOver);
      typeof renderCallback === 'function' &&
        vis.renderCallback(renderCallback);

      vis.render(data);
    }
  }, [vis, props]);

  return <div ref={milestonesDivEl} />;
};
