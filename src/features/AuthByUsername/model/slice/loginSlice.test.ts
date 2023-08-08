import { loginAction, loginReducer } from "./loginSlice";
import { LoginSchema } from "../types/loginSchema";
import { loginByUsername } from "../service/loginByUsername/loginByUsername";

describe("loginSlice", () => {
  test("should set username on setUsername action", () => {
    const state: DeepPartial<LoginSchema> = {
      username: "",
    };
    const action = {
      type: loginAction.setUsername,
      payload: "user",
    };

    expect(loginReducer(state as LoginSchema, action)).toEqual({
      username: "user",
    });
  });

  test("should set password on setPassord action", () => {
    const state: DeepPartial<LoginSchema> = {
      password: "",
    };
    const action = {
      type: loginAction.setPassword,
      payload: "password",
    };

    expect(loginReducer(state as LoginSchema, action)).toEqual({
      password: "password",
    });
  });

  describe("extraReducers", () => {
    test("should set error to undefined and isLoading to true on pending", () => {
      const state: DeepPartial<LoginSchema> = {
        password: "password",
        username: "user",
        error: "error",
        isLoading: false,
      };
      const action = {
        type: loginByUsername.pending,
      };

      expect(loginReducer(state as LoginSchema, action)).toEqual({
        password: "password",
        username: "user",
        error: undefined,
        isLoading: true,
      });
    });

    test("should set isLoading to false on fulfilled", () => {
      const state: DeepPartial<LoginSchema> = {
        password: "password",
        username: "user",
        error: undefined,
        isLoading: true,
      };
      const action = {
        type: loginByUsername.fulfilled,
      };

      expect(loginReducer(state as LoginSchema, action)).toEqual({
        password: "password",
        username: "user",
        isLoading: false,
      });
    });

    test("should set isLoading to false and error on rejected", () => {
      const state: DeepPartial<LoginSchema> = {
        error: undefined,
        isLoading: true,
      };
      const action = {
        type: loginByUsername.rejected,
        payload: "some error",
      };

      expect(loginReducer(state as LoginSchema, action)).toEqual({
        isLoading: false,
        error: "some error",
      });
    });
  });
});
