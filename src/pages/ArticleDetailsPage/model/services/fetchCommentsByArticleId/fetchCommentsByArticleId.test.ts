import { fetchCommentsByArticleId } from "./fetchCommentsByArticleId";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

describe("fetchCommentsByArticleId", () => {
  test("should return comments data on success", async () => {
    const responseData = [
      {
        id: "1",
        text: "some comment",
        articleId: "1",
        userId: "1",
        user: {
          id: "1",
          username: "admin",
          password: "123",
          role: "ADMIN",
        },
      },
      {
        id: "2",
        text: "some comment 2",
        articleId: "1",
        userId: "1",
        user: {
          id: "1",
          username: "admin",
          password: "123",
          role: "ADMIN",
        },
      },
    ];

    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);

    thunk.api.get.mockReturnValue(
      Promise.resolve({
        data: responseData,
      }),
    );

    const result = await thunk.callThunk("1");

    expect(thunk.api.get).toHaveBeenCalledTimes(1);
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(responseData);
  });

  test("should return error (rejected) on failed request", async () => {
    const responseData = {
      status: 403,
    };

    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    thunk.api.get.mockReturnValue(Promise.reject(responseData));

    const result = await thunk.callThunk("1");

    expect(thunk.api.get).toHaveBeenCalledTimes(1);
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("error");
  });
});
