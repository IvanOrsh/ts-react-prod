import { StateSchema } from "app/providers/StoreProvider";
import { getProfileReadonly } from "./getProfileReadonly";

describe("getProfileReadonly", () => {
  test("should return readonly value if provided with state with non-empty readonly", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    };

    expect(getProfileReadonly(state as StateSchema)).toEqual(true);
  });

  test("should return undefined if provided with an empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileReadonly(state as StateSchema)).toBeUndefined();
  });
});
