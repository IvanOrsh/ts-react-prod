import { StateSchema } from "app/providers/StoreProvider";
import { getProfileIsLoading } from "./getProfileIsLoading";

describe("getProfileIsLoading", () => {
  test("should return isLoading value if provided with state with non-empty isLoading", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };

    expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
  });

  test("should return undefined if provided with an empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileIsLoading(state as StateSchema)).toBeUndefined();
  });
});
