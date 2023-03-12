const path = require("path");

module.exports = {
  "stories": [
    "../src/stories/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/angular",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "webpackFinal": async (config, { configType }) => {
    return config;
  },
  "configFolder": path.resolve(__dirname, '../../')
}
