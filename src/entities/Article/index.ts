export { ArticleDetails } from "./ui/ArticleDetails/ArticleDetails";
export { ArticleList } from "./ui/ArticleList/ArticleList";
export { Article, ArticleView } from "./model/types/article";
export { ArticleDetailsSchema } from "./model/types/articleDetailsSchema";
export {
  articleDetailsSlice,
  articleDetailsActions,
  articleDetailsReducer,
} from "./model/slice/articleDetailsSlice";
export {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "./model/selectors/articleDetails";
