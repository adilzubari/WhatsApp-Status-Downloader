import * as React from 'react';
import { Button, View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import * as FileSystem from "expo-file-system";
import { useState } from 'react/cjs/react.development';
import * as VideoThumbnails from 'expo-video-thumbnails';
import { Entypo } from '@expo/vector-icons';
import { StorageAccessFramework } from 'expo-file-system';
// controllers
import { getStatusesArray } from "../controllers/storage";
import { LoadingStatuses, StatusesWindow } from "../components/statuses";
import { getStatusThumbnailWidth, getScreenPadding, ChooseGrid, GetThumbnailRelativeHeight } from "../controllers/status_view";


import { GetStatusDirectoryURL } from "../controllers/StatusDirectoryURL";

var loaded = false;

export function Statuses(props) {

    const path = 'file:///storage/emulated/0/WhatsApp/Media/.Statuses/';
    // const path2 = 'file:///storage/emulated/0/WhatsApp/Media/.Statuses/';
    
    const [files, setFiles] = useState(null);
    
    // async function LoadStatusScreen() {
    if ( !loaded )
      setTimeout(async () => {
        // async function LoadStatusScreen() {
          loaded = true; // Avoid re-rendering
          // console.log(GetStatusDirectoryURL());
          // var arr = ;
          // setFiles( [ ...(await getStatusesArray(path)) , ...(await getStatusesArray(path2)) ] );
          // console.log(await FileSystem.getInfoAsync('file:///storage/sdcard0/'));
          // (await FileSystem.getInfoAsync(path)).exists ? setFiles(await getStatusesArray(path)) : null ;
          // (await FileSystem.getInfoAsync(path2)).exists ? setFiles([ ...files, ...(await getStatusesArray(path2)) ]) : null ;
          setFiles(await getStatusesArray(path));
          // await FileSystem.readDirectoryAsync('file:///storage/sdcard0/').then(async (data) => {
          //   console.log(data);
          // });
          // const permissions = await StorageAccessFramework.requestDirectoryPermissionsAsync();

          // if (permissions.granted) {
          //   // Gets SAF URI from response
          //   const uri = permissions.directoryUri;
          
          //   // Gets all files inside of selected directory
          //   const files = await StorageAccessFramework.readDirectoryAsync(uri);
          //   alert(`Files inside ${uri}:\n\n${JSON.stringify(files)}`);
          // }
          // await FileSystem.readDirectoryAsync('content://com.android.externalstorage.documents/tree/emulated/').then(async (data) => {
          //   console.log('1', data);
          // });
          // await FileSystem.readDirectoryAsync('file:///storage/B5E6-1B15/').then(async (data) => {
          //   console.log('2', data);
          // });
          // console.log('->');
          // console.log('->', files);
        // }
      }, 1000);

    // if (!loaded) LoadStatusScreen();

    if ( !loaded )
      return LoadingStatuses();
    else if ( loaded )
      return StatusesWindow(files, props);


    // return (
    //   <ScrollView style={[styles.ScrollContainer, { paddingHorizontal: getScreenPadding() }]}>
    //     <View style={styles.Container}>
    //       {(() => {

    //         if ( !loaded )
    //           return LoadingStatuses();
    //         else if ( loaded )
    //           return StatusesWindow(files);

    //       })()}
    //     </View>
    //   </ScrollView>
    // );
}

const styles = StyleSheet.create({
  ScrollContainer:{
    flex: 1,
    backgroundColor:'blue'
  },
  Container: {
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'red',
    flex:1,
    height: '100%'
  }
});