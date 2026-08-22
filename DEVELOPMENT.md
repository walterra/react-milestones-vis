# Development notes

## Validation

```bash
yarn check:all
yarn test:supported
nyarn build
yarn build-storybook
```

Visual regression tests additionally require `HTML2IMG_RENDER_URL` and `HTML2IMG_API_KEY`.

## Examples

To generate self-contained example HTML files:

1. Run `yarn build`.
2. Run `yarn build:examples`.

The generated files in `examples/` bundle their dependencies and are used by visual regression tests.

## Releasing

Add a Changeset for every publishable change:

```bash
yarn changeset
```

Commit the generated `.changeset/*.md` file with the change. Merges to `main` create or update an automated release PR; merging that PR publishes to npm and deploys Storybook.

See [docs/RELEASE_PROCESS.md](./docs/RELEASE_PROCESS.md) for setup, security, and emergency-release details.
