module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "simple-import-sort",
    "import",
    "unused-imports",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // For JS objects sorting
    "sort-keys-custom-order/object-keys": [
      "error",
      { orderedKeys: ["id", "name", "title"] },
    ],
    // For TS types sorting
    "sort-keys-custom-order/type-keys": [
      "error",
      { orderedKeys: ["id", "name", "title"] },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "unused-imports/no-unused-imports": "error",
  },
};
