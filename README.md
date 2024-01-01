# eslint-plugin-sanity-studio

[![npm](https://img.shields.io/npm/v/eslint-plugin-sanity-studio?logo=npm&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Feslint-plugin-sanity-studio)](https://www.npmjs.com/package/eslint-plugin-sanity-studio)
[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/alexanderl19/eslint-plugin-sanity-studio/publish.yml?logo=githubactions&label=publish)](https://github.com/alexanderl19/eslint-plugin-sanity-studio/actions/workflows/publish.yml)

This plugin lints [Sanity schemas](https://www.sanity.io/docs/schema-types) to enforce [helper functions](https://www.sanity.io/docs/schema-field-types#e5642a3e8506).

## Rules

<!-- begin auto-generated rules list -->

💼 Configurations enabled in.\
✅ Set in the `recommended` configuration.\
🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).

| Name                                                                   | Description                                                            | 💼  | 🔧  |
| :--------------------------------------------------------------------- | :--------------------------------------------------------------------- | :-- | :-- |
| [define-array-member-helper](docs/rules/define-array-member-helper.md) | Enforce "defineArrayMember" helper functions for Sanity schema arrays. | ✅  | 🔧  |
| [define-field-helper](docs/rules/define-field-helper.md)               | Enforce "defineField" helper functions for Sanity schema fields.       | ✅  | 🔧  |
| [define-type-helper](docs/rules/define-type-helper.md)                 | Enforce "defineType" helper functions for Sanity schemas.              | ✅  | 🔧  |

<!-- end auto-generated rules list -->

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm install eslint --save-dev
yarn add eslint --dev
pnpm add eslint --save-dev
```

Next, install `eslint-plugin-sanity-studio`:

```sh
npm install eslint-plugin-sanity-studio --save-dev
yarn add eslint-plugin-sanity-studio --dev
pnpm add eslint-plugin-sanity-studio --save-dev
```

## Usage

Add `sanity-studio` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["sanity-studio"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "sanity-studio/rule-name": "error"
  }
}
```

Alternatively, use the recommended configuration by extending `plugin:sanity-studio/recommended`.

```json
{
  "extends": [
    "eslint:recommended",
    // Currently errors for all missing helper functions.
    "plugin:sanity-studio/recommended"
  ]
}
```
