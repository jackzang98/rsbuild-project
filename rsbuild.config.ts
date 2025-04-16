import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  plugins: [pluginReact()],
  output: {
    sourceMap: {
      js: isDev ? 'cheap-module-source-map' : 'source-map',
      css: true,
    },
  },
  tools: {
    rspack(config) {
      // 只在开发环境下使用
      if (isDev) {
        config.plugins?.push(
          new ForkTsCheckerWebpackPlugin({
            async: false, // 同步输出错误信息，终端立刻看到
            typescript: {
              diagnosticOptions: {
                semantic: true,
                syntactic: true,
              },
              mode: 'write-tsbuildinfo',
              // 使用你的 tsconfig 文件
              configFile: './tsconfig.json',
            },
          }),
        );
      }
    },
  },
  dev: {
    client: {
      overlay: false,
    },
  },
});
