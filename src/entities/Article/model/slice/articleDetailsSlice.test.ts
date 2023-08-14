import { articleDetailsReducer } from "./articleDetailsSlice";
import { ArticleDetailsSchema } from "../types/articleDetailsSchema";
import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById";

describe("profileSlice", () => {
  describe("extra reducers", () => {
    describe("fetchArticleById service should set...", () => {
      test("on pending: isLoading -> true, error -> undefined", () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
          isLoading: false,
          error: "error",
        };

        const action = {
          type: fetchArticleById.pending,
        };

        expect(
          articleDetailsReducer(state as ArticleDetailsSchema, action),
        ).toEqual({
          isLoading: true,
          error: undefined,
        });
      });

      test("on fulfilled: isLoading -> false, data -> payload", () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
          isLoading: true,
        };

        const payload = {
          id: "1",
          title: "Javascript news",
          subtitle: "Что нового в JS за 2022 год?",
          img: "https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/38a9cafe-c53e-47f2-f431-428120462000/public",
          views: 1022,
          createdAt: "26.02.2022",
          type: ["IT"],
          blocks: [],
        };

        const action = {
          type: fetchArticleById.fulfilled,
          payload,
        };

        expect(
          articleDetailsReducer(state as ArticleDetailsSchema, action),
        ).toEqual({
          isLoading: false,
          data: action.payload,
        });
      });

      test("on rejected: isLoading -> false, error -> payload", () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
          isLoading: true,
          error: undefined,
        };

        const action = {
          type: fetchArticleById.rejected,
          payload: "error",
        };

        expect(
          articleDetailsReducer(state as ArticleDetailsSchema, action),
        ).toEqual({
          isLoading: false,
          error: "error",
        });
      });
    });
  });
});
