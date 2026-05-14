# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Bump version 1.0.0 → 0.1.0 in preparation for npm publication.
- `peerDependencies["@mosaic-code/test-data-factory"]` retargeted from
  `file:../test-data-api` to `^0.1.0` (published on npm registry).
- Untrack `dist/` from git; rely on `npm run build`.
- `src/image-validation.test.ts` imports `validateImageUrls` from the
  `@mosaic-code/test-data-factory` package name (was a relative path into a sibling repo).
- `tsconfig.json` no longer includes `../test-data-api/src/**/*`; `rootDir` is
  set to `./src` and test files are excluded from the build output.
- Added `files: ["dist"]` to `package.json` so `npm publish` ships only
  compiled output.

### Added

- ESLint flat config (typescript-eslint recommended) + Prettier.
- `lint`, `lint:fix`, `format`, `format:check`, `typecheck` scripts.
- CI runs lint, format check, typecheck, build, then tests (offline
  validation only — image-URL suite excluded by default).

### Notes

This package cannot be published to npm until `test-data-factory@0.1.0` is
published and the peer-dep is repointed to a real semver. CI on GitHub
Actions will fail to install dependencies until then for the same reason.

<!-- Insert future releases below -->
