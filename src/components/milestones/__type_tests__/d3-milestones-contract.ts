import milestones from 'd3-milestones';

import type { D3MilestonesAdapter } from '../d3-milestones-adapter';

interface Datum {
  timestamp: string;
  text: string;
  lane: 'top' | 'bottom';
}

type AdapterMethods =
  | 'aggregateBy'
  | 'mapping'
  | 'optimize'
  | 'autoResize'
  | 'orientation'
  | 'distribution'
  | 'scaleType'
  | 'parseTime'
  | 'labelFormat'
  | 'urlTarget'
  | 'useLabels'
  | 'range'
  | 'onEventClick'
  | 'onEventMouseLeave'
  | 'onEventMouseOver'
  | 'renderCallback'
  | 'render';

type Equal<Left, Right> =
  (<T>() => T extends Left ? 1 : 2) extends
  (<T>() => T extends Right ? 1 : 2)
    ? true
    : false;
type Assert<Condition extends true> = Condition;
type AdapterContainsExactlyWrapperMethods = Assert<
  Equal<keyof D3MilestonesAdapter<Datum>, AdapterMethods>
>;

declare const element: HTMLDivElement;
const adapter = milestones<Datum>(element);
const selectorAdapter = milestones<Datum>('#timeline');

const chained: D3MilestonesAdapter<Datum> = adapter
  .aggregateBy('day')
  .mapping({ timestamp: 'timestamp', text: 'text' })
  .optimize(true)
  .autoResize(false)
  .orientation('horizontal')
  .distribution({ field: 'lane', top: 'top', bottom: 'bottom' })
  .distribution((group, index) => group.values[index]?.lane === 'top')
  .scaleType('time')
  .parseTime('%Y-%m-%d')
  .labelFormat('%Y')
  .urlTarget('_blank')
  .useLabels(true)
  .range([0, 1])
  .onEventClick((event) => event.currentTarget)
  .onEventMouseLeave((event) => event.type)
  .onEventMouseOver((event) => event.target)
  .renderCallback(() => undefined)
  .render([{ timestamp: '2026-01-01', text: 'Release', lane: 'top' }]);

void chained;
void selectorAdapter;
void (undefined as unknown as AdapterContainsExactlyWrapperMethods);

// @ts-expect-error Distribution objects require both top and bottom mappings.
adapter.distribution({ field: 'lane', top: 'top' });
// @ts-expect-error Render data must retain the adapter's datum type.
adapter.render([{ timestamp: '2026-01-01', text: 'Release' }]);
// @ts-expect-error d3 v3 listeners pass DOM events to adapter callbacks.
adapter.onEventClick((event) => event.attributes);
// @ts-expect-error The factory accepts selectors, not arbitrary values.
milestones<Datum>(42);
