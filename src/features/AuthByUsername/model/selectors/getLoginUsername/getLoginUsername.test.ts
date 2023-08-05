import { DeepPartial } from "@reduxjs/toolkit";

import { StateSchema } from "app/providers/StoreProvider";
import { getLoginUsername } from "./getLoginUsername";

describe("getLoginUsername", () => {
  test("should return username field value", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: "user",
      },
    };
    expect(getLoginUsername(state as StateSchema)).toBe("user");
  });

  test("should return empty string is provided state is empty", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toBe("");
  });
});
