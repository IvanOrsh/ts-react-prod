import { DeepPartial } from "@reduxjs/toolkit";

import { StateSchema } from "app/providers/StoreProvider";
import { getCounterValue } from "./getCounterValue";

describe("getCounterValuet", () => {
  test("should return value if provided with state", () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10,
      },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
