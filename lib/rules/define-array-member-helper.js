/**
 * @fileoverview Enforce "defineArrayMember" helper functions for Sanity schema arrays.
 * @author Alexander Liu
 */
"use strict";

const isArray = require("../utils/isArray");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion",

    docs: {
      description:
        'Enforce "defineArrayMember" helper functions for Sanity schema arrays.',
      recommended: true,
    },

    fixable: "code",

    schema: [],

    messages: {
      missingHelperFunction:
        'Missing helper function "defineArrayMember" on array member.',
    },
  },

  create(context) {
    return {
      ObjectExpression(node) {
        // Ignore object if it's not an array.
        if (!isArray(node)) return;

        // `isArray` checks if the `of` property exists and is an `ArrayExpression`.
        // That being said, explicitly defining the type is probably still not optimal.
        /** @type {import('estree').ArrayExpression} */
        const members = node.properties.find(
          (property) =>
            property.type === "Property" &&
            property.key.name === "of" &&
            property.value.type === "ArrayExpression"
        ).value;

        if (!members) return;

        members.elements.map((element) => {
          if (!element) return;
          if (
            element.type === "CallExpression" &&
            element.callee.name === "defineArrayMember"
          )
            return;

          // Ignore "SpreadElement"s for now. Is there a good way to test this?
          if (element.type === "SpreadElement") return;

          context.report({
            node: element,
            messageId: "missingHelperFunction",
            fix(fixer) {
              return [
                fixer.insertTextBefore(element, "defineArrayMember("),
                fixer.insertTextAfter(element, ")"),
              ];
            },
          });
        });
      },
    };
  },
};
