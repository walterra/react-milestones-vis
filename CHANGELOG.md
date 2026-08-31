## [`main`](https://github.com/walterra/react-milestones-vis/tree/main)

## 1.0.0

### Major Changes

- 7595723: Upgrade to d3-milestones 2, add React 19 support, require React 18.3 or newer, and require Node.js 22.18 or newer.

### Minor Changes

- 627f33f: Add support for custom IDs, category styles, and bullet styles in milestone mappings.
- 8afab02: Add declarative object and custom function options for label distribution.

### Patch Changes

- b793188: Clean package build output and exclude stale example artifacts from published tarballs.
- 34ba994: Type label event callback payloads and preserve the component's source data generic in callback attributes.
- 6f9e953: Replace the suppressed `d3-milestones` import and handwritten wrapper interface with tested declarations for the v2 adapter contract.

- Added support for `renderCallback`.
- Added support for ordinal scales as an alternative to time scales.
- Added `yarn build:examples` script to generate self-contained HTML examples.

## [`v0.6.5`](https://github.com/walterra/react-milestones-vis/tree/v0.6.5)

- Updated `d3-milestones` to `v1.4.7` (6e6c821).
- Updated node requirement to `16.18` (1c0e37d).

## [`v0.6.4`](https://github.com/walterra/react-milestones-vis/tree/v0.6.4)

- Require only node `16.17` instead of `16.18` (730ad36).

## [`v0.6.3`](https://github.com/walterra/react-milestones-vis/tree/v0.6.3)

- Updated `d3-milestones` to `v1.4.6` (03e0d4e).

## [`v0.6.2`](https://github.com/walterra/react-milestones-vis/tree/v0.6.2)

- Updated `d3-milestones` to `v1.4.5` (0975c9c).

## [`v0.6.1`](https://github.com/walterra/react-milestones-vis/tree/v0.6.1)

- Updated `d3-milestones` to `v1.4.4` (62b906a).

## [`v0.6.0`](https://github.com/walterra/react-milestones-vis/tree/v0.6.0)

- Improve React 16/17 compatibility. ([#2](https://github.com/walterra/react-milestones-vis/pull/2))

## [`v0.5.0`](https://github.com/walterra/react-milestones-vis/tree/v0.5.0)

- Updated `d3-milestones` to `v1.4.2` with fixes for `autoResize` (2b6ad46).
- Update storybook with support for urlTarget and custom styles (9357cc7).
- Build `d.ts` files (a1d097d).
- Additional Storybook examples (053a5b8).
- Cleaned up dependencies (89dbb22).

## [`v0.2.0`](https://github.com/walterra/react-milestones-vis/tree/v0.2.0)

- Support all `d3-milestones` options via React props.
- Improved defaults handling.
- Mounting no longer relies on internal element selection but reuses ref.

## [`v0.1.1`](https://github.com/walterra/react-milestones-vis/tree/v0.1.1)

- Fix npm release package.

## [`v0.1.0`](https://github.com/walterra/react-milestones-vis/tree/v0.1.0)

- Initial release.
