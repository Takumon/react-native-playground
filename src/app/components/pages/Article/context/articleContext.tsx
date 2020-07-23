import React, {useReducer, createContext, useContext} from 'react';

// article
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

// article reducer
export enum ActionTypeType {
  'ADD_ARTICLE',
}

export type ActionType = {
  type: ActionTypeType;
  payload: DraftArticleType;
};

type ArticleReducerType = (state: ArticlesType, action: ActionType) => ArticlesType;

// article context
export type ArticleContextType = {
  state: ArticlesType;
  dispatch: React.Dispatch<ActionType>;
};

const reducer: ArticleReducerType = (state, action) => {
  switch (action.type) {
    case ActionTypeType.ADD_ARTICLE:
      return [
        ...state,
        {
          id: Math.random(),
          ...action.payload,
        },
      ];
    default:
      throw new Error(`Invalid action.type = ${action.type}`);
  }
};

const ArticleContext = createContext<ArticleContextType>({
  state: [],
  dispatch: (action) => {
    console.log('call dispatch', action);
  },
});
export const useArticleContext: () => ArticleContextType = () => useContext(ArticleContext);

const initialArticles: ArticlesType = [
  {id: 1, title: 'post 1', body: 'Quisque cursus, metus vitae pharatra'},
  {id: 2, title: 'post 2', body: 'Quisque cursus, metus vitae pharatra'},
];

const ArticleProvider: React.SFC<{}> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialArticles);

  return <ArticleContext.Provider value={{state, dispatch}}>{children}</ArticleContext.Provider>;
};

export default ArticleProvider;
