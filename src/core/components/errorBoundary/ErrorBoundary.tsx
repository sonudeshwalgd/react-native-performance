import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native';

const CustomErrorFallback = (props: any) => {
  return (
    <View className="items-center justify-center h-full bg-white px-8">
      <View className="pl-12"></View>
      <View className="items-center ">
        <Text className="text-2xl font-interM "> {'Something Went Wrong'}</Text>
        <Text className="text-base font-interR text-center whitespace-pre-wrap">
          {
            'Its looks like something not expected happen, please try after some time.'
          }
        </Text>
      </View>

      <Button title={'tryAgain'} onPress={props.resetError} />
    </View>
  );
};

export default CustomErrorFallback;

export const customErrorHandler = (error: any, stackTrace: any) => {};
