import type { Meta, StoryObj } from "@storybook/react";

import ProfilePage from "./ProfilePage";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
  title: "page/ProfilePage",
  component: ProfilePage,
  tags: ["autodocs"],
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          id: "1",
          username: "admin",
        },
      },
    }),
  ],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
