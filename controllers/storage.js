import * as React from 'react';
import * as FileSystem from "expo-file-system";
import * as VideoThumbnails from 'expo-video-thumbnails';
import { Image } from 'react-native';
import * as MediaLibrary from 'expo-media-library';

var StatusesBasePath = null;
var MediaLibraryPermission = null;

export async function getStatusesArray(path) {

    MediaLibraryPermission = (await MediaLibrary.getPermissionsAsync()).granted; // checking if permission granted or not
    if (!MediaLibraryPermission) MediaLibraryPermission = (await MediaLibrary.requestPermissionsAsync()).granted; // requesting permission from user

    StatusesBasePath = path;
    return await FileSystem.readDirectoryAsync(path).then(async (data) => {
        // console.log(data);
        return await PopulateStatusesArrayWithInfo(data);
    });
}

async function PopulateStatusesArrayWithInfo(data) {
    var statuses = [];
    for (const entity of data) {
        if (entity != '.nomedia') { // avoiding .nomedia

            var obj = await GetFileInfo(StatusesBasePath+entity);
            obj.name = entity;
            obj.type = entity.split('.').pop();
            obj.thumbnail = await GenerateVideoThumbnail(StatusesBasePath+entity);
            obj.height = null; // will be calculated in the main function
            obj.width = null; // will be calculated in the main function
            await Image.getSize(
                obj.type=='mp4'?obj.thumbnail:obj.uri,
                (width, height) => {
                    obj.width = width;
                    obj.height = height;
                }
            );

            statuses.push(obj);
            // console.log(obj);

        }
    }
    
    return statuses;
}

async function GetFileInfo(path) {
    return await FileSystem.getInfoAsync(path);
}

async function GenerateVideoThumbnail(path) {
    if (path.split('.').pop()!='mp4') return null;
    return await VideoThumbnails.getThumbnailAsync(
        path,
        {
          time: 1000,
        }
      ).then((obj) => {
          return obj.uri;
      });
}