import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  output: {
    sourceMap: {
      js: process.env.NODE_ENV === 'development' ? 'cheap-module-source-map' : 'source-map',
      css: true,
    },
  },
});
  