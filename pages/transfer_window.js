import * as React from 'react';
import { Button, View, Image, Text, StyleSheet, Dimensions, TouchableOpacity, ToastAndroid } from 'react-native';
import Constants from 'expo-constants';
import { Entypo, Fontisto, Ionicons } from '@expo/vector-icons';
import * as Sharing from 'expo-sharing'; 
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';

function SwitchFromShareInterfaceToDownloadInterface() {
}
async function ShareMedia(MediaPath) {
  await Sharing.shareAsync(MediaPath);
}

function GetAdPreLoadingInterface() {
  return <View style={styles.AdPreLoadingInterface}></View>;
}
function GetShareMediaInterface(MediaPath) {
  return (
    <View style={styles.ShareMediaInterface}>
      <Text style={styles.ShareTitle}>Share Your Status</Text>
      <View style={styles.ShareIconsContainer} >

        <TouchableOpacity activeOpacity={.5} >
          <View style={styles.ShareIcon} >
            <Entypo name="download" size={24} color="rgb(50,50,50)" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={.5} >
          <View style={styles.ShareIcon} >
            <Fontisto name="whatsapp" size={24} color="#075E54" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={.5} >
          <View style={styles.ShareIcon} >
            <Ionicons name="mail" size={24} color="rgb(255,95,73)" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={.5} onPress={() => ShareMedia(MediaPath)} >
          <View style={styles.ShareIcon} >
            <Entypo name="dots-three-vertical" size={24} color="rgb(50,50,50)" />
          </View>
        </TouchableOpacity>

      </View>
    </View>
  );
}
function GetTransferMediaInterface() {
  return (
    <View style={styles.ShareMediaInterface}>
      <Text style={styles.ShareTitle}>Transfering Your Status</Text>
      <View style={styles.ShareIconsContainer} >

        <Image source={require('../assets/LoadingIcon.gif')} style={styles.TransferLoader} />

      </View>
    </View>
  );
}

function GetInterfaceAccordingToWindowMode(WindowMode, MediaPath) {
  switch (WindowMode) {
    case 'AdPreLoading':
      return GetAdPreLoadingInterface();
      break;
    case 'ShareMedia':
      return GetShareMediaInterface(MediaPath);
      break;
    case 'TransferMedia':
      return GetTransferMediaInterface();
      break;
    default:
      return <View></View>;
      break;
  }
}

export function TransferWindow(props) {

  // console.log(props);

  const WindowMode = props.route.params.WindowMode;
  const MediaPath = props.route.params.MediaPath;
  // console.log('TransferWindowMode :', WindowMode);

  // Set global test device ID
  // await setTestDeviceIDAsync('EMULATOR');
  if (WindowMode == 'TransferMedia') {
    setTimeout(() => {
      props.navigation.popToTop();
      ToastAndroid.show('Your status is ready', ToastAndroid.SHORT);
    }, 10000);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      {(() => { return GetInterfaceAccordingToWindowMode(WindowMode, MediaPath) })()}
      <View style={styles.AdConatiner} >
        <View></View>
        <Text style={styles.AdTitle}>Advertisment</Text>
        <AdMobBanner
          bannerSize="mediumRectangle"
          adUnitID="ca-app-pub-3940256099942544/6300978111" />
        <View></View>
        <View></View>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  AdPreLoadingInterface: {
    backgroundColor:'black',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },





  ShareMediaInterface: {
    paddingTop: Constants.statusBarHeight,
    width: '100%'
  },
  ShareTitle: {
    alignSelf:'center',
    fontSize: 18,
    marginTop: 16,
    color: '#075E54',
    fontWeight: 'bold'
  },
  ShareIconsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginVertical: 20,
    paddingHorizontal: '10%'
  },
  ShareIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems:'center',
    borderWidth: 2,
    borderColor: '#075E54',
  },












  TransferMediaInterface: {},
  TransferLoader: {
    width:60,
    height:60
  },







  AdConatiner: {
    flex:1,
    justifyContent: 'space-around'
  },
  AdTitle: {
    alignSelf:'center',
    color: 'rgb(160,160,160)'
  },
});