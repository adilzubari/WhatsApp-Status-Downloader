import * as React from 'react';
import { Button, View, Image, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusView } from "../pages/status_view";
import { HeaderBackButton } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons';
import * as Sharing from 'expo-sharing'; 

const Stack = createStackNavigator();

async function ShareMedia(navigation, PathOfMedia) {
  // console.log('=>', PathOfMedia);
  // await Sharing.isAvailableAsync()    :: Checks if sharing is allowed on the device?
  // await Sharing.shareAsync(PathOfMedia);
  navigation.navigate('TransferWindow', {
    WindowMode: 'ShareMedia',
    MediaPath: PathOfMedia
  });
}
function TransferMedia(navigation, PathOfMedia) {
  navigation.navigate('TransferWindow', {
    WindowMode: 'TransferMedia',
    MediaPath: PathOfMedia
  });
}

export function WhatsAppStatusPreviewStackNavigator(props) {

    // console.log('WhatsAppStatusPreviewStackNavigator', props);
    const navigation = props.navigation;
    const __PATH = props.route.params.params.uri;

    return (
      <Stack.Navigator
        initialRouteName="WhatsAppStatusPreview"
        headerMode="screen"
      >
        <Stack.Screen name="WhatsAppStatusPreview" component={StatusView} StatusObj={props.StatusObj} options={{
            title: 'Status',
            headerTitleStyle: {
              color: 'white'
            },
            headerTransparent: true,
            headerLeft: (props) => (
                <HeaderBackButton
                    {...props}
                    tintColor={'white'}
                />
                ),
            headerRight: () => (
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity activeOpacity={0.6} onPress={() => ShareMedia(navigation, __PATH)} >
                      <Entypo name="share" size={24} color="white" style={{ paddingHorizontal: 15 }} />
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.6} onPress={() => TransferMedia(navigation, __PATH)} >
                      <Entypo name="download" size={24} color="white" style={{ paddingHorizontal: 15 }} />
                  </TouchableOpacity>
                </View>
            )
          }} />
      </Stack.Navigator>
    );
}