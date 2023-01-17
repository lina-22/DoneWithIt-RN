import React, { Component } from 'react';
import { View,Text, StyleSheet } from 'react-native';
import customStyle from './practiceCssCustom';

class practiceCssExternal extends Component {
    render() {


        return (
          
                <View>

                   <Text style={customStyle.red}>Bangladesh</Text>
                   
                </View>
          
        );
    }
}

export default practiceCssExternal;