import type { Meta, StoryObj } from "@storybook/react";

import { Navbar } from "./Navbar";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
  title: "widgets/Navbar",
  component: Navbar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  decorators: [ThemeDecorator(Theme.LIGHT)],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Authenticated: Story = {
  decorators: [
    StoreDecorator({
      user: {
        authData: {},
      },
    }),
  ],
};

export const AuthenticatedDark: Story = {
  decorators: [
    StoreDecorator({
      user: {
        authData: {},
      },
    }),
    ThemeDecorator(Theme.DARK),
  ],
};

export const NotAuthenticated: Story = {
  decorators: [StoreDecorator({})],
};
export const NotAuthenticatedDark: Story = {
  decorators: [StoreDecorator({}), ThemeDecorator(Theme.DARK)],
};
