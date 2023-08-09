import { StateSchema } from "app/providers/StoreProvider";
import { getProfileData } from "./getProfileData";

describe("getProfileData", () => {
  test("should return profile data if provided with state that has non-empty data", () => {
    const data = {
      firstName: "Ben",
      lastName: "Davis",
      age: 26,
      city: "Paris",
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };

    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test("should return undefined if provided with an empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileData(state as StateSchema)).toBeUndefined();
  });
});
