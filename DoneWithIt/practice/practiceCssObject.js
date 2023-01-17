import React, { Component } from 'react';
import { View,Text, StyleSheet } from 'react-native';

class practiceCssObject extends Component {
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
           
                <View>
                   <Text style={myStyle.red}>Bangladesh</Text> // object css
                </View>
            
        );
    }
}

export default practiceCssObject;