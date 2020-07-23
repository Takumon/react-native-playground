import React, {useState, createContext, useContext, useCallback} from 'react';
import type {ArticlesType, ArticleType, DraftArticleType, ArticleContextType} from '../types';

const ArticleContext = createContext<ArticleContextType>({
  articles: [],
  saveArticle: (articles: DraftArticleType) => {
    console.log('default saveArticle', articles);
  },
});
export const useArticleContext: () => ArticleContextType = () => useContext(ArticleContext);

const initialArticles: ArticlesType = [
  {id: 1, title: 'post 1', body: 'Quisque cursus, metus vitae pharatra'},
  {id: 2, title: 'post 2', body: 'Quisque cursus, metus vitae pharatra'},
];

const ArticleProvider: React.SFC<{}> = ({children}) => {
  const [articles, setArticles] = useState(initialArticles);

  const saveArticle = useCallback((article: DraftArticleType) => {
    const newArticle: ArticleType = {
      id: Math.random(),
      ...article,
    };

    setArticles((currentArticles) => [...currentArticles, newArticle]);
  }, []);

  return <ArticleContext.Provider value={{articles, saveArticle}}>{children}</ArticleContext.Provider>;
};

export default ArticleProvider;
