import React, {useState, useCallback} from 'react';
import {TextInput, Button, StyleSheet, View} from 'react-native';
import type {DraftArticleType} from '../../context/articleContext';
import {useArticleContext, ActionTypeType} from '../../context/articleContext';

const styles = StyleSheet.create({
  addArticle: {
    backgroundColor: '#afaf9f',
    marginVertical: 40,
    marginHorizontal: 20,
  },
  inputArea: {
    padding: 10,
    margin: 10,
    borderBottomColor: '#111',
    borderBottomWidth: 1,
  },
  buttonArea: {
    margin: 10,
  },
});

const initialDraftArticle: DraftArticleType = {
  title: '',
  body: '',
};

type Props = {};
const AddArticle: React.SFC<Props> = () => {
  const {dispatch} = useArticleContext();
  const [article, setArticle] = useState<DraftArticleType>(initialDraftArticle);

  const setTitle = useCallback((value: string) => {
    setArticle((a) => {
      return {
        ...a,
        ...{title: value},
      };
    });
  }, []);

  const setBody = useCallback((value: string) => {
    setArticle((a) => {
      return {
        ...a,
        ...{body: value},
      };
    });
  }, []);

  const addNewArticle = useCallback(() => {
    if (!article.title || !article.body) {
      return;
    }

    dispatch({
      type: ActionTypeType.ADD_ARTICLE,
      payload: article,
    });
    setArticle(initialDraftArticle);
  }, [article, dispatch]);

  return (
    <View style={styles.addArticle}>
      <View style={styles.inputArea}>
        <TextInput placeholder="title" onChangeText={setTitle} />
      </View>
      <View style={styles.inputArea}>
        <TextInput placeholder="body" onChangeText={setBody} />
      </View>
      <View style={styles.buttonArea}>
        <Button title="Add article" onPress={addNewArticle} />
      </View>
    </View>
  );
};

export default AddArticle;
