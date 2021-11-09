import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
// import * as Constants from "expo-constants";

export function Entity() {
    return (
        <View style={
            [
                styles.container,
                {
                    width: (Dimensions.get('window').width * .32),
                    height: (Dimensions.get('window').width * .32),
                    marginRight: Dimensions.get('window').width * .01,
                    marginTop: Dimensions.get('window').width * .01,
                }
            ]
        } >
            {/* ... */}
        </View>
    );
}

const styles = StyleSheet.create({
    'container': {
        backgroundColor: 'red'
    }
});