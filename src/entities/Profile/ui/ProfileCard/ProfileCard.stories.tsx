import type { Meta, StoryObj } from "@storybook/react";

import { ProfileCard } from "./ProfileCard";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "entities/ProfilePage",
  component: ProfileCard,
  tags: ["autodocs"],
  args: {
    data: {
      username: "doc",
      age: 40,
      avatar:
        "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80",
      city: "Denver",
      firstName: "John",
      lastName: "Doe",
    },
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const Error: Story = {
  args: {
    error: "error",
  },
};
