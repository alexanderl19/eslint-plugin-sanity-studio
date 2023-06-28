# eslint-plugin-sanity-studio

> **Warning**
>
> This is my first attempt at creating an eslint plugin.
> Dispite my best efforts, it may not adhere to all best practices.
> Please keep this in mind before incorporating into your projects.

Custom linting rules for Sanity Studio.

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
