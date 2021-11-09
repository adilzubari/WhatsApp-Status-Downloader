import * as React from 'react';
import { Button, View, Image, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// Navigators
import { WhatsAppStatusPreviewStackNavigator } from "../navigators/WhatsAppStatusPreviewStackNavigator";
// Pages
import { TransferWindow } from "../pages/transfer_window";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

export function VirtualTabNavigator(props) {
    // const StatusObj = props.route.params;
    // console.log('VirtualTabNavigator', StatusObj);
    return (
      <Tab.Navigator
        swipeEnabled={false}
        initialRouteName={'WhatsAppStatusPreviewStackNavigator'}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'rgba(250,250,250,.5)',
          barStyle: { paddingBottom: 50 },
          style:{
            display: 'none'
          },
          indicatorStyle:{
            backgroundColor:'white'
          }
        }}>
        <Stack.Screen name="WhatsAppStatusPreviewStackNavigator" component={WhatsAppStatusPreviewStackNavigator} />
        <Stack.Screen name="TransferWindow" component={TransferWindow} />
      </Tab.Navigator>
    );
}