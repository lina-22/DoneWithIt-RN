import React, { Component } from 'react';
import { View,Text,Button,Alert } from 'react-native';

class Button extends Component {
    alertMe=()=>{
            Alert.alert("Hello")
    }
    
    render() {
        return (
         <View>
            <Button onPress={this.alertMe} color="green" title="save"/>
         </View>
        );
    }
}

export default Button;