/* eslint-disable indent */
import { StoryFn } from "@storybook/react";

import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { profileReducer } from "entities/Profile";
import { loginReducer } from "features/AuthByUsername";

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  (Story: StoryFn) => (
    <StoreProvider
      initialState={state as StateSchema}
      asyncReducers={
        {
          ...defaultAsyncReducers,
          ...asyncReducers,
        } as DeepPartial<StateSchema>
      }
    >
      <Story />
    </StoreProvider>
  );
