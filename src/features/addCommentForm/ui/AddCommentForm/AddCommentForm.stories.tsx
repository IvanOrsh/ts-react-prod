import type { Meta, StoryObj } from "@storybook/react";

import AddCommentForm from "./AddCommentForm";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
  title: "features/addComment/AddCommentForm",
  component: AddCommentForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onSendComment: { action: "onSendComment" },
  },
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      addCommentForm: {
        text: "",
      },
    }),
  ],
} satisfies Meta<typeof AddCommentForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const Orange: Story = {
  decorators: [ThemeDecorator(Theme.ORANGE)],
};
