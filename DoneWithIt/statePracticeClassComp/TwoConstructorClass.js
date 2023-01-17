import React, { Component } from 'react';
import { View, Text } from 'react-native';

class TwoConstructorClass extends Component {

    constructor(){
        super();

        this.state={
            name2 : "Lina",
            age2 : 30,
            city : Paris
        }
    }
    render() {
        return (
            <View>
                <Text>{this.state.name2}</Text>
            </View>
        );
    }
}

export default TwoConstructorClass;