import React, {memo, useMemo} from 'react';
import {Text, View} from 'react-native';
import Button from '../../core/components/button/Button';

interface inputProp {
  data: {
    title: string;
    body: string;
  };
  toClose: () => void;
}

function PostDetails({data, toClose}: inputProp) {
  console.log('Post detail rerender');

  const heavyComputation: void = useMemo(() => {
    let i = 0;
    let startTime = new Date().getTime();
    while (i < 1000000) {
      i++;
    }
    let endTime = new Date().getTime();
    console.log('Heavy computation Time : ' + (+endTime - +startTime));
  }, [data.title]);

  return (
    <View className="absolute self-center justify-self-center top-40 p-4 rounded-xl bg-slate-600  border">
      <Text className="text-white text-2xl mb-4">{data?.title}</Text>
      <Text className="text-white text-base mb-4">{data?.body}</Text>
      <Button onPress={toClose} title="close modal" />
    </View>
  );
}

export default memo(PostDetails);
