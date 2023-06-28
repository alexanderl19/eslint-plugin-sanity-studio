# Enforce "defineField" helper functions for Sanity schema fields (`sanity-studio/define-field-helper`)

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

Sanity does not require the use of "defineField()", even when the schema is enclosed in "defineType()".
Utilizing this helper function validates the schema while developing, and helps prevent runtime errors.

## Rule Details

This rule requires Sanity schema fields to be wrapped with the "defineField" helper function.

Examples of **incorrect** code for this rule:

```js
/*eslint sanity-studio/define-field-helper: "error"*/

export const product = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "productName",
      type: "string",
      title: "Product name",
    },
    // ...
  ],
};
```

Examples of **correct** code for this rule:

```js
/*eslint sanity-studio/define-field-helper: "error"*/

export const product = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    defineField({
      name: "productName",
      type: "string",
      title: "Product name",
    }),
    // ...
  ],
};
```

## When Not To Use It

If you deem using the "defineField" function unnessary.
This rule can be used independently from "define-type-helper" and "define-array-member-helper".

## Further Reading

- <https://www.sanity.io/docs/schema-field-types#e5642a3e8506>
