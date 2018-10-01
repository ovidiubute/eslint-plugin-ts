"use strict";

const docsUrl = require("../util/docsUrl");

module.exports = {
  meta: {
    docs: {
      description: "Disallow the any type annotation.",
      recommended: true,
      url: docsUrl("no-any")
    }
  },
  create: function(context) {
    return {
      TSAnyKeyword: function(node) {
        context.report(
          node,
          'Do not use the "any" type annotation. Try and use a more precise type.'
        );
      }
    };
  }
};
