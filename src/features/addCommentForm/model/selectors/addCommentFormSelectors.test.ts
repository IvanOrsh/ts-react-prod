import {
  getAddCommentFormError,
  getAddCommentFormText,
} from "./addCommentFormSelectors";
import { StateSchema } from "app/providers/StoreProvider";

describe("addCommentFormSelectors", () => {
  describe("getAddCommentFormError", () => {
    test("should return error", () => {
      const state: DeepPartial<StateSchema> = {
        addCommentForm: {
          error: "error",
        },
      };

      expect(getAddCommentFormError(state as StateSchema)).toEqual("error");
    });
    test("should return undefined if provided state is empty", () => {
      const state: DeepPartial<StateSchema> = {};

      expect(getAddCommentFormError(state as StateSchema)).toBeUndefined();
    });
  });

  describe("getAddCommentFormText", () => {
    test("should return text", () => {
      const state: DeepPartial<StateSchema> = {
        addCommentForm: {
          text: "some_text",
        },
      };

      expect(getAddCommentFormText(state as StateSchema)).toEqual("some_text");
    });
    test("should return undefined if provided state is empty", () => {
      const state: DeepPartial<StateSchema> = {};

      expect(getAddCommentFormText(state as StateSchema)).toBeUndefined();
    });
  });
});
