import { StateSchema } from "app/providers/StoreProvider";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "./articleDetails";

describe("articleDetails", () => {
  describe("getArticleDetailsData", () => {
    test("should get articleDetails data filed", () => {
      const data = {
        id: "1",
        title: "Title",
      };
      const state: DeepPartial<StateSchema> = {
        articleDetails: {
          data,
        },
      };

      expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });

    test("should return undefined if provided with an empty state", () => {
      const state: DeepPartial<StateSchema> = {};

      expect(getArticleDetailsData(state as StateSchema)).toBeUndefined();
    });
  });

  describe("getArticleDetailsError", () => {
    test("should get articleDetails error field", () => {
      const state: DeepPartial<StateSchema> = {
        articleDetails: {
          error: "error",
        },
      };

      expect(getArticleDetailsError(state as StateSchema)).toBe("error");
    });

    test("should return undefined if provided with an empty state", () => {
      const state: DeepPartial<StateSchema> = {};

      expect(getArticleDetailsError(state as StateSchema)).toBeUndefined();
    });
  });

  describe("getArticleDetailsIsLoading", () => {
    test("should get articleDetails isLoading field", () => {
      const state: DeepPartial<StateSchema> = {
        articleDetails: {
          isLoading: true,
        },
      };

      expect(getArticleDetailsIsLoading(state as StateSchema)).toBeTruthy();
    });

    test("should return undefined if provided with an empty state", () => {
      const state: DeepPartial<StateSchema> = {};

      expect(getArticleDetailsIsLoading(state as StateSchema)).toBeUndefined();
    });
  });
});
