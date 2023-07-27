import { Configuration } from "webpack";

import { BuildOptions } from "./types/config";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { mode, paths, isDev } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },

    devServer: isDev ? buildDevServer(options) : undefined,
    devtool: isDev ? "inline-source-map" : undefined,

    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    plugins: buildPlugins(options),
  };
}
