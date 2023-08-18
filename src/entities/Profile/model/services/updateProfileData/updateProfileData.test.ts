import { StateSchema } from "app/providers/StoreProvider";
import { updateProfileData } from "./updateProfileData";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { ValidateProfileError } from "../../types/profile";

describe("updateProfileData", () => {
  const data = {
    id: "1",
    firstName: "Larry",
    lastName: "The Abdul",
    age: 35,
    currency: Currency.EUR,
    country: Country.Belarus,
    city: "Salem",
    username: "admin",
    avatar:
      "https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  };

  const state: DeepPartial<StateSchema> = {
    profile: {
      form: data,
    },
  };

  test("should return profile data on success", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, state);

    thunk.api.put.mockReturnValue(
      Promise.resolve({
        data,
      }),
    );

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalledWith("/profile/1", data);
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("should return an array with SERVER_ERROR on failed request", async () => {
    const responseData = {
      status: 403,
    };

    const thunk = new TestAsyncThunk(updateProfileData, state);
    thunk.api.put.mockReturnValue(Promise.resolve(responseData));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalledTimes(1);
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test("should return an array with some client error if validation failed", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: {
          ...data,
          lastName: "",
        },
      },
    });
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalledTimes(0);
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
});
