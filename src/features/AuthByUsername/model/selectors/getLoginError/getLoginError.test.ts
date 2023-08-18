import { getLoginError } from "./getLoginError";
import { StateSchema } from "app/providers/StoreProvider";

describe("getLoginError", () => {
  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: "error message",
      },
    };
    expect(getLoginError(state as StateSchema)).toEqual("error message");
  });

  test("should return undefined if provided state is empty", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginError(state as StateSchema)).toBeUndefined();
  });
});
