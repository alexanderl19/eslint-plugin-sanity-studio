/**
 * @fileoverview Custom linting rules for Sanity Studio.
 * @author Alexander Liu
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");

module.exports.configs = {
  recommended: {
    plugins: ["sanity-studio"],
    rules: {
      "sanity-studio/define-type-helper": "error",
      "sanity-studio/define-field-helper": "error",
      "sanity-studio/define-array-member-helper": "error",
    },
  },
};

// import processors
module.exports.processors = {
  // add your processors here
};
