import type { Meta, StoryObj } from "@storybook/react";
import { ArticleCodeBlockComponent } from "./ArticleCodeBlockComponent";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { ArticleBlockType } from "entities/Article/model/types/article";

const meta = {
  title: "entities/Article/ArticleCodeBlockComponent",
  component: ArticleCodeBlockComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    block: {
      id: "4",
      type: ArticleBlockType.CODE,
      code: `
declare function curry<A extends any[], R>(
  f: (...args: A) => R
): <L extends TupleSplit<A, number>['init']>(
    ...args: L
  ) => 0 extends L['length'] ?
    never :
    ((...args: TupleSplit<A, L['length']>['rest']) => R) extends infer F ?
    F extends () => any ? R : F : never;
      `,
    },
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
} satisfies Meta<typeof ArticleCodeBlockComponent>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {};
