import * as React from 'react';
import { Button, View, Image, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SelectDevice } from "../components/Modals/SelectDevice";
import {ParentStackNavigator} from './ParentStackNavigator';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

export function RootNavigator() {
    return (
      <Stack.Navigator
        initialRouteName="ParentStackNavigator"
        headerMode="screen"
      >
        <Stack.Screen name="ParentStackNavigator" component={ParentStackNavigator} options={{
            headerShown: false
          }} />
        <Stack.Screen name="SelectDeviceModal" component={SelectDevice} options={{
            headerShown: false
          }} />
      </Stack.Navigator>
    );
}