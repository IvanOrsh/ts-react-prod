import { DeepPartial } from "@reduxjs/toolkit";
import { StoryFn } from "@storybook/react";

import { StateSchema, StoreProvider } from "app/providers/StoreProvider";

// eslint-disable-next-line react/display-name
export const StoreDecorator =
  (state: DeepPartial<StateSchema>) => (Story: StoryFn) => (
    <StoreProvider initialState={state as StateSchema}>
      <Story />
    </StoreProvider>
  );
