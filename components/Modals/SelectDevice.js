import * as React from 'react';
import { Button, View, Image, Text, TouchableWithoutFeedback , Modal, StyleSheet, Dimensions, FlatList, TouchableOpacity } from 'react-native';

function Option(item, ChangeSelectDeviceToThisId) {
    return (
        <TouchableOpacity activeOpacity={.6} onPress={() => ChangeSelectDeviceToThisId(item.key)} >
            <View style={OptionStyles.boxContainer} >
                <View style={OptionStyles.box1}>
                    <View style={[ OptionStyles.circleBoundary , { borderColor: item.selected ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,.3)' } ]}>
                        <View style={[OptionStyles.circleFilled, { display: item.selected ? 'flex' : 'none' }]} ></View>
                    </View>
                </View>
                <View style={OptionStyles.box2}>
                    <Text style={OptionStyles.title} >{item.title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const OptionStyles = StyleSheet.create({
    boxContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        // backgroundColor: 'red',
    },
    box1: {
        width: '20%'
    },
    box2: {
        width: '80%'
    },
    circleBoundary: {
        width: 20,
        height: 20,
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 10
    },
    circleFilled: {
        width: 12,
        height: 12,
        backgroundColor: '#075E54',
        borderRadius: 10,
        margin: 3
    },
    title: {
        fontSize: 16,
        lineHeight: 20,
        color: 'rgba(0,0,0,.8)'
    }
});

export function SelectDevice(props) {
    if (props.Visibility) {
        return (
            <View visible={false} style={[styles.Background, { width: Dimensions.get('window').width, height: Dimensions.get('window').height }]} >
                <Modal visible={props.Visibility} animationType={'slide'} hardwareAccelerated={true} transparent={true} onRequestClose={() => props.setVisibility(false)} >
                    <TouchableWithoutFeedback onPress={() => props.setVisibility(false)} >
                        <View style={styles.blank}></View>
                    </TouchableWithoutFeedback>
                    <View style={styles.container}>
                        <Text style={styles.ModalHeading} >Select Storage</Text>
                        <FlatList  numColumns={1}
                            data={props.Options} 
                            renderItem={({item}) => Option(item, props.ChangeSelectDeviceToThisId) }  
                        />
                    </View>
                </Modal>
            </View>
        );
    } else return <View></View>;
}

const styles = StyleSheet.create({
    Background: {
        backgroundColor: 'rgba(0,0,0,.5)',
        position: 'absolute',
        zIndex: 10
    },
    blank: {
        // backgroundColor:'red',
        flex: 10
    },
    container: {
        backgroundColor:'white',
        flex: 6,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    ModalHeading: {
        textAlign:'center',
        lineHeight: 50,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#075E54'
    }
})