import { Decorator, StoryFn } from "@storybook/react";

import "app/styles/index.scss";

export const StyleDecorator: Decorator = (Story: StoryFn, { _args }) => (
  <Story />
);
