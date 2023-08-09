import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "What is your favorite number?",
    options: [
      {
        value: "12",
        content: "12",
      },
      {
        value: "42",
        content: "42",
      },
      {
        value: "24",
        content: "24",
      },
    ],
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
