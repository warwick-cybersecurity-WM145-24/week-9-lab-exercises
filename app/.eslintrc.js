module.exports = {
  env: {
    browser: false,
    es2021: true,
    node: true,
    commonjs: true
  },
  extends: ["prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  rules: {
    quotes: [2, "double", { avoidEscape: true }],
    semi: ["error", "always"]
  }
};
