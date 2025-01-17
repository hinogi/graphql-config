---
title: GraphQLConfig
---

The `GraphQLConfig` object is instantiated by calling [`loadConfig`](author-load-config).

A basic usage:

```ts
import { loadConfig } from 'graphql-config'

async function main() {
  const config = await loadConfig({ ... }) // an instance of GraphQLConfig
}
```

## API

### `filepath`

_type: `string`_

An exact path of a config file.

### `dirpath`

_type: `string`_

A path of a directory where GraphQL Config was found.

### `extensions`

_type: `GraphQLExtensionsRegistry`_

A registry of provided extensions.

### `projects`

_type: `{ [projectName: string]: GraphQLProjectConfig }`_

A key-value object where key is a project's name but value contains [`GraphQLProjectConfig`](api-graphql-project-config) object.

### `getProject()`

_type: `getProject(name?: string): GraphQLProjectConfig | never`_

Accepts single argument, which is a project's name and returns that project. When no name is provided, it resolves with a default project.

### `getDefault()`

_type: `getDefault(): GraphQLProjectConfig | never`_

Returns a default project.

### `getProjectForFile()`

_type: `getProjectForFile(filepath: string): GraphQLProjectConfig | never`_

Allows to get project based on a file path. It might be a path to a GraphQL file that contains SDL or Operations and Fragments but also any file [included](../user/user-usage#include-exclude) in the project.
