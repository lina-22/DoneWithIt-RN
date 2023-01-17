import React, { Component } from 'react';
import { View,Text, StyleSheet } from 'react-native';

class practiceCssInline extends Component {
    render() {


        return (
            <div>
                <View>

                   <Text style={{color:'red', fontSize: 24}}>Bangladesh</Text> // inline css
                   
                </View>
            </div>
        );
    }
}

export default practiceCssInline;
