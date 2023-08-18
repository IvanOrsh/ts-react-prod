import type { Meta, StoryObj } from "@storybook/react";

import { CommentList } from "./CommentList";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "entities/Comment/CommentList",
  component: CommentList,
  args: {
    comments: [
      {
        id: "1",
        text: "some comment",
        user: {
          id: "1",
          username: "admin",
          avatar:
            "https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        },
      },
      {
        id: "2",
        text: "some comment 2",
        user: {
          id: "2",
          username: "user",
          avatar:
            "https://images.unsplash.com/photo-1616766098946-e4fabb7d6da0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        },
      },
      {
        id: "3",
        text: "some comment 3",
        user: {
          id: "1",
          username: "admin",
          avatar:
            "https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        },
      },
    ],
  },
  tags: ["autodocs"],
  decorators: [ThemeDecorator(Theme.LIGHT)],
} satisfies Meta<typeof CommentList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const Loading: Story = {
  args: {
    comments: [],
    isLoading: true,
  },
};
export const LoadingDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    comments: [],
    isLoading: true,
  },
};
