import { DeepPartial } from "@reduxjs/toolkit";

import { StateSchema } from "app/providers/StoreProvider";
import { getLoginPassword } from "./getLoginPassword";

describe("getLoginIsLoading", () => {
  test("should return password field value", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: "password",
      },
    };
    expect(getLoginPassword(state as StateSchema)).toBe("password");
  });

  test("should return empty string is provided state is empty", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toBe("");
  });
});
