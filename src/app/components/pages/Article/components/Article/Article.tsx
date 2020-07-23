import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import type {ArticleType} from '../../context/articleContext';

type Props = {
  article: ArticleType;
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    flex: 1,
  },
});

const Article: React.SFC<Props> = ({article: {title, body}}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{body}</Text>
    </View>
  );
};

export default Article;
