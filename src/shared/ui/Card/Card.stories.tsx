import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";
import { Text } from "../Text/Text";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [ThemeDecorator(Theme.LIGHT)],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <Text title="title" text="text" />,
  },
};
