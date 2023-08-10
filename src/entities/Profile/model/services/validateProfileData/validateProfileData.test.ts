import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { Profile, ValidateProfileError } from "../../types/profile";
import { validateProfileData } from "./validateProfileData";

describe("validateProfileData", () => {
  const profile: DeepPartial<Profile> = {
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

  test("should return empty array if provided with valid profile", () => {
    const result = validateProfileData(profile);
    expect(result).toEqual([]);
  });

  test("should return an array with INCORRECT_USER_DATA error if provided with profile that is missing fist name", () => {
    const result = validateProfileData({
      ...profile,
      firstName: "",
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test("should return an array with INCORRECT_USER_DATA error if provided with profile that is missing last name", () => {
    const result = validateProfileData({
      ...profile,
      lastName: "",
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test("should return an array with INCORRECT_USER_DATA error if provided with profile that is missing both fist and last name", () => {
    const result = validateProfileData({
      ...profile,
      firstName: "",
      lastName: "",
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test("should return an array with INCORRECT_AGE error if provided with profile that has invalid age value", () => {
    const result = validateProfileData({
      ...profile,
      age: -18,
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test("should return an array with INCORRECT_COUNTRY if provided with profile that is missing country", () => {
    const result = validateProfileData({
      ...profile,
      country: undefined,
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test("should return an array of multiple errors if provided with empty profile", () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
