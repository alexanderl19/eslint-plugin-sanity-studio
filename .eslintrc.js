"use strict";

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:eslint-plugin/recommended",
    "plugin:node/recommended",
  ],
  plugins: ["eslint-plugin"],
  rules: {
    "eslint-plugin/require-meta-docs-description": "error",
    "eslint-plugin/require-meta-docs-url": "error",
  },
  env: {
    node: true,
  },
  overrides: [
    {
      files: ["tests/**/*.js"],
      env: { mocha: true },
    },
  ],
};
