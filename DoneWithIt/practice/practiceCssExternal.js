import React, { Component } from 'react';
import { View,Text, StyleSheet } from 'react-native';
import customStyle from './practiceCssCustom';

class practiceCss extends Component {
    render() {


        return (
            <div>
                <View>

                   <Text style={customStyle.red}>Bangladesh</Text>
                   
                </View>
            </div>
        );
    }
}

export default practiceCss;