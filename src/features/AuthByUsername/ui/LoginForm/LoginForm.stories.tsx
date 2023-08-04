import type { Meta, StoryObj } from "@storybook/react";

import LoginForm from "./LoginForm";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "features/auth/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    StoreDecorator({
      loginForm: {
        username: "John",
        password: "pass123",
      },
    }),
    ThemeDecorator(Theme.LIGHT),
  ],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [
    StoreDecorator({
      loginForm: {
        username: "Admin",
        password: "qwerty",
      },
    }),
  ],
};
export const Dark: Story = {
  decorators: [
    StoreDecorator({
      loginForm: {
        username: "John",
        password: "pass123",
      },
    }),
    ThemeDecorator(Theme.DARK),
  ],
};
export const WithError: Story = {
  decorators: [
    StoreDecorator({
      loginForm: {
        username: "John",
        password: "pass123",
        error: "Error",
      },
    }),
  ],
};
export const Loading: Story = {
  decorators: [
    StoreDecorator({
      loginForm: {
        username: "John",
        password: "pass123",
        isLoading: true,
      },
    }),
  ],
};
