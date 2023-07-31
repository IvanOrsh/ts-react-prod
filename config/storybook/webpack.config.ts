import path from "path";
import { Configuration } from "webpack";

import { BuildPaths } from "../build/types/config";
import { buildFileLoader } from "../build/loaders/buildFileLoader";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { buildSvgLoader } from "../build/loaders/buildSvgLoader";

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };

  // This modifies the existing image rule to exclude '.svg' files
  // since we handle those with '@svgr/webpack' (in buildSvgLoader)
  // solution copied from https://github.com/storybookjs/storybook/issues/18557
  const imageRule = config.module?.rules?.find((rule) => {
    if (rule && typeof rule !== "string" && rule.test instanceof RegExp) {
      return rule.test.test(".svg");
    }
  });
  if (imageRule && typeof imageRule !== "string") {
    imageRule.exclude = /\.svg$/;
  }

  config.resolve!.modules!.push(paths.src);
  config.module!.rules!.push(buildSvgLoader());
  config.module!.rules!.push(buildFileLoader());
  config.resolve!.extensions!.push(".ts", "tsx");

  config.module!.rules!.push(buildCssLoader(true));

  return config;
};
