import { configureStore } from "@reduxjs/toolkit";

import { counterSlice, counterReducer } from "entities/Counter";
import { userSlice, userReducer } from "entities/User";
import { profileReducer, profileSlice } from "entities/Profile";
import { loginSlice, loginReducer } from "features/AuthByUsername";

// reducer manager
import { createReducerManager } from "./reducerManager";

export interface RootState {
  [counterSlice.name]: ReturnType<typeof counterReducer>;
  [userSlice.name]: ReturnType<typeof userReducer>;
  [loginSlice.name]?: ReturnType<typeof loginReducer>;
  [profileSlice.name]?: ReturnType<typeof profileReducer>;
}

export type RootStateKeys = keyof RootState;

const reducerManager = createReducerManager<RootState>({
  [counterSlice.name]: counterReducer,
  [userSlice.name]: userReducer,
});

export function createReduxStore(initialState?: RootState) {
  const store = configureStore({
    reducer: reducerManager.reducer,
    preloadedState: initialState,
    enhancers: [reducerManager.enhancer],
    devTools: __IS_DEV__,
  });

  return store;
}

export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore["dispatch"];
