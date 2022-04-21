module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    {
      "name": "@storybook/addon-essentials",
      "options": {}
    },
    "@storybook/addon-interactions",
    "@storybook/addon-jest",
    {
      "name": '@storybook/preset-scss',
      "options": {
        "cssLoaderOptions": {
          "modules": {
            "localIdentName": "[name]__[local]--[hash:base64:5]"
          }
        }
      }
    },
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "typescript": {
    "reactDocgen": 'react-docgen-typescript',
    "reactDocgenTypescriptOptions": {
      "compilerOptions": {
        "allowSyntheticDefaultImports": false,
        "esModuleInterop": false
      }
    }
  },
  "staticDirs": ['../public']
}