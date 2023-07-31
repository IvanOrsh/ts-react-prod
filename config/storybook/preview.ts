import type { Preview } from "@storybook/react";

import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";

const preview: Preview = {
  decorators: [StyleDecorator, RouterDecorator],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
