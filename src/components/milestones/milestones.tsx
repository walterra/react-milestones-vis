import React, { useEffect, useRef, useState, FC } from 'react';

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
  isUrlTarget,
  MilestonesOptions,
} from './types';

interface IMilestones {
  aggregateBy: (d: MilestonesOptions['aggregateBy']) => IMilestones;
  mapping: (d: MilestonesOptions['mapping']) => IMilestones;
  optimize: (d: MilestonesOptions['optimize']) => IMilestones;
  autoResize: (d: MilestonesOptions['autoResize']) => IMilestones;
  orientation: (d: MilestonesOptions['orientation']) => IMilestones;
  distribution: (d: MilestonesOptions['distribution']) => IMilestones;
  parseTime: (d: MilestonesOptions['parseTime']) => IMilestones;
  labelFormat: (d: MilestonesOptions['labelFormat']) => IMilestones;
  urlTarget: (d: MilestonesOptions['urlTarget']) => IMilestones;
  useLabels: (d: MilestonesOptions['useLabels']) => IMilestones;
  range: (d: MilestonesOptions['range']) => IMilestones;
  onEventClick: (d: MilestonesOptions['onEventClick']) => IMilestones;
  onEventMouseLeave: (d: MilestonesOptions['onEventMouseLeave']) => IMilestones;
  onEventMouseOver: (d: MilestonesOptions['onEventMouseOver']) => IMilestones;
  renderCallback: (d: MilestonesOptions['renderCallback']) => IMilestones;
  render: (d: unknown[]) => void;
}

/**
 * React Milestones Visualization
 */
export const Milestones: FC<MilestonesOptions> = (props) => {
  const milestonesDivEl = useRef(null);
  const [vis, setVis] = useState<IMilestones>();

  useEffect(() => {
    if (milestonesDivEl.current !== null) {
      setVis(milestones(milestonesDivEl.current) as IMilestones);
    }
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
      typeof renderCallback === 'function' && vis.renderCallback(renderCallback);

      vis.render(data);
    }
  }, [vis, props]);

  return <div ref={milestonesDivEl} />;
};
