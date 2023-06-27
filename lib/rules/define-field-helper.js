/**
 * @fileoverview Enforce "defineField" helper functions for Sanity schema fields.
 * @author Alexander Liu
 */
"use strict";

const isDocumentOrObject = require("../utils/isDocumentOrObject");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion",

    docs: {
      description:
        'Enforce "defineField" helper functions for Sanity schema fields.',
      recommended: true,
    },

    fixable: "code",

    schema: [],

    messages: {
      missingHelperFunction: 'Missing helper function "defineField" on field.',
    },
  },

  create(context) {
    return {
      ObjectExpression(node) {
        // Ignore object if it's not a schema type that contains fields.
        if (!isDocumentOrObject(node)) return;

        // `isDocumentOrObject` checks if the `fields` property exists and is an `ArrayExpression`.
        // That being said, explicitly defining the type is probably still not optimal.
        /** @type {import('estree').ArrayExpression} */
        const fields = node.properties.find(
          (property) =>
            property.type === "Property" &&
            property.key.name === "fields" &&
            property.value.type === "ArrayExpression"
        ).value;

        if (!fields) return;

        fields.elements.map((element) => {
          if (!element) return;
          if (
            element.type === "CallExpression" &&
            element.callee.name === "defineField"
          )
            return;

          // Ignore "SpreadElement"s for now. Is there a good way to test this?
          if (element.type === "SpreadElement") return;

          context.report({
            node: element,
            messageId: "missingHelperFunction",
            fix(fixer) {
              return [
                fixer.insertTextBefore(element, "defineField("),
                fixer.insertTextAfter(element, ")"),
              ];
            },
          });
        });
      },
    };
  },
};
