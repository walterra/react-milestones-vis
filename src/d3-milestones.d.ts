declare module 'd3-milestones' {
  export default function milestones<T = unknown>(
    selector: string | Element
  ): import('./components/milestones/d3-milestones-adapter').D3MilestonesAdapter<T>;
}
