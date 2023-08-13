import { useEffect, memo } from "react";
import { useTranslation } from "react-i18next";

import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Text, TextAlign } from "shared/ui/Text/Text";
import { useAppDispatch, useAppSelector } from "shared/lib/hooks";
import { fetchArticleById } from "entities/Article/model/services/fetchArticleById/fetchArticleById";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetails";
import { classNames } from "shared/lib/classNames/classNames";

import cls from "./ArticleDetails.module.scss";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation("article-details");

  const dispatch = useAppDispatch();
  // const isLoading = useAppSelector(getArticleDetailsIsLoading);
  const isLoading = true;
  const article = useAppSelector(getArticleDetailsData);
  const error = useAppSelector(getArticleDetailsError);

  useEffect(() => {
    dispatch(fetchArticleById(id!));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <div>
        <Skeleton
          className={cls.avatar}
          width={200}
          height={200}
          border={"50%"}
        />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width={"100%"} height={200} />
        <Skeleton className={cls.skeleton} width={"100%"} height={200} />
      </div>
    );
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        title={t("Произошла ошибка при загрузкe статьи.")}
      />
    );
  } else {
    content = <div>{article?.title}</div>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
