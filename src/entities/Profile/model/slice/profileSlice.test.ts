import { profileActions, profileReducer } from "./profileSlice";
import { ProfileSchema, ValidateProfileError } from "../types/profile";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";

describe("profileSlice", () => {
  describe("reducers", () => {
    test("should set readonly on setReadonly action", () => {
      const state: DeepPartial<ProfileSchema> = {
        readonly: false,
      };
      const action = {
        type: profileActions.setReadonly,
        payload: true,
      };

      expect(profileReducer(state as ProfileSchema, action)).toEqual({
        readonly: true,
      });
    });

    test("should set readonly to true, form to data and validateErrors to undefined on cancelEdit action", () => {
      const state: DeepPartial<ProfileSchema> = {
        readonly: false,
        form: {
          firstName: "Abdul",
        },
        data: {
          firstName: "Larry",
        },
        validateErrors: [ValidateProfileError.INCORRECT_COUNTRY],
      };
      const action = {
        type: profileActions.cancelEdit,
      };

      expect(profileReducer(state as ProfileSchema, action)).toEqual({
        readonly: true,
        data: {
          firstName: "Larry",
        },
        form: {
          firstName: "Larry",
        },
        validateErrors: undefined,
      });
    });

    test("should set form to what was passed as a payload on updateProfile action", () => {
      const state: DeepPartial<ProfileSchema> = {
        form: {
          firstName: "",
          lastName: "",
          age: 17,
        },
      };
      const action = {
        type: profileActions.updateProfile,
        payload: {
          firstName: "Larry",
          lastName: "Abdul",
          age: 18,
        },
      };

      expect(profileReducer(state as ProfileSchema, action)).toEqual({
        form: {
          firstName: "Larry",
          lastName: "Abdul",
          age: 18,
        },
      });
    });
  });

  describe("extra reducers", () => {
    describe("updateProfileData service should set...", () => {
      test("on pending: isLoading -> true, validateErrors -> undefined", () => {
        const state: DeepPartial<ProfileSchema> = {
          isLoading: false,
          validateErrors: [ValidateProfileError.SERVER_ERROR],
        };

        const action = {
          type: updateProfileData.pending,
        };

        expect(profileReducer(state as ProfileSchema, action)).toEqual({
          isLoading: true,
          validateErrors: undefined,
        });
      });

      test("on fulfilled: isLoading -> false, data & form -> payload, readonly -> true, validateErrors -> undefined", () => {
        const state: DeepPartial<ProfileSchema> = {
          isLoading: true,
          data: {
            firstName: "Jerry",
            lastName: "Doe",
          },
          form: {
            firstName: "Jerry",
            lastName: "Doe",
          },
          validateErrors: [ValidateProfileError.SERVER_ERROR],
          readonly: false,
        };

        const payload = {
          firstName: "New Name",
          lastName: "New Last Name",
        };

        const action = {
          type: updateProfileData.fulfilled,
          payload,
        };

        expect(profileReducer(state as ProfileSchema, action)).toEqual({
          isLoading: false,
          validateErrors: undefined,
          data: payload,
          form: payload,
          readonly: true,
        });
      });

      test("on rejected: isLoading -> false, validateErrors -> payload", () => {
        const state: DeepPartial<ProfileSchema> = {
          isLoading: true,
          validateErrors: undefined,
        };

        const payload = [
          ValidateProfileError.INCORRECT_USER_DATA,
          ValidateProfileError.INCORRECT_COUNTRY,
        ];

        const action = {
          type: updateProfileData.rejected,
          payload,
        };

        expect(profileReducer(state as ProfileSchema, action)).toEqual({
          isLoading: false,
          validateErrors: payload,
        });
      });
    });

    describe("fetchProfileData service should set...", () => {
      test("on pending: isLoading -> true, error -> undefined", () => {
        const state: DeepPartial<ProfileSchema> = {
          isLoading: false,
          error: "error",
        };

        const action = {
          type: fetchProfileData.pending,
        };

        expect(profileReducer(state as ProfileSchema, action)).toEqual({
          isLoading: true,
          error: undefined,
        });
      });

      test("on fulfilled: isLoading -> false, data & form -> payload", () => {
        const state: DeepPartial<ProfileSchema> = {
          isLoading: true,
          data: {
            firstName: "Jerry",
            lastName: "Doe",
          },
          form: {
            firstName: "Jerry",
            lastName: "Doe",
          },
        };

        const payload = {
          firstName: "New Name",
          lastName: "New Last Name",
        };

        const action = {
          type: fetchProfileData.fulfilled,
          payload,
        };

        expect(profileReducer(state as ProfileSchema, action)).toEqual({
          isLoading: false,
          data: payload,
          form: payload,
        });
      });

      test("on rejected: isLoading -> false, error -> payload", () => {
        const state: DeepPartial<ProfileSchema> = {
          isLoading: true,
          error: undefined,
        };

        const action = {
          type: fetchProfileData.rejected,
          payload: "error",
        };

        expect(profileReducer(state as ProfileSchema, action)).toEqual({
          isLoading: false,
          error: "error",
        });
      });
    });
  });
});
