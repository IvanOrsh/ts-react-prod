import type { Meta, StoryObj } from "@storybook/react";

import ArticlesPage from "./ArticlesPage";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "pages/ArticlesPage",
  component: ArticlesPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [ThemeDecorator(Theme.LIGHT)],
} satisfies Meta<typeof ArticlesPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
