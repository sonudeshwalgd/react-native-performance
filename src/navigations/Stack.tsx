import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Posts from '../screen/unauthenticated/Posts';

export type RootStackParamList = {
  Posts: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();

export function StackContainerUnauthorized() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Posts">
        <Stack.Screen name="Posts" component={Posts} />
      </Stack.Navigator>
    </>
  );
}
