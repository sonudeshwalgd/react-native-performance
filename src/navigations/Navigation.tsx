import {NavigationContainer} from '@react-navigation/native';
import {StackContainerUnauthorized} from './Stack';
import React, {useEffect} from 'react';

export default function Navigation() {
  return (
    <>
      <NavigationContainer>
        <StackContainerUnauthorized />
      </NavigationContainer>
    </>
  );
}
