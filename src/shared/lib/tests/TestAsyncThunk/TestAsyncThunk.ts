/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosStatic } from "axios";
import { AsyncThunkAction } from "@reduxjs/toolkit";

import { RootState } from "app/providers/StoreProvider/config/store";

/* as an example:
  AsyncThunkAction<User, LoginByUsernameProps, {
    rejectValue: string;
    state?: unknown;
    dispatch?: Dispatch<AnyAction>;
    extra?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
  }>
*/

type ActionCreatorType<Returned, Arg, RejectedValue> = (
  arg: Arg,
) => AsyncThunkAction<Returned, Arg, { rejectValue: RejectedValue }>;

jest.mock("axios");

const mockedAxios = jest.mocked(axios, { shallow: false });

export class TestAsyncThunk<Returned, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;
  getState: () => RootState;
  actionCreator: ActionCreatorType<Returned, Arg, RejectedValue>;

  api: jest.MockedFunctionDeep<AxiosStatic>;
  navigate: jest.MockedFn<any>;

  constructor(actionCreator: ActionCreatorType<Returned, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();

    this.api = mockedAxios;
    this.navigate = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, {
      api: this.api,
      navigate: this.navigate,
    });

    return result;
  }
}
