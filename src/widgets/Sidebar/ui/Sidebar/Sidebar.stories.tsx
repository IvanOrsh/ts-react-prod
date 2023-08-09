import type { Meta, StoryObj } from "@storybook/react";

import { Sidebar } from "./Sidebar";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
  title: "widgets/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  decorators: [StoreDecorator({}), ThemeDecorator(Theme.LIGHT)],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UnauthenticatedLight: Story = {};

export const AuthenticatedLight: Story = {
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          id: "1",
          username: "user",
        },
      },
    }),
  ],
};

export const UnauthenticatedDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const AuthenticatedDark: Story = {
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          id: "1",
          username: "user",
        },
      },
    }),
    ThemeDecorator(Theme.DARK),
  ],
};
