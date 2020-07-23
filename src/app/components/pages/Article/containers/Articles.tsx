import React from 'react';
import {View, StyleSheet} from 'react-native';
import Article from '../components/Article/Article';
import {useArticleContext} from '../context/articleContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

const Articles: React.SFC<{}> = () => {
  const {articles} = useArticleContext();

  return (
    <View style={styles.container}>
      {articles.map((a) => {
        return <Article key={a.id} article={a} />;
      })}
    </View>
  );
};

export default Articles;
