import {Text, View} from 'react-native';
import React, {memo, useState} from 'react';
import Button from '../../core/components/button/Button';
const IncrementDecrement = () => {
  console.log('IncrementDecrement component rerender');
  const [value, setValue] = useState<number>(0);

  const increment = () => {
    setValue((val: number) => val + 1);
  };
  const decrement = () => {
    setValue((val: number) => val - 1);
  };

  return (
    <View className="flex-row  ">
      <Button onPress={decrement} title="Decrement" />
      <Text className="flex-1 text-4xl text-center">{value}</Text>
      <Button onPress={increment} title="Increment" />
    </View>
  );
};

export default memo(IncrementDecrement);
