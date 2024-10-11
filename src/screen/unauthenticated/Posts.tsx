import React, {memo, useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import PostDetails from './PostDetails';
import PostList from './PostList';
import IncrementDecrement from './IncrementDecrement';
import axios from 'axios';
import {fetchPostDetails} from '../../controller/postController';
const MyComponent = () => {
  const [activePost, setActivePost] = useState<number>(NaN);
  const activePostCheck = Number.isNaN(activePost);
  const [data, setData] = useState({
    title: '',
    body: '',
  });
  const postDetailDataCheck = data?.title || data?.body;

  useEffect(() => {
    if (!activePostCheck) {
      ToastAndroid.show('Fetching post detail', 3000);
      fetchPostDetails(activePost)
        .then(res => {
          setData(res);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [activePost]);

  const toClose = useCallback(() => {
    setData({
      title: '',
      body: '',
    });
    setActivePost(NaN);
  }, []);

  return (
    <View className="p-8">
      <IncrementDecrement />
      <PostList update={setActivePost} />

      {!activePostCheck && postDetailDataCheck && (
        <PostDetails toClose={toClose} data={data} />
      )}
    </View>
  );
};

export default MyComponent;
