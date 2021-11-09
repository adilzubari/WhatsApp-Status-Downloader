import * as React from "react";
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CoronaWarning() {
    return (
        <View style={{
            flexDirection: 'row',
            flex: 1,
            alignSelf: 'center',
            width: '96%',
          //   height: 80,
            paddingVertical: 20,
            marginVertical: 10,
            backgroundColor: 'rgba(7, 94, 84, .1)',
            borderRadius: 3,
            justifyContent: 'space-between'
        }}>
            <View>
                <MaterialCommunityIcons name="virus" size={40} color="#075E54" style={{
                    marginHorizontal: 10
                }} />
            </View>
            <View>
                <Text style={{
                    fontSize: 12,
                    color: 'rgba(7, 94, 84, .5)',
                    lineHeight: 20,
                    fontWeight:'bold',
                    textAlign: 'center'
                }} >It's not over yet</Text>
                <Text style={{
                    fontSize: 12,
                    color: 'rgba(7, 94, 84, .8)',
                    lineHeight: 20,
                    fontWeight:'bold',
                    textAlign: 'center'
                }} >Stay Vaccinated, Stay Safe!!</Text>
            </View>
            <View>
                <MaterialCommunityIcons name="virus" size={40} color="#075E54" style={{
                    marginHorizontal: 10
                }} />
            </View>
        </View>
    );
}