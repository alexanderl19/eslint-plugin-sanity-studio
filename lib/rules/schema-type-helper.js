/**
 * @fileoverview Enforce "defineType" helper functions for Sanity schemas.
 * @author Alexander Liu
 */
"use strict";

const isSchema = require("../utils/isSchema");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion",

    docs: {
      description: 'Enforce "defineType" helper functions for Sanity schemas.',
      recommended: true,
    },

    fixable: "code",

    schema: [],

    messages: {
      missingHelperFunction: 'Missing helper function "defineType".',
    },
  },

  create(context) {
    return {
      ObjectExpression(node) {
        // Ignore object if it's not a Sanity schema.
        if (!isSchema(node)) return;

        // This rule should only target "types" and not "fields".
        // Ignore if an ancestor is a Sanity schema.
        if (
          context
            .getAncestors(node)
            .reverse()
            .some((node) => node.type === "ObjectExpression" && isSchema(node))
        )
          return;

        // Ignore if object parent is already helper function.
        if (
          node.parent.type === "CallExpression" &&
          node.parent.callee.name === "defineType"
        )
          return;

        context.report({
          node,
          messageId: "missingHelperFunction",
          fix(fixer) {
            return [
              fixer.insertTextBefore(node, "defineType("),
              fixer.insertTextAfter(node, ")"),
            ];
          },
        });
      },
    };
  },
};
