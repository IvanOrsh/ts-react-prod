import type { Meta, StoryObj } from "@storybook/react";

import { Text, TextSize, TextTheme } from "./Text";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Text",
  component: Text,
  tags: ["autodocs"],
  decorators: [ThemeDecorator(Theme.LIGHT)],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Title lorem ipsum",
    text: "Description some stuffs",
  },
};

export const SizeL: Story = {
  args: {
    title: "Title lorem ipsum",
    text: "Description some stuffs",
    size: TextSize.L,
  },
};

export const Error: Story = {
  args: {
    theme: TextTheme.ERROR,
    title: "Title lorem ipsum",
    text: "Description some stuffs",
  },
};

export const OnlyTitle: Story = {
  args: {
    title: "Only Title",
  },
};
export const OnlyText: Story = {
  args: {
    text: "just text and nothing else",
  },
};

export const Dark: Story = {
  args: {
    title: "Title lorem ipsum",
    text: "Description some stuffs",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ErrorDark: Story = {
  args: {
    theme: TextTheme.ERROR,
    title: "Title lorem ipsum",
    text: "Description some stuffs",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
