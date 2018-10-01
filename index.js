"use strict";

module.exports = {
  rules: {
    "no-any": require("./lib/rules/no-any")
  },
  configs: {
    recommended: {
      plugins: ["ts"],
      parser: "typescript-eslint-parser",
      rules: {
        "ts/no-any": 2
      }
    },
    all: {
      plugins: ["ts"],
      parser: "typescript-eslint-parser",
      rules: {
        "ts/no-any": 2
      }
    }
  }
};
