import * as React from 'react';
import { useState } from 'react';
import { Button, View, Image, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { Entity } from "../components/media/Entity";

export function Media() {

  const [TransferedMedia, setTransferedMedia] = useState([]);
    return (
      <View style={styles.container}>

      <FlatList  numColumns={3} style={{ marginLeft: Dimensions.get('window').width*.01, marginBottom: Dimensions.get('window').width*.01 }}
          data={[  
              {key: 'Android'},{key: 'iOS'}, {key: 'Java'},{key: 'Swift'},
              {key: 'And2roid'},{key: 'i4OS'}, {key: 'Jav5a'}
          ]}  
          renderItem={({item}) => <Entity /> }  

      />

      </View>
    );
}

const styles = StyleSheet.create({
  'container': {
    flex: 1,
    // alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  'FlatListContainer': {
    alignItems: 'center'
  }
});