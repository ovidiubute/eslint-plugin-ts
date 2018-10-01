"use strict";

module.exports = {
  rules: {
    "no-any": require("./lib/rules/no-any")
  },
  configs: {
    recommended: {
      plugins: ["ts"],
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {
        "ts/no-any": 2
      }
    },
    all: {
      plugins: ["react"],
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {
        "ts/no-any": 2
      }
    }
  }
};
