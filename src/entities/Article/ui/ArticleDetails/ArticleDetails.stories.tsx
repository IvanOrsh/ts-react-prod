import type { Meta, StoryObj } from "@storybook/react";
import { ArticleDetails } from "./ArticleDetails";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
const meta = {
  title: "entities/ArticleDetails",
  component: ArticleDetails,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    id: "1",
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
} satisfies Meta<typeof ArticleDetails>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {};
