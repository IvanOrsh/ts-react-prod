import type { Meta, StoryObj } from "@storybook/react";
import { CommentList } from "./CommentList";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
const meta = {
  title: "/CommentList",
  component: CommentList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [ThemeDecorator(Theme.LIGHT)],
} satisfies Meta<typeof CommentList>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {};
