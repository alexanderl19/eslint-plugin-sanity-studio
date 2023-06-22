# eslint-plugin-studio

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


