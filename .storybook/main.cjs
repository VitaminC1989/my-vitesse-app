const path = require('path');
const Inspect = require('vite-plugin-inspect');
const Unocss = require('unocss/vite');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  // stroybook 配置 unocss
  async viteFinal(config, { configType }) {
    config.resolve.alias['~'] = `${path.resolve(__dirname, 'src')}/`;
    config.plugins.push(Unocss.default());
    config.plugins.push(Inspect());
    return config;
  }
}
