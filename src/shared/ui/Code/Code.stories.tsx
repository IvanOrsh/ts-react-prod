import type { Meta, StoryObj } from "@storybook/react";
import { Code } from "./Code";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Code",
  component: Code,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    text: `
type Curried<A extends any[], R> = 
  <L extends TupleSplit<A, number>['init']>(...args: L) =>
    0 extends L['length'] ? never :
    0 extends TupleSplit<A, L['length']>['rest']['length'] ? R :
    Curried<TupleSplit<A,L['length']>['rest'], R>;

declare function curry<A extends any[], R>(
  f: (...args: A)=>R): Curried<A, R>;

function add(x: number, y: number) {
  return x + y;
}
const curriedAdd = curry(add);

const addTwo = curriedAdd(2); // Curried<[number], number>
const three = addTwo(1); // number
const four = curriedAdd(2,2); // number
const willBeAnError = curriedAdd(); // never
    `,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
} satisfies Meta<typeof Code>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
