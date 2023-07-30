import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { buildFileLoader } from "./loaders/buildFileLoader";

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
  const svgLoader: RuleSetRule = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const fileLoader: RuleSetRule = buildFileLoader();

  const babelLoader: RuleSetRule = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [
          [
            "i18next-extract",
            {
              locales: ["ru", "en"],
              keyAsDefaultValue: ["ru"],
              useI18nextDefaultValue: true,
            },
          ],
        ],
      },
    },
  };

  const cssLoader: RuleSetRule = buildCssLoader(options.isDev);

  const typescriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [svgLoader, fileLoader, babelLoader, typescriptLoader, cssLoader];
}
