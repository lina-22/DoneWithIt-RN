import React, { Component } from 'react';
import { View } from 'react-native';

class flag extends Component {
    render() {
        return (
            <View style={{flexDirection: 'row', height:'100%', width:'100%'}}>
            <View style={{backgroundColor:'blue', height:'100%', width:'100%'}}></View>
            <View style={{backgroundColor: 'red', height:'100%', width:'100%'}}></View>
            <View style={{backgroundColor: 'black', height:'100%', width:'100%'}}></View>

            </View>
        );
    }
}

export default flag;