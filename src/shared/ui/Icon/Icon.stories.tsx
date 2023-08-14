import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

import EyeSvg from "shared/assets/icons/eye-20-20.svg";

const meta = {
  title: "shared/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [ThemeDecorator(Theme.LIGHT)],
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    Svg: EyeSvg,
  },
};

export const Dark: Story = {
  args: {
    Svg: EyeSvg,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
