/**
 * @fileoverview Enforce "defineArrayMember" helper functions for Sanity schema arrays.
 * @author Alexander Liu
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/define-array-member-helper"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("schema-define-array-member-helper", rule, {
  valid: [
    'defineField({ name: "tags", type: "array", title: "Tags for item", of: []});',
    'defineField({ name: "tags", type: "array", title: "Tags for item", of: [defineArrayMember({type: "object", name: "tag", fields: [{ type: "string", name: "label"}, {type: "string", name: "value" }]})]});',
    'var notArray = { name: "tags", type: "string", of: []};',
  ],

  invalid: [
    {
      code: 'defineField({ name: "tags", type: "array", title: "Tags for item", of: [{type: "object", name: "tag", fields: [{ type: "string", name: "label"}, {type: "string", name: "value" }]}]});',
      output:
        'defineField({ name: "tags", type: "array", title: "Tags for item", of: [defineArrayMember({type: "object", name: "tag", fields: [{ type: "string", name: "label"}, {type: "string", name: "value" }]})]});',
      errors: [{ messageId: "missingHelperFunction" }],
    },
  ],
});
