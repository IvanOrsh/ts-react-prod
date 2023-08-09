import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    placeholder: "Enter your name",
    value: "Uncle Bob",
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Readonly: Story = {
  args: {
    readonly: true,
  },
};
