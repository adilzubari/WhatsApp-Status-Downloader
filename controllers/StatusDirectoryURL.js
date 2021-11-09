import * as React from 'react';
import * as FileSystem from "expo-file-system";

export async function GetStatusDirectoryURL() {

    return await FileSystem.readDirectoryAsync('file:///storage/').then(async (StorageDevices) => {

        var paths = [];

        console.log(StorageDevices);
        const TotalNumberOfStorageDevices = StorageDevices.length / 2;

        // Checking path in Internal Storage
        paths.push('file:///storage/emulated/0/WhatsApp/Media/.Statuses/');
        // await FileSystem.readDirectoryAsync('file:///storage/emulated/').then(async (InternalStorageFolders) => {

        //     console.log(InternalStorageFolders);
        //     if ( InternalStorageFolders.indexOf('WhatsApp') != -1 )
        //         paths.push('file:///storage/emulated/0/WhatsApp/Media/.Statuses/');

        // });

        // Checking paths other than Internal Storage
        if ( TotalNumberOfStorageDevices != 1 ) 
            for (let index = 0; index < StorageDevices.length-2; index+=2) {
                await FileSystem.readDirectoryAsync('file:///storage/'+StorageDevices[index]+'/').then(async (ExternalStorageFolders) => {

                    console.log(ExternalStorageFolders);
                    if ( ExternalStorageFolders.indexOf('WhatsApp') != -1 )
                        paths.push('file:///storage/'+StorageDevices[index]+'/WhatsApp/Media/.Statuses/');
        
                });
            }
        
        console.log(paths);
        return paths;

    });


    // file:///storage/emulated/0/WhatsApp/Media/.Statuses/

  // setFiles( [ ...(await getStatusesArray(path)) , ...(await getStatusesArray(path2)) ] );
//   console.log(await FileSystem.getInfoAsync('file:///storage/sdcard0/'));
  // (await FileSystem.getInfoAsync(path)).exists ? setFiles(await getStatusesArray(path)) : null ;
  // (await FileSystem.getInfoAsync(path2)).exists ? setFiles([ ...files, ...(await getStatusesArray(path2)) ]) : null ;
  // setFiles(await getStatusesArray(path));
  // await FileSystem.readDirectoryAsync('file:///storage/sdcard0/').then(async (data) => {
  //   console.log(data);
  // });
}