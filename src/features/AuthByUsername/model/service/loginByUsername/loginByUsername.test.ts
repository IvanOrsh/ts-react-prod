import axios from "axios";

import { loginByUsername } from "./loginByUsername";
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, { shallow: false });

const url = "http://localhost:8000/login";

describe("loginByUsername", () => {
  test("should return response data on success", async () => {
    const authData = {
      username: "user",
      password: "password",
    };
    const responseData = {
      id: "1",
      username: "user",
    };
    mockedAxios.post.mockReturnValue(
      Promise.resolve({
        data: responseData,
      }),
    );
    const thunk = new TestAsyncThunk(loginByUsername);

    const result = await thunk.callThunk(authData);

    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(responseData),
    );
    expect(mockedAxios.post).toHaveBeenCalledWith(url, authData);
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toBe(responseData);
  });

  test("should return error (rejected) on failed request", async () => {
    const authData = {
      username: "user",
      password: "password",
    };
    const responseData = {
      status: 404,
    };
    mockedAxios.post.mockReturnValue(Promise.reject(responseData));
    const thunk = new TestAsyncThunk(loginByUsername);

    const result = await thunk.callThunk(authData);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalledWith(url, authData);
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("error");
  });
});
