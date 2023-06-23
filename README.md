# eslint-plugin-studio

> **Warning**
> This is the first eslint plugin I've worked on.
> Dispite my best efforts, this plugin may not follow all best practices.
> Please take this into consideration before using in your project.

Custom linting rules for Sanity Studio.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-studio`:

```sh
npm install eslint-plugin-studio --save-dev
```

## Usage

Add `studio` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "studio"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "studio/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


