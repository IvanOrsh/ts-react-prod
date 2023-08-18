import {
  addCommentFormActions,
  addCommentFormReducer,
} from "./addCommentFormSlice";
import { AddCommentFormSchema } from "../types/addCommentFormSchema";

describe("loginSlice", () => {
  test("should set text on setText action", () => {
    const state: DeepPartial<AddCommentFormSchema> = {
      text: "",
    };
    const action = {
      type: addCommentFormActions.setText,
      payload: "some_text",
    };

    expect(
      addCommentFormReducer(state as AddCommentFormSchema, action),
    ).toEqual({
      text: "some_text",
    });
  });
});
