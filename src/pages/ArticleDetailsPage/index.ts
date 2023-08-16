export { ArticleDetailsPageAsync as ArticleDetailsPage } from "./ui/ArticleDetailsPage/ArticleDetailsPage.async";

export { ArticleDetailsCommentsSchema } from "./model/types/ArticleDetailsCommentsSchema";

export {
  articleDetailsCommentsActions,
  articleDetailsCommentsReducer,
  articleDetailsCommentsSlice,
  getArticleComments,
} from "./model/slices/articleDetailsCommentsSlice";
