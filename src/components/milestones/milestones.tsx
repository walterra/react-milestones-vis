import React, { useMemo, useEffect, useRef, useState, FC } from 'react';

// @ts-expect-error Could not find a declaration file for module 'd3-milestones'.
import milestones from 'd3-milestones';

import '../../../node_modules/d3-milestones/build/d3-milestones.css';

import { getDefaults } from './defaults';
import {
  isAggregateBy,
  isDistribution,
  isOrientation,
  isPartialMapping,
  isRange,
  MilestonesOptions,
} from './types';

/**
 * React Milestones Visualization
 */
export const Milestones: FC<MilestonesOptions> = (props) => {
  const milestonesDivEl = useRef(null);
  const [vis, setVis] = useState<ReturnType<milestones>>();

  useEffect(() => {
    setVis(milestones(milestonesDivEl.current));
  }, []);

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
        useLabels,
        range,
        onEventClick,
        onEventMouseLeave,
        onEventMouseOver,
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
      typeof useLabels === 'boolean' && vis.useLabels(useLabels);
      isRange(range) && vis.range(range);
      typeof onEventClick === 'function' && vis.onEventClick(onEventClick);
      typeof onEventMouseLeave === 'function' &&
        vis.onEventMouseLeave(onEventMouseLeave);
      typeof onEventMouseOver === 'function' &&
        vis.onEventMouseOver(onEventMouseOver);

      vis.render(data);
    }
  }, [vis, props]);

  return <div ref={milestonesDivEl} />;
};
