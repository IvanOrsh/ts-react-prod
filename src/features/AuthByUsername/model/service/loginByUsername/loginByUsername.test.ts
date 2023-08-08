import { loginByUsername } from "./loginByUsername";
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

const url = "/login";

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
    const thunk = new TestAsyncThunk(loginByUsername);

    thunk.api.post.mockReturnValue(
      Promise.resolve({
        data: responseData,
      }),
    );

    const result = await thunk.callThunk(authData);

    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(responseData),
    );
    expect(thunk.api.post).toHaveBeenCalledWith(url, authData);
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

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve(responseData));

    const result = await thunk.callThunk(authData);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalledWith(url, authData);
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("error");
  });
});
