import React, { Component } from 'react';
import { View, Text } from 'react-native';



export default function home() {
  return (
    <View 
      style = {{
          flex: 1, 
          alignItems: 'center',
          justifyContent: 'center'
          }}>
      <Text>Home Screen</Text>
    </View>
  );
}

//export default home;
