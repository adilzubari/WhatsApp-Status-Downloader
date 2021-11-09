import * as React from 'react';
import { Button, View, Image, Text, StyleSheet, Modal } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// Pages
import { Statuses } from "../pages/statuses";
import { Media } from "../pages/media";


const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

export function TopTabNavigator() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'rgba(250,250,250,.5)',
          barStyle: { paddingBottom: 50 },
          style:{
            backgroundColor: '#075E54',
            borderTopColor: '#152238'
          },
          indicatorStyle:{
            backgroundColor:'white'
          }
        }}>
        <Stack.Screen name="Status" component={Statuses} />
        <Stack.Screen name="Media" component={Media} />
      </Tab.Navigator>
    );
}