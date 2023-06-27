"use strict";

/** @type {(node: import('estree').ObjectExpression) => boolean} */
const isArray = (node) => {
  return (
    node.properties.find(
      (property) =>
        property.type === "Property" &&
        property.key.name === "type" &&
        property.value.value === "array"
    ) &&
    node.properties.find(
      (property) =>
        property.type === "Property" &&
        property.key.name === "name" &&
        property.value
    ) &&
    node.properties.find(
      (property) =>
        property.type === "Property" &&
        property.key.name === "of" &&
        property.value.type === "ArrayExpression"
    )
  );
};

module.exports = isArray;
