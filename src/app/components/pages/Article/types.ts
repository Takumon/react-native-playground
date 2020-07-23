import React from 'raect';

export type ArticleType = {
  id: number;
  title: string;
  body: string;
};

export type ArticlesType = ArticleType[];

export type DraftArticleType = {
  title: string;
  body: string;
};

export type ArticleContextType = {
  articles: ArticlesType;
  saveArticle: (articles: DraftArticleType) => void;
};
