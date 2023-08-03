import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";

export function createReduxStore(initialState?: StateSchema) {
  // <S = any, A extends Action = AnyAction, M extends Middlewares<S>
  // state
  // action
  // middleware
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    preloadedState: initialState,
    devTools: __IS_DEV__,
  });
}
