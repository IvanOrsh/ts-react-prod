import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { StateSchema } from "./StateSchema";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { loginReducer } from "features/AuthByUsername";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  loginForm: loginReducer,
});

export function createReduxStore(initialState?: StateSchema) {
  // <S = any, A extends Action = AnyAction, M extends Middlewares<S>
  // state
  // action
  // middleware

  return configureStore<StateSchema>({
    reducer: rootReducer,
    preloadedState: initialState,
    devTools: __IS_DEV__,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore["dispatch"];
