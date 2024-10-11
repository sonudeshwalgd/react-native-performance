import axios from 'axios';
import {memo, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {fetchPosts} from '../../controller/postController';

interface inputProp {
  update: React.Dispatch<React.SetStateAction<number>>;
}

interface post {
  title?: string;
  body?: string;
  id?: string;
}
const PostList = ({update}: inputProp) => {
  console.log('Flatlist rerender');
  const [data, setData] = useState<post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true); // Flag to check if more data is available

  useEffect(() => {
    if (loading || !hasMore) return;
    setLoading(true);
    ToastAndroid.show('Fetching list', 3000);
    fetchPosts(page)
      .then(response => {
        if (response.length > 0) {
          setData((prevData: post[]) => [...prevData, ...response]);
        } else {
          setHasMore(false);
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        className="my-16 border-t-[1px] border-gray-400"
        onPress={() => update(item.id)}
        style={styles.item}>
        <Text>{item?.title}</Text>
        <Text>{item?.id}</Text>
      </TouchableOpacity>
    );
  };

  const keyExtractor = (item: any) => item.id;
  return (
    <>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" /> : null
        }
        initialNumToRender={10}
      />
    </>
  );
};

export default memo(PostList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
