"use strict";

const types = require("./schemaTypes");

/** @type {(node: import('estree').ObjectExpression) => boolean} */
const isSchemaObject = (node) => {
  return (
    node.properties.find(
      (property) =>
        property.type === "Property" &&
        property.key.name === "type" &&
        types.includes(property.value.value)
    ) &&
    node.properties.find(
      (property) =>
        property.type === "Property" &&
        property.key.name === "name" &&
        property.value
    )
  );
};

module.exports = isSchemaObject;
