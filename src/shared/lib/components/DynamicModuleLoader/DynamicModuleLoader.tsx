import { PropsWithChildren, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Reducer } from "@reduxjs/toolkit";

import {
  AsyncReducersKey,
  RootStateKeys,
  StateSchemaKey,
} from "app/providers/StoreProvider";
import { useAppStore } from "shared/lib/hooks";

export type ReducersList = {
  [name in RootStateKeys]?: Reducer;
};

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = (
  props: PropsWithChildren<DynamicModuleLoaderProps>,
) => {
  const { reducers, removeAfterUnmount, children } = props;

  //===================
  // TODO: to be fixed!
  const store = useAppStore();
  const debugDispatch = useDispatch();

  // add reducer with component is mounted
  // this component is supposed to be async (only used as with React.lazy)
  // loginReducer must be loaded when the component is loaded
  useEffect(() => {
    Object.entries(reducers).forEach(([reducerName, reducer]) => {
      store.reducerManager.add(reducerName as StateSchemaKey, reducer);
      debugDispatch({ type: `@INIT ${reducerName} reducer` });
    });

    // when unmounted, loginReducer must be removed by store.reducerManager
    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([reducerName, _]) => {
          store.reducerManager.remove(reducerName as AsyncReducersKey);
          debugDispatch({ type: `@DESTROY ${reducerName} reducer` });
        });
      }
    };
    // only need to add loginReducer once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //===================

  return <>{children}</>;
};
