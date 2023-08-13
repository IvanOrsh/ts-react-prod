import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";

import { counterSlice, counterReducer } from "entities/Counter";
import { userSlice, userReducer } from "entities/User";
import { profileReducer, profileSlice } from "entities/Profile";
import { loginSlice, loginReducer } from "features/AuthByUsername";
import { articleDetailsSlice, articleDetailsReducer } from "entities/Article";
import { createReducerManager } from "./reducerManager";
import { $api } from "shared/api/api";
import { NavigateFunction } from "react-router-dom";

export interface RootState {
  [counterSlice.name]: ReturnType<typeof counterReducer>;
  [userSlice.name]: ReturnType<typeof userReducer>;
  [loginSlice.name]?: ReturnType<typeof loginReducer>;
  [profileSlice.name]?: ReturnType<typeof profileReducer>;
  [articleDetailsSlice.name]?: ReturnType<typeof articleDetailsReducer>;
}

export type RootStateKeys = keyof RootState;

export function createReduxStore(
  initialState?: RootState,
  asyncReducers?: ReducersMapObject<RootState>,
  navigate?: NavigateFunction,
) {
  const reducerManager = createReducerManager<RootState>({
    [counterSlice.name]: counterReducer,
    [userSlice.name]: userReducer,
    ...asyncReducers,
  });

  const store = configureStore({
    reducer: reducerManager.reducer,
    preloadedState: initialState,
    enhancers: [reducerManager.enhancer],
    devTools: __IS_DEV__,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
            navigate,
          },
        },
      }),
  });

  return store;
}

export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore["dispatch"];
