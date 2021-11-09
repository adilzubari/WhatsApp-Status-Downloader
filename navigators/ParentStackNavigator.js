import * as React from 'react';
import { Button, View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as FileSystem from "expo-file-system";
import { createStackNavigator } from '@react-navigation/stack';
import { TopTabNavigator } from "../navigators/TopTabNavigator";
import { VirtualTabNavigator } from "../navigators/VirtualTabNavigator";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react/cjs/react.development';

import {SelectDevice} from '../components/Modals/SelectDevice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export function ParentStackNavigator(props) {

  const [ SelectDeviceModalVisibility, setSelectDeviceModalVisibility ] = useState(false);
  const [ SelectDeviceOptions, setSelectDeviceOptions ] = useState(null);

  async function ChangeSelectDeviceToThisId(Id) {
    var obj = SelectDeviceOptions;
    obj[0].selected = false;
    obj.length > 1 ? obj[1].selected = false : null;
    Id == 'SD1' ? obj[0].selected = true : obj[1].selected = true;
    setSelectDeviceOptions(obj);
    setSelectDeviceModalVisibility(false);
    setTimeout(() => {
      setSelectDeviceModalVisibility(true);
    }, 0);
    await AsyncStorage.setItem('SELECTED_DEVICE', Id);
  }

  if (SelectDeviceOptions == null) {
    console.log('entered');
    // Get Available Storage Device
    setTimeout(async () => {
      console.log('function called');
      await AsyncStorage.getItem('SELECTED_DEVICE').then(async (SELECTED_DEVICE) => {
        console.log('1 > SELECTED_DEVICE >', SELECTED_DEVICE);

        if (SELECTED_DEVICE == null) {
          SELECTED_DEVICE = 'SD1';
          await AsyncStorage.setItem('SELECTED_DEVICE', 'SD1').then(async () => {
            await FileSystem.readDirectoryAsync('file:///storage/').then(async (data) => {
              console.log(data);
              const TotalNumberOfStorageDevices = data.length / 2;
              const InternalStorageObject = {
                key: 'SD1',
                title: 'Internal Storage',
                selected: false
              };
              const SDCardObject = {
                key: 'SD2',
                title: 'SD Card',
                selected: false
              };
              SELECTED_DEVICE == 'SD1' ? InternalStorageObject.selected = true : SDCardObject.selected = true;
              setSelectDeviceOptions(TotalNumberOfStorageDevices == 1 ? [ InternalStorageObject ] : [ InternalStorageObject, SDCardObject ] );
            });
          });
        } else {
          await FileSystem.readDirectoryAsync('file:///storage/').then(async (data) => {
            console.log(data);
            const TotalNumberOfStorageDevices = data.length / 2;
            const InternalStorageObject = {
              key: 'SD1',
              title: 'Internal Storage',
              selected: false
            };
            const SDCardObject = {
              key: 'SD2',
              title: 'SD Card',
              selected: false
            };
            SELECTED_DEVICE == 'SD1' ? InternalStorageObject.selected = true : SDCardObject.selected = true;
            setSelectDeviceOptions(TotalNumberOfStorageDevices == 1 ? [ InternalStorageObject ] : [ InternalStorageObject, SDCardObject ] );
          });
        }

      });
    }, 0);
    // Get Selected Device
  }

    return (
      <View style={styles.container}>
        
        <Stack.Navigator
          initialRouteName="WhatsAppAssistant"
          headerMode="screen"
        >
          <Stack.Screen name="WhatsAppAssistant" component={TopTabNavigator} initialParams={{ visible: SelectDeviceModalVisibility }}
            options={{
              headerTitleStyle: {
                color: 'white'
              },
              headerRight: () => ( 
                <TouchableOpacity activeOpacity={.6} onPress={() => setSelectDeviceModalVisibility(SelectDeviceModalVisibility?false:true)} >
                  <MaterialCommunityIcons name="dots-vertical" size={22} color="rgb(240,240,240)" style={{ padding: 10, opacity: SelectDeviceOptions == 'null' ? 0 : 1 }} />
                </TouchableOpacity>
              ),
              headerStyle: {
                backgroundColor: '#075E54',
                elevation:0
              },
              
            }} />
          <Stack.Screen name="VirtualTabNavigator" component={VirtualTabNavigator} options={{
              headerTitleStyle: {
                color: 'white'
              },
              headerStyle: {
                backgroundColor: '#075E54',
                elevation:0
              },
              headerShown: false
            }} />
        </Stack.Navigator>

        <SelectDevice
          Visibility={SelectDeviceModalVisibility} 
          setVisibility={(vals) => setSelectDeviceModalVisibility(vals)}
          Options={SelectDeviceOptions}
          ChangeSelectDeviceToThisId={(id) => ChangeSelectDeviceToThisId(id)}
           />

      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});