import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ParentStackNavigator } from "./navigators/ParentStackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <ParentStackNavigator />
    </NavigationContainer>
  );
}
