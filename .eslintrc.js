module.exports = {
    "extends": [
      "@ada-support/eslint-config-ada",
    ],
    "root": true,
    "settings": {
      "import/resolver": {
        "node": {
          "moduleDirectory": [
            "node_modules",
            "source",
            "static",
          ],
        },
      },
    },
    "rules": {
      "import/no-extraneous-dependencies": [
        "error",
        {
          "devDependencies": [
            "**/*.spec.js",
            "**/*.spec.ts",
            "**/*.spec.tsx",
            "**/*.spec.jsx",
            "webpack.config.js",
            "webpack-docker.config.js",
            "test/**/*",
          ],
        },
      ],
      "no-restricted-imports": [
        "error",
        {
          "patterns": [
            "services/variables/*",
          ],
        },
      ],
      "no-underscore-dangle": [
        "error",
        {
          "allow": [
            "_id",
            "_env",
            "__env",
            "_type",
            "__STORE__",
            "__ResetDependency__",
          ],
        },
      ],
    },
    "overrides": [
      {
        "files": [
          "*.ts",
          "*.tsx",
        ],
        "parserOptions": {
          "project": "tsconfig.json",
          "tsconfigRootDir": __dirname,
        },
        "rules": {
          "@typescript-eslint/no-unnecessary-condition": "warn",
        },
      },
    ],
  };