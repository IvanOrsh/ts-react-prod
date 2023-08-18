import { addCommentForArticle } from "./addCommentForArticle";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { StateSchema } from "app/providers/StoreProvider";

describe("addCommentForArticle", () => {
  test("should return comments data on success", async () => {
    const commentText = "new comment";
    const articleId = "1";
    const userId = "2";

    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          id: userId,
          username: "user",
        },
      },
      articleDetails: {
        data: {
          id: articleId,
        },
      },
    };

    const responseData = {
      articleId,
      userId,
      text: commentText,
      id: "icPs8eM",
    };

    const thunk = new TestAsyncThunk(addCommentForArticle, state);

    thunk.api.post.mockReturnValue(
      Promise.resolve({
        data: responseData,
      }),
    );

    const result = await thunk.callThunk(commentText);

    expect(thunk.dispatch).toHaveBeenCalledTimes(3); // user, article, fetch
    expect(thunk.api.post).toHaveBeenCalledTimes(1);
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(responseData);
  });

  test("should return 'no data' (rejected) if user is not authenticated ", async () => {
    const commentText = "new comment";
    const articleId = "1";

    const state: DeepPartial<StateSchema> = {
      user: {
        authData: undefined,
      },
      articleDetails: {
        data: {
          id: articleId,
        },
      },
    };

    const thunk = new TestAsyncThunk(addCommentForArticle, state);

    const result = await thunk.callThunk(commentText);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2); // user, article
    expect(thunk.api.post).toHaveBeenCalledTimes(0);
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("no data");
  });

  test("should return 'no data' (rejected) if there is no article (which is strange)", async () => {
    const commentText = "new comment";
    const userId = "2";

    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          id: userId,
          username: "user",
        },
      },
    };

    const thunk = new TestAsyncThunk(addCommentForArticle, state);

    const result = await thunk.callThunk(commentText);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2); // user, article
    expect(thunk.api.post).toHaveBeenCalledTimes(0);
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("no data");
  });

  test("should return 'error' on failed request", async () => {
    const commentText = "new comment";
    const articleId = "1";
    const userId = "2";

    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          id: userId,
          username: "user",
        },
      },
      articleDetails: {
        data: {
          id: articleId,
        },
      },
    };

    const responseData = {
      status: 403,
    };

    const thunk = new TestAsyncThunk(addCommentForArticle, state);

    thunk.api.post.mockReturnValue(
      Promise.reject({
        data: responseData,
      }),
    );

    const result = await thunk.callThunk(commentText);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2); // user, article
    expect(thunk.api.post).toHaveBeenCalledTimes(1);
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual("error");
  });
});
