"use strict";

module.exports = {
  rules: {
    "no-any": require("./lib/rules/no-any")
  },
  configs: {
    recommended: {
      plugins: ["ts"],
      rules: {
        "ts/no-any": 2
      }
    },
    all: {
      plugins: ["ts"],
      rules: {
        "ts/no-any": 2
      }
    }
  }
};
