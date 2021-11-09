import * as React from 'react';
import { Button, View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
// controllers
import { getStatusThumbnailWidth, getScreenPadding, ChooseGrid, GetThumbnailRelativeHeight } from "../controllers/status_view";
// Components
import CoronaWarning from "../components/CoronaWarningStatusTab";
import StatusTabBottomAd from "../components/Ads/StatusTabBottomAd";


export function LoadingStatuses() {
    return <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
    }}>
        <Image
            source={require('../assets/LoadingIcon.gif')}
            style={{
                width: 50,
                height: 50
            }}
            />
    </View>
}

export function StatusesWindow(files, props) {
    return (
        <ScrollView style={[styles.ScrollContainer, { paddingHorizontal: getScreenPadding() }]}>
          
          {/* <CoronaWarning /> */}

          <View style={styles.Container}>
            {(() => {
    
                if (files == null) return;
                var grid1 = [];
                var grid2 = [];
                var Images = [];

                files.forEach(file => {
                {/* if(file.type=='mp4') return; */}
                
                const GridSelection = ChooseGrid(file);
                const DimensionObject = {
                    actual_height: file.height,
                    actual_width: file.width,
                    current_width: getStatusThumbnailWidth()
                };
                {/* console.log('in', GridSelection); */}

                if(GridSelection==1) {
                    grid1.push(
                    <TouchableOpacity activeOpacity={.5} key={file.name} onPress={() => props.navigation.navigate('VirtualTabNavigator', {
                        screen: 'WhatsAppStatusPreviewStackNavigator',
                        params: {
                        screen: 'WhatsAppStatusPreview',
                        params: file
                        }
                    })} >
                        <View
                        style={[styles.image, {
                            width: getStatusThumbnailWidth(),
                            marginTop: getScreenPadding(),
                            height: GetThumbnailRelativeHeight(DimensionObject)
                            }]}
                        >
                            <Image
                                style={{
                                width: '100%',
                                height: '100%'
                                }}
                                source={{uri: file.uri}}
                                />
                            <View style={styles.ThumbnailCover}>
                            <Entypo name="image" size={24} color="black" />
                            </View>
                        </View>
                    </TouchableOpacity>
                    );
                }
                else if(GridSelection==2) {
                    grid2.push(
                    <TouchableOpacity activeOpacity={.5} key={file.name} onPress={() => props.navigation.navigate('VirtualTabNavigator', {
                        screen: 'WhatsAppStatusPreviewStackNavigator',
                        params: {
                        screen: 'WhatsAppStatusPreview',
                        params: file
                        }
                    })} >
                        <View
                        style={[styles.image, {
                            width: getStatusThumbnailWidth(),
                            marginTop: getScreenPadding(),
                            height: GetThumbnailRelativeHeight(DimensionObject)
                            }]}
                        >
                            <Image
                                style={{
                                width: '100%',
                                height: '100%'
                                }}
                                source={{uri: file.uri}}
                                />
                        </View>
                    </TouchableOpacity>
                    );
                }
                });

                Images.push(<View key={0} style={{backgroundColor:'rgba(0,0,0,0)'}}>{grid1}</View>);
                Images.push(<View key={1} style={{backgroundColor:'rgba(0,0,0,0)'}}>{grid2}</View>);
                
                return Images;

            })()}
          </View>

          <StatusTabBottomAd />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
  ScrollContainer:{
    flex: 1
  },
  Container: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
  image:{
    borderRadius: 4,
    // shadowColor: 'red',
    // shadowOffset: { width: 10, height: 10 },
    // shadowOpacity: 1,
    // shadowRadius: 5,
    elevation: 3,
    overflow: 'hidden'
  },
  ThumbnailCover: {
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor:'red'
  }
});