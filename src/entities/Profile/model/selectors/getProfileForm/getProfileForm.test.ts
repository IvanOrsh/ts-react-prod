import { StateSchema } from "app/providers/StoreProvider";
import { getProfileForm } from "./getProfileForm";

describe("getProfileForm", () => {
  test("should return form data if provided with state with non-empty form data", () => {
    const form = {
      firstName: "Ben",
      lastName: "Davis",
      age: 26,
      city: "Paris",
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        form,
      },
    };

    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });

  test("should return undefined if provided with an empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileForm(state as StateSchema)).toBeUndefined();
  });
});
