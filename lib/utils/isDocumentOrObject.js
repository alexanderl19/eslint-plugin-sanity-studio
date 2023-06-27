"use strict";

/** @type {(node: import('estree').ObjectExpression) => boolean} */
const isDocumentOrObject = (node) => {
  return (
    node.properties.find(
      (property) =>
        property.type === "Property" &&
        property.key.name === "type" &&
        (property.value.value === "document" ||
          property.value.value === "object")
    ) &&
    // Objects in arrays don't need to have names.
    // Ignoring this for now.

    // node.properties.find(
    //   (property) =>
    //     property.type === "Property" &&
    //     property.key.name === "name" &&
    //     property.value
    // ) &&
    node.properties.find(
      (property) =>
        property.type === "Property" &&
        property.key.name === "fields" &&
        property.value.type === "ArrayExpression"
    )
  );
};

module.exports = isDocumentOrObject;
