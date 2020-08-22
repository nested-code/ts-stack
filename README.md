
## Adding Packages

New services and apps should be added in their respective package paths, `packages/backend/` and `packages/frontend`.

To compile with Typescript, they'll need their path added to the root `tsconfig.json`, e.g. `references: [{ "path": "packages/backend/new-service" }]`.

Due to [Yarn workspace](https://classic.yarnpkg.com/en/docs/workspaces/) config, dev dependencies are shared between projects and hoisted to the workspace root. If this presents problems, a `nohoist` config for specific packages can be used - [see more](https://classic.yarnpkg.com/blog/2018/02/15/nohoist/).

