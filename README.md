# eslint-plugin-sanity-studio

[![npm](https://img.shields.io/npm/v/eslint-plugin-sanity-studio?logo=npm&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Feslint-plugin-sanity-studio)](https://www.npmjs.com/package/eslint-plugin-sanity-studio)
[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/alexanderl19/eslint-plugin-sanity-studio/publish.yml?logo=githubactions)](https://github.com/alexanderl19/eslint-plugin-sanity-studio/actions/workflows/publish.yml)

> **Warning**
>
> This is my first attempt at creating an eslint plugin.
> Dispite my best efforts, it may not adhere to all best practices.
> Please keep this in mind before incorporating into your projects.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-sanity-studio`:

```sh
npm install eslint-plugin-sanity-studio --save-dev
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

## Rules

<!-- begin auto-generated rules list -->

🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).

| Name                                                                   | Description                                                            | 🔧  |
| :--------------------------------------------------------------------- | :--------------------------------------------------------------------- | :-- |
| [define-array-member-helper](docs/rules/define-array-member-helper.md) | Enforce "defineArrayMember" helper functions for Sanity schema arrays. | 🔧  |
| [define-field-helper](docs/rules/define-field-helper.md)               | Enforce "defineField" helper functions for Sanity schema fields.       | 🔧  |
| [define-type-helper](docs/rules/define-type-helper.md)                 | Enforce "defineType" helper functions for Sanity schemas.              | 🔧  |

<!-- end auto-generated rules list -->
