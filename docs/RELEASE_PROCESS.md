# Release process

`react-milestones-vis` uses Changesets and GitHub Actions for automated releases.

## Contributor workflow

For every publishable change, create and commit a changeset:

```bash
yarn changeset
```

Select `patch`, `minor`, or `major` and provide a user-facing summary. Documentation-only and internal CI changes do not require a changeset.

## Automated release flow

1. Merge a PR containing one or more changesets into `main`.
2. The release workflow creates or updates a release PR.
3. Changesets aggregates release notes and updates `package.json` and `CHANGELOG.md`.
4. Review and merge the release PR.
5. GitHub Actions verifies types, lint, React 18 and 19 tests, the package build, and Storybook.
6. npm trusted publishing publishes the package with provenance.
7. Changesets creates the Git tag and GitHub release.
8. Storybook is deployed to GitHub Pages.

## Required repository configuration

- GitHub App installed on this repository with contents and pull-request read/write permissions.
- Actions variable `APP_ID` containing the GitHub App ID.
- Actions secret `APP_PRIVATE_KEY` containing its private key.
- GitHub environment `npm-publish`, optionally protected by required reviewers.
- npm trusted publisher configured for `.github/workflows/release.yml` and environment `npm-publish`.

No long-lived npm token is required. The workflow uses GitHub OIDC and npm provenance.

## Local commands

```bash
yarn changeset          # describe a publishable change
yarn version-packages   # apply pending versions locally
yarn prepublishOnly     # run publication checks and build
yarn release            # publish; automation normally runs this
```

## Emergency release

Use the automated release PR whenever possible. If automation is unavailable, apply versions with `yarn version-packages`, run `yarn prepublishOnly`, and publish only from an authenticated, trusted environment.
