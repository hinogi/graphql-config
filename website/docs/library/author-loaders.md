---
title: Loaders
---

## Available loaders

- [Schema from GraphQL Endpoint](https://github.com/ardatan/graphql-tools/tree/master/packages/loaders/url)
- [Schema from Introspection result](https://github.com/ardatan/graphql-tools/tree/master/packages/loaders/json-file)
- [Schema and Documents from GraphQL files](https://github.com/ardatan/graphql-tools/tree/master/packages/loaders/graphql-file)
- [Schema and Documents from JavaScript and TypeScript files](https://github.com/ardatan/graphql-tools/tree/master/packages/loaders/code-file)
- [Schema from a file on GitHub](https://github.com/ardatan/graphql-tools/tree/master/packages/loaders/github)
- [Schema from a file on a specific branch of git repository](https://github.com/ardatan/graphql-tools/tree/master/packages/loaders/git)

## Writing loaders

Take a look at some example loaders [here](https://github.com/ardatan/graphql-tools/blob/master/packages/loaders), we also recommend to the explore the [GraphQL File Loader code](https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/graphql-file/src/load-from-gql-file.ts) as you plan your loader.
