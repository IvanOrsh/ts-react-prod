import { fetchProfileData } from "./fetchProfileData";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

describe("fetchProfileData", () => {
  test("should return profile data on success", async () => {
    const responseData = {
      firstName: "Larry",
      lastName: "The Abdul",
      age: 35,
      currency: "EUR",
      country: "Belarus",
      city: "Salem",
      username: "admin",
      avatar:
        "https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    };

    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(
      Promise.resolve({
        data: responseData,
      }),
    );

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalledTimes(1);
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(responseData);
  });

  test("should return error (rejected) on failed request", async () => {
    const responseData = {
      status: 403,
    };

    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve(responseData));

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalledTimes(1);
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("error");
  });
});
