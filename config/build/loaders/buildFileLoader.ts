export function buildFileLoader() {
  return {
    test: /\.(jpe?g|png|gif|ico|eot|ttf|woff2?)(\?v=\d+\.\d+\.\d+)?$/i,
    type: "asset/resource",
    generator: {
      filename: "fonts/[name][ext][query]",
    },
  };
}
