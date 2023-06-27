/**
 * @fileoverview Enforce "defineType" helper functions for Sanity schemas.
 * @author Alexander Liu
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/schema-define-type-helper"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("schema-type-helper", rule, {
  valid: [
    'defineType({ name: "product", type: "document", title: "Product", fields: [] });',
    'var notSchema = { name: "product", type: "not a type" };',
    'var notSchema = { a: "a", b: "b" };',
  ],

  invalid: [
    {
      code: 'var product = { name: "product", type: "document", title: "Product", fields: [] };',
      output:
        'var product = defineType({ name: "product", type: "document", title: "Product", fields: [] });',
      errors: [{ messageId: "missingHelperFunction" }],
    },
  ],
});
