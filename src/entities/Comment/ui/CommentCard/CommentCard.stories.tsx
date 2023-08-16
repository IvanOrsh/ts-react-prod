import type { Meta, StoryObj } from "@storybook/react";
import { CommentCard } from "./CommentCard";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
const meta = {
  title: "/CommentCard",
  component: CommentCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    comment: {
      id: "1",
      text: "you are fired",
      user: {
        id: "1",
        username: "admin",
      },
      // articleId: "1",
    },
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
} satisfies Meta<typeof CommentCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {};
