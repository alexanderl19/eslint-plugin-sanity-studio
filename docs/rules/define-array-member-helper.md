# Enforce "defineArrayMember" helper functions for Sanity schema arrays (`sanity-studio/define-array-member-helper`)

💼 This rule is enabled in the ✅ `recommended` config.

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

Sanity does not require the use of "defineArrayMember()", even when a field is enclosed in "defineField()".
Utilizing this helper function validates the schema while developing, and helps prevent runtime errors.

## Rule Details

This rule requires Sanity array members to be wrapped with the "defineArrayMember" helper function.

Examples of **incorrect** code for this rule:

```js
/*eslint sanity-studio/define-array-member-helper: "error"*/

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
    {
      name: "tags",
      type: "array",
      title: "Tags for item",
      of: [
        {
          type: "object",
          name: "tag",
          fields: [
            { type: "string", name: "label" },
            { type: "string", name: "value" },
          ],
        },
      ],
    },
  ],
};
```

Examples of **correct** code for this rule:

```js
/*eslint sanity-studio/define-array-member-helper: "error"*/

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
    {
      name: "tags",
      type: "array",
      title: "Tags for item",
      of: [
        defineArrayMember({
          type: "object",
          name: "tag",
          fields: [
            { type: "string", name: "label" },
            { type: "string", name: "value" },
          ],
        }),
      ],
    },
  ],
};
```

## When Not To Use It

If you deem using the "defineArrayMember" function unnessary.
This rule can be used independently from "define-type-helper" and "define-field-helper".

## Further Reading

- <https://www.sanity.io/docs/schema-field-types#e5642a3e8506>
