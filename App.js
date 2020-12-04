import React from 'react';
import { Text, View } from 'react-native';

//http://dev.sawasawa.com:8081/ivy/array.txt

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>{`Hi,\nSuch a nice surprise!`}</Text>
    </View>
  )
}
export default HelloWorldApp;