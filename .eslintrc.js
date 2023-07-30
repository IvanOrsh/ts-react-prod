module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:i18next/recommended", "plugin:react/recommended", "plugin:storybook/recommended"],
  overrides: [{
    env: {
      node: true
    },
    files: [".eslintrc.{js,cjs}"],
    parserOptions: {
      sourceType: "script"
    }
  }],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "react", "i18next", "prettier"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    // note you must disable the base rule as it can report incorrect errors
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn",
    // or "error"
    {
      argsIgnorePattern: "^_",
      varsIgnorePattern: "^_",
      caughtErrorsIgnorePattern: "^_"
    }],
    // 'React' must be in scope when using JSX
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react/jsx-filename-extension": [1, {
      extensions: [".js", ".jsx", ".ts", ".tsx"]
    }]
  }
};