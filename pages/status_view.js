import * as React from 'react';
import { Button, View, Image, Text, Dimensions, TouchableOpacity, useState } from 'react-native';
import { Video } from 'expo-av';
import { useIsFocused } from '@react-navigation/native';
import {TransferWindow} from './transfer_window';

// var AdPushTransition = false;
function PerformAdPushTransition(props) {
    // if ( !AdPushTransition ) {
        // false means Ad is not pushed for the first
        // Pushing the ad is important to save some extra time

        props.navigation.navigate('TransferWindow', {
            WindowMode: 'AdPreLoading'
        });
        props.navigation.goBack();

        // AdPushTransition = true;
    // }
}


function ImageComponent(Status) {
    return <Image source={{ uri: Status.uri }} resizeMode={'contain'} style={{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }} />
}

function VideoComponent(Status) {

    const isFocused = useIsFocused();
    const video = React.useRef(null);
    const [status, setStatus] = React.useState(null);

    if (!isFocused) video.current.pauseAsync();
    if (isFocused && status!=null && status.isPlaying==false) video.current.playAsync();

    return <TouchableOpacity
                onPressIn={() => video.current.pauseAsync()}
                onPressOut={() => video.current.playAsync()}
                activeOpacity={1}
            >
                <Video
                    ref={video}
                    style={{
                        width: Dimensions.get('window').width,
                        height: Dimensions.get('window').height,
                    }}
                    source={{ uri: Status.uri }}
                    useNativeControls={false}
                    resizeMode="contain"
                    isLooping
                    shouldPlay
                    onTouchStart={() => console.log('start')}
                    onTouchEnd={() => console.log('end')}
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
            </TouchableOpacity>
}

export function StatusView(props) {
    const Status = props.route.params;
    return (
        <View onLayout={() => PerformAdPushTransition(props)} style={{ flex: 1, alignItems: 'center', justifyContent:'center', backgroundColor: 'black' }}>
            {(() => Status.type=='mp4' ? VideoComponent(Status) : ImageComponent(Status) )()}
        </View>
    );
}