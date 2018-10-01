"use strict";

const docsUrl = require("../util/docsUrl");

module.exports = {
  meta: {
    docs: {
      description: "Disallow the any type annotation in TypeScript code.",
      recommended: true,
      url: docsUrl("no-any")
    }
  },
  create: function(context) {
    return {
      VariableDeclaration: function(node) {
        for (let d of node.declarations) {
          if (
            d.id &&
            d.id.type === "Identifier" &&
            d.id.typeAnnotation &&
            d.id.typeAnnotation.type === "TypeAnnotation" &&
            d.id.typeAnnotation.typeAnnotation &&
            d.id.typeAnnotation.typeAnnotation.type === "AnyTypeAnnotation"
          ) {
            context.report(
              node,
              'Do not use the "any" type annotation. Use a stronger type.'
            );
          }
        }
      }
    };
  }
};
