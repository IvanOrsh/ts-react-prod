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

export class TestAsyncThunk<Returned, Arg, RejectedValue> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: jest.MockedFn<any>;
  getState: () => RootState;
  actionCreator: ActionCreatorType<Returned, Arg, RejectedValue>;

  constructor(actionCreator: ActionCreatorType<Returned, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, undefined);

    return result;
  }
}
