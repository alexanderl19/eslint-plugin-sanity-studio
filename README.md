# eslint-plugin-sanity-studio

[![npm](https://img.shields.io/npm/v/eslint-plugin-sanity-studio?logo=npm&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Feslint-plugin-sanity-studio)](https://www.npmjs.com/package/eslint-plugin-sanity-studio)

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
    "sanity-studio/rule-name": 2
  }
}
```

## Rules

<!-- begin auto-generated rules list -->

TODO: Run eslint-doc-generator to generate the rules list.

<!-- end auto-generated rules list -->
