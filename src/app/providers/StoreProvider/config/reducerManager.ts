/* eslint-disable indent */
import {
  combineReducers,
  ReducersMapObject,
  CombinedState,
  Reducer,
  StoreEnhancer,
} from "@reduxjs/toolkit";

type OnlyOptionalKeys<State> = keyof {
  [K in keyof State as [undefined] extends [State[K]] ? K : never]: true;
};

export interface ReducerManager<State> {
  getReducerMap: () => ReducersMapObject<State>;
  reducer: Reducer<CombinedState<State>>;
  add: <K extends keyof State>(
    key: K,
    reducer: Reducer<Exclude<State[K], undefined>>,
  ) => void;
  remove: (key: OnlyOptionalKeys<State>) => void;
  enhancer: StoreEnhancer<{ reducerManager: ReducerManager<State> }>;
}

export function createReducerManager<State>(
  initialReducers: ReducersMapObject<State>,
) {
  // Create an object which maps keys to reducers
  const reducers = { ...initialReducers };

  // Create the initial combinedReducer
  let combinedReducer = combineReducers(reducers);

  // An array which is used to delete state keys when reducers are removed
  let keysToRemove: (keyof State)[] = [];

  const reducerManager: ReducerManager<State> = {
    getReducerMap: () => reducers,

    // The root reducer function exposed by this object
    // This will be passed to the store
    reducer: (state, action) => {
      // If any reducers have been removed, clean up their state first
      if (keysToRemove.length > 0) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        state = { ...state } as any;
        for (const key of keysToRemove) {
          delete state![key];
        }
        keysToRemove = [];
      }

      // Delegate to the combined reducer
      return combinedReducer(state, action);
    },

    // Adds a new reducer with the specified key
    add: (key, reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      // Add the reducer to the reducer mapping
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      reducers[key] = reducer as any;

      // Generate a new combined reducer
      combinedReducer = combineReducers(reducers);
    },

    // Removes a reducer with the specified key
    remove: (k) => {
      const key = k as keyof State;

      if (!key || !reducers[key]) {
        return;
      }

      // Remove it from the reducer mapping
      delete reducers[key];

      // Add the key to the list of keys to clean up
      keysToRemove.push(key);

      // Generate a new combined reducer
      combinedReducer = combineReducers(reducers);
    },

    enhancer:
      (next) =>
      (...args) => {
        const store = next(...args);
        return {
          ...store,
          reducerManager,
        };
      },
  };
  return reducerManager;
}
