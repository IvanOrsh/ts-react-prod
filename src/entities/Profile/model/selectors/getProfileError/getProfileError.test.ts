import { StateSchema } from "app/providers/StoreProvider";
import { getProfileError } from "./getProfileError";

describe("getProfileError", () => {
  test("should return error if provided with state that has non-undefined error", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: "error",
      },
    };

    expect(getProfileError(state as StateSchema)).toEqual("error");
  });

  test("should return undefined if provided with an empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileError(state as StateSchema)).toBeUndefined();
  });
});
