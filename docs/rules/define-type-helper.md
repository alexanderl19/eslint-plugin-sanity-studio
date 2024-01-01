# Enforce "defineType" helper functions for Sanity schemas (`sanity-studio/define-type-helper`)

💼 This rule is enabled in the ✅ `recommended` config.

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

Sanity does not require the use of "defineType()".
Utilizing this helper function validates the schema while developing, and helps prevent runtime errors.

## Rule Details

This rule requires Sanity schemas to be wrapped with the "defineType" helper function.

Examples of **incorrect** code for this rule:

```js
/*eslint sanity-studio/define-type-helper: "error"*/

export const product = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    // ...
  ],
};
```

Examples of **correct** code for this rule:

```js
/*eslint sanity-studio/define-type-helper: "error"*/

export const product = defineType({
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    // ...
  ],
});
```

## When Not To Use It

If you deem using the "defineType" function unnessary.
This rule can be used independently from "define-field-helper" and "define-array-member-helper".

## Further Reading

- <https://www.sanity.io/docs/schema-field-types#e5642a3e8506>
