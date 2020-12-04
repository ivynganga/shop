import React, { Component } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import home from './home'


export default class splash extends Component {
    constructor(props) {
        super();
    }
  
    render() {


        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#ffffff'
                }}
            >
                <LottieView
                    source = {require('../assets/images/loading.json')}
                    autoPlay
                    loop = {false}
                    speed = {0.5}
                    onAnimationFinish={() => {
                        console.log('Animation Finished!')
                        //this.props.navigation.replace('home');
                        this.props.navigation.navigate('home');

                    }}
                />
            </View>
        )
    }
}
