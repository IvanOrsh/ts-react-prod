import { StateSchema } from "app/providers/StoreProvider";
import { getProfileValidateErrors } from "./getProfileValidateErrors";
import { ValidateProfileError } from "../../types/profile";

describe("getProfileValidateErrors", () => {
  test("should return list of errors if provided with state with non-empty validate", () => {
    const validateErrors: ValidateProfileError[] = [
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_COUNTRY,
    ];

    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors,
      },
    };

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(
      validateErrors,
    );
  });

  test("should return undefined if provided with an empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileValidateErrors(state as StateSchema)).toBeUndefined();
  });
});
