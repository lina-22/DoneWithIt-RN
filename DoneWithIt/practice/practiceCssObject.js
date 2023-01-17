import React, { Component } from 'react';
import { View,Text, StyleSheet } from 'react-native';

class practiceCss extends Component {
    render() {

      const myStyle = StyleSheet.create({
        red:{
            fontSize:60,
            color:'red'
        },

        green:{
            fontSize: 70,
            color: 'green'
        }

       })

        return (
            <div>
                <View>
                   <Text style={myStyle.red}>Bangladesh</Text> // object css
                </View>
            </div>
        );
    }
}

export default practiceCss;