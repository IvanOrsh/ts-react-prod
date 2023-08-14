import { fetchArticleById } from "./fetchArticleById";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

describe("fetchArticleById", () => {
  test("should return article data on success", async () => {
    const responseData = {
      id: "1",
      title: "Javascript news",
      subtitle: "Что нового в JS за 2022 год?",
      img: "https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/38a9cafe-c53e-47f2-f431-428120462000/public",
      views: 1022,
      createdAt: "26.02.2022",
      type: ["IT"],
      blocks: [],
    };

    const thunk = new TestAsyncThunk(fetchArticleById);

    thunk.api.get.mockReturnValue(
      Promise.resolve({
        data: responseData,
      }),
    );

    const articleId = "1";

    const result = await thunk.callThunk(articleId);

    expect(thunk.api.get).toHaveBeenCalledWith(`/articles/${articleId}`);
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(responseData);
  });

  test("should return error (rejected) on failed request", async () => {
    const responseData = {
      status: 403,
    };

    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve(responseData));

    const articleId = "1";

    const result = await thunk.callThunk(articleId);

    expect(thunk.api.get).toHaveBeenCalledTimes(1);
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("error");
  });
});
