/**
 * @fileoverview Enforce "defineField" helper functions for Sanity schema fields.
 * @author Alexander Liu
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/define-field-helper"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("schema-define-field-helper", rule, {
  valid: [
    'defineType({ name: "product", type: "document", title: "Product", fields: []});',
    'defineType({ name: "product", type: "document", title: "Product", fields: [defineField({ name: "productName", type: "string", title: "Product name" })]});',
    'var notDocumentOrObject = { name: "product", type: "string", fields: []};',
  ],

  invalid: [
    {
      code: 'defineType({ name: "product", type: "document", title: "Product", fields: [{ name: "productName", type: "string", title: "Product name" }]});',
      output:
        'defineType({ name: "product", type: "document", title: "Product", fields: [defineField({ name: "productName", type: "string", title: "Product name" })]});',
      errors: [{ messageId: "missingHelperFunction" }],
    },
    {
      code: 'defineField({ name: "tags", type: "array", title: "Tags for item", of: [defineArrayMember({ type: "object", name: "tag", fields: [{ type: "string", name: "label" }, defineField({type: "string", name: "value" })]})]});',
      output:
        'defineField({ name: "tags", type: "array", title: "Tags for item", of: [defineArrayMember({ type: "object", name: "tag", fields: [defineField({ type: "string", name: "label" }), defineField({type: "string", name: "value" })]})]});',
      errors: [{ messageId: "missingHelperFunction" }],
    },
  ],
});
