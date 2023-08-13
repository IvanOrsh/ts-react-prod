import type { Meta, StoryObj } from "@storybook/react";

import ArticleDetailsPage from "./ArticleDetailsPage";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "page/ArticleDetailsPage",
  component: ArticleDetailsPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [ThemeDecorator(Theme.LIGHT)],
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
