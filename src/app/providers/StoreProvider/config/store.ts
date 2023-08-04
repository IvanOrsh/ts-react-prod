import { configureStore } from "@reduxjs/toolkit";

// experimental, TODO: import from public (index.ts)
// slices
import { counterSlice } from "entities/Counter/model/slice/counterSlice";
import { userSlice } from "entities/User/model/slice/userSlice";
import { loginSlice } from "features/AuthByUsername/model/slice/loginSlice";

// reducers
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { loginReducer } from "features/AuthByUsername";

// reducer manager
import { createReducerManager } from "./reducerManager";

export interface RootState {
  [counterSlice.name]: ReturnType<typeof counterReducer>;
  [userSlice.name]: ReturnType<typeof userReducer>;
  [loginSlice.name]?: ReturnType<typeof loginReducer>;
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
