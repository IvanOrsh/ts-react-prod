import type { Meta, StoryObj } from "@storybook/react";

import { CommentCard } from "./CommentCard";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "entities/Comment/CommentCard",
  component: CommentCard,
  tags: ["autodocs"],
  args: {
    comment: {
      id: "1",
      text: "you are fired",
      user: {
        id: "2",
        username: "user",
        avatar:
          "https://images.unsplash.com/photo-1616766098946-e4fabb7d6da0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      },
    },
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
} satisfies Meta<typeof CommentCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const Loading: Story = {
  args: {
    comment: {
      id: "1",
      text: "hello",
      user: {
        id: "1",
        username: "admin",
      },
    },
    isLoading: true,
  },
};
export const LoadingDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    comment: {
      id: "1",
      text: "hello",
      user: {
        id: "1",
        username: "admin",
      },
    },
    isLoading: true,
  },
};
